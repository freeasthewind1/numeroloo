import React, { useState } from 'react';
import { calculateChineseZodiac } from '@/domain/calculations';
import zodiacData from '@/data/zodiac.json';
import { PremiumCard } from '@/components/ui/PremiumCard';
import { AnalysisCarousel } from '@/components/ui/AnalysisCarousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, Info, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChineseZodiacProps {
  birthDate: string;
  onBack: () => void;
}

export const ChineseZodiac: React.FC<ChineseZodiacProps> = ({ birthDate, onBack }) => {
  const [activeTab, setActiveTab] = useState('summary');

  if (!birthDate) return null;

  const year = new Date(birthDate).getFullYear();
  const sign = calculateChineseZodiac(year);

  // Safe data access - directly access the sign from root object
  const signData = (zodiacData as any)[sign];

  return (
    <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-slate-400 hover:text-white">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-200 to-rose-500">
            Çin Astrolojisi
          </h2>
          <p className="text-xs text-slate-400">{year} Doğumlu - {signData?.name || sign}</p>
        </div>
      </div>

      <Tabs defaultValue="summary" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="w-full overflow-x-auto pb-2 no-scrollbar">
          <TabsList className="bg-slate-900/50 p-1 inline-flex w-auto min-w-full justify-start border border-white/5">
            <TabsTrigger
              value="summary"
              className="px-4 py-2 data-[state=active]:bg-rose-500 data-[state=active]:text-white text-slate-400 min-w-[100px]"
            >
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                <span>Özet</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="deep"
              className="px-4 py-2 data-[state=active]:bg-rose-500 data-[state=active]:text-white text-slate-400 min-w-[100px]"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Derin Analiz</span>
              </div>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* SUMMARY TAB */}
        <TabsContent value="summary" className="mt-4 space-y-4">
          <PremiumCard variant="rose" className="text-center py-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-rose-500/10 border-2 border-rose-500/30 mb-4 shadow-[0_0_30px_-5px_rgba(244,63,94,0.3)]">
              <span className="text-3xl font-bold text-rose-400">{signData?.name?.split(' ')[0]}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{signData?.element} Elementi</h3>
            <p className="text-slate-300 leading-relaxed max-w-sm mx-auto">
              {signData?.summary}
            </p>
          </PremiumCard>

          <div className="bg-slate-800/40 border border-rose-500/20 p-4 rounded-lg flex items-start gap-3">
            <Info className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-300">
              Çin astrolojisinde burcunuz doğum yılınıza göre belirlenir. Yılın enerjisi, karakterinizin temel taşlarını oluşturur.
            </p>
          </div>
        </TabsContent>

        {/* DEEP ANALYSIS TAB */}
        <TabsContent value="deep" className="mt-4">
          <div className="mb-4 text-center">
            <h3 className="text-lg font-bold text-rose-200">Derinlemesine Karakter Analizi</h3>
            <p className="text-xs text-slate-400">Detaylar için kartları kaydırın</p>
          </div>

          {signData?.deepAnalysis && signData.deepAnalysis.length > 0 ? (
            <AnalysisCarousel items={signData.deepAnalysis} variant="rose" />
          ) : (
            <div className="text-center py-12 px-4 border border-dashed border-rose-500/20 rounded-xl bg-rose-950/5">
              <Sparkles className="w-12 h-12 text-rose-500/30 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-rose-300 mb-2">Analiz Hazırlanıyor</h4>
              <p className="text-slate-400 text-sm">
                Bu burç için derinlemesine analiz içeriği şu anda hazırlanma aşamasındadır. Lütfen daha sonra tekrar kontrol edin.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
