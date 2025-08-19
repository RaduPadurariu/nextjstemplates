import { ShopMyProduct } from "@/app/(templates)/shop/types/shopTypes";

export const shopCurrency = [
  { id: 1, currency: "USD", sign: "$", coefficient: 1.153 },
  { id: 2, currency: "EUR", sign: "€", coefficient: 1 },
  { id: 3, currency: "GBP", sign: "£", coefficient: 0.867 },
];

export const shopNavLinks = [
  { id: 1, title: "Home", link: "/shop" },
  { id: 2, title: "Catalog", link: "/shop/catalog" },
  { id: 3, title: "Blog", link: "/shop/blog" },
  { id: 4, title: "Contact", link: "/shop/contact" },
  { id: 5, title: "Templates", link: "/" },
];

export const shopCategoryList = [
  {
    id: 1,
    title: "Gradinarit",
    slug: "gradinarit",
    subItem: [
      {
        id: 1,
        subCategory: "Iarba si gazon",
        slug: "iarba-si-gazon",
      },
      {
        id: 2,
        subCategory: "Pomicultura",
        slug: "pomicultura",
      },
      {
        id: 3,
        subCategory: "Agricultura",
        slug: "agricultura",
      },
      {
        id: 4,
        subCategory: "Zootehnie",
        slug: "zootehnie",
      },
      {
        id: 5,
        subCategory: "Plante si ghivece",
        slug: "plante-si-ghivece",
      },
    ],
  },
  {
    id: 2,
    title: "Electronica",
    slug: "electronica",
    subItem: [
      { id: 1, subCategory: "Electrice", slug: "electrice" },
      { id: 2, subCategory: "Retea", slug: "retea" },
    ],
  },
  {
    id: 3,
    title: "Mecanica",
    slug: "mecanica",
    subItem: [
      { id: 1, subCategory: "Instrumente", slug: "instrumente" },
      { id: 2, subCategory: "Accesorii", slug: "accesorii" },
    ],
  },
  {
    id: 4,
    title: "Constructii",
    slug: "constructii",
    subItem: [
      { id: 1, subCategory: "Betoane si zidarie", slug: "betoane-si-zidarie" },
      { id: 2, subCategory: "Placi si izolatie", slug: "placi-si-izolatie" },
      { id: 4, subCategory: "Tamplarie", slug: "tamplarie" },
      { id: 5, subCategory: "Varuit", slug: "varuit" },
      { id: 6, subCategory: "Vopseluri", slug: "vopseluri" },
    ],
  },
  {
    id: 5,
    title: "Intretinere casa",
    slug: "intretinere-casa",
    subItem: [
      { id: 1, subCategory: "Intretinere casa", slug: "intretinere-casa" },
      {
        id: 2,
        subCategory: "Siguranta si anti-daunatori",
        slug: "siguranta-si-anti-daunatori",
      },
      {
        id: 3,
        subCategory: "Iluminat si alimentare",
        slug: "iluminat-si-alimentare",
      },
      { id: 4, subCategory: "Sanitare", slug: "sanitare" },
    ],
  },
  {
    id: 7,
    title: "Auto",
    slug: "auto",
    subItem: [
      { id: 1, subCategory: "Consumabile", slug: "consumabile" },
      { id: 2, subCategory: "Echipamente", slug: "echipamente" },
    ],
  },
  {
    id: 8,
    title: "Kit supravietuire",
    slug: "kit-supravietuire",
    subItem: [
      { id: 1, subCategory: "Camping", slug: "camping" },
      { id: 2, subCategory: "Militare", slug: "militare" },
    ],
  },
];

export const shopFooterTabs = [
  {
    id: 1,
    heading: "ABOUT OUR COMPANY",
    desc: "The theme is the great choice to launched your e-commerce project. You can choose it not only for fashion business, it's also fitting for electronics, car, cosmetics, furniture and other e-stores. The main Zemez Template will be supporting and updating to all new technical requirements.",
    links: [],
  },
  {
    id: 2,
    heading: "INFORMATION",
    desc: "",
    links: [
      "About us",
      "Catalog",
      "Contact Us",
      "Collection",
      "Password",
      "Privacy Policy",
      "Blog",
    ],
  },
  {
    id: 3,
    heading: "MY ACCOUNT",
    desc: "",
    links: [
      "My Account",
      "Log in",
      "My Addresses",
      "My Orders",
      "Passwords",
      "Contact Us",
    ],
  },
  {
    id: 4,
    heading: "COLLECTIONS",
    desc: "",
    links: [
      "Abrasives",
      "Electrical",
      "Air Tools",
      "Construction",
      "Auto Repair",
      "Commercial Trucking",
      "Clothing",
    ],
  },
];

export const shopFeatures = [
  {
    id: 1,
    heading: "SSL CERTIFICATE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut justo vel lacus fermentum convallis. Suspendisse potenti. Aliquam erat volutpat.",
    icon: "fab fa-dropbox",
    src: "/images/icons/ssl.png",
  },
  {
    id: 2,
    heading: "MULTIPLE GATEWAYS",
    desc: "Curabitur finibus, libero id euismod tincidunt, sapien nulla hendrerit odio, sed euismod lacus felis sit amet orci. Nulla facilisi.",
    icon: "fa fa-thumbs-up",
    src: "/images/icons/gateways.png",
  },

  {
    id: 3,
    heading: "24/7 CUSTOMER SUPPORT",
    desc: "Praesent nec lectus id ipsum pharetra viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    icon: "fa fa-truck",
    src: "/images/icons/support.png",
  },

  {
    id: 4,
    heading: "CAN I TRACK MY ORDER?",
    desc: "Mauris vitae metus in urna aliquet accumsan. Nunc non tristique sapien. Fusce nec eros id velit dignissim bibendum eget non justo.",
    icon: "fa fa-shield",
    src: "/images/icons/track.png",
  },
];

// Carousel Products

export const shopHeroCarousel = [
  {
    id: 1,
    src: "/images/shop/Home/HeroCarousel1.png",
    title: "Stihl",
    desc: "Choose from a great selection",
  },
  {
    id: 2,
    src: "/images/shop/Home/HeroCarousel2.png",
    title: "Bosch",
    desc: "At ridiculously low prices",
  },
  {
    id: 3,
    src: "/images/shop/Home/HeroCarousel3.png",
    title: "Dewalt",
    desc: "Dewalt DCK955 18-VOLT xrp cordless",
  },
];

export const shopHeroProducts = [
  {
    id: 1,
    title: "Cordless",
    src: "/images/shop/Home/HeroProduct1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aenean commodo at semper enim.",
  },
  {
    id: 2,
    title: "Electricians",
    src: "/images/shop/Home/HeroProduct2.png",
    desc: "Nunc feugiat velit sed nisl congue, ac pulvinar urna cursus. Integer nec nulla at risus suscipit.",
  },
  {
    id: 3,
    title: "Power",
    src: "/images/shop/Home/HeroProduct3.png",
    desc: "In hac habitasse platea dictumst. Nullam vitae mauris sed arcu malesuada eleifend. Quisque feugiat turpis.",
  },
  {
    id: 4,
    title: "Hand",
    src: "/images/shop/Home/HeroProduct4.png",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

// Contact and account

export const shopAccountRegistrationList = [
  { id: 1, title: "Faster checkout" },
  { id: 2, title: "Save multiple shipping addresses" },
  { id: 3, title: "View and track orders and more" },
];

export const shopContactList = [
  {
    id: 1,
    icon: "fas fa-home",
    title: "ADDRESS",
    desc: "7563 St. Vicent Place, Glasgow",
  },
  {
    id: 2,
    icon: "fas fa-phone-volume",
    title: "PHONE",
    desc: "+09123 456 789",
  },
  {
    id: 3,
    icon: "fas fa-history",
    title: "HOURS",
    desc: "7 Days a week from 10:00 am to 6:00 pmt",
  },
  { id: 4, icon: "fas fa-laptop", title: "EMAIL", desc: "zemes@demolink.org" },
];

export const shopContactSocial = [
  { id: 1, icon: "fab fa-facebook-f", desc: "follow us on Facebook" },
  { id: 2, icon: "fab fa-twitter", desc: "Join us on twitter" },
  { id: 3, icon: "fab fa-instagram", desc: "follow us on instagram" },
  { id: 4, icon: "fab fa-youtube", desc: "subscribe us on youtube" },
];

// Blog

export const shopBlogData = [
  {
    slug: "non-moderno-harum-class-est-virtute-quo-augue-sint-ipsa-pede",
    date: "Apr.11, 2017",
    longDate: "APRIL 11, 2017",
    heading: "Non moderno harum class est virtute quo augue sint ipsa pede",
    desc: "Quo praedam assum morbi dis atticas sed eodem lius modi quae. Se eum dis plenarie ulterioribus ut nobilitas agitur sed diminuationem propanendo. Per donec modo m class caduca si visibilem secuti hac diligenter ratione. Eum pernidem at eos class eum lius-proposui eum urna quos-spiritus.  Ex sem pactum te lacus odit qui liuius septima eos id-diam temporibus. At non duis si esse quos humanitatis rem sed quaeque nec quorum credit 34/8 nominum crimen. Eu quam y morbi ornare mi mirabilia vacuus...",
    imgSrc: "/images/shop/Home/HomeBlog1.png",
    blogSrc: "/images/shop/Blog/Blog1.png",
    blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl sit amet justo tincidunt pretium. Vestibulum id turpis at lacus facilisis pulvinar. Proin facilisis lorem a pulvinar accumsan. Ut quis augue nec odio lacinia luctus.

Morbi dapibus, mauris nec dapibus varius, neque magna porta neque, nec luctus est libero nec eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer sed sapien sed leo accumsan efficitur.

Integer sed sapien sed leo accumsan efficitur. Nulla facilisi. Vivamus vitae sapien sapien.`,
    tags: [
      { id: 1, name: "Abrasives" },
      { id: 2, name: "Garden tools" },
      { id: 3, name: "Hammers" },
      { id: 4, name: "Hand tools" },
      { id: 5, name: "Polishers" },
      { id: 6, name: "Specials" },
    ],
    comments: [
      {
        id: 1,
        author: "Bill",
        date: "Tuesday, April 11, 2017 — 05:08 AM",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus fermentum, nulla ut facilisis cursus, odio sem posuere nisi, nec pretium ipsum magna a nunc. In hac habitasse platea dictumst. Integer vel sapien at velit feugiat tincidunt. Nulla facilisi. Aenean ut nisl ac turpis sollicitudin sagittis.",
      },
      {
        id: 2,
        author: "Bill",
        date: "Tuesday, April 11, 2017 — 05:08 AM",
        comment:
          "Lorem ipsum dolor sit amet! Nulla facilisi. Curabitur vel lorem eget nibh cursus lacinia. Pellentesque et velit eget justo laoreet placerat. Aliquam erat volutpat. Donec ut mauris a libero feugiat accumsan. Proin rutrum, turpis sed tincidunt malesuada, sem risus ultrices nisl, sit amet finibus libero velit in ex. Sed fringilla metus sed nulla aliquet, sed pretium odio tincidunt.",
      },
    ],
  },
  {
    slug: "nec-purus-nunc-o-nobis-versus-in-nobilitas-nullum-septe",
    date: "Apr.11, 2017",
    longDate: "APRIL 11, 2017",
    heading: "Nec purus nunc o nobis versus in nobilitas nullum septe",
    desc: "Eos utramque si eum class eos nisi-induccre eos urna quam-antistes Cum quo eos est gravida ultimae error in p iste sequi. Eum carbone porro fusce est ferient mus porro wisi quia usus. Ab eum vel miseriae abdicationis te forlitudo capiat rem calculationem supponendo. Eum eorum modo y nobis cedere at ultimarie editur non sacrificio patriam. Me mordens amet commune inhumaniter fretum Eos eum sed est eventum occidit eodem in v nisl culpa Non gennere error netus est patitur sed rerum...",
    imgSrc: "/images/shop/Home/HomeBlog2.png",
    blogSrc: "/images/shop/Blog/Blog2.png",
    blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem vitae erat tincidunt placerat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit
2. Ut enim ad minima veniam, quis nostrum exercitationem ullam
3. Sed ut perspiciatis unde omnis iste natus error sit voluptatem

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero vitae tortor efficitur fringilla. Nulla facilisi. Pellentesque in neque ac justo vulputate volutpat. Morbi accumsan magna vel turpis finibus, nec tempor velit viverra. Ut at erat id leo sodales rhoncus. Proin bibendum, justo a tincidunt suscipit, leo elit dapibus urna, sed laoreet sem est id augue. Curabitur et ex nec nulla tincidunt volutpat nec sit amet purus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non libero ac turpis ultrices fermentum. Suspendisse potenti. Nulla facilisi. Duis eu erat sed nunc varius laoreet. Nam ac orci at risus lacinia lacinia. Aenean porta tincidunt purus, sed scelerisque ex fermentum ac. Curabitur a felis vel elit porttitor varius.`,
    tags: [
      { id: 1, name: "Accessories" },
      { id: 2, name: "Hammers" },
      { id: 3, name: "Hand tools" },
      { id: 4, name: "Power tools" },
      { id: 5, name: "Specials" },
    ],
    comments: [],
  },
  {
    slug: "quo-per-eos-dui-aemulos-ultimae-saepe-et-o-iste-netus",
    date: "Apr.11, 2017",
    longDate: "APRIL 11, 2017",
    heading: "Quo per eos dui aemulos ultimae saepe et o iste netus",
    desc: "Cum decessu saepe ipsum leo atticas mus assum sint modi modo Sed aegrotus si hac netus nam dis impetus instantanee id v ipsa nativitatis sed legationis. Ad vacuus sed sint nec donec arcu w omnis amorem at accelerare mus il si unde dicterium est est vestrorum. Per invehere quo dui sunt superstites bonarum ante modo maecenas occidas interim ita quae dis medicus cum ea sed modo - minus interest contignitate eos est quia generaliter. Iure typi regnum nisl nam adversa...",
    imgSrc: "/images/shop/Home/HomeBlog3.png",
    blogSrc: "/images/shop/Blog/Blog3.png",
    blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in tortor ac magna faucibus sollicitudin et at erat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo justo sed mi ultrices, nec fermentum sapien posuere. Nullam feugiat velit nec magna consequat, et malesuada erat iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id libero in libero sollicitudin accumsan. Vestibulum sed magna sed velit facilisis ultrices. Etiam sodales sapien at lorem eleifend, in cursus lacus tempor. Nulla facilisi. Integer ac lorem nec libero dignissim malesuada nec non risus. Sed blandit metus et felis fermentum, ut cursus lectus convallis.

Power tools
Hand tools
Garden tools
Specials
Accessories

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras feugiat, lorem a efficitur gravida, justo velit egestas odio, nec rutrum ex metus in risus. Praesent a nibh lorem. Duis sit amet nunc in augue tincidunt tristique sed sed odio. Curabitur porta sem at facilisis gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus magna a malesuada ultrices. Nulla facilisi.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque felis vel facilisis hendrerit. Cras consequat turpis sed nulla tristique, vel tincidunt orci pulvinar.`,
    tags: [
      { id: 1, name: "Abrasives" },
      { id: 2, name: "Accessories" },
      { id: 3, name: "Drills" },
      { id: 4, name: "Garden tools" },
      { id: 5, name: "Hammers" },
      { id: 6, name: "Hand tools" },
      { id: 7, name: "Polishers" },
      { id: 8, name: "Power tools" },
      { id: 9, name: "Specials" },
      { id: 10, name: "Welding supplies" },
    ],
    comments: [],
  },
  {
    slug: "nuncv-o-ante-si-odioo-hac-nisi-est-proino-tortor",
    date: "Apr.07, 2017",
    longDate: "APRIL 07, 2017",
    heading: "Nuncv o ante si odioo hac nisi est proino tortor",
    desc: "Orci, at vel ipsa quisque Sint fuga et est class. Est eros te hic sunt quos sem meritum, est duis quod nesciunt. Est dolore vitae ullam ab vinctas porro corpori quo magna o liber eaque eros. Quis Landem retitum nec s qualitates si quas mirabilia Diam montes nisl rem magni methodo, relicto omnis, elit mirum iustitiae lius justo murmurabant.Ad nec alias et iure se est nec, leo rem carbone Est noviciam me ualilate earum eu dui opponat iste at eget eum",
    imgSrc: "/images/shop/Home/HomeBlog4.png",
    blogSrc: "/images/shop/Blog/Blog4.png",
    blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed justo sit amet purus luctus suscipit. Sed egestas sapien nec felis semper, vitae vestibulum erat tincidunt. Curabitur ac augue ac eros gravida gravida. Vestibulum sagittis est nec dui volutpat, sed aliquet lorem blandit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
Ut enim ad minima veniam, quis nostrum exercitationem ullam.
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
Ut enim ad minima veniam, quis nostrum ullam corporis suscipit.
Quis autem vel eum iure reprehenderit qui in ea voluptate velit.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.
Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.
Et harum quidem rerum facilis est et expedita distinctio.`,
    tags: [
      { id: 1, name: "Accessories" },
      { id: 2, name: "Hand tools" },
      { id: 3, name: "Power tools" },
      { id: 4, name: "Specials" },
    ],
    comments: [],
  },
];

export const shopBlogRecentArticles = [
  {
    id: 1,
    title: "Non moderno harum class est virtute quo...",
    author: "David Braun",
    slug: "non-moderno-harum-class-est-virtute-quo-augue-sint-ipsa-pede",
  },
  {
    id: 2,
    title: "Nec purus nunc o nobis versus in...",
    author: "David Braun",
    slug: "nec-purus-nunc-o-nobis-versus-in-nobilitas-nullum-septe",
  },
  {
    id: 3,
    title: "Quo per eos dui aemulos ultimae saepe...",
    author: "David Braun",
    slug: "quo-per-eos-dui-aemulos-ultimae-saepe-et-o-iste-netus",
  },
  {
    id: 4,
    title: "Nuncv o ante si odioo hac nisi e...",
    author: "David Braun",
    slug: "nuncv-o-ante-si-odioo-hac-nisi-est-proino-tortor",
  },
];

export const shopBlogTags = [
  { id: 1, title: "Abrasives" },
  { id: 2, title: "Accessories" },
  { id: 3, title: "Drills" },
  { id: 4, title: "Garden tools" },
  { id: 5, title: "Hammers" },
  { id: 6, title: "Hand tools" },
  { id: 7, title: "Polishers" },
  { id: 8, title: "Power tools" },
  { id: 9, title: "Specials" },
  { id: 10, title: "Welding supplies" },
];

// Catalog

export const shopCatalogSidebarProducts = [
  {
    id: 1,
    title: "Black & Decker 71-91291 129...",
    price: "361.00",
    src: "/images/shop/Catalog/product1.avif",
  },
  {
    id: 2,
    title: "Black & Decker BDCDMT120 20...",
    price: "145.00",
    src: "/images/shop/Catalog/product2.avif",
  },
  {
    id: 3,
    title: "Black and Decker 20V Max Li...",
    price: "227.00",
    src: "/images/shop/Catalog/product3.avif",
  },
];

export const shopCatalogCollection = [
  { id: 1, title: "Abrasives" },
  { id: 2, title: "Air Compressors" },
  { id: 3, title: "Air Tools" },
  { id: 4, title: "Auto Repair" },
  { id: 5, title: "Batteries, Chargers" },
  { id: 6, title: "Buyer's Guides" },
  { id: 7, title: "Casters" },
  { id: 8, title: "Chain Saws" },
  { id: 9, title: "Cleaning Equipment" },
  { id: 10, title: "Clearance" },
  { id: 11, title: "Clothing" },
  { id: 12, title: "Commercial Trucking" },
  { id: 13, title: "Construction" },
  { id: 14, title: "Electrical" },
  { id: 15, title: "Renewable Energy" },
];

export const shopCatalogProductTypes = [
  { id: 1, title: "Accessories" },
  { id: 2, title: "Air Tools" },
  { id: 3, title: "Hand Tools" },
  { id: 4, title: "Plumbing Tools" },
  { id: 5, title: "Power Tools" },
];

export const shopItemsPerPageOptions = [
  { id: 1, value: 6, name: "6" },
  { id: 2, value: 9, name: "9" },
  { id: 3, value: 12, name: "12" },
];

// My products

export const shopMyProductsSortOptions = [
  {
    id: 1,
    name: "Best Selling",
    sortFunction: (a: ShopMyProduct, b: ShopMyProduct) =>
      a.id.localeCompare(b.id),
    value: "ID",
  },
  {
    id: 2,
    name: "Name: A - Z",
    sortFunction: (a: ShopMyProduct, b: ShopMyProduct) =>
      a.title.localeCompare(b.title),
    value: "nameAsc",
  },
  {
    id: 3,
    name: " Name: Z - A",
    sortFunction: (a: ShopMyProduct, b: ShopMyProduct) =>
      b.title.localeCompare(a.title),
    value: "nameDesc",
  },
  {
    id: 4,
    name: "Price: low to high",
    sortFunction: (a: ShopMyProduct, b: ShopMyProduct) =>
      (Number(a.price) ?? 0) - (Number(b.price) ?? 0),
    value: "priceAsc",
  },
  {
    id: 5,
    name: "Price: high to low",
    sortFunction: (a: ShopMyProduct, b: ShopMyProduct) =>
      (Number(b.price) ?? 0) - (Number(a.price) ?? 0),
    value: "priceDesc",
  },
];

export const shopMyProductList = [
  {
    id: "00.00.01",
    src: "/images/shop/Home/HomeProduct4.png",
    title: "DEWALT Bare-Tool DW059B",
    longTitle: "DEWALT Bare-Tool DW059B Drill Driver Kit with Extra Battery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer nec...",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 170.0,
    isInCart: false,
    category: "Offers",
    subCategory: "Tools",
  },

  {
    id: "00.00.02",
    src: "/images/shop/Home/HomeProduct5.png",
    title: "DEWALT DC970K-2 18-Volt Dri...",
    longTitle: "DEWALT DC970K-2 18-Volt Drill Driver Kit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer nec...",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 320.0,
    isInCart: false,
    category: "Offers",
    subCategory: "Tools",
  },
  {
    id: "00.00.03",
    src: "/images/shop/Home/HomeProduct1.png",
    title: "Black and Decker 20V Max Li...",
    longTitle: "Black and Decker 20V Max Lithium Ion 8-Inch Chain Saw",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer nec...",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Offers",
    subCategory: "Tools",
  },
  {
    id: "00.00.04",
    src: "/images/shop/Home/HomeProduct2.png",
    title: "Crescent CTK70MP 70-Piece M...",
    longTitle: "Crescent CTK70MP 70-Piece Mechanics Tool Set with Storage Case",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer nec...",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 78.0,
    isInCart: false,
    category: "Offers",
    subCategory: "Tools",
  },
  {
    id: "00.00.05",
    src: "/images/shop/Home/HomeProduct3.png",
    title: "Custom Leathercraft 1134 To...",
    longTitle: "Custom Leathercraft 1134 Tool Backpack, 48-Pocket",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut justo nec lorem...",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 420.0,
    isInCart: false,
    category: "Offers",
    subCategory: "Tools",
  },

  {
    id: "00.00.06",
    src: "/images/shop/Home/HomeProduct6.png",
    title: "DEWALT DW1169 14-Piece Pilo...",
    longTitle: "DEWALT DW1169 14-Piece Pilot-Point Twist Drill Bit Assortment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer nec...",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Offers",
    subCategory: "Tools",
  },
  {
    id: "00.00.07",
    src: "/images/shop/Home/HomeProduct7.png",
    title: "DEWALT DW2153 Impact Ready ...",
    longTitle: "DEWALT DW2153 Impact Ready Accessory Set",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer...",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 315.0,
    isInCart: false,
    category: "Offers",
    subCategory: "Tools",
  },
  {
    id: "00.00.08",
    src: "/images/shop/Home/HomeProduct8.png",
    title: "DEWALT DW4890 15-Piece Reci...",
    longTitle: "DEWALT DW4890 15-Piece Reciprocating Saw Blade Tough Case Set",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut justo nec lorem...",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 459.0,
    isInCart: false,
    category: "Offers",
    subCategory: "Tools",
  },

  {
    id: "00.00.09",
    src: "/images/shop/Home/HomeProduct9.png",
    title: "DEWALT DW715 15-Amp 12-Inch...",
    longTitle: "DEWALT DW715 15-Amp 12-Inch Compound Miter saw",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer nec...",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 119.0,
    isInCart: false,
    category: "Offers",
    subCategory: "Tools",
  },

  {
    id: "00.00.10",
    src: "/images/shop/Home/HomeProduct10.png",
    title: "DEWALT DW920K-2 Screwdriver + Tool Box Kit",
    longTitle: "DEWALT DW920K-2 Screwdriver + Tool Box Kit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut justo nec lorem...",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 420.0,
    isInCart: false,
    category: "Offers",
    subCategory: "Tools",
  },
  {
    id: "01.01.01",
    title: "Masina de tuns gazon electrica",
    src: "/images/shop/MyProducts/01.01.01_Masina de tuns gazon electrica.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },

  {
    id: "01.01.03",
    title: "Motocoasa",
    src: "/images/shop/MyProducts/01.01.02_Motocoasa.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.01.04",
    title: "Fir Motocoasa",
    src: "/images/shop/MyProducts/01.01.03_Fir Motocoasa.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.01.05",
    title: "Set Coasa manuala plus pila",
    src: "/images/shop/MyProducts/01.01.04_Set Coasa manuala plus pila.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.01.06",
    title: "Scarificator si aerator manual",
    src: "/images/shop/MyProducts/01.01.12_Scarificator si aerator manual.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.01.07",
    title: "Foarfeca pentru margine gazon",
    src: "/images/shop/MyProducts/01.01.13_Foarfeca pentru margine gazon.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.01.08",
    title: "Grebla cu dinti flexibili",
    src: "/images/shop/MyProducts/01.01.05_Grebla cu dinti flexibili.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.01.09",
    title: "Samanta gazon",
    src: "/images/shop/MyProducts/01.01.06_Samanta gazon.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.01.10",
    title: "Ingrasamant gazon",
    src: "/images/shop/MyProducts/01.01.14_Ingrasamant gazon.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.01.11",
    title: "Furtun gradina 3 pe 4",
    src: "/images/shop/MyProducts/01.01.07_Furtun gradina 3 pe 4.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.01.12",
    title: "Aspersor",
    src: "/images/shop/MyProducts/01.01.08_Aspersor.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.01.13",
    title: "Pistol pentru stropit",
    src: "/images/shop/MyProducts/01.01.09_Pistol pentru stropit.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.01.14",
    title: "Conector furtun 3 pe 4",
    src: "/images/shop/MyProducts/01.01.10_Conector furtun 3 pe 4.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },

  {
    id: "01.01.15",
    title: "Bordura de plastic gradina",
    src: "/images/shop/MyProducts/01.01.15_Bordura de plastic gradina.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Iarba si gazon",
  },
  {
    id: "01.02.01",
    title: "Foarfeca de gradina tip bypass",
    src: "/images/shop/MyProducts/01.02.01_Foarfeca de gradina tip bypass.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.02",
    title: "Foarfeca de gradina tip nicovala",
    src: "/images/shop/MyProducts/01.02.02_Foarfeca de gradina tip nicovala.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.03",
    title: "Foarfeca de gradina tip ghilotina",
    src: "/images/shop/MyProducts/01.02.03_Foarfeca de gradina tip ghilotina.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.04",
    title: "Foarfeca crengi telescopica",
    src: "/images/shop/MyProducts/01.02.04_Foarfeca crengi telescopica.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.05",
    title: "Foarfeca crengi telescopica cu clichet",
    src: "/images/shop/MyProducts/01.02.05_Foarfeca crengi telescopica cu clichet.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.06",
    title: "Fierestrau crengi curbat",
    src: "/images/shop/MyProducts/01.02.06_Fierestrau crengi curbat.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.07",
    title: "Fierestrau crengi telescopic",
    src: "/images/shop/MyProducts/01.02.07_Fierestrau crengi telescopic.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.08",
    title: "Drujba (motofierastrau)",
    src: "/images/shop/MyProducts/01.02.08_Drujba (motofierastrau).avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.09",
    title: "Topor pentru despicat",
    src: "/images/shop/MyProducts/01.02.09_Topor pentru despicat.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },

  {
    id: "01.02.10",
    title: "Toporisca",
    src: "/images/shop/MyProducts/01.02.28_Toporisca.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.11",
    title: "Scara simpla din aluminiu",
    src: "/images/shop/MyProducts/01.02.10_Scara simpla din aluminiu.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.12",
    title: "Scara dubla din aluminiu",
    src: "/images/shop/MyProducts/01.02.11_Scara dubla din aluminiu.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.13",
    title: "Scara 3 tronsoane din aluminiu",
    src: "/images/shop/MyProducts/01.02.12_Scara 3 tronsoane din aluminiu.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.21",
    title: "Pompa de stropit",
    src: "/images/shop/MyProducts/01.02.21_Pompa de stropit.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.22",
    title: "Pulverizator manual cu presiune",
    src: "/images/shop/MyProducts/01.02.22_Pulverizator manual cu presiune.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.23",
    title: "Cutit pentru altoit",
    src: "/images/shop/MyProducts/01.02.23_Cutit pentru altoit.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.24",
    title: "Mastic altoire",
    src: "/images/shop/MyProducts/01.02.24_Mastic altoire.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },

  {
    id: "01.02.25",
    title: "Var pasta pentru pomi",
    src: "/images/shop/MyProducts/01.02.25_Var pasta pentru pomi.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.26",
    title: "Sulfat de cupru pentru cicatrizare",
    src: "/images/shop/MyProducts/01.02.26_Sulfat de cupru pentru cicatrizare.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },
  {
    id: "01.02.27",
    title: "Ulei horticol si insecticid pentru pomi",
    src: "/images/shop/MyProducts/01.02.27_Ulei horticol si insecticid pentru pomi.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Pomicultura",
  },

  {
    id: "01.03.01",
    title: "Motosapa",
    src: "/images/shop/MyProducts/01.03.01_Motosapa.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.02",
    title: "Benzina Motosapa",
    src: "/images/shop/MyProducts/01.03.02_Benzina Motosapa.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.03",
    title: "Ulei de motor Motosapa",
    src: "/images/shop/MyProducts/01.03.03_Ulei de motor Motosapa.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.04",
    title: "Ulei de transmisie Motosapa",
    src: "/images/shop/MyProducts/01.03.04_Ulei de transmisie Motosapa.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.05",
    title: "Harlet",
    src: "/images/shop/MyProducts/01.03.05_Harlet.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },

  {
    id: "01.03.06",
    title: "Sapa de gradina",
    src: "/images/shop/MyProducts/01.03.06_Sapa de gradina.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.07",
    title: "Sapaliga de gradina",
    src: "/images/shop/MyProducts/01.03.07_Sapaliga de gradina.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.08",
    title: "Sistem de udare prin picurare",
    src: "/images/shop/MyProducts/01.03.08_Sistem de udare prin picurare.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },

  {
    id: "01.03.10",
    title: "Manusi de gradina",
    src: "/images/shop/MyProducts/01.03.10_Manusi de gradina.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.11",
    title: "Grebla metalica",
    src: "/images/shop/MyProducts/01.03.11_Grebla metalica.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.12",
    title: "Ingrasamant Complex pentru fertilizare",
    src: "/images/shop/MyProducts/01.03.12_Ingrasamant Complex pentru fertilizare.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.13",
    title: "Seminte fructe si legume",
    src: "/images/shop/MyProducts/01.03.13_Seminte fructe si legume.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.14",
    title: "Ingrasamant azotat de amoniu pentru crestere",
    src: "/images/shop/MyProducts/01.03.14_Ingrasamant azotat de amoniu pentru crestere.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.15",
    title: "Secera",
    src: "/images/shop/MyProducts/01.03.15_Secera.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.16",
    title: "Calistir",
    src: "/images/shop/MyProducts/01.03.16_Calistir.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.17",
    title: "Lopata de gradina",
    src: "/images/shop/MyProducts/01.03.17_Lopata de gradina.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.18",
    title: "Plantator manual rasaduri",
    src: "/images/shop/MyProducts/01.03.18_Plantator manual rasaduri.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.19",
    title: "Plantator manual (Saditoare)",
    src: "/images/shop/MyProducts/01.03.19_Plantator manual.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },

  {
    id: "01.03.20",
    title: "Araci",
    src: "/images/shop/MyProducts/01.03.20_Araci.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.21",
    title: "Aparat pentru legat rosii",
    src: "/images/shop/MyProducts/01.03.21_Aparat pentru legat rosii.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },

  {
    id: "01.03.40",
    title: "Solar gradina",
    src: "/images/shop/MyProducts/01.03.40_Solar gradina.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },

  {
    id: "01.03.41",
    title: "Pompa de udat electrica",
    src: "/images/shop/MyProducts/01.03.41_Pompa de udat electrica.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },

  {
    id: "01.03.42",
    title: "Rezervor IBC 1000l",
    src: "/images/shop/MyProducts/01.03.42_Rezervor IBC 1000l.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },

  {
    id: "01.03.50",
    title: "Sperietoare de pasari",
    src: "/images/shop/MyProducts/01.03.50_Sperietoare de pasari.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.51",
    title: "Aparat ultrasonic anti-daunatori",
    src: "/images/shop/MyProducts/01.03.51_Aparat ultrasonic anti-daunatori.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.03.90",
    title: "Compostor de gradina",
    src: "/images/shop/MyProducts/01.03.90_Compostor de gradina.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Agricultura",
  },
  {
    id: "01.04.01",
    title: "Hranitoare pentru pasari",
    src: "/images/shop/MyProducts/01.04.01_Hranitoare pentru pasari.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Zootehnie",
  },
  {
    id: "01.04.02",
    title: "Adapatoare pentru pasari",
    src: "/images/shop/MyProducts/01.04.02_Adapatoare pentru pasari.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Zootehnie",
  },
  {
    id: "01.04.03",
    title: "Furca",
    src: "/images/shop/MyProducts/01.04.03_Furca.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Zootehnie",
  },
  {
    id: "01.04.04",
    title: "Moara de cereale si fructe",
    src: "/images/shop/MyProducts/01.04.04_Moara de cereale si fructe.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Zootehnie",
  },
  {
    id: "01.04.05",
    title: "Razuitor podea",
    src: "/images/shop/MyProducts/01.04.05_Razuitor podea.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Zootehnie",
  },
  {
    id: "01.04.06",
    title: "Sapa de curatat podeaua",
    src: "/images/shop/MyProducts/01.04.06_Sapa de curatat podeaua.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Zootehnie",
  },
  {
    id: "01.04.07",
    title: "Matura de strada",
    src: "/images/shop/MyProducts/01.04.07_Matura de strada.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Zootehnie",
  },
  {
    id: "01.04.08",
    title: "Matura de gradina",
    src: "/images/shop/MyProducts/01.04.08_Matura de gradina.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Zootehnie",
  },
  {
    id: "01.05.01",
    title: "Stropitoare",
    src: "/images/shop/MyProducts/01.05.01_Stropitoare.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Plante si ghivece",
  },
  {
    id: "01.05.02",
    title: "Pamant flori universal",
    src: "/images/shop/MyProducts/01.05.02_Pamant flori universal.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Plante si ghivece",
  },

  {
    id: "01.05.03",
    title: "Perlit pentru plante de interior",
    src: "/images/shop/MyProducts/01.05.03_Perlit pentru plante de interior.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Gradinarit",
    subCategory: "Plante si ghivece",
  },

  {
    id: "02.01.01",
    title: "Multimetru digital",
    src: "/images/shop/MyProducts/02.01.01_Multimetru digital.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.02",
    title: "Creion tensiune",
    src: "/images/shop/MyProducts/02.01.02_Creion tensiune.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.03",
    title: "Cablu electric",
    src: "/images/shop/MyProducts/02.01.03_Cablu electric.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.04",
    title: "Trusa pini si papuci electrici",
    src: "/images/shop/MyProducts/02.01.04_Trusa pini si papuci electrici.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.05",
    title: "Cleste sertizare pini",
    src: "/images/shop/MyProducts/02.01.05_Cleste sertizare pini.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.06",
    title: "Sir de cleme (mammuth)",
    src: "/images/shop/MyProducts/02.01.06_Sir de cleme.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.07",
    title: "Banda izolatoare",
    src: "/images/shop/MyProducts/02.01.07_Banda izolatoare.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.08",
    title: "Cleste patent cu varf lung",
    src: "/images/shop/MyProducts/02.01.08_Cleste patent cu varf lung.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.09",
    title: "Clema zimtata (Tie wrap)",
    src: "/images/shop/MyProducts/02.01.09_Clema zimtata.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.13",
    title: "Manusi electroizolante",
    src: "/images/shop/MyProducts/02.01.13_Manusi electroizolante.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },

  {
    id: "02.01.21",
    title: "Pistol de lipit",
    src: "/images/shop/MyProducts/02.01.21_Pistol de lipit.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.22",
    title: "Aliaj pentru lipire",
    src: "/images/shop/MyProducts/02.01.22_Aliaj pentru lipire.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.23",
    title: "Cositor cu sacaz",
    src: "/images/shop/MyProducts/02.01.23_Cositor cu sacaz.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.30",
    title: "Prelungitor cu protectie",
    src: "/images/shop/MyProducts/02.01.30_Prelungitor cu protectie.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.31",
    title: "Priza de perete",
    src: "/images/shop/MyProducts/02.01.31_Priza de perete.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.32",
    title: "Intrerupator simplu",
    src: "/images/shop/MyProducts/02.01.32_Intrerupator simplu.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.33",
    title: "Siguranta automata pentru panou electric",
    src: "/images/shop/MyProducts/02.01.33_Siguranta automata pentru panou electric.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },
  {
    id: "02.01.34",
    title: "Priza cu protectie la supratensiune",
    src: "/images/shop/MyProducts/02.01.34_Priza cu protectie la supratensiune.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Electrice",
  },

  {
    id: "02.02.01",
    title: "Rooter wireless",
    src: "/images/shop/MyProducts/02.02.01_Rooter wireless.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Retea",
  },
  {
    id: "02.02.02",
    title: "Cablu de retea UTP cat6",
    src: "/images/shop/MyProducts/02.02.02_Cablu de retea UTP cat6.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 3.5,
    isInCart: false,
    category: "Electronica",
    subCategory: "Retea",
  },
  {
    id: "02.02.03",
    title: "Mufa de retea cat6 RJ45",
    src: "/images/shop/MyProducts/02.02.03_Mufa de retea cat6 RJ45.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 1.2,
    isInCart: false,
    category: "Electronica",
    subCategory: "Retea",
  },
  {
    id: "02.02.04",
    title: "Tester cablu de retea lan",
    src: "/images/shop/MyProducts/02.02.04_Tester cablu de retea lan.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 58.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Retea",
  },
  {
    id: "02.02.05",
    title: "Cleste pentru sertizare mufe",
    src: "/images/shop/MyProducts/02.02.05_Cleste pentru sertizare mufe.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 49.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Retea",
  },
  {
    id: "02.02.06",
    title: "Trusa de instrumente retea",
    src: "/images/shop/MyProducts/02.02.06_Trusa de instrumente retea.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 120.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Retea",
  },
  {
    id: "02.02.07",
    title: "Adaptor Wireless",
    src: "/images/shop/MyProducts/02.02.07_Adaptor Wireless.avif.jpg",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 45.0,
    isInCart: false,
    category: "Electronica",
    subCategory: "Retea",
  },

  // Constructii

  {
    id: "04.01.01",
    title: "Betoniera",
    src: "/images/shop/MyProducts/04.01.01_Betoniera.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.02",
    title: "Lopata",
    src: "/images/shop/MyProducts/04.01.02_Lopata.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.03",
    title: "Galeata constructii",
    src: "/images/shop/MyProducts/04.01.03_Galeata constructii.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.04",
    title: "Sac de ciment",
    src: "/images/shop/MyProducts/04.01.04_Sac de ciment.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },

  {
    id: "04.01.05",
    title: "Roaba",
    src: "/images/shop/MyProducts/04.01.05_Roaba.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.06",
    title: "Mistrie",
    src: "/images/shop/MyProducts/04.01.06_Mistrie.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.07",
    title: "Tarnacop",
    src: "/images/shop/MyProducts/04.01.07_Tarnacop.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.08",
    title: "Nivela (boloboc, cumpana)",
    src: "/images/shop/MyProducts/04.01.08_Nivela.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.09",
    title: "Nivela laser",
    src: "/images/shop/MyProducts/04.01.09_Nivela laser.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.10",
    title: "Furtun de nivel",
    src: "/images/shop/MyProducts/04.01.10_Furtun de nivel.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },

  {
    id: "04.01.11",
    title: "Sfoara constructii",
    src: "/images/shop/MyProducts/04.01.11_Sfoara constructii.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.20",
    title: "Scandura cofrag",
    src: "/images/shop/MyProducts/04.01.20_Scandura cofrag.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.21",
    title: "Rigla cofrag (sipca, leaturi)",
    src: "/images/shop/MyProducts/04.01.21_Rigla cofrag.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.22",
    title: "Boltar",
    src: "/images/shop/MyProducts/04.01.22_Boltar.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.23",
    title: "BCA",
    src: "/images/shop/MyProducts/04.01.23_BCA.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.24",
    title: "Caramida exterior",
    src: "/images/shop/MyProducts/04.01.24_Caramida exterior.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.25",
    title: "Caramida interior",
    src: "/images/shop/MyProducts/04.01.25_Caramida interior.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.26",
    title: "Caramida samota",
    src: "/images/shop/MyProducts/04.01.26_Caramida samota.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.27",
    title: "Caramida aparenta",
    src: "/images/shop/MyProducts/04.01.27_Caramida aparenta.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.28",
    title: "Piatra decorativa",
    src: "/images/shop/MyProducts/04.01.28_Piatra decorativa.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.29",
    title: "Gresie",
    src: "/images/shop/MyProducts/04.01.29_Gresie.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.01.30",
    title: "Faianta baie",
    src: "/images/shop/MyProducts/04.01.30_Faianta baie.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Betoane si zidarie",
  },
  {
    id: "04.02.01",
    title: "Placa rigips",
    src: "/images/shop/MyProducts/04.02.01_Placa rigips.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Placi si izolatie",
  },
  // {
  //   id: "04.02.02",
  //   title: "Profil rigips",
  //   src: "/images/shop/MyProducts/04.02.02_Profil rigips.avif",
  //   longTitle: "",
  //   desc: "",
  //   longDesc:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
  //   price: 265.0,
  //   isInCart: false,
  //   category: "Constructii",
  //   subCategory: "Placi si izolatie",
  // },
  // {
  //   id: "04.02.03",
  //   title: "Diblu de expandare din otel",
  //   src: "/images/shop/MyProducts/04.02.03_Diblu de expandare din otel.avif",
  //   longTitle: "",
  //   desc: "",
  //   longDesc:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
  //   price: 265.0,
  //   isInCart: false,
  //   category: "Constructii",
  //   subCategory: "Placi si izolatie",
  // },
  // {
  //   id: "04.02.04",
  //   title: "Diblu prin insurubare din plastic",
  //   src: "/images/shop/MyProducts/04.02.04_Diblu prin insurubare din plastic.avif",
  //   longTitle: "",
  //   desc: "",
  //   longDesc:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
  //   price: 265.0,
  //   isInCart: false,
  //   category: "Constructii",
  //   subCategory: "Placi si izolatie",
  // },
  // {
  //   id: "04.02.05",
  //   title: "Banda fibra de sticla pentru imbinare",
  //   src: "/images/shop/MyProducts/04.02.05_Banda fibra de sticla pentru imbinare.avif",
  //   longTitle: "",
  //   desc: "",
  //   longDesc:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
  //   price: 265.0,
  //   isInCart: false,
  //   category: "Constructii",
  //   subCategory: "Placi si izolatie",
  // },
  // {
  //   id: "04.02.06",
  //   title: "Banda hartie pentru finisare rigips",
  //   src: "/images/shop/MyProducts/04.02.05_Banda hartie pentru finisare rigips.avif",
  //   longTitle: "",
  //   desc: "",
  //   longDesc:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
  //   price: 265.0,
  //   isInCart: false,
  //   category: "Constructii",
  //   subCategory: "Placi si izolatie",
  // },
  {
    id: "04.02.09",
    title: "Placa OSB",
    src: "/images/shop/MyProducts/04.02.09_Placa OSB.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Placi si izolatie",
  },
  {
    id: "04.02.11",
    title: "Polistiren expandat",
    src: "/images/shop/MyProducts/04.02.11_Polistiren expandat.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Placi si izolatie",
  },
  {
    id: "04.02.12",
    title: "Polistiren extrudat",
    src: "/images/shop/MyProducts/04.02.12_Polistiren extrudat.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Placi si izolatie",
  },
  {
    id: "04.02.13",
    title: "Vata minerala bazaltica",
    src: "/images/shop/MyProducts/04.02.13_Vata minerala bazaltica.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Placi si izolatie",
  },
  {
    id: "04.02.14",
    title: "Vata minerala de sticla",
    src: "/images/shop/MyProducts/04.02.14_Vata minerala de sticla.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Placi si izolatie",
  },
  {
    id: "04.02.15",
    title: "Spuma poliuretanica",
    src: "/images/shop/MyProducts/04.02.15_Spuma poliuretanica.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Placi si izolatie",
  },

  {
    id: "04.03.01",
    title: "Ruleta",
    src: "/images/shop/MyProducts/04.03.01_Ruleta.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Constructii",
    subCategory: "Tamplarie",
  },

  // Intretinere casa

  {
    id: "05.02.01",
    title: "Trusa medicala de perete",
    src: "/images/shop/MyProducts/05.02.01_Trusa medicala de perete.jpg",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Siguranta si anti-daunatori",
  },
  {
    id: "05.02.02",
    title: "Stingator cu pulbere",
    src: "/images/shop/MyProducts/05.02.02_Stingator cu pulbere.jpg",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Siguranta si anti-daunatori",
  },
  {
    id: "05.02.03",
    title: "Capcana gel pentru soareci",
    src: "/images/shop/MyProducts/05.02.03_Capcana gel pentru soareci.jpg",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Siguranta si anti-daunatori",
  },
  {
    id: "05.02.04",
    title: "Gel anti molii",
    src: "/images/shop/MyProducts/05.02.04_Gel anti molii.jpg",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Siguranta si anti-daunatori",
  },
  {
    id: "05.02.05",
    title: "Spray anti viespii",
    src: "/images/shop/MyProducts/05.02.05_Spray anti viespii.jpg",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Siguranta si anti-daunatori",
  },
  {
    id: "05.03.01",
    title: "Incarcator baterii reincarcabile AAA-AA",
    src: "/images/shop/MyProducts/05.03.01_Incarcator baterii reincarcabile AAA-AA.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Iluminat si alimentare",
  },
  {
    id: "05.03.02",
    title: "Baterii reincarcabile AAA",
    src: "/images/shop/MyProducts/05.03.02_Baterii reincarcabile AAA.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Iluminat si alimentare",
  },
  {
    id: "05.03.03",
    title: "Baterii reincarcabile AA",
    src: "/images/shop/MyProducts/05.03.03_Baterii reincarcabile AA.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Iluminat si alimentare",
  },
  {
    id: "05.03.04",
    title: "Baterii 9V",
    src: "/images/shop/MyProducts/05.03.04_Baterii 9V.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Iluminat si alimentare",
  },
  {
    id: "05.03.05",
    title: "Baterii CR 2025",
    src: "/images/shop/MyProducts/05.03.05_Baterii CR 2025.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Iluminat si alimentare",
  },
  {
    id: "05.03.06",
    title: "Baterii CR 2032",
    src: "/images/shop/MyProducts/05.03.06_Baterii CR 2032.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Iluminat si alimentare",
  },
  {
    id: "05.03.07",
    title: "Becuri E14 lumina calda",
    src: "/images/shop/MyProducts/05.03.07_Becuri E14 lumina calda.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Iluminat si alimentare",
  },
  {
    id: "05.03.08",
    title: "Becuri E14 lumina rece",
    src: "/images/shop/MyProducts/05.03.08_Becuri E14 lumina rece.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Iluminat si alimentare",
  },
  {
    id: "05.03.09",
    title: "Becuri E27 lumina neutra",
    src: "/images/shop/MyProducts/05.03.09_Becuri E27 lumina neutra.avif",
    longTitle: "",
    desc: "",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, vivamus tempus enim et erat tincidunt ac sollicitudin nulla mattis, facile est hodie in fraudem incidere, haec consuetudo late patet et etiam notissimarum societatum fama laedi potest, sed venditores et artifices nostri summam qualitatem praestant, nulla est dubitatio quin nos in hoc campo principatum teneamus, tantum res notatae et sigillis probatae a nobis offeruntur.",
    price: 265.0,
    isInCart: false,
    category: "Intretinere casa",
    subCategory: "Iluminat si alimentare",
  },
];
