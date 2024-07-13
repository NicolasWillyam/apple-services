import { categoryList, MenuList } from "./props";

export const CategoryList: categoryList[] = [
  {
    icons: "apple-one.svg",
    name: "Apple One",
    size: 55,
  },
  {
    icons: "apple-tv-plus.svg",
    size: 45,
    name: "Apple TV+",
  },
  {
    icons: "apple-music.svg",
    size: 32,
    name: "Apple Music",
  },
  {
    icons: "apple-arcade.svg",
    size: 37,
    name: "Apple Arcade",
  },
  {
    icons: "apple-fitness-plus.svg",
    size: 34,
    name: "Apple Fitness+",
  },
  {
    icons: "apple-news.svg",
    size: 28,
    name: "Apple News+",
  },
  {
    icons: "apple-podcast.svg",
    size: 32,
    name: "Apple Podcasts",
  },
  {
    icons: "apple-book.svg",
    size: 32,
    name: "Apple Books",
  },
];

export const menuList: MenuList[] = [
  {
    name: "Store",
    list: [
      {
        name: "Shop",
        items: [
          {
            name: "Shop the Latest",
            link: "/us/shop/goto/store",
          },
          {
            name: "Mac",
            link: "/us/shop/goto/buy_mac",
          },
          {
            name: "iPad",
            link: "/us/shop/goto/buy_ipad",
          },
          {
            name: "iPhone",
            link: "/us/shop/goto/buy_iphone",
          },
          {
            name: "Apple Watch",
            link: "/us/shop/goto/buy_watch",
          },
          {
            name: "Apple Vision Pro",
            link: "/us/shop/goto/buy_vision",
          },
          {
            name: "Accessories",
            link: "/us/shop/goto/buy_accessories",
          },
        ],
      },
      {
        name: "Quick Links",
        items: [
          {
            name: "Find a Store",
            link: "/retail/",
          },
          {
            name: "Order Status",
            link: "/us/shop/goto/order/list",
          },
          {
            name: "Apple Trade In",
            link: "/us/shop/goto/trade_in",
          },
          {
            name: "Financing",
            link: "/us/shop/goto/payment_plan",
          },
          {
            name: "College Student Offer",
            link: "https://www.apple.com/us/shop/goto/educationlanding",
          },
        ],
      },
      {
        name: "Shop Special Stores",
        items: [
          {
            name: "Certified Refurbished",
            link: "/us/shop/goto/special_deals",
          },
          {
            name: "Education",
            link: "/us/shop/goto/educationrouting",
          },
          {
            name: "Business",
            link: "/retail/business/",
          },
          {
            name: "Veterans and Military",
            link: "/us/shop/goto/eppstore/veteransandmilitary",
          },
          {
            name: "Government",
            link: "/r/store/government/",
          },
        ],
      },
    ],
  },
  {
    name: "Mac",
    list: [
      {
        name: "Explore Mac",
        items: [
          {
            name: "Explore All Mac",
            link: "/mac/",
          },
          {
            name: "MacBook Air",
            link: "/macbook-air/",
          },
          {
            name: "MacBook Pro",
            link: "/macbook-pro/",
          },
          {
            name: "iMac",
            link: "/imac/",
          },
          {
            name: "Mac mini",
            link: "/mac-mini/",
          },
          {
            name: "Mac Studio",
            link: "/mac-studio/",
          },
          {
            name: "Mac Pro",
            link: "/mac-pro/",
          },
          {
            name: "Displays",
            link: "/displays/",
          },
          {
            name: "Compare Mac",
            link: "/mac/compare/",
          },
          {
            name: "Mac Does That",
            link: "/mac/mac-does-that/",
          },
        ],
      },
      {
        name: "Shop Mac",
        items: [
          {
            name: "Shop Mac",
            link: "/us/shop/goto/buy_mac",
          },
          {
            name: "Help Me Choose",
            link: "/mac/best-mac/",
          },
          {
            name: "Mac Accessories",
            link: "/us/shop/goto/mac/accessories",
          },
          {
            name: "Apple Trade In",
            link: "/us/shop/goto/trade_in",
          },
          {
            name: "Financing",
            link: "/us/shop/goto/payment_plan",
          },
          {
            name: "College Student Offer",
            link: "https://www.apple.com/us/shop/goto/educationlanding",
          },
        ],
      },
      {
        name: "More from Mac",
        items: [
          {
            name: "Mac Support",
            link: "https://support.apple.com/mac?cid=gn-ols-mac-psp-prodfly",
          },
          {
            name: "AppleCare+ for Mac",
            link: "/support/products/mac/",
          },
          {
            name: "macOS Sequoia Preview",
            link: "/macos/macos-sequoia-preview/",
          },
          {
            name: "Apple Intelligence",
            link: "/apple-intelligence/",
          },
          {
            name: "Apps by Apple",
            link: "/apps/",
          },
          {
            name: "Continuity",
            link: "/macos/continuity/",
          },
          {
            name: "iCloud+",
            link: "/icloud/",
          },
          {
            name: "Mac for Business",
            link: "/business/mac/",
          },
          {
            name: "Education",
            link: "/education/",
          },
        ],
      },
    ],
  },
  {
    name: "iPad",
    list: [
      {
        name: "Explore iPad",
        items: [
          {
            name: "Explore All iPad",
            link: "/ipad/",
          },
          {
            name: "iPad Pro",
            link: "/ipad-pro/",
          },
          {
            name: "iPad Air",
            link: "/ipad-air/",
          },
          {
            name: "iPad",
            link: "/ipad-10.9/",
          },
          {
            name: "iPad mini",
            link: "/ipad-mini/",
          },
          {
            name: "Apple Pencil",
            link: "/apple-pencil/",
          },
          {
            name: "Keyboards",
            link: "/ipad-keyboards/",
          },
          {
            name: "Compare iPad",
            link: "/ipad/compare/",
          },
          {
            name: "Why iPad",
            link: "/ipad/why-ipad/",
          },
        ],
      },
      {
        name: "Shop iPad",
        items: [
          {
            name: "Shop iPad",
            link: "/us/shop/goto/buy_ipad",
          },
          {
            name: "iPad Accessories",
            link: "/us/shop/goto/ipad/accessories",
          },
          {
            name: "Apple Trade In",
            link: "/us/shop/goto/trade_in",
          },
          {
            name: "Financing",
            link: "/us/shop/goto/payment_plan",
          },
          {
            name: "College Student Offer",
            link: "https://www.apple.com/us/shop/goto/educationlanding",
          },
        ],
      },
      {
        name: "More from iPad",
        items: [
          {
            name: "iPad Support",
            link: "https://support.apple.com/ipad?cid=gn-ols-ipad-psp-prodfly",
          },
          {
            name: "AppleCare+ for iPad",
            link: "/support/products/ipad/",
          },
          {
            name: "iPadOS 18 Preview",
            link: "/ipados/ipados-18-preview/",
          },
          {
            name: "Apple Intelligence",
            link: "/apple-intelligence/",
          },
          {
            name: "Apps by Apple",
            link: "/apps/",
          },
          {
            name: "iCloud+",
            link: "/icloud/",
          },
          {
            name: "Education",
            link: "/education/",
          },
        ],
      },
    ],
  },
  {
    name: "iPhone",
    list: [
      {
        name: "Explore iPhone",
        items: [
          {
            name: "Explore All iPhone",
            link: "/iphone/",
          },
          {
            name: "iPhone 15 Pro",
            link: "/iphone-15-pro/",
          },
          {
            name: "iPhone 15",
            link: "/iphone-15/",
          },
          {
            name: "iPhone 14",
            link: "/us/shop/goto/buy_iphone/iphone_14",
          },
          {
            name: "iPhone 13",
            link: "/us/shop/goto/buy_iphone/iphone_13",
          },
          {
            name: "iPhone SE",
            link: "/iphone-se/",
          },
          {
            name: "Compare iPhone",
            link: "/iphone/compare/",
          },
          {
            name: "Switch from Android",
            link: "/iphone/switch/",
          },
        ],
      },
      {
        name: "Shop iPhone",
        items: [
          {
            name: "Shop iPhone",
            link: "/us/shop/goto/buy_iphone",
          },
          {
            name: "iPhone Accessories",
            link: "/us/shop/goto/iphone/accessories",
          },
          {
            name: "Apple Trade In",
            link: "/us/shop/goto/trade_in",
          },
          {
            name: "Carrier Deals at Apple",
            link: "/us/shop/goto/buy_iphone/carrier_offers",
          },
          {
            name: "Financing",
            link: "/us/shop/goto/payment_plan",
          },
        ],
      },
      {
        name: "More from iPhone",
        items: [
          {
            name: "iPhone Support",
            link: "https://support.apple.com/iphone?cid=gn-ols-iphone-psp-prodfly",
          },
          {
            name: "AppleCare+ for iPhone",
            link: "/support/products/iphone/",
          },
          {
            name: "iOS 18 Preview",
            link: "/ios/ios-18-preview/",
          },
          {
            name: "Apple Intelligence",
            link: "/apple-intelligence/",
          },
          {
            name: "Apps by Apple",
            link: "/apps/",
          },
          {
            name: "iPhone Privacy",
            link: "/privacy/",
          },
          {
            name: "iCloud+",
            link: "/icloud/",
          },
          {
            name: "Wallet, Pay, Card",
            link: "/wallet/",
          },
          {
            name: "Siri",
            link: "/siri/",
          },
        ],
      },
    ],
  },
  {
    name: "Watch",
    list: [
      {
        name: "Explore Watch",
        items: [
          {
            name: "Explore All Apple Watch",
            link: "/watch/",
          },
          {
            name: "Apple Watch Series 9",
            link: "/apple-watch-series-9/",
          },
          {
            name: "Apple Watch Ultra 2",
            link: "/apple-watch-ultra-2/",
          },
          {
            name: "Apple Watch SE",
            link: "/apple-watch-se/",
          },
          {
            name: "Apple Watch Nike",
            link: "/apple-watch-nike/",
          },
          {
            name: "Apple Watch Herm\u00e8s",
            link: "/apple-watch-hermes/",
          },
          {
            name: "Compare Watch",
            link: "/watch/compare/",
          },
          {
            name: "Why Apple Watch",
            link: "/watch/why-apple-watch/",
          },
        ],
      },
      {
        name: "Shop Watch",
        items: [
          {
            name: "Shop Apple Watch",
            link: "/us/shop/goto/buy_watch",
          },
          {
            name: "Apple Watch Studio",
            link: "/us/shop/goto/studio/apple_watch",
          },
          {
            name: "Apple Watch Bands",
            link: "/us/shop/goto/watch/bands",
          },
          {
            name: "Apple Watch Accessories",
            link: "/us/shop/goto/watch/accessories",
          },
          {
            name: "Apple Trade In",
            link: "/us/shop/goto/trade_in",
          },
          {
            name: "Financing",
            link: "/us/shop/goto/payment_plan",
          },
        ],
      },
      {
        name: "More from Watch",
        items: [
          {
            name: "Apple Watch Support",
            link: "https://support.apple.com/watch?cid=gn-ols-watch-psp-prodfly",
          },
          {
            name: "AppleCare+",
            link: "/support/products/watch/",
          },
          {
            name: "watchOS 11 Preview",
            link: "/watchos/watchos-preview/",
          },
          {
            name: "Apple Watch For Your Kids",
            link: "/apple-watch-for-your-kids/",
          },
          {
            name: "Apps by Apple",
            link: "/apps/",
          },
          {
            name: "Apple Fitness+",
            link: "/apple-fitness-plus/",
          },
        ],
      },
    ],
  },
  {
    name: "Vision",
    list: [
      {
        name: "Explore Vision",
        items: [
          {
            name: "Explore Apple Vision Pro",
            link: "/apple-vision-pro/",
          },
          {
            name: "Guided Tour",
            link: "/apple-vision-pro/guided-tour/",
          },
          {
            name: "Tech Specs",
            link: "/apple-vision-pro/specs/",
          },
        ],
      },
      {
        name: "Shop Vision",
        items: [
          {
            name: "Shop Apple Vision Pro",
            link: "/us/shop/goto/buy_vision",
          },
          {
            name: "Apple Vision Pro Accessories",
            link: "/us/shop/goto/vision/accessories",
          },
          {
            name: "Book a Demo",
            link: "/retail/instore-shopping-session/session-selection/?topic=visionpro",
          },
          {
            name: "Financing",
            link: "/us/shop/goto/payment_plan",
          },
        ],
      },
      {
        name: "More from Vision",
        items: [
          {
            name: "Apple Vision Pro Support",
            link: "https://support.apple.com/apple-vision-pro?cid=gn-nav-vision-psp-prodfly",
          },
          {
            name: "AppleCare+",
            link: "/support/products/apple-vision-pro/",
          },
          {
            name: "visionOS 2 Preview",
            link: "/visionos/visionos-2-preview/",
          },
        ],
      },
    ],
  },
  {
    name: "AirPods",
    list: [
      {
        name: "Explore AirPods",
        items: [
          {
            name: "Explore All AirPods",
            link: "/airpods/",
          },
          {
            name: "AirPods Pro 2nd generation",
            link: "/airpods-pro/",
          },
          {
            name: "AirPods 2nd generation",
            link: "/airpods-2nd-generation/",
          },
          {
            name: "AirPods 3rd generation",
            link: "/airpods-3rd-generation/",
          },
          {
            name: "AirPods Max",
            link: "/airpods-max/",
          },
          {
            name: "Compare AirPods",
            link: "/airpods/compare/",
          },
        ],
      },
      {
        name: "Shop AirPods",
        items: [
          {
            name: "Shop AirPods",
            link: "/us/shop/goto/accessories/all_accessories/headphones_speakers?fh=47d1%2B3214%2B45aa%2B45ab&f=apple-overear-sport&page=1",
          },
          {
            name: "AirPods Accessories",
            link: "/us/shop/goto/accessories/all_accessories/headphones_speakers?fh=47d1%2Be62115&f=headphoneacc&page=1",
          },
        ],
      },
      {
        name: "More from AirPods",
        items: [
          {
            name: "AirPods Support",
            link: "https://support.apple.com/airpods?cid=gn-ols-airpods-psp-prodfly",
          },
          {
            name: "AppleCare+ for Headphones",
            link: "/support/products/headphones/",
          },
          {
            name: "Apple Music",
            link: "/apple-music/",
          },
        ],
      },
    ],
  },
  {
    name: "TV & Home",
    list: [
      {
        name: "Explore TV & Home",
        items: [
          {
            name: "Explore TV & Home",
            link: "/tv-home/",
          },
          {
            name: "Apple TV 4K",
            link: "/apple-tv-4k/",
          },
          {
            name: "HomePod",
            link: "/homepod-2nd-generation/",
          },
          {
            name: "HomePod mini",
            link: "/homepod-mini/",
          },
        ],
      },
      {
        name: "Shop TV & Home",
        items: [
          {
            name: "Shop Apple TV 4K",
            link: "/us/shop/goto/buy_tv/apple_tv_4k",
          },
          {
            name: "Shop HomePod",
            link: "/us/shop/goto/buy_homepod/homepod",
          },
          {
            name: "Shop HomePod mini",
            link: "/us/shop/goto/buy_homepod/homepod_mini",
          },
          {
            name: "Shop Siri Remote",
            link: "/us/shop/goto/product/MNC73",
          },
          {
            name: "TV & Home Accessories",
            link: "/us/shop/goto/smart_home/accessories",
          },
        ],
      },
      {
        name: "More from TV & Home",
        items: [
          {
            name: "Apple TV Support",
            link: "https://support.apple.com/apple-tv?cid=gn-ols-appletv-psp-prodfly",
          },
          {
            name: "HomePod Support",
            link: "https://support.apple.com/homepod?cid=gn-ols-homepod-psp-prodfly",
          },
          {
            name: "AppleCare+",
            link: "/support/products/",
          },
          {
            name: "Apple TV app",
            link: "/apple-tv-app/",
          },
          {
            name: "Apple TV+",
            link: "/apple-tv-plus/",
          },
          {
            name: "Home app",
            link: "/home-app/",
          },
          {
            name: "Apple Music",
            link: "/apple-music/",
          },
          {
            name: "Siri",
            link: "/siri/",
          },
          {
            name: "AirPlay",
            link: "/airplay/",
          },
        ],
      },
    ],
  },
  {
    name: "Entertainment",
    list: [
      {
        name: "Explore Entertainment",
        items: [
          {
            name: "Explore Entertainment",
            link: "/services/",
          },
          {
            name: "Apple One",
            link: "/apple-one/",
          },
          {
            name: "Apple TV+",
            link: "/apple-tv-plus/",
          },
          {
            name: "Apple Music",
            link: "/apple-music/",
          },
          {
            name: "Apple Arcade",
            link: "/apple-arcade/",
          },
          {
            name: "Apple Fitness+",
            link: "/apple-fitness-plus/",
          },
          {
            name: "Apple News+",
            link: "/apple-news/",
          },
          {
            name: "Apple Podcasts",
            link: "/apple-podcasts/",
          },
          {
            name: "Apple Books",
            link: "/apple-books/",
          },
          {
            name: "App Store",
            link: "/app-store/",
          },
        ],
      },
      {
        name: "Support",
        items: [
          {
            name: "Apple TV+ Support",
            link: "https://support.apple.com/tv?cid=gn-ols-tvplus-psp-prodfly",
          },
          {
            name: "Apple Music Support",
            link: "https://support.apple.com/music?cid=gn-ols-music-psp-prodfly",
          },
        ],
      },
    ],
  },
  {
    name: "Accessories",
    list: [
      {
        name: "Shop Accessories",
        items: [
          {
            name: "Shop All Accessories",
            link: "/us/shop/goto/buy_accessories",
          },
          {
            name: "Mac",
            link: "/us/shop/goto/mac/accessories",
          },
          {
            name: "iPad",
            link: "/us/shop/goto/ipad/accessories",
          },
          {
            name: "iPhone",
            link: "/us/shop/goto/iphone/accessories",
          },
          {
            name: "Apple Watch",
            link: "/us/shop/goto/watch/accessories",
          },
          {
            name: "Apple Vision Pro",
            link: "/us/shop/goto/vision/accessories",
          },
          {
            name: "AirPods",
            link: "/us/shop/goto/accessories/all_accessories/headphones_speakers?fh=47d1%2B3214%2B45aa%2B45ab&f=apple-overear-sport&page=1",
          },
          {
            name: "TV & Home",
            link: "/us/shop/goto/smart_home/accessories",
          },
        ],
      },
      {
        name: "Explore Accessories",
        items: [
          {
            name: "Made by Apple",
            link: "/us/shop/goto/accessories/all_accessories/made_by_apple",
          },
          {
            name: "Beats by Dr. Dre",
            link: "/us/shop/goto/accessories/all_accessories/beats_featured",
          },
          {
            name: "AirTag",
            link: "/airtag/",
          },
        ],
      },
    ],
  },
  {
    name: "Support",
    list: [
      {
        name: "Explore Support",
        items: [
          {
            name: "iPhone",
            link: "https://support.apple.com/iphone?cid=gn-ols-iphone-psp-explore",
          },
          {
            name: "Mac",
            link: "https://support.apple.com/mac?cid=gn-ols-mac-psp-explore",
          },
          {
            name: "iPad",
            link: "https://support.apple.com/ipad?cid=gn-ols-ipad-psp-explore",
          },
          {
            name: "Watch",
            link: "https://support.apple.com/watch?cid=gn-ols-watch-psp-explore",
          },
          {
            name: "Apple Vision Pro",
            link: "https://support.apple.com/apple-vision-pro?cid=gn-nav-vision-psp-explore",
          },
          {
            name: "AirPods",
            link: "https://support.apple.com/airpods?cid=gn-ols-airpods-psp-explore",
          },
          {
            name: "Music",
            link: "https://support.apple.com/music?cid=gn-ols-music-psp-explore",
          },
          {
            name: "TV",
            link: "https://support.apple.com/tv?cid=gn-ols-tv-psp-explore",
          },
          {
            name: "Explore Support",
            link: "https://support.apple.com/?cid=gn-ols-home-hp-explore",
          },
        ],
      },
      {
        name: "Get Help",
        items: [
          {
            name: "Community",
            link: "https://discussions.apple.com/welcome?cid=gn-com-community-lp-get_help",
          },
          {
            name: "Check Coverage",
            link: "https://checkcoverage.apple.com/us/en?cid=gn-ols-checkcoverage-lp-get_help",
          },
          {
            name: "Repair",
            link: "https://support.apple.com/repair?cid=gn-ols-repair-lp-get_help",
          },
          {
            name: "Contact Us",
            link: "https://getsupport.apple.com/?caller=support.header&cid=gn-ols-contact-mgs_lp-get_help",
          },
        ],
      },
      {
        name: "Helpful Topics",
        items: [
          {
            name: "Get AppleCare+",
            link: "/support/products/?cid=gn-ols-home-acpp-helpful_topics",
          },
          {
            name: "Apple ID & Password",
            link: "https://support.apple.com/apple-id?cid=gn-ols-appleid-psp-helpful_topics",
          },
          {
            name: "Billing & Subscriptions",
            link: "https://support.apple.com/billing?cid=gn-ols-billing-collection-helpful_topics",
          },
          {
            name: "Find My",
            link: "https://support.apple.com/find-my?cid=gn-ols-findmy-collection-helpful_topics",
          },
          {
            name: "Accessibility",
            link: "https://support.apple.com/accessibility?cid=gn-ols-accessibility-psp-helpful_topics",
          },
        ],
      },
    ],
  },
];
