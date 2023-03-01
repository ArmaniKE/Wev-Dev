export interface Product {
    id: number;
    name: string;
    pic: string;
    link: string;
    price: number;
    description: string;
    rating: string;
    catId: number;
    like: number;
    show: boolean;
  }
  
export const products = [
    {
      id: 1,
      name: 'iPhone 13',
      pic: 'data:image/jpeg;base64,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',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
      price: 383700,
      description: 'A large phone with one of the best cameras',
      rating: '4.8/5',
      catId: 1,
      like: 0,
      show: true
    },
    {
      id: 2,
      name: 'iPhone 14 Pro Max',
      pic: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hab/hed/62948780671006/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
      price: 696000,
      description: 'A great phone with one of the best screens',
      rating: '4.92/5',
      catId: 1,
      like: 0,
      show: true
    },
    {
      id: 3,
      name: 'Apple Watch Series 8',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
      price: 231980,
      description: 'Tracks your temperature while you sleep',
      rating: '4.66/5',
      catId: 1,
      like: 0,
      show: true
    },
    {
      id: 4,
      name: 'Xiaomi Redmi Watch 2 Lite',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he4/hdc/47874442559518/smart-casy-xiaomi-redmi-watch-2-lite-gl-black-103246651-1.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-2-lite-gl-chernyi-103246651/?c=750000000#!/item',
      price: 31886,
      description: 'Tracks your steps while you run',
      rating: '4.2/5',
      catId: 1,
      like: 0,
      show: true
    },
    {
      id: 5,
      name: 'Samsung Galaxy S22 Ultra',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/h1e/48695060561950/samsung-galaxy-s22-ultra-12-256gb-cernyj-podarok-103668309-1.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-256-gb-chernyi-103668309/?c=750000000#!/item',
      price: 511570,
      description: 'The Galaxy S22 Ultra boasts a larger 2.4um pixel sensor for capturing more light and data, as well as a Super Clear Glass lens for capturing nighttime videos without flares.',
      rating: '4.8/5',
      catId: 1,
      like: 0,
      show: true
    }, 
    {
      id: 6,
      name: 'Monitor Samsung Odyssey G3',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/h32/50919545274398/samsung-odyssey-g3-ls24ag300nixci-cernyj-104946920-1.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-odyssey-g3-ls24ag300nixci-chernyi-104946920/?c=750000000#!/item',
      price: 104980,
      description: 'Gaming monitor with high speed response time in 1 ms',
      rating: '4.82/5',
      catId: 2,
      like: 0,
      show: true
    },
    {
      id: 7,
      name: 'Apple MacBook Air 13',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/he9/52679187890206/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-1.jpg', 
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000#!/item',
      price: 628250,
      description: 'Thin, light structure in aluminum case and a 13-inch screen.',
      rating: '4.79/5',
      catId: 2,
      like: 0,
      show: true
    },
    {
      id: 8,
      name: 'Apple iPad Air 2022 10.9',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h4f/49580851789854/apple-ipad-air-5-2022-wi-fi-mm9c3rk-a-10-9-dujmov-8-gb-64-gb-fioletovyj-104235453-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2022-10-9-64gb-wi-fi-seryi-104235453/?c=750000000#!/item',
      price: 306910,
      description: 'An iOS tablet that is lighter and thinner than previous tablets',
      rating: '4.93/5',
      catId: 2,
      like: 0,
      show: true
    },
    {
      id: 9,
      name: 'Apple iMac 24',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/hb7/34185499017246/apple-imac-24-2021-24m182sux-mgtf3-serebristyj-101530799-1-Container.jpg',
      link: 'https://kaspi.kz/shop/p/apple-imac-24-2021-24m182sux-mgtf3-serebristyi-101530799/?c=750000000#!/item',
      price: 849900,
      description: 'Apples primary desktop computer. The iMac is an "all-in-one," which houses the computer, drives and monitor in the same case. Apple also makes two computers with separate monitors: a mini desktop and workstation (see Mac mini and Mac Pro). The top iMac model used to be the iMac Pro.',
      rating: '4.49/5',
      catId: 2,
      like: 0,
      show: true
    },
    {
      id: 10,
      name: 'ASUS TUF Gaming A15',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/ha0/62100002635806/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item',
      price: 369990,
      description: 'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 Pro gaming laptop that can carry you to victory.',
      rating: '4.49/5',
      catId: 2,
      like: 0,
      show: true
    },
    {
      id: 11,
      name: 'Sony PlayStation 5',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item',
      price: 332984,
      description: 'Bigger roster of exclusive games and better graphics',
      rating: '4.89/5',
      catId: 3,
      like: 0,
      show: true
    },
    {
      id: 12,
      name: 'Телевизор Samsung',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item',
      price: 197940,
      description: 'Samsung SMART TV is a television set with integrated Internet capabilities that offers more advanced computing ability and connectivity than a basic television set.',
      rating: '4.69/5',
      catId: 3,
      like: 0,
      show: true
    },
    {
      id: 13,
      name: 'HyperX Quadcast',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/ha6/49342921834526/kingston-hyperx-quadcast-cernyj-22400163-1-Container.jpg',
      link: 'https://kaspi.kz/shop/p/hyperx-quadcast-22400163/?c=750000000#!/item',
      price: 68330,
      description: 'The HyperX QuadCast™ is the ideal all-inclusive standalone microphone for the aspiring streamer or podcaster looking for a condenser mic with quality sound.',
      rating: '4.98/5',
      catId: 3,
      like: 0,
      show: true
    },
    {
      id: 14,
      name: 'Canon EOS 250D',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h4b/32210465325086/canon-eos-250d-ef-s-18-55-is-stm-kit-black-2240118-1-Container.jpg',
      link: 'https://kaspi.kz/shop/p/canon-eos-250d-ef-s-18-55-is-stm-kit-2240118/?c=750000000#!/item',
      price: 287930,
      description: 'Inside its portable body, the EOS 250D features a 24.1-megapixel sensor and a DIGIC 8 image processor for superb results on the move. An optical viewfinder gives a clear, real-time view of the world.',
      rating: '4.59/5',
      catId: 3,
      like: 0,
      show: true
    },
    {
      id: 15,
      name: 'Hogwarts Legacy PS5',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/h07/68357087002654/hogwarts-legacy-ps5-108635508-1.jpg',
      link: 'https://kaspi.kz/shop/p/hogwarts-legacy-ps5-108635508/?c=750000000#!/item',
      price: 41523,
      description: 'Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s.',
      rating: '4.4/5',
      catId: 3,
      like: 0,
      show: true
    },
    {
      id: 16,
      name: 'Палатка TUOHAI',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hc1/51399312932894/tuohai-ag2038-oranzevyj-105227172-1.jpg',
      link: 'https://kaspi.kz/shop/p/tuohai-ag2038-oranzhevyi-105227172/?c=750000000#!/item',
      price: 77553,
      description: 'Appointment: for fishing Number of places: 4 Type of frame: internal Haste sealant: glued',
      rating: '4.6/5',
      catId: 4,
      like: 0,
      show: true
    },
    {
      id: 17,
      name: 'Land Rover Land ROVER 26',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/hdc/51497808003102/land-rover-land-rover-26-kolesa-18-rama-model-2022g-26-dujm-2022-18-dujmov-cernyj-105280105-1.jpg',
      link: 'https://kaspi.kz/shop/p/land-rover-land-rover-26-kolesa-18-rama-model-2022g-26-djuim-2022-18-djuimov-chernyi-105280105/?c=750000000#!/item',
      price: 74091,
      description: 'Bike camping is about escaping, about being off the beaten path, riding somewhere you could never get in just one day.',
      rating: '4.33/5',
      catId: 4,
      like: 0,
      show: true
    },
    {
      id: 18,
      name: 'Беговая дорожка Genau TR50',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h39/67413754413086/genau-tr50-26800030-1.jpg',
      link: 'https://kaspi.kz/shop/p/genau-tr50-26800030/?c=750000000#!/item',
      price: 219790,
      description: 'A treadmill is a stationary exercise machine that features a walking or running belt designed for indoor cardio exercise.',
      rating: '4.9/5',
      catId: 4,
      like: 0,
      show: true
    },
    {
      id: 19,
      name: 'Optimum Nutrition Serious Mass',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/hab/31738740768798/optimum-nutrition-serious-mass-12-lbs-shokolad-5455-g-29501826-1.jpg',
      link: 'https://kaspi.kz/shop/p/optimum-nutrition-serious-mass-12-lbs-shokolad-5455-g-29501826/?c=750000000#!/item',
      price: 51800,
      description: 'Each serving of Optimum Nutrition Serious Mass contains 1,263 calories and less than 5.5g of fat.',
      rating: '4.98/5',
      catId: 4,
      like: 0,
      show: true
    },
    {
      id: 20,
      name: 'Decathlon SNB 100 4317154 winter',
      pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h02/67859087261726/decathlon-snb-100-4317154-winter-142-sm-fioletovyi-108432965-1.jpg',
      link: 'https://kaspi.kz/shop/p/decathlon-snb-100-4317154-winter-142-sm-fioletovyi-108432965/?c=750000000#!/item',
      price: 64900,
      description: 'Snowboard is simply a skateboard without the wheels with some special touches in design for efficiency.',
      rating: '4.80/5',
      catId: 4,
      like: 0,
      show: true
    },
    
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */