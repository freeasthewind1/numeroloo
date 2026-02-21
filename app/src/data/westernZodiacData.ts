// Western Zodiac Data
export interface WesternZodiacDataType {
  [key: string]: {
    name: string;
    icon: string;
    dates: string;
    element: string;
    rulingPlanet: string;
    desc: string;
    strengths: string[];
    weaknesses: string[];
    career: string[];
    love: string;
    loveMatch: string;
    loveChallenge: string;
    deepAnalysis: { title: string; content: string }[];
  };
}

export const westernZodiacData: WesternZodiacDataType = {
  aries: {
    name: "KOÇ",
    icon: "♈",
    dates: "Mart 21 - Nisan 19",
    element: "Ateş",
    rulingPlanet: "Mars",
    desc: "Cesur, dinamik ve rekabetçi Koç, ateş elementinin öncüsüdür. Liderlik etmekten çekinmez. Doğal bir savaşçıdır ve her zaman ilk olmak ister.",
    strengths: ["Cesaret", "Dinamizm", "Rekabetçilik", "Liderlik", "Bağımsızlık", "Kararlılık"],
    weaknesses: ["Sabırsızlık", "Impulsiflik", "Agressiflik", "Bencillik", "Kısa süreli odak"],
    career: ["Girişimci", "Sporcu", "Asker", "Cerrah", "Satış uzmanı", "CEO"],
    love: "Tutkulu ve hızlı bir aşıktır. Eğlence ve heyecan arar. Partneri onun enerjisine ayak uydurabilmelidir.",
    loveMatch: "Aslan, Yay, İkizler, Kova",
    loveChallenge: "Yengeç, Oğlak, Terazi",
    deepAnalysis: [
      { title: "KARAKTER", content: "Koç doğal bir liderdir. Her zaman ilk olmak ister ve rekabetten korkmaz. Enerjisi yüksektir ve hızlı hareket eder." },
      { title: "KARİYER", content: "Liderlik pozisyonlarında başarılıdır. Risk almaktan korkmaz. Girişimcilik ve spor alanları uygundur." },
      { title: "AŞK", content: "Tutkulu ve hızlı bir aşıktır. Flört etmeyi sever ancak uzun süreli ilişkilerde sabır gerektirir." },
      { title: "PARA", content: "Para konusunda impulsif olabilir. Riskli yatırımlara meyillidir." },
      { title: "SAĞLIK", content: "Baş ve yüz hassas bölgedir. Stres yönetimi önemlidir." }
    ]
  },
  taurus: {
    name: "BOĞA",
    icon: "♉",
    dates: "Nisan 20 - Mayıs 20",
    element: "Toprak",
    rulingPlanet: "Venüs",
    desc: "Sabırlı, güvenilir ve pratik Boğa, maddi güvenlik ve konfor peşindedir. Kararlıdır ve değişime dirençlidir.",
    strengths: ["Sabır", "Güvenilirlik", "Pratiklik", "Kararlılık", "Sadakat", "Duyarlılık"],
    weaknesses: ["İnatçılık", "Malcanlılık", "Değişim direnci", "Tembellik", "Aşırı tutuculuk"],
    career: ["Bankacı", "Mimar", "Şef", "Sanatçı", "Müzisyen", "Muhasebeci"],
    love: "Sadık ve tutkulu bir partnerdir. Güvenlik arar ve uzun süreli ilişkileri sever. Romantiktir.",
    loveMatch: "Yengeç, Akrep, Oğlak, Başak",
    loveChallenge: "Kova, Aslan, Kova",
    deepAnalysis: [
      { title: "KARAKTER", content: "Boğa sabit ve kararlıdır. Değişime dirençli olabilir. Konfor ve güvenlik önemlidir." },
      { title: "KARİYER", content: "Finans, sanat ve gayrimenkul alanlarında başarılıdır. Sabırlı çalışmasıyla tanınır." },
      { title: "AŞK", content: "Sadık ve romantik bir aşıktır. Fiziksel yakınlık önemlidir." },
      { title: "PARA", content: "Para biriktirme konusunda başarılıdır. Güvenli yatırımları tercih eder." },
      { title: "SAĞLIK", content: "Boyun ve boğaz hassas bölgedir. Aşırı yemekten kaçınmalıdır." }
    ]
  },
  gemini: {
    name: "İKİZLER",
    icon: "♊",
    dates: "Mayıs 21 - Haziran 20",
    element: "Hava",
    rulingPlanet: "Merkür",
    desc: "Meraklı, iletişimci ve esnek İkizler, entelektüel uyarım arar. Çok yönlüdür ve adaptasyon yeteneği yüksektir.",
    strengths: ["İletişim", "Zeka", "Esneklik", "Merak", "Sosyallik", "Çok yönlülük"],
    weaknesses: ["Kararsızlık", "Yüzeysellik", "Dağınıklık", "Sabırsızlık", "İki yüzlülük"],
    career: ["Gazeteci", "Yazar", "Satışçı", "Öğretmen", "PR uzmanı", "Yayıncı"],
    love: "Zihinsel uyum arar. Sıkılmaktan korkar. Partneri onu zihinsel olarak uyarmalıdır.",
    loveMatch: "Terazi, Kova, Aslan, Yay",
    loveChallenge: "Yengeç, Oğlak, Balık",
    deepAnalysis: [
      { title: "KARAKTER", content: "İkizler meraklı ve çok yönlüdür. İletişim yeteneği güçlüdür. Kararsız olabilir." },
      { title: "KARİYER", content: "İletişim, medya ve eğitim alanlarında başarılıdır. Çok yönlü çalışabilir." },
      { title: "AŞK", content: "Zihinsel uyum arar. Sıkılmaktan korkar. Konuşkan bir partnerdir." },
      { title: "PARA", content: "Para konusunda düzensiz olabilir. Çok yönlü gelir kaynakları arar." },
      { title: "SAĞLIK", content: "Akciğerler ve sinir sistemi hassas bölgedir." }
    ]
  },
  cancer: {
    name: "YENGEÇ",
    icon: "♋",
    dates: "Haziran 21 - Temmuz 22",
    element: "Su",
    rulingPlanet: "Ay",
    desc: "Koruyucu, duygusal ve sezgisel Yengeç, aile ve ev hayatına önem verir. Hassas ve empati yeteneği yüksektir.",
    strengths: ["Empati", "Koruyuculuk", "Sadakat", "Sezgi", "Yaratıcılık", "Aile odaklılık"],
    weaknesses: ["Aşırı duyarlılık", "Çekingenlik", "Geçmişe tutunma", "Kuruntulu olma", "Değişim korkusu"],
    career: ["Şef", "Emlakçı", "Psikolog", "Hemşire", "Öğretmen", "Sosyal çalışmacı"],
    love: "Romantik ve sadık bir partnerdir. Aile kurmak ister. Duygusal güvenlik arar.",
    loveMatch: "Boğa, Akrep, Balık, Oğlak",
    loveChallenge: "Koç, Terazi, Kova",
    deepAnalysis: [
      { title: "KARAKTER", content: "Yengeç duygusal ve koruyucudur. Aile ve ev hayatı önemlidir. Geçmişe tutunabilir." },
      { title: "KARİYER", content: "Bakım ve hizmet sektöründe başarılıdır. Aile işleri uygundur." },
      { title: "AŞK", content: "Romantik ve sadıktır. Duygusal bağlar güçlüdür." },
      { title: "PARA", content: "Para biriktirme konusunda başarılıdır. Aile için biriktirir." },
      { title: "SAĞLIK", content: "Mide ve göğüs hassas bölgedir. Duygusal yemeğe dikkat." }
    ]
  },
  leo: {
    name: "ASLAN",
    icon: "♌",
    dates: "Temmuz 23 - Ağustos 22",
    element: "Ateş",
    rulingPlanet: "Güneş",
    desc: "Yaratıcı, cömert ve karizmatik Aslan, doğal bir sahne insanıdır. Liderlik etmeyi sever ve ilgi odağı olmayı sever.",
    strengths: ["Karizma", "Yaratıcılık", "Cömertlik", "Liderlik", "Özgüven", "Sadakat"],
    weaknesses: ["Kibir", "Sahiplenme", "Diktatoryal eğilim", "Gösteriş", "Sabırsızlık"],
    career: ["Aktör", "Yönetmen", "Politikacı", "CEO", "Tasarımcı", "Eğlence sektörü"],
    love: "Tutkulu ve dramatik bir aşıktır. Partneri onu özel hissettirmelidir. Sadıktır.",
    loveMatch: "Koç, Yay, İkizler, Terazi",
    loveChallenge: "Boğa, Akrep, Oğlak",
    deepAnalysis: [
      { title: "KARAKTER", content: "Aslan karizmatik ve yaratıcıdır. İlgi odağı olmayı sever. Cömert ve sadıktır." },
      { title: "KARİYER", content: "Eğlence, yöneticilik ve yaratıcı alanlarda başarılıdır." },
      { title: "AŞK", content: "Tutkulu ve dramatiktir. Partneri onu özel hissettirmelidir." },
      { title: "PARA", content: "Para konusunda cömerttir. Lüksü sever." },
      { title: "SAĞLIK", content: "Kalp ve sırt hassas bölgedir." }
    ]
  },
  virgo: {
    name: "BAŞAK",
    icon: "♍",
    dates: "Ağustos 23 - Eylül 22",
    element: "Toprak",
    rulingPlanet: "Merkür",
    desc: "Analitik, pratik ve mükemmeliyetçi Başak, detaylarda ustasıdır. Yardımsever ve çalışkandır.",
    strengths: ["Analiz", "Pratiklik", "Mükemmeliyetçilik", "Yardımseverlik", "Çalışkanlık", "Detaycılık"],
    weaknesses: ["Aşırı eleştiri", "Endişe", "Kuruntulu olma", "Mükemmeliyetçilik", "Çekingenlik"],
    career: ["Editör", "Analist", "Doktor", "Muhasebeci", "Araştırmacı", "Diyetisyen"],
    love: "Pratik ama sadık bir partnerdir. Detaylara dikkat eder. Yardımseverdir.",
    loveMatch: "Boğa, Oğlak, Yengeç, Akrep",
    loveChallenge: "İkizler, Yay, Balık",
    deepAnalysis: [
      { title: "KARAKTER", content: "Başak analitik ve pratiktir. Detaylara dikkat eder. Mükemmeliyetçi olabilir." },
      { title: "KARİYER", content: "Analiz ve hizmet sektöründe başarılıdır. Detaycı çalışmaları sever." },
      { title: "AŞK", content: "Pratik ama sadıktır. Detaylara dikkat eder." },
      { title: "PARA", content: "Para konusunda dikkatlidir. Planlı harcar." },
      { title: "SAĞLIK", content: "Sindirim sistemi hassas bölgedir. Stres yönetimi önemlidir." }
    ]
  },
  libra: {
    name: "TERAZİ",
    icon: "♎",
    dates: "Eylül 23 - Ekim 22",
    element: "Hava",
    rulingPlanet: "Venüs",
    desc: "Dengenin ve uyumun temsilcisi Terazi, adalet duygusu ve estetik anlayışıyla öne çıkar. İlişkilerde uyum arayışı içindedir, çatışmaktan kaçınır.",
    strengths: ["Diplomasi", "Adalet", "Estetik", "Sosyallik", "Uyum", "Tarafsızlık"],
    weaknesses: ["Kararsızlık", "Kaçınma", "Yüzeysellik", "Bağımlılık", "Dış görünüş takıntısı"],
    career: ["Avukat", "Diplomat", "Tasarımcı", "Mediatör", "Sanatçı", "Evlilik danışmanı"],
    love: "Romantik ve uyumlu bir partnerdir. İlişkilerde denge arar. Güzellik ve romantizm önemlidir.",
    loveMatch: "İkizler, Kova, Aslan, Yay",
    loveChallenge: "Koç, Yengeç, Oğlak",
    deepAnalysis: [
      { title: "KARAKTER", content: "Terazi diplomatik ve adilidir. Uyum arar. Kararsız olabilir. Estetik anlayışı güçlüdür." },
      { title: "KARİYER", content: "Hukuk, diplomasi ve sanat alanlarında başarılıdır. Arabuluculuk yeteneği vardır." },
      { title: "AŞK", content: "Romantik ve uyumludur. İlişkilerde denge arar." },
      { title: "PARA", content: "Para konusunda dengelidir. Lüksü sever ama mantıklı harcar." },
      { title: "SAĞLIK", content: "Böbrekler ve cilt hassas bölgedir." }
    ]
  },
  scorpio: {
    name: "AKREP",
    icon: "♏",
    dates: "Ekim 23 - Kasım 21",
    element: "Su",
    rulingPlanet: "Plüton/Mars",
    desc: "Tutkulu, kararlı ve sezgisel Akrep, derin duygusal bağlar kurar. Gizemli ve güçlü bir karakterdir.",
    strengths: ["Tutku", "Kararlılık", "Sezgi", "Loyalite", "Güç", "Transformasyon"],
    weaknesses: ["Kıskançlık", "Kontrolcülük", "İntikam", "Gizlilik", "Aşırı duygusallık"],
    career: ["Dedektif", "Psikolog", "Araştırmacı", "Cerrah", "Finans uzmanı", "Okültist"],
    love: "Tutkulu ve yoğun bir aşıktır. Derin bağlar kurar. Sadakat bekler ve verir.",
    loveMatch: "Boğa, Yengeç, Balık, Oğlak",
    loveChallenge: "Aslan, Kova, Terazi",
    deepAnalysis: [
      { title: "KARAKTER", content: "Akrep tutkulu ve gizemlidir. Derin duygusal bağlar kurar. Transformasyon gücü yüksektir." },
      { title: "KARİYER", content: "Araştırma, psikoloji ve finans alanlarında başarılıdır." },
      { title: "AŞK", content: "Tutkulu ve yoğundur. Derin bağlar kurar. Sadakat çok önemlidir." },
      { title: "PARA", content: "Para konusunda stratejiktir. Uzun vadeli yatırımları sever." },
      { title: "SAĞLIK", content: "Üreme sistemi ve cinsel organlar hassas bölgedir." }
    ]
  },
  sagittarius: {
    name: "YAY",
    icon: "♐",
    dates: "Kasım 22 - Aralık 21",
    element: "Ateş",
    rulingPlanet: "Jüpiter",
    desc: "Macera dolu, iyimser ve doğrudan Yay, özgürlüğüne düşkündür. Felsefi ve keşifçi bir ruh taşır.",
    strengths: ["Macera", "İyimserlik", "Dürüstlük", "Felsefe", "Özgürlük", "Esneklik"],
    weaknesses: ["Sabırsızlık", "Dürüstsüzlük", "Aşırı iyimserlik", "Bağlılık korkusu", "Dikkatsizlik"],
    career: ["Gezgin", "Yazar", "Öğretmen", "Filozof", "Turizm", "Yayıncı"],
    love: "Özgür ruhlu bir aşıktır. Macera arar. Felsefi uyum önemlidir.",
    loveMatch: "Koç, Aslan, İkizler, Kova",
    loveChallenge: "Yengeç, Başak, Balık",
    deepAnalysis: [
      { title: "KARAKTER", content: "Yay maceracı ve iyimserdir. Özgürlüğüne düşkündür. Felsefi düşünür." },
      { title: "KARİYER", content: "Seyahat, eğitim ve yayıncılık alanlarında başarılıdır." },
      { title: "AŞK", content: "Özgür ruhlu ve maceracıdır. Kısıtlanmaktan nefret eder." },
      { title: "PARA", content: "Para konusunda düzensizdir. Deneyimlere harcar." },
      { title: "SAĞLIK", content: "Kalça ve bacaklar hassas bölgedir." }
    ]
  },
  capricorn: {
    name: "OĞLAK",
    icon: "♑",
    dates: "Aralık 22 - Ocak 19",
    element: "Toprak",
    rulingPlanet: "Satürn",
    desc: "Disiplinli, hırslı ve pratik Oğlak, uzun vadeli hedefler peşindedir. Sorumluluk sahibi ve güvenilirdir.",
    strengths: ["Disiplin", "Hırs", "Pratiklik", "Sorumluluk", "Dayanıklılık", "Organizasyon"],
    weaknesses: ["Soğukluk", "İşkoliklik", "Pessimizm", "Kontrolcülük", "Katılık"],
    career: ["CEO", "Mühendis", "Mimar", "Bankacı", "Yönetici", "Politikacı"],
    love: "Ciddi ve sadık bir partnerdir. Uzun vadeli ilişkileri sever. Güven arar.",
    loveMatch: "Boğa, Yengeç, Başak, Akrep",
    loveChallenge: "Koç, Terazi, Yay",
    deepAnalysis: [
      { title: "KARAKTER", content: "Oğlak disiplinli ve hırslıdır. Uzun vadeli hedefler peşindedir. Sorumluluk sahibidir." },
      { title: "KARİYER", content: "Yöneticilik ve mühendislik alanlarında başarılıdır." },
      { title: "AŞK", content: "Ciddi ve sadıktır. Uzun vadeli ilişkileri sever." },
      { title: "PARA", content: "Para biriktirme konusunda başarılıdır. Uzun vadeli yatırımları sever." },
      { title: "SAĞLIK", content: "Kemikler ve eklemler hassas bölgedir." }
    ]
  },
  aquarius: {
    name: "KOVA",
    icon: "♒",
    dates: "Ocak 20 - Şubat 18",
    element: "Hava",
    rulingPlanet: "Uranüs/Satürn",
    desc: "Yenilikçi, bağımsız ve insani Kova, geleceği şekillendirmek ister. Orijinal ve ileri görüşlüdür.",
    strengths: ["Yenilikçilik", "Bağımsızlık", "İnsancıllık", "Orijinallik", "Zeka", "İleri görüşlülük"],
    weaknesses: ["Mesafe", "İnatçılık", "Duygusal soğukluk", "Asilik", "Öngörüsüzlük"],
    career: ["Bilim insanı", "Mucit", "Aktivist", "Teknoloji uzmanı", "Astronom", "Sosyal reformcu"],
    love: "Bağımsız bir partnerdir. Duygusal mesafe koyabilir. Zihinsel uyum arar.",
    loveMatch: "İkizler, Terazi, Yay, Koç",
    loveChallenge: "Boğa, Yengeç, Aslan",
    deepAnalysis: [
      { title: "KARAKTER", content: "Kova yenilikçi ve bağımsızdır. İnsani konulara ilgi duyar. Orijinaldir." },
      { title: "KARİYER", content: "Teknoloji, bilim ve sosyal reform alanlarında başarılıdır." },
      { title: "AŞK", content: "Bağımsız ve zihinseldir. Duygusal mesafe koyabilir." },
      { title: "PARA", content: "Para konusunda düzensiz olabilir. İdealist projelere harcar." },
      { title: "SAĞLIK", content: "Bacaklar ve dolaşım sistemi hassas bölgedir." }
    ]
  },
  pisces: {
    name: "BALIK",
    icon: "♓",
    dates: "Şubat 19 - Mart 20",
    element: "Su",
    rulingPlanet: "Neptün/Jüpiter",
    desc: "Sezgisel, şefkatli ve hayalperest Balık, sanatsal yeteneklere sahiptir. Empati yeteneği yüksektir.",
    strengths: ["Sezgi", "Şefkat", "Yaratıcılık", "Empati", "Hayal gücü", "Spiritüellik"],
    weaknesses: ["Kaçış", "Aşırı duyarlılık", "Kuruntulu olma", "Sınır tanımama", "Kolay etkilenme"],
    career: ["Sanatçı", "Müzisyen", "Şifacı", "Psikolog", "Yazar", "Fotoğrafçı"],
    love: "Romantik ve sezgisel bir partnerdir. Derin duygusal bağlar kurar. Fedakardır.",
    loveMatch: "Yengeç, Akrep, Boğa, Oğlak",
    loveChallenge: "İkizler, Yay, Kova",
    deepAnalysis: [
      { title: "KARAKTER", content: "Balık sezgisel ve şefkatlidir. Sanatsal yetenekleri vardır. Empati yeteneği yüksektir." },
      { title: "KARİYER", content: "Sanat, müzik ve şifa alanlarında başarılıdır." },
      { title: "AŞK", content: "Romantik ve fedakardır. Derin duygusal bağlar kurar." },
      { title: "PARA", content: "Para konusunda düzensizdir. Sanatsal projelere harcar." },
      { title: "SAĞLIK", content: "Ayaklar ve bağışıklık sistemi hassas bölgedir." }
    ]
  }
};

// Get Western Zodiac sign
export function getWesternZodiac(day: number, month: number): string {
  const signs = [
    { name: 'capricorn', start: [1, 1], end: [1, 19] },
    { name: 'aquarius', start: [1, 20], end: [2, 18] },
    { name: 'pisces', start: [2, 19], end: [3, 20] },
    { name: 'aries', start: [3, 21], end: [4, 19] },
    { name: 'taurus', start: [4, 20], end: [5, 20] },
    { name: 'gemini', start: [5, 21], end: [6, 20] },
    { name: 'cancer', start: [6, 21], end: [7, 22] },
    { name: 'leo', start: [7, 23], end: [8, 22] },
    { name: 'virgo', start: [8, 23], end: [9, 22] },
    { name: 'libra', start: [9, 23], end: [10, 22] },
    { name: 'scorpio', start: [10, 23], end: [11, 21] },
    { name: 'sagittarius', start: [11, 22], end: [12, 21] },
    { name: 'capricorn', start: [12, 22], end: [12, 31] }
  ];

  for (let sign of signs) {
    const startMonth = sign.start[0];
    const startDay = sign.start[1];
    const endMonth = sign.end[0];
    const endDay = sign.end[1];
    
    if (month === startMonth && day >= startDay) return sign.name;
    if (month === endMonth && day <= endDay) return sign.name;
  }
  
  return 'capricorn';
}
