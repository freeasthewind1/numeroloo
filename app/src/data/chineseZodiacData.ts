// Chinese Zodiac Data - Comprehensive analysis for all 12 animals
export interface ChineseZodiacDataType {
  [key: string]: {
    name: string;
    icon: string;
    element: string;
    desc: string;
    friends: string[];
    enemies: string[];
    strengths: string[];
    weaknesses: string[];
    hiddenGift: string;
    deepAnalysis: { title: string; content: string }[];
    yearlyForecast: { [key: number]: { theme: string; advice: string; avoid: string } };
  };
}

export const chineseZodiacData: ChineseZodiacDataType = {
  rat: {
    name: "FARE",
    icon: "🐭",
    element: "Su",
    desc: "Zeki, uyarlanabilir ve hızlı düşünen Fare, fırsatları yakalama konusunda ustadır. Girişimcilik ruhu taşır. Çin astrolojisinde Fare, zeka ve bolluğun sembolüdür. Gece hayvanı olan Fare, gizli fırsatları görebilme yeteneğine sahiptir.",
    friends: ["Ejderha", "Maymun", "Öküz"],
    enemies: ["At", "Kedi"],
    strengths: ["Zeka", "Uyarlanabilirlik", "Hız", "Girişimcilik", "Tasarruf", "Pratiklik", "Kaynakfulness"],
    weaknesses: ["Sabırsızlık", "Cimrilik", "Titizlik", "Endişe", "Kurnazlık"],
    hiddenGift: "Fırsatları görme yeteneği - Zor zamanlarda bile çıkış yolu bulma",
    deepAnalysis: [
      { title: "KARAKTER", content: "Fare doğal bir hayatta kalma uzmanıdır. Zor koşullarda bile başarılı olur. Her durumdan yararlanma yeteneği vardır. Gözlemci ve analitiktir." },
      { title: "KARİYER", content: "İş dünyasında hızlı yükselir. Girişimcilik ve ticaret alanları uygundur. Finans, pazarlama ve araştırma işleri size göredir." },
      { title: "AŞK", content: "Romantik ama pratik bir aşıktır. Güvenlik arar. Sadık bir partnerdir ancak bağımsızlığını da korur." },
      { title: "PARA", content: "Para biriktirme konusunda doğuştan yeteneklisiniz. Finansal güvenlik sizin için önemlidir. Ancak aşırı cimrilikten kaçının." },
      { title: "SAĞLIK", content: "Sinir sistemi ve sindirim sistemi hassas bölgenizdir. Stres yönetimi önemlidir. Düzenli uyku şart." },
      { title: "KARMA", content: "Geçmişte fırsatları değerlendirememiş olabilirsiniz. Bu hayatta zekanızı ve adaptasyon yeteneğinizi kullanmalısınız." },
      { title: "2026 UYARISI", content: "Kaplan yılı sizin için fırsatlarla dolu. İş hayatında ilerleme yapabilirsiniz. Ancak sabırlı olun." },
      { title: "GELİŞİM ALANI", content: "Güven ve paylaşmayı öğrenmelisiniz. Her şeyi kontrol etmeye çalışmayın." },
      { title: "SACRED NOTE", content: "Sen karanlıkta ışık gören birisin. Zorluklar seni güçlendirir. Unutma ki en karanlık gece bile sabahı getirir." }
    ],
    yearlyForecast: {
      2025: { theme: "Fırsatlar Yılı", advice: "Yeni iş fırsatlarını değerlendirin", avoid: "Aceleci kararlar" },
      2026: { theme: "İlerleme", advice: "Kariyerinizde ilerleyin", avoid: "Riskli yatırımlar" }
    }
  },
  ox: {
    name: "ÖKÜZ",
    icon: "🐂",
    element: "Toprak",
    desc: "Çalışkan, güvenilir ve sabırlı Öküz, emeğin sembolüdür. Yavaş ama emin adımlarla hedeflerine ulaşır. Çin kültüründe Öküz, çalışkanlık ve dürüstlüğün sembolüdür. Methodik ve planlıdır.",
    friends: ["Fare", "Yılan", "Horoz"],
    enemies: ["Koyun", "At"],
    strengths: ["Sabır", "Güvenilirlik", "Güç", "Çalışkanlık", "Dürüstlük", "Metodik olmak", "Dayanıklılık"],
    weaknesses: ["İnatçılık", "Muhafazakarlık", "Yavaşlık", "Katılık", "Sosyal mesafe"],
    hiddenGift: "Sessiz güç - Görünmeyen ama sarsılmaz dayanıklılık",
    deepAnalysis: [
      { title: "KARAKTER", content: "Öküz metodik ve disiplinlidir. Planlı hareket eder, sürprizleri sevmez. Güvenilirliğiyle tanınır." },
      { title: "KARİYER", content: "Uzun vadeli projelerde başarılıdır. Tarım, inşaat, muhasebe, mühendislik uygundur." },
      { title: "AŞK", content: "Sadık ve tutarlı bir partnerdir. Aşkta da sabırlıdır. Güven arar, flörtleri sevmez." },
      { title: "PARA", content: "Para biriktirme konusunda başarılısınız. Güvenli yatırımları tercih edersiniz." },
      { title: "SAĞLIK", content: "Kas-iskelet sistemi hassas bölgenizdir. Aşırı çalışma bedeninizi yorar." },
      { title: "KARMA", content: "Geçmişte sabrınızı test eden durumlar yaşamış olabilirsiniz. Bu hayatta azim ve kararlılığınız ödüllendirilecek." },
      { title: "2026 UYARISI", content: "Kaplan yılı sizin için değişim getirebilir. Esnek olmaya çalışın." },
      { title: "GELİŞİM ALANI", content: "Esneklik ve adaptasyon yeteneğinizi geliştirin. Değişimi kucaklayın." },
      { title: "SACRED NOTE", content: "Sen dağsın, sabit ve güçlü. Yavaş ilerlemen kalıcı başarıların garantisidir. Acele etme, emeklerin karşılığını alacaksın." }
    ],
    yearlyForecast: {
      2025: { theme: "Çalışma", advice: "Projelerinize odaklanın", avoid: "Değişim direnci" },
      2026: { theme: "Adaptasyon", advice: "Yeni yöntemleri deneyin", avoid: "İnatçılık" }
    }
  },
  tiger: {
    name: "KAPLAN",
    icon: "🐯",
    element: "Ağaç",
    desc: "Gençlik ve özgürlük ruhu taşıyan Kaplan, cesareti ve karizmasıyla zorlukların üstesinden gelir. Macera ve heyecan onun yaşam kaynağıdır; kafeslenmek onun özgür ruhunu öldürür. Çin astrolojisinin en karizmatik burcudur.",
    friends: ["At", "Köpek", "Domuz"],
    enemies: ["Maymun", "Yılan"],
    strengths: ["Fiziksel güç", "Karizma", "Cesaret", "Özgürlük", "Macera", "Liderlik", "Dinamizm"],
    weaknesses: ["Düşünmeden hareket", "İnatçılık", "Sabırsızlık", "Otoriterlik", "Dikkatsizlik"],
    hiddenGift: "Yaşına göre her zaman genç görünme yeteneği - Gençlik iksiri",
    deepAnalysis: [
      { title: "MACERA RUHU", content: "Kaplan için rutin ölüm demektir. Sürekli yeni deneyimler arar. Seyahat, spor, riskli işler onu canlı tutar. Bir Kaplan'ı kafese koyarsanız, içten içe ölür." },
      { title: "LİDERLİK", content: "Doğal bir liderdir. Ancak otoriter değil, karizmatik liderlik eder. İnsanlar onun peşinden koşar, çünkü onun yanında hayat daha heyecanlıdır." },
      { title: "PARA ANLAYIŞI", content: "Para onun için özgürlük ve macera aracıdır. Biriktirmek yerine harcar, deneyimlere yatırım yapar. Ancak bu bazen maddi zorluklara yol açabilir." },
      { title: "AŞK YAŞAMI", content: "Aşkta tutkulu ve sadıktır. Ancak sahiplenici olabilir. Partneri onun maceralarına ortak olmalıdır, yoksa ilişki sıkıcılaşır." },
      { title: "SAĞLIK", content: "Genel olarak sağlıklı ve dayanıklıdır. Ancak kazalara ve sakarlıklara meyillidir. Dikkatsizlik yüzünden kendini yaralayabilir." },
      { title: "KARMA", content: "Kaplan'ın karması özgürlük ve sorumluluk arasındaki dengeyi bulmaktır. Dünyaya cesareti öğretmek için gelmiştir, ancak bu cesareti kontrolsüz kullanmamalıdır." },
      { title: "2026 UYARISI", content: "2026 KAPLAN YILI! Bu SİZİN yılınız! Büyük atılımlar yapabilir, hayallerinizi gerçekleştirebilirsiniz. Ancak düşünmeden hareket etmekten kaçının." },
      { title: "GELİŞİM ALANI", content: "Sabır ve strateji geliştirmelisiniz. Cesaretiniz zaten var, şimdi onu bilgelikle birleştirmeniz gerekiyor." },
      { title: "SACRED NOTE", content: "Sen ormanın kralısın, ama unutma ki kral bile ekosistemin bir parçasıdır. Özgürlüğün başkalarının özgürlüğünü kısıtlamadığında gerçek özgürlüktür. Cesaretinle dünyayı değiştir, ama merhametinle de onu koru." }
    ],
    yearlyForecast: {
      2025: { theme: "Hazırlık", advice: "Büyük projeler için hazırlık yapın", avoid: "Aceleci kararlar" },
      2026: { theme: "BAŞARI", advice: "Bu sizin yılınız! Büyük atılımlar yapın", avoid: "Dikkatsizlik" }
    }
  },
  rabbit: {
    name: "TAVŞAN",
    icon: "🐰",
    element: "Ağaç",
    desc: "Nazik, zarif ve diplomatik Tavşan, uyum ve barış peşindedir. Sanatsal bir ruhtur. Çin kültüründe Tavşan, şans ve uzun ömür sembolüdür. Hassasiyeti ve sezgisi güçlüdür.",
    friends: ["Koyun", "Domuz", "Köpek"],
    enemies: ["Horoz", "Ejderha"],
    strengths: ["Diplomasi", "Zarafet", "Sezgi", "Sanatsallık", "Barışseverlik", "Hassasiyet", "Zeka"],
    weaknesses: ["Kaçınma", "Aşırı hassasiyet", "Kararsızlık", "Pasiflik", "Endişe"],
    hiddenGift: "Diplomasi ve arabuluculuk yeteneği - Çatışmaları önleme",
    deepAnalysis: [
      { title: "KARAKTER", content: "Tavşan çatışmadan kaçınır, uyum arar. Diplomatik yeteneği yüksektir. Sanatsal bir ruhtur." },
      { title: "KARİYER", content: "Sanat, diplomasi, danışmanlık, pazarlama alanları uygundur. Estetik anlayışı güçlüdür." },
      { title: "AŞK", content: "Romantik ve nazik bir aşıktır. Uyumlu bir ilişki arar. Partnerinin duygularına karşı hassastır." },
      { title: "PARA", content: "Para konusunda temkinsizdir. Güvenli yatırımları tercih eder. Sanatsal projelerden kazanabilir." },
      { title: "SAĞLIK", content: "Sinir sistemi ve sindirim sistemi hassas bölgenizdir. Stres ve endişe sağlığınızı etkiler." },
      { title: "KARMA", content: "Geçmişte çatışmalardan kaçmış olabilirsiniz. Bu hayatta diplomatik yeteneğinizi kullanmalısınız." },
      { title: "2026 UYARISI", content: "Kaplan yılı sizin için zorlayıcı olabilir. Cesur olun ve kendinizi savunun." },
      { title: "GELİŞİM ALANI", content: "Cesaret ve kararlılık geliştirmelisiniz. Çatışmalardan kaçmayın." },
      { title: "SACRED NOTE", content: "Sen zarafet ve inceliksin. Dünya senin nazikliğine ihtiyaç duyuyor. Ancak unutma ki bazen savaşmak da barış getirir." }
    ],
    yearlyForecast: {
      2025: { theme: "Uyum", advice: "Barışçıl çözümler bulun", avoid: "Kaçınma" },
      2026: { theme: "Cesaret", advice: "Kendinizi savunun", avoid: "Aşırı pasiflik" }
    }
  },
  dragon: {
    name: "EJDERHA",
    icon: "🐲",
    element: "Toprak",
    desc: "Güçlü, karizmatik ve şanslı Ejderha, Çin astrolojisinin en prestijli burcudur. Doğal bir liderdir. Ejderha, güç, şans ve otoritenin sembolüdür. Doğuştan liderdir ve başarı onu takip eder.",
    friends: ["Fare", "Maymun", "Horoz"],
    enemies: ["Köpek", "Tavşan", "Koyun"],
    strengths: ["Karizma", "Güç", "Şans", "Liderlik", "Cesaret", "Vizyon", "Dinamizm", "Başarı"],
    weaknesses: ["Kibir", "Sabırsızlık", "Otoriterlik", "Aşırı güven", "Diktatoryal eğilim"],
    hiddenGift: "Başarıyı çekme yeteneği - Şans ve fırsatları kendine çekme",
    deepAnalysis: [
      { title: "KARAKTER", content: "Ejderha efsanevi bir varlıktır. Doğal yetenekleri ve şansı vardır. Liderlik etmek onun doğasında var." },
      { title: "KARİYER", content: "Yöneticilik, girişimcilik, siyaset, sanat alanlarında başarılıdır. Doğuştan liderdir." },
      { title: "AŞK", content: "Tutkulu ve karizmatik bir aşıktır. Partneri onun ışıltısına hayran kalır. Ancak sahiplenici olabilir." },
      { title: "PARA", content: "Para onu takip eder. Büyük servetler biriktirebilir. Ancak savurganlığa dikkat etmelidir." },
      { title: "SAĞLIK", content: "Genel olarak sağlıklıdır. Ancak stres ve aşırı çalışma bedenini yorar." },
      { title: "KARMA", content: "Ejderha'nın karması gücü bilgelikle kullanmayı öğrenmektir. Başkalarını ezmemeli, onları yükseltmelidir." },
      { title: "2026 UYARISI", content: "Kaplan yılı sizin için rekabetçi olabilir. Kendinizi kanıtlamak zorunda kalabilirsiniz." },
      { title: "GELİŞİM ALANI", content: "Alçakgönüllülük ve sabır geliştirmelisiniz. Başkalarının görüşlerine değer verin." },
      { title: "SACRED NOTE", content: "Sen gökyüzünün oğlusun, toprağın efendisisin. Gücün büyük ama sorumluluğun da büyük. Başkalarını yükseltirken kendin de yükselirsin." }
    ],
    yearlyForecast: {
      2025: { theme: "Liderlik", advice: "Liderlik pozisyonlarına talip olun", avoid: "Kibir" },
      2026: { theme: "Rekabet", advice: "Rekabette gücünüzü gösterin", avoid: "Otoriterlik" }
    }
  },
  snake: {
    name: "YILAN",
    icon: "🐍",
    element: "Ateş",
    desc: "Bilge, gizemli ve sezgisel Yılan, derin düşüncenin temsilcisidir. İçgüdüleri güçlüdür. Yılan, bilgelik ve şifa sembolüdür. Gizemli bir auraya sahiptir ve derin düşünür.",
    friends: ["Öküz", "Horoz", "Fare"],
    enemies: ["Domuz", "Kaplan", "Maymun"],
    strengths: ["Bilgelik", "Sezgi", "Zarafet", "Gizem", "Strateji", "Derinlik", "Analiz"],
    weaknesses: ["Şüphecilik", "Kıskançlık", "İntikam", "Mesafe", "Soğukluk"],
    hiddenGift: "Derin bilgelik ve sezgi - Görünmeyeni görme yeteneği",
    deepAnalysis: [
      { title: "KARAKTER", content: "Yılan derin düşünür, her hareketini planlar. Gizemli bir auraya sahiptir. Sezgileri güçlüdür." },
      { title: "KARİYER", content: "Araştırma, psikoloji, finans, strateji alanları uygundur. Derinlemesine çalışmaları sever." },
      { title: "AŞK", content: "Tutkulu ama mesafeli bir aşıktır. Güveni zamanla kazanır. Derin bağlar kurar." },
      { title: "PARA", content: "Para konusunda stratejiktir. Uzun vadeli yatırımları tercih eder. Zengin olabilir." },
      { title: "SAĞLIK", content: "Sinir sistemi ve cilt hassas bölgenizdir. Stres yönetimi önemlidir." },
      { title: "KARMA", content: "Yılan'ın karması bilgeliği paylaşmaktır. Gizli bilgileri uygun şekilde kullanmalıdır." },
      { title: "2026 UYARISI", content: "Kaplan yılı sizin için zorlayıcı olabilir. Düşmanlıklardan kaçının." },
      { title: "GELİŞİM ALANI", content: "Güven ve açıklık geliştirmelisiniz. İnsanlara şans verin." },
      { title: "SACRED NOTE", content: "Sen bilgeliğin ta kendisisin. Derinliklerde saklı hazineyi bilirsin. Ancak unutma ki bilgi paylaştıkça çoğalır." }
    ],
    yearlyForecast: {
      2025: { theme: "Bilgelik", advice: "Bilginizi paylaşın", avoid: "Şüphecilik" },
      2026: { theme: "Dikkat", advice: "Düşmanlıklardan kaçının", avoid: "İntikam" }
    }
  },
  horse: {
    name: "AT",
    icon: "🐴",
    element: "Ateş",
    desc: "Enerjik, bağımsız ve sosyal At, özgürlüğün sembolüdür. Hareket ve değişim onun için hayati önem taşır. At, hız, güç ve özgürlüğün sembolüdür. Sürekli hareket halindedir.",
    friends: ["Kaplan", "Köpek", "Koyun"],
    enemies: ["Fare", "Öküz"],
    strengths: ["Enerji", "Bağımsızlık", "Sosyallik", "Hız", "Cesaret", "Uyum", "İletişim"],
    weaknesses: ["Sabırsızlık", "Düzensizlik", "Kısıtlanma", "Yüzeysellik", "Dikkatsizlik"],
    hiddenGift: "Hızlı adaptasyon - Her duruma hızla uyum sağlama",
    deepAnalysis: [
      { title: "KARAKTER", content: "At sürekli hareket halindedir. Özgürlüğüne düşkündür, kısıtlanmaktan nefret eder. Sosyal ve neşelidir." },
      { title: "KARİYER", content: "Seyahat, satış, iletişim, spor alanları uygundur. Hareketli işleri sever." },
      { title: "AŞK", content: "Tutkulu ama bağımsız bir aşıktır. Kısıtlanmaktan nefret eder. Partneri özgürlüğüne saygı duymalıdır." },
      { title: "PARA", content: "Para konusunda düzensizdir. Kazanır ve harcar. Biriktirme konusunda zorlanır." },
      { title: "SAĞLIK", content: "Kas-iskelet sistemi ve dolaşım sistemi hassas bölgenizdir. Spor yapmalısınız." },
      { title: "KARMA", content: "At'ın karması özgürlüğü ve sorumluluğu dengelemektir. Sürekli kaçmak yerine yerleşmeyi öğrenmelidir." },
      { title: "2026 UYARISI", content: "Kaplan yılı sizin için heyecan verici! Maceralar sizi bekliyor." },
      { title: "GELİŞİM ALANI", content: "Sabitlik ve sorumluluk geliştirmelisiniz. Ayaklarınızı yere basın." },
      { title: "SACRED NOTE", content: "Sen rüzgarsın, özgür ve vahşi. Dünya senin koşmanı bekliyor. Ancak unutma ki bazen durmak da ilerlemektir." }
    ],
    yearlyForecast: {
      2025: { theme: "Hareket", advice: "Yeni yerler keşfedin", avoid: "Sabit kalmak" },
      2026: { theme: "Macera", advice: "Maceralara atılın", avoid: "Dikkatsizlik" }
    }
  },
  goat: {
    name: "KOYUN",
    icon: "🐐",
    element: "Toprak",
    desc: "Sanatsal, nazik ve yaratıcı Koyun, güzellik ve uyum peşindedir. Hassas bir ruh taşır. Koyun, sanat, barış ve uyumun sembolüdür. Estetik anlayışı güçlüdür.",
    friends: ["Tavşan", "At", "Domuz"],
    enemies: ["Öküz", "Köpek"],
    strengths: ["Yaratıcılık", "Naziklik", "Dayanıklılık", "Estetik", "Barışseverlik", "Sezgi"],
    weaknesses: ["Karamsarlık", "Bağımlılık", "Kararsızlık", "Aşırı hassasiyet", "Endişe"],
    hiddenGift: "Sanatsal yetenek - Güzellik yaratma ve estetik anlayış",
    deepAnalysis: [
      { title: "KARAKTER", content: "Koyun sanatsal ve hassastır. Güzel şeyler yaratma ihtiyacı duyar. Uyumlu bir ortam arar." },
      { title: "KARİYER", content: "Sanat, tasarım, moda, terapi alanları uygundur. Estetik yeteneği güçlüdür." },
      { title: "AŞK", content: "Romantik ve nazik bir aşıktır. Partnerinin desteğine ihtiyaç duyar. Sadıktır." },
      { title: "PARA", content: "Para konusunda temkinsizdir. Sanatsal projelerden kazanabilir. Güvenlik arar." },
      { title: "SAĞLIK", content: "Sinir sistemi ve sindirim sistemi hassas bölgenizdir. Stres ve endişe etkiler." },
      { title: "KARMA", content: "Koyun'un karması kendi ayakları üzerinde durmayı öğrenmektir. Bağımlılıktan kurtulmalıdır." },
      { title: "2026 UYARISI", content: "Kaplan yılı sizin için zorlayıcı olabilir. Kendinizi savunun." },
      { title: "GELİŞİM ALANI", content: "Bağımsızlık ve özgüven geliştirmelisiniz. Başkalarına aşırı bağımlı olmayın." },
      { title: "SACRED NOTE", content: "Sen sanat ve güzelliksin. Dünya senin yaratıcılığına ihtiyaç duyuyor. Kendine güven, çünkü sen değerlisin." }
    ],
    yearlyForecast: {
      2025: { theme: "Yaratıcılık", advice: "Sanatsal projelere odaklanın", avoid: "Karamsarlık" },
      2026: { theme: "Güç", advice: "Kendinizi savunun", avoid: "Bağımlılık" }
    }
  },
  monkey: {
    name: "MAYMUN",
    icon: "🐵",
    element: "Metal",
    desc: "Zeki, yaratıcı ve eğlenceli Maymun, problemleri çözme konusunda dahi gibidir. Hayatı oyun gibi yaşar. Maymun, zeka, esneklik ve yaratıcılığın sembolüdür. Her durumdan çıkar sağlayabilir.",
    friends: ["Fare", "Ejderha", "Yılan"],
    enemies: ["Kaplan", "Domuz"],
    strengths: ["Zeka", "Yaratıcılık", "Esneklik", "Mizah", "Problem çözme", "Hızlı öğrenme", "Adaptasyon"],
    weaknesses: ["Hilekarlık", "Dikkatsizlik", "Sabırsızlık", "Yüzeysellik", "Güvenilmezlik"],
    hiddenGift: "Problem çözme - Her durumdan çıkış yolu bulma",
    deepAnalysis: [
      { title: "KARAKTER", content: "Maymun zeki ve muziptir. Her durumdan çıkar sağlayabilir. Esnek ve adaptif bir yapısı vardır." },
      { title: "KARİYER", content: "Teknoloji, eğlence, pazarlama, danışmanlık alanları uygundur. Problem çözme yeteneği güçlüdür." },
      { title: "AŞK", content: "Eğlenceli ve yaratıcı bir partnerdir. Ancak ciddiyetten kaçabilir. Partneri onu eğlendirmelidir." },
      { title: "PARA", content: "Para konusunda zekidir. Fırsatları görür. Ancak düzensiz olabilir." },
      { title: "SAĞLIK", content: "Sinir sistemi ve solunum sistemi hassas bölgenizdir. Stres yönetimi önemlidir." },
      { title: "KARMA", content: "Maymun'un karması zekasını doğru kullanmayı öğrenmektir. Hilekarlık yerine dürüstlük tercih etmelidir." },
      { title: "2026 UYARISI", content: "Kaplan yılı sizin için zorlayıcı olabilir. Dürüst olun ve hile yapmayın." },
      { title: "GELİŞİM ALANI", content: "Ciddiyet ve sorumluluk geliştirmelisiniz. Hayat sadece oyun değil." },
      { title: "SACRED NOTE", content: "Sen zekanın ta kendisisin. Dünya senin yaratıcılığına ihtiyaç duyuyor. Ancak unutma ki gerçek zeka, dürüstlüktedir." }
    ],
    yearlyForecast: {
      2025: { theme: "Yaratıcılık", advice: "Yeni fikirler geliştirin", avoid: "Hilekarlık" },
      2026: { theme: "Dürüstlük", advice: "Dürüst olun", avoid: "Kurnazlık" }
    }
  },
  rooster: {
    name: "HOROZ",
    icon: "🐓",
    element: "Metal",
    desc: "Dürüst, çalışkan ve detaycı Horoz, mükemmellik peşindedir. Konuşkan ve göz önünde olmayı sever. Horoz, dürüstlük, çalışkanlık ve güvenilirliğin sembolüdür. Detaylara dikkat eder.",
    friends: ["Öküz", "Ejderha", "Yılan"],
    enemies: ["Tavşan", "Köpek"],
    strengths: ["Dürüstlük", "Çalışkanlık", "Cesaret", "Detaycılık", "Organizasyon", "Güvenilirlik"],
    weaknesses: ["Eleştiri", "Kibir", "Mükemmeliyetçilik", "Sabırsızlık", "Gürültücülük"],
    hiddenGift: "Organizasyon ve detaycılık - Her şeyi mükemmel yapma",
    deepAnalysis: [
      { title: "KARAKTER", content: "Horoz detaylara dikkat eder, mükemmeliyetçidir. Göz önünde olmayı sever. Dürüst ve güvenilirdir." },
      { title: "KARİYER", content: "Yöneticilik, organizasyon, medya, hukuk alanları uygundur. Detaycı çalışmaları sever." },
      { title: "AŞK", content: "Sadık ve koruyucu bir partnerdir. Ancak eleştirebilir. Partneri onun standartlarına uymak zorunda kalabilir." },
      { title: "PARA", content: "Para konusunda dikkatlidir. Planlı harcar. Biriktirme konusunda başarılıdır." },
      { title: "SAĞLIK", content: "Solunum sistemi ve sinir sistemi hassas bölgenizdir. Stres yönetimi önemlidir." },
      { title: "KARMA", content: "Horoz'un karması eleştiriden önce anlayış göstermeyi öğrenmektir. Başkalarını yargılamamalıdır." },
      { title: "2026 UYARISI", content: "Kaplan yılı sizin için rekabetçi olabilir. Kendinizi kanıtlayın." },
      { title: "GELİŞİM ALANI", content: "Esneklik ve hoşgörü geliştirmelisiniz. Mükemmeliyetçiliğinizi kontrol edin." },
      { title: "SACRED NOTE", content: "Sen dürüstlüğün ve çalışkanlığın sembolüsün. Dünya senin disiplinine ihtiyaç duyuyor. Ancak unutma ki mükemmeliyet yolunda başkalarını ezme." }
    ],
    yearlyForecast: {
      2025: { theme: "Çalışma", advice: "Projelerinizi tamamlayın", avoid: "Eleştiri" },
      2026: { theme: "Rekabet", advice: "Rekabette öne çıkın", avoid: "Kibir" }
    }
  },
  dog: {
    name: "KÖPEK",
    icon: "🐕",
    element: "Toprak",
    desc: "Sadık, dürüst ve koruyucu Köpek, adaletin savunucusudur. Güvenilirlik sembolüdür. Köpek, sadakat, dürüstlük ve koruyuculuğun sembolüdür. Adalete büyük önem verir.",
    friends: ["Kaplan", "At", "Tavşan"],
    enemies: ["Ejderha", "Koyun", "Horoz"],
    strengths: ["Sadakat", "Dürüstlük", "Koruyuculuk", "Adalet", "Güvenilirlik", "Dostluk"],
    weaknesses: ["Endişe", "İnatçılık", "Şüphecilik", "Karamsarlık", "Aşırı koruyuculuk"],
    hiddenGift: "Koruyuculuk - Sevdiklerini her koşulda koruma",
    deepAnalysis: [
      { title: "KARAKTER", content: "Köpek sadık ve güvenilirdir. Adalete büyük önem verir. Koruyucu bir yapısı vardır." },
      { title: "KARİYER", content: "Polis, askerlik, güvenlik, sosyal hizmetler, hukuk alanları uygundur. Adalet ve koruma işlerini sever." },
      { title: "AŞK", content: "Son derece sadık ve koruyucu bir partnerdir. Güven arar. Partneri için her şeyi yapar." },
      { title: "PARA", content: "Para konusunda muhafazakardır. Güvenli yatırımları tercih eder. Ailesi için biriktirir." },
      { title: "SAĞLIK", content: "Sindirim sistemi ve sinir sistemi hassas bölgenizdir. Endişe sağlığınızı etkiler." },
      { title: "KARMA", content: "Köpek'in karması güvenmeyi ve güvenilmeyi öğrenmektir. Şüpheciliği aşmalıdır." },
      { title: "2026 UYARISI", content: "Kaplan yılı sizin için dostluklar açısından zengin olacak. Yeni dostluklar kurun." },
      { title: "GELİŞİM ALANI", content: "Güven ve iyimserlik geliştirmelisiniz. Dünyayı daha olumlu görün." },
      { title: "SACRED NOTE", content: "Sen sadakatin ta kendisisin. Dünya senin dürüstlüğüne ihtiyaç duyuyor. Ancak unutma ki herkes kötü değil, güvenmeyi öğren." }
    ],
    yearlyForecast: {
      2025: { theme: "Sadakat", advice: "Sadık kalın", avoid: "Şüphecilik" },
      2026: { theme: "Dostluk", advice: "Yeni dostluklar kurun", avoid: "Endişe" }
    }
  },
  pig: {
    name: "DOMUZ",
    icon: "🐷",
    element: "Su",
    desc: "Neşeli, cömert ve dürüst Domuz, bolluk ve refah sembolüdür. Hayatın tadını çıkarmayı bilir. Domuz, bolluk, neşe ve dürüstlüğün sembolüdür. Hayattan zevk almayı bilir.",
    friends: ["Tavşan", "Koyun", "Kaplan"],
    enemies: ["Yılan", "Maymun"],
    strengths: ["Neşe", "Cömertlik", "Dürüstlük", "Bolluk", "İyimserlik", "Hoşgörü", "Barışseverlik"],
    weaknesses: ["Safdillik", "Aşırı güven", "Tembellik", "Aşırı yemek", "Kolay kanma"],
    hiddenGift: "Bolluk çekme - İyi şans ve refahı kendine çekme",
    deepAnalysis: [
      { title: "KARAKTER", content: "Domuz neşeli ve iyimserdir. Materyal konforu sever ama paylaşmayı da bilir. Hoşgörülüdür." },
      { title: "KARİYER", content: "Yemek, eğlence, sanat, insani hizmetler alanları uygundur. İnsanları mutlu etmeyi sever." },
      { title: "AŞK", content: "Romantik ve sadık bir partnerdir. Hayatın tadını çıkarmayı bilir. Partneriyle birlikte büyümek ister." },
      { title: "PARA", content: "Para konusunda şanslıdır. Bolluk çeker. Ancak savurgan olabilir." },
      { title: "SAĞLIK", content: "Sindirim sistemi ve metabolizma hassas bölgenizdir. Dengeli beslenme önemlidir." },
      { title: "KARMA", content: "Domuz'un karması saf kalbini korumayı öğrenmektir. Dünyanın kötülüklerine rağmen iyimser kalmalıdır." },
      { title: "2026 UYARISI", content: "Kaplan yılı sizin için bolluk getirecek. İyi şanslar sizi bulacak." },
      { title: "GELİŞİM ALANI", content: "Dikkat ve sınırlar geliştirmelisiniz. Herkese güvenmeyin." },
      { title: "SACRED NOTE", content: "Sen bolluk ve neşesin. Dünya senin iyimserliğine ihtiyaç duyuyor. Kalbin temiz kalsın, ama gözlerin açık olsun." }
    ],
    yearlyForecast: {
      2025: { theme: "Bolluk", advice: "Hayatın tadını çıkarın", avoid: "Aşırı güven" },
      2026: { theme: "Şans", advice: "Fırsatları değerlendirin", avoid: "Tembellik" }
    }
  }
};

// Helper function to get Chinese Zodiac animal
export function getChineseZodiac(year: number): string {
  const animals = ['monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat'];
  return animals[year % 12];
}

// Get element for a specific year
export function getChineseElement(year: number): string {
  const elements = ['Metal', 'Metal', 'Su', 'Su', 'Ağaç', 'Ağaç', 'Ateş', 'Ateş', 'Toprak', 'Toprak'];
  return elements[year % 10];
}

// Get Yin/Yang for a specific year
export function getChineseYinYang(year: number): string {
  return year % 2 === 0 ? 'Yang' : 'Yin';
}
