// src/sjtQuestions.js
export const sjtQuestionsData = {
  customerService: [
    {
      id: 'CS1',
      scenario: 'Customer pesan Cappuccino, tapi setelah diantarkan dia komplain "ini terlalu banyak foam, saya tidak suka". Apa yang Anda lakukan?',
      options: [
        'Jelaskan bahwa Cappuccino memang karakteristiknya banyak foam, mungkin customer lebih cocok pesan Latte',
        'Minta maaf dan langsung remake menjadi Latte tanpa charge tambahan',
        'Minta maaf, tanyakan preferensi customer, dan tawarkan adjust foam atau ganti ke menu lain',
        'Bilang bahwa itu sudah sesuai standar Cappuccino dan tidak bisa diubah'
      ],
      correctBest: 'C',
      correctWorst: 'D'
    },
    {
      id: 'CS2',
      scenario: 'Customer bertanya "Mana yang lebih enak, Americano atau Long Black?" Anda sebenarnya tidak terlalu paham bedanya. Apa yang Anda lakukan?',
      options: [
        'Bilang "sama saja kok" agar terlihat confident',
        'Jujur bilang tidak tahu dan suruh customer pilih sendiri',
        'Tebak perbedaannya berdasarkan yang pernah Anda dengar',
        'Jujur bilang akan cek dulu informasi akuratnya, lalu explain dengan benar'
      ],
      correctBest: 'D',
      correctWorst: 'A'
    },
    {
      id: 'CS3',
      scenario: 'Customer datang 5 menit sebelum closing time dan pesan 5 minuman untuk takeaway. Anda sudah mulai cleaning. Apa yang Anda lakukan?',
      options: [
        'Bilang dengan sopan bahwa sudah closing time dan tidak bisa terima order',
        'Terima order dengan senyum dan kerjakan dengan maksimal meski sudah lelah',
        'Terima order tapi tunjukkan bahasa tubuh tidak senang agar customer tahu',
        'Terima order tapi buat dengan cepat saja, standar kualitas agak dikurangi'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'CS4',
      scenario: 'Customer komplain bahwa waiting time 15 menit terlalu lama, padahal sedang sangat ramai dan Anda sudah kerja secepat mungkin. Apa yang Anda lakukan?',
      options: [
        'Jelaskan bahwa memang sedang ramai dan minta pengertian customer',
        'Minta maaf atas waiting time, kasih update progress ordernya, dan terima komplainnya dengan empati',
        'Ignore karena Anda sudah maksimal dan customer tidak fair',
        'Bilang "kalau tidak mau tunggu, bisa cancel kok"'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'CS5',
      scenario: 'Customer reguler yang biasa ramah tiba-tiba terlihat bad mood dan cuek saat order. Apa yang Anda lakukan?',
      options: [
        'Ikut cuek juga karena dia yang mulai',
        'Tetap ramah seperti biasa, beri space, dan tidak terlalu memaksa small talk',
        'Tanya "kenapa kok bad mood?" untuk show care',
        'Ignore dan layani secukupnya saja'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'CS6',
      scenario: 'Customer minta rekomendasi menu karena pertama kali datang dan bingung. Anda lihat customer bawa laptop, sepertinya akan kerja lama. Apa yang Anda rekomendasikan?',
      options: [
        'Best-seller apapun karena pasti enak',
        'Menu yang paling mahal untuk increase sales',
        'Tanya preferensi (strong/mild, hot/iced), lalu rekomendasikan sesuai kebutuhan kerja lama',
        'Bilang "terserah aja, semua enak kok"'
      ],
      correctBest: 'C',
      correctWorst: 'B'
    },
    {
      id: 'CS7',
      scenario: 'Customer komplain ada rambut di minumannya (padahal Anda yakin semua staff sudah pakai hairnet). Customer minta refund dan terlihat jijik. Apa yang Anda lakukan?',
      options: [
        'Apologize tulus, langsung refund atau remake, dan pastikan customer merasa didengar',
        'Bilang "mungkin rambut customer sendiri" karena Anda yakin tidak mungkin dari staff',
        'Refund dengan reluctant sambil cek CCTV untuk buktikan siapa yang salah',
        'Minta maaf tapi explain bahwa semua staff pakai hairnet, jadi kemungkinan bukan dari staff'
      ],
      correctBest: 'A',
      correctWorst: 'B'
    },
    {
      id: 'CS8',
      scenario: 'Customer pesan minuman custom yang tidak ada di menu dan agak rumit ("Americano with oat milk, 2 pump vanilla, less ice, extra hot"). Apa yang Anda lakukan?',
      options: [
        'Tolak karena tidak ada di menu dan terlalu ribet',
        'Terima dengan antusias, catat detail, confirm ulang, dan buat sebaik mungkin',
        'Terima tapi sounding kesal agar customer tahu ini merepotkan',
        'Terima tapi bilang "nggak guarantee ya hasilnya gimana"'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'CS9',
      scenario: 'Customer komplain harga terlalu mahal dan bandingkan dengan franchise besar. Apa yang Anda lakukan?',
      options: [
        'Defensive dan bilang "kalau mahal ya jangan beli di sini"',
        'Setuju dengan customer dan bilang "iya sih emang agak mahal"',
        'Dengan sopan explain value proposition (specialty coffee, quality, dll) tanpa membanding-bandingkan',
        'Ignore komplainnya dan langsung tanya "jadi mau pesan atau tidak?"'
      ],
      correctBest: 'C',
      correctWorst: 'A'
    },
    {
      id: 'CS10',
      scenario: 'Ada customer difabel (kursi roda) kesulitan ambil minuman di counter. Area sempit dan agak tricky. Apa yang Anda lakukan?',
      options: [
        'Tunggu customer manage sendiri karena takut terlihat offensive',
        'Proaktif tawarkan bantuan dengan sopan, dan assist sesuai kebutuhan customer',
        'Panggil rekan kerja lain untuk handle karena Anda tidak tahu cara yang tepat',
        'Antarkan minuman ke meja customer tanpa tanya, langsung action'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'CS11',
      scenario: 'Customer pesan takeaway 10 minuman untuk meeting, tapi saat pickup bilang "ada 2 yang salah rasa". Sudah lewat 20 menit dari pickup. Apa yang Anda lakukan?',
      options: [
        'Tolak karena sudah lewat waktu dan mungkin sudah diminum',
        'Tanyakan dengan sopan detail kesalahannya, lalu tawarkan solusi (remake atau voucher)',
        'Bilang "harusnya cek dulu sebelum keluar"',
        'Remake tanpa pertanyaan tapi catat bahwa ini suspicious'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'CS12',
      scenario: 'Customer komplain WiFi lambat dan ganggu pekerjaannya. Anda cek memang sedang bermasalah. Apa yang Anda lakukan?',
      options: [
        'Bilang "maaf, kami tidak bisa kontrol WiFi, complaint ke provider"',
        'Apologize, explain situasinya, tawarkan alternatif (hotspot jika ada, atau voucher untuk next visit)',
        'Ignore karena bukan tanggung jawab barista',
        'Bilang "WiFi gratis ya, jangan terlalu expect"'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'CS13',
      scenario: 'Customer bawa anak kecil yang sangat ramai dan mengganggu customer lain. Apa yang Anda lakukan?',
      options: [
        'Tegur customer dengan tegas untuk menenangkan anaknya',
        'Biarkan saja karena tidak mau create conflict',
        'Approach dengan ramah, tawarkan sesuatu untuk anak (coloring book, snack) dan subtle reminder tentang comfort customer lain',
        'Minta customer pindah ke area outdoor jika tidak bisa kontrol anaknya'
      ],
      correctBest: 'C',
      correctWorst: 'A'
    },
    {
      id: 'CS14',
      scenario: 'Customer minta foto dengan latte art Anda untuk Instagram, tapi hasilnya hari ini kurang bagus. Apa yang Anda lakukan?',
      options: [
        'Tolak dan bilang "hari ini latte art-nya kurang bagus"',
        'Bilang boleh tapi disclaimer hasil tidak maksimal',
        'Remake dengan effort maksimal untuk hasil yang Instagram-worthy',
        'Kasih foto latte art lama yang lebih bagus dari gallery'
      ],
      correctBest: 'C',
      correctWorst: 'D'
    },
    {
      id: 'CS15',
      scenario: 'Customer pesan untuk dine-in tapi tiba-tiba berubah menjadi takeaway setelah minuman sudah dibuat di cup keramik. Apa yang Anda lakukan?',
      options: [
        'Bilang "sudah terlanjur, tidak bisa ganti"',
        'Minta charge tambahan untuk ganti ke paper cup',
        'Dengan senang hati pindahkan ke paper cup tanpa charge',
        'Kasih disposable cup kosong, suruh customer pindahkan sendiri'
      ],
      correctBest: 'C',
      correctWorst: 'D'
    }
  ],

  teamwork: [
    {
      id: 'TW1',
      scenario: 'Rekan kerja Anda salah buat pesanan, dan customer komplain ke Anda. Shift leader bertanya apa yang terjadi. Apa yang Anda katakan?',
      options: [
        'Si [nama] yang salah buat, saya nggak tahu',
        'Ada kesalahan di order, sudah saya handle remake-nya',
        'Saya kurang koordinasi dengan tim, next time akan lebih communicate',
        'Sistemnya yang bikin bingung, jadi ada miscommunication'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'TW2',
      scenario: 'Anda notice rekan kerja baru terlihat bingung dan struggle, tapi tidak minta bantuan. Anda sedang tidak terlalu sibuk. Apa yang Anda lakukan?',
      options: [
        'Tunggu dia minta bantuan dulu, baru Anda bantu',
        'Proaktif approach dan tawarkan bantuan atau guidance',
        'Biarkan dia belajar dari struggle sendiri, itu bagian dari proses',
        'Laporkan ke shift leader bahwa dia terlihat tidak capable'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'TW3',
      scenario: 'Ada konflik antara 2 rekan kerja tentang pembagian tugas. Keduanya minta Anda jadi "wasit" dan menentukan siapa yang benar. Apa yang Anda lakukan?',
      options: [
        'Pilih salah satu yang menurut Anda benar',
        'Bilang "saya nggak mau ikut campur urusan kalian"',
        'Facilitate diskusi, dengarkan kedua sisi, dan bantu find fair solution bersama',
        'Lapor ke shift leader dan serahkan ke mereka untuk handle'
      ],
      correctBest: 'C',
      correctWorst: 'B'
    },
    {
      id: 'TW4',
      scenario: 'Shift leader assign tugas cleaning yang Anda rasa bukan giliran Anda (giliran rekan lain). Apa yang Anda lakukan?',
      options: [
        'Menolak dan argue bahwa itu bukan giliran Anda',
        'Kerjakan tugas sambil passive-aggressive (ngomel-ngomel)',
        'Kerjakan dengan baik, lalu di waktu yang tepat diskusikan rotation schedule dengan shift leader',
        'Kerjakan sambil complaint ke rekan kerja lain tentang ketidakadilan ini'
      ],
      correctBest: 'C',
      correctWorst: 'D'
    },
    {
      id: 'TW5',
      scenario: 'Anda punya cara kerja yang lebih efisien dari rekan kerja, tapi rekan Anda tetap pakai cara lama dan slower. Apa yang Anda lakukan?',
      options: [
        'Biarkan saja, yang penting pekerjaan Anda selesai',
        'Kritik cara kerjanya di depan customer atau staff lain',
        'Di waktu yang tepat, share cara Anda dengan humble dan tawarkan untuk ajari',
        'Lapor ke shift leader bahwa dia kerja terlalu lambat'
      ],
      correctBest: 'C',
      correctWorst: 'B'
    },
    {
      id: 'TW6',
      scenario: 'Tim Anda harus lembur untuk prepare event besar besok, tapi Anda sudah ada janji penting dengan keluarga malam ini. Apa yang Anda lakukan?',
      options: [
        'Langsung pulang sesuai jadwal tanpa bilang apa-apa',
        'Pulang sesuai jadwal tapi explain situasi dan tawarkan datang lebih pagi besok untuk bantu',
        'Cancel janji keluarga dan ikut lembur tanpa bicara',
        'Ikut lembur sambil ngomel dan tunjukkan rasa tidak ikhlas'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'TW7',
      scenario: 'Rekan kerja Anda sering datang terlambat dan Anda yang selalu cover pekerjaannya. Anda mulai kesal. Apa yang Anda lakukan?',
      options: [
        'Bicara empat mata dengan rekan tersebut secara konstruktif tentang impact ke tim',
        'Passive-aggressive: stop cover pekerjaannya biar dia kena masalah sendiri',
        'Komplain ke semua rekan kerja lain tentang dia',
        'Langsung lapor ke manager tanpa bicara ke orangnya dulu'
      ],
      correctBest: 'A',
      correctWorst: 'C'
    },
    {
      id: 'TW8',
      scenario: 'Ada ide improvement dari Anda, tapi rekan kerja senior menolak dengan alasan "sudah biasa begini". Apa yang Anda lakukan?',
      options: [
        'Argue dan paksa ide Anda karena Anda yakin lebih baik',
        'Langsung give up dan tidak mention lagi',
        'Respect pendapat mereka, tapi tetap present data/reasoning yang objektif untuk diskusi',
        'Implement ide Anda sendiri tanpa persetujuan tim'
      ],
      correctBest: 'C',
      correctWorst: 'D'
    },
    {
      id: 'TW9',
      scenario: 'Tim Anda dapat compliment dari customer dan shift leader mau treat makan. Rekan Anda yang paling kontribusi tidak ikut shift ini. Bagaimana Anda respond?',
      options: [
        'Enjoy saja, yang penting tim yang ada sekarang',
        'Suggest untuk sisihkan atau tunggu sampai rekan tersebut bisa join',
        'Bilang compliment ini mostly karena rekan yang tidak ada dan kurang fair',
        'Tidak peduli, terima treat saja'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'TW10',
      scenario: 'Anda dan rekan kerja punya gaya kerja yang sangat berbeda dan sering friction. Manager assign Anda berdua untuk project bersama. Apa yang Anda lakukan?',
      options: [
        'Request untuk ganti partner karena tidak compatible',
        'Kerjakan dengan minimal communication, fokus di bagian Anda saja',
        'Initiate diskusi di awal untuk align expectation, appreciate perbedaan, dan cari middle ground',
        'Dominasi project dan kerjakan mayoritas sendiri agar sesuai standar Anda'
      ],
      correctBest: 'C',
      correctWorst: 'A'
    },
    {
      id: 'TW11',
      scenario: 'Rekan kerja Anda melakukan mistake di depan customer. Customer mulai marah. Apa yang Anda lakukan?',
      options: [
        'Ikut blame rekan kerja di depan customer',
        'Step in, handle customer dengan profesional, protect rekan kerja dari escalation',
        'Diam saja dan biarkan rekan kerja handle sendiri',
        'Bilang ke customer "dia memang sering begitu"'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'TW12',
      scenario: 'Anda diminta training barista baru, tapi Anda sendiri masih merasa belum expert. Apa yang Anda lakukan?',
      options: [
        'Tolak karena merasa belum qualified',
        'Terima dan ajarkan apa yang Anda tahu dengan jujur tentang limitation Anda',
        'Terima dan pura-pura expert meskipun tidak yakin',
        'Terima tapi asal-asalan karena tidak confidence'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'TW13',
      scenario: 'Tim Anda sedang ramai, tapi ada rekan yang main HP terus. Apa yang Anda lakukan?',
      options: [
        'Marah dan tegur keras di depan semua orang',
        'Langsung lapor ke shift leader',
        'Gentle reminder atau minta tolong dengan specific task',
        'Ignore dan ambil beban kerjanya'
      ],
      correctBest: 'C',
      correctWorst: 'A'
    },
    {
      id: 'TW14',
      scenario: 'Rekan kerja minta Anda cover shift-nya besok karena ada urusan mendadak. Anda sebenarnya ada rencana. Apa yang Anda lakukan?',
      options: [
        'Langsung tolak tanpa tanya detail',
        'Tanya dulu urgency-nya, pertimbangkan, lalu decide dengan jujur',
        'Terima meskipun tidak ikhlas',
        'Terima tapi minta sesuatu sebagai balas jasa'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'TW15',
      scenario: 'Ada miscommunication yang menyebabkan order salah. Customer marah dan tidak jelas siapa yang salah. Apa yang Anda lakukan?',
      options: [
        'Cari tahu siapa yang salah dulu sebelum handle customer',
        'Focus resolve issue customer dulu, baru investigate internally',
        'Blame sistem POS yang confusing',
        'Minta customer komplain langsung ke yang salah'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    }
  ],

  integrity: [
    {
      id: 'INT1',
      scenario: 'Anda tidak sengaja break gelas saat closing dan tidak ada yang lihat. Area sudah gelap dan Anda lelah. Apa yang Anda lakukan?',
      options: [
        'Buang pecahannya dan tidak lapor karena tidak ada yang tahu',
        'Bersihkan dengan baik, lapor dan catat di logbook untuk transparency',
        'Bersihkan tapi tidak lapor karena toh sudah dibersihkan',
        'Tinggalkan begitu saja, shift berikutnya yang akan notice dan handle'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'INT2',
      scenario: 'Customer bayar dan Anda salah hitung, kelebihan kasih kembalian 50K. Customer sudah pergi dan tidak notice. Apa yang Anda lakukan?',
      options: [
        'Simpan uang tersebut untuk diri sendiri sebagai "rejeki"',
        'Masukkan ke cash register dan laporkan sebagai overpayment error',
        'Diamkan saja, nanti pas closing akan ketahuan selisihnya',
        'Bagi dengan rekan kerja sebagai "bonus"'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'INT3',
      scenario: 'Shift leader tidak ada, dan ada stock pastry yang akan expired hari ini tapi belum terjual. Anda lapar. Apa yang Anda lakukan?',
      options: [
        'Makan pastry tersebut karena toh akan dibuang juga',
        'Tunggu shift leader approve dulu atau catat sebagai staff meal dengan prosedur yang benar',
        'Jual dengan diskon besar ke customer agar tidak waste',
        'Bawa pulang tanpa sepengetahuan siapa-siapa'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'INT4',
      scenario: 'Teman Anda datang sebagai customer dan minta discount "teman". Tidak ada policy discount untuk teman staff. Apa yang Anda lakukan?',
      options: [
        'Kasih discount karena teman dan tidak akan ketahuan',
        'Explain dengan baik bahwa tidak ada policy discount dan tawarkan loyalty program yang tersedia',
        'Kasih discount tapi suruh teman bayar cash agar tidak tercatat',
        'Tolak dengan kasar agar teman tidak minta lagi'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'INT5',
      scenario: 'Anda lihat rekan kerja ambil uang dari tip jar untuk keperluan pribadi (dengan niat akan kembalikan). Apa yang Anda lakukan?',
      options: [
        'Ignore karena bukan urusan Anda',
        'Langsung confront dan minta kembalikan sekarang',
        'Bicara empat mata secara pribadi dan remind tentang policy',
        'Langsung lapor ke manager tanpa konfirmasi ke orangnya'
      ],
      correctBest: 'C',
      correctWorst: 'A'
    },
    {
      id: 'INT6',
      scenario: 'Customer tinggalkan laptop di meja dan pergi. Anda lihat ada uang cash 200K di atas meja. Apa yang Anda lakukan?',
      options: [
        'Ambil uangnya karena customer ceroboh dan itu "pelajaran" untuk mereka',
        'Simpan di tempat aman dan tunggu customer kembali, atau hubungi jika ada contact',
        'Kasih ke rekan kerja untuk handle',
        'Simpan dulu untuk diri sendiri, jika customer komplain baru kembalikan'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'INT7',
      scenario: 'Anda sakit dan seharusnya tidak masuk kerja (bisa menular ke customer/staff), tapi shift sedang kekurangan orang. Manager bilang "terserah kamu, tapi akan sangat membantu kalau kamu bisa masuk". Apa yang Anda lakukan?',
      options: [
        'Tetap tidak masuk demi kesehatan bersama dan minta maaf',
        'Masuk kerja meski sakit karena merasa bertanggung jawab',
        'Masuk kerja tapi setengah hati dan sering istirahat',
        'Masuk kerja dan tutup-tutupi sakitnya agar tidak ketahuan'
      ],
      correctBest: 'A',
      correctWorst: 'D'
    },
    {
      id: 'INT8',
      scenario: 'Ada customer yang sangat rude dan toxic, tapi Anda notice dia tinggalkan dompet. Apa yang Anda lakukan?',
      options: [
        'Ignore dan biarkan dia rugi sebagai karma',
        'Kejar dan kembalikan dompet dengan profesional meskipun dia rude',
        'Cek isi dompet dulu baru putuskan mau kembalikan atau tidak',
        'Kasih ke rekan kerja lain yang lebih sabar untuk handle'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'INT9',
      scenario: 'Anda tidak sengaja pakai bahan yang hampir expired (tapi masih aman) untuk order customer tanpa sadar. Anda baru realize setelah customer pergi. Apa yang Anda lakukan?',
      options: [
        'Tidak apa-apa karena masih dalam tanggal aman dan customer tidak komplain',
        'Hubungi customer jika memungkinkan, inform dengan jujur, dan tawarkan remake atau refund',
        'Tidak perlu inform karena akan bikin masalah yang sebenarnya tidak perlu',
        'Catat untuk diri sendiri dan lebih hati-hati next time'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'INT10',
      scenario: 'Social media policy melarang post internal operasional, tapi Anda ambil foto aesthetic di balik counter untuk Instagram story. Apa yang Anda lakukan?',
      options: [
        'Post saja karena foto bagus dan akan bagus untuk personal branding',
        'Tidak post karena respect policy, atau minta izin dulu ke management',
        'Post tapi blur atau crop bagian yang sensitive',
        'Post dan delete cepat jika ada yang komplain'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'INT11',
      scenario: 'Anda notice register kelebihan 100K saat closing, tapi tidak ada yang tahu. Apa yang Anda lakukan?',
      options: [
        'Simpan untuk diri sendiri karena tidak ada yang tahu',
        'Lapor dan catat sebagai overage dengan transparant',
        'Bagi dengan tim sebagai "bonus"',
        'Simpan untuk kembalikan jika suatu hari ada shortage'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'INT12',
      scenario: 'Manager minta Anda adjust attendance record teman yang telat agar tidak kena warning. Apa yang Anda lakukan?',
      options: [
        'Lakukan karena manager yang minta',
        'Tolak dengan sopan dan explain kenapa itu tidak sesuai policy',
        'Lakukan tapi catat untuk diri sendiri',
        'Lakukan tapi lapor ke HR diam-diam'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'INT13',
      scenario: 'Ada promo yang sudah expired tapi customer tidak tahu dan minta applied. System tidak auto-block. Apa yang Anda lakukan?',
      options: [
        'Inform dengan jujur bahwa promo sudah expired',
        'Apply saja biar customer senang',
        'Apply tapi bilang "jangan bilang-bilang ya"',
        'Bilang system error jadi tidak bisa apply'
      ],
      correctBest: 'A',
      correctWorst: 'C'
    },
    {
      id: 'INT14',
      scenario: 'Anda accidentally charge customer untuk extra shot yang tidak mereka pesan. Customer sudah pulang. Apa yang Anda lakukan?',
      options: [
        'Tidak apa-apa, selisih kecil saja',
        'Masukkan selisihnya ke donation box atau catat untuk refund next visit',
        'Simpan selisihnya',
        'Anggap sebagai tip'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'INT15',
      scenario: 'Manager minta Anda bohong ke customer bahwa bahan organic padahal bukan. Apa yang Anda lakukan?',
      options: [
        'Lakukan karena manager yang instruksikan',
        'Tolak dan discuss dengan manager tentang implikasi etis dan legal',
        'Lakukan tapi merasa bersalah',
        'Lakukan tapi inform customer secara pribadi setelahnya'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    }
  ],

  stressManagement: [
    {
      id: 'SM1',
      scenario: 'Rush hour dengan 15 customer antri, lalu tiba-tiba ada 2 order komplain bersamaan. Anda mulai overwhelmed. Apa yang Anda lakukan?',
      options: [
        'Panic dan freeze, tidak tahu harus handle yang mana dulu',
        'Take a deep breath, prioritize, handle satu per satu dengan calm',
        'Marah ke customer karena terlalu demanding',
        'Tinggalkan semua dan istirahat dulu untuk calm down'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'SM2',
      scenario: 'Customer berteriak dan memarahi Anda di depan customer lain karena minumannya salah (meskipun bukan kesalahan Anda). Apa yang Anda lakukan?',
      options: [
        'Balas dengan nada tinggi untuk defend diri Anda',
        'Tetap calm, apologize untuk situasi, dan resolve issue secara profesional',
        'Cry atau emotional breakdown di depan customer',
        'Walk away dan suruh rekan kerja lain yang handle'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'SM3',
      scenario: 'Anda dapat feedback keras dari shift leader di tengah shift tentang performance. Anda merasa unfair dan emosi. Apa yang Anda lakukan?',
      options: [
        'Argue dengan shift leader saat itu juga di depan semua orang',
        'Simpan emosi, selesaikan shift dengan profesional, diskusikan di waktu yang tepat',
        'Nangis atau sulking sepanjang shift',
        'Quit on the spot karena merasa tidak dihargai'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'SM4',
      scenario: 'Ada masalah teknis (POS error, mesin rusak) dan semua serba salah di shift Anda. Customer mulai impatient. Apa yang Anda lakukan?',
      options: [
        'Keep composure, communicate clearly ke customer, tawarkan solusi alternatif',
        'Panic dan bilang "saya tidak tahu harus bagaimana"',
        'Blame teknologi di depan customer dan ikut frustrated',
        'Close toko sementara tanpa info jelas ke customer'
      ],
      correctBest: 'A',
      correctWorst: 'D'
    },
    {
      id: 'SM5',
      scenario: 'Anda punya masalah pribadi berat yang membuat mood Anda sangat down hari ini, tapi harus tetap kerja. Apa yang Anda lakukan?',
      options: [
        'Bawa emosi negatif ke pekerjaan dan tidak hide it',
        'Beri effort terbaik maintain profesionalisme meski struggling inside',
        'Cerita masalah pribadi ke setiap customer untuk venting',
        'Kerja dengan asal-asalan karena tidak mood'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'SM6',
      scenario: 'Anda salah buat 5 minuman berturut-turut dan shift leader mulai notice. Anda merasa pressure dan confident mulai turun. Apa yang Anda lakukan?',
      options: [
        'Give up dan bilang "saya tidak bisa, saya butuh break"',
        'Take a moment, reset mentally, focus, dan approach next order dengan lebih hati-hati',
        'Makin panic dan mistakes makin banyak',
        'Blame tools atau rekan kerja untuk cover kesalahan Anda'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'SM7',
      scenario: 'Customer extremely demanding dan terus request adjustment berkali-kali. Anda sudah mulai kesal. Apa yang Anda lakukan?',
      options: [
        'Tunjukkan rasa kesal melalui body language atau tone',
        'Maintain patience, fulfill request dengan positivity, set clear boundary jika perlu',
        'Sarcastically bilang "ada lagi yang mau diganti?"',
        'Tolak request berikutnya dengan alasan "sudah terlalu banyak"'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'SM8',
      scenario: 'Anda baru dapat kabar buruk melalui phone saat shift, dan Anda sangat emotional. Masih ada 2 jam lagi shift. Apa yang Anda lakukan?',
      options: [
        'Langsung pulang tanpa izin karena emergency',
        'Inform shift leader tentang situasi, minta izin atau adjustment jika memungkinkan',
        'Tetap kerja tapi dengan mood yang sangat terlihat buruk',
        'Mengunci diri di toilet dan menangis lama'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'SM9',
      scenario: 'Equipment malfunction membuat Anda harus work extra hard secara manual. Shift terasa 2x lebih berat. Apa yang Anda lakukan?',
      options: [
        'Komplain terus sepanjang shift ke siapa saja',
        'Accept situasi, adjust workflow, dan maintain quality dengan effort ekstra',
        'Decrease quality untuk maintain kecepatan',
        'Marah ke management karena equipment tidak proper'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'SM10',
      scenario: 'Anda dituduh melakukan kesalahan yang sebenarnya bukan Anda yang lakukan, dan situasinya cukup serius. Apa yang Anda lakukan?',
      options: [
        'Marah dan defensive, refuse dikaitkan dengan isu tersebut',
        'Tetap calm, klarifikasi dengan fakta, dan willing untuk investigate bersama',
        'Panic dan langsung bilang siapa yang salah meski tidak yakin',
        'Diam saja dan biarkan situasi berkembang sendiri'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'SM11',
      scenario: '3 customer komplain bersamaan tentang waiting time padahal Anda sudah maksimal. Anda mulai stress. Apa yang Anda lakukan?',
      options: [
        'Snap dan bilang "kalau tidak mau tunggu ya jangan order"',
        'Apologize, give realistic estimate, dan inform progress',
        'Ignore customer dan terus kerja tanpa communicate',
        'Cry karena merasa overwhelmed'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'SM12',
      scenario: 'Shift leader micromanage Anda sepanjang shift dan membuat Anda stress. Apa yang Anda lakukan?',
      options: [
        'Confront shift leader di tengah shift',
        'Tetap professional, selesaikan shift, lalu discuss secara pribadi',
        'Passive aggressive dengan deliberately kerja lambat',
        'Quit on the spot'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'SM13',
      scenario: 'Anda accidentally spill hot coffee ke tangan Anda saat rush hour. Anda kesakitan. Apa yang Anda lakukan?',
      options: [
        'Ignore pain dan terus kerja',
        'Handle first aid quickly, inform team, then continue with caution',
        'Dramatic reaction dan stop kerja completely',
        'Blame equipment atau situasi dengan loud'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'SM14',
      scenario: 'Manager tiba-tiba datang saat shift Anda sedang chaos. Anda merasa judged. Apa yang Anda lakukan?',
      options: [
        'Panic dan performance makin drop',
        'Stay focused, handle situation professionally, explain calmly jika ditanya',
        'Defensive dan bilang "ini bukan salah saya"',
        'Pretend everything is fine meskipun clearly chaos'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'SM15',
      scenario: 'Anda double-booked dan harus handle 2 tasks penting bersamaan. Apa yang Anda lakukan?',
      options: [
        'Panic dan tidak tahu mulai dari mana',
        'Quick assess priority, delegate jika bisa, communicate timeline',
        'Try to do both simultaneously dan hasil keduanya buruk',
        'Give up one task completely'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    }
  ],

  initiative: [
    {
      id: 'INI1',
      scenario: 'Anda notice bahwa banyak customer bertanya tentang WiFi password, tapi tidak ada signage yang jelas. Apa yang Anda lakukan?',
      options: [
        'Jawab setiap customer yang tanya, tidak lebih',
        'Suggest ke management untuk buat signage WiFi yang visible',
        'Tidak peduli karena bukan job desk Anda',
        'Complain ke rekan kerja bahwa customer annoying'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'INI2',
      scenario: 'Shift leader sedang tidak ada dan tiba-tiba ada situasi yang perlu quick decision. Anda staff paling senior di shift ini. Apa yang Anda lakukan?',
      options: [
        'Tidak mengambil keputusan apapun dan tunggu shift leader kembali',
        'Make best judgment call, take action, inform shift leader setelahnya',
        'Call shift leader berulang kali sampai dijawab',
        'Suruh staff lain yang decide karena Anda tidak mau tanggung jawab'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'INI3',
      scenario: 'Anda notice stock bahan mulai menipis padahal belum scheduled untuk restock. Apa yang Anda lakukan?',
      options: [
        'Biarkan dan tunggu sampai habis baru report',
        'Proaktif inform shift leader atau pic inventory untuk antisipasi',
        'Tidak peduli karena itu tanggung jawab orang lain',
        'Tunggu shift leader notice sendiri'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'INI4',
      scenario: 'Anda punya ide untuk improve workflow yang bisa save time, tapi belum pernah discuss dengan siapa-siapa. Apa yang Anda lakukan?',
      options: [
        'Langsung implement ide Anda tanpa izin',
        'Present ide ke shift leader atau team meeting dengan reasoning yang jelas',
        'Simpan ide untuk diri sendiri agar tetap terlihat paling efisien',
        'Mention casually tapi tidak serius push untuk implementasi'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'INI5',
      scenario: 'Customer reguler yang biasanya order Latte tiba-tiba coba Cappuccino dan terlihat tidak puas. Apa yang Anda lakukan?',
      options: [
        'Tidak peduli, customer yang harus tahu apa yang mereka suka',
        'Proaktif tanya feedback, dan suggest back to Latte atau alternatif lain',
        'Tunggu customer komplain baru action',
        'Bilang "makanya pesan Latte lagi aja"'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'INI6',
      scenario: 'Mesin grinder mulai terdengar aneh meski masih berfungsi. Anda khawatir akan rusak total. Apa yang Anda lakukan?',
      options: [
        'Ignore sampai benar-benar rusak baru report',
        'Langsung report ke shift leader untuk preventive maintenance',
        'Coba perbaiki sendiri meski tidak punya expertise',
        'Tunggu rekan kerja lain yang notice dan report'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'INI7',
      scenario: 'Tidak ada yang assign untuk training staff baru, dan Anda notice dia terlihat lost. Apa yang Anda lakukan?',
      options: [
        'Bukan tanggung jawab Anda, biarkan dia figure out sendiri',
        'Proaktif approach dan guide meski tidak diminta',
        'Wait until diminta tolong baru bantu',
        'Complain ke shift leader bahwa tidak ada yang training staff baru'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'INI8',
      scenario: 'Anda notice customer area sangat berantakan (tissue berserakan, piring kotor banyak) tapi bukan tanggung jawab shift Anda saat ini. Apa yang Anda lakukan?',
      options: [
        'Biarkan karena ada PIC khusus untuk area tersebut',
        'Ambil inisiatif bersihkan karena berpengaruh ke customer experience',
        'Foto dan kirim ke grup untuk "expose" siapa yang tidak kerja',
        'Tunggu sampai ada komplain customer baru action'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'INI9',
      scenario: 'Menu board ada typo yang Anda notice, dan sudah beberapa customer bingung karena itu. Apa yang Anda lakukan?',
      options: [
        'Tidak peduli, bukan job desk Anda',
        'Langsung inform dan suggest untuk koreksi segera',
        'Tunggu customer komplain baru report',
        'Diam-diam perbaiki sendiri tanpa inform siapa-siapa'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'INI10',
      scenario: 'Anda punya waktu luang 15 menit saat shift sepi. Apa yang Anda lakukan?',
      options: [
        'Main phone dan istirahat',
        'Cari pekerjaan produktif: restock, prep, cleaning, atau improve area kerja',
        'Ngobrol santai dengan rekan kerja',
        'Keluar sebentar untuk break tidak resmi'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'INI11',
      scenario: 'Anda notice ada new product dari competitor yang interesting. Apa yang Anda lakukan?',
      options: [
        'Ignore, tidak relevant',
        'Research dan share insights ke team/management untuk potential improvement',
        'Keep info untuk diri sendiri',
        'Just mention casually tanpa follow up'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'INI12',
      scenario: 'Customer suggest improvement untuk service. Apa yang Anda lakukan?',
      options: [
        'Bilang "thanks" dan lupakan',
        'Note down dan forward ke management dengan analysis',
        'Defensive explain kenapa current way is better',
        'Agree tapi tidak take any action'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'INI13',
      scenario: 'Anda realize ada cara yang bisa speed up closing procedure. Apa yang Anda lakukan?',
      options: [
        'Keep untuk diri sendiri agar Anda always finish first',
        'Share dengan team dan propose untuk SOP update',
        'Gunakan sendiri tapi jangan share',
        'Mention tapi tidak elaborate'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'INI14',
      scenario: 'Social media trends berubah dan Anda notice shop content sudah outdated. Apa yang Anda lakukan?',
      options: [
        'Not your problem',
        'Compile trend analysis dan suggest content ideas ke marketing',
        'Just think about it tapi tidak action',
        'Complain bahwa marketing tidak update'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'INI15',
      scenario: 'Anda attend workshop di luar dan dapat insight bagus. Apa yang Anda lakukan?',
      options: [
        'Simpan knowledge untuk diri sendiri',
        'Organize sharing session dengan team',
        'Mention briefly tapi tidak comprehensive',
        'Wait until ditanya baru share'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    }
  ],

  accountability: [
    {
      id: 'ACC1',
      scenario: 'Anda salah kasi order ke customer yang salah, dan customer di meja sebelah jadi ketahuan menerima order yang salah juga. Chaos. Shift leader tanya apa yang terjadi. Apa yang Anda katakan?',
      options: [
        'Saya salah track table number, saya akan lebih careful dan system check next time',
        'Mejanya nggak ada nomor yang jelas, susah track',
        'Customer-nya yang nggak bilang kalo itu bukan ordernya',
        'Ramai sih jadi saya bingung'
      ],
      correctBest: 'A',
      correctWorst: 'C'
    },
    {
      id: 'ACC2',
      scenario: 'Shift leader kasih feedback bahwa latte art Anda masih belum konsisten. Apa yang Anda lakukan?',
      options: [
        'Defensive: "tapi kan customer nggak komplain"',
        'Terima feedback, minta tips, dan commit untuk latihan lebih',
        'Ignore feedback dan tetap dengan cara lama',
        'Argue bahwa latte art tidak sepenting rasa'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'ACC3',
      scenario: 'Anda baru 2 minggu kerja dan masih sering salah, shift leader mulai terlihat frustrated. Apa yang Anda lakukan?',
      options: [
        'Quit karena merasa tidak cocok',
        'Proaktif minta training tambahan atau mentoring, show commitment untuk improve',
        'Diam saja dan berharap performa akan improve sendiri',
        'Blame kurangnya training yang proper'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'ACC4',
      scenario: 'Customer komplain rasa kopinya tidak konsisten setiap kali order. Anda salah satu barista yang sering handle. Apa respons Anda?',
      options: [
        'Mungkin lidah customer yang berubah-ubah',
        'Terima feedback, evaluate brewing parameter, dan commit konsistensi lebih baik',
        'Emang begini standard-nya kok',
        'Komplain ke barista lain juga dong, bukan saya doang'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'ACC5',
      scenario: 'Anda lupa mengerjakan closing checklist dan shift pagi complain karena harus ngerjain yang seharusnya sudah selesai. Apa yang Anda lakukan?',
      options: [
        'Bilang "kemarin terlalu capek jadi lupa"',
        'Minta maaf dengan tulus, terima responsibility, dan pastikan tidak terulang',
        'Blame shift leader yang tidak remind',
        'Emang nggak terlalu penting juga kan'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'ACC6',
      scenario: 'Anda dapat hasil evaluasi performance yang kurang memuaskan di beberapa area. Apa yang Anda lakukan?',
      options: [
        'Merasa down dan demotivated',
        'Buat action plan konkret untuk improve area yang lemah, minta support jika perlu',
        'Argue bahwa evaluasi tidak fair',
        'Tidak peduli dan tetap kerja seperti biasa'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'ACC7',
      scenario: 'Rekan kerja junior tanya "kenapa cara kamu begini?" dengan nada ingin belajar. Apa yang Anda lakukan?',
      options: [
        'Udah gini aja, nanti juga ngerti sendiri',
        'Explain dengan sabar reasoning dan best practice, encourage untuk tanya lebih',
        'Kalo nggak percaya, tanya shift leader aja',
        'Tersinggung dan merasa disrespect'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'ACC8',
      scenario: 'Anda salah schedule dan ternyata shift Anda hari ini, bukan besok. Anda telat 30 menit. Apa yang Anda lakukan?',
      options: [
        'Bilang ada traffic atau alasan lain',
        'Jujur akui salah lihat schedule, minta maaf, dan pastikan tidak terulang',
        'Tidak kasih explanation dan langsung kerja saja',
        'Blame sistem scheduling yang confusing'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'ACC9',
      scenario: 'Ada new method/SOP yang introduced tapi Anda merasa cara lama lebih baik. Apa yang Anda lakukan?',
      options: [
        'Tetap pakai cara lama karena Anda lebih comfortable',
        'Try new method dengan open mind, evaluate objectively, kasih feedback konstruktif jika perlu',
        'Complain ke semua orang bahwa new method buruk',
        'Follow new method tapi with reluctance yang obvious'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'ACC10',
      scenario: 'Customer kasih compliment ke shift leader tentang service Anda. Shift leader share ke Anda. Apa respons Anda?',
      options: [
        'Ya emang saya yang paling bagus di sini',
        'Terima compliment dengan humble dan appreciate, gunakan sebagai motivasi untuk konsisten',
        'Ah biasa aja kok, customer itu lebay',
        'Tidak respons apa-apa karena awkward'
      ],
      correctBest: 'B',
      correctWorst: 'A'
    },
    {
      id: 'ACC11',
      scenario: 'Anda realize Anda yang cause inventory discrepancy. Apa yang Anda lakukan?',
      options: [
        'Stay silent dan hope nobody finds out',
        'Immediately report dan explain what happened',
        'Fix it quietly tanpa inform anyone',
        'Blame pada sistem atau orang lain'
      ],
      correctBest: 'B',
      correctWorst: 'D'
    },
    {
      id: 'ACC12',
      scenario: 'Anda promise customer untuk follow up tapi kemudian lupa. Customer datang lagi dan tanya. Apa yang Anda lakukan?',
      options: [
        'Pretend you did tapi tidak ada update',
        'Apologize genuinely, explain honestly, dan handle immediately',
        'Blame workload atau staff lain',
        'Say you\'ll do it now tapi still not prioritize'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'ACC13',
      scenario: 'Training yang Anda ikuti ternyata tidak applicable di situation real. Manager tanya how was it. Apa yang Anda lakukan?',
      options: [
        'Bilang bagus meskipun tidak berguna',
        'Honest feedback dengan constructive suggestions',
        'Komplain habis-habisan tanpa solusi',
        'Say it was fine tapi private complain ke colleagues'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'ACC14',
      scenario: 'Anda given additional responsibility tapi realize you cannot handle. Apa yang Anda lakukan?',
      options: [
        'Accept dan struggle in silence',
        'Communicate early, discuss realistic scope atau timeline',
        'Accept tapi deliver poor quality',
        'Accept tapi delegate tanpa permission'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    },
    {
      id: 'ACC15',
      scenario: 'Anda notice own performance dropping tapi belum ada yang comment. Apa yang Anda lakukan?',
      options: [
        'Wait until someone notices',
        'Proactive self-assess dan seek guidance',
        'Hope it fixes itself',
        'Blame external factors'
      ],
      correctBest: 'B',
      correctWorst: 'C'
    }
  ]
};