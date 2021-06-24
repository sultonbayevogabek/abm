const data = [
   {
      menu: ['Биз ҳақимизда', 'Сервислар', 'Нега айнан биз?', 'Ҳамкорлар', 'Алоқа'],
      intro: {
         h1: 'Биз сизнинг фойдангиз учун таржима қиламиз.',
         p: 'Ҳозирни ўзида бизга ёзма ёки аудио таржима буюртиринг ва  20% чегирмага эга бўлинг',
         a: 'Буюртма бериш'
      },
      about: {
         h2: 'Биз ҳақимизда',
         p: '«ABM INNOVATSIYA INVEST», 2015- йилдан буён таржима хизматлари бозорида фаолият юритиб келмоқда. Биз таклиф этаётган хизматлар қаторига юқори малакали ёзма, оғзаки ва кетма-кет ва синхрон таржима, таржима қилинган ҳужжатларни нотариал тасдиқлаш, уларни қонунийлаштириш / апостилизация (Адлия вазирлиги, Ташқи ишлар вазирлиги, элчихоналарида)  тасдиқлаш киради.'
      },
      services: {
         h2: 'Сервислар',
         cards: [
            {
               h3: 'Шахсий ҳужжатлар',
               p: 'Шахсий ҳужжатларни (паспорт, диплом, аттестат ва х.к.) бир тилдан бошқа тилга таржима қилиш.',
               a: 'Буюртма бериш'
            },
            {
               h3: 'В2В таржима'
            },
            {
               h3: 'Сайтларни таржима қилиш'
            },
            {
               h3: 'Тезкор таржима'
            },
            {
               h3: 'В2С таржималар',
            },
            {
               h3: 'Хужжатларни тиклаш',
            }
         ]
      },
      whyWe: {
         h2: 'Нега айнан биз?',
         list: [
            {
               h3: 'Тажрибали таржимонлар',
               p: 'Бизнинг барча таржимонларимиз ўз тилларини муккаммал билишади ва бу соҳада катта тажрибага егадир'
            },
            {
               h3: 'Қулай нархлар',
               p: 'Бизда хизмат ҳаққи сиз ўйлаганингиздан анча арзон!'
            },
            {
               h3: 'Қисқа вақт ичида хизмат кўрсатиш',
               p: 'Бизда хизмат сифати билан бирга тезликка ҳам алоҳида эътибор қаратилади'
            },
            {
               h3: 'Сифатли таржималар',
               p: 'Таржима сифатига ва даражасига 100% кафолат берамиз'
            },
            {
               h3: 'Етказиб бериш хизмати',
               p: 'Тайёр бўлган таржималарни уйингизга етказиб ҳам берамиз'
            }
         ]
      },
      trustedCompanies: {
         h2: 'Бизга ишонч билдирган компаниялар',
         list: [
            {
               logo: 'https://banner2.cleanpng.com/20180502/twq/kisspng-mitsubishi-corporation-company-subsidiary-mitsubis-mitsubishi-motors-5aea28acbb72a3.6889878015252952767678.jpg',
               webSite: 'https://www.mitsubishicorp.com/'
            },
            {
               logo: 'https://www.developmentaid.org/files/organizationLogos/tokyo-electric-power-services-co-ltd-tepsco-44112.jpg',
               webSite: 'http://www.tepsco.co.jp/english/index.html'
            },
            {
               logo: 'https://turonbank.uz/bitrix/templates/main/img/header__logo.svg',
               webSite: 'https://turonbank.uz/'
            },
            {
               logo: 'https://static.tildacdn.com/tild3661-3238-4837-b961-393964323931/photo_2021-02-18_11-.png',
               webSite: 'https://zizi-uz.all.biz/'
            }
         ]
      },
      feedback: {
         h2: 'Биз хакимизда мижозларнинг фикрлари',
         list: [
            {
               author: 'Санжар Норматов',
               companyName: 'Mitsubishi Corporation',
               text: '«ABM INNOVATSIYA INVEST», - ҳар доим энг қисқа вақт ичида бажарилган ишларнинг ишончли ва сифатли натижасидир. Мен агентлик билан 5 йилдан кўпроқ вақт давомида ишлаб келаяпман. Тавсия этаман.'
            },
            {
               author: 'Бобур Мухаммедов',
               companyName: 'TEPSCO',
               text: 'Босиқ, мулойим ва тезкор ходимлар! Мен бир неча йилдан буён уларнинг хизматларидан фойдаланаман ва ҳар сафар уларнинг мижозларга муносабатидан мамнун бўламан! Бундай иш учун уларга катта раҳмат!'
            },
            {
               author: 'Азизмирза Умедов',
               companyName: 'JELEGUM GOLD SERVICE',
               text: 'Бу биринчи навбатда мижозларга йўналтирилган ва мижознинг сўровини қондириш ва уни профессионал даражада бажариш учун ўз фаолиятига устувор аҳамият берадиган Тошкентдаги кам сонли агентликлардан биридир! Мен ходимларнинг ишидан ич ичимдан ҳайратландим ва натижадан мамнунман'
            }
         ]
      },
      faq: {
         h2: 'Кўп бериладиган саволлар',
         list: [
            {
               question: 'Қайси тилларда таржима ишларини олиб борасизлар?',
               answer: 'Ўзбек тили, Рус тили, Инглиз тили, Немис тили, Француз тили, Испан тили, Тожик тили, Хитой тили, Япон тили'
            }
         ]
      },
      contactUs: {
         h3: 'Бизнинг менежерларимиз сиз билан боғланишини хоҳласангиз ҳозирни ўзида пастдаги шаклни тўлдиринг',
         name: 'Исмингиз',
         phone: 'Телефон рақамингиз',
         send: 'Жўнатиш'
      }
   },
   {
      menu: ['Biz haqimizda', 'Servislar', 'Nega aynan biz?', 'Hamkorlar', 'Aloqa'],
      intro: {
         h1: 'Biz sizning foydangiz uchun tarjima qilamiz.',
         p: 'Hozirni o‘zida bizga yozma yoki audio tarjima buyurtiring va  20% chegirmaga ega bo‘ling.',
         a: 'Buyurtma berish'
      },
      about: {
         h2: 'Biz haqimizda',
         p: '«ABM INNOVATSIYA INVEST», MChJ 2015- yildan buyon tarjima xizmatlari bozorida faoliyat yuritib kelmoqda. Biz taklif etayotgan xizmatlar qatoriga yuqori malakali yozma, og\'zaki va ketma-ket va sinxron tarjima, tarjima qilingan hujjatlarni notarial tasdiqlash, ularni qonuniylashtirish / apostilizatsiya (Adliya vazirligi, Tashqi ishlar vazirligi, elchixonalarida) tasdiqlash kiradi.'
      },
      services: {
         h2: 'Servislar',
         cards: [
            {
               h3: 'Shaxsiy hujjatlar',
               p: 'Shaxsiy hujjatlarni (pasport, diplom, attestat va h.k.) bir tildan boshqa tilga tarjima qilish',
               a: 'Buyurtma berish'
            },
            {
               h3: 'В2В tarjima'
            },
            {
               h3: 'Saytlarni tarjima qilish'
            },
            {
               h3: 'Tezkor tarjima'
            },
            {
               h3: 'В2С tarjimalar'
            },
            {
               h3: 'Hujjatlarni tiklash',
            }
         ]
      },
      whyWe: {
         h2: 'Nega aynan biz?',
         list: [
            {
               h3: 'Tajribali tarjimonlar',
               p: 'Bizning barcha tarjimonlarimiz o‘z tillarini mukkammal bilishadi va bu sohada katta tajribaga egadir'
            },
            {
               h3: 'Qulay narxlar',
               p: 'Bizda xizmat haqqi siz o‘ylaganingizdan ancha arzon!'
            },
            {
               h3: 'Qisqa vaqt ichida xizmat ko`rsatish',
               p: 'Bizda xizmat sifati bilan birga tezlikka ham alohida e`tibor qaratiladi'
            },
            {
               h3: 'Sifatli tarjimalar',
               p: 'Tarjima sifatiga va darajasiga 100% kafolat beramiz'
            },
            {
               h3: 'Yetkazib berish xizmati',
               p: 'Tayyor bo‘lgan tarjimalarni uyingizga yetkazib ham beramiz'
            }
         ]
      },
      trustedCompanies: {
         h2: 'Bizga ishonch bildirgan kompaniyalar',
         list: [
            {
               logo: 'https://banner2.cleanpng.com/20180502/twq/kisspng-mitsubishi-corporation-company-subsidiary-mitsubis-mitsubishi-motors-5aea28acbb72a3.6889878015252952767678.jpg',
               webSite: 'https://www.mitsubishicorp.com/'
            },
            {
               logo: 'https://www.developmentaid.org/files/organizationLogos/tokyo-electric-power-services-co-ltd-tepsco-44112.jpg',
               webSite: 'http://www.tepsco.co.jp/english/index.html'
            },
            {
               logo: 'https://turonbank.uz/bitrix/templates/main/img/header__logo.svg',
               webSite: 'https://turonbank.uz/'
            },
            {
               logo: 'https://static.tildacdn.com/tild3661-3238-4837-b961-393964323931/photo_2021-02-18_11-.png',
               webSite: 'https://zizi-uz.all.biz/'
            }
         ]
      },
      feedback: {
         h2: 'Biz haqimizda mijozlarning fikrlari',
         list: [
            {
               author: 'Sanjar Normatov',
               companyName: 'Mitsubishi Corporation',
               text: '«ABM INNOVATSIYA INVEST», - har doim eng qisqa vaqt ichida bajarilgan ishlarning ishonchli va sifatli natijasidir. Men agentlik bilan 5 yildan ko\'proq vaqt davomida ishlab kelayapman. Tavsiya etaman.'
            },
            {
               author: 'Bobur Muxammedov',
               companyName: 'TEPSCO',
               text: '«ABM INNOVATSIYA INVEST», - har doim eng qisqa vaqt ichida bajarilgan ishlarning ishonchli va sifatli natijasidir. Men agentlik bilan 5 yildan ko\'proq vaqt davomida ishlab kelayapman. Tavsiya etaman.'
            },
            {
               author: 'Azizmirza Umedov',
               companyName: 'JELEGUM GOLD SERVICE',
               text: 'Bu birinchi navbatda mijozlarga yo\'naltirilgan va mijozning so\'rovini qondirish va uni professional darajada bajarish uchun o\'z faoliyatiga ustuvor ahamiyat beradigan Toshkentdagi kam sonli agentliklardan biridir! Men xodimlarning ishidan ich ichimdan hayratlandim  va natijadan mamnunman.'
            }
         ]
      },
      faq: {
         h2: 'Ko‘p beriladigan savollar',
         list: [
            {
               question: 'Qaysi tillarda tarjima ishlarini olib borasizlar?',
               answer: 'O`zbek tili, Rus tili, Ingliz tili, Nemis tili, Fransuz tili, Ispan tili, Tojik tili, Xitoy tili, Yapon tili'
            }
         ]
      },
      contactUs: {
         h3: 'Bizning menejerlarimiz siz bilan bog‘lanishini xohlasangiz hozirni o‘zida pastdagi shaklni to‘ldiring.',
         name: 'Ismingiz',
         phone: 'Telefon raqamingiz',
         send: 'Jo`natish'
      }
   },
   {
      menu: ['О нас', 'Сервисы', 'Почему именно мы?', 'Партнеры', 'Контакты'],
      intro: {
         h1: 'Мы переводим для Вашей пользы.',
         p: 'Закажите нам письменный или аудио перевод прямо сейчас и получите скидку 20 %.',
         a: 'Заказ'
      },
      about: {
         h2: 'О нас',
         p: '«ABM INNOVATION INVEST» работает на рынке переводческих услуг с 2015 года. Услуги, которые мы предлагаем, включают в себя высококвалифицированный письменный, устный, последовательный и синхронный перевод, нотариальное заверение переведенных документов, их легализацию / апостилирование (в Министерстве юстиции, Министерстве иностранных дел, посольствах).'
      },
      services: {
         h2: 'Сервисы',
         cards: [
            {
               h3: 'Личные документы',
               p: 'Перевод личных документов (паспорт, диплом, аттестат и т.д.) с одного языка на другой.',
               a: 'Заказ'
            },
            {
               h3: 'Перевод В2В'
            },
            {
               h3: 'Перевод сайтов'
            },
            {
               h3: 'Быстрый перевод'
            },
            {
               h3: 'Переводы В2С'
            },
            {
               h3: 'Восстановление документов'
            }
         ]
      },
      whyWe: {
         h2: 'Почему именно мы?',
         list: [
            {
               h3: 'Опытные переводчики',
               p: 'Все наши переводчики свободно говорят на своем языке и имеют большой опыт работы в этой области.'
            },
            {
               h3: 'Доступные цены',
               p: 'Стоимость наших услуг намного дешевле, чем вы думаете!'
            },
            {
               h3: 'Краткосрочное обслуживание',
               p: 'Особое внимание мы уделяем не только качеству обслуживания, но и скорости'
            },
            {
               h3: 'Качественные переводы',
               p: 'Гарантируем 100% качество и уровень перевода.'
            },
            {
               h3: 'Служба доставки',
               p: 'Так же доставим готовые переводы к вам домой.'
            }
         ]
      },
      trustedCompanies: {
         h2: 'Компании, которые нам доверяют',
         list: [
            {
               logo: 'https://banner2.cleanpng.com/20180502/twq/kisspng-mitsubishi-corporation-company-subsidiary-mitsubis-mitsubishi-motors-5aea28acbb72a3.6889878015252952767678.jpg',
               webSite: 'https://www.mitsubishicorp.com/'
            },
            {
               logo: 'https://www.developmentaid.org/files/organizationLogos/tokyo-electric-power-services-co-ltd-tepsco-44112.jpg',
               webSite: 'http://www.tepsco.co.jp/english/index.html'
            },
            {
               logo: 'https://turonbank.uz/bitrix/templates/main/img/header__logo.svg',
               webSite: 'https://turonbank.uz/'
            },
            {
               logo: 'https://static.tildacdn.com/tild3661-3238-4837-b961-393964323931/photo_2021-02-18_11-.png',
               webSite: 'https://zizi-uz.all.biz/'
            }
         ]
      },
      feedback: {
         h2: 'Отзывы клиентов о нас',
         list: [
            {
               author: 'Санжар Норматов',
               companyName: 'Mitsubishi Corporation',
               text: '«ABM INNOVATSIYA INVEST» - всегда надежный и качественный результат работы, выполненной в кратчайшие сроки. Я работаю с агентством более 5 лет. Рекомендую.'
            },
            {
               author: 'Бобур Мухаммедов',
               companyName: 'TEPSCO',
               text: 'Сдержанный, вежливый и оперативный персонал! Я пользуюсь их услугами уже несколько лет и каждый раз получаю удовольствие от их отношения к клиентам! Большое им спасибо за такую работу!'
            },
            {
               author: 'Азизмирза Умедов',
               companyName: 'JELEGUM GOLD SERVICE',
               text: 'Это одно из немногих агентств в Ташкенте, которое в первую очередь ориентировано на клиента и уделяет приоритетное внимание своей деятельности, чтобы удовлетворить запрос клиента и выполнить его на профессиональном уровне! Я внутренне впечатлен работой сотрудников и доволен результатом.'
            }
         ]
      },
      faq: {
         h2: 'Часто задаваемые вопросы',
         list: [
            {
               question: 'На каких языках Вы выполняете работу по переводу.',
               answer: 'Узбекский язык, Русский язык, Английский язык, Немецкий язык, Французский язык, Испанский язык, Таджикский язык, Китайский язык, Японский язык'
            }
         ]
      },
      contactUs: {
         h3: 'Если Вы хотите, чтобы наши менеджеры связались с Вами, заполните форму ниже прямо сейчас.',
         name: 'Ваше имя',
         phone: 'Ваш номер телефона',
         send: 'Отправка'
      }
   },
   {
      menu: ['About us', 'Services', 'Why us?', 'Partners', 'Contacts'],
      intro: {
         h1: 'We translate for your benefit.',
         p: 'Order a written or audio translation now and get a 20% discount.',
         a: 'Order'
      },
      about: {
         h2: 'About us',
         p: '"ABM INNOVATION INVEST" has been working on the translation services market since 2015. The services we offer include highly qualified translation, interpretation, consecutive and simultaneous interpretation, notarial certification of translated documents, legalization / apostille (at the Ministry of Justice, the Ministry of Foreign Affairs, embassies).'
      },
      services: {
         h2: 'Services',
         cards: [
            {
               h3: 'Personal documents',
               p: 'Translation of personal documents (passport, diploma, certificate of secondary education, etc.) from one language to another',
               a: 'Order'
            },
            {
               h3: 'B2B translation'
            },
            {
               h3: 'Web-sites translation'
            },
            {
               h3: 'Rapid translation'
            },
            {
               h3: 'B2C translations'
            },
            {
               h3: 'Re-issue of documents'
            }
         ]
      },
      whyWe: {
         h2: 'Why us?',
         list: [
            {
               h3: 'Experienced translators',
               p: 'All our translators are fluent in their own language and have extensive experience in this field.'
            },
            {
               h3: 'Affordable prices',
               p: 'The cost of our services is much cheaper than you think!'
            },
            {
               h3: 'Short term service',
               p: 'We pay special attention not only to the quality of service, but also to speed.'
            },
            {
               h3: 'Quality translations',
               p: 'We guarantee 100% quality and level of translation.'
            },
            {
               h3: 'Delivery service',
               p: 'We will also deliver ready-made translations to your home.'
            }
         ]
      },
      trustedCompanies: {
         h2: 'Companies that trust us'
      },
      feedback: {
         h2: 'Customer feedback',
         list: [
            {
               author: 'Sanjar Normatov ',
               companyName: 'Mitsubishi Corporation',
               text: '“ABM INNOVATSIYA INVEST” it’s always a reliable and quality result of work done in the shortest possible time. I have been working with the agency for over 5 years. My recommendation'
            },
            {
               author: 'Bobur Mukhammedov',
               companyName: 'TEPSCO',
               text: 'Discreet, attentive and responsive staff! I have been resorting to their services for several years and every time I enjoy their attitude towards their customers! Many thanks for their work!'
            },
            {
               author: 'Azizmirza Umedov',
               companyName: 'JELEGUM GOLD SERVICE',
               text: 'This is one of the few agencies in Tashkent, which is primarily client-oriented and prioritizes its activities to meet the client’s request and fulfill it professionally! I am truly impressed with the work of the staff and pleased with the result.'
            }
         ]
      },
      faq: {
         h2: 'FAQs',
         list: [
            {
               question: 'What languages do you translate?',
               answer: 'Uzbek language, Russian language, English language, German language, French language, Spanish language, Tajik language, Chinese language, Japanese language'
            }
         ]
      },
      contactUs: {
         h3: 'If you want our managers to contact you, fill out the form below right now. ',
         name: 'Your name',
         phone: 'Your phone',
         send: 'Send'
      }
   }
]