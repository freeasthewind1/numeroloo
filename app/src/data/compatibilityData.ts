// Relationship Compatibility Data - All Life Path Number Combinations
// Each compatibility analysis is 50+ characters

export interface CompatibilityDataType {
  [key: string]: {
    compatibility: number; // 1-100
    title: string;
    desc: string;
    strengths: string;
    challenges: string;
    advice: string;
  };
}

// Generate all combinations
function generateCompatibilityData(): CompatibilityDataType {
  const data: CompatibilityDataType = {};
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];
  
  // Compatibility descriptions for each pair
  const descriptions: { [key: string]: { title: string; desc: string; strengths: string; challenges: string; advice: string; score: number } } = {
    // 1 with others
    "1-1": {
      title: "Güçlü Liderlik İttifakı",
      desc: "İki lider bir araya geldiğinde muhteşem bir güç oluşur. Her ikiniz de bağımsız, kararlı ve vizyonersiniz. Bu ilişki iki güçlü iradenin dansıdır.",
      strengths: "Her ikiniz de hedef odaklısınız ve birbirinizi motive edebilirsiniz. Ortak projelerde mükemmel bir ekip olursunuz. İkinizin de liderlik enerjisi yüksektir.",
      challenges: "İki lider arasında güç mücadelesi yaşanabilir. Her ikiniz de hakimiyet kurmak isteyebilirsiniz. Bencillik ve rekabet ilişkiyi zorlayabilir.",
      advice: "Görev dağılımı yapın ve her ikinizin de liderlik edeceği alanlar belirleyin. Rekabet yerine işbirliğine odaklanın. Birbirinizin bağımsızlığına saygı gösterin.",
      score: 75
    },
    "1-2": {
      title: "Lider ve Diplomat Uyumu",
      desc: "1'in liderlik enerjisi ile 2'nin diplomatik hassasiyeti mükemmel bir denge oluşturur. Biri öncülük eder, diğeri destekler ve dengeyi sağlar.",
      strengths: "1, 2'nin diplomatik yeteneklerinden faydalanırken 2 de 1'in kararlılığından güç alır. Birbirinizin eksik yönlerini tamamlarsınız. İşbirliği mükemmeldir.",
      challenges: "1'in baskınlığı 2'yi ezebilir. 2'nin kararsızlığı 1'i sabırsızlandırabilir. Duygusal ihtiyaçlar dengesizliği yaşanabilir.",
      advice: "1, 2'nin duygusal ihtiyaçlarına dikkat etmeli ve onu ezmemelidir. 2 de kendi sınırlarını korumayı öğrenmelidir. İletişim kritik önem taşır.",
      score: 85
    },
    "1-3": {
      title: "Yaratıcı Liderlik Kombinasyonu",
      desc: "1'in vizyonu ile 3'ün yaratıcılığı birleştiğinde sınırları zorlayan projeler ortaya çıkar. Bu ilişki enerji dolu ve ilham vericidir.",
      strengths: "1, 3'ün yaratıcı fikirlerini hayata geçirirken 3 de 1'in liderliğiyle özgürce ifade edebilir. Eğlenceli ve dinamik bir ilişkidir.",
      challenges: "1'in ciddiyeti ile 3'ün hafifliği çatışabilir. 1, 3'ü disiplinsiz bulabilir. 3 de 1'i fazla kontrolcü görebilir.",
      advice: "1, 3'ün yaratıcılığına alan tanımalı ve onu kısıtlamamalıdır. 3 de 1'in disiplinini takdir etmeli ve projelerini tamamlamalıdır.",
      score: 80
    },
    "1-4": {
      title: "Vizyon ve Temel Uyumu",
      desc: "1'in büyük vizyonu 4'ün sağlam temelleriyle buluştuğunda gerçekleştirilebilir projeler ortaya çıkar. Bu ilişki hayalleri gerçeğe dönüştürür.",
      strengths: "1, 4'ün pratikliğiyle vizyonlarını somutlaştırırken 4 de 1'in vizyonuyla rutininden kurtulur. Birbirinizi mükemmel tamamlarsınız.",
      challenges: "1'in risk alma eğilimi 4'ü endişelendirebilir. 4'ün aşırı temkinliliği 1'i sıkabilir. Hız farklılıkları sorun yaratabilir.",
      advice: "1, 4'ün güvenlik ihtiyacını anlamalı ve onu rahatlatmalıdır. 4 de 1'in vizyonuna güvenmeli ve risk almayı öğrenmelidir.",
      score: 82
    },
    "1-5": {
      title: "Macera ve Özgürlük İttifakı",
      desc: "İki bağımsız ruh bir araya geldiğinde sınırları zorlayan bir macera başlar. Bu ilişki özgürlük ve heyecan doludur.",
      strengths: "Her ikiniz de bağımsızlığa değer verirsiniz. Birbirinizin özgürlüğüne saygı duyarsınız. Macera ve yeni deneyimler sizi bir arada tutar.",
      challenges: "İkiniz de bağlanmaktan korkabilirsiniz. Sabit bir ilişki kurmak zor olabilir. Ayrı dünyalarda yaşama riski vardır.",
      advice: "Bağımsızlığınızı korurken birbirinize bağlılık göstermeyi öğrenin. Ortak maceralar planlayın ve birlikte büyüyün.",
      score: 78
    },
    "1-6": {
      title: "Lider ve Şifacı Dengesi",
      desc: "1'in güçlü liderliği 6'nın şefkatli doğasıyla buluştuğunda hem başarı hem de mutluluk mümkün olur. Bu ilişki güç ve sevgiyi birleştirir.",
      strengths: "1, 6'nın desteğiyle daha emin adımlar atarken 6 da 1'in liderliğiyle kendini güvende hisseder. Birbirinize mükemmel destek olursunuz.",
      challenges: "1, 6'nın aile odaklılığını kısıtlayıcı bulabilir. 6 da 1'in işkolikliğini ihmal olarak algılayabilir. Denge kurmak zordur.",
      advice: "1, aileye zaman ayırmalı ve 6'nın duygusal ihtiyaçlarını karşılamalıdır. 6 da 1'in kariyerine destek olmalıdır.",
      score: 83
    },
    "1-7": {
      title: "Eylem ve Düşünce Uyumu",
      desc: "1'in eylem odaklı enerjisi 7'nin derin düşüncesiyle buluştuğunda dengeli bir ilişki ortaya çıkar. Biri yapar, diğeri planlar.",
      strengths: "1, 7'nin stratejik zekasından faydalanırken 7 de 1'in eylem gücüyle hayallerini gerçekleştirir. Zihin ve beden uyumudur.",
      challenges: "1, 7'nin yavaşlığından sabırsızlanabilir. 7 de 1'in aceleciliğini anlayışsız bulabilir. Farklı hızlar sorun yaratabilir.",
      advice: "1, 7'nin düşünme sürecine saygı göstermelidir. 7 de 1'in eylem ihtiyacını anlamalı ve bazen sadece hareket etmelidir.",
      score: 76
    },
    "1-8": {
      title: "Çift Lider Güç Mücadelesi",
      desc: "İki güçlü lider bir araya geldiğinde muhteşem bir güç oluşur ya da büyük bir mücadele. Bu ilişki güç dengesi gerektirir.",
      strengths: "Her ikiniz de başarı odaklısınız ve birlikte muhteşem işler başarabilirsiniz. İş dünyasında mükemmel bir ekip olursunuz.",
      challenges: "Güç mücadelesi kaçınılmazdır. Her ikiniz de kontrol isteğiyle hareket edersiniz. Rekabet ilişkiyi zehirleyebilir.",
      advice: "Güç paylaşımı yapmayı öğrenin. Kimin ne zaman liderlik edeceğini belirleyin. İşbirliği yapın, rekabet etmeyin.",
      score: 72
    },
    "1-9": {
      title: "Bireysellik ve Evrensellik Buluşması",
      desc: "1'in bireysel vizyonu 9'un evrensel bakış açısıyla buluştuğunda geniş kapsamlı projeler ortaya çıkar. Bu ilişki büyük idealler taşır.",
      strengths: "1, 9'un insanlığa hizmet vizyonundan ilham alırken 9 da 1'in liderliğiyle projelerini hayata geçirir. Birlikte dünyayı değiştirebilirsiniz.",
      challenges: "1, 9'un fedakarlığını anlayamayabilir. 9 da 1'in bireyselliğini bencil bulabilir. Farklı öncelikler çatışabilir.",
      advice: "1, 9'un evrensel vizyonunu takdir etmeli ve ona destek olmalıdır. 9 da 1'in bireysel ihtiyaçlarına saygı göstermelidir.",
      score: 79
    },
    // 2 with others
    "2-2": {
      title: "Hassasiyet ve Uyum İttifakı",
      desc: "İki hassas ruh bir araya geldiğinde derin bir duygusal bağ oluşur. Bu ilişki sezgi, empati ve uyum üzerine kuruludur.",
      strengths: "Birbirinizin duygularını kelimeler olmadan anlayabilirsiniz. Derin bir duygusal uyumunuz vardır. Birbirinize mükemmel destek olursunuz.",
      challenges: "İkiniz de kararsız olabilirsiniz. Kimse karar almak istemeyebilir. Aşırı duyarlılık çatışmalara yol açabilir.",
      advice: "Karar alma konusunda dönüşümlü olun. Duygusal sınırlarınızı koruyun. Birbirinizi aşırı korumaya çalışmayın.",
      score: 88
    },
    "2-3": {
      title: "Duygu ve İfade Uyumu",
      desc: "2'nin derin duygusallığı 3'ün yaratıcı ifadesiyle buluştuğunda sanatsal ve romantik bir ilişki ortaya çıkar.",
      strengths: "2, 3'ün yaratıcılığından ilham alırken 3 de 2'nin duygusal derinliğinden beslenir. Romantik ve sanatsal bir birlikteliktir.",
      challenges: "2'nin hassasiyeti 3'ün eleştirilerine açık olabilir. 3'ün dağınıklığı 2'yi endişelendirebilir. Duygusal dengesizlikler yaşanabilir.",
      advice: "3, 2'nin hassasiyetine dikkat etmeli ve eleştirilerini yumuşatmalıdır. 2 de 3'ün yaratıcılığına alan tanımalıdır.",
      score: 84
    },
    "2-4": {
      title: "Duygu ve Güvenlik Dengesi",
      desc: "2'nin duygusal ihtiyaçları 4'ün sağlam güvenliğiyle karşılandığında stabil bir ilişki ortaya çıkar. Bu ilişki güven üzerine kuruludur.",
      strengths: "2, 4'ün güvenilirliğiyle kendini güvende hissederken 4 de 2'nin duygusal desteğiyle yumuşar. Sadakat ve güven temelindedir.",
      challenges: "2'nin duygusal dalgalanmaları 4'ü anlamakta zorlanabilir. 4'ün katılığı 2'yi incitebilir. Farklı duygusal ifade biçimleri sorun yaratabilir.",
      advice: "4, 2'nin duygusal ihtiyaçlarını anlamaya çalışmalı ve ona zaman ayırmalıdır. 2 de 4'ün pratikliğini takdir etmelidir.",
      score: 86
    },
    "2-5": {
      title: "Duygu ve Özgürlük Çatışması",
      desc: "2'nin bağlanma ihtiyacı 5'in özgürlük arayışıyla çatışabilir. Bu ilişki denge ve anlayış gerektirir.",
      strengths: "2, 5'in maceralarından ilham alabilir. 5 de 2'nin duygusal derinliğini keşfedebilir. Birbirinizden çok şey öğrenebilirsiniz.",
      challenges: "2, 5'in bağımsızlığını terk edilmişlik olarak algılayabilir. 5 de 2'nin bağlanma ihtiyacını kısıtlayıcı bulabilir.",
      advice: "5, 2'ye yeterli güvence vermeli ve bağlılığını göstermelidir. 2 de 5'in özgürlüğüne saygı duymalı ve onu kısıtlamamalıdır.",
      score: 70
    },
    "2-6": {
      title: "Şefkat ve Bakım İttifakı",
      desc: "İki şefkatli ruh bir araya geldiğinde sevgi dolu bir yuva oluşur. Bu ilişki karşılıklı bakım ve destek üzerine kuruludur.",
      strengths: "Birbirinize koşulsuz destek olursunuz. Duygusal uyumunuz yüksektir. Aile kurmak için mükemmel bir kombinasyondur.",
      challenges: "İkiniz de kendinizi feda edebilirsiniz. Sınırlarınızı korumakta zorlanabilirsiniz. Aşırı korumacılık sorun yaratabilir.",
      advice: "Kendinizi feda etmeyin. Sınırlarınızı belirleyin. Birbirinizi desteklerken kendi ihtiyaçlarınızı da ihmal etmeyin.",
      score: 92
    },
    "2-7": {
      title: "Sezgi ve Bilgelik Buluşması",
      desc: "2'nin duygusal sezgisi 7'nin derin bilgeliğiyle buluştuğunda manevi bir derinlik oluşur. Bu ilişki ruhsal bir bağ taşır.",
      strengths: "Birbirinizin sessizce anlayabilirsiniz. Derin manevi bir bağınız vardır. İkiz ruhlar gibi hissedebilirsiniz.",
      challenges: "2, 7'nin mesafeliliğini reddedilme olarak algılayabilir. 7 de 2'nin duygusal ihtiyaçlarını fazla bulabilir.",
      advice: "7, 2'ye duygusal güvence vermeli ve ona zaman ayırmalıdır. 2 de 7'nin yalnızlık ihtiyacını anlamalıdır.",
      score: 87
    },
    "2-8": {
      title: "Duygu ve Güç Dengesi",
      desc: "2'nin hassasiyeti 8'in güçlü enerjisiyle buluştuğunda koruyucu bir ilişki ortaya çıkar. Bu ilişki güç dengesi gerektirir.",
      strengths: "8, 2'yi korur ve güvende hissederken 2 de 8'e duygusal destek olur. Birbirinizi mükemmel tamamlarsınız.",
      challenges: "8'in işkolikliği 2'yi ihmal edebilir. 2'nin duygusal ihtiyaçları 8'i bunaltabilir. Güç dengesi bozulabilir.",
      advice: "8, 2'ye zaman ayırmalı ve onu ihmal etmemelidir. 2 de 8'in kariyerine destek olmalı ve onu anlamalıdır.",
      score: 81
    },
    "2-9": {
      title: "Empati ve İnsanilik Uyumu",
      desc: "2'nin derin empati yeteneği 9'un evrensel sevgisiyle buluştuğunda şefkat dolu bir ilişki ortaya çıkar.",
      strengths: "Birbirinizin duygularını derinden anlayabilirsiniz. İnsani konularda ortak değerleriniz vardır. Şefkat dolu bir birlikteliktir.",
      challenges: "İkiniz de aşırı duygusal olabilirsiniz. Dünyanın acılarını birlikte taşımak yorucu olabilir. Sınırlarınızı korumak zordur.",
      advice: "Duygusal sınırlarınızı koruyun. Dünyanın tüm acılarını üstlenmeyin. Birbirinizi besleyin, tüketmeyin.",
      score: 89
    },
    // 3 with others
    "3-3": {
      title: "Yaratıcı İkizler İttifakı",
      desc: "İki yaratıcı ruh bir araya geldiğinde sanatsal bir patlama yaşanır. Bu ilişki eğlence, yaratıcılık ve neşe doludur.",
      strengths: "Birbirinizi yaratıcı olarak ilhamlandırırsınız. Eğlenceli ve neşeli bir ilişkiniz vardır. Sanatsal projelerde harika bir ekip olursunuz.",
      challenges: "İkiniz de disiplinsiz olabilirsiniz. Ciddi konuları erteleme eğiliminiz olabilir. Dağınıklık sorun yaratabilir.",
      advice: "Birbirinizi disipline etmeye çalışın. Projelerinizi tamamlayın. Eğlence ile sorumluluk arasında denge kurun.",
      score: 86
    },
    "3-4": {
      title: "Yaratıcılık ve Disiplin Kombinasyonu",
      desc: "3'ün yaratıcılığı 4'ün disipliniyle buluştuğunda sanatsal eserler ortaya çıkar. Bu ilişki yaratıcılığı somutlaştırır.",
      strengths: "3, 4'ün disipliniyle projelerini tamamlarken 4 de 3'ün yaratıcılığıyla rutininden kurtulur. Mükemmel bir tamamlayıcılıktır.",
      challenges: "3'ün dağınıklığı 4'ü çıldırtabilir. 4'ün katılığı 3'ü sıkabilir. Farklı çalışma tarzları çatışabilir.",
      advice: "4, 3'ün yaratıcılığına alan tanımalıdır. 3 de 4'ün düzenine saygı göstermeli ve sözünü tutmalıdır.",
      score: 79
    },
    "3-5": {
      title: "Eğlence ve Macera İttifakı",
      desc: "İki maceracı ruh bir araya geldiğinde asla sıkılmazsınız. Bu ilişki eğlence, spontanlık ve keşif doludur.",
      strengths: "Birlikte yeni deneyimler keşfedersiniz. Sosyal çevreniz genişler. Eğlenceli ve dinamik bir ilişkiniz vardır.",
      challenges: "İkiniz de bağlanmaktan korkabilirsiniz. Sorumluluklardan kaçma eğiliminiz olabilir. Derinlik eksikliği yaşanabilir.",
      advice: "Eğlencenin yanında derinliğe de önem verin. Birbirinize bağlılık gösterin. Sadece eğlenmekle kalmayın, büyüyün de.",
      score: 83
    },
    "3-6": {
      title: "Sanat ve Şefkat Buluşması",
      desc: "3'ün yaratıcılığı 6'nın şefkatli doğasıyla buluştuğunda sanatsal ve sıcak bir yuva oluşur.",
      strengths: "3, 6'nın desteğiyle özgürce yaratırken 6 da 3'ün sanatını takdir eder. Romantik ve yaratıcı bir birlikteliktir.",
      challenges: "3'ün dağınıklığı 6'yı endişelendirebilir. 6'nın kontrolcülüğü 3'ü kısıtlayabilir. Farklı öncelikler çatışabilir.",
      advice: "6, 3'ün yaratıcılığına alan tanımalıdır. 3 de 6'nın aile odaklılığına saygı göstermeli ve sorumluluk almalıdır.",
      score: 87
    },
    "3-7": {
      title: "İfade ve Derinlik Uyumu",
      desc: "3'ün ifade yeteneği 7'nin derinliğiyle buluştuğunda hem eğlenceli hem manevi bir ilişki ortaya çıkar.",
      strengths: "3, 7'nin bilgeliğinden ilham alırken 7 de 3'ün neşesinden enerji alır. Birbirinizi dengelersiniz.",
      challenges: "3'ün yüzeyselliği 7'yi sıkabilir. 7'nin mesafeliliği 3'ü reddedilmiş hissettirebilir. Farklı sosyal ihtiyaçlar sorun yaratabilir.",
      advice: "3, 7'nin yalnızlık ihtiyacına saygı göstermelidir. 7 de 3'ün sosyal ihtiyaçlarını anlamalıdır.",
      score: 77
    },
    "3-8": {
      title: "Yaratıcılık ve Başarı Kombinasyonu",
      desc: "3'ün yaratıcılığı 8'in başarı odaklılığıyla buluştuğunda yaratıcı projeler ticari başarıya dönüşür.",
      strengths: "3, 8'in stratejisiyle projelerini büyütürken 8 de 3'ün yaratıcılığıyla fark yaratır. İş ortaklığı için mükemmeldir.",
      challenges: "3'ün disiplinsizliği 8'i sabırsızlandırabilir. 8'in işkolikliği 3'ü ihmal edebilir. Farklı öncelikler çatışabilir.",
      advice: "8, 3'ün yaratıcılığına değer vermeli ve onu kısıtlamamalıdır. 3 de 8'in iş odaklılığına saygı göstermelidir.",
      score: 80
    },
    "3-9": {
      title: "Sanat ve İdealizm İttifakı",
      desc: "3'ün sanatsal ifadesi 9'un idealizmiyle buluştuğunda sanat yoluyla dünya değiştirme potansiyeli oluşur.",
      strengths: "Birbirinizi yaratıcı olarak ilhamlandırırsınız. Sanatsal ve insani projelerde harika bir ekip olursunuz.",
      challenges: "İkiniz de pratik olmayabilirsiniz. Maddi konularda sorun yaşayabilirsiniz. Hayallerinizi gerçekleştirmek zor olabilir.",
      advice: "Hayallerinizi gerçekleştirmek için pratik adımlar atın. Maddi konularda bilinçli olun. Birbirinizi motive edin.",
      score: 85
    },
    // 4 with others
    "4-4": {
      title: "Disiplin ve Güven İttifakı",
      desc: "İki disiplinli ruh bir araya geldiğinde sağlam temeller üzerine kurulu bir ilişki ortaya çıkar.",
      strengths: "Birbirinize güvenebilirsiniz. Ortak hedefleriniz için çalışırsınız. Stabil ve güvenilir bir ilişkiniz vardır.",
      challenges: "İkiniz de katı olabilirsiniz. Esneklik eksikliği sorun yaratabilir. Eğlence ve spontanlık azalabilir.",
      advice: "Esnek olmayı öğrenin. Rutininizi kırın. Ara sıra spontane şeyler yapın. Ciddiyetle eğlenceyi dengeler.",
      score: 88
    },
    "4-5": {
      title: "Düzen ve Değişim Çatışması",
      desc: "4'ün düzeni 5'in değişim ihtiyacıyla çatışabilir. Bu ilişki anlayış ve uzlaşma gerektirir.",
      strengths: "4, 5'in esnekliğinden öğrenebilir. 5 de 4'ün disiplininden faydalanabilir. Birbirinizden çok şey öğrenebilirsiniz.",
      challenges: "4, 5'in düzensizliğini tolere etmekte zorlanabilir. 5 de 4'ün katılığını kısıtlayıcı bulabilir.",
      advice: "4, 5'in değişim ihtiyacını anlamalıdır. 5 de 4'ün güvenlik ihtiyacına saygı göstermelidir. Orta yolu bulun.",
      score: 68
    },
    "4-6": {
      title: "Güvenlik ve Aile Uyumu",
      desc: "4'ün güvenlik arayışı 6'nın aile odaklılığıyla buluştuğunda stabil bir yuva oluşur.",
      strengths: "Her ikiniz de güvenlik ve stabilitenin önemini anlarsınız. Aile kurmak için mükemmel bir kombinasyondur.",
      challenges: "Her ikiniz de kontrolcü olabilirsiniz. Aşırı sorumluluk alma eğiliminiz olabilir. Gevşemekte zorlanabilirsiniz.",
      advice: "Kontrolcülüğünüzü bırakın. Birbirinize güvenin. Sorumlulukları paylaşın. Ara sıra eğlenmeyi unutmayın.",
      score: 90
    },
    "4-7": {
      title: "Pratiklik ve Bilgelik İttifakı",
      desc: "4'ün pratikliği 7'nin bilgeliğiyle buluştuğunda hem somut hem manevi bir derinlik oluşur.",
      strengths: "4, 7'nin stratejik düşüncesinden faydalanırken 7 de 4'ün pratikliğiyle hayallerini gerçekleştirir.",
      challenges: "4, 7'nin soyut düşüncesini anlamakta zorlanabilir. 7 de 4'ün maddi odaklılığını sığ bulabilir.",
      advice: "4, 7'nin manevi boyutunu takdir etmelidir. 7 de 4'ün pratikliğinin değerini anlamalıdır.",
      score: 84
    },
    "4-8": {
      title: "Çalışma ve Başarı Kombinasyonu",
      desc: "4'ün çalışkanlığı 8'in başarı odaklılığıyla buluştuğunda güçlü bir iş ortaklığı oluşur.",
      strengths: "Her ikiniz de çalışkansınız ve başarılı olmak istersiniz. İş dünyasında mükemmel bir ekip olursunuz.",
      challenges: "Her ikiniz de işkolik olabilirsiniz. İlişkiniz iş merkezli hale gelebilir. Duygusal bağ zayıflayabilir.",
      advice: "İşi ilişkinizin dışında tutun. Birbirinize zaman ayırın. Duygusal bağınızı güçlendirin.",
      score: 87
    },
    "4-9": {
      title: "Pratiklik ve İdealizm Dengesi",
      desc: "4'ün pratikliği 9'un idealizmiyle buluştuğunda idealist projeler somut adımlarla hayata geçer.",
      strengths: "4, 9'un vizyonunu somutlaştırırken 9 da 4'ün pratikliğiyle dünyayı değiştirir. Birbirinizi tamamlarsınız.",
      challenges: "4, 9'un idealizmini gerçekçi bulmayabilir. 9 da 4'ün maddi odaklılığını bencil bulabilir.",
      advice: "4, 9'un vizyonuna açık olun. 9 da 4'ün pratikliğinin gerekli olduğunu anlamalıdır.",
      score: 78
    },
    // 5 with others
    "5-5": {
      title: "Çift Macera İttifakı",
      desc: "İki maceracı ruh bir araya geldiğinde asla sıkılmazsınız. Bu ilişki özgürlük ve keşif doludur.",
      strengths: "Birbirinizin özgürlüğüne saygı duyarsınız. Birlikte yeni deneyimler keşfedersiniz. Eğlenceli bir ilişkiniz vardır.",
      challenges: "İkiniz de bağlanmaktan korkabilirsiniz. Stabil bir ilişki kurmak zor olabilir. Sorumluluklardan kaçabilirsiniz.",
      advice: "Özgürlüğünüzü korurken bağlılık da gösterin. Birlikte büyümeyi hedefleyin. Sadece eğlenmekle kalmayın.",
      score: 82
    },
    "5-6": {
      title: "Özgürlük ve Sorumluluk Çatışması",
      desc: "5'in özgürlük arayışı 6'nın sorumluluk ihtiyacıyla çatışabilir. Bu ilişki denge gerektirir.",
      strengths: "5, 6'nın bakımıyla kendini evinde hissederken 6 da 5'in maceralarından ilham alabilir.",
      challenges: "5, 6'nın aile odaklılığını kısıtlayıcı bulabilir. 6 da 5'in bağımsızlığını terk edilmişlik olarak algılayabilir.",
      advice: "5, 6'ya yeterli güvence vermelidir. 6 da 5'in özgürlüğüne saygı duymalıdır. Orta yolu bulun.",
      score: 73
    },
    "5-7": {
      title: "Macera ve İçsel Yolculuk Uyumu",
      desc: "5'in dış maceraları 7'nin içsel yolculuğuyla buluştuğanda dengeli bir keşif ortaya çıkar.",
      strengths: "5, 7'nin bilgeliğinden ilham alırken 7 de 5'in maceralarıyla dünyayı keşfeder. Birbirinizi dengelersiniz.",
      challenges: "5, 7'nin yalnızlık ihtiyacını anlayamayabilir. 7 de 5'in sürekli hareketini yorucu bulabilir.",
      advice: "5, 7'nin sessiz zamanlarına saygı göstermelidir. 7 de 5'in keşif ihtiyacını anlamalıdır.",
      score: 79
    },
    "5-8": {
      title: "Özgürlük ve Güç Dengesi",
      desc: "5'in özgürlük arayışı 8'in güç odaklılığıyla buluştuğunda dinamik bir ilişki ortaya çıkar.",
      strengths: "5, 8'in başarısından ilham alırken 8 de 5'in esnekliğiyle yeni perspektifler kazanır.",
      challenges: "5, 8'in kontrolcülüğünü kısıtlayıcı bulabilir. 8 de 5'in bağımsızlığını tehdit olarak görebilir.",
      advice: "8, 5'e özgürlük tanımalıdır. 5 de 8'in liderliğine saygı göstermelidir. Güç mücadelesinden kaçının.",
      score: 76
    },
    "5-9": {
      title: "Macera ve İdealizm İttifakı",
      desc: "5'in maceraları 9'un idealizmiyle buluştuğunda dünyayı değiştiren keşifler ortaya çıkar.",
      strengths: "Birlikte hem eğlenir hem de dünyaya katkıda bulunabilirsiniz. Maceralarınız anlam kazanır.",
      challenges: "İkiniz de pratik olmayabilirsiniz. Maddi konularda sorun yaşayabilirsiniz. Hayallerinizi gerçekleştirmek zor olabilir.",
      advice: "Hayallerinizi gerçekleştirmek için pratik adımlar atın. Maddi konularda bilinçli olun.",
      score: 81
    },
    // 6 with others
    "6-6": {
      title: "Çift Şefkat İttifakı",
      desc: "İki şefkatli ruh bir araya geldiğinde sevgi dolu bir yuva oluşur. Bu ilişki karşılıklı bakım üzerine kuruludur.",
      strengths: "Birbirinize koşulsuz destek olursunuz. Aile kurmak için mükemmel bir kombinasyondur. Derin bir duygusal bağınız vardır.",
      challenges: "İkiniz de kendinizi feda edebilirsiniz. Sınırlarınızı korumakta zorlanabilirsiniz. Aşırı korumacılık sorun yaratabilir.",
      advice: "Kendinizi feda etmeyin. Sınırlarınızı belirleyin. Birbirinizi desteklerken kendi ihtiyaçlarınızı da ihmal etmeyin.",
      score: 91
    },
    "6-7": {
      title: "Şefkat ve Bilgelik Buluşması",
      desc: "6'nın şefkatli doğası 7'nin bilgeliğiyle buluştuğunda manevi bir derinlik oluşur.",
      strengths: "6, 7'ye duygusal destek olurken 7 de 6'ya manevi rehberlik eder. Birbirinizi dengelersiniz.",
      challenges: "6, 7'nin mesafeliliğini reddedilme olarak algılayabilir. 7 de 6'nın duygusal ihtiyaçlarını fazla bulabilir.",
      advice: "7, 6'ya duygusal güvence vermelidir. 6 da 7'nin yalnızlık ihtiyacını anlamalıdır.",
      score: 85
    },
    "6-8": {
      title: "Aile ve Kariyer Dengesi",
      desc: "6'nın aile odaklılığı 8'in kariyer odaklılığıyla buluştuğunda denge gerektiren bir ilişki ortaya çıkar.",
      strengths: "6, 8'in kariyerine destek olurken 8 de 6'ya maddi güvenlik sağlar. Birbirinizi tamamlarsınız.",
      challenges: "8'in işkolikliği 6'yı ihmal edebilir. 6'nın aile talepleri 8'i bunaltabilir. Denge kurmak zordur.",
      advice: "8, aileye zaman ayırmalıdır. 6 da 8'in kariyerine destek olmalıdır. İş-aile dengesini kurun.",
      score: 82
    },
    "6-9": {
      title: "Şefkat ve İnsanilik İttifakı",
      desc: "6'nın şefkatli doğası 9'un evrensel sevgisiyle buluştuğunda insani hizmet odaklı bir ilişki ortaya çıkar.",
      strengths: "Birlikte başkalarına hizmet edebilirsiniz. İnsani konularda ortak değerleriniz vardır. Şefkat dolu bir birlikteliktir.",
      challenges: "İkiniz de kendinizi feda edebilirsiniz. Dünyanın acılarını birlikte taşımak yorucu olabilir.",
      advice: "Kendinizi koruyun. Dünyanın tüm acılarını üstlenmeyin. Birbirinizi besleyin, tüketmeyin.",
      score: 90
    },
    // 7 with others
    "7-7": {
      title: "Çift Bilge İttifakı",
      desc: "İki bilge ruh bir araya geldiğinde derin bir manevi bağ oluşur. Bu ilişki zihinsel ve ruhsal bir birlikteliktir.",
      strengths: "Birbirinizin sessizce anlayabilirsiniz. Derin konuşmalar yaparsınız. Manevi yolculuğunuzu birlikte yaparsınız.",
      challenges: "İkiniz de mesafeli olabilirsiniz. Duygusal yakınlık kurmak zor olabilir. Yalnızlık ihtiyacınız çatışabilir.",
      advice: "Duygusal yakınlık kurmaya çalışın. Birbirinize açılın. Yalnızlığınızı ilişkinizden ayırın.",
      score: 88
    },
    "7-8": {
      title: "Bilgelik ve Güç Kombinasyonu",
      desc: "7'nin bilgeliği 8'in gücüyle buluştuğunda stratejik başarı ortaya çıkar.",
      strengths: "7, 8'e stratejik rehberlik ederken 8 de 7'nin projelerini hayata geçirir. Birbirinizi tamamlarsınız.",
      challenges: "7, 8'in maddi odaklılığını sığ bulabilir. 8 de 7'nin soyut düşüncesini pratik bulmayabilir.",
      advice: "7, 8'in pratikliğinin değerini anlamalıdır. 8 de 7'nin manevi boyutuna açık olmalıdır.",
      score: 81
    },
    "7-9": {
      title: "Bilgelik ve İdealizm İttifakı",
      desc: "7'nin derin bilgeliği 9'un evrensel idealizmiyle buluştuğunda manevi bir devrim ortaya çıkar.",
      strengths: "Birlikte dünyayı değiştirebilirsiniz. Manevi ve insani konularda ortak vizyonunuz vardır.",
      challenges: "İkiniz de pratik olmayabilirsiniz. Maddi konularda sorun yaşayabilirsiniz. Hayallerinizi gerçekleştirmek zor olabilir.",
      advice: "Hayallerinizi gerçekleştirmek için pratik adımlar atın. Maddi konularda bilinçli olun.",
      score: 86
    },
    // 8 with others
    "8-8": {
      title: "Çift Güç İttifakı",
      desc: "İki güçlü ruh bir araya geldiğinde muhteşem bir güç oluşur. Bu ilişki başarı ve güç üzerine kuruludur.",
      strengths: "Birlikte muhteşem işler başarabilirsiniz. İş dünyasında mükemmel bir ekip olursunuz. Birbirinizi motive edersiniz.",
      challenges: "Güç mücadelesi kaçınılmazdır. Her ikiniz de kontrol isteğiyle hareket edersiniz. İş ilişkinizin önüne geçebilir.",
      advice: "Güç paylaşımı yapmayı öğrenin. İşi ilişkinizin dışında tutun. Birbirinize zaman ayırın.",
      score: 79
    },
    "8-9": {
      title: "Güç ve İdealizm Dengesi",
      desc: "8'in gücü 9'un idealizmiyle buluştuğunda güçlü projeler hayata geçer.",
      strengths: "8, 9'un vizyonunu somutlaştırırken 9 da 8'in gücüyle dünyayı değiştirir. Birbirinizi tamamlarsınız.",
      challenges: "8, 9'un idealizmini gerçekçi bulmayabilir. 9 da 8'in maddi odaklılığını bencil bulabilir.",
      advice: "8, 9'un vizyonuna açık olun. 9 da 8'in gücünün gerekli olduğunu anlamalıdır.",
      score: 80
    },
    // 9 with others
    "9-9": {
      title: "Çift İdealist İttifakı",
      desc: "İki idealist ruh bir araya geldiğinde dünyayı değiştirme potansiyeli oluşur. Bu ilişki evrensel sevgi üzerine kuruludur.",
      strengths: "Birlikte büyük idealler peşinde koşabilirsiniz. İnsani konularda ortak değerleriniz vardır. Birbirinizi ilhamlandırırsınız.",
      challenges: "İkiniz de pratik olmayabilirsiniz. Maddi konularda sorun yaşayabilirsiniz. Dünyanın acılarını birlikte taşımak yorucu olabilir.",
      advice: "Hayallerinizi gerçekleştirmek için pratik adımlar atın. Maddi konularda bilinçli olun. Birbirinizi koruyun.",
      score: 87
    }
  };
  
  // Generate all combinations
  numbers.forEach((num1) => {
    numbers.forEach((num2) => {
      const key = `${num1}-${num2}`;
      const reverseKey = `${num2}-${num1}`;
      
      if (descriptions[key]) {
        data[key] = {
          compatibility: descriptions[key].score,
          title: descriptions[key].title,
          desc: descriptions[key].desc,
          strengths: descriptions[key].strengths,
          challenges: descriptions[key].challenges,
          advice: descriptions[key].advice
        };
      } else if (descriptions[reverseKey]) {
        data[key] = {
          compatibility: descriptions[reverseKey].score,
          title: descriptions[reverseKey].title,
          desc: descriptions[reverseKey].desc,
          strengths: descriptions[reverseKey].strengths,
          challenges: descriptions[reverseKey].challenges,
          advice: descriptions[reverseKey].advice
        };
      }
    });
  });
  
  return data;
}

export const compatibilityData = generateCompatibilityData();

// Get compatibility between two life path numbers
export function getCompatibility(num1: number, num2: number) {
  const key = `${num1}-${num2}`;
  return compatibilityData[key] || {
    compatibility: 70,
    title: "Genel Uyum",
    desc: "Bu iki sayı arasında orta düzeyde bir uyum vardır. Birbirinizi anlamaya çalışın.",
    strengths: "Birbirinizden öğreneceğiniz çok şey var.",
    challenges: "Farklılıklarınızı uzlaşma noktası olarak görün.",
    advice: "İletişim ve anlayışla her sorunu çözebilirsiniz."
  };
}
