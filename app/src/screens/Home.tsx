import { useState, useEffect } from 'react';
import {
  calculateLifePath,
  calculatePersonalYear,
  calculateChineseZodiac
} from '@/domain/calculations';
import numerologyData from '@/data/numerology.json';
import zodiacData from '@/data/zodiac.json';
import { PremiumCard } from '@/components/ui/PremiumCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, Calendar, Star, Sun, ChevronRight } from 'lucide-react';

interface HomeProps {
  birthDate: string;
  onBirthDateChange: (date: string) => void;
  onNavigate: (screen: string) => void;
}

export const Home: React.FC<HomeProps> = ({ birthDate, onBirthDateChange, onNavigate }) => {
  const [localDate, setLocalDate] = useState(birthDate);

  // Derived state from calculations
  const lifePath = birthDate ? calculateLifePath(birthDate) : null;
  const personalYear = birthDate ? calculatePersonalYear(birthDate) : null;
  const chineseZodiac = birthDate ? calculateChineseZodiac(new Date(birthDate).getFullYear()) : null;

  // Today's Date Energy (Universal)
  const today = new Date();
  const todayDateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const universalDayNumber = calculateLifePath(todayDateString);

  useEffect(() => {
      // Sync local date if prop changes externally
      if (birthDate) setLocalDate(birthDate);
  }, [birthDate]);

  const handleCalculate = () => {
    if (localDate) {
      onBirthDateChange(localDate);
    }
  };

  if (!birthDate) {
    return (
      <div className="flex flex-col gap-6 animate-in fade-in duration-700">
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 mystic-font">
            Kaderini Keşfet
          </h1>
          <p className="text-slate-400 max-w-xs mx-auto text-sm leading-relaxed">
            Doğum tarihiniz, evrenin size fısıldadığı gizli şifreleri taşır. Şimdi keşfetmeye başlayın.
          </p>
        </div>

        <PremiumCard className="mx-auto w-full max-w-sm border-amber-500/30 bg-slate-900/60">
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label className="text-amber-400/80 text-xs font-bold tracking-wider uppercase">Doğum Tarihiniz</Label>
              <Input
                type="date"
                value={localDate}
                onChange={(e) => setLocalDate(e.target.value)}
                className="bg-black/40 border-amber-500/20 text-white h-12 text-lg focus:ring-amber-500/40"
              />
            </div>
            <Button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold h-12 shadow-lg shadow-amber-900/20"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              ANALİZİ BAŞLAT
            </Button>
          </div>
        </PremiumCard>
      </div>
    );
  }

  // Safe data access
  const lpData = lifePath ? (numerologyData.lifePaths as any)[lifePath.toString()] : null;
  const czData = chineseZodiac ? (zodiacData.signs as any)[chineseZodiac] : null;

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Hoş Geldiniz</h2>
          <p className="text-xs text-slate-400">{new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onBirthDateChange('')}
          className="text-xs border-white/10 text-slate-400 hover:text-white"
        >
          Tarihi Değiştir
        </Button>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Life Path Card - Hero */}
        <div className="col-span-2" onClick={() => onNavigate('numerology')}>
          <PremiumCard
            variant="amber"
            className="cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Star className="w-24 h-24 text-amber-500" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">Yaşam Yolu</p>
                <div className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                  {lifePath}
                </div>
                <p className="text-sm text-amber-200/80 mt-1 font-medium">
                  {lpData?.keywords?.[0] || "Lider"}
                </p>
              </div>
              <div className="text-right max-w-[50%]">
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {lpData?.summary}
                </p>
              </div>
            </div>
          </PremiumCard>
        </div>

        {/* Personal Year */}
        <div onClick={() => onNavigate('numerology')} className="cursor-pointer">
          <PremiumCard variant="purple" className="h-full flex flex-col justify-between hover:bg-purple-900/10">
            <div>
              <p className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-2">Kişisel Yıl</p>
              <div className="text-3xl font-bold text-white mb-1">{personalYear}</div>
            </div>
            <p className="text-[10px] text-purple-200/70 leading-tight">
              {lpData?.personalYearThemes?.[personalYear?.toString() || "1"]}
            </p>
          </PremiumCard>
        </div>

        {/* Chinese Zodiac */}
        <div onClick={() => onNavigate('chinese')} className="cursor-pointer">
          <PremiumCard variant="rose" className="h-full flex flex-col justify-between hover:bg-rose-900/10">
            <div>
              <p className="text-xs text-rose-400 font-bold uppercase tracking-wider mb-2">Çin Burcu</p>
              <div className="text-2xl font-bold text-white mb-1">{czData?.name || chineseZodiac}</div>
            </div>
            <p className="text-[10px] text-rose-200/70 leading-tight">
              {czData?.element} Elementi
            </p>
          </PremiumCard>
        </div>

        {/* Universal Day Energy */}
        <div className="col-span-2">
          <PremiumCard variant="blue" className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-full">
                <Sun className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-blue-300 font-bold uppercase">Evrensel Gün Enerjisi</p>
                <p className="text-sm text-white font-medium">Bugünün titreşimi: <span className="text-blue-200 text-lg font-bold ml-1">{universalDayNumber}</span></p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-blue-500/50" />
          </PremiumCard>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="secondary"
          className="bg-slate-800/50 text-slate-200 hover:bg-slate-700 hover:text-white border border-white/5 h-14"
          onClick={() => onNavigate('explore')}
        >
          <Star className="w-4 h-4 mr-2 text-amber-500" />
          Keşfet
        </Button>
        <Button
          variant="secondary"
          className="bg-slate-800/50 text-slate-200 hover:bg-slate-700 hover:text-white border border-white/5 h-14"
          onClick={() => onNavigate('calendar')}
        >
          <Calendar className="w-4 h-4 mr-2 text-emerald-500" />
          Takvim
        </Button>
      </div>
    </div>
  );
};
