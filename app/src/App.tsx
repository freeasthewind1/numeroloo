import { useState, useEffect } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Home } from '@/screens/Home';
import { Numerology } from '@/screens/Numerology';
import { ChineseZodiac } from '@/screens/ChineseZodiac';
import { Explore } from '@/screens/Explore';
import { CalendarScreen } from '@/screens/Calendar';
import { Profile } from '@/screens/Profile';
import type { UserProfile } from '@/domain/types';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

type Screen = 'home' | 'numerology' | 'chinese' | 'explore' | 'calendar' | 'profile';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Initialize birthDate from profile or empty
  const [birthDate, setBirthDate] = useState<string>('');

  useEffect(() => {
    // Load profile from localStorage if available
    const savedProfile = localStorage.getItem('numerology_profile_v2');
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        setUserProfile(parsed);
        setBirthDate(parsed.birthDate);
      } catch (e) {
        console.error("Failed to parse profile", e);
      }
    }
  }, []);

  const handleSaveProfile = (profile: UserProfile) => {
    setUserProfile(profile);
    setBirthDate(profile.birthDate);
    localStorage.setItem('numerology_profile_v2', JSON.stringify(profile));
    toast.success("Profil başarıyla kaydedildi.");
  };

  const handleBirthDateChange = (date: string) => {
    setBirthDate(date);
    // If userProfile exists, we might want to update it or just keep local state until save.
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <Home
            birthDate={birthDate}
            onBirthDateChange={handleBirthDateChange}
            onNavigate={(screen) => setCurrentScreen(screen as Screen)}
          />
        );
      case 'numerology':
        return <Numerology birthDate={birthDate} onBack={() => setCurrentScreen('home')} />;
      case 'chinese':
        return <ChineseZodiac birthDate={birthDate} onBack={() => setCurrentScreen('home')} />;
      case 'explore':
        return <Explore birthDate={birthDate} onBack={() => setCurrentScreen('home')} />;
      case 'calendar':
        return <CalendarScreen onBack={() => setCurrentScreen('home')} />;
      case 'profile':
        return (
          <Profile
            userProfile={userProfile}
            onSaveProfile={handleSaveProfile}
            onBack={() => setCurrentScreen('home')}
          />
        );
      default:
        return <Home birthDate={birthDate} onBirthDateChange={handleBirthDateChange} onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
    }
  };

  return (
    <MainLayout>
      {renderScreen()}
      <Toaster position="top-center" theme="dark" />

      {/* Temporary Profile Access for Demo if not in Home */}
      {currentScreen === 'home' && (
        <div className="fixed top-4 right-4 z-50">
          <button 
            onClick={() => setCurrentScreen('profile')}
            className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700 text-white border border-white/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
        </div>
      )}
    </MainLayout>
  );
}

export default App;
