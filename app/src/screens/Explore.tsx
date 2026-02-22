import React, { useState, useEffect } from 'react';
import { calculateLifePath } from '@/domain/calculations';
import exploreData from '@/data/explore.json';
import { PremiumCard } from '@/components/ui/PremiumCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, Star, Building2, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExploreProps {
  birthDate: string;
  onBack: () => void;
}

export const Explore: React.FC<ExploreProps> = ({ birthDate, onBack }) => {
  const [selectedLifePath, setSelectedLifePath] = useState<string>("1");
  const [activeTab, setActiveTab] = useState('celebrities');

  // Set initial life path from birthDate
  useEffect(() => {
    if (birthDate) {
      const lp = calculateLifePath(birthDate);
      setSelectedLifePath(lp.toString());
    }
  }, [birthDate]);

  const lifePathOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];

  const getData = (category: 'celebrities' | 'brands' | 'countries') => {
    return (exploreData as any)[category]?.[selectedLifePath] || [];
  };

  const renderGrid = (items: any[]) => {
    if (!items || items.length === 0) {
      return (
        <div className="text-center py-12 px-4 border border-dashed border-amber-500/20 rounded-xl bg-amber-950/5">
          <Star className="w-12 h-12 text-amber-500/30 mx-auto mb-4" />
          <h4 className="text-lg font-bold text-amber-300 mb-2">Veri Bulunamadı</h4>
          <p className="text-slate-400 text-sm">
            Bu Yaşam Yolu numarası için henüz yeterli veri eklenmemiştir.
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500">
        {items.map((item, index) => (
          <PremiumCard key={index} variant="amber" className="h-full hover:bg-amber-900/10 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-bold text-white text-lg">{item.name}</h4>
              <span className="text-xs text-amber-500/60 font-mono border border-amber-500/20 px-2 py-0.5 rounded">
                {calculateLifePath(item.birthDate || item.founded || "2000-01-01")}
              </span>
            </div>
            <p className="text-xs text-amber-400/80 mb-2 font-medium uppercase tracking-wide">
              {item.role || "Kuruluş: " + (item.founded || item.birthDate)}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {item.desc}
            </p>
          </PremiumCard>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-slate-400 hover:text-white">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
              Keşfet
            </h2>
            <p className="text-xs text-slate-400">Yaşam Yolu {selectedLifePath} ile uyumlu</p>
          </div>
        </div>

        {/* Filter */}
        <div className="w-full max-w-xs ml-auto">
          <Select value={selectedLifePath} onValueChange={setSelectedLifePath}>
            <SelectTrigger className="bg-slate-900/50 border-amber-500/30 text-amber-100">
              <SelectValue placeholder="Yaşam Yolu Seçin" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-amber-500/30 text-amber-100">
              {lifePathOptions.map(num => (
                <SelectItem key={num} value={num.toString()}>
                  Yaşam Yolu {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="celebrities" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-slate-900/50 p-1 grid grid-cols-3 w-full border border-white/5">
          <TabsTrigger value="celebrities" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black text-slate-400">
            <Users className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Ünlüler</span>
          </TabsTrigger>
          <TabsTrigger value="brands" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black text-slate-400">
            <Building2 className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Markalar</span>
          </TabsTrigger>
          <TabsTrigger value="countries" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black text-slate-400">
            <Globe className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Ülkeler</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="celebrities" className="mt-4">
          {renderGrid(getData('celebrities'))}
        </TabsContent>
        <TabsContent value="brands" className="mt-4">
          {renderGrid(getData('brands'))}
        </TabsContent>
        <TabsContent value="countries" className="mt-4">
          {renderGrid(getData('countries'))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
