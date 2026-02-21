// Numerology Data - Comprehensive analysis for all Life Path Numbers
// Master Numbers 11, 22, 33 are NOT reduced - they hold special significance

export interface NumerologyDataType {
  [key: number]: {
    title: string;
    subtitle: string;
    symbol: string;
    desc: string;
    quote: string;
    strengths: string[];
    weaknesses: string[];
    career: string[];
    love: string;
    loveMatch: string;
    loveChallenge: string;
    hiddenGift: string;
    deepAnalysis: { title: string; content: string }[];
    personalYear: { [key: number]: { theme: string; advice: string; avoid: string } };
  };
}

export const numerologyData: NumerologyDataType = {
  1: {
    title: "Yaratıcı",
    subtitle: "Özgün ve Lider",
    symbol: "☀️",
    desc: "Yaşam Yolu 1, evrenin orijinal gücünü temsil eder. 1 sayısı 'Yaratıcı', 'Öncü' ve 'Lider' olarak bilinir. Bu sayı güneş enerjisiyle bağdaştırılır - tıpkı güneşin tüm gezegenlerin etrafında dönmesi gibi, siz de doğal bir çekim merkezisiniz. Pythagorean sisteminde 1, Monad olarak bilinir - tüm sayıların kaynağı ve özüdür.",
    quote: "Sen bir ateşin ilk kıvılcımısın. Yalnız başına parlamaktan korkma, çünkü senin ışığın başkalarının yolunu aydınlatır. Bağımsızlığın senin gücün, yalnızlığın ise zayıflığın olabilir.",
    strengths: ["Özgünlük", "Bağımsızlık", "Kararlılık", "Yaratıcılık", "Liderlik", "Girişimcilik", "Öz güven", "İnisiyatif"],
    weaknesses: ["Bencillik", "Sabırsızlık", "Dominantlık", "İzolasyon", "İnatçılık", "Aşırı rekabetçilik", "Empati eksikliği"],
    career: ["Girişimci", "CEO", "Yönetmen", "Yazar", "Mucit", "Sporcu", "Politikacı", "Satış uzmanı", "Pazarlama direktörü", "Freelancer"],
    love: "İlişkilerde bağımsızlığını koruman gerekir. Partnerin sizi sınırlamamalı, aksine sizin liderliğinizi desteklemelidir. Aşkta tutkul ve sadıksınız ancak kendi alanınıza ihtiyaç duyarsınız. Partnerinizin kendi hedefleri olması önemlidir, aksi halde sıkılabilirsiniz.",
    loveMatch: "3, 5, 6, 9",
    loveChallenge: "2, 4, 8",
    hiddenGift: "Sıfırdan imparatorluk kurma yeteneği - Her şeyi kendi başınıza başarma kapasiteniz",
    deepAnalysis: [
      { title: "KARMA", content: "1 sayısı yeni başlangıçların ve özgünlüğün kodudur. Geçmiş yaşamlarınızda bağımsızlığınızı tam olarak kullanamamış veya liderlik şansınızı kaçırmış olabilirsiniz. Bu hayatta kendi yolunuzu çizme, başkalarına örnek olma ve özgün kimliğinizi keşfetme fırsatınız var. Karmik dersiniz güçlü olmak değil, gücü bilgelikle kullanmaktır. Başkalarının gölgesinde kalmak sizi ruhsal olarak hasta ederken, aşırı bencillik de ilişkilerinizi zehirleyebilir. Dengeli bir liderlik öğrenmelisiniz." },
      { title: "PARA ENERJİSİ", content: "Para sizin için özgürlüğün ve bağımsızlığın sembolüdür. Maddi güvenliğinizi sağlamak için kendi işinizi kurmayı veya bağımsız gelir kaynakları oluşturmayı düşünmelisiniz. Başkalarının kontrolündeki maddi kaynaklar sizi zamanla tüketir ve öfkelendirir. Yatırım yaparken kendi kararlarınıza güvenin, başkalarının tavsiyeleri sizi yanıltabilir. Risk almaktan korkmayın ancak hesaplanmış risklerle hareket edin. Para enerjiniz girişimcilik ve yaratıcılıkla paralel hareket eder." },
      { title: "SAĞLIK", content: "Kalp, dolaşım sistemi ve baş bölgeniz hassas noktalarınızdır. Stres yönetimi sizin için hayati önem taşır çünkü stres altında kan basıncınız yükselme eğilimindedir. Spor yaparken aşırı rekabetçi olabilir ve kendinizi zorlayabilirsiniz, bu da sakatlanmalara yol açabilir. Düzenli kardiyo egzersizleri yapmalı ancak dinlenmeye de zaman ayırmalısınız. Baş ağrıları ve migren atakları stresin sinyalleridir, görmezden gelmeyin." },
      { title: "RUHSAL GÖREV", content: "Bu hayattaki ana göreviniz kendi ışığınızı bulup dünyaya göstermektir. Başkalarının beklentileri veya toplumsal normlar içinde eriyip gitmek sizi ruhsal olarak boğar. Özgün olmak, kendi sesinizi duyurmak ve liderlik etmek sizin ilacınızdır. Ancak unutmayın ki gerçek liderlik başkalarını ezerek değil, onları da yükselterek yapılır. Diktatör değil, ilham veren bir lider olun." },
      { title: "GEÇMİŞ YAŞAM", content: "Geçmiş yaşamlarınızda muhtemelen bir savaşçı, general, kral veya önemli bir liderdiniz. Güç kullanımı konusunda derin deneyimler kazandınız, bazen bu gücü kötüye kullanmış olabilirsiniz. Bu hayatta öğrenmeniz gereken, gücü yaratıcılık ve şefkatle harmanlamaktır. Eski zamanlardan gelen bir liderlik ruhunuz var, bunu modern dünyada yapıcı şekillerde ifade etmelisiniz." },
      { title: "GİZİL YETENEK", content: "İnsanları bir araya getirme, onları harekete geçirme ve ilham verme yeteneğiniz olağanüstüdür. Doğal bir influencersınız ancak bunun farkında olmayabilirsiniz. Siz konuşmaya başladığınızda insanlar sizi dinler, fikirleriniz etki yaratır. Bu yeteneği sosyal medyada, iş yerinde veya topluluk önünde kullanabilirsiniz. Gizli bir karizmanız var, bunu keşfedin ve geliştirin." },
      { title: "2026 UYARISI", content: "2026 yılı sizin için yeni projelere başlamak, girişimlerde bulunmak ve kariyerinizde önemli adımlar atmak için mükemmel bir yıl olacak. Ancak aceleci kararlardan ve düşünmeden atılan adımlardan kaçının, temelleri sağlam atın. İş fırsatları kapınızı çalacak, ancak her fırsatı değerlendirmeyin. Sadece gerçekten tutkulu olduğunuz projelere odaklanın. Yılın ikinci yarısında maddi kazançlar sizi bekliyor." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "5 ve 9 sayılarıyla güçlü bir uyumunuz bulunmaktadır. 5 sayısı sizin disiplinli yapınıza macera ve esneklik katar, 9 sayısı ise vizyonunuzu evrensel boyuta taşır. 2 ve 4 sayıları size zorlayıcı gelebilir çünkü onların yavaş ve metodik yapısı sizi sabırsızlandırır, ancak bu sayılardan sabır ve detaycılık öğrenmeniz gerekir. 7 sayısı size manevi derinlik kazandırabilir." },
      { title: "SACRED NOTE", content: "Sen bir kıvılcımsın, bir ateşin başlangıcı. Unutma ki her büyük yangın tek bir kıvılcımla başlar. Cesaretin senin en büyük hazinen, ancak sabrın en büyük öğretmenin. Liderlik etmek demek başkalarının da ışığını görmek, onları gölgede bırakmak değil birlikte parlamaktır. Yalnızlık senin seçimin olabilir ama yalnız kalmak zorunda değilsin. Dünya senin özgünlüğünü bekliyor." }
    ],
    personalYear: {
      1: { theme: "Yeni Başlangıçlar", advice: "Yeni projelere başlayın, girişimlerde bulunun, liderlik pozisyonlarına talip olun", avoid: "Eski ilişkilere tutunmak, başkalarının kararlarını beklemek" },
      2: { theme: "İşbirliği ve Sabır", advice: "Partnerlikler kurun, diplomasi kullanın, sezgilerinize güvenin", avoid: "Aceleci kararlar, yalnız hareket etmek" },
      3: { theme: "Yaratıcılık ve Sosyallik", advice: "Sanatsal projelere yönelin, sosyal çevrenizi genişletin, eğlenin", avoid: "Dağınıklık, yüzeysel ilişkiler" },
      4: { theme: "Çalışma ve Düzen", advice: "Temelleri sağlamlaştırın, disiplinli çalışın, organizasyon kurun", avoid: "Risk almak, düzensizlik" },
      5: { theme: "Değişim ve Özgürlük", advice: "Maceralara atılın, seyahat edin, yeni deneyimler kazanın", avoid: "Kısıtlanmış hissetmek, rutine bağlı kalmak" },
      6: { theme: "Sorumluluk ve Aile", advice: "Aile ilişkilerini güçlendirin, ev düzenleyin, başkalarına hizmet edin", avoid: "Kendini feda etmek, aşırı kontrolcülük" },
      7: { theme: "İçsel Yolculuk", advice: "Meditasyon yapın, bilgi edinin, manevi gelişime odaklanın", avoid: "Yüzeysellik, sosyal izolasyon" },
      8: { theme: "Güç ve Başarı", advice: "Kariyer hedeflerinize odaklanın, finansal büyümeyi hedefleyin", avoid: "İşkoliklik, güç kullanımı" },
      9: { theme: "Tamamlanma ve Bırakma", advice: "Eski bağları koparın, bağışta bulunun, insani yardım yapın", avoid: "Yeni başlangıçlar, tutunmak" }
    }
  },
  2: {
    title: "Diplomat",
    subtitle: "Barış ve Uyum",
    symbol: "☯️",
    desc: "Yaşam Yolu 2, evrenin denge şifresini taşır. İki kutup arasındaki köprüsünüz. Hassasiyetiniz bir lanet değil, bir süper güçtür. İnsanların hissettiklerini hissedebilirsiniz. Chaldean sisteminde 2, Ay'ı temsil eder - duygusal, sezgisel ve değişken bir enerjidir.",
    quote: "Sen sessiz bir derinliksin. Görünmez olmanın gücünü keşfet, çünkü en derin okyanuslar en sakin görünürler. İkiliği aşmak senin görevin.",
    strengths: ["Diplomasi", "Sezgi", "İşbirliği", "Sabır", "Empati", "Dinleme", "Uzlaşmacılık", "Detaycılık"],
    weaknesses: ["Aşırı duyarlılık", "Kararsızlık", "Bağımlılık", "İçe kapanma", "Pasiflik", "Kuruntulu olmak"],
    career: ["Diplomat", "Psikolog", "Müzakereci", "Sekreterya", "Araştırmacı", "Danışman", "Hemşire", "Öğretmen", "Sosyal çalışmacı", "İnsan kaynakları"],
    love: "İlişkiler sizin için hayatın merkezindedir. Ancak kendi kimliğinizi kaybetmemeye dikkat edin. Partner seçiminde çok seçici olun. Romantik ve şefkatlisiniz. Partnerinizin duygusal ihtiyaçlarını anlama yeteneğiniz güçlüdür.",
    loveMatch: "2, 4, 6, 8",
    loveChallenge: "1, 5, 7",
    hiddenGift: "Görünmez ellerle dünyayı şekillendirme yeteneği - Arka planda güç kullanma",
    deepAnalysis: [
      { title: "KARMA", content: "2 sayısı denge, uyum ve işbirliğinin şifresini taşır. Geçmiş yaşamlarınızda aşırı bağımlı kalmış veya tamamen yalnız, izole bir yaşam sürmüş olabilirsiniz. Bu hayatta öğrenmeniz gereken, bağımsızlık ve birliktelik arasındaki ince çizgiyi bulmaktır. Kendi kimliğinizi kaybetmeden başkalarıyla bağ kurmayı, güçlü olup nazik kalmayı öğrenmelisiniz. İkiliği aşmak sizin karmik görevinizdir." },
      { title: "PARA ENERJİSİ", content: "Para sizin için duygusal güvenliğin ve istikrarın sembolüdür. Ortaklıklar ve işbirlikleri yoluyla kazanç sağlayabilirsiniz, ancak finansal bağımsızlığınızı korumaya dikkat edin. Partnerinize aşırı güvenmek veya maddi konularda tamamen ona bağımlı olmak sizi zor durumda bırakabilir. Bütçe yapma ve birikim yapma konusunda doğal bir yeteneğiniz var. Duygusal harcamalardan kaçının." },
      { title: "SAĞLIK", content: "Sindirim sistemi, mide ve bağırsaklarınız hassas bölgelerdir. Stres ve bastırılmış duygular sizi fiziksel olarak etkiler, stoma problemleri ve ülser riski taşırsınız. Duygularınızı içe atmak yerine sağlıklı şekillerde ifade etmeyi öğrenmelisiniz. Su sporları ve yüzme sizin için özellikle iyileştiricidir. Düzenli meditasyon yaparak duygusal dengeyi koruyabilirsiniz." },
      { title: "RUHSAL GÖREV", content: "Bu hayattaki ana göreviniz ikiliği aşmak, karşıtlıkları birleştirmektir. Siyah-beyaz düşüncenin ötesinde gri tonları görmeyi öğrenmelisiniz. Hem bağımsız hem bağlı, hem güçlü hem nazik olabilmenin sırrını keşfetmelisiniz. İşbirliği yapmayı, uzlaşmayı ve arabuluculuğu öğrenmek sizin ruhsal gelişiminizin anahtarıdır. Sezginizi geliştirin ve ona güvenin." },
      { title: "GEÇMİŞ YAŞAM", content: "Geçmiş yaşamlarınızda muhtemelen bir rahibe, keşiş, saray danışmanı veya gölgede kalan bir eş olarak hizmet ettiniz. Gözlerden uzak, sessizce güç kullanmayı öğrendiniz. Bu hayatta kendi sesinizi çıkarmayı, kendi ihtiyaçlarınızı dile getirmeyi öğrenmeniz gerekiyor. Geçmişte kendinizi feda etme eğiliminiz vardı, şimdi dengeli bir şekilde hem kendinize hem başkalarına bakmayı öğrenmelisiniz." },
      { title: "GİZİL YETENEK", content: "Arabuluculuk ve uzlaştırma yeteneğiniz olağanüstüdür. İki düşmanı barıştırabilir, uzlaşma sağlayabilir ve çatışmaları çözebilirsiniz. İnsanların derin duygusal ihtiyaçlarını hissetme kapasiteniz sizi mükemmel bir terapist, danışman veya diplomat yapar. Detayları görme ve küçük ama önemli şeyleri fark etme yeteneğiniz vardır. Bu yetenekleri profesyonel olarak kullanabilirsiniz." },
      { title: "2026 UYARISI", content: "2026 yılı ilişkilerinizde önemli kararlar alacağınız bir yıl olacak. İşbirlikleri, ortaklıklar veya romantik ilişkilerde dönüm noktaları yaşayabilirsiniz. Ancak kararsızlığınız sizi engellemesin, sezgilerinize güvenin ve gerektiğinde net kararlar alın. Yılın ilk yarısında sabırlı olmanız, ikinci yarısında ise daha aktif olmanız gerekecek. Duygusal sınırlarınızı koruyun." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "4 ve 8 sayılarıyla güçlü bir uyumunuz vardır. 4 sayısı size istikrar ve düzen getirirken, 8 sayısı maddi güvenlik sağlar. 1 ve 5 sayıları size zorlayıcı gelebilir çünkü onların hızlı ve bağımsız yapısı sizi endişelendirebilir, ancak bu sayılardan bağımsızlık ve cesaret öğrenmeniz gerekir. 6 sayısı size şefkat ve bakım enerjisi getirir." },
      { title: "SACRED NOTE", content: "Sen iki ayna arasındaki ışıksın, karşıtlıkları birleştiren, polariteleri dengeleyen bir güçsün. Hassasiyetin bir zayıflık değil, en büyük gücün. Dünya senin nazik dokunuşuna, senin dinleyen kulaklarına ihtiyaç duyuyor. Ancak unutma, bir sürahi boşaldığında başkalarına su veremez. Önce kendini doldur, sonra dünyaya ak. Sen yeterince güçlüsün, sadece bunun farkına varmalısın." }
    ],
    personalYear: {
      1: { theme: "Bağımsızlık", advice: "Kendi ayaklarınızın üzerinde durun, bağımsız kararlar alın", avoid: "Başkalarına aşırı bağımlı olmak" },
      2: { theme: "İlişkiler", advice: "Partnerlikler kurun, işbirliği yapın, sezgilerinizi dinleyin", avoid: "Yalnızlık, kararsızlık" },
      3: { theme: "İletişim", advice: "Yaratıcı ifadelere yönelin, sosyal olun, neşe yayın", avoid: "İçe kapanma, duygusal bastırma" },
      4: { theme: "Güvenlik", advice: "Maddi güvenliğinizi sağlayın, düzen kurun", avoid: "Risk almak, düzensizlik" },
      5: { theme: "Değişim", advice: "Yeni deneyimlere açık olun, esnek davranın", avoid: "Direnmek, kontrolcülük" },
      6: { theme: "Aile", advice: "Ev hayatınıza odaklanın, sevdiklerinize zaman ayırın", avoid: "Kendini feda etmek" },
      7: { theme: "İçsel Gelişim", advice: "Manevi pratikler yapın, iç dünyanızı keşfedin", avoid: "Aşırı dışa dönüklük" },
      8: { theme: "Güç Dengesi", advice: "Güç kullanımını öğrenin, liderlik yapın", avoid: "Pasiflik, mağdur rolü" },
      9: { theme: "Hizmet", advice: "Başkalarına yardım edin, evrensel sevgi yayın", avoid: "Bencil olmak, sınırları korumamak" }
    }
  },
  3: {
    title: "İletişimci",
    subtitle: "Yaratıcı İfade",
    symbol: "🎭",
    desc: "Yaşam Yolu 3, evrenin neşe ve yaratıcılık kodudur. Siz bir sanatçısınız, hayatı renklendirirsiniz. İletişim sizin süper gücünüzdür. Pythagorean sisteminde 3, üçgenin ve üçlemenin kutsal sayısıdır - zihin, beden, ruh birliğini temsil eder.",
    quote: "Sen bir şarkısın, evrenin melodisi. Susmak seni hasta eder, ifade etmek seni özgür kılar. Dünya senin renklerine ihtiyaç duyuyor.",
    strengths: ["Yaratıcılık", "İletişim", "Neşe", "Sosyallik", "Esneklik", "Hayal gücü", "Espri", "İlham verme"],
    weaknesses: ["Dağınıklık", "Yüzeysellik", "Dağılma", "Eleştiriye hassasiyet", "Düzensizlik", "Sabırsızlık"],
    career: ["Sanatçı", "Yazar", "Sunucu", "Pazarlama", "Tasarımcı", "Oyuncu", "Müzisyen", "Reklamcı", "Sosyal medya uzmanı", "Eğlence sektörü"],
    love: "İlişkilerde eğlence ve yaratıcılık ararsınız. Sıkıcı rutinler sizi boğar. Partneriniz sizi ilhamlandırmalıdır. Romantik ve tutkul bir aşıksınız. Partnerinizle sürekli yeni şeyler keşfetmek istersiniz.",
    loveMatch: "1, 3, 5, 9",
    loveChallenge: "2, 4, 7",
    hiddenGift: "Güzellik ve neşe yayarak iyileştirme - İnsanların kalplerine dokunma",
    deepAnalysis: [
      { title: "KARMA", content: "3 sayısı yaratıcılık, neşe ve kendini ifade etmenin kodudur. Geçmiş yaşamlarınızda yaratıcılığınızı bastırmış, ciddiyet içinde yaşamış veya duygularınızı ifade edememiş olabilirsiniz. Bu hayatta öğrenmeniz gereken, içindeki çocuğu özgür bırakmak, yaratıcılığınızı ifade etmek ve hayatın tadını çıkarmaktır. Ancak sorumluluktan kaçmak değil, yaratıcı şekillerde sorumluluk almayı öğrenmelisiniz." },
      { title: "PARA ENERJİSİ", content: "Para sizin için özgürlüğün ve eğlencenin sembolüdür. Yaratıcılığınızdan para kazanabilir, sanatsal projelerle gelir elde edebilirsiniz. Ancak düzensiz gelirler ve plansız harcamalar sizi zorlayabilir. Finansal disiplin öğrenmeniz gerekir. Birden fazla gelir kaynağı oluşturabilir, yeteneklerinizi çeşitli şekillerde paraya dönüştürebilirsiniz. Para sizin için araç, amaç değildir." },
      { title: "SAĞLIK", content: "Boğaz, tiroid, omuzlar ve sinir sisteminiz hassas bölgelerdir. Stres altında boğaz enfeksiyonları ve tiroid problemleri yaşayabilirsiniz. Duygularınızı ifade edememek fiziksel olarak size zarar verir. Şarkı söylemek, dans etmek ve yaratıcı ifadeler sağlığınız için iyileştiricidir. Düzensiz uyku ve yeme alışkanlıklarına dikkat edin, rutin oluşturmaya çalışın." },
      { title: "RUHSAL GÖREV", content: "Bu hayattaki ana göreviniz içindeki çocuğu koruyarak yetişkin sorumluluklarını da yerine getirmektir. Hayatı ciddiye almadan yaşamak değil, ciddi konularda bile neşeyi bulmayı öğrenmelisiniz. Yaratıcılığınızı kullanarak dünyayı güzelleştirmek, insanlara ilham vermek sizin ruhsal görevinizdir. İfade özgürlüğünüz kutsaldır, kendinizi sansürlemeyin." },
      { title: "GEÇMİŞ YAŞAM", content: "Geçmiş yaşamlarınızda muhtemelen bir sanatçı, oyuncu, şair veya saray soytarısıydınız. Yaratıcılığınızı kullandınız ancak belki de ciddiye alınmadınız veya yeterince değer görmediniz. Bu hayatta yeteneklerinizin değerini ve onları nasıl somut sonuçlara dönüştüreceğinizi öğrenmeniz gerekiyor. Eğlence ve sorumluluk arasında denge kurmalısınız." },
      { title: "GİZİL YETENEK", content: "İletişim ve hikaye anlatma yeteneğiniz olağanüstüdür. İnsanları güldürebilir, ağlatabilir ve harekete geçirebilirsiniz. Yazılı veya sözlü ifade sizin süper gücünüzdür. Satış, pazarlama, sahne performansı veya yazarlık alanlarında doğal bir yeteneğiniz var. İnsanların dikkatini çekme ve onları eğlendirme kapasiteniz eşsizdir." },
      { title: "2026 UYARISI", content: "2026 yılı yaratıcılığınızın zirve yapacağı bir yıl olacak. Sanatsal projeler, yaratıcı işbirlikleri ve sosyal etkinlikler sizi bekliyor. Ancak dağınıklık ve bitmemiş projeler sizi tüketmesin, odaklanmayı öğrenin. Yılın ikinci yarısında yaratıcılığınızdan para kazanma fırsatları gelecek. Sosyal çevreniz genişleyecek, önemli bağlantılar kuracaksınız." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "1 ve 5 sayılarıyla güçlü bir uyumunuz vardır. 1 sayısı size odak ve disiplin getirirken, 5 sayısı macera ve özgürlük katar. 4 ve 7 sayıları size zorlayıcı gelebilir çünkü onların ciddi ve yapılandırılmış yapısı sizi sıkabilir, ancak bu sayılardan disiplin ve derinlik öğrenmeniz gerekir. 6 sayısı size şefkat ve bakım enerjisi getirir." },
      { title: "SACRED NOTE", content: "Sen bir şarkısın, bir renk cümbüşü, bir neşe patlaması. Dünya senin gülüşüne, senin yaratıcılığına ihtiyaç duyuyor. Ancak unutma, bir şarkı söylemek için sessizlik de gerekir. Neşeni paylaş ama kendini tüketme. İçindeki çocuğu koru ama yetişkin sorumluluklarından kaçma. Sen bir ilham kaynağısın, dünya senin ışığını bekliyor. Yarat, yaşa, sev!" }
    ],
    personalYear: {
      1: { theme: "Yaratıcı Başlangıçlar", advice: "Yeni sanatsal projelere başlayın, kendinizi ifade edin", avoid: "Fikirlerinizi saklamak" },
      2: { theme: "İşbirliği", advice: "Yaratıcı ortaklıklar kurun, başkalarıyla birlikte çalışın", avoid: "Yalnız çalışmak, rekabet" },
      3: { theme: "Sosyallik", advice: "Partilere katılın, eğlenin, sosyal çevrenizi genişletin", avoid: "İzolasyon, depresyon" },
      4: { theme: "Disiplin", advice: "Yaratıcı projelerinizi düzene sokun, rutin oluşturun", avoid: "Dağınıklık, bitmemiş projeler" },
      5: { theme: "Macera", advice: "Seyahat edin, yeni deneyimler kazanın, özgür olun", avoid: "Sıkıcı rutinler" },
      6: { theme: "Aile ve Sanat", advice: "Ailenizle yaratıcı aktiviteler yapın, evinizi güzelleştirin", avoid: "Aşırı eğlence, sorumlulukları ertelemek" },
      7: { theme: "İçsel Yaratıcılık", advice: "Derinlemesine çalışın, manevi sanatlarla ilgilenin", avoid: "Yüzeysellik" },
      8: { theme: "Ticari Başarı", advice: "Yaratıcılığınızdan para kazanın, iş kurun", avoid: "Para konusunda ciddiyetsizlik" },
      9: { theme: "Paylaşma", advice: "Yeteneğinizi dünya ile paylaşın, öğretin, bağışta bulunun", avoid: "Bencil olmak" }
    }
  },
  4: {
    title: "İnşaatçı",
    subtitle: "Stabilite ve Düzen",
    symbol: "🏛️",
    desc: "Yaşam Yolu 4, evrenin temel taşıdır. Siz olmadan hiçbir yapı ayakta duramaz. Disiplininiz ve güvenilirliğiniz eşsizdir. Dünyanın dört köşesini, dört mevsimi, dört elementi temsil edersiniz.",
    quote: "Sen bir dağsın, sabit ve güvenilir. Başkaları rüzgar gibi eserken, sen yerinde durursun. Temellerin sağlam, geleceğin güvenli.",
    strengths: ["Organizasyon", "Güvenilirlik", "Pratiklik", "Disiplin", "Dayanıklılık", "Detaycılık", "Sadakat", "Metodik olmak"],
    weaknesses: ["Katılık", "İnatçılık", "Aşırı ciddiyet", "Değişim korkusu", "Pessimizm", "İşkoliklik"],
    career: ["Mühendis", "Mimar", "Muhasebeci", "Proje Yöneticisi", "Bankacı", "Programcı", "İnşaatçı", "Analist", "Yönetici", "Teknisyen"],
    love: "Sadakat ve güven sizin için hayati önem taşır. İlişkilerde stabilite ararsınız. Flörtler yerine uzun vadeli bağlar kurarsınız. Partnerinize karşı son derece sadıksınız ve güvenilirsiniz.",
    loveMatch: "2, 4, 6, 8",
    loveChallenge: "3, 5, 9",
    hiddenGift: "Sıfırdan imparatorluk inşa etme - Her şeyi sistematik olarak başarma",
    deepAnalysis: [
      { title: "KARMA", content: "4 sayısı istikrar, düzen ve somut sonuçların kodudur. Geçmiş yaşamlarınızda düzensizlik, dağınıklık veya sorumluluktan kaçınma yaşamış olabilirsiniz. Bu hayatta öğrenmeniz gereken, sağlam temeller atmak, disiplinli çalışmak ve güvenilir olmaktır. Ancak aşırı katılaşmak veya esnekliği kaybetmek de karmik tuzaktır. Yapı ve akış arasında denge bulmalısınız." },
      { title: "PARA ENERJİSİ", content: "Para sizin için güvenliğin ve istikrarın sembolüdür. Disiplinli birikim ve uzun vadeli yatırımlar sizi zenginleştirir. Riskli yatırımlardan ve ani para hareketlerinden kaçının. Gayrimenkul ve sabit getirili yatırımlar sizin için idealdir. Bütçe yapma ve finansal planlama konusunda doğal bir yeteneğiniz var. Maddi güvenlik sizin için özgürlük demektir." },
      { title: "SAĞLIK", content: "Kemikler, eklemler, dişler ve sindirim sisteminiz hassas bölgelerdir. Düzenli egzersiz yapmalı ancak aşırı zorlamadan kaçınmalısınız. İşkoliklik nedeniyle kendinizi ihmal etme eğiliminiz vardır. Düzenli uyku ve beslenme rutini sizin için hayati önem taşır. Stresi fiziksel aktiviteyle atın, spor yapmak sizin için terapi gibidir." },
      { title: "RUHSAL GÖREV", content: "Bu hayattaki ana göreviniz somut şekillerde hizmet etmek, dünyaya somut katkılar sağlamaktır. Hayalleri gerçeğe dönüştürmek, yapı ve düzen oluşturmak sizin ruhsal görevinizdir. Ancak mükemmeliyetçilik tuzağına düşmeyin, ilerleme mükemmellikten daha önemlidir. Esnekliği ve değişimi kucaklamayı öğrenmelisiniz." },
      { title: "GEÇMİŞ YAŞAM", content: "Geçmiş yaşamlarınızda muhtemelen bir mimar, mühendis, çiftçi veya ustasıydınız. Somut, elle tutulur işler yaptınız ve toplumun temelini oluşturdunuz. Bu hayatta öğrenmeniz gereken, yapıyı korurken değişime de izin vermektir. Aşırı katılığınızı yumuşatmalı, mükemmeliyetçiliğinizi gevşetmelisiniz." },
      { title: "GİZİL YETENEK", content: "Organizasyon ve sistem oluşturma yeteneğiniz olağanüstüdür. Karmaşık projeleri parçalara ayırabilir, adım adım planlayabilir ve sonuca ulaştırabilirsiniz. Detayları görme ve potansiyel sorunları önceden fark etme kapasiteniz vardır. Proje yönetimi, lojistik veya operasyonel rollerde mükemmelsiniz. Güvenilirliğiniz en büyük sermayenizdir." },
      { title: "2026 UYARISI", content: "2026 yılı kariyerinizde önemli ilerlemeler kaydedeceğiniz bir yıl olacak. Uzun vadeli projeleriniz meyve vermeye başlayacak. Ancak iş-aile dengesine dikkat edin, işkoliklik sizi tüketmesin. Yılın ikinci yarısında maddi kazançlar artacak. Sağlığınıza özen gösterin, düzenli check-up yaptırın." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "2 ve 8 sayılarıyla güçlü bir uyumunuz vardır. 2 sayısı size duygusal denge getirirken, 8 sayısı maddi başarı sağlar. 3 ve 5 sayıları size zorlayıcı gelebilir çünkü onların esnek ve değişken yapısı sizi endişelendirebilir, ancak bu sayılardan spontanlık ve esneklik öğrenmeniz gerekir. 6 sayısı size aile bağları getirir." },
      { title: "SACRED NOTE", content: "Sen bir dağsın, sağlam ve güvenilir. Dünya senin istikrarınına, senin güvenilirliğine ihtiyaç duyuyor. Ancak unutma, en sağlam dağlar da rüzgarla şekil değiştirir. Katı olmak güçlü olmak değildir, esnek olmak gerçek güçtür. Temellerini koru ama değişime direnme. Sen dünyanın omurgasısın, ama omurganın da esnemesi gerekir." }
    ],
    personalYear: {
      1: { theme: "Yeni Yapılar", advice: "Yeni projelere başlayın, temeller atın", avoid: "Aceleci kararlar" },
      2: { theme: "İşbirliği", advice: "Güvenilir ortaklar bulun, birlikte çalışın", avoid: "Yalnız hareket etmek" },
      3: { theme: "Yaratıcılık", advice: "Pratik yaratıcılık gösterin, sanatsal projeler yapın", avoid: "Aşırı ciddiyet" },
      4: { theme: "Çalışma", advice: "Sıkı çalışın, düzen kurun, sistemler oluşturun", avoid: "Tembellik, düzensizlik" },
      5: { theme: "Değişim", advice: "Esnek olun, yeni yöntemleri deneyin", avoid: "Direnmek, katı kalmak" },
      6: { theme: "Aile", advice: "Ev düzeninizi sağlamlaştırın, aile sorumluluklarını yerine getirin", avoid: "Aşırı çalışmak" },
      7: { theme: "Analiz", advice: "Derinlemesine araştırma yapın, bilgi edinin", avoid: "Yüzeysellik" },
      8: { theme: "Kariyer", advice: "Kariyerinizde ilerleyin, finansal hedefler koyun", avoid: "İşkoliklik" },
      9: { theme: "Tamamlama", advice: "Projelerinizi bitirin, eskiyi bırakın", avoid: "Yeni başlangıçlar" }
    }
  },
  5: {
    title: "Özgür Ruh",
    subtitle: "Değişim ve Macera",
    symbol: "🦅",
    desc: "Yaşam Yolu 5, evrenin özgürlük ve değişim kodudur. Siz bir rüzgarsınız, hiçbir kafese sığmazsınız. Macera sizin yaşam kaynağınızdır. İnsan bedeninin beş duyusu, beş parmak, beş uzuv - siz deneyimin ta kendisisiniz.",
    quote: "Sen bir rüzgarsın, hiçbir yere ait değilsin ve her yere aitsin. Kısıtlamalar seni boğar, özgürlük ise seni yaşatır. Deneyimlemek senin yolun.",
    strengths: ["Macera", "Esneklik", "Merak", "Çok yönlülük", "Cesaret", "Adaptasyon", "İletişim", "Özgünlük"],
    weaknesses: ["Düzensizlik", "Bağımlılık eğilimi", "Sabırsızlık", "Yüzeysellik", "Dikkatsizlik", "Sorumluluktan kaçma"],
    career: ["Gezgin", "Gazeteci", "Satış", "Rehber", "Acente", "Serbest Meslek", "Danışman", "Pazarlamacı", "Girişimci", "Eğitmen"],
    love: "İlişkilerde özgürlüğünüzü korumak şarttır. Kısıtlayıcı partnerlerden kaçının. Macera dolu bir ilişki ararsınız. Partneriniz sizinle birlikte keşfe çıkmalıdır.",
    loveMatch: "1, 3, 5, 9",
    loveChallenge: "2, 4, 6",
    hiddenGift: "Kriz anlarında çözüm bulma - Adaptasyon ve hayatta kalma",
    deepAnalysis: [
      { title: "KARMA", content: "5 sayısı özgürlük, değişim ve maceranın kodudur. Geçmiş yaşamlarınızda aşırı kısıtlanmış, tutulmuş veya özgürlüğünüzü kaybetmiş olabilirsiniz. Bu hayatta öğrenmeniz gereken, özgürlüğü sorumlulukla birleştirmek, değişimi kucaklamak ancak aynı zamanda bağlılıkları da sürdürmektir. Kaçış değil, bilinçli seçimle özgürlük yaşamalısınız." },
      { title: "PARA ENERJİSİ", content: "Para sizin için özgürlüğün ve seçeneklerin sembolüdür. Birden fazla gelir kaynağı, serbest çalışma veya seyahat ederek kazanma sizin için idealdir. Ancak düzensiz gelirler ve plansız harcamalar sizi zorlayabilir. Finansal disiplin öğrenmeniz gerekir. Para biriktirmek özgürlüğünüzü artırır, harcamak değil." },
      { title: "SAĞLIK", content: "Sinir sistemi, adrenal bezler ve solunum sisteminiz hassas bölgelerdir. Stres ve monotonluk sizi fiziksel olarak etkiler. Değişim ve hareket sizin için hayati önem taşır. Açık hava sporları, seyahat ve yeni deneyimler sağlığınız için iyileştiricidir. Düzensiz uyku ve yeme alışkanlıklarına dikkat edin, rutin oluşturmaya çalışın." },
      { title: "RUHSAL GÖREV", content: "Bu hayattaki ana göreviniz özgürlüğü deneyimlemek, değişimi kucaklamak ve çeşitliliği keşfetmektir. Ancak özgürlük sorumluluktan kaçmak değil, bilinçli seçimlerle çeşitlilik yaşamaktır. Hayatın farklı yüzlerini görmek, farklı kültürleri deneyimlemek sizin ruhsal gelişiminizin anahtarıdır." },
      { title: "GEÇMİŞ YAŞAM", content: "Geçmiş yaşamlarınızda muhtemelen bir gezgin, kaşif, tüccar veya hapsedilmiş biriydiniz. Özgürlüğünüz kısıtlandı veya aşırı sınırlar içinde yaşadınız. Bu hayatta özgürlüğün tadını çıkarmalı ancak aşırıya kaçmamalısınız. Bağlılık ve sorumluluk korkunuzu aşmalısınız." },
      { title: "GİZİL YETENEK", content: "Adaptasyon ve çok yönlülük yeteneğiniz olağanüstüdür. Her ortama uyum sağlayabilir, farklı insan gruplarıyla iletişim kurabilirsiniz. Değişimi hızla kucaklayabilir, yeni durumlarda hızla başarılı olabilirsiniz. Satış, pazarlama, seyahat sektörü veya danışmanlık alanlarında doğal bir yeteneğiniz var." },
      { title: "2026 UYARISI", content: "2026 yılı macera ve değişim dolu bir yıl olacak. Seyahat fırsatları, yeni deneyimler ve beklenmedik değişiklikler sizi bekliyor. Ancak sorumluluklarınızı ihmal etmeyin, özgürlüğünüzü sürdürürken bağlılıklarınızı da koruyun. Yılın ikinci yarısında önemli bir karar noktasına geleceksiniz." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "1 ve 3 sayılarıyla güçlü bir uyumunuz vardır. 1 sayısı size odak getirirken, 3 sayısı yaratıcılık katar. 4 ve 8 sayıları size zorlayıcı gelebilir çünkü onların yapılandırılmış yapısı sizi kısıtlı hissettirebilir, ancak bu sayılardan disiplin ve odaklanma öğrenmeniz gerekir. 7 sayısı size manevi derinlik kazandırır." },
      { title: "SACRED NOTE", content: "Sen bir rüzgarsın, özgür ve değişken. Dünya senin enerjine, senin çeşitliliğine ihtiyaç duyuyor. Ancak unutma, rüzgarın da bir yönü vardır. Kaçmak değil, keşfetmek için hareket et. Özgürlüğün sorumluluktan kaçmak değil, bilinçli seçimlerle çeşitlilik yaşamak olduğunu hatırla. Sen dünyanın maceracısısın, keşfet, yaşa, öğren!" }
    ],
    personalYear: {
      1: { theme: "Yeni Maceralar", advice: "Yeni deneyimlere atılın, keşfedin", avoid: "Rutine bağlı kalmak" },
      2: { theme: "İlişkiler", advice: "Özgürlüğü koruyarak bağ kurun", avoid: "Kısıtlanmış hissetmek" },
      3: { theme: "Sosyallik", advice: "Sosyal çevrenizi genişletin, eğlenin", avoid: "Aşırı eğlence, sorumlulukları ertelemek" },
      4: { theme: "Disiplin", advice: "Özgürlüğünüzü düzene sokun", avoid: "Tamamen kontrolsüz olmak" },
      5: { theme: "Değişim", advice: "Büyük değişiklikler yapın, seyahat edin", avoid: "Sabit kalmak" },
      6: { theme: "Aile", advice: "Aile ilişkilerinizi dengeleyin", avoid: "Aile bağlarından kaçmak" },
      7: { theme: "İçsel Yolculuk", advice: "Manevi keşifler yapın", avoid: "Sadece dış dünyaya odaklanmak" },
      8: { theme: "Başarı", advice: "Özgürlüğünüzü finansal başarıyla destekleyin", avoid: "Para konusunda dikkatsizlik" },
      9: { theme: "Bırakma", advice: "Eski alışkanlıkları bırakın", avoid: "Bağımlılıklar" }
    }
  },
  6: {
    title: "Şifacı",
    subtitle: "Sevgi ve Sorumluluk",
    symbol: "💚",
    desc: "Yaşam Yolu 6, evrenin sevgi ve şifa kodudur. Siz bir annesiniz, bir babasınız, bir öğretmensiniz. Başkalarına hizmet sizin yaşam amacınızdır. Altıgenin mükemmelliği, altı günün yaratılışı temsil eder.",
    quote: "Sen bir bahçesin, başkalarını besleyen, büyüten. Kendini unutma, çünkü boş bir sürahi su veremez. Sevgi senin dilin, şifa senin görevin.",
    strengths: ["Şefkat", "Sorumluluk", "Estetik", "Sadakat", "İyilik", "Şifa", "Koruyuculuk", "Duyarlılık"],
    weaknesses: ["Fazla fedakarlık", "Kontrolcülük", "Endişe", "Kusur arama", "Kendini feda", "Aşırı korumacılık"],
    career: ["Doktor", "Öğretmen", "Terapist", "İç Mimar", "Aşçı", "Sosyal Çalışmacı", "Hemşire", "Danışman", "Sanatçı", "Ebeveyn"],
    love: "Aile kurmak ve bakmak sizin için hayati önem taşır. Romantik ve sadık bir partnersiniz. Ancak kendinizi tamamen feda etmeyin. Partnerinizin ihtiyaçlarını anlama yeteneğiniz güçlüdür.",
    loveMatch: "2, 3, 6, 9",
    loveChallenge: "1, 5, 7",
    hiddenGift: "Sevgiyle iyileştirme gücü - Dokunuşunuzla şifa verme",
    deepAnalysis: [
      { title: "KARMA", content: "6 sayısı şefkat, sorumluluk ve hizmetin kodudur. Geçmiş yaşamlarınızda aşırı sorumluluk almış, kendinizi feda etmiş veya aile bağlarından kaçmış olabilirsiniz. Bu hayatta öğrenmeniz gereken, başkalarına yardım ederken kendi sınırlarınızı korumak, şefkatli olmak ama kendinizi kaybetmemektir. Dengeli bir şekilde hizmet etmeyi öğrenmelisiniz." },
      { title: "PARA ENERJİSİ", content: "Para sizin için güvenliğin ve aile refahının sembolüdür. Aile işleri, emlak veya bakım sektöründen kazanç sağlayabilirsiniz. Ancak başkalarının maddi sorunlarını kendi sorununuz yapma eğiliminiz vardır. Finansal sınırlar koymayı öğrenin. Birikim yapmak aile geleceğiniz için önemlidir." },
      { title: "SAĞLIK", content: "Boğaz, tiroid, göğüs ve üreme organlarınız hassas bölgelerdir. Stres ve duygusal bastırma sizi fiziksel olarak etkiler. Şifa ve alternatif tıp yöntemleri sizin için özellikle etkilidir. Sanatsal ifadeler ve yaratıcı aktiviteler sağlığınız için iyileştiricidir. Kendinizi ihmal etme eğiliminiz vardır, kendinize de zaman ayırın." },
      { title: "RUHSAL GÖREV", content: "Bu hayattaki ana göreviniz koşulsuz sevgiyi öğrenmek, şefkatle hizmet etmek ve güzelliği yaratmaktır. Ancak kurtarıcı kompleksine düşmeyin, başkalarının derslerini onların yerine öğrenmeye çalışmayın. Gerçek şefkat, başkalarının kendi güçlerini keşfetmelerine izin vermektir." },
      { title: "GEÇMİŞ YAŞAM", content: "Geçmiş yaşamlarınızda muhtemelen bir şifacı, ebeveyn veya bakıcıydınız. Başkalarına baktınız, şifa verdiniz, güzellik yarattınız. Bu hayatta öğrenmeniz gereken, kendinizi feda etmeden hizmet etmek ve sınırlarınızı korumaktır. Aşırı sorumluluk alma eğiliminizi dengelemelisiniz." },
      { title: "GİZİL YETENEK", content: "Şifa ve bakım yeteneğiniz olağanüstüdür. İnsanların fiziksel, duygusal ve ruhsal ihtiyaçlarını hissetme kapasiteniz vardır. Estetik duyunuz güçlüdür, güzellik yaratırsınız. Danışmanlık, terapi, hemşirelik veya sanatsal alanlarda doğal bir yeteneğiniz var. İnsanları iyileştirme ve destekleme kapasiteniz eşsizdir." },
      { title: "2026 UYARISI", content: "2026 yılı aile ve ilişkilerinizde önemli gelişmeler yaşayacağınız bir yıl olacak. Aile büyümesi, ev değişikliği veya ilişkilerde derinleşme sizi bekliyor. Ancak kendinizi feda etme eğiliminize dikkat edin, sınırlarınızı koruyun. Yılın ikinci yarısında yaratıcı projeler öne çıkacak." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "2 ve 9 sayılarıyla güçlü bir uyumunuz vardır. 2 sayısı size duygusal denge getirirken, 9 sayısı evrensel şefkat katar. 1 ve 5 sayıları size zorlayıcı gelebilir çünkü onların bağımsız yapısı sizi terk edilmiş hissettirebilir, ancak bu sayılardan bağımsızlık öğrenmeniz gerekir. 3 sayısı size yaratıcılık getirir." },
      { title: "SACRED NOTE", content: "Sen bir bahçesin, bereketli ve şefkatli. Dünya senin bakımına, senin şefkatine ihtiyaç duyuyor. Ancak unutma, bir bahçe de kendini sulamalı. Başkalarını beslerken kendi toprağını tüketme. Şefkatin kutsal ama sınırların da kutsal. Sen dünyanın şifacısısın, ama önce kendini şifalandır. Sevgiyle bak, sevgiyle büyüt!" }
    ],
    personalYear: {
      1: { theme: "Yeni Sorumluluklar", advice: "Yeni sorumluluklar üstlenin, aileye odaklanın", avoid: "Kendini feda etmek" },
      2: { theme: "İlişkiler", advice: "İlişkilerinizi derinleştirin, ortaklıklar kurun", avoid: "Aşırı bağımlılık" },
      3: { theme: "Yaratıcılık", advice: "Sanatsal projelere yönelin, güzellik yaratın", avoid: "Aşırı endişe" },
      4: { theme: "Düzen", advice: "Ev düzeninizi sağlamlaştırın", avoid: "Kontrolcülük" },
      5: { theme: "Değişim", advice: "Aile içinde değişikliklere açık olun", avoid: "Direnmek" },
      6: { theme: "Aile", advice: "Aile odaklı olun, sevdiklerinize zaman ayırın", avoid: "Kendini tamamen feda etmek" },
      7: { theme: "İçsel Gelişim", advice: "Manevi pratikler yapın", avoid: "Aşırı dışa dönüklük" },
      8: { theme: "Maddi Güvenlik", advice: "Ailenizin maddi güvenliğini sağlayın", avoid: "İşkoliklik" },
      9: { theme: "Hizmet", advice: "Topluma hizmet edin, bağışta bulunun", avoid: "Tükenmişlik" }
    }
  },
  7: {
    title: "Mistik",
    subtitle: "Bilgelik ve Araştırma",
    symbol: "🔮",
    desc: "Yaşam Yolu 7, evrenin gizem kodudur. Siz bir dedektifsiz, bir filozofsunuz. Görünenin ötesini görmek sizin doğal yeteneğinizdir. Yedi chakra, yedi günah, yedi cennet - siz sırların peşindesiniz.",
    quote: "Sen bir gölgesin, sessiz ve derin. Yalnızlık senin sığınağın, bilgi senin hazinen. Görünenin ötesini görmek senin görevin.",
    strengths: ["Analiz", "Sezgi", "Derinlik", "Bilgelik", "Bağımsızlık", "Araştırma", "Maneviyat", "Strateji"],
    weaknesses: ["İzolasyon", "Aşırı eleştiri", "Soğukluk", "Şüphecilik", "Aşırı analiz", "Sosyal mesafe"],
    career: ["Bilim İnsanı", "Filozof", "Dedektif", "Programcı", "Analist", "Yazar", "Araştırmacı", "Manevi danışman", "Stratejist", "Doktor"],
    love: "Derin, manevi bağlar kurarsınız. Yüzeysel ilişkiler sizi tatmin etmez. Zihinsel uyum hayati önem taşır. Partnerinizin zekasına ve derinliğine değer verirsiniz.",
    loveMatch: "3, 5, 7, 9",
    loveChallenge: "2, 4, 6",
    hiddenGift: "Gizli gerçekleri görme yeteneği - Sezgi ve analiz birliği",
    deepAnalysis: [
      { title: "KARMA", content: "7 sayısı bilgelik, analiz ve manevi arayışın kodudur. Geçmiş yaşamlarınızda yüzeysel yaşamış, manevi derinliği kaçırmış veya bilgiyi kötüye kullanmış olabilirsiniz. Bu hayatta öğrenmeniz gereken, derinlemesine anlamak, sezginizi geliştirmek ve bilgiyi bilgeliğe dönüştürmektir. Analiz etmek değil, hissetmeyi öğrenmelisiniz." },
      { title: "PARA ENERJİSİ", content: "Para sizin için özgürlüğün ve bağımsızlığın sembolüdür. Bilgi ve uzmanlığınızdan para kazanabilirsiniz. Araştırma, analiz veya teknik alanlarda başarılı olursunuz. Ancak maddi konularda aşırı analiz yapma eğiliminiz vardır, bazen sezginize güvenin. Para biriktirmek size güvenlik hissi verir." },
      { title: "SAĞLIK", content: "Sinir sistemi, psikolojik sağlık ve bağışıklık sisteminiz hassas bölgelerdir. Stres ve aşırı düşünce sizi fiziksel olarak etkiler. Yalnızlık ve sessizlik sizin için iyileştiricidir. Meditasyon, yoga ve manevi pratikler sağlığınız için hayati önem taşır. Doğayla bağlantı kurmak sizi dengeler." },
      { title: "RUHSAL GÖREV", content: "Bu hayattaki ana göreviniz gerçeği aramak, derinlemesine anlamak ve manevi bilgeliğe ulaşmaktır. Yüzeysel yaşamak sizi tatmin etmez, derinlik ararsınız. Ancak analiz tuzağına düşmeyin, bazen hissetmek gerekir. Sezginizi geliştirmek ve ona güvenmek sizin ruhsal gelişiminizin anahtarıdır." },
      { title: "GEÇMİŞ YAŞAM", content: "Geçmiş yaşamlarınızda muhtemelen bir bilgin, rahip, bilim insanı veya yalnız bir düşünürdünüz. Bilgi peşinde koştunuz, ancak bazen gerçek bağlantıları kaçırdınız. Bu hayatta öğrenmeniz gereken, bilginin ötesinde bilgeliği aramak ve yalnızlığı paylaşmakla dengelemektir." },
      { title: "GİZİL YETENEK", content: "Analiz ve araştırma yeteneğiniz olağanüstüdür. Karmaşık konuları anlayabilir, detayları görebilir ve derinlemesine inceleyebilirsiniz. Stratejik düşünme kapasiteniz vardır. Bilim, araştırma, analiz veya manevi alanlarda doğal bir yeteneğiniz var. İnsanlara rehberlik etme ve onlara ışık tutma kapasiteniz eşsizdir." },
      { title: "2026 UYARISI", content: "2026 yılı manevi gelişim ve içsel keşif yılı olacak. Yeni bilgiler, manevi deneyimler ve derin anlayışlar sizi bekliyor. Ancak yalnızlığınızı paylaşmayı öğrenin, ilişkilerinizi ihmal etmeyin. Yılın ikinci yarısında önemli bir manevi aydınlanma yaşayabilirsiniz." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "4 ve 9 sayılarıyla güçlü bir uyumunuz vardır. 4 sayısı size yapı getirirken, 9 sayısı evrensel bilgelik katar. 3 ve 5 sayıları size zorlayıcı gelebilir çünkü onların sosyal ve değişken yapısı sizi yorabilir, ancak bu sayılardan esneklik öğrenmeniz gerekir. 2 sayısı size duygusal denge getirir." },
      { title: "SACRED NOTE", content: "Sen bir derin okyanussun, bilgelik dolu ve gizemli. Dünya senin derinliğine, senin anlayışına ihtiyaç duyuyor. Ancak unutma, en derin okyanuslar da kıyıya vurur. Yalnızlığın kutsal ama bağlantı da kutsal. Bilgi arayışında hissetmeyi unutma. Sen dünyanın bilgesisin, ama bilgelik paylaşıldığında büyür. Ara, bul, paylaş!" }
    ],
    personalYear: {
      1: { theme: "Yeni Araştırmalar", advice: "Yeni konuları araştırın, bilgi edinin", avoid: "Yüzeysellik" },
      2: { theme: "İşbirliği", advice: "Bilgili insanlarla bağlantı kurun", avoid: "Tamamen yalnız çalışmak" },
      3: { theme: "İfade", advice: "Bulduklarınızı yazın, paylaşın", avoid: "Saklamak" },
      4: { theme: "Disiplin", advice: "Araştırmalarınızı düzene sokun", avoid: "Dağınıklık" },
      5: { theme: "Keşif", advice: "Yeni yerler keşfedin, deneyimler kazanın", avoid: "Sabit kalmak" },
      6: { theme: "Hizmet", advice: "Bilginizi başkalarına aktarın", avoid: "Bencil olmak" },
      7: { theme: "Maneviyat", advice: "Derin manevi pratikler yapın", avoid: "Yüzeysellik" },
      8: { theme: "Uygulama", advice: "Bilginizi pratiğe dökün", avoid: "Sadece teoride kalmak" },
      9: { theme: "Paylaşma", advice: "Bilgeliğinizi dünya ile paylaşın", avoid: "Saklamak" }
    }
  },
  8: {
    title: "Güç",
    subtitle: "Para ve Karma",
    symbol: "∞",
    desc: "Yaşam Yolu 8, evrenin maddi ve manevi denge şifresini taşır. Bu sayı 'Karma'nın Ustası' olarak bilinir. 8 sayısı sonsuzluk sembolüne benzer ve bu da onun gücünün ve etkisinin sınırsız olduğunu gösterir. Kader sizi hem zirveye taşır hem de derin vadilere sürükler - ama her düşüş bir kalkış içindir.",
    quote: "Sen hem yaratıcısın hem yokedici, hem zengin hem fakir. Deneyimlemen gereken her şey denge üzerinedir. Ne yukarı çıkış ne de aşağı iniş kalıcıdır - sürekli olan tek şey değişimin kendisidir.",
    strengths: ["Liderlik", "Organizasyon", "Pragmatizm", "Vizyon", "Dayanıklılık", "İş zekası", "Strateji", "Kararlılık"],
    weaknesses: ["İşkoliklik", "Kontrol hastalığı", "Materyalizm", "Duygusal mesafe", "İktidar hırsı", "Açgözlülük"],
    career: ["CEO", "Yatırımcı", "Bankacı", "Girişimci", "Hukukçu", "Emlakçı", "Politikacı", "Finans uzmanı", "İş adamı", "Yönetici"],
    love: "İlişkilerde güç dengesi kritiktir. Eşitlik ve saygı temelinde kurulan bağlar sizi besler. Kontrol etmek yerine güç paylaşımı yapmayı öğrenmelisiniz. Partnerinizin bağımsızlığına saygı duymalısınız.",
    loveMatch: "2, 4, 6, 8",
    loveChallenge: "1, 3, 5",
    hiddenGift: "Zorluklar karşısında yeniden doğuş yeteneği - Her düşüşünüz bir sonraki yükselişiniz için hazırlıktır",
    deepAnalysis: [
      { title: "KARMA", content: "8 sayısı karmanın en yoğun yaşandığı sayıdır. Geçmiş yaşamlarınızda gücü kötüye kullanmış veya maddi konularda dengesizlik yaşamış olabilirsiniz. Bu hayatta para ve güç size hem test hem öğretmendir. Ne kadar çok kazanırsanız kazanın, o kadar çok sorumluluk üstlenmelisiniz. Başkalarının kaderiyle oynamak size ikiye katlanmış döner." },
      { title: "PARA ENERJİSİ", content: "Para sizin için bir araçtır, amaç değil. Ancak paradan kaçmak da dengeyi bozar. 8'ler hem kazanmayı hem kaybetmeyi deneyimlemelidir. Büyük servetler biriktirebilir, ancak bunu toplum için kullanmak zorundasınız. Yatırım yapın, büyütün, ancak asla açgözlü olmayın. Para sizin enerjinizin fiziksel tezahürüdür." },
      { title: "SAĞLIK", content: "Stresle ilgili hastalıklar, özellikle sindirim sistemi ve karaciğer hassas bölgenizdir. İşkoliklik sizi tüketebilir. Düzenli egzersiz şart, ancak aşırıya kaçmayın. Doğayla bağlantı kurmak size iyi gelir. Unutmayın, bedeniniz bir tapınaktır, ona iyi bakmak da bir görevdir." },
      { title: "RUHSAL GÖREV", content: "Maddi ve manevi dünyalar arasında köprü kurmak. Paranın kölesi olmamak, onun efendisi olmak. Gücü kullanarak başkalarına hizmet etmek. Başarı sizin için bir basamak olmalı, zirve değil. Her kazancınızda bir pay ayırın, bu sizi karmik borçlardan korur." },
      { title: "GEÇMİŞ YAŞAM", content: "Muhtemelen zengin bir tüccar, bankacı veya kraliyet danışmanıydınız. Paranın gücünü deneyimlediniz, ancak bunun bedelini de ödediniz. Bu hayatta aynı dersi farklı bir bilinçle yaşayacaksınız. Geçmişteki hatalarınızı telafi etme şansınız var." },
      { title: "GİZİL YETENEK", content: "Kriz yönetimi yeteneğiniz olağanüstüdür. Başkaları paniklerken siz soğukkanlı kalırsınız. Büyük organizasyonları yönetme kapasiteniz vardır. İnsanları bir amaç etrafında birleştirebilirsiniz. Stratejik düşünme yeteneğiniz rakiplerinizi şaşırtır." },
      { title: "2026 UYARISI", content: "2026 sizin için önemli bir dönüm noktası. 2026 (2+0+2+6=10=1) yeni başlangıçlar getiriyor. Ancak aceleci olmayın, temelleri sağlam atın. Bu yıl alacağınız kararlar önümüzdeki 8 yılı etkileyecek. Finansal konularda dikkatli olun, büyük yatırımlar için uygun zaman." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "4 ve 6 ile güçlü uyumunuz var - onlar sizi sabitler, siz onları harekete geçirirsiniz. 2 size diplomasiyi öğretir. 1 ve 5 size zorlayıcı gelebilir, ancak onlardan bağımsızlık ve esneklik öğrenmelisiniz." },
      { title: "SACRED NOTE", content: "Sen evrenin denge çemberisin. Yukarı çıktıkça aşağıyı, aşağı indikçe yukarıyı hatırla. Güç senin elinde ama asıl güç, gücü kullanmamayı bilmektedir. Her servet bir sorumluluktur, her başarı bir testtir. Unutma: Gerçek zenginlik içindedir, dışarıda değil. Maddi dünyada başarılı ol ama manevi dünyada köle olma. İşte o zaman gerçek bir 8 olursun." }
    ],
    personalYear: {
      1: { theme: "Yeni İşler", advice: "Yeni iş fırsatlarına odaklanın, girişimlerde bulunun", avoid: "Aceleci kararlar" },
      2: { theme: "İşbirliği", advice: "Güçlü ortaklıklar kurun, müzakereler yapın", avoid: "Tek başına hareket etmek" },
      3: { theme: "Yaratıcılık", advice: "İşinizde yaratıcı çözümler bulun", avoid: "Aşırı ciddiyet" },
      4: { theme: "Temeller", advice: "Maddi temellerinizi sağlamlaştırın", avoid: "Risk almak" },
      5: { theme: "Değişim", advice: "İş alanınızda değişiklikler yapın", avoid: "Sabit kalmak" },
      6: { theme: "Aile ve İş", advice: "Aile işlerine odaklanın", avoid: "İşkoliklik" },
      7: { theme: "Strateji", advice: "Uzun vadeli stratejiler geliştirin", avoid: "Yüzeysellik" },
      8: { theme: "Başarı", advice: "Finansal hedeflerinize odaklanın, büyüyün", avoid: "Açgözlülük" },
      9: { theme: "Paylaşma", advice: "Kazançlarınızı paylaşın, hayır işleri yapın", avoid: "Bencil olmak" }
    }
  },
  9: {
    title: "İnsanlık",
    subtitle: "Hizmet ve Tamamlanma",
    symbol: "🌍",
    desc: "Yaşam Yolu 9, evrenin şefkat ve evrensellik kodudur. Siz bir dünya vatandaşısınız. İnsanlığa hizmet sizin yaşam amacınızdır. Dokuz gezegen, dokuz yaşam - siz tamamlanmanın ta kendisisiniz.",
    quote: "Sen bir okyanussun, tüm nehirleri kucaklayan. Bireysellik seni daraltır, evrensellik seni özgürleştirir. Sevgi senin doğan güneşin.",
    strengths: ["Merhamet", "Evrensellik", "Sanat", "Tolerans", "Vizyon", "Şefkat", "Felsefi derinlik", "İdealizm"],
    weaknesses: ["Aşırı duygusallık", "Sınır tanımama", "Bitmeyen sonlar", "Yalnızlık", "Dünyevi zorluklar", "Kendini feda"],
    career: ["Sanatçı", "Filantrop", "Doktor", "Öğretmen", "Psikolog", "Aktivist", "Yazar", "İnsani yardım", "Sosyal çalışmacı", "Müzisyen"],
    love: "Evrensel sevgi dolu bir kalbiniz vardır. Ancak kendinizi tamamen tüketmeyin. Dengeli bir ilişki arayın. Partnerinizin idealizminizi paylaşması önemlidir.",
    loveMatch: "3, 6, 9",
    loveChallenge: "4, 8",
    hiddenGift: "Evrensel sevgiyle iyileştirme - Kitleleri etkileme yeteneği",
    deepAnalysis: [
      { title: "KARMA", content: "Geçmişte bireysel arzularınızı aşamamış olabilirsiniz. Bu hayatta bencilliği terk edip evrensel sevgiye ulaşmalısınız." },
      { title: "PARA ENERJİSİ", content: "Para sizin için araçtır, biriktirilecek şey değil. Gelir elde edip dağıtma döngüsü sizin için doğaldır." },
      { title: "SAĞLIK", content: "Bağışıklık sistemi ve kan dolaşımı hassas bölgenizdir. Duygusal tükenmişlik riski yüksektir." },
      { title: "RUHSAL GÖREV", content: "İnsanlığa hizmet etmek. Evrensel sevgiyi yaymak. Bireysel ego'yu aşmak." },
      { title: "GEÇMİŞ YAŞAM", content: "Muhtemelen bir sanatçı, filozof veya insani yardım çalışanıydınız. Dünya acısını derinden hissediyorsunuz." },
      { title: "GİZİL YETENEK", content: "Kitleleri etkileme ve harekete geçirme yeteneğiniz vardır. Sanatınızla dünyayı değiştirebilirsiniz." },
      { title: "2026 UYARISI", content: "Hizmet yılı. Başkalarına yardım etmek için harika bir zaman. Ancak kendinizi korumayı unutmayın." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "3 ve 6 ile güçlü uyum. 4 ve 8 size pratiklik katabilir." },
      { title: "SACRED NOTE", content: "Sen evrenin kalbisini. Tüm insanlar senin kardeşin. Unutma ki kendini unutmak da bir ego tuzakdır. Hizmet ederken kendini de koru." }
    ],
    personalYear: {
      1: { theme: "Yeni Başlangıçlar", advice: "Yeni hizmet projelerine başlayın", avoid: "Eskiye tutunmak" },
      2: { theme: "İşbirliği", advice: "Başkalarıyla birlikte çalışın", avoid: "Yalnız hareket etmek" },
      3: { theme: "Yaratıcılık", advice: "Sanatsal projelere yönelin", avoid: "Duygusal dalgalanmalar" },
      4: { theme: "Düzen", advice: "Hizmet faaliyetlerinizi düzene sokun", avoid: "Dağınıklık" },
      5: { theme: "Değişim", advice: "Yeni yerlerde hizmet edin", avoid: "Sabit kalmak" },
      6: { theme: "Aile", advice: "Aileye ve topluma hizmet edin", avoid: "Kendini feda etmek" },
      7: { theme: "Maneviyat", advice: "Manevi gelişiminize odaklanın", avoid: "Yüzeysellik" },
      8: { theme: "Kaynaklar", advice: "Hizmet için kaynak yaratın", avoid: "Para konusunda gevşeklik" },
      9: { theme: "Tamamlama", advice: "Eski döngüleri kapatın, yenisine hazırlanın", avoid: "Yeni başlangıçlar" }
    }
  },
  // MASTER NUMBERS - These are NOT reduced to single digits
  11: {
    title: "Sezgi Ustası",
    subtitle: "Aydınlanma ve Vizyon",
    symbol: "✨",
    desc: "Yaşam Yolu 11, USTA SAYIDIR ve ASLA indirgenmez! Siz bir ışık kulesisiniz, yüksek frekanslı bilgilerin kanalısınız. Sezgileriniz sıradan değildir, doğrudan evrenle bağlantılıdır. 11, 1'in potansiyelinin iki katıdır - hem liderlik hem de sezgi bir arada.",
    quote: "Sen bir kanalsın, yüksek bilgeliğin taşıyıcısısı. Normal olmak senin için bir cezadır, farklı olmak ise görevin. Işık olmak zorundasın.",
    strengths: ["Sezgi", "İlham", "Diplomasi", "Spiritüellik", "Yaratıcılık", "Vizyon", "Hassasiyet", "Aydınlanma"],
    weaknesses: ["Anksiyete", "Aşırı duyarlılık", "Gerçeklikten kaçış", "Karmaşa", "Nörotiklik", "Yalnızlık hissi"],
    career: ["Spiritüel Danışman", "Sanatçı", "Psikik", "Diplomat", "Yazar", "İlahiyatçı", "Müzisyen", "Terapist", "Vizyoner", "Lider"],
    love: "Derin, manevi bağlar kurarsınız. Sıradan ilişkiler sizi tatmin etmez. Partneriniz ruhsal yolculuğunuza eşlik etmelidir. Sezgisel olarak partnerinizi anlarsınız.",
    loveMatch: "2, 6, 8, 11",
    loveChallenge: "1, 5, 7",
    hiddenGift: "Kehanet yeteneği ve ruhsal rehberlik - İlham perisi dokunuşu",
    deepAnalysis: [
      { title: "KARMA", content: "11 sayısı sezgi, aydınlanma ve manevi bilincin kodudur. Geçmiş yaşamlarınızda manevi potansiyelinizi tam olarak kullanamamış, sezginizi görmezden gelmiş veya korkuyla yaşamış olabilirsiniz. Bu hayatta öğrenmeniz gereken, sezginizi güvenmek, manevi yeteneklerinizi geliştirmek ve başkalarına ışık olmaktır. Ancak aşırı duyarlılık ve anksiyeteden kaçınmalısınız." },
      { title: "PARA ENERJİSİ", content: "Para sizin için manevi görevinizi yerine getirmenin aracıdır. Sezginizi ve manevi yeteneklerinizi kullanarak kazanç sağlayabilirsiniz. Danışmanlık, rehberlik, sanat veya spiritüel hizmetlerden gelir elde edebilirsiniz. Ancak maddi konularda aşırı endişelenme eğiliminiz vardır, güvenin." },
      { title: "SAĞLIK", content: "Sinir sistemi, psikolojik sağlık ve duygusal denge hassas bölgelerdir. Aşırı duyarlılık ve empati yorgunluğu sizi etkiler. Düzenli meditasyon, manevi pratikler ve doğayla bağlantı sağlığınız için hayati önem taşır. Yalnızlık ve sessizlik sizi dengeler." },
      { title: "RUHSAL GÖREV", content: "Bu hayattaki ana göreviniz manevi aydınlanmaya ulaşmak, sezginizi geliştirmek ve başkalarına rehberlik etmektir. İlham periniz güçlüdür, onu dinleyin. Ancak gerçeklikten kaçmayın, ayaklarınız yere bassın. Hem manevi hem maddi dünyada dengeli yaşamayı öğrenmelisiniz." },
      { title: "GEÇMİŞ YAŞAM", content: "Geçmiş yaşamlarınızda muhtemelen bir mistik, peygamber, sanatçı veya manevi öğretmendiniz. Yüksek bilgiye eriştiniz ancak bazen korkuyla yaşadınız veya potansiyelinizi tam olarak kullanamadınız. Bu hayatta ışığınızı tam olarak parlatmayı ve korkularınızı aşmayı öğrenmeniz gerekiyor." },
      { title: "GİZİL YETENEK", content: "Sezgi ve ilham yeteneğiniz olağanüstüdür. Geleceği hissetme, insanların düşüncelerini okuma ve yüksek bilgiye erişme kapasiteniz vardır. Sanatsal ifade ve yaratıcılık gücünüz yüksektir. Rehberlik, danışmanlık, sanat veya spiritüel alanlarda doğal bir yeteneğiniz var." },
      { title: "2026 UYARISI", content: "2026 yılı manevi gelişim ve sezgisel yeteneklerinizin zirve yapacağı bir yıl olacak. Önemli manevi deneyimler, ilhamlar ve rehberlikler alacaksınız. Ancak gerçeklikten kaçmayın, ayaklarınızı yere basın. Yılın ikinci yarısında önemli bir manevi dönüşüm yaşayabilirsiniz." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "2 ve 7 sayılarıyla güçlü bir uyumunuz vardır. 2 sayısı size duygusal denge getirirken, 7 sayısı manevi derinlik katar. 4 ve 8 sayıları size zorlayıcı gelebilir çünkü onların yapılandırılmış yapısı sizi kısıtlayabilir, ancak bu sayılardan disiplin öğrenmeniz gerekir." },
      { title: "SACRED NOTE", content: "Sen bir meşalesin, aydınlık ve ilham verici. Dünya senin ışığına, senin sezgisine ihtiyaç duyuyor. Ancak unutma, meşale de yanmak zorunda. Aşırı duyarlılık seni tüketmesin, sınırlarını koru. İlham al ama gerçeklikten kaçma. Sen dünyanın ışığısın, ama önce kendi ışığını koru. Parla, aydınlat, ilham ver!" }
    ],
    personalYear: {
      1: { theme: "Yeni Vizyonlar", advice: "Yeni ilhamlar alın, vizyonlar geliştirin", avoid: "Küçük düşünmek" },
      2: { theme: "Sezgi", advice: "Sezgilerinize güvenin, meditasyon yapın", avoid: "Mantığı dinlemek" },
      3: { theme: "İfade", advice: "İlhamlarınızı paylaşın, yazın, konuşun", avoid: "Saklamak" },
      4: { theme: "Temeller", advice: "Manevi pratiklerinizi düzene sokun", avoid: "Dağınıklık" },
      5: { theme: "Değişim", advice: "Yeni manevi deneyimler yaşayın", avoid: "Sabit kalmak" },
      6: { theme: "Hizmet", advice: "Başkalarına şifa ve rehberlik verin", avoid: "Kendini feda etmek" },
      7: { theme: "Aydınlanma", advice: "Derin manevi keşifler yapın", avoid: "Yüzeysellik" },
      8: { theme: "Güç", advice: "Spiritüel gücünüzü kullanın", avoid: "Gücü kötüye kullanmak" },
      9: { theme: "Tamamlama", advice: "Eski döngüleri kapatın", avoid: "Yeni başlangıçlar" }
    }
  },
  22: {
    title: "Usta İnşaatçı",
    subtitle: "Pratik Mucizeler",
    symbol: "🏗️",
    desc: "Yaşam Yolu 22, USTA SAYILARIN EN GÜÇLÜSÜDÜR ve ASLA indirgenmez! Siz hem gökyüzünü görür hem yeryüzünde inşa edersiniz. Hayalleri gerçeğe dönüştürme gücüne sahipsiniz. 22, 11'in pratik tezahürüdür - vizyonu somutlaştıran güç.",
    quote: "Sen bir mimarsın, hem görsel hem inşacı. Düşlerinizi somutlaştırmak sizin süper gücünüzdür. Dünyayı değiştirme potansiyeliniz var.",
    strengths: ["Pratik vizyon", "Organizasyon", "Disiplin", "Liderlik", "Dayanıklılık", "Strateji", "Büyük düşünme", "Gerçekleştirme"],
    weaknesses: ["Aşırı sorumluluk", "Kontrolcülük", "İşkoliklik", "Mükemmeliyetçilik", "Baskı altında çökmek", "Yüksek beklentiler"],
    career: ["Uluslararası Lider", "Büyük Proje Yöneticisi", "Filantrop", "Mimar", "CEO", "Politikacı", "Girişimci", "Şehir plancısı", "Mühendis", "Vizyoner"],
    love: "Büyük vizyonunuzu paylaşan bir partner ararsınız. Ancak iş-aşk dengesini kurmak zor olabilir. Partnerinizin hedeflerinizi anlaması ve desteklemesi gerekir.",
    loveMatch: "4, 6, 8, 22",
    loveChallenge: "3, 5, 9",
    hiddenGift: "Dünyayı değiştirme potansiyeli - Büyük ölçekli projeleri hayata geçirme",
    deepAnalysis: [
      { title: "KARMA", content: "22 sayısı usta inşaatçı, vizyon ve somut başarının kodudur. Geçmiş yaşamlarınızda büyük vizyonlarınızı gerçekleştirememiş, pratik engellerle karşılaşmış veya gücünüzü tam olarak kullanamamış olabilirsiniz. Bu hayatta öğrenmeniz gereken, hayalleri gerçeğe dönüştürmek, büyük ölçekli projeler inşa etmek ve dünyaya somut katkılar sağlamaktır." },
      { title: "PARA ENERJİSİ", content: "Para sizin için büyük projelerinizi hayata geçirmenin aracıdır. Gayrimenkul, inşaat, büyük ölçekli işler veya organizasyonlardan büyük kazançlar elde edebilirsiniz. Stratejik düşünme ve uzun vadeli planlama kapasiteniz sayesinde maddi başarıya ulaşırsınız. Ancak açgözlülükten kaçının." },
      { title: "SAĞLIK", content: "Omurga, sinir sistemi ve genel fiziksel dayanıklılık hassas bölgelerdir. Büyük projelerin stresi sizi etkiler. Düzenli egzersiz ve fiziksel aktivite sağlığınız için hayati önem taşır. İşkoliklik nedeniyle kendinizi ihmal etme eğiliminiz vardır, denge kurmaya çalışın." },
      { title: "RUHSAL GÖREV", content: "Bu hayattaki ana göreviniz büyük vizyonları somutlaştırmak, dünyaya somut miraslar bırakmak ve başkalarına örnek olmaktır. Usta İnşaatçı enerjinizle hem manevi hem maddi dünyada köprü kurarsınız. Ancak mükemmeliyetçilik tuzağına düşmeyin, ilerleme mükemmellikten önemlidir." },
      { title: "GEÇMİŞ YAŞAM", content: "Geçmiş yaşamlarınızda muhtemelen bir mimar, mühendis, imparator veya büyük bir liderdiniz. Büyük projeler inşa ettiniz ancak bazen vizyonunuzu tam olarak gerçekleştiremediniz. Bu hayatta öğrenmeniz gereken, hayallerinizi gerçeğe dönüştürmek ve somut sonuçlar almaktır." },
      { title: "GİZİL YETENEK", content: "Vizyon ve uygulama yeteneğiniz olağanüstüdür. Büyük projeleri hayata geçirme, insanları bir araya getirme ve somut sonuçlar alma kapasiteniz vardır. Stratejik düşünme ve uzun vadeli planlama gücünüz yüksektir. İş dünyası, inşaat, organizasyon veya liderlik alanlarında doğal bir yeteneğiniz var." },
      { title: "2026 UYARISI", content: "2026 yılı büyük projelerinizi hayata geçireceğiniz bir yıl olacak. Önemli fırsatlar, büyük işbirlikleri ve somut başarılar sizi bekliyor. Ancak mükemmeliyetçilik sizi yavaşlatmasın, ilerlemeye odaklanın. Yılın ikinci yarısında önemli bir başarıya ulaşabilirsiniz." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "4 ve 8 sayılarıyla güçlü bir uyumunuz vardır. 4 sayısı size yapı ve disiplin getirirken, 8 sayısı güç ve başarı katar. 2 ve 6 sayıları size duygusal denge ve şefkat getirir. Dengeli bir şekilde hem büyük vizyonlar kurabilir hem de somut sonuçlar alabilirsiniz." },
      { title: "SACRED NOTE", content: "Sen bir köprüsün, göklerle yer arasında. Dünya senin vizyonuna, senin inşa etme gücüne ihtiyaç duyuyor. Ancak unutma, köprü de temele ihtiyaç duyar. Büyük hayaller kur ama somut adımlar at. Mükemmellik arayışı seni durdurmasın, ilerle. Sen dünyanın usta inşaatçısısın, inşa et, bırak, ilham ver!" }
    ],
    personalYear: {
      1: { theme: "Yeni Vizyonlar", advice: "Büyük projelere başlayın, vizyonlar geliştirin", avoid: "Küçük düşünmek" },
      2: { theme: "İşbirliği", advice: "Güçlü ortaklıklar kurun", avoid: "Tek başına hareket etmek" },
      3: { theme: "Yaratıcılık", advice: "Yaratıcı çözümler bulun", avoid: "Aşırı ciddiyet" },
      4: { theme: "İnşaat", advice: "Projelerinizi hayata geçirin", avoid: "Sadece plan yapmak" },
      5: { theme: "Değişim", advice: "Büyük değişiklikler yapın", avoid: "Sabit kalmak" },
      6: { theme: "Hizmet", advice: "Topluma hizmet edin", avoid: "Kendini feda etmek" },
      7: { theme: "Strateji", advice: "Uzun vadeli planlar yapın", avoid: "Yüzeysellik" },
      8: { theme: "Başarı", advice: "Büyük başarılara odaklanın", avoid: "Aşırı çalışmak" },
      9: { theme: "Miras", advice: "Mirasınızı düşünün, projeleri tamamlayın", avoid: "Yarım bırakmak" }
    }
  },
  33: {
    title: "Usta Şifacı",
    subtitle: "Evrensel Sevgi",
    symbol: "💎",
    desc: "Yaşam Yolu 33, USTA SAYILARIN EN NADİR VE EN YÜKSEK FREKANSLISIDIR ve ASLA indirgenmez! Bu sayı evrensel sevginin ve şifanın ta kendisidir. Siz bir Mesih enerjisisiniz. 33, 11 ve 22'nin birleşimidir - hem sezgi hem pratik hem de koşulsuz sevgi.",
    quote: "Sen koşulsuz sevginin ta kendisisin. Başkalarını iyileştirirken kendini unutma, çünkü sen de bu sevgiye layıksın. Şifa vermek senin görevin.",
    strengths: ["Koşulsuz sevgi", "Şifa", "Öğretme", "Merhamet", "Evrensel bilgelik", "Empati", "Kitleleri etkileme", "Aydınlanma"],
    weaknesses: ["Kendini feda", "Aşırı duygusallık", "Sınır tanımama", "Dünyevi zorluklar", "Tükenmişlik", "Dünyadan kopma"],
    career: ["Spiritüel Lider", "Şifacı", "İnsani Yardım", "Öğretmen", "Sanatçı", "Psikolog", "Doktor", "Terapist", "Aktivist", "Filantrop"],
    love: "Evrensel sevgi dolu bir kalbiniz vardır. Ancak kendinizi tamamen tüketmeyin. Dengeli bir ilişki arayın. Partnerinizin manevi yolculuğunuza eşlik etmesi gerekir.",
    loveMatch: "6, 9, 33",
    loveChallenge: "1, 5, 8",
    hiddenGift: "Dokunuşla iyileştirme ve kitleleri etkileme - Sevgiyle her şeyi değiştirme",
    deepAnalysis: [
      { title: "KARMA", content: "33 sayısı usta şifacı, koşulsuz sevgi ve evrensel hizmetin kodudur. Geçmiş yaşamlarınızda şifa potansiyelinizi tam olarak kullanamamış, kendinizi feda etmiş veya şefkatinizi bastırmış olabilirsiniz. Bu hayatta öğrenmeniz gereken, koşulsuz sevgiyi kucaklamak, başkalarına şifa vermek ve dünyaya hizmet etmektir. Ancak kendinizi tamamen feda etmekten kaçının." },
      { title: "PARA ENERJİSİ", content: "Para sizin için şifa hizmetlerinizi sürdürmenin aracıdır. Danışmanlık, terapi, sanat veya insani hizmetlerden kazanç sağlayabilirsiniz. Ancak para biriktirme konusunda zorlanabilirsiniz çünkü vermeye meyillisiniz. Finansal sınırlar koymayı öğrenin, kendinizi de koruyun." },
      { title: "SAĞLIK", content: "Kalp, bağışıklık sistemi ve duygusal denge hassas bölgelerdir. Başkalarının acılarını üstlenme eğiliminiz sizi fiziksel olarak etkiler. Düzenli manevi pratikler, sanatsal ifadeler ve doğayla bağlantı sağlığınız için hayati önem taşır. Kendinizi ihmal etme eğiliminiz vardır." },
      { title: "RUHSAL GÖREV", content: "Bu hayattaki ana göreviniz koşulsuz sevgiyi kucaklamak, başkalarına şifa vermek ve dünyaya hizmet etmektir. Usta Şifacı enerjinizle insanların kalplerine dokunursunuz. Ancak kurtarıcı kompleksine düşmeyin, başkalarının derslerini onların yerine öğrenmeye çalışmayın." },
      { title: "GEÇMİŞ YAŞAM", content: "Geçmiş yaşamlarınızda muhtemelen bir şifacı, rahibe, sanatçı veya manevi öğretmendiniz. İnsanlara şifa verdiniz, ancak bazen kendinizi feda ettiniz. Bu hayatta öğrenmeniz gereken, hizmet etmeyi sürdürürken kendi sınırlarınızı korumak ve dengeli yaşamaktır." },
      { title: "GİZİL YETENEK", content: "Şifa ve şefkat yeteneğiniz olağanüstüdür. İnsanların fiziksel, duygusal ve ruhsal yaralarını hissetme ve iyileştirme kapasiteniz vardır. Sanatsal ifade ve yaratıcılık gücünüz yüksektir. Terapi, danışmanlık, sanat veya spiritüel alanlarda doğal bir yeteneğiniz var." },
      { title: "2026 UYARISI", content: "2026 yılı şifa yeteneklerinizin zirve yapacağı bir yıl olacak. Önemli şifa deneyimleri, manevi gelişimler ve hizmet fırsatları sizi bekliyor. Ancak kendinizi feda etme eğiliminize dikkat edin, sınırlarınızı koruyun. Yılın ikinci yarısında önemli bir manevi dönüşüm yaşayabilirsiniz." },
      { title: "BAĞLANTI KURDUĞUNUZ SAYILAR", content: "6 ve 9 sayılarıyla güçlü bir uyumunuz vardır. 6 sayısı size aile ve şefkat enerjisi getirirken, 9 sayısı evrensel bilgelik katar. 3 sayısı size yaratıcılık getirir. Dengeli bir şekilde hem şifa verebilir hem de kendinizi koruyabilirsiniz." },
      { title: "SACRED NOTE", content: "Sen bir şifa kaynağısın, sevgi dolu ve şefkatli. Dünya senin şifana, senin koşulsuz sevgine ihtiyaç duyuyor. Ancak unutma, boş sürahi su veremez. Kendini doldurmadan başkalarını dolduramazsın. Şefkatin kutsal ama sınırların da kutsal. Sen dünyanın şifacısısın, ama önce kendini şifalandır. Sevgiyle şifa ver, bilgelikle koru!" }
    ],
    personalYear: {
      1: { theme: "Yeni Hizmet", advice: "Yeni şifa yöntemleri öğrenin, yeni başlangıçlar yapın", avoid: "Küçük düşünmek" },
      2: { theme: "İşbirliği", advice: "Diğer şifacılarla birlikte çalışın", avoid: "Yalnız hareket etmek" },
      3: { theme: "İfade", advice: "Şifa mesajınızı paylaşın", avoid: "Saklamak" },
      4: { theme: "Temeller", advice: "Şifa pratiklerinizi düzene sokun", avoid: "Dağınıklık" },
      5: { theme: "Değişim", advice: "Yeni şifa modaliteleri keşfedin", avoid: "Sabit kalmak" },
      6: { theme: "Hizmet", advice: "Başkalarına şifa verin", avoid: "Kendini feda etmek" },
      7: { theme: "Maneviyat", advice: "Derin manevi gelişim yapın", avoid: "Yüzeysellik" },
      8: { theme: "Güç", advice: "Şifa gücünüzü kullanın", avoid: "Gücü kötüye kullanmak" },
      9: { theme: "Evrensellik", advice: "Evrensel sevgiyi yayın", avoid: "Sınırlamak" }
    }
  }
};

// Helper function to calculate sum of digits
function sumDigits(num: number): number {
  return num.toString().split('').reduce((acc: number, digit: string) => acc + parseInt(digit), 0);
}

// Helper function to calculate Life Path Number
// Master numbers 11, 22, 33 are NOT reduced
export function calculateLifePath(day: number, month: number, year: number): number {
  // Sum all digits separately
  const daySum = sumDigits(day);
  const monthSum = sumDigits(month);
  const yearSum = sumDigits(year);
  
  let totalSum = daySum + monthSum + yearSum;
  
  // Check for master numbers at each step
  // First check if totalSum is a master number
  if (totalSum === 11 || totalSum === 22 || totalSum === 33) {
    return totalSum;
  }
  
  // Reduce to single digit
  while (totalSum > 9) {
    totalSum = sumDigits(totalSum);
    // Check again for master numbers during reduction
    if (totalSum === 11 || totalSum === 22 || totalSum === 33) {
      return totalSum;
    }
  }
  
  return totalSum;
}

// Alternative calculation method (Pythagorean)
export function calculateLifePathPythagorean(day: number, month: number, year: number): number {
  // Add all numbers together
  let sum = day + month + year;
  
  // Check for master numbers
  if (sum === 11 || sum === 22 || sum === 33) {
    return sum;
  }
  
  // Reduce to single digit
  while (sum > 9) {
    sum = sumDigits(sum);
    if (sum === 11 || sum === 22 || sum === 33) {
      return sum;
    }
  }
  
  return sum;
}

// Calculate Personal Year Number
// Based on last birthday - NOT current calendar year
export function calculatePersonalYear(birthDay: number, birthMonth: number, currentDate: Date = new Date()): number {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  
  // Determine which year to use based on birthday
  // If current date is before birthday this year, use previous year
  let yearForCalculation: number;
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    yearForCalculation = currentYear - 1;
  } else {
    yearForCalculation = currentYear;
  }
  
  // Calculate: day + month + year
  let sum = birthDay + birthMonth + yearForCalculation;
  
  // Check for master numbers (11, 22, 33 are NOT reduced in Personal Year)
  if (sum === 11 || sum === 22 || sum === 33) {
    return sum;
  }
  
  // Reduce to single digit
  while (sum > 9) {
    sum = sumDigits(sum);
    if (sum === 11 || sum === 22 || sum === 33) {
      return sum;
    }
  }
  
  return sum;
}

// Get personal year theme
export function getPersonalYearTheme(personalYear: number): string {
  const themes: { [key: number]: string } = {
    1: "Yeni Başlangıçlar",
    2: "İşbirliği ve Sabır",
    3: "Yaratıcılık ve Sosyallik",
    4: "Çalışma ve Düzen",
    5: "Değişim ve Özgürlük",
    6: "Sorumluluk ve Aile",
    7: "İçsel Yolculuk",
    8: "Kariyer ve Para",
    9: "Tamamlanma ve Bırakma",
    11: "Sezgi ve Aydınlanma",
    22: "Büyük Projeler",
    33: "Şifa ve Hizmet"
  };
  return themes[personalYear] || "Bilinmeyen";
}
