// Personal Year Data - Detailed analysis for each personal year (30+ characters each)
export interface PersonalYearDataType {
  [key: number]: {
    theme: string;
    desc: string;
    advice: string[];
    avoid: string[];
    months: { [key: number]: string };
  };
}

export const personalYearData: PersonalYearDataType = {
  1: {
    theme: "Yeni Başlangıçlar ve Liderlik",
    desc: "Bu yıl sizin için yeni başlangıçların, bağımsız kararların ve liderlik fırsatlarının yılı olacak. Eski kalıpları kırıp kendi yolunuzu çizme zamanı. Hayatınızda önemli değişiklikler yapmak için ideal bir dönem. Yeni projelere başlamak, girişimlerde bulunmak ve öncü olmak için mükemmel bir yıl.",
    advice: [
      "Yeni projelere cesaretle başlayın, korkularınızı bir kenara bırakın",
      "Liderlik pozisyonlarına talip olun ve yeteneklerinizi gösterin",
      "Bağımsız kararlar alın ve başkalarının onayını beklemeyin",
      "Kendi işinizi kurmayı düşünün, girişimcilik ruhunuzu harekete geçirin",
      "Eski ilişkilerden kurtulun ve sağlıklı sınırlar oluşturun",
      "Fiziksel aktiviteye başlayın ve sağlığınıza öncelik verin",
      "Yeni beceriler öğrenin ve kendinizi geliştirin",
      "Seyahat edin ve yeni yerler keşfedin, ufuklarınızı genişletin"
    ],
    avoid: [
      "Eski alışkanlıklara ve güvenli alanınıza tutunmayın, değişim kaçınılmaz",
      "Başkalarının kararlarını beklemeyin, kendi yolunuzu kendiniz çizin",
      "Bağımlı ilişkilerden kaçının, bağımsızlığınızı koruyun",
      "Ertelemeyin, bu yıl harekete geçme zamanıdır",
      "Negatif insanlardan uzak durun, enerjinizi koruyun",
      "Geçmişte yaşamayın, geleceğe odaklanın",
      "Risk almaktan korkmayın, büyük ödüller büyük risklerle gelir",
      "Kendinizi küçümsemeyin, potansiyelinizin farkında olun"
    ],
    months: {
      1: "Yeni başlangıçlar için güçlü bir ay. Hedeflerinizi belirleyin.",
      2: "İlişkiler ve işbirlikleri öne çıkıyor. Sabırlı olun.",
      3: "Yaratıcılık ve sosyal aktiviteler için harika bir ay.",
      4: "Çalışma ve düzen ayı. Temellerinizi sağlamlaştırın.",
      5: "Değişim ve macera ayı. Yeni deneyimlere açık olun.",
      6: "Aile ve sorumluluk ayı. Sevdiklerinize zaman ayırın.",
      7: "İçsel yolculuk ayı. Meditasyon ve analiz için uygun.",
      8: "Kariyer ve finans ayı. Büyük adımlar atabilirsiniz.",
      9: "Tamamlanma ayı. Eski bağları koparın ve yeni başlangıçlara hazırlanın.",
      10: "Yeni fırsatlar ayı. Gözünüzü dört açın.",
      11: "Sezgi ve ilham ayı. İç sesinizi dinleyin.",
      12: "Değerlendirme ayı. Yılı gözden geçirin ve plan yapın."
    }
  },
  2: {
    theme: "İşbirliği ve İlişkiler",
    desc: "Bu yıl sabır, diplomasi ve işbirliği yılıdır. Yalnız hareket etmek yerine ortaklıklar kurmak, başkalarıyla uyum içinde çalışmak size başarı getirecek. Sezgileriniz güçlü olacak, iç sesinizi dinleyin. İlişkilerinizde derinleşme ve anlayış geliştirme zamanı.",
    advice: [
      "Ortaklıklar ve işbirlikleri kurun, yalnız hareket etmeyin",
      "Sezgilerinize güvenin, mantık kadar kalbinizi de dinleyin",
      "Diplomasi kullanın, çatışmalardan kaçının ve uzlaşmacı olun",
      "Sabırlı olun, her şeyin bir zamanı vardır ve acele etmeyin",
      "İlişkilerinizi güçlendirin, sevdiklerinize zaman ayırın",
      "Meditasyon ve içsel çalışmalara yönelin, ruhsal gelişim yapın",
      "Detaylara dikkat edin, küçük şeyleri gözden kaçırmayın",
      "Destek almaktan çekinmeyin, yardım istemek güçlülük göstergesidir"
    ],
    avoid: [
      "Aceleci kararlar almayın, her şeyin olgunlaşması için zaman tanıyın",
      "Yalnız hareket etmekten kaçının, işbirliği yapın",
      "Çatışmalara girmeyin, diplomasi kullanın ve uzlaşın",
      "Kararsızlığa düşmeyin, sezgilerinize güvenin",
      "Aşırı duyarlı olmayın, her şeyi kişisel algılamayın",
      "Pasif kalmayın, sınırlarınızı koruyun ve sesinizi çıkarın",
      "Bağımlılıklara düşmeyin, bağımsızlığınızı koruyun",
      "İçe kapanmayın, sosyal bağlarınızı güçlendirin"
    ],
    months: {
      1: "Yeni işbirlikleri için uygun ay. Ortaklar arayın.",
      2: "İlişkiler ayı. Sevdiklerinize zaman ayırın.",
      3: "Yaratıcı işbirlikleri için harika bir ay.",
      4: "Düzen ve sistem ayı. İşbirliklerinizi organize edin.",
      5: "Değişim ayı. Yeni ortaklıklar kurabilirsiniz.",
      6: "Aile ayı. Aile ilişkilerinizi güçlendirin.",
      7: "İçsel yolculuk ayı. Sezgilerinizi dinleyin.",
      8: "Güç dengesi ayı. Ortaklıklarda denge kurun.",
      9: "Tamamlanma ayı. Eski ortaklıkları değerlendirin.",
      10: "Yeni başlangıçlar ayı. Yeni işbirlikleri için uygun.",
      11: "Sezgi ayı. İç sesinizi dinleyin.",
      12: "Değerlendirme ayı. Yılı gözden geçirin."
    }
  },
  3: {
    theme: "Yaratıcılık ve Sosyallik",
    desc: "Bu yıl yaratıcılığınızın zirve yaptığı, sosyal çevrenizin genişlediği ve eğlencenin ön planda olduğu bir yıl olacak. Sanatsal projelere yönelin, kendinizi ifade edin ve hayatın tadını çıkarın. İletişim yetenekleriniz güçlü olacak, yeni insanlarla tanışın.",
    advice: [
      "Sanatsal projelere yönelin, yaratıcılığınızı ifade edin",
      "Sosyal çevrenizi genişletin, yeni insanlarla tanışın",
      "Eğlenin ve hayatın tadını çıkarın, ciddiyeti bir kenara bırakın",
      "İletişim yeteneklerinizi kullanın, yazın, konuşun, paylaşın",
      "Yaratıcı çözümler bulun, problemlere farklı açılardan bakın",
      "Partilere ve sosyal etkinliklere katılın, eğlenin",
      "Çocuklarla vakit geçirin, içindeki çocuğu özgür bırakın",
      "Mizah kullanın, gülmek en iyi ilaçtır"
    ],
    avoid: [
      "Dağınıklık ve düzensizlikten kaçının, projelerinizi tamamlayın",
      "Yüzeysel ilişkilerden uzak durun, derin bağlar kurun",
      "Aşırı eğlence ve ihmalkarlıktan kaçının, sorumluluklarınızı unutmayın",
      "Dedikodu ve gereksiz konuşmalardan uzak durun",
      "Dağınıklık ve bitmemiş projelerden kaçının, odaklanın",
      "Eleştirilere aşırı duyarlı olmayın, geliştirici eleştirileri değerlendirin",
      "Aşırı sosyalleşmeyin, kendinize de zaman ayırın",
      "Ciddiyetsizlikten kaçının, önemli konularda ciddi olun"
    ],
    months: {
      1: "Yaratıcı başlangıçlar ayı. Yeni projelere başlayın.",
      2: "İşbirlikleri ayı. Yaratıcı ortaklıklar kurun.",
      3: "Sosyallik ayı. Eğlenceli aktivitelere katılın.",
      4: "Disiplin ayı. Yaratıcı projelerinizi düzene sokun.",
      5: "Macera ayı. Yeni deneyimler yaşayın.",
      6: "Aile ayı. Ailenizle yaratıcı aktiviteler yapın.",
      7: "İçsel yaratıcılık ayı. Derinlemesine çalışın.",
      8: "Ticari başarı ayı. Yaratıcılığınızdan para kazanın.",
      9: "Paylaşma ayı. Yeteneğinizi dünya ile paylaşın.",
      10: "Yeni fırsatlar ayı. Sosyal etkinliklere katılın.",
      11: "İlham ayı. İlham periniz aktif olacak.",
      12: "Kutlama ayı. Yılı eğlenceli kapatın."
    }
  },
  4: {
    theme: "Çalışma ve Düzen",
    desc: "Bu yıl disiplin, çalışma ve düzen yılıdır. Temellerinizi sağlamlaştırın, sistemler kurun ve uzun vadeli projelere odaklanın. Sabır ve azim gerektiren işler için ideal bir dönem. Maddi güvenliğinizi sağlamak için çalışın.",
    advice: [
      "Temellerinizi sağlamlaştırın, sağlam bir temel üzerine inşa edin",
      "Disiplinli çalışın, rutin oluşturun ve sadık kalın",
      "Organizasyon sistemleri kurun, hayatınızı düzene sokun",
      "Bütçe yapın ve finansal planlama yapın, maddi güvenlik sağlayın",
      "Sağlığınıza özen gösterin, düzenli egzersiz yapın",
      "Detaylara dikkat edin, işleri eksiksiz yapın",
      "Sabırlı olun, büyük sonuçlar zaman alır",
      "Sözünüzü tutun, güvenilirlik kazanın"
    ],
    avoid: [
      "Risk almaktan kaçının, bu yıl güvenliği tercih edin",
      "Düzensizlikten ve plansızlıktan kaçının, sistem kurun",
      "Aceleci kararlar almayın, her şeyi detaylı planlayın",
      "Tembellikten ve ertelemekten kaçının, disiplinli olun",
      "Gereksiz harcamalardan kaçının, birikim yapın",
      "Kısa vadeli düşünmekten kaçının, uzun vadeli plan yapın",
      "İşkoliklikten kaçının, dinlenmeye de zaman ayırın",
      "Katı düşünmekten kaçının, esneklik gösterin"
    ],
    months: {
      1: "Planlama ayı. Yılın planını yapın.",
      2: "İşbirlikleri ayı. Güvenilir ortaklar bulun.",
      3: "Yaratıcı çalışma ayı. Pratik yaratıcılık gösterin.",
      4: "Yoğun çalışma ayı. Sıkı çalışın.",
      5: "Değişim ayı. Yeni yöntemleri deneyin.",
      6: "Aile ve iş ayı. İş-aile dengesini kurun.",
      7: "Analiz ayı. Projelerinizi gözden geçirin.",
      8: "Kariyer ayı. Kariyerinizde ilerleyin.",
      9: "Tamamlanma ayı. Projelerinizi bitirin.",
      10: "Yeni projeler ayı. Yeni işlere başlayın.",
      11: "Strateji ayı. Uzun vadeli planlar yapın.",
      12: "Değerlendirme ayı. Yılı gözden geçirin."
    }
  },
  5: {
    theme: "Değişim ve Macera",
    desc: "Bu yıl değişim, özgürlük ve macera yılıdır. Rutininizi kırın, yeni deneyimler yaşayın ve esnek olun. Seyahatler, yeni insanlar ve beklenmedik fırsatlar sizi bekliyor. Değişime direnmeyin, akışa bırakın.",
    advice: [
      "Değişime açık olun, direnmeyin ve akışa bırakın",
      "Seyahat edin, yeni yerler keşfedin ve maceralara atılın",
      "Yeni deneyimler yaşayın, konfor alanınızdan çıkın",
      "Esnek olun, planlar değişebilir ve bu iyi olabilir",
      "Yeni insanlarla tanışın, sosyal çevrenizi genişletin",
      "Risk alın, hesaplanmış riskler büyüme getirir",
      "Öğrenmeye açık olun, yeni beceriler edinin",
      "Spontane olun, bazen plansız hareket etmek güzeldir"
    ],
    avoid: [
      "Sabit kalmayın, değişimi kucaklayın",
      "Rutine ve monotonluğa düşmeyin, çeşitlilik arayın",
      "Kontrolcülükten kaçının, her şeyi kontrol edemezsiniz",
      "Bağımlılıklara düşmeyin, özgürlüğünüzü koruyun",
      "Dikkatsizlikten kaçının, risk alırken akıllı olun",
      "Aşırı dağınıklıktan kaçının, biraz düzen koruyun",
      "Sorumluluklardan kaçmayın, özgürlük sorumluluk getirir",
      "Sabırsızlıktan kaçının, her şeyin bir zamanı vardır"
    ],
    months: {
      1: "Yeni maceralar ayı. Yıl macerayla başlasın.",
      2: "İlişkiler ayı. Yeni insanlarla tanışın.",
      3: "Sosyal macera ayı. Eğlenceli aktiviteler yapın.",
      4: "Düzen ayı. Biraz düzen kazanın.",
      5: "Değişim ayı. Büyük değişiklikler yapın.",
      6: "Aile macerası ayı. Ailenizle yeni deneyimler yaşayın.",
      7: "İçsel macera ayı. Manevi keşifler yapın.",
      8: "Kariyer değişimi ayı. Kariyerinizde değişiklik yapın.",
      9: "Tamamlanma ayı. Eski bağları koparın.",
      10: "Yeni başlangıçlar ayı. Yeni maceralara atılın.",
      11: "Sezgi ayı. İç sesinizi dinleyin.",
      12: "Değerlendirme ayı. Yılı gözden geçirin."
    }
  },
  6: {
    theme: "Sorumluluk ve Aile",
    desc: "Bu yıl sorumluluk, aile ve hizmet yılıdır. Sevdiklerinize zaman ayırın, ev hayatınıza odaklanın ve başkalarına hizmet edin. İlişkilerinizi güçlendirin, sorumluluklarınızı yerine getirin ve şefkat gösterin.",
    advice: [
      "Ailenize zaman ayırın, ev hayatınıza odaklanın",
      "Sorumluluklarınızı yerine getirin, güvenilir olun",
      "Başkalarına hizmet edin, yardımsever olun",
      "İlişkilerinizi güçlendirin, sevdiklerinize şefkat gösterin",
      "Ev düzenleyin, yaşam alanınızı güzelleştirin",
      "Çocuklarla vakit geçirin, onlara rehberlik edin",
      "Sağlığınıza özen gösterin, dengeli beslenin",
      "Sanatsal aktiviteler yapın, yaratıcılığınızı kullanın"
    ],
    avoid: [
      "Kendinizi feda etmeyin, sınırlarınızı koruyun",
      "Aşırı sorumluluk almayın, yükünüzü paylaşın",
      "Kontrolcülükten kaçının, başkalarına güvenin",
      "Aile dışındaki alanları ihmal etmeyin, denge kurun",
      "Aşırı endişelenmeyin, her şey yoluna girecek",
      "Mükemmeliyetçilikten kaçının, yeterince iyi olmak yeterli",
      "Bağımlılıklara düşmeyin, sağlıklı sınırlar koruyun",
      "İşkoliklikten kaçının, aileye zaman ayırın"
    ],
    months: {
      1: "Aile planlaması ayı. Aile hedeflerinizi belirleyin.",
      2: "İlişkiler ayı. İlişkilerinizi güçlendirin.",
      3: "Yaratıcı aile ayı. Ailenizle yaratıcı aktiviteler yapın.",
      4: "Ev düzeni ayı. Evinizi düzenleyin.",
      5: "Aile macerası ayı. Ailenizle yeni deneyimler yaşayın.",
      6: "Aile odaklı ay. Ailenize zaman ayırın.",
      7: "İçsel aile ayı. Aile bağlarınızı derinleştirin.",
      8: "Maddi güvenlik ayı. Ailenizin maddi güvenliğini sağlayın.",
      9: "Hizmet ayı. Başkalarına hizmet edin.",
      10: "Yeni başlangıçlar ayı. Aile için yeni projelere başlayın.",
      11: "Sezgi ayı. Aile sezgilerinizi dinleyin.",
      12: "Kutlama ayı. Ailenizle yılı kutlayın."
    }
  },
  7: {
    theme: "İçsel Yolculuk ve Bilgelik",
    desc: "Bu yıl içsel yolculuk, bilgelik ve manevi gelişim yılıdır. Kendinizi keşfedin, bilgi edinin ve manevi pratikler yapın. Yalnız zaman geçirin, iç sesinizi dinleyin ve derinlemesine analiz yapın.",
    advice: [
      "Meditasyon yapın, iç dünyanızı keşfedin",
      "Bilgi edinin, kitaplar okuyun ve araştırma yapın",
      "Manevi pratikler yapın, ruhsal gelişime odaklanın",
      "Yalnız zaman geçirin, kendinizle baş başa kalın",
      "Sezgilerinizi dinleyin, iç sesinize güvenin",
      "Derinlemesine analiz yapın, yüzeysel olmayın",
      "Doğayla bağlantı kurun, yürüyüşler yapın",
      "Sır tutun, gizliliğe önem verin"
    ],
    avoid: [
      "Yüzeysellikten kaçının, derinlemesine inceleyin",
      "Sosyal izolasyona düşmeyin, dengeli olun",
      "Aşırı analizden kaçının, bazen hissetmek gerekir",
      "Şüphecilikten kaçının, güvenmeyi öğrenin",
      "Soğukluk ve mesafeden kaçının, duygularınızı ifade edin",
      "Aşırı eleştiriden kaçının, anlayış gösterin",
      "Kaçışlardan kaçının, yüzleşmeyi öğrenin",
      "Bilgi takıntısından kaçının, bilgelik farklıdır"
    ],
    months: {
      1: "İçsel planlama ayı. Yılın manevi hedeflerini belirleyin.",
      2: "Sezgi ayı. Sezgilerinizi dinleyin.",
      3: "Yaratıcı bilgelik ayı. Bilgiyi yaratıcı kullanın.",
      4: "Disiplinli çalışma ayı. Düzenli pratik yapın.",
      5: "Keşif ayı. Yeni manevi deneyimler yaşayın.",
      6: "Hizmet ayı. Bilgeliğinizi paylaşın.",
      7: "Derin maneviyat ayı. Yoğun pratikler yapın.",
      8: "Uygulama ayı. Bilgeliğinizi pratiğe dökün.",
      9: "Paylaşma ayı. Bilgeliğinizi dünya ile paylaşın.",
      10: "Yeni öğrenme ayı. Yeni konular öğrenin.",
      11: "Aydınlanma ayı. Derin manevi keşifler yapın.",
      12: "Değerlendirme ayı. Manevi yolculuğunuzu gözden geçirin."
    }
  },
  8: {
    theme: "Güç ve Maddi Başarı",
    desc: "Bu yıl güç, başarı ve maddi büyüme yılıdır. Kariyerinize odaklanın, finansal hedeflerinize ulaşın ve liderlik yapın. Büyük projelere atılın, gücünüzü kullanın ve başarıyı kucaklayın.",
    advice: [
      "Kariyerinize odaklanın, profesyonel hedefler belirleyin",
      "Finansal büyümeyi hedefleyin, yatırım yapın",
      "Liderlik yapın, gücünüzü sorumlu kullanın",
      "Büyük projelere atılın, cesur olun",
      "Başarıyı kucaklayın, kazanmayı hak ettiğinizi bilin",
      "Organizasyon kurun, sistemler oluşturun",
      "Güç dengesi kurun, adil olun",
      "Hayır işleri yapın, kazancınızı paylaşın"
    ],
    avoid: [
      "İşkoliklikten kaçının, denge kurun",
      "Gücü kötüye kullanmayın, sorumlu olun",
      "Açgözlülükten kaçının, paylaşmayı unutmayın",
      "Maddi odaklılıktan kaçının, maneviyatı ihmal etmeyin",
      "Kontrolcülükten kaçının, başkalarına güvenin",
      "Stresten kaçının, sağlığınıza özen gösterin",
      "Başarısızlık korkusundan kaçının, risk alın",
      "Egoizmden kaçının, alçakgönüllü olun"
    ],
    months: {
      1: "Kariyer planlaması ayı. Profesyonel hedefler belirleyin.",
      2: "İşbirlikleri ayı. Güçlü ortaklıklar kurun.",
      3: "Yaratıcı iş ayı. Yaratıcı çözümler bulun.",
      4: "Çalışma ayı. Sıkı çalışın.",
      5: "Değişim ayı. Kariyerde değişiklik yapın.",
      6: "İş-aile dengesi ayı. Dengenizi kurun.",
      7: "Strateji ayı. Uzun vadeli planlar yapın.",
      8: "Başarı ayı. Büyük başarılara odaklanın.",
      9: "Paylaşma ayı. Kazancınızı paylaşın.",
      10: "Yeni fırsatlar ayı. Yeni iş fırsatları yakalayın.",
      11: "Liderlik ayı. Liderlik yeteneklerinizi gösterin.",
      12: "Değerlendirme ayı. Yılı gözden geçirin."
    }
  },
  9: {
    theme: "Tamamlanma ve Bırakma",
    desc: "Bu yıl tamamlanma, bırakma ve hazırlanma yılıdır. Eski bağları koparın, tamamlanmamış işleri bitirin ve yeni bir döngüye hazırlanın. Bağışta bulunun, affedin ve bırakın.",
    advice: [
      "Eski bağları koparın, geçmişi geride bırakın",
      "Tamamlanmamış işleri bitirin, kapatın",
      "Bağışta bulunun, paylaşın ve verin",
      "Affedin, kendiniz ve başkaları için",
      "İnsani hizmet yapın, dünyaya katkıda bulunun",
      "Değerlendirin, neyin işe yaradığını görün",
      "Hazırlanın, yeni bir döngü için hazırlanın",
      "Bırakın, kontrolü bırakın ve güvenin"
    ],
    avoid: [
      "Yeni başlangıçlardan kaçının, tamamlamaya odaklanın",
      "Eskiye tutunmayın, bırakmayı öğrenin",
      "Bağışıklıktan kaçının, vermeyi öğrenin",
      "İntikamdan kaçının, affedin",
      "Bencilikten kaçının, paylaşın",
      "Tutunmaktan kaçının, akışa bırakın",
      "Yeni bağlanmalardan kaçının, eskileri kapatın",
      "Acele etmeyin, her şeyin bir zamanı vardır"
    ],
    months: {
      1: "Değerlendirme ayı. Geçmişi gözden geçirin.",
      2: "Affetme ayı. Affedin ve bırakın.",
      3: "Paylaşma ayı. Bilgilerinizi paylaşın.",
      4: "Tamamlama ayı. Projelerinizi bitirin.",
      5: "Değişim ayı. Değişime hazırlanın.",
      6: "Hizmet ayı. Başkalarına hizmet edin.",
      7: "İçsel temizlik ayı. İçsel bağları koparın.",
      8: "Maddi paylaşım ayı. Kazancınızı paylaşın.",
      9: "Tamamlanma ayı. Tüm döngüleri kapatın.",
      10: "Hazırlık ayı. Yeni başlangıçlara hazırlanın.",
      11: "Sezgi ayı. İç sesinizi dinleyin.",
      12: "Yeni başlangıç ayı. Yeni döngüye adım atın."
    }
  },
  11: {
    theme: "Sezgi ve Aydınlanma",
    desc: "Bu yıl sezgi, ilham ve manevi aydınlanma yılıdır. İç sesinizi dinleyin, yüksek bilgileri kanalize edin ve manevi gelişime odaklanın. İlham periniz aktif olacak, yaratıcı projelere yönelin.",
    advice: [
      "Sezgilerinize güvenin, mantık kadar kalbinizi dinleyin",
      "Meditasyon yapın, yüksek bilgileri kanalize edin",
      "İlham alın, yaratıcı projelere yönelin",
      "Manevi pratikler yapın, ruhsal gelişime odaklanın",
      "Rehberlik edin, başkalarına ışık olun",
      "İlham perinizi dinleyin, yaratıcı ifadelere yönelin",
      "Yüksek frekanslı insanlarla birlikte olun",
      "İçsel rehberliğe açık olun, evren size konuşuyor"
    ],
    avoid: [
      "Mantığı dinlemekten kaçının, sezgilerinizi görmezden gelmeyin",
      "Düşük frekanslı aktivitelerden kaçının, enerjinizi koruyun",
      "Negatif insanlardan uzak durun, auranızı koruyun",
      "Şüphecilikten kaçının, güvenmeyi öğrenin",
      "Yüzeysellikten kaçının, derinleşin",
      "Aşırı duyarlılıktan kaçının, sınırlarınızı koruyun",
      "Yalnızlığa düşmeyin, destek alın",
      "Anksiyeteden kaçının, sakin olun ve güvenin"
    ],
    months: {
      1: "İlham ayı. Yeni ilhamlar alın.",
      2: "Sezgi ayı. Sezgilerinizi dinleyin.",
      3: "Yaratıcı ilham ayı. İlhamlarınızı ifade edin.",
      4: "Disiplinli pratik ayı. Düzenli meditasyon yapın.",
      5: "Manevi keşif ayı. Yeni manevi deneyimler yaşayın.",
      6: "Rehberlik ayı. Başkalarına rehberlik edin.",
      7: "Derin maneviyat ayı. Yoğun pratikler yapın.",
      8: "Güç ayı. Manevi gücünüzü kullanın.",
      9: "Paylaşma ayı. Bilgeliğinizi paylaşın.",
      10: "Yeni vizyonlar ayı. Yeni vizyonlar geliştirin.",
      11: "Aydınlanma ayı. Derin manevi keşifler yapın.",
      12: "Değerlendirme ayı. Manevi yolculuğunuzu gözden geçirin."
    }
  },
  22: {
    theme: "Büyük Projeler ve Usta İnşaatçı",
    desc: "Bu yıl büyük projeler, vizyon ve somut başarı yılıdır. Hayallerinizi gerçeğe dönüştürün, büyük ölçekli projelere atılın ve dünyayı değiştirin. Usta İnşaatçı enerjinizle somut miraslar bırakın.",
    advice: [
      "Büyük projelere atılın, vizyonlarınızı somutlaştırın",
      "Dünyayı değiştirin, büyük ölçekli projeler yapın",
      "Somut miraslar bırakın, kalıcı eserler oluşturun",
      "Organizasyon kurun, sistemler oluşturun",
      "Liderlik yapın, insanları bir araya getirin",
      "Pratik vizyon gösterin, hayalleri gerçeğe dönüştürün",
      "Disiplinli çalışın, büyük işler zaman alır",
      "Sorumluluk alın, dünya sizin vizyonunuzu bekliyor"
    ],
    avoid: [
      "Küçük düşünmekten kaçının, büyük oynayın",
      "Vizyonsuz hareket etmekten kaçının, plan yapın",
      "Yarım bırakmaktan kaçının, projelerinizi tamamlayın",
      "Aşırı sorumluluk almaktan kaçının, yükünüzü paylaşın",
      "Kontrolcülükten kaçının, başkalarına güvenin",
      "İşkoliklikten kaçının, denge kurun",
      "Mükemmeliyetçilikten kaçının, ilerlemeye odaklanın",
      "Yalnız çalışmaktan kaçının, ekip kurun"
    ],
    months: {
      1: "Büyük vizyonlar ayı. Yılın büyük projelerini planlayın.",
      2: "İşbirlikleri ayı. Güçlü ortaklıklar kurun.",
      3: "Yaratıcı vizyon ayı. Yaratıcı çözümler bulun.",
      4: "İnşaat ayı. Projelerinizi hayata geçirin.",
      5: "Değişim ayı. Büyük değişiklikler yapın.",
      6: "Hizmet ayı. Topluma hizmet edin.",
      7: "Strateji ayı. Uzun vadeli planlar yapın.",
      8: "Başarı ayı. Büyük başarılara odaklanın.",
      9: "Miras ayı. Mirasınızı düşünün.",
      10: "Yeni projeler ayı. Yeni büyük projelere başlayın.",
      11: "Vizyon ayı. Vizyonlarınızı netleştirin.",
      12: "Değerlendirme ayı. Projelerinizi gözden geçirin."
    }
  },
  33: {
    theme: "Şifa ve Koşulsuz Sevgi",
    desc: "Bu yıl şifa, koşulsuz sevgi ve hizmet yılıdır. Başkalarına şifa verin, koşulsuz sevgi yayın ve dünyayı sevgiyle değiştirin. Usta Şifacı enerjinizle insanların kalplerine dokunun.",
    advice: [
      "Başkalarına şifa verin, dokunuşunuzla iyileştirin",
      "Koşulsuz sevgi yayın, şartsız sevin",
      "Dünyayı sevgiyle değiştirin, sevgi en büyük güçtür",
      "Öğretin, bilgeliğinizi paylaşın",
      "Hizmet edin, başkalarına yardımcı olun",
      "Şifa pratikleri yapın, enerjinizi kullanın",
      "Kalp çakranızı açın, sevgi kanalınızı güçlendirin",
      "Kendinizi de koruyun, boş sürahi su veremez"
    ],
    avoid: [
      "Kendinizi feda etmekten kaçının, sınırlarınızı koruyun",
      "Sınırları korumamaktan kaçının, kendinizi koruyun",
      "Bencil olmaktan kaçının, paylaşın",
      "Aşırı duygusallıktan kaçının, denge kurun",
      "Dünyevi zorluklardan kaçının, ayaklarınızı yere basın",
      "Tükenmekten kaçının, enerjinizi koruyun",
      "Kurtarıcı kompleksinden kaçının, herkes kendi yolunu çizer",
      "Mükemmellikten kaçının, yeterince iyi olmak yeterli"
    ],
    months: {
      1: "Şifa planlaması ayı. Yılın şifa hedeflerini belirleyin.",
      2: "Sevgi ayı. Koşulsuz sevgi yayın.",
      3: "Yaratıcı şifa ayı. Sanatsal şifa yöntemleri kullanın.",
      4: "Disiplinli şifa ayı. Düzenli şifa pratikleri yapın.",
      5: "Yeni şifa yöntemleri ayı. Yeni modaliteler keşfedin.",
      6: "Hizmet ayı. Başkalarına şifa verin.",
      7: "İçsel şifa ayı. Kendinizi şifalandırın.",
      8: "Güç ayı. Şifa gücünüzü kullanın.",
      9: "Evrensel sevgi ayı. Evrensel sevgi yayın.",
      10: "Yeni şifa projeleri ayı. Yeni şifa projelerine başlayın.",
      11: "Aydınlanma ayı. Şifa aydınlanması yaşayın.",
      12: "Değerlendirme ayı. Şifa yolculuğunuzu gözden geçirin."
    }
  }
};

// Get personal year data
export function getPersonalYearData(year: number) {
  return personalYearData[year] || personalYearData[1];
}
