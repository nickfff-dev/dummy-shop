import ProductView from "./ProductView"
import Cart from "./Cart"
import { useState , useEffect} from "react"
import Image from "next/image";
import Header from '../components/Header';
import banner from './../images/banner.svg'
import { ChevronRightIcon } from "@heroicons/react/24/outline";


import wLogo from "./../images/shoplogo.svg"
import productdata from "../data/productdata";
const categories =['Medicine','First Aid & Safety','Snacks & Candy','Food & Pantry','Beauty','Household','Drinks','Personal Care','Home Health','Vitamins & Supplements','Pet','Baby & Child','Frozen','Sales','COVID Essentials Shop']


const HomePage = () => {
  const [products, setProducts] =useState(productdata)
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
                <p key={index} className="mb-3 font-bold">{category}</p>
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
