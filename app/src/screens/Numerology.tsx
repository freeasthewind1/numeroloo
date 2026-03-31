import React, { useState } from 'react';
import { calculateLifePath, calculatePersonalYear, calculateBirthdayEnergy } from '@/domain/calculations';
import numerologyData from '@/data/numerology.json';
import { PremiumCard } from '@/components/ui/PremiumCard';
import { AnalysisCarousel } from '@/components/ui/AnalysisCarousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Generic Personal Year Content (Universal for all Life Paths)
const PERSONAL_YEAR_DETAILS: Record<string, { advice: string[]; avoid: string[] }> = {
  "1": {
    advice: ["Yeni bir projeye başlayın.", "Liderlik edin.", "Fiziksel görünüşünüzü yenileyin.", "Cesur adımlar atın."],
    avoid: ["Ertelemek.", "Başkalarından onay beklemek.", "Geçmişe takılı kalmak.", "Tembellik yapmak."]
  },
  "2": {
    advice: ["İşbirlikleri kurun.", "Sabırlı olun.", "Detaylara odaklanın.", "Diplomatik davranın."],
    avoid: ["Aceleci kararlar.", "Yalnız hareket etmek.", "Çatışmalara girmek.", "Aşırı hassasiyet."]
  },
  "3": {
    advice: ["Yaratıcılığınızı ifade edin.", "Sosyalleşin.", "Eğlenin ve gezin.", "Sanatsal kurslara katılın."],
    avoid: ["Dağınık enerji.", "Dedikodu yapmak.", "Sorumluluktan kaçmak.", "Enerjinizi israf etmek."]
  },
  "4": {
    advice: ["Sıkı çalışın.", "Temelleri sağlamlaştırın.", "Sağlığınıza dikkat edin.", "Bütçe yapın."],
    avoid: ["Riskli yatırımlar.", "Düzensizlik.", "Tembellik.", "Kısa yoldan gitmeye çalışmak."]
  },
  "5": {
    advice: ["Değişimi kucaklayın.", "Seyahat edin.", "Esnek olun.", "Yeni insanlarla tanışın."],
    avoid: ["Rutine saplanmak.", "Aşırı risk almak.", "Bağımlılıklar.", "Sözünü tutmamak."]
  },
  "6": {
    advice: ["Ailenizle ilgilenin.", "Evinizi güzelleştirin.", "Sorumluluk alın.", "Hizmet edin."],
    avoid: ["Kendini feda etmek.", "Mükemmeliyetçilik.", "İnatçılık.", "Başkalarını kontrol etmek."]
  },
  "7": {
    advice: ["İç dünyanıza dönün.", "Meditasyon yapın.", "Araştırın ve öğrenin.", "Yalnızlıkta huzur bulun."],
    avoid: ["Sosyal baskı.", "Maddi hırslar.", "Yüzeysellik.", "Kendini izole etmek."]
  },
  "8": {
    advice: ["Kariyerinize odaklanın.", "Yatırım yapın.", "Gücünüzü elinize alın.", "Büyük düşünün."],
    avoid: ["Gücü kötüye kullanmak.", "Cimrilik.", "İşkoliklik.", "Etik dışı kazanç."]
  },
  "9": {
    advice: ["Eskiyi bırakın.", "Bağışlayın.", "Tamamlanmamış işleri bitirin.", "Evrensel sevgiye odaklanın."],
    avoid: ["Yeni başlangıçlar (zorlama).", "Kin tutmak.", "Geçmişe yapışmak.", "Egoist davranmak."]
  },
  "11": {
    advice: ["Sezgilerinizi dinleyin.", "İlham verin.", "Ruhsal çalışmalar yapın.", "Vizyonunuzu paylaşın."],
    avoid: ["Gerçeklikten kopmak.", "Aşırı kaygı.", "Sinirsel gerginlik.", "Kendini yetersiz hissetmek."]
  },
  "22": {
    advice: ["Büyük projeler planlayın.", "İnşa edin.", "Global düşünün.", "Pratik adımlar atın."],
    avoid: ["Detaylarda boğulmak.", "Potansiyeli harcamak.", "Aşırı stres.", "Dar görüşlülük."]
  },
  "33": {
    advice: ["Koşulsuz sevin.", "Şifa verin.", "Hizmet edin.", "Sanatla uğraşın."],
    avoid: ["Kendini feda etmek.", "Duygusal tükeniş.", "Sınır koyamamak.", "Kurtarıcı rolüne girmek."]
  }
};

interface NumerologyProps {
  birthDate: string;
  onBack: () => void;
}

// Helper icons
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;

export const Numerology: React.FC<NumerologyProps> = ({ birthDate, onBack }) => {
  const [activeTab, setActiveTab] = useState('summary');

  if (!birthDate) return null;

  const lifePath = calculateLifePath(birthDate);
  const personalYear = calculatePersonalYear(birthDate);
  const birthDay = new Date(birthDate).getDate();
  const birthDayEnergy = calculateBirthdayEnergy(birthDay);

  const lpData = (numerologyData.lifePaths as any)[lifePath.toString()];
  const pyDetails = PERSONAL_YEAR_DETAILS[personalYear.toString()] || PERSONAL_YEAR_DETAILS["1"];

  // Prepare tabs triggers for horizontal scroll
  const tabs = [
    { id: 'summary', label: 'Özet', icon: Sparkles },
    { id: 'deep', label: 'Derin Analiz', icon: CheckCircle },
    { id: 'year', label: 'Kişisel Yıl', icon: CalendarIcon },
    { id: 'birthday', label: 'Doğum Günü', icon: SunIcon },
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-slate-400 hover:text-white">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
            Numeroloji Analizi
          </h2>
          <p className="text-xs text-slate-400">Yaşam Yolu {lifePath}</p>
        </div>
      </div>

      <Tabs defaultValue="summary" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="w-full overflow-x-auto pb-2 no-scrollbar">
          <TabsList className="bg-slate-900/50 p-1 inline-flex w-auto min-w-full justify-start border border-white/5">
            {tabs.map(tab => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="px-4 py-2 data-[state=active]:bg-amber-500 data-[state=active]:text-black text-slate-400 min-w-[100px]"
              >
                <div className="flex items-center gap-2">
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* SUMMARY TAB */}
        <TabsContent value="summary" className="mt-4 space-y-4">
          <PremiumCard variant="amber" className="text-center py-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-amber-500/10 border-2 border-amber-500/30 mb-4 shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]">
              <span className="text-5xl font-bold text-amber-400">{lifePath}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{lpData?.keywords?.[0]}</h3>
            <p className="text-slate-300 leading-relaxed max-w-sm mx-auto">
              {lpData?.summary}
            </p>
          </PremiumCard>

          <div className="grid grid-cols-2 gap-3">
            {lpData?.keywords?.slice(0, 4).map((keyword: string, i: number) => (
              <div key={i} className="bg-slate-800/40 border border-white/5 p-3 rounded-lg text-center text-sm text-slate-300">
                {keyword}
              </div>
            ))}
          </div>
        </TabsContent>

        {/* DEEP ANALYSIS TAB */}
        <TabsContent value="deep" className="mt-4">
          <div className="mb-4 text-center">
            <h3 className="text-lg font-bold text-amber-200">Derinlemesine Analiz</h3>
            <p className="text-xs text-slate-400">Kartları kaydırarak detayları okuyun</p>
          </div>
          {lpData?.deepAnalysis && (
            <AnalysisCarousel items={lpData.deepAnalysis} variant="amber" />
          )}
        </TabsContent>

        {/* PERSONAL YEAR TAB */}
        <TabsContent value="year" className="mt-4 space-y-4">
          <PremiumCard variant="purple" className="text-center">
            <p className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-2">Şu anki döngünüz</p>
            <div className="text-6xl font-bold text-white mb-4">{personalYear}</div>
            <h3 className="text-xl font-bold text-purple-200 mb-2">
              {lpData?.personalYearThemes?.[personalYear.toString()] || "Dönüşüm Yılı"}
            </h3>
          </PremiumCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PremiumCard variant="emerald" className="border-l-4 border-l-emerald-500 bg-emerald-950/10">
              <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold">
                <CheckCircle className="w-5 h-5" />
                <span>Tavsiyeler</span>
              </div>
              <ul className="space-y-2">
                {pyDetails.advice.map((item, i) => (
                  <li key={i} className="text-sm text-emerald-100/80 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </PremiumCard>

            <PremiumCard variant="rose" className="border-l-4 border-l-rose-500 bg-rose-950/10">
              <div className="flex items-center gap-2 mb-3 text-rose-400 font-bold">
                <XCircle className="w-5 h-5" />
                <span>Kaçınılacaklar</span>
              </div>
              <ul className="space-y-2">
                {pyDetails.avoid.map((item, i) => (
                  <li key={i} className="text-sm text-rose-100/80 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-rose-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </PremiumCard>
          </div>
        </TabsContent>

        {/* BIRTHDAY ENERGY TAB */}
        <TabsContent value="birthday" className="mt-4 space-y-4">
          <PremiumCard variant="blue" className="text-center py-8">
            <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-4">Doğduğunuz Günün Enerjisi</p>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/10 border-2 border-blue-500/30 mb-4">
              <span className="text-4xl font-bold text-blue-400">{birthDayEnergy}</span>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-sm mx-auto px-4">
              Ayın {birthDay}. günü doğdunuz. Bu sayı, ana yaşam yolunuzu destekleyen ikincil bir yetenektir.
              {birthDayEnergy === 11 || birthDayEnergy === 22 || birthDayEnergy === 33
                ? " Bir Usta Sayı günü doğdunuz; bu size ekstra sezgisel ve yaratıcı potansiyel verir."
                : " Karakterinize ek bir renk katar."}
            </p>
          </PremiumCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};
