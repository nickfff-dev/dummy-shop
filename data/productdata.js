const products = [
  {
    id: 7,
    name: "Bobo's Oat Bar, Chocolate Almond Butter, Stuff'd",
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7f0bde29-b828-45d7-867f-fe895dc081d4.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 3.49,
    color: '2.5 oz',
    category: "Gluten-Free",
    quantity: 1,
    BOGOF: true,
    gift: false,
    details: "Plant based. Since 2003, our small-batch Boulder bakery has dreamed up yummy oat bar recipes using wholesome simple ingredients. When our bakers figured out how to literally pump nut butters smack in the middle of our humble oat bar, we shouted Bingo! Same beloved bar, now Stuff’d with a heart of creamy goodness. Bake with you in mind. Baked with love. Boulder, Colorado."
  },
  {
    id: 8,
    name: "Ricola Herb Throat Drops, Sugar Free, Lemon Mint, Family Pack",
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c25b447e-eafe-4ad8-8dd0-38c312839b58.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 6.99,
    color: '45 each',
    category: "Gluten-Free",
    quantity: 1,
    BOGOF: true,
    gift: false,
    details: "Ascorbic Acid (vitamin C), Aspartame, Citric Acid, Extracts Of Lemon Balm And A Ricola Herb Mixture (elder, Horehound, Hyssop, Lemon Balm, Linden Flowers, Mallow, Peppermint, Sage, Thyme, Wild Thyme), Isomalt, Natural Color (beta-"
  },
  {
    id: 9,
    name: "Nabisco Original Saltine Crackers",
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8d0d2f1f-41b7-4cec-8115-3f7a1e552626.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 5.49,
    color: '16 oz',
    quantity: 1,
    BOGOF: true,
    gift: false,
    details:"Unbleached Enriched Flour (wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate {vitamin B1}, Riboflavin {vitamin B2}, Folic Acid), Canola Oil, Palm Oil, Sea Salt, Salt, Malted Barley Flour, Baking Soda, Yeast."
    
  },
  {
    id: 10,
    name: "Hostess Powdered DONETTES Bag Sugar Mini Donuts",
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_24e53d51-8db2-4382-8a73-fe766f216433.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 4.79,
    color: '10.5 oz',
    quantity: 1,
    BOGOF: true,
    gift: false,
    details: "Enriched Flour (wheat Flour, Malted Barley Flour, Niacin, Ferrous Sulfate Or Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), Water, Palm Oil, Dextrose, Sugar, Cornstarch, Soybean Oil, Glycerin, Contains 2% Or Less:"
    
    
  },
  {
    id: 11,
    name: "Chips Ahoy! Original Chocolate Chip Cookies",
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/296x296/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f12f611e-797b-4b02-bd17-3ec9e50582b9.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 4.79,
    color: '13 oz',
    quantity: 1,
    BOGOF: true,
    gift: false,
    details:"Unbleached Enriched Flour (wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate {vitamin B1}, Riboflavin {vitamin B2}, Folic Acid), Semisweet Chocolate Chips (sugar, Chocolate, Cocoa Butter, Dextrose, Milk, Soy Lecithin), Sugar,"
    
  },
  {
    id: 12,
    name: "Pepperidge Farm® Goldfish® Cheddar Crackers",
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/296x296/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_939c2e4b-4f27-40b0-af10-1a5e6cee4fa0.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 3.29,
    color: '6.6 oz',
    quantity: 1,
    BOGOF: true,
    gift: false,
    details:"Unbleached Enriched Flour (wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate Vitamin B1}, Riboflavin {vitamin B2}, Folic Acid), Canola Oil, Palm Oil, Sugar, Salt, Leavening (calcium Phosphate, Baking Soda), High Fructose Corn"
  },
  {
    id: 1,
    name: 'FLONASE 24Hr Allergy Relief Nasal Spray',
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_02886abb-a978-4b00-ba79-61a89f6d946e.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 52.99,
    color: '288 ct',
    category: "FSA / HSA Eligible",
    quantity: 1,
  
    details: "Benzalkonium Chloride, Dextrose, Microcrystalline Cellulose, Phenylethyl Alcohol, Polysorbate 80, Purified Water, Sodium Carboxymethylcellulose"
  },
  {
    id: 2,
    name: 'Always Ultra Thin Pad with Wings Size 2',
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cab0e34e-685f-4bb6-9da1-f4033614e1a2.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 8.99,
    color: '40 ct',
    category: "Super Absorbency",
    quantity: 1,
    details:"Size 2"

  },  {
    id: 3,
    name: 'Binax NOW Antigen Self Test, Covid-19',
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c4df6980-4889-4c04-9e82-280d71620d4a.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 23.99,
    color: '2 each',
    category: "FSA / HSA Eligible",
    quantity: 1,
    details: "A rapid test for the qualitative detection of Covid-19 antigens in nasal swab specimens. For infection detection. Easy: A simple nasal swab. Fast: Results in 15 minutes. This item is electronically protected"
  },  {
    id: 4,
    name: 'Flowflex Antigen Home Test, Covid-19',
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b14f94ad-f2a2-4374-8629-5f1fbbfb37ad.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 9.99,
    color: '1 each',
    category: "FSA / HSA Eligible",
    quantity: 1,
    details:"Easy to use. Accurate. Quick results. For in vitro diagnostic use. IVD. Further information included. 2 degree C. 36 degree F. 30 degree C. 86 degree F. Contents: 1 test cassette. 1 extraction buffer tube. 1 disposable nasal swab (Sterile Nasal Swab). 1 package insert (En/Es)"
  },  {
    id: 5,
    name: 'Mucinex® DM 12 Hr Relief Tablets, 600 mg Guaifenesin, 30 mg',
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a8d117ac-8295-435c-b8e8-d4437c2012ea.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 24.99,
    color: '20 ct',
    category: "FSA / HSA Eligible",
    quantity: 1,
    details:"Other Information: Store at 68-77 degrees F (20-25 degrees C). Misc: 600 mg guaifenesin & 30 mg dextromethorphan HBr extended-release bi-layer tablets. Controls cough; thins and loosens mucus; immediate and extended release."
  },  {
    id: 6,
    name: 'Aspercreme Pain Relief Patch, Max Strength',
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/296x296/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c9e1c0e6-408e-476d-8e16-22df93e396d1.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 14.49,
    color: '5 ct',
    category: "FSA / HSA Eligible",
    quantity: 1,
    details:"Aluminum Glycinate, Aluminum Hydroxide, Cellulose Gum, Glycerin, Methyl Acrylate/2-ethylhexyl Acrylate Copolymer, Methylparaben, Nonoxynol-30, Polyacrylic Acid, Polysorbate 80, Propylene Glycol, Silica, Sodium Polyacrylate, Tartaric"
  }, 
]
export default products
