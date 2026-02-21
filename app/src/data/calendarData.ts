// Calendar Data - Daily Numerology Readings
export interface DailyReading {
  dayNumber: number;
  theme: string;
  energy: string;
  advice: string;
  avoid: string;
  luckyNumbers: number[];
  luckyColors: string[];
  activities: string[];
}

export const calendarData: { [key: string]: DailyReading } = {
  // Day 1 - New Beginnings
  "1": {
    dayNumber: 1,
    theme: "Yeni Başlangıçlar",
    energy: "Yaratıcı, özgün ve liderlik enerjisi. Bugün yeni projelere başlamak için ideal. Kendinizi ifade etmekten çekinmeyin.",
    advice: "Yeni projelere başlayın, girişimlerde bulunun, liderlik pozisyonlarına talip olun. Bağımsız kararlar alın.",
    avoid: "Eski ilişkilere tutunmak, başkalarının kararlarını beklemek, pasif kalmak.",
    luckyNumbers: [1, 10, 19, 28],
    luckyColors: ["Altın", "Sarı", "Turuncu"],
    activities: ["Yeni iş başlangıçları", "Sunum yapmak", "Önemli kararlar almak", "Spor yapmak", "Yaratıcı projelere başlamak"]
  },
  // Day 2 - Cooperation
  "2": {
    dayNumber: 2,
    theme: "İşbirliği ve Diplomasi",
    energy: "Hassas, sezgisel ve işbirlikçi enerji. Bugün ilişkiler ve ortaklıklar için uygun. Diplomasi kullanın.",
    advice: "Partnerlikler kurun, diplomasi kullanın, sezgilerinize güvenin. Sabırlı olun ve dinleyin.",
    avoid: "Aceleci kararlar, yalnız hareket etmek, çatışmalara girmek.",
    luckyNumbers: [2, 11, 20, 29],
    luckyColors: ["Beyaz", "Gümüş", "Açık Mavi"],
    activities: ["Görüşmeler yapmak", "Arabuluculuk", "İlişkileri güçlendirmek", "Meditasyon yapmak", "Sanatsal aktiviteler"]
  },
  // Day 3 - Creativity
  "3": {
    dayNumber: 3,
    theme: "Yaratıcılık ve Sosyallik",
    energy: "Neşeli, yaratıcı ve sosyal enerji. Bugün eğlenmek, yaratmak ve sosyalleşmek için mükemmel.",
    advice: "Sanatsal projelere yönelin, sosyal çevrenizi genişletin, eğlenin. Kendinizi ifade edin.",
    avoid: "Dağınıklık, yüzeysel ilişkiler, ciddiyetsizlik.",
    luckyNumbers: [3, 12, 21, 30],
    luckyColors: ["Mor", "Pembe", "Sarı"],
    activities: ["Partilere katılmak", "Sanatsal aktiviteler", "Yazı yazmak", "Müzik dinlemek", "Sosyal medya paylaşımları"]
  },
  // Day 4 - Work
  "4": {
    dayNumber: 4,
    theme: "Çalışma ve Düzen",
    energy: "Pratik, disiplinli ve organize enerji. Bugün çalışmak, plan yapmak ve düzen kurmak için ideal.",
    advice: "Temelleri sağlamlaştırın, disiplinli çalışın, organizasyon kurun. Detaylara dikkat edin.",
    avoid: "Risk almak, düzensizlik, tembellik.",
    luckyNumbers: [4, 13, 22, 31],
    luckyColors: ["Kahverengi", "Yeşil", "Gri"],
    activities: ["Proje planlamak", "Bütçe yapmak", "Ev düzenlemek", "Egzersiz rutini", "Detaylı çalışmalar"]
  },
  // Day 5 - Change
  "5": {
    dayNumber: 5,
    theme: "Değişim ve Macera",
    energy: "Özgür, maceracı ve değişken enerji. Bugün yeni deneyimler, seyahat ve değişiklikler için uygun.",
    advice: "Maceralara atılın, seyahat edin, yeni deneyimler kazanın. Esnek davranın.",
    avoid: "Kısıtlanmış hissetmek, rutine bağlı kalmak, sabit kalmak.",
    luckyNumbers: [5, 14, 23],
    luckyColors: ["Mavi", "Turkuaz", "Gri"],
    activities: ["Seyahat etmek", "Yeni yerler keşfetmek", "Spontane planlar", "Açık hava aktiviteleri", "Yeni hobiler denemek"]
  },
  // Day 6 - Family
  "6": {
    dayNumber: 6,
    theme: "Sorumluluk ve Aile",
    energy: "Şefkatli, sorumlu ve aile odaklı enerji. Bugün aile, ev ve ilişkiler için ideal.",
    advice: "Aile ilişkilerini güçlendirin, ev düzenleyin, başkalarına hizmet edin. Sevgi gösterin.",
    avoid: "Kendini feda etmek, aşırı kontrolcülük, sorumlulukları ertelemek.",
    luckyNumbers: [6, 15, 24],
    luckyColors: ["Pembe", "Açık Yeşil", "Beyaz"],
    activities: ["Aile vakti", "Ev düzenlemek", "Yemek yapmak", "Arkadaşlarla buluşmak", "Hayır işleri yapmak"]
  },
  // Day 7 - Spirituality
  "7": {
    dayNumber: 7,
    theme: "İçsel Yolculuk",
    energy: "Derin, manevi ve analitik enerji. Bugün içe dönük çalışmalar, araştırma ve maneviyat için uygun.",
    advice: "Meditasyon yapın, bilgi edinin, manevi gelişime odaklanın. Yalnız zaman geçirin.",
    avoid: "Yüzeysellik, sosyal izolasyon, aşırı analiz.",
    luckyNumbers: [7, 16, 25],
    luckyColors: ["Mor", "Lacivert", "Beyaz"],
    activities: ["Meditasyon yapmak", "Kitap okumak", "Araştırma yapmak", "Doğa yürüyüşü", "Yoga yapmak"]
  },
  // Day 8 - Power
  "8": {
    dayNumber: 8,
    theme: "Güç ve Başarı",
    energy: "Güçlü, başarı odaklı ve maddi enerji. Bugün kariyer, para ve hedefler için ideal.",
    advice: "Kariyer hedeflerinize odaklanın, finansal büyümeyi hedefleyin. Gücünüzü kullanın.",
    avoid: "İşkoliklik, güç kullanımı, açgözlülük.",
    luckyNumbers: [8, 17, 26],
    luckyColors: ["Siyah", "Koyu Mavi", "Altın"],
    activities: ["İş görüşmeleri", "Finansal planlama", "Kariyer hedefleri", "Liderlik göstermek", "Yatırım yapmak"]
  },
  // Day 9 - Completion
  "9": {
    dayNumber: 9,
    theme: "Tamamlanma ve Bırakma",
    energy: "Evrensel, şefkatli ve tamamlayıcı enerji. Bugün eskiyi bırakmak ve bağışta bulunmak için uygun.",
    advice: "Eski bağları koparın, bağışta bulunun, insani yardım yapın. Affedin ve bırakın.",
    avoid: "Yeni başlangıçlar, tutunmak, bencil olmak.",
    luckyNumbers: [9, 18, 27],
    luckyColors: ["Kırmızı", "Bordo", "Altın"],
    activities: ["Bağış yapmak", "Gönüllü çalışmak", "Eski eşyaları vermek", "Affetmek", "Meditasyon yapmak"]
  },
  // Master Number 11 - Intuition
  "11": {
    dayNumber: 11,
    theme: "Sezgi ve Aydınlanma",
    energy: "Yüksek frekanslı, sezgisel ve aydınlatıcı enerji. Bugün sezgilerinizi dinlemek ve ilham almak için ideal.",
    advice: "Sezgilerinize güvenin, meditasyon yapın, yüksek bilgileri kanalize edin. İlham alın.",
    avoid: "Mantığı dinlemek, sezgileri görmezden gelmek, düşük frekanslı aktiviteler.",
    luckyNumbers: [11, 2, 20],
    luckyColors: ["Beyaz", "Gümüş", "Açık Mor"],
    activities: ["Derin meditasyon", "Sezgi geliştirme", "İlham almak", "Manevi pratikler", "Yaratıcı görselleştirme"]
  },
  // Master Number 22 - Master Builder
  "22": {
    dayNumber: 22,
    theme: "Büyük Projeler",
    energy: "Pratik, vizyoner ve inşaatçı enerji. Bugün büyük projelere başlamak ve somut sonuçlar almak için uygun.",
    advice: "Büyük projelere başlayın, vizyonlarınızı somutlaştırın. Dünyayı değiştirin.",
    avoid: "Küçük düşünmek, vizyonsuz hareket etmek, yarım bırakmak.",
    luckyNumbers: [22, 4, 13],
    luckyColors: ["Kahverengi", "Altın", "Beyaz"],
    activities: ["Büyük projelere başlamak", "Strateji geliştirmek", "Organizasyon kurmak", "Liderlik yapmak", "Somut planlar yapmak"]
  },
  // Master Number 33 - Master Healer
  "33": {
    dayNumber: 33,
    theme: "Şifa ve Hizmet",
    energy: "Koşulsuz sevgi, şifa ve hizmet enerjisi. Bugün başkalarına hizmet etmek ve şifa vermek için ideal.",
    advice: "Başkalarına şifa verin, koşulsuz sevgi yayın, hizmet edin. Kendinizi de koruyun.",
    avoid: "Kendini feda etmek, sınırları korumamak, bencil olmak.",
    luckyNumbers: [33, 6, 15],
    luckyColors: ["Pembe", "Altın", "Beyaz"],
    activities: ["Şifa pratikleri", "Gönüllü çalışmak", "Koşulsuz sevgi göstermek", "Öğretmek", "Manevi hizmetler"]
  }
};

// Helper function to sum digits
function sumDigits(num: number): number {
  return num.toString().split('').reduce((acc: number, digit: string) => acc + parseInt(digit), 0);
}

// Get daily reading based on date
export function getDailyReading(date: Date = new Date()): DailyReading {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  // Calculate day number
  let dayNumber = day + month + year;
  
  // Check for master numbers
  if (dayNumber === 11 || dayNumber === 22 || dayNumber === 33) {
    return calendarData[dayNumber.toString()];
  }
  
  // Reduce to single digit
  while (dayNumber > 9) {
    dayNumber = sumDigits(dayNumber);
    if (dayNumber === 11 || dayNumber === 22 || dayNumber === 33) {
      return calendarData[dayNumber.toString()];
    }
  }
  
  return calendarData[dayNumber.toString()] || calendarData["1"];
}

// Get daily reading for a specific date string (YYYY-MM-DD)
export function getDailyReadingForDate(dateString: string): DailyReading {
  const date = new Date(dateString);
  return getDailyReading(date);
}

// Get monthly theme
export function getMonthlyTheme(month: number): string {
  const themes: { [key: number]: string } = {
    1: "Yeni Başlangıçlar ve Hedefler",
    2: "İlişkiler ve İşbirliği",
    3: "Yaratıcılık ve İfade",
    4: "Çalışma ve Düzen",
    5: "Değişim ve Macera",
    6: "Aile ve Sorumluluk",
    7: "İçsel Yolculuk ve Bilgelik",
    8: "Başarı ve Maddi Güç",
    9: "Tamamlanma ve Bırakma",
    10: "Yeni Başlangıçlar",
    11: "Sezgi ve Aydınlanma",
    12: "Hizmet ve Paylaşma"
  };
  return themes[month] || "Bilinmeyen";
}

// Get yearly theme
export function getYearlyTheme(year: number): string {
  let yearSum = sumDigits(year);
  
  // Check for master numbers
  if (yearSum === 11 || yearSum === 22 || yearSum === 33) {
    const masterThemes: { [key: number]: string } = {
      11: "Sezgi ve Aydınlanma Yılı",
      22: "Büyük Projeler Yılı",
      33: "Şifa ve Hizmet Yılı"
    };
    return masterThemes[yearSum];
  }
  
  // Reduce to single digit
  while (yearSum > 9) {
    yearSum = sumDigits(yearSum);
  }
  
  const themes: { [key: number]: string } = {
    1: "Yeni Başlangıçlar Yılı",
    2: "İşbirliği ve İlişkiler Yılı",
    3: "Yaratıcılık ve Sosyallik Yılı",
    4: "Çalışma ve Düzen Yılı",
    5: "Değişim ve Macera Yılı",
    6: "Aile ve Sorumluluk Yılı",
    7: "İçsel Yolculuk Yılı",
    8: "Başarı ve Para Yılı",
    9: "Tamamlanma ve Bırakma Yılı"
  };
  
  return themes[yearSum] || "Bilinmeyen";
}
