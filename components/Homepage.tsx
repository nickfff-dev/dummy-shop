import ProductView from "./ProductView"
import Cart from "./Cart"
import { useState , useEffect} from "react"
import Image from "next/image";
import Header from '../components/Header';
import banner from './../images/banner.svg'
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import wLogo from "./../images/shoplogo.svg"
const categories =['Medicine','First Aid & Safety','Snacks & Candy','Food & Pantry','Beauty','Household','Drinks','Personal Care','Home Health','Vitamins & Supplements','Pet','Baby & Child','Frozen','Sales','COVID Essentials Shop']
const products = [
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
  },  {
    id: 7,
    name: "Bobo's Oat Bar, Chocolate Almond Butter, Stuff'd",
    href: '#',
    imageSrc: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7f0bde29-b828-45d7-867f-fe895dc081d4.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 3.49,
    color: '2.5 oz',
    category: "Gluten-Free",
    quantity: 1,
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
    details:"Unbleached Enriched Flour (wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate Vitamin B1}, Riboflavin {vitamin B2}, Folic Acid), Canola Oil, Palm Oil, Sugar, Salt, Leavening (calcium Phosphate, Baking Soda), High Fructose Corn"
  },
]

const HomePage = () => {
  
  const [cartproducts, setCartProducts] = useState<any>([])
  const [open, setOpen] = useState(false)
  const setClose = () => {
    setOpen(false)
  }

  const toggleCart = () => {
    setOpen(!open)
  }
  const addTocart = (product: any) => {
    setCartProducts(
      [
        ...cartproducts,
        product
      ]
    )
  }
  const removeFromCart = (product: any) => {
    
    var array = [...cartproducts]

    var index = array.indexOf(product)
    if (index !== -1) {
      array.splice(index, 1);
      setCartProducts({cartproducts: array})
    }
  }

  return (<>
    <Header toggleCart={toggleCart} cartCount={cartproducts.length}  />

    <div className="grid lg:grid-cols-5 grid-flow-row sm:grid-cols-5  grid-cols-5 min-w-[1000px]">
      <div className="col-start-1 col-end-2 divide-y border-r border-r-2 h-screen fixed sm:hidden lg:block  ">
      
          <div className="flex flex-col w-full justify-center gap-1 items-center mt-3 row-start-1 row-end-2">
            <Image src={wLogo} width={88} height={88} alt="fr" />
            <p>Walgreens</p>
            <div className="flex items-center">
                                       
            <p className="text-gray-400 font-bold text-[13px] ">Everyday Store Prices</p>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#C7C8CD" xmlns="http://www.w3.org/2000/svg" color="systemGrayscale30"><path fillRule="evenodd" clipRule="evenodd" d="m16.879 12-5.94-5.94a1.5 1.5 0 0 1 2.122-2.12l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.122-2.12L16.88 12Z"></path></svg>
          </div>
          <div className="flex gap-1 items-center mb-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#000340" xmlns="http://www.w3.org/2000/svg"  className="css-1emnyvb fill-[#2B78C6]"><path fillRule="evenodd" clipRule="evenodd" d="M13.553 1.88a2 2 0 0 0-3.111 0l-.408.504a2 2 0 0 1-2.075.674l-.626-.168a2 2 0 0 0-2.517 1.828l-.033.648A2 2 0 0 1 3.501 7.13l-.606.232a2 2 0 0 0-.961 2.958l.353.544a2 2 0 0 1 0 2.181l-.353.544a2 2 0 0 0 .961 2.958l.606.232a2 2 0 0 1 1.282 1.765l.033.648a2 2 0 0 0 2.517 1.828l.626-.168a2 2 0 0 1 2.075.674l.408.504a2 2 0 0 0 3.11 0l.408-.504a2 2 0 0 1 2.075-.674l.626.168a2 2 0 0 0 2.517-1.828l.033-.648a2 2 0 0 1 1.283-1.765l.605-.232a2 2 0 0 0 .962-2.958l-.354-.544a2 2 0 0 1 0-2.181l.354-.544a2 2 0 0 0-.962-2.958l-.605-.232a2 2 0 0 1-1.283-1.765l-.033-.648A2 2 0 0 0 16.66 2.89l-.626.168a2 2 0 0 1-2.075-.674l-.408-.504Zm-7.367 9.266a1.5 1.5 0 0 1 2.121-.001l1.943 1.94 5.436-5.44a1.5 1.5 0 1 1 2.122 2.121l-6.497 6.5a1.5 1.5 0 0 1-2.12 0l-3.004-3a1.5 1.5 0 0 1 0-2.12Z"></path></svg>
            <p className="text-[#2B78C6] font-bold text-[13px] ">100% satisfaction guarantee</p>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg"  data-testid="chevron-cta" ><path fillRule="evenodd" clipRule="evenodd" d="m16.879 12-5.94-5.94a1.5 1.5 0 0 1 2.122-2.12l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.122-2.12L16.88 12Z"></path></svg>
          </div>
          </div>
          <div className="flex flex-col w-full px-4 pt-5 gap-1 ">
          <button className="flex items-start bg-[#343538] text-white  px-3 py-2 rounded-lg    gap-2  "><span><svg width="24" height="24" viewBox="0 0 24 24" className="focus:fill-[white] fill-[white]" xmlns="http://www.w3.org/2000/svg"  ><path fillRule="evenodd" clipRule="evenodd" d="M12.557 8.393a1.5 1.5 0 0 1-1.114 0L9.5 7.616l-1.936.776a1.5 1.5 0 0 1-.558.108H5a1.5 1.5 0 0 1-1.342-2.17l1-2A1.5 1.5 0 0 1 6 3.5h12a1.5 1.5 0 0 1 1.342.83l1 2A1.5 1.5 0 0 1 19 8.5h-2.002a1.5 1.5 0 0 1-.558-.108l-1.94-.776-1.943.777Zm-8.895 2.926c-.164.32-.164.74-.164 1.581v5.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.741.164 1.581.164H7.6c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581v-.5c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C10.76 16 11.04 16 11.6 16h.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C14 16.76 14 17.04 14 17.6v.5c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h1.698c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581v-5.2c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.655c-.32-.164-.74-.164-1.581-.164h-12.2c-.84 0-1.26 0-1.58.164a1.5 1.5 0 0 0-.656.655Z"></path></svg></span><span className="font-bold">Shop</span></button>
          <button className="flex items-start   px-3 py-2 rounded-lg   gap-2  "><svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg"  ><path fillRule="evenodd" clipRule="evenodd" d="M3.95 12.564a1.5 1.5 0 0 0 0 2.122l5.365 5.364a1.5 1.5 0 0 0 2.121 0l7.841-7.842a1.5 1.5 0 0 0 .42-.815l.704-4.24a1.5 1.5 0 0 0-.42-1.306l-1.828-1.829a1.5 1.5 0 0 0-1.306-.419l-4.24.705a1.5 1.5 0 0 0-.815.419l-7.841 7.841Zm13.229-5.69a1.5 1.5 0 1 1-2.122 2.122 1.5 1.5 0 0 1 2.122-2.122Z"></path></svg><span className="font-bold">Deals</span></button>

        </div>
        <div className="flex flex-col w-full px-6 pt-5 gap-4  overflow-y-scroll h-[500px] scrollbar-style">
          {
            categories.map((category: any, index:number) => {
              return (
                <p key={index} className="mb-3 font-bold">{ category}</p>
              )
            })
         }

        </div>
        
      </div>
      <div className="col-start-2 col-end-6">
        <div className=" h-32   rounded p-5 mb-5">
          <Image src={banner} alt="banner" className="rounded-xl" />
          <p className="float-right text-sm text-gray-500">Sponsored</p>
        </div>
      <ProductView products={products} addTocart={addTocart} removeFromCart={removeFromCart} />
    <Cart products={cartproducts ? cartproducts : null} open={open} setOPen={setOpen} setClose={setClose} addTocart={addTocart} suggestedProducts={ products} />
    </div>
    </div>
  </>)
}


export default HomePage
