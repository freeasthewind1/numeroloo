import { useState } from 'react';
import { numerologyData, calculateLifePath, calculatePersonalYear } from './data/numerologyData';
import { chineseZodiacData, getChineseZodiac } from './data/chineseZodiacData';
import { westernZodiacData, getWesternZodiac } from './data/westernZodiacData';
import { discoverData } from './data/discoverData';
import { getDailyReading, getYearlyTheme } from './data/calendarData';
import { getCompatibility } from './data/compatibilityData';
import { getBirthDayEnergy, calculateBirthDayEnergy } from './data/birthDayEnergyData';
import { getPersonalYearData } from './data/personalYearData';
import { 
  Star, Calendar, User, Search, 
  ChevronLeft, Heart, Briefcase, Shield, BookOpen,
  Sparkles, TrendingUp, AlertTriangle, CheckCircle,
  Users, Building2, Globe, Settings,
  LogOut, Lock, Info, HelpCircle, MessageCircle,
  ChevronRight, X, ArrowRight, Flame, Moon, Sun,
  Compass, Zap, Target, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import './App.css';

// Types
interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: string;
  country: string;
}

interface CalendarDay {
  day: number;
  month: number;
  year: number;
  dayNumber: number;
  theme: string;
}

type SectionType = 'home' | 'results' | 'chinese' | 'western' | 'discover' | 'calendar' | 'profile' | 'compatibility';

function App() {
  // State
  const [currentSection, setCurrentSection] = useState<SectionType>('home');
  const [birthDate, setBirthDate] = useState('');
  const [lifePathNumber, setLifePathNumber] = useState<number | null>(null);
  const [chineseZodiac, setChineseZodiac] = useState<string>('');
  const [westernZodiac, setWesternZodiac] = useState<string>('');
  const [personalYear, setPersonalYear] = useState<number | null>(null);
  const [birthDayEnergy, setBirthDayEnergy] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [discoverTab, setDiscoverTab] = useState<'celebrities' | 'brands' | 'countries'>('celebrities');
  const [userProfile, setUserProfile] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    gender: '',
    country: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
  const [showDayDialog, setShowDayDialog] = useState(false);
  const [compatibilityPartnerNumber, setCompatibilityPartnerNumber] = useState<number>(1);
  const [showCompatibilityDialog, setShowCompatibilityDialog] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Calculate destiny when birth date changes
  const calculateDestiny = () => {
    if (!birthDate) {
      toast.error('Lütfen bir doğum tarihi seçin');
      return;
    }

    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Calculate Life Path Number (Master numbers NOT reduced)
    const lifePath = calculateLifePath(day, month, year);
    setLifePathNumber(lifePath);

    // Determine Chinese Zodiac
    const cz = getChineseZodiac(year);
    setChineseZodiac(cz);

    // Determine Western Zodiac
    const wz = getWesternZodiac(day, month);
    setWesternZodiac(wz);

    // Calculate Personal Year
    const pYear = calculatePersonalYear(day, month);
    setPersonalYear(pYear);

    // Calculate Birth Day Energy
    const bde = calculateBirthDayEnergy(day);
    setBirthDayEnergy(bde);

    // Show results
    setCurrentSection('results');
    toast.success('Kader analiziniz hazır!');
  };

  // Get daily reading
  const dailyReading = getDailyReading();
  const yearlyTheme = getYearlyTheme(2026);

  // Get data
  const numData = lifePathNumber ? numerologyData[lifePathNumber] : null;
  const czData = chineseZodiac ? chineseZodiacData[chineseZodiac] : null;
  const wzData = westernZodiac ? westernZodiacData[westernZodiac] : null;
  const pYearData = personalYear ? getPersonalYearData(personalYear) : null;
  const bdeData = birthDayEnergy ? getBirthDayEnergy(birthDayEnergy) : null;

  // Save profile
  const saveProfile = () => {
    if (!userProfile.firstName || !userProfile.lastName || !userProfile.email || !userProfile.birthDate) {
      toast.error('Lütfen tüm zorunlu alanları doldurun');
      return;
    }
    setIsLoggedIn(true);
    setShowProfileDialog(false);
    toast.success('Profil başarıyla kaydedildi!');
  };

  // Generate calendar days
  const generateCalendarDays = (month: number, year: number): CalendarDay[] => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: CalendarDay[] = [];
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dayNum = calculateLifePath(day, month + 1, year);
      const themes = ['Yeni Başlangıç', 'İşbirliği', 'Yaratıcılık', 'Düzen', 'Değişim', 'Aile', 'İçsel Yolculuk', 'Güç', 'Tamamlanma'];
      days.push({
        day,
        month,
        year,
        dayNumber: dayNum,
        theme: themes[(dayNum - 1) % 9]
      });
    }
    return days;
  };

  // Handle day click
  const handleDayClick = (day: CalendarDay) => {
    setSelectedDay(day);
    setShowDayDialog(true);
  };

  // Get compatibility data
  const getCompatibilityData = () => {
    if (!lifePathNumber) return null;
    return getCompatibility(lifePathNumber, compatibilityPartnerNumber);
  };

  // Render Home Section
  const renderHome = () => (
    <div className="space-y-6">
      {/* Modern Logo - Enhanced */}
      <div className="text-center space-y-5">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 animate-pulse opacity-60 blur-xl"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-amber-500 opacity-40 blur-md"></div>
          <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/50 border-4 border-amber-300/60">
            <div className="relative">
              <Star className="w-16 h-16 text-white drop-shadow-lg" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 mystic-font drop-shadow-lg tracking-wide">SACRED NUMBERS</h2>
          <p className="text-amber-300/80 text-base mt-3 font-medium">Kaderinizi Keşfedin</p>
          <p className="text-gray-400 text-sm mt-2 max-w-[280px] mx-auto">Doğum tarihiniz evrenin size özel hazırladığı şifreleri saklar</p>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-white/10 to-white/5 border-amber-500/30 backdrop-blur-xl shadow-xl shadow-amber-500/10">
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label className="text-amber-400 mystic-font font-bold">DOĞUM TARİHİNİZ</Label>
            <Input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="bg-black/40 border-amber-500/40 text-white text-center text-lg focus:border-amber-400 focus:ring-amber-400/30 rounded-xl h-14"
            />
          </div>
          <Button 
            onClick={calculateDestiny}
            className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:via-orange-400 hover:to-amber-400 text-black font-bold py-7 rounded-xl shadow-lg shadow-amber-500/30 transition-all transform hover:scale-[1.02]"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            KADER ANALİZİNİ GÖR
          </Button>
        </CardContent>
      </Card>

      {/* Method Cards */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-xl p-4 text-center hover:bg-amber-500/30 transition-all cursor-pointer group">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/40 transition-all">
            <Star className="w-6 h-6 text-amber-400" />
          </div>
          <span className="text-xs text-amber-300 font-medium">Pythagorean</span>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-xl p-4 text-center hover:bg-purple-500/30 transition-all cursor-pointer group">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-all">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <span className="text-xs text-purple-300 font-medium">Chaldean</span>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-4 text-center hover:bg-blue-500/30 transition-all cursor-pointer group">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-all">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <span className="text-xs text-blue-300 font-medium">Kabbalah</span>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-white">Yaşam Yolu</span>
          </div>
          <p className="text-xs text-gray-400">Kader numaranızı keşfedin</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-pink-400" />
            <span className="text-sm font-bold text-white">Uyum</span>
          </div>
          <p className="text-xs text-gray-400">İlişki analizi yapın</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-green-400" />
            <span className="text-sm font-bold text-white">Takvim</span>
          </div>
          <p className="text-xs text-gray-400">Günlük rehberlik alın</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-bold text-white">Keşfet</span>
          </div>
          <p className="text-xs text-gray-400">Ünlüler ve markalar</p>
        </div>
      </div>
    </div>
  );


  // Render Results Section
  const renderResults = () => {
    if (!numData || !czData || !wzData) return null;

    return (
      <div className="space-y-4">
        {/* Top Cards - Much More Visible */}
        <div className="grid grid-cols-3 gap-3">
          <Card 
            className="bg-gradient-to-br from-amber-500/40 to-orange-500/30 border-2 border-amber-400/60 cursor-pointer hover:from-amber-500/50 hover:to-orange-500/40 transition-all shadow-xl shadow-amber-500/30"
            onClick={() => setActiveTab('overview')}
          >
            <CardContent className="p-4 text-center">
              <div className="text-xs text-amber-300 mb-2 mystic-font font-bold tracking-wider">YAŞAM YOLU</div>
              <div className="text-4xl font-bold text-white drop-shadow-lg mb-1">{lifePathNumber}</div>
              <div className="text-xs text-amber-200 font-medium truncate">{numData.title}</div>
            </CardContent>
          </Card>
          
          <Card 
            className="bg-gradient-to-br from-orange-500/40 to-red-500/30 border-2 border-orange-400/60 cursor-pointer hover:from-orange-500/50 hover:to-red-500/40 transition-all shadow-xl shadow-orange-500/30"
            onClick={() => setCurrentSection('chinese')}
          >
            <CardContent className="p-4 text-center">
              <div className="text-xs text-orange-300 mb-2 mystic-font font-bold tracking-wider">ÇİN BURCU</div>
              <div className="text-3xl mb-1">{czData.icon}</div>
              <div className="text-xs text-orange-200 font-medium truncate">{czData.name}</div>
            </CardContent>
          </Card>
          
          <Card 
            className="bg-gradient-to-br from-purple-500/40 to-violet-500/30 border-2 border-purple-400/60 cursor-pointer hover:from-purple-500/50 hover:to-violet-500/40 transition-all shadow-xl shadow-purple-500/30"
            onClick={() => setCurrentSection('western')}
          >
            <CardContent className="p-4 text-center">
              <div className="text-xs text-purple-300 mb-2 mystic-font font-bold tracking-wider">BATI BURCU</div>
              <div className="text-3xl mb-1">{wzData.icon}</div>
              <div className="text-xs text-purple-200 font-medium truncate">{wzData.name}</div>
            </CardContent>
          </Card>
        </div>

        {/* Date Display */}
        <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full px-6 py-3 flex justify-between items-center">
          <span className="text-amber-400 mystic-font font-bold">{birthDate.split('-').reverse().join('.')}</span>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setCurrentSection('home')}
              className="hover:bg-amber-500/20"
            >
              <ChevronLeft className="w-5 h-5 text-amber-400" />
            </Button>
          </div>
        </div>

        {/* Tabs - Much More Visible */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <ScrollArea className="w-full whitespace-nowrap">
            <TabsList className="bg-transparent inline-flex gap-2 p-1">
              <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-amber-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-amber-500/30 bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-2 border-amber-400/50 rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[70px]">
                <Star className="w-5 h-5" />
                <span className="text-[10px] font-bold">GENEL</span>
              </TabsTrigger>
              <TabsTrigger value="strengths" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-green-500/30 bg-gradient-to-br from-green-500/20 to-green-600/10 border-2 border-green-400/50 rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[70px]">
                <TrendingUp className="w-5 h-5" />
                <span className="text-[10px] font-bold">GÜÇLÜ</span>
              </TabsTrigger>
              <TabsTrigger value="weaknesses" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/30 bg-gradient-to-br from-red-500/20 to-red-600/10 border-2 border-red-400/50 rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[70px]">
                <AlertTriangle className="w-5 h-5" />
                <span className="text-[10px] font-bold">ZAYIF</span>
              </TabsTrigger>
              <TabsTrigger value="career" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-400/50 rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[70px]">
                <Briefcase className="w-5 h-5" />
                <span className="text-[10px] font-bold">KARİYER</span>
              </TabsTrigger>
              <TabsTrigger value="love" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-pink-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-pink-500/30 bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-2 border-pink-400/50 rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[70px]">
                <Heart className="w-5 h-5" />
                <span className="text-[10px] font-bold">AŞK</span>
              </TabsTrigger>
              <TabsTrigger value="year" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/30 bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-2 border-purple-400/50 rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[70px]">
                <Calendar className="w-5 h-5" />
                <span className="text-[10px] font-bold">YIL</span>
              </TabsTrigger>
              <TabsTrigger value="birthday" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-cyan-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border-2 border-cyan-400/50 rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[70px]">
                <Sun className="w-5 h-5" />
                <span className="text-[10px] font-bold">GÜN</span>
              </TabsTrigger>
              <TabsTrigger value="deep" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/30 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-2 border-yellow-400/50 rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[70px]">
                <BookOpen className="w-5 h-5" />
                <span className="text-[10px] font-bold">DERİN</span>
              </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4 mt-4">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-amber-500/30 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-amber-400/80 text-sm mystic-font mb-1">YAŞAM YOLU</h3>
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mystic-font">{lifePathNumber}</h2>
                    <p className="text-amber-500/80 text-sm">{numData.subtitle}</p>
                  </div>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center border-2 border-amber-400/50 shadow-lg shadow-amber-500/20">
                    <span className="text-3xl">{numData.symbol}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm mb-4">{numData.desc}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-amber-300/80 text-sm italic">"{numData.quote}"</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-3">
              <Card className="bg-gradient-to-br from-green-500/20 to-green-600/10 border-l-4 border-green-500 shadow-lg shadow-green-500/10">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-green-400 text-xs font-bold">
                    <CheckCircle className="w-4 h-4" />
                    <span>GÜÇLÜ YÖNLER</span>
                  </div>
                  <p className="text-sm text-gray-300">{numData.strengths.slice(0, 3).join(', ')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-red-500/20 to-red-600/10 border-l-4 border-red-500 shadow-lg shadow-red-500/10">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-red-400 text-xs font-bold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>ZORLUKLAR</span>
                  </div>
                  <p className="text-sm text-gray-300">{numData.weaknesses.slice(0, 2).join(', ')}</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 shadow-lg shadow-amber-500/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Sparkles className="text-amber-500 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-amber-400 text-xs font-bold mystic-font">GİZLİ HEDİYE</div>
                    <div className="text-sm text-gray-300">{numData.hiddenGift}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compatibility Button */}
            <Button 
              onClick={() => setShowCompatibilityDialog(true)}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white font-bold py-5 rounded-xl shadow-lg shadow-pink-500/30"
            >
              <Heart className="w-5 h-5 mr-2" />
              İLİŞKİ UYUMU GÖR
            </Button>
          </TabsContent>

          {/* Strengths Tab */}
          <TabsContent value="strengths" className="space-y-4 mt-4">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-green-500/30 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mystic-font mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  GÜÇLÜ YÖNLERİNİZ
                </h3>
                <div className="space-y-3">
                  {numData.strengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-3 bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                      <div className="w-6 h-6 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <p className="text-gray-300">{strength}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl border border-green-500/30">
                  <h4 className="text-green-400 font-bold mb-2 text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> YAPMANIZ GEREKENLER
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {numData.strengths.slice(0, 3).map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        {s} alanınızda kendinizi geliştirin
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Weaknesses Tab */}
          <TabsContent value="weaknesses" className="space-y-4 mt-4">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-red-500/30 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mystic-font mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  ZAYIF YÖNLERİNİZ
                </h3>
                <div className="space-y-3">
                  {numData.weaknesses.map((weakness, index) => (
                    <div key={index} className="flex items-start gap-3 bg-red-500/10 rounded-lg p-3 border border-red-500/20">
                      <div className="w-6 h-6 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertTriangle className="w-3 h-3 text-red-400" />
                      </div>
                      <p className="text-gray-300">{weakness}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl border border-red-500/30">
                  <h4 className="text-red-400 font-bold mb-2 text-sm flex items-center gap-2">
                    <Shield className="w-4 h-4" /> KAÇINMANIZ GEREKENLER
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {numData.weaknesses.slice(0, 3).map((w, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        {w} eğiliminize karşı dikkatli olun
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Career Tab */}
          <TabsContent value="career" className="space-y-4 mt-4">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-blue-500/30 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mystic-font mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                  KARİYER YOLUNUZ
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{numData.title} sayısı için ideal kariyerler: {numData.career.join(', ')}. Bu alanlarda doğal yeteneklerinizi kullanabilirsiniz.</p>
                <div className="space-y-3">
                  {numData.career.map((c, i) => (
                    <div key={i} className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-lg p-4 flex items-center gap-3 border border-blue-500/20">
                      <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center">
                        <Briefcase className="text-blue-400 w-5 h-5" />
                      </div>
                      <span className="text-gray-300 font-medium">{c}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Love Tab */}
          <TabsContent value="love" className="space-y-4 mt-4">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-pink-500/30 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mystic-font mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-400" />
                  AŞK & İLİŞKİLER
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{numData.love}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-4 rounded-xl text-center border border-green-500/30">
                    <div className="text-green-400 text-xs mb-1 font-bold">UYUMLU</div>
                    <div className="text-lg font-bold text-white">{numData.loveMatch}</div>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 p-4 rounded-xl text-center border border-red-500/30">
                    <div className="text-red-400 text-xs mb-1 font-bold">ZORLAYICI</div>
                    <div className="text-lg font-bold text-white">{numData.loveChallenge}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Personal Year Tab - Enhanced */}
          <TabsContent value="year" className="space-y-4 mt-4">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-purple-500/30 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400 mystic-font mb-2 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-purple-400" />
                  KİŞİSEL YILINIZ
                </h3>
                <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{personalYear}</div>
                <p className="text-purple-300 text-lg font-medium mb-4">{pYearData?.theme}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{pYearData?.desc}</p>
                
                {pYearData && (
                  <>
                    {/* Green Box - Do */}
                    <div className="mb-4 p-4 bg-gradient-to-br from-green-500/30 to-green-600/10 rounded-xl border border-green-500/40 shadow-lg shadow-green-500/10">
                      <h4 className="text-green-400 font-bold mb-3 text-sm flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" /> YAPMANIZ GEREKENLER
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        {pYearData.advice.slice(0, 4).map((adv, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Red Box - Avoid */}
                    <div className="p-4 bg-gradient-to-br from-red-500/30 to-red-600/10 rounded-xl border border-red-500/40 shadow-lg shadow-red-500/10">
                      <h4 className="text-red-400 font-bold mb-3 text-sm flex items-center gap-2">
                        <X className="w-5 h-5" /> KAÇINMANIZ GEREKENLER
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        {pYearData.avoid.slice(0, 4).map((av, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                            {av}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Birth Day Energy Tab */}
          <TabsContent value="birthday" className="space-y-4 mt-4">
            {bdeData && (
              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-cyan-500/30 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mystic-font mb-2 flex items-center gap-2">
                    <Sun className="w-6 h-6 text-cyan-400" />
                    DOĞUM GÜNÜ ENERJİSİ
                  </h3>
                  <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{birthDayEnergy}</div>
                  <p className="text-cyan-300 text-lg font-medium mb-4">{bdeData.title}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{bdeData.desc}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-cyan-400 font-bold mb-3 text-sm">ÖZELLİKLER</h4>
                    <div className="flex flex-wrap gap-2">
                      {bdeData.traits.map((trait, i) => (
                        <span key={i} className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm text-cyan-300 border border-cyan-500/30">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl border border-cyan-500/30">
                    <h4 className="text-cyan-400 font-bold mb-2 text-sm">ETKİNİZ</h4>
                    <p className="text-sm text-gray-300">{bdeData.influence}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Deep Analysis Tab - Enhanced */}
          <TabsContent value="deep" className="space-y-4 mt-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mystic-font flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              DERİNLEMESİNE ANALİZ
            </h3>
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-4 pb-4">
                {numData.deepAnalysis.map((item, index) => (
                  <Card key={index} className="bg-gradient-to-br from-white/15 to-white/5 border-amber-500/40 flex-shrink-0 w-80 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center border border-amber-400/50">
                          <span className="text-amber-400 font-bold text-sm">{index + 1}</span>
                        </div>
                        <h4 className="text-amber-400 font-bold mystic-font">{item.title}</h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-normal">{item.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <p className="text-center text-amber-400/60 text-xs flex items-center justify-center gap-2">
              <ChevronRight className="w-4 h-4" /> Daha fazla bilgi için yatay kaydırın
            </p>
          </TabsContent>
        </Tabs>
      </div>
    );
  };


  // Render Chinese Zodiac Section
  const renderChineseZodiac = () => {
    if (!czData) return null;

    return (
      <div className="space-y-4">
        <Button 
          variant="ghost" 
          onClick={() => setCurrentSection('results')} 
          className="text-gray-400 hover:text-white hover:bg-white/10"
        >
          <ChevronLeft className="w-4 h-4 mr-2" /> Geri Dön
        </Button>

        <Card className="bg-gradient-to-br from-white/10 to-white/5 border-orange-500/30 text-center shadow-lg">
          <CardContent className="p-6">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-600/20 flex items-center justify-center text-5xl border-2 border-orange-400/50 shadow-lg shadow-orange-500/20">
              {czData.icon}
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mystic-font mb-1">{czData.name} YILI</h2>
            <p className="text-orange-300/80 text-sm mb-4">{czData.element} {czData.name}</p>
            <p className="text-gray-300 leading-relaxed text-left">{czData.desc}</p>
          </CardContent>
        </Card>

        <Tabs defaultValue="friends" className="w-full">
          <TabsList className="bg-transparent w-full grid grid-cols-4 gap-1">
            <TabsTrigger value="friends" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/30 data-[state=active]:to-green-600/20 data-[state=active]:text-green-400 data-[state=active]:border-green-500/50 bg-white/5 border border-white/10 rounded-lg">
              <Users className="w-4 h-4 mr-1" /> Dost
            </TabsTrigger>
            <TabsTrigger value="enemies" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500/30 data-[state=active]:to-red-600/20 data-[state=active]:text-red-400 data-[state=active]:border-red-500/50 bg-white/5 border border-white/10 rounded-lg">
              <Shield className="w-4 h-4 mr-1" /> Düşman
            </TabsTrigger>
            <TabsTrigger value="traits" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/30 data-[state=active]:to-blue-600/20 data-[state=active]:text-blue-400 data-[state=active]:border-blue-500/50 bg-white/5 border border-white/10 rounded-lg">
              <Star className="w-4 h-4 mr-1" /> Özellikler
            </TabsTrigger>
            <TabsTrigger value="deep" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500/30 data-[state=active]:to-amber-600/20 data-[state=active]:text-amber-400 data-[state=active]:border-amber-500/50 bg-white/5 border border-white/10 rounded-lg">
              <BookOpen className="w-4 h-4 mr-1" /> Detay
            </TabsTrigger>
          </TabsList>

          <TabsContent value="friends" className="space-y-3 mt-4">
            {czData.friends.map((friend, i) => (
              <Card key={i} className="bg-gradient-to-r from-green-500/20 to-green-600/10 border-l-4 border-green-500 shadow-lg shadow-green-500/10">
                <CardContent className="p-4">
                  <h4 className="text-green-400 font-bold mb-1">{friend}</h4>
                  <p className="text-sm text-gray-300">{czData.name} ve {friend} uyumu mükemmeldir.</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="enemies" className="space-y-3 mt-4">
            {czData.enemies.map((enemy, i) => (
              <Card key={i} className="bg-gradient-to-r from-red-500/20 to-red-600/10 border-l-4 border-red-500 shadow-lg shadow-red-500/10">
                <CardContent className="p-4">
                  <h4 className="text-red-400 font-bold mb-1">{enemy}</h4>
                  <p className="text-sm text-gray-300">{czData.name} ve {enemy} zıt karakterlerdir.</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="traits" className="space-y-3 mt-4">
            <div className="grid grid-cols-2 gap-3">
              {czData.strengths.map((s, i) => (
                <div key={i} className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-3 rounded-lg border border-green-500/30">
                  <div className="text-green-400 text-xs mb-1 font-bold">GÜÇLÜ YÖN</div>
                  <div className="text-sm text-gray-300">{s}</div>
                </div>
              ))}
              {czData.weaknesses.map((w, i) => (
                <div key={i} className="bg-gradient-to-br from-red-500/20 to-red-600/10 p-3 rounded-lg border border-red-500/30">
                  <div className="text-red-400 text-xs mb-1 font-bold">ZAYIF YÖN</div>
                  <div className="text-sm text-gray-300">{w}</div>
                </div>
              ))}
            </div>
            <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30">
              <CardContent className="p-4">
                <h4 className="text-amber-400 font-bold mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> GİZLİ HEDİYE
                </h4>
                <p className="text-sm text-gray-300">{czData.hiddenGift}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deep" className="space-y-4 mt-4">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-4 pb-4">
                {czData.deepAnalysis.map((item, index) => (
                  <Card key={index} className="bg-gradient-to-br from-white/15 to-white/5 border-orange-500/40 flex-shrink-0 w-80 shadow-lg">
                    <CardContent className="p-4">
                      <h4 className="text-orange-400 font-bold mb-2 mystic-font">{item.title}</h4>
                      <p className="text-sm text-gray-300 whitespace-normal">{item.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

  // Render Western Zodiac Section
  const renderWesternZodiac = () => {
    if (!wzData) return null;

    return (
      <div className="space-y-4">
        <Button 
          variant="ghost" 
          onClick={() => setCurrentSection('results')} 
          className="text-gray-400 hover:text-white hover:bg-white/10"
        >
          <ChevronLeft className="w-4 h-4 mr-2" /> Geri Dön
        </Button>

        <Card className="bg-gradient-to-br from-white/10 to-white/5 border-purple-500/30 text-center shadow-lg">
          <CardContent className="p-6">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/20 flex items-center justify-center text-5xl border-2 border-purple-400/50 shadow-lg shadow-purple-500/20">
              {wzData.icon}
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400 mystic-font mb-1">{wzData.name}</h2>
            <p className="text-purple-300/80 text-sm mb-4">{wzData.dates}</p>
            <p className="text-gray-300 leading-relaxed text-left">{wzData.desc}</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30">
            <CardContent className="p-4">
              <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                <Flame className="w-4 h-4" /> ELEMENT
              </h4>
              <p className="text-sm text-gray-300">{wzData.element}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30">
            <CardContent className="p-4">
              <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                <Moon className="w-4 h-4" /> GEZEGEN
              </h4>
              <p className="text-sm text-gray-300">{wzData.rulingPlanet}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30">
          <CardContent className="p-4">
            <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> GÜÇLÜ YÖNLER
            </h4>
            <p className="text-sm text-gray-300">{wzData.strengths.join(', ')}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30">
          <CardContent className="p-4">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> ZORLUKLAR
            </h4>
            <p className="text-sm text-gray-300">{wzData.weaknesses.join(', ')}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500/20 to-pink-600/10 border border-pink-500/30">
          <CardContent className="p-4">
            <h4 className="text-pink-400 font-bold mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4" /> AŞK
            </h4>
            <p className="text-sm text-gray-300 mb-3">{wzData.love}</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-3 rounded-lg text-center border border-green-500/30">
                <div className="text-green-400 text-xs font-bold">UYUMLU</div>
                <div className="text-sm text-white font-medium">{wzData.loveMatch}</div>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 p-3 rounded-lg text-center border border-red-500/30">
                <div className="text-red-400 text-xs font-bold">ZORLAYICI</div>
                <div className="text-sm text-white font-medium">{wzData.loveChallenge}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Render Discover Section - Enhanced
  const renderDiscover = () => {
    if (!lifePathNumber) {
      return (
        <div className="text-center py-10">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center">
            <Search className="w-10 h-10 text-amber-400" />
          </div>
          <p className="text-gray-400 mb-4">Lütfen önce doğum tarihinizi girin</p>
          <Button 
            onClick={() => setCurrentSection('home')} 
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold"
          >
            Doğum Tarihi Gir
          </Button>
        </div>
      );
    }

    const celebrities = discoverData.celebrities[lifePathNumber] || [];
    const brands = discoverData.brands[lifePathNumber] || [];
    const countries = discoverData.countries[lifePathNumber] || [];

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mystic-font">Keşfet</h2>
          <p className="text-gray-400 text-sm">Yaşam yolu {lifePathNumber} ile uyumlu</p>
        </div>

        <Tabs value={discoverTab} onValueChange={(v) => setDiscoverTab(v as any)} className="w-full">
          <TabsList className="bg-transparent w-full grid grid-cols-3 gap-3">
            <TabsTrigger 
              value="celebrities" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-amber-500/30 bg-gradient-to-br from-amber-500/30 to-amber-600/20 border-2 border-amber-400/50 rounded-xl py-4 flex flex-col items-center gap-1"
            >
              <Users className="w-6 h-6 mb-1" />
              <span className="text-sm font-bold">ÜNLÜLER</span>
            </TabsTrigger>
            <TabsTrigger 
              value="brands" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-amber-500/30 bg-gradient-to-br from-amber-500/30 to-amber-600/20 border-2 border-amber-400/50 rounded-xl py-4 flex flex-col items-center gap-1"
            >
              <Building2 className="w-6 h-6 mb-1" />
              <span className="text-sm font-bold">MARKALAR</span>
            </TabsTrigger>
            <TabsTrigger 
              value="countries" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-amber-500/30 bg-gradient-to-br from-amber-500/30 to-amber-600/20 border-2 border-amber-400/50 rounded-xl py-4 flex flex-col items-center gap-1"
            >
              <Globe className="w-6 h-6 mb-1" />
              <span className="text-sm font-bold">ÜLKELER</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="celebrities" className="space-y-3 mt-4">
            {celebrities.map((celeb, i) => (
              <Card key={i} className="bg-gradient-to-br from-white/10 to-white/5 border-amber-500/30 hover:border-amber-400/50 transition-all">
                <CardContent className="p-4">
                  <h4 className="text-amber-400 font-bold text-lg">{celeb.name}</h4>
                  <p className="text-sm text-gray-300 mt-1">{celeb.description}</p>
                  <p className="text-xs text-amber-400/60 mt-2">{celeb.birthDate}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="brands" className="space-y-3 mt-4">
            {brands.map((brand, i) => (
              <Card key={i} className="bg-gradient-to-br from-white/10 to-white/5 border-amber-500/30 hover:border-amber-400/50 transition-all">
                <CardContent className="p-4">
                  <h4 className="text-amber-400 font-bold text-lg">{brand.name}</h4>
                  <p className="text-sm text-gray-300 mt-1">{brand.description}</p>
                  <p className="text-xs text-amber-400/60 mt-2">{brand.foundedDate}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="countries" className="space-y-3 mt-4">
            {countries.map((country, i) => (
              <Card key={i} className="bg-gradient-to-br from-white/10 to-white/5 border-amber-500/30 hover:border-amber-400/50 transition-all">
                <CardContent className="p-4">
                  <h4 className="text-amber-400 font-bold text-lg">{country.name}</h4>
                  <p className="text-sm text-gray-300 mt-1">{country.description}</p>
                  <p className="text-xs text-amber-400/60 mt-2">{country.country}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    );
  };


  // Render Calendar Section - Real Calendar with Clickable Days
  const renderCalendar = () => {
    const calendarDays = generateCalendarDays(currentMonth, currentYear);
    const monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    const dayNames = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
    
    // Get first day of month (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday start

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mystic-font">Takvim</h2>
          <p className="text-gray-400 text-sm">{new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl p-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
            className="hover:bg-amber-500/20"
          >
            <ChevronLeft className="w-5 h-5 text-amber-400" />
          </Button>
          <span className="text-amber-400 font-bold text-lg">{monthNames[currentMonth]} {currentYear}</span>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => {
              if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}
            className="hover:bg-amber-500/20"
          >
            <ChevronRight className="w-5 h-5 text-amber-400" />
          </Button>
        </div>

        {/* Calendar Grid */}
        <Card className="bg-gradient-to-br from-white/10 to-white/5 border-amber-500/30">
          <CardContent className="p-4">
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day, i) => (
                <div key={i} className="text-center text-xs text-amber-400/60 font-bold py-2">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty cells for days before the first day of month */}
              {Array.from({ length: adjustedFirstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}
              
              {/* Actual days */}
              {calendarDays.map((day, i) => {
                const isToday = new Date().getDate() === day.day && new Date().getMonth() === day.month && new Date().getFullYear() === day.year;
                return (
                  <button
                    key={i}
                    onClick={() => handleDayClick(day)}
                    className={`aspect-square rounded-lg flex flex-col items-center justify-center transition-all hover:scale-105 ${
                      isToday 
                        ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/30' 
                        : 'bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-400/50'
                    }`}
                  >
                    <span className={`text-sm font-bold ${isToday ? 'text-black' : 'text-white'}`}>{day.day}</span>
                    <span className={`text-xs ${isToday ? 'text-black/70' : 'text-amber-400/60'}`}>{day.dayNumber}</span>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Today's Reading */}
        <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500/30 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-2">{dailyReading.dayNumber}</div>
              <div className="text-xl text-amber-300 font-semibold">{dailyReading.theme}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20">
          <CardContent className="p-4">
            <h4 className="text-amber-400 font-bold mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> ENERJİ
            </h4>
            <p className="text-sm text-gray-300">{dailyReading.energy}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/30">
          <CardContent className="p-4">
            <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> YAPMANIZ GEREKENLER
            </h4>
            <p className="text-sm text-gray-300">{dailyReading.advice}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-500/20 to-red-600/10 border-red-500/30">
          <CardContent className="p-4">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
              <X className="w-4 h-4" /> KAÇINMANIZ GEREKENLER
            </h4>
            <p className="text-sm text-gray-300">{dailyReading.avoid}</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/30">
            <CardContent className="p-4">
              <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                <Star className="w-4 h-4" /> ŞANSLI SAYILAR
              </h4>
              <p className="text-sm text-gray-300">{dailyReading.luckyNumbers.join(', ')}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-pink-500/30">
            <CardContent className="p-4">
              <h4 className="text-pink-400 font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> ŞANSLI RENKLER
              </h4>
              <p className="text-sm text-gray-300">{dailyReading.luckyColors.join(', ')}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30">
          <CardContent className="p-4">
            <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4" /> UYGUN AKTİVİTELER
            </h4>
            <ul className="space-y-1">
              {dailyReading.activities.map((activity, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-blue-400" /> {activity}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500/30">
          <CardContent className="p-4">
            <h4 className="text-amber-400 font-bold mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> 2026 YILI TEMATI
            </h4>
            <p className="text-sm text-gray-300">{yearlyTheme}</p>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Render Profile Section - Enhanced
  const renderProfile = () => (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mystic-font">Profil</h2>
      </div>

      {!isLoggedIn ? (
        <Card className="bg-gradient-to-br from-white/10 to-white/5 border-amber-500/30">
          <CardContent className="p-6 space-y-4">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center border-2 border-amber-400/50">
                <User className="w-10 h-10 text-amber-400" />
              </div>
              <p className="text-gray-400">Profil bilgilerinizi kaydetmek için giriş yapın</p>
            </div>
            <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
              <DialogTrigger asChild>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold py-6 rounded-xl shadow-lg shadow-amber-500/30">
                  <User className="w-5 h-5 mr-2" /> Profil Oluştur
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-amber-500/30 text-white max-w-sm max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mystic-font">Profil Bilgileri</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label className="text-amber-400">İsim</Label>
                    <Input 
                      value={userProfile.firstName}
                      onChange={(e) => setUserProfile({...userProfile, firstName: e.target.value})}
                      className="bg-black/40 border-amber-500/30 focus:border-amber-400"
                      placeholder="Adınız"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-amber-400">Soyisim</Label>
                    <Input 
                      value={userProfile.lastName}
                      onChange={(e) => setUserProfile({...userProfile, lastName: e.target.value})}
                      className="bg-black/40 border-amber-500/30 focus:border-amber-400"
                      placeholder="Soyadınız"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-amber-400">E-posta</Label>
                    <Input 
                      type="email"
                      value={userProfile.email}
                      onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                      className="bg-black/40 border-amber-500/30 focus:border-amber-400"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-amber-400">Doğum Tarihi</Label>
                    <Input 
                      type="date"
                      value={userProfile.birthDate}
                      onChange={(e) => setUserProfile({...userProfile, birthDate: e.target.value})}
                      className="bg-black/40 border-amber-500/30 focus:border-amber-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-amber-400">Cinsiyet</Label>
                    <Input 
                      value={userProfile.gender}
                      onChange={(e) => setUserProfile({...userProfile, gender: e.target.value})}
                      className="bg-black/40 border-amber-500/30 focus:border-amber-400"
                      placeholder="Erkek / Kadın / Diğer"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-amber-400">Ülke</Label>
                    <Input 
                      value={userProfile.country}
                      onChange={(e) => setUserProfile({...userProfile, country: e.target.value})}
                      className="bg-black/40 border-amber-500/30 focus:border-amber-400"
                      placeholder="Ülkeniz"
                    />
                  </div>
                  <Button onClick={saveProfile} className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold py-6 rounded-xl">
                    <Sparkles className="w-5 h-5 mr-2" /> Kaydet
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ) : (
        <>
          <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-500/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center border-2 border-amber-400/50">
                  <User className="w-8 h-8 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{userProfile.firstName} {userProfile.lastName}</h3>
                  <p className="text-amber-400/80 text-sm">{userProfile.email}</p>
                  {lifePathNumber && (
                    <p className="text-gray-400 text-xs mt-1">Yaşam Yolu: {lifePathNumber}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20">
            <CardHeader>
              <CardTitle className="text-amber-400 mystic-font text-lg flex items-center gap-2">
                <User className="w-5 h-5" /> Hesap
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-amber-400 hover:bg-amber-500/10">
                <User className="w-4 h-4 mr-3" /> Kişisel Bilgiler
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-amber-400 hover:bg-amber-500/10">
                <Lock className="w-4 h-4 mr-3" /> Giriş ve Güvenlik
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-amber-400 hover:bg-amber-500/10">
                <Settings className="w-4 h-4 mr-3" /> Ayarlar
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20">
            <CardHeader>
              <CardTitle className="text-amber-400 mystic-font text-lg flex items-center gap-2">
                <Heart className="w-5 h-5" /> İlişki Uyumu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-300 hover:text-pink-400 hover:bg-pink-500/10"
                onClick={() => setShowCompatibilityDialog(true)}
              >
                <Heart className="w-4 h-4 mr-3" /> Uyum Analizi Yap
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20">
            <CardHeader>
              <CardTitle className="text-amber-400 mystic-font text-lg flex items-center gap-2">
                <HelpCircle className="w-5 h-5" /> Destek
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-amber-400 hover:bg-amber-500/10">
                <MessageCircle className="w-4 h-4 mr-3" /> Destek ile İletişim
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-amber-400 hover:bg-amber-500/10">
                <Info className="w-4 h-4 mr-3" /> Genel Bilgiler
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-amber-400 hover:bg-amber-500/10">
                <HelpCircle className="w-4 h-4 mr-3" /> Yardım
              </Button>
            </CardContent>
          </Card>

          <Button 
            variant="ghost" 
            className="w-full text-red-400 hover:text-red-300 hover:bg-red-500/10"
            onClick={() => {
              setIsLoggedIn(false);
              setUserProfile({ firstName: '', lastName: '', email: '', birthDate: '', gender: '', country: '' });
              toast.success('Çıkış yapıldı');
            }}
          >
            <LogOut className="w-4 h-4 mr-2" /> Çıkış Yap
          </Button>
        </>
      )}
    </div>
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 px-4 py-3">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <Star className="text-white w-5 h-5" />
            </div>
            <h1 className="mystic-font text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">SACRED NUMBERS</h1>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setCurrentSection('home')}
            className="hover:bg-amber-500/20"
          >
            <Sparkles className="text-amber-400 w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-24 px-4 max-w-md mx-auto">
        {currentSection === 'home' && renderHome()}
        {currentSection === 'results' && renderResults()}
        {currentSection === 'chinese' && renderChineseZodiac()}
        {currentSection === 'western' && renderWesternZodiac()}
        {currentSection === 'discover' && renderDiscover()}
        {currentSection === 'calendar' && renderCalendar()}
        {currentSection === 'profile' && renderProfile()}
      </main>

      {/* Bottom Navigation - Enhanced */}
      <nav className="fixed bottom-0 w-full bg-black/70 backdrop-blur-xl border-t border-white/10 px-2 py-2 z-50">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <button 
            onClick={() => setCurrentSection('discover')}
            className={`nav-btn flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${currentSection === 'discover' ? 'text-amber-400 bg-amber-500/20' : 'text-gray-400 hover:text-amber-400 hover:bg-white/5'}`}
          >
            <Search className="w-5 h-5" />
            <span className="text-xs font-medium">Keşfet</span>
          </button>
          <button 
            onClick={() => setCurrentSection('results')}
            className={`nav-btn flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${currentSection === 'results' || currentSection === 'chinese' || currentSection === 'western' ? 'text-amber-400 bg-amber-500/20' : 'text-gray-400 hover:text-amber-400 hover:bg-white/5'}`}
          >
            <Star className="w-5 h-5" />
            <span className="text-xs font-medium">Analiz</span>
          </button>
          <button 
            onClick={() => setCurrentSection('home')}
            className={`nav-btn flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${currentSection === 'home' ? 'text-amber-400 bg-amber-500/20' : 'text-gray-400 hover:text-amber-400 hover:bg-white/5'}`}
          >
            <div className="w-12 h-12 -mt-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30 border-2 border-black">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <span className="text-xs font-medium">Ana Sayfa</span>
          </button>
          <button 
            onClick={() => setCurrentSection('calendar')}
            className={`nav-btn flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${currentSection === 'calendar' ? 'text-amber-400 bg-amber-500/20' : 'text-gray-400 hover:text-amber-400 hover:bg-white/5'}`}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs font-medium">Takvim</span>
          </button>
          <button 
            onClick={() => setCurrentSection('profile')}
            className={`nav-btn flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${currentSection === 'profile' ? 'text-amber-400 bg-amber-500/20' : 'text-gray-400 hover:text-amber-400 hover:bg-white/5'}`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Profil</span>
          </button>
        </div>
      </nav>

      {/* Day Dialog */}
      <Dialog open={showDayDialog} onOpenChange={setShowDayDialog}>
        <DialogContent className="bg-gray-900 border-amber-500/30 text-white max-w-sm max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mystic-font">
              {selectedDay?.day}.{selectedDay?.month ? selectedDay.month + 1 : 1}.{selectedDay?.year}
            </DialogTitle>
          </DialogHeader>
          {selectedDay && (
            <div className="space-y-4 mt-4">
              <div className="text-center p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-xl border border-amber-500/30">
                <div className="text-5xl font-bold text-amber-400 mb-2">{selectedDay.dayNumber}</div>
                <div className="text-amber-300">{selectedDay.theme}</div>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl border border-green-500/30">
                <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> YAPMANIZ GEREKENLER
                </h4>
                <p className="text-sm text-gray-300">Bu gün {selectedDay.theme.toLowerCase()} enerjisiyle uyumlu aktiviteler yapın.</p>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl border border-red-500/30">
                <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                  <X className="w-4 h-4" /> KAÇINMANIZ GEREKENLER
                </h4>
                <p className="text-sm text-gray-300">Bu gün zıt enerjili aktivitelerden kaçının.</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Compatibility Dialog */}
      <Dialog open={showCompatibilityDialog} onOpenChange={setShowCompatibilityDialog}>
        <DialogContent className="bg-gray-900 border-pink-500/30 text-white max-w-sm max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mystic-font flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-400" /> İlişki Uyumu
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-gradient-to-br from-pink-500/20 to-rose-500/10 rounded-xl border border-pink-500/30">
              <p className="text-sm text-gray-300 mb-3">Sizin yaşam yolunuz: <span className="text-pink-400 font-bold text-lg">{lifePathNumber}</span></p>
              <Label className="text-pink-400">Partnerinizin yaşam yolu numarası:</Label>
              <div className="flex gap-2 mt-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCompatibilityPartnerNumber(num)}
                    className={`w-10 h-10 rounded-lg font-bold transition-all ${
                      compatibilityPartnerNumber === num
                        ? 'bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30'
                        : 'bg-white/10 text-gray-300 hover:bg-pink-500/20 border border-white/20'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
            
            {(() => {
              const compat = getCompatibilityData();
              if (!compat) return null;
              return (
                <>
                  <div className="text-center p-4 bg-gradient-to-br from-pink-500/20 to-rose-500/10 rounded-xl border border-pink-500/30">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-2">%{compat.compatibility}</div>
                    <div className="text-pink-300 font-medium">{compat.title}</div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20">
                    <p className="text-sm text-gray-300">{compat.desc}</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl border border-green-500/30">
                    <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> GÜÇLÜ YÖNLER
                    </h4>
                    <p className="text-sm text-gray-300">{compat.strengths}</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl border border-red-500/30">
                    <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> ZORLUKLAR
                    </h4>
                    <p className="text-sm text-gray-300">{compat.challenges}</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl border border-amber-500/30">
                    <h4 className="text-amber-400 font-bold mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> TAVSİYE
                    </h4>
                    <p className="text-sm text-gray-300">{compat.advice}</p>
                  </div>
                </>
              );
            })()}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
