// Birth Day Secondary Energy Data
// Each birth day (1-31) reduced to single digit gives secondary energy

export interface BirthDayEnergyType {
  [key: number]: {
    title: string;
    desc: string;
    traits: string[];
    influence: string;
  };
}

export const birthDayEnergyData: BirthDayEnergyType = {
  1: {
    title: "Bağımsızlık ve Özgünlük",
    desc: "Doğum günü 1 olanlar bağımsız ve özgün bir karaktere sahiptir. Liderlik yetenekleri güçlüdür ve kendi yollarını çizmeyi severler. İkincil enerjileri onlara ekstra bir kararlılık ve girişimcilik ruhu katar.",
    traits: ["Bağımsız", "Kararlı", "Özgün", "Lider", "Girişimci", "Öz güvenli"],
    influence: "İkincil enerjiniz size ekstra bir liderlik ve bağımsızlık kazandırır. Kararlarınızı kendi başınıza almayı tercih edersiniz ve başkalarının gölgesinde kalmaktan hoşlanmazsınız."
  },
  2: {
    title: "Diplomasi ve Hassasiyet",
    desc: "Doğum günü 2 olanlar diplomatik ve hassas bir yapıya sahiptir. İşbirliğine açıktırlar ve başkalarının duygularını anlama yetenekleri güçlüdür. İkincil enerjileri onlara sezgi ve uyum yeteneği katar.",
    traits: ["Diplomatik", "Hassas", "İşbirlikçi", "Sezgisel", "Uyumlu", "Sabırlı"],
    influence: "İkincil enerjiniz size ekstra bir diplomatik yetenek ve hassasiyet kazandırır. Çatışmalardan kaçınırsınız ve uyumlu çözümler bulmaya çalışırsınız."
  },
  3: {
    title: "Yaratıcılık ve İletişim",
    desc: "Doğum günü 3 olanlar yaratıcı ve iletişimci bir yapıya sahiptir. Sanatsal yetenekleri güçlüdür ve kendilerini ifade etmeyi severler. İkincil enerjileri onlara neşe ve sosyallik katar.",
    traits: ["Yaratıcı", "İletişimci", "Neşeli", "Sosyal", "Sanatsal", "Espriyi seven"],
    influence: "İkincil enerjiniz size ekstra bir yaratıcılık ve iletişim yeteneği kazandırır. Sosyal ortamlarda parlersınız ve insanları eğlendirmekten hoşlanırsınız."
  },
  4: {
    title: "Disiplin ve Güvenilirlik",
    desc: "Doğum günü 4 olanlar disiplinli ve güvenilir bir yapıya sahiptir. Pratik düşünürler ve sağlam temeller üzerine inşa etmeyi severler. İkincil enerjileri onlara organizasyon yeteneği katar.",
    traits: ["Disiplinli", "Güvenilir", "Pratik", "Organize", "Metodik", "Çalışkan"],
    influence: "İkincil enerjiniz size ekstra bir disiplin ve organizasyon yeteneği kazandırır. Planlı hareket etmeyi tercih edersiniz ve düzensizlikten hoşlanmazsınız."
  },
  5: {
    title: "Özgürlük ve Macera",
    desc: "Doğum günü 5 olanlar özgürlükçü ve maceracı bir yapıya sahiptir. Değişimi severler ve rutinden sıkılırlar. İkincil enerjileri onlara adaptasyon yeteneği katar.",
    traits: ["Özgürlükçü", "Maceracı", "Esnek", "Adaptif", "Meraklı", "Değişimci"],
    influence: "İkincil enerjiniz size ekstra bir özgürlük ve macera ruhu kazandırır. Kısıtlanmaktan hoşlanmazsınız ve sürekli yeni deneyimler ararsınız."
  },
  6: {
    title: "Şefkat ve Sorumluluk",
    desc: "Doğum günü 6 olanlar şefkatli ve sorumluluk sahibi bir yapıya sahiptir. Aile odaklıdırlar ve başkalarına bakmayı severler. İkincil enerjileri onlara koruyuculuk ve şifa yeteneği katar.",
    traits: ["Şefkatli", "Sorumluluk sahibi", "Aile odaklı", "Koruyucu", "Şifacı", "Fedakar"],
    influence: "İkincil enerjiniz size ekstra bir şefkat ve sorumluluk kazandırır. Sevdiklerinize karşı koruyucu olursunuz ve onların ihtiyaçlarını kendi ihtiyaçlarınızın önüne koyabilirsiniz."
  },
  7: {
    title: "Analiz ve Bilgelik",
    desc: "Doğum günü 7 olanlar analitik ve bilge bir yapıya sahiptir. Derin düşünürler ve görünenin ötesini görmeye çalışırlar. İkincil enerjileri onlara sezgi ve araştırma yeteneği katar.",
    traits: ["Analitik", "Bilge", "Derin düşünen", "Sezgisel", "Araştırmacı", "Manevi"],
    influence: "İkincil enerjiniz size ekstra bir analiz ve bilgelik kazandırır. Yüzeysel şeylerden hoşlanmazsınız ve her şeyin derinini öğrenmek istersiniz."
  },
  8: {
    title: "Güç ve Başarı",
    desc: "Doğum günü 8 olanlar güçlü ve başarı odaklı bir yapıya sahiptir. Liderlik yetenekleri güçlüdür ve maddi başarıyı önemserler. İkincil enerjileri onlara strateji ve organizasyon yeteneği katar.",
    traits: ["Güçlü", "Başarı odaklı", "Stratejik", "Organize", "Kararlı", "Girişimci"],
    influence: "İkincil enerjiniz size ekstra bir güç ve başarı odaklılık kazandırır. Hedeflerinize ulaşmak için çok çalışırsınız ve liderlik pozisyonlarında başarılı olursunuz."
  },
  9: {
    title: "İnsanilik ve Şefkat",
    desc: "Doğum günü 9 olanlar insani ve şefkatli bir yapıya sahiptir. Evrensel sevgi doludurlar ve dünyayı daha iyi bir yer yapmak isterler. İkincil enerjileri onlara şifa ve hizmet yeteneği katar.",
    traits: ["İnsani", "Şefkatli", "Evrensel", "Şifacı", "Hizmetkar", "Fedakar"],
    influence: "İkincil enerjiniz size ekstra bir insanilik ve şefkat kazandırır. Başkalarına hizmet etmekten mutluluk duyarsınız ve dünyanın acılarını derinden hissedersiniz."
  }
};

// Calculate birth day energy (reduce to single digit)
export function calculateBirthDayEnergy(day: number): number {
  // Master numbers 11 and 22 are NOT reduced for birth day
  if (day === 11 || day === 22) {
    return day;
  }
  
  // Reduce to single digit
  let sum = day;
  while (sum > 9) {
    sum = sum.toString().split('').reduce((a: number, b: string) => a + parseInt(b), 0);
  }
  return sum;
}

// Get birth day energy description
export function getBirthDayEnergy(day: number) {
  const energy = calculateBirthDayEnergy(day);
  return birthDayEnergyData[energy] || birthDayEnergyData[1];
}
