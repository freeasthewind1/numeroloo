import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { calculateLifePath } from '@/domain/calculations';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { PremiumCard } from '@/components/ui/PremiumCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar as CalendarIcon, Sparkles } from 'lucide-react';

// Simple daily energy meanings
const DAILY_MEANINGS: Record<string, string> = {
  "1": "Yeni başlangıçlar için harika bir gün. İnisiyatif alın.",
  "2": "İşbirliği ve denge günü. Acele etmeyin, dinleyin.",
  "3": "Yaratıcılık ve sosyalleşme zamanı. Kendinizi ifade edin.",
  "4": "Çalışma ve düzen günü. Yarım kalan işleri bitirin.",
  "5": "Değişim ve sürprizlere açık olun. Esnek davranın.",
  "6": "Aile ve ev konuları ön planda. Sevdiklerinize vakit ayırın.",
  "7": "İçsel analiz ve dinlenme günü. Kendinize zaman ayırın.",
  "8": "Maddi konular ve kariyer için güçlü bir gün. Hedef odaklı olun.",
  "9": "Tamamlanma ve arınma. Fazlalıklardan kurtulun.",
  "11": "Yüksek sezgi ve ilham günü. Rüyalarınıza dikkat edin.",
  "22": "Büyük planlar yapmak için ideal. Vizyonunuzu geniş tutun.",
  "33": "Şefkat ve hizmet günü. Başkalarına yardım edin."
};

interface CalendarScreenProps {
  onBack: () => void;
}

export const CalendarScreen: React.FC<CalendarScreenProps> = ({ onBack }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setIsDialogOpen(true);
    }
  };

  const getDayNumber = (d: Date): number => {
    const dateString = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    return calculateLifePath(dateString);
  };

  const selectedDayNumber = date ? getDayNumber(date) : 0;
  const energyText = DAILY_MEANINGS[selectedDayNumber.toString()] || "Nötr enerji.";

  return (
    <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-slate-400 hover:text-white">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-emerald-500">
            Enerji Takvimi
          </h2>
          <p className="text-xs text-slate-400">Günlük rehberiniz</p>
        </div>
      </div>

      <PremiumCard variant="emerald" className="flex justify-center p-4">
        {/* Override CSS variables to force Emerald theme for this calendar */}
        <div className="[--primary:theme(colors.emerald.500)] [--primary-foreground:theme(colors.black)]">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            className="rounded-md border-none text-slate-200"
          />
        </div>
      </PremiumCard>

      <div className="bg-slate-900/50 border border-white/5 p-4 rounded-xl flex items-center gap-4">
        <div className="p-3 bg-emerald-500/10 rounded-full">
          <CalendarIcon className="w-6 h-6 text-emerald-500" />
        </div>
        <div>
          <p className="text-sm text-slate-400">İpucu</p>
          <p className="text-xs text-slate-500">
            Detaylı enerji analizi için takvimden bir güne tıklayın.
          </p>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-950 border-emerald-500/30 text-slate-100 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-emerald-400">
              {date?.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </DialogTitle>
            <DialogDescription className="text-center text-slate-400">
              Günün Enerji Analizi
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center py-6 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
              <div className="relative w-24 h-24 rounded-full border-4 border-emerald-500/30 flex items-center justify-center bg-slate-900/80">
                <span className="text-5xl font-bold text-emerald-400">{selectedDayNumber}</span>
              </div>
            </div>

            <div className="text-center space-y-2 max-w-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Günün Teması
              </div>
              <p className="text-slate-300 font-medium leading-relaxed">
                {energyText}
              </p>
            </div>
          </div>

          <Button onClick={() => setIsDialogOpen(false)} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold">
            Anlaşıldı
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
