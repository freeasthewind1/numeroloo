import React, { useState } from 'react';
import type { UserProfile, CompatibilityResult } from '@/domain/types';
import { calculateRelationshipCompatibility, calculateLifePath } from '@/domain/calculations';
import { PremiumCard } from '@/components/ui/PremiumCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, User, Heart, Settings, Shield, Save, LogOut, CheckCircle, XCircle } from 'lucide-react';

interface ProfileProps {
  userProfile: UserProfile | null;
  onSaveProfile: (profile: UserProfile) => void;
  onBack: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ userProfile, onSaveProfile, onBack }) => {
  // Local state for form
  const [formData, setFormData] = useState<UserProfile>(userProfile || {
    name: '',
    birthDate: '',
    gender: '',
    country: ''
  });

  const [isEditing, setIsEditing] = useState(!userProfile);
  const [showCompatDialog, setShowCompatDialog] = useState(false);
  const [partnerDate, setPartnerDate] = useState('');
  const [compatResult, setCompatResult] = useState<CompatibilityResult | null>(null);

  const handleSave = () => {
    if (formData.name && formData.birthDate) {
      onSaveProfile(formData);
      setIsEditing(false);
    }
  };

  const handleCalculateCompatibility = () => {
    if (formData.birthDate && partnerDate) {
      const result = calculateRelationshipCompatibility(formData.birthDate, partnerDate);

      const enrichedResult = { ...result };
      if (!enrichedResult.description) {
         if (result.compatibilityScore >= 80) {
            enrichedResult.description = "Mükemmel bir uyum! Enerjileriniz birbirini doğal olarak tamamlıyor.";
            enrichedResult.strengths = "İletişim, ortak hedefler, duygusal derinlik.";
            enrichedResult.challenges = "Birbirinizde kaybolmamaya dikkat edin.";
         } else if (result.compatibilityScore >= 60) {
            enrichedResult.description = "Güçlü bir potansiyel. Farklılıklarınız sizi zenginleştiriyor.";
            enrichedResult.strengths = "Öğrenme isteği, macera, tutku.";
            enrichedResult.challenges = "İnatçılık ve iletişim kopuklukları.";
         } else {
            enrichedResult.description = "Karmik bir ders. Bu ilişki sizi büyütmek için var.";
            enrichedResult.strengths = "Farklı bakış açıları kazanma.";
            enrichedResult.challenges = "Temel değerlerde anlaşmazlık.";
         }
      }

      setCompatResult(enrichedResult as CompatibilityResult);
    }
  };

  if (isEditing) {
    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex items-center gap-4">
          {userProfile && (
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-white">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          )}
          <div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
              Profil Oluştur
            </h2>
            <p className="text-xs text-slate-400">Bilgileriniz sadece cihazınızda saklanır.</p>
          </div>
        </div>

        <PremiumCard className="space-y-4">
          <div className="space-y-2">
            <Label className="text-amber-400">Ad Soyad</Label>
            <Input
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="bg-black/40 border-amber-500/20 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-amber-400">Doğum Tarihi</Label>
            <Input
              type="date"
              value={formData.birthDate}
              onChange={e => setFormData({...formData, birthDate: e.target.value})}
              className="bg-black/40 border-amber-500/20 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-amber-400">Cinsiyet</Label>
            <Input
              value={formData.gender}
              onChange={e => setFormData({...formData, gender: e.target.value})}
              className="bg-black/40 border-amber-500/20 text-white"
              placeholder="İsteğe bağlı"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-amber-400">Ülke</Label>
            <Input
              value={formData.country}
              onChange={e => setFormData({...formData, country: e.target.value})}
              className="bg-black/40 border-amber-500/20 text-white"
              placeholder="İsteğe bağlı"
            />
          </div>
          <Button onClick={handleSave} className="w-full bg-amber-600 hover:bg-amber-500 text-black font-bold">
            <Save className="w-4 h-4 mr-2" />
            Kaydet ve Devam Et
          </Button>
        </PremiumCard>
      </div>
    );
  }

  const lp = calculateLifePath(formData.birthDate);

  return (
    <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-slate-400 hover:text-white">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
            Profilim
          </h2>
          <p className="text-xs text-slate-400">Hoş geldin, {formData.name}</p>
        </div>
      </div>

      {/* Profile Card */}
      <PremiumCard variant="amber" className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center">
          <span className="text-2xl font-bold text-amber-400">{lp}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{formData.name}</h3>
          <p className="text-sm text-slate-400">{formData.birthDate} • Yaşam Yolu {lp}</p>
        </div>
      </PremiumCard>

      {/* Menu Options */}
      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full justify-start h-14 border-white/5 bg-slate-900/50 hover:bg-slate-800 text-slate-200"
          onClick={() => setIsEditing(true)}
        >
          <User className="w-5 h-5 mr-3 text-blue-400" />
          Kişisel Bilgileri Düzenle
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start h-14 border-white/5 bg-slate-900/50 hover:bg-slate-800 text-slate-200"
          onClick={() => setShowCompatDialog(true)}
        >
          <Heart className="w-5 h-5 mr-3 text-rose-400" />
          İlişki Uyumu Hesapla
        </Button>

        <Button variant="outline" className="w-full justify-start h-14 border-white/5 bg-slate-900/50 hover:bg-slate-800 text-slate-200">
          <Shield className="w-5 h-5 mr-3 text-emerald-400" />
          Gizlilik ve Güvenlik
        </Button>

        <Button variant="outline" className="w-full justify-start h-14 border-white/5 bg-slate-900/50 hover:bg-slate-800 text-slate-200">
          <Settings className="w-5 h-5 mr-3 text-slate-400" />
          Uygulama Ayarları
        </Button>

        <Button variant="ghost" className="w-full justify-start h-14 text-red-400 hover:bg-red-950/20 hover:text-red-300">
          <LogOut className="w-5 h-5 mr-3" />
          Çıkış Yap
        </Button>
      </div>

      {/* Compatibility Dialog */}
      <Dialog open={showCompatDialog} onOpenChange={setShowCompatDialog}>
        <DialogContent className="bg-slate-950 border-rose-500/30 text-slate-100 sm:max-w-md max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-rose-400 flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
              İlişki Uyumu
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {!compatResult ? (
              <div className="space-y-4">
                <div className="p-4 bg-rose-500/10 rounded-xl border border-rose-500/20 text-center">
                  <p className="text-sm text-rose-200 mb-2">Sizin Yaşam Yolunuz</p>
                  <span className="text-3xl font-bold text-rose-400">{lp}</span>
                </div>

                <div className="space-y-2">
                  <Label className="text-rose-200">Partnerinizin Doğum Tarihi</Label>
                  <Input
                    type="date"
                    value={partnerDate}
                    onChange={e => setPartnerDate(e.target.value)}
                    className="bg-black/40 border-rose-500/30 text-white"
                  />
                </div>

                <Button
                  onClick={handleCalculateCompatibility}
                  disabled={!partnerDate}
                  className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold"
                >
                  Uyumu Gör
                </Button>
              </div>
            ) : (
              <div className="space-y-4 animate-in zoom-in-95 duration-500">
                <div className="flex justify-center items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
                    <span className="text-xl font-bold text-amber-400">{compatResult.lifePath1}</span>
                  </div>
                  <Heart className="w-6 h-6 text-rose-500 animate-pulse" />
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">{compatResult.lifePath2}</span>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="inline-block px-4 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold text-sm">
                    %{compatResult.compatibilityScore} UYUM
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {compatResult.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-emerald-950/30 border border-emerald-500/20 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1 text-emerald-400 text-sm font-bold">
                      <CheckCircle className="w-4 h-4" />
                      Güçlü Yönler
                    </div>
                    <p className="text-xs text-emerald-100/70">{compatResult.strengths || "Birbirinizi tamamlama potansiyeli."}</p>
                  </div>

                  <div className="bg-rose-950/30 border border-rose-500/20 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1 text-rose-400 text-sm font-bold">
                      <XCircle className="w-4 h-4" />
                      Dikkat Edilmesi Gerekenler
                    </div>
                    <p className="text-xs text-rose-100/70">{compatResult.challenges || "İletişim kopukluklarına dikkat edin."}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCompatResult(null)}
                  className="w-full border-rose-500/30 text-rose-300 hover:bg-rose-950/50"
                >
                  Yeni Hesaplama
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
