// lib/copy.js
// Ainus tõeallikas KOGU nähtava teksti jaoks maandumislehel.
// Iga sõne, mida kasutaja ekraanil näeb, PEAB olema siin.

export const copy = {
  metadata: {
    title: "101 Isetehtud Burgerit | Digitaalne Retseptiraamat",
    description:
      "Digitaalne retseptiraamat isetehtud burgeritest. 101 lihtsat, mahlast ja maitseküllast retsepti, et saaksid kodus valmistada vastupandamatuid burgereid.",
  },

  promoBar: {
    text: "Eripakkumine piiratud ajaks",
    icon: "flame",
  },

  hero: {
    eyebrow: "Digitaalne retseptiraamat isetehtud burgeritest",
    headline: {
      pre: "101 isetehtud burgerit, millega",
      accent: "kõiki koduseid vaimustada",
    },
    subheadline:
      "Avasta lihtsad, mahlased ja ülimalt maitsvad retseptid, et teha kodus vastupandamatuid burgereid ilma liigse vaevata, raha raiskamata ja kiirtoidule toetumata.",
    paragraph:
      "Muuda iga toidukord eriliseks lihtsate ja maitsvate ideede abil, mida on ideaalne oma pere ja sõpradega jagada.",
    stats: [
      { value: "101", label: "maitsvat ideed" },
      { value: "Isetehtud", label: "restorani tasemel maitsega" },
    ],
    bullets: [
      "101 erinevat retsepti",
      "Mahlased ja lihtsalt valmivad burgerid",
      "Soodsad ja igapäevased koostisosad",
      "Maitsvad variandid veiseliha, kana ja muuga",
      "Ideaalsed lahendused õhtusöökideks ja koosviibimisteks",
      "Autentsed restoranimaitsega eined otse sinu köögist",
    ],
    cta: "TAHAN OMA 101 BURGERIT",
    trust: [
      { icon: "lock", text: "Kohene ligipääs" },
      { icon: "mail", text: "Saadetakse meilile" },
      { icon: "card", text: "Turvaline makse" },
    ],
    image: "/hero-mockup.webp",
    imageAlt: "Komplekt 101 Isetehtud Burgerit - Digiraamat",
    badge: "101 maitsvat ideed",
  },

  story: {
    eyebrow: "Maitsev toit ei pea alati tulema kuskilt väljast",
    headline: {
      pre: "Sa ei pea kodust lahkuma, et nautida",
      accent: "tõeliselt võrratut burgerit",
    },
    paragraphs: [
      {
        text: "Mõnikord pole probleemiks see, et meil pole kõht tühi... asi on hoopis selles, et puuduvad ideed, kuidas teha midagi mahlast, teistsugust ja sellist, mis paneks sind juurde küsima.",
        style: "default",
      },
      {
        text: "Kodus tehtud ja vastupandamatu maitsega",
        style: "bold-accent",
      },
    ],
    painsTitle: "Kui ideed või valikud puuduvad, juhtub järgmine:",
    pains: [
      "Teed alatasa ühte ja sama asja",
      "Koged tihti, et burgerid jäävad kuivaks või maitsetuks",
      "Ei tea, kuidas kastmeid, juustusid ja lisandeid õigesti kombineerida",
      "Tellid kiirtoitu, kuigi saaksid ise kodus midagi head valmistada",
      "Murrad pead, mida õhtusöögiks või nädalavahetusel lauale panna",
    ],
    bridge:
      "Erinevus seisneb selgetes retseptides, maitsvates kombinatsioonides ja lihtsates sammudes, tänu millele saab igast burgerist midagi erilist.",
    image: "/chef-hamburguesas.webp",
    imageAlt: "Serveerimiseks valmis isetehtud burger",
  },

  steps: {
    eyebrow: "Vaid 3 sammu koduse naudinguni",
    headline: {
      pre: "Lõpuks ometi on olemas lihtne viis valmistada",
      accent: "vastupandamatuid koduseid burgereid",
      post: "kogu perele",
    },
    subheadline:
      "Naudi mahlaseid, lihtsaid ja maitseküllaseid retsepte kodust lahkumata, asju keeruliseks ajamata ning alatasa üht ja sama kordamata.",
    paragraph:
      "Pead vaid valima retsepti, järgima paari lihtsat sammu ja nautima toitu, millest kõik tahavad veel ühte ampsu.",
    items: [
      {
        number: "01",
        title: "Vali burger igaks elujuhtumiks",
        body: "Kiirest argiõhtusöögist kuni nädalavahetuseni pere ringis – sul on maitsvaid ideid, et teha midagi uut ilma üle mõtlemata.",
      },
      {
        number: "02",
        title: "Valmista maitseküllaseid koduseid retsepte",
        body: "Järgi lihtsaid lihast, kanast, juustudest, kastmetest ja lisanditest koosnevaid kombinatsioone, et luua mahlaseid burgereid, millel on see õige kodune puudutus.",
      },
      {
        number: "03",
        title: "Naudi toitu, mis toob kõik kokku",
        body: "Serveeri kodus vastupandamatuid burgereid ja muuda iga toidukord suurepäraseks hetkeks, mida pere või sõpradega jagada.",
      },
    ],
    cta: "TAHAN OMA 101 BURGERIT",
    trust: [
      { icon: "lock", text: "Kohene ligipääs" },
      { icon: "mail", text: "Saadetakse meilile" },
      { icon: "card", text: "Turvaline makse" },
    ],
  },

  benefits: {
    eyebrow: "Rohkem maitset, vähem vaeva",
    headline: {
      pre: "Mis muutub, kui sul on",
      accent: "101 ideed",
      post: "kodus burgerite tegemiseks",
    },
    subheadline:
      "Lõpeta ühe ja sama asjaga improviseerimine ning muuda iga toidukord koduseks, maitsvaks ja lihtsalt jagatavaks elamuseks.",
    items: [
      {
        title: "Ideed ei saa kunagi otsa",
        body: "Sul on alati erinev retsept varnast võtta, et valmistada midagi maitsvat ilma liigse mõtlemiseta.",
        icon: "sparkles",
      },
      {
        title: "Erilisemad toidukorrad",
        body: "Muuda tavaline õhtusöök maitsvaks elamuseks, mida oma lähedastega jagada.",
        icon: "heart",
      },
      {
        title: "Rohkem maitset kodust lahkumata",
        body: "Valmista mahlaseid koduseid burgereid maitsekombinatsioonidega, mis meenutavad restorani.",
        icon: "home",
      },
      {
        title: "Vähem sekeldusi",
        body: "Lihtsad retseptid, kättesaadavad koostisosad ja selged juhised.",
        icon: "zap",
      },
      {
        title: "Valikud igaks olukorraks",
        body: "Kiirest õhtusöögist laisa nädalavahetuseni kodus või sõpradega koosviibimiseni.",
        icon: "users",
      },
      {
        title: "Lõpp isudele",
        body: "Kui sul tekib isu millegi hea järele, saad selle ise valmis teha, ilma et peaksid kullereid ootama.",
        icon: "utensils",
      },
    ],
    closing: {
      pre: "Selle raamatuga ei ole koduste burgerite tegemine enam igav, vaid see on lihtne viis",
      accent: "kõiki millegi tõeliselt maitsvaga rõõmustada.",
    },
  },

  features: {
    eyebrow: "Kõik vajalik, et tuua oma burgeritesse vaheldust",
    headline: {
      pre: "101 isetehtud burgerit, et muuta iga toidukord",
      accent: "vastupandamatuks",
    },
    subheadline:
      "Praktiline retseptiraamat mahlaste, mitmekesiste ja maitseküllaste burgerite valmistamiseks ilma stressita – valikuid leidub erinevatele maitsetele, hetkedele ja isudele.",
    items: [
      {
        emoji: "🍔",
        eyebrow: "Maitse järgi",
        title: "Burgerid igaks isuks",
        body: "Avasta klassikalisi, kreemiseid, krõbedaid, vürtsikaid, toekaid või kergemaid retsepte ning vali täpselt see, mille järele sul täna isu on.",
      },
      {
        emoji: "👨‍🍳",
        eyebrow: "Samm-sammult",
        title: "Lihtsad juhised",
        body: "Järgi kergeid juhiseid iga burgeri kokkupanekuks – pole vaja pimesi arvata koguseid, kombinatsioone või valmistamise järjekorda.",
      },
      {
        emoji: "🥬",
        eyebrow: "Koostisosad",
        title: "Erinevad toiduained ja kombinatsioonid",
        body: "Kasuta veiseliha, kana, juustusid, peekonit, köögivilju, seeni, avokaadot, hapukurki ja muid lisandeid, et luua uusi maitseid.",
      },
      {
        emoji: "🔥",
        eyebrow: "Rohkem maitset",
        title: "Kastmed ja erilised detailid",
        body: "Anna oma burgeritele rohkem iseloomu isetehtud kastmete, kreemiste määrete, BBQ, sinepi, vürtside ja just nende detailidega, mis loovad erinevuse.",
      },
      {
        emoji: "🏡",
        eyebrow: "Jagamiseks",
        title: "Ideed nädalavahetuseks ja pidudeks",
        body: "Valmista burgereid, mida on ideaalne perega jagada, sõpradele pakkuda või lihtsalt kodus veidi erilisema lõunasöögi raames nautida.",
      },
      {
        emoji: "🚚",
        eyebrow: "Ilma kullerita",
        title: "Rohkem maitset ilma tellimata",
        body: "Kustuta nälg kodus retseptidega, mis on rikkalikud, kodused ja palju rahuldustpakkuvamad kui suvaline kiirtoiduamps.",
      },
    ],
    cta: "TAHAN OMA 101 BURGERIT",
    trust: [
      { icon: "lock", text: "Kohene ligipääs" },
      { icon: "mail", text: "Saadetakse meilile" },
      { icon: "card", text: "Turvaline makse" },
    ],
  },

  carouselSection: {
    eyebrow: "Lihtsad retseptid koduseks nautimiseks",
    headline: {
      pre: "Maitsvad kodused burgerid",
      accent: "lihtsates ja praktilistes variantides",
    },
    images: [
      { src: "/carousel/slide-1.webp", alt: "Mahlane isetehtud burger puidust alusel" },
      { src: "/carousel/slide-2.webp", alt: "Burger peekoni ja sulatatud juustuga" },
      { src: "/carousel/slide-3.webp", alt: "Valik erinevaid isetehtud burgereid" },
      { src: "/carousel/slide-4.webp", alt: "Burgeri valmistamise protsess" },
    ],
    chips: [
      "KIIRESTI VALMIVAD",
      "SOODSAD KOOSTISOSAD",
      "KODUNE MAITSE",
      "IDEAALSED JAGAMISEKS",
    ],
    forYouTitle: "„101 Isetehtud Burgerit“ on sulle, kui:",
    forYou: [
      {
        title: "Tahad teha midagi maitsvat ilma suurema vaevata:",
        body: "kergesti jälgitavad retseptid, mis on loodud selleks, et saaksid teha super burgereid, ilma et peaksid tunde köögis veetma.",
      },
      {
        title: "Otsid kiireid ideid koduseks söömiseks:",
        body: "praktilised variandid päevadeks, mil tahad midagi maitsvat süüa, aga ei viitsi pikalt mõelda, mida süüa teha.",
      },
      {
        title: "Armastad oma pere või sõpru hellitada:",
        body: "mahlased, kodused ja väga maitsvad burgerid õhtusöökide, nädalavahetuste või pidude jagamiseks.",
      },
      {
        title: "Soovid vaheldust ilma keeruliste retseptideta:",
        body: "kombinatsioonid liha, kana, juustude, kastmete, köögiviljade ja lisanditega, et te ei sööks alati ühte ja sama asja.",
      },
      {
        title: "Eelistad kodust maitset kullerile:",
        body: "valmista kodus rikkalikke, praktilisi ja palju rahuldustpakkuvamaid burgereid alati, kui isu peale tuleb.",
      },
    ],
    cta: "TAHAN OMA 101 BURGERIT",
    trust: [
      { icon: "lock", text: "Kohene ligipääs" },
      { icon: "mail", text: "Saadetakse meilile" },
      { icon: "card", text: "Turvaline makse" },
    ],
    a11yPrev: "Eelmine retsept",
    a11yNext: "Järgmine retsept",
    a11yDot: "Mine retsepti juurde",
  },

  bonuses: {
    eyebrow: "Piiratud ajaga kaasas olevad boonused",
    headline: {
      pre: "Kui ostad",
      accent: "101 Isetehtud Burgerit",
      post: ", saad need kingitused kaasa",
    },
    intro:
      "Täiusta oma burgereid praktiliste juhenditega isetehtud kastmete valmistamiseks, mis viivad iga retsepti uuele tasemele.",
    items: [
      {
        badge: "🎁 BOONUS 1",
        title: "Isetehtud kastmete juhend",
        body: "Lihtsad retseptid kreemiste, BBQ, vürtsikate ja muidu maitsvate kastmete valmistamiseks, mis muudavad sinu burgerid veelgi paremaks.",
        priceLabel: "Tavahind:",
        priceValue: "Saadaval tasuta",
        image: "/bonuses/bono-salsas.webp",
        imageAlt: "Isetehtud kastmete juhend",
      },
      {
        badge: "🎁 BOONUS 2",
        title: "Isetehtud salatikastmete juhend",
        body: "Õpi valmistama praktilisi ja maitsvaid kastmeid, mis sobivad nii burgerite, friikartulite, salatite kui ka muude koduste roogade kõrvale.",
        priceLabel: "Tavahind:",
        priceValue: "Saadaval tasuta",
        image: "/bonuses/bono-aderezos.webp",
        imageAlt: "Isetehtud salatikastmete juhend",
      },
    ],
    outro: {
      pre: "Nende boonuste abil saad anda oma burgeritele selle lisamaitse, mis muudab ka täiesti tavalise retsepti",
      accent: "palju erilisemaks.",
    },
    cta: "TAHAN OMA 101 BURGERIT",
    trust: [
      { icon: "lock", text: "Kohene ligipääs" },
      { icon: "mail", text: "Saadetakse meilile" },
      { icon: "card", text: "Turvaline makse" },
    ],
  },

  recap: {
    eyebrow: "Kõik on kaasas üheainsa ligipääsuga",
    headline: {
      pre: "Kõik, mis sa saad, et valmistada",
      accent: "vastupandamatuid koduseid burgereid",
    },
    subheadline:
      "Põhiretseptiraamat pluss lisajuhendid, et täiendada oma burgereid maitseküllaste kastmete ja kombinatsioonidega.",
    paragraph: "Täna ei pea sa alustamiseks üle mõtlema",
    body: "Saad ligipääsu praktilisele retseptide ja ideede kogule, et valmistada mahlaseid, koduseid ja lihtsaid burgereid, koos lisamaterjalidega, mis annavad igale toidukorrale veelgi rohkem maitset.",
    highlight:
      "✨ Sisaldab peamist retseptiraamatut ja eriboonuseid, et viia oma kodused meistriteosed uuele tasemele",
    cta: "TAHAN OMA 101 BURGERIT",
    trust: [
      { icon: "lock", text: "Kohene ligipääs" },
      { icon: "mail", text: "Saadetakse meilile" },
      { icon: "card", text: "Turvaline makse" },
    ],
  },

  testimonials: {
    eyebrow: "Arvamused inimestelt, kes armastavad kodus süüa teha",
    headline: {
      pre: "Vaata, mida räägivad need, kes juba valmistavad",
      accent: "maitsvaid isetehtud burgereid",
    },
    subheadline:
      "Tõelised lood inimestelt, kes soovisid rohkem ideid, rohkem maitset ja erilisemaid toidukordi, ilma et peaksid alati kulleritele lootma.",
    items: [
      {
        name: "Maarja L.",
        role: "Teeb perele süüa",
        avatar: "/testimonials/avatar-1.webp",
        quote:
          "Mulle väga meeldis, sest ma ei tee enam iga kord ühesugust burgerit. Nüüd on mul ideid, kuidas teha neid kodus mitmekesisemalt ja palju maitsvamalt.",
      },
      {
        name: "Andres P.",
        role: "Ideaalne nädalavahetusteks",
        avatar: "/testimonials/avatar-2.webp",
        quote:
          "Kastmete ja lisandite kombinatsioonid on super. Minu burgerid on nüüd restoranimaitsega, aga tehtud minu enda köögis.",
      },
      {
        name: "Kadri R.",
        role: "Rohkem maitset ilma tellimata",
        avatar: "/testimonials/avatar-3.webp",
        quote:
          "Ostsin selle, sest tahtsin nii tihedast kiirtoidu tellimisest loobuda. Nüüd, kui meil tekib millegi sellise järele isu, teeme burgerid ise kodus.",
      },
      {
        name: "Jaan M.",
        role: "Lihtsad ja praktilised retseptid",
        avatar: "/testimonials/avatar-4.webp",
        quote:
          "Retsepte on nii lihtne jälgida. Sa ei pea olema mingi ekspert, valid lihtsalt idee ja hetkega ongi midagi maitsvat laual.",
      },
      {
        name: "Sofia K.",
        role: "Ideaalne koosviibimisteks",
        avatar: "/testimonials/avatar-5.webp",
        quote:
          "Mulle meeldis, et valikuid on igale maitsele. Tegime sõpradega burgeriõhtu ja absoluutselt kõik tahtsid veel ühte proovida.",
      },
    ],
    cta: "TAHAN OMA 101 BURGERIT",
    trust: [
      { icon: "lock", text: "Kohene ligipääs" },
      { icon: "mail", text: "Saadetakse meilile" },
      { icon: "card", text: "Turvaline makse" },
    ],
    starsAlt: "5 tärni 5-st",
  },

  finalCta: {
    eyebrow: "🔥 Eripakkumine piiratud ajaks",
    headline: {
      pre: "Hangi",
      accent: "101 Isetehtud Burgerit",
      post: "koos kaasasolevate boonustega",
    },
    subheadline:
      "Valmista kodus mahlaseid, lihtsaid ja uskumatult maitsvaid burgereid, kasutades praktilisi retsepte õhtusöökideks, nädalavahetusteks, pidudeks ja ootamatuteks isudeks.",
    badge: "🎁 Sisaldab retseptiraamatut + boonuskingitusi",
    productName: {
      pre: "101 Isetehtud",
      accent: "Burgerit",
    },
    productTagline:
      "Lihtsad, maitsvad ja praktilised retseptid, et valmistada restorani tasemel koduseid burgereid.",
    bullets: [
      "Põhiraamat 101 isetehtud burgeri ideega",
      "Klassikalised, kreemised, krõbedad, vürtsikad ja rikkalikud retseptid",
      "Variandid veiseliha, kana, juustu, peekoni, köögiviljade ja lisanditega",
      "Samm-sammult juhised toiduvalmistamiseks ilma stressita",
      "Boonus 1: Isetehtud kastmete juhend",
      "Boonus 2: Isetehtud salatikastmete juhend",
      "Ideed kiireteks õhtusöökideks, nädalavahetusteks ja sõpradega koosviibimisteks",
      "Kohene ligipääs digitaalsele raamatule",
    ],
    closing: {
      pre: "Ideaalne, kui tahad süüa maitsvalt, ilma et peaksid sõltuma kulleritest:",
      body: "sul on praktilised ideed mahlaste burgerite valmistamiseks kodus ja nende jagamiseks oma pere või sõpradega.",
    },
    priceOldLabel: "Enne:",
    priceOld: "29.90 €",
    priceNote: "Pakkumine kehtib täna",
    priceNow: "9.90",
    priceCurrency: "€",
    priceFooter: "Kohene digitaalne ligipääs põhitooteni ja kaasasolevate boonusteni.",
    urgency: "Viimased eksemplarid erihinnaga",
    discountPct: "67%",
    discountLabel: "SOODUSTUS",
    button: "JAH, MA TAHAN OMA 101 BURGERIT",
    trust: [
      { icon: "lock", text: "Turvaline makse" },
      { icon: "mail", text: "Ligipääs meili teel" },
      { icon: "zap", text: "Kohene kohaletoimetamine" },
    ],
    imageAlt: "Komplekt 101 Isetehtud Burgerit koos boonustega",
  },

  faq: {
    eyebrow: "Korduma kippuvad küsimused",
    headline: {
      pre: "Vastame su küsimustele enne, kui",
      accent: "koduste burgeritega pihta hakkad",
    },
    subheadline:
      "Siin on levinumad vastused retseptiraamatu, boonuste ja tootele ligipääsu kohta.",
    items: [
      {
        q: "Kuidas ma retseptid kätte saan?",
        a: "Pärast makse sooritamist saad digitaalse ligipääsu retseptidele sellele meiliaadressile, mida kasutasid ostu sooritamisel.",
      },
      {
        q: "Kas ma saan neid oma telefonist lugeda?",
        a: "Jah. Saad materjalidele ligi oma telefonist, tahvelarvutist või arvutist. Avamiseks on vaja vaid internetiühendust.",
      },
      {
        q: "Kas ma pean olema hea kokk?",
        a: "Ei. Retseptid on koostatud nii, et need oleksid lihtsad, praktilised ja arusaadavad isegi siis, kui sul pole köögis suuri kogemusi.",
      },
      {
        q: "Mida ost täpselt sisaldab?",
        a: "See sisaldab digitaalset põharaamatut „101 Isetehtud Burgerit“ ning eriboonuseid – juhendeid isetehtud kastmete ja salatikastmete tegemiseks.",
      },
      {
        q: "Kas retseptid on keerulised?",
        a: "Ei. Idee on selles, et saaksid kodus teha uskumatuid burgereid ilma raskete protsesside või võimatult leitavate koostisosadeta.",
      },
      {
        q: "Millal ma alustada saan?",
        a: "Võid alustada kohe, kui saad ligipääsu. Lihtsalt vali retsept välja ja järgi samme.",
      },
    ],
    cta: "TAHAN OMA 101 BURGERIT",
    trust: [
      { icon: "lock", text: "Turvaline makse" },
      { icon: "mail", text: "Kohene ligipääs" },
      { icon: "burger", text: "Boonused hinnas" },
    ],
  },

  closing: {
    eyebrow: "Alusta juba täna omaenda köögis",
    headline: {
      pre: "Valmista oma esimesed",
      accent: "isetehtud burgerid",
      post: "veel sel nädalal",
    },
    paragraph:
      "Hangi retseptiraamat, vali välja oma esimene burger ja muuda iga toidukord suurepäraseks hetkeks, mida teistega jagada.",
    cta: "TAHAN OMA 101 BURGERIT",
    whatsapp: "Kirjuta meile WhatsAppis",
    imageAlt: "Jagamiseks valmis isetehtud burger",
  },

  footer: {
    brand: "Crearis",
    tagline: "Digitaalne retseptiraamat isetehtud burgeritest",
    rightsPrefix: "©",
    rightsSuffix: "Crearis. Kõik õigused kaitstud.",
    disclaimer:
      "See sait ei ole seotud, assotsieeritud, heaks kiidetud ega sponsoreeritud Facebooki poolt, samuti pole Facebook seda mingil viisil kontrollinud, üle vaadanud, heaks kiitnud ega toetanud. Facebook on ettevõtte Meta Platforms, Inc. registreeritud kaubamärk.",
  },
};