import ProductView from "./ProductView"
import Cart from "./Cart"
import { useState } from "react"
import Image from "next/image";
import Header from '../components/Header';
import wLogo from "./../images/shoplogo.svg"
const categories =['Medicine','First Aid & Safety','Snacks & Candy','Food & Pantry','Beauty','Household','Drinks','Personal Care','Home Health','Vitamins & Supplements','Pet','Baby & Child','Frozen','Sales','COVID Essentials Shop']
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    color: 'Black',
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

  const cartTotal = () => {
    let total: number;
    if (cartproducts.length < 1) {
      total= 0
    } else {
      total =cartproducts.reduce((acc: number, prd: any) => {
        return acc + prd.price
      },0)
    }
      console.log(total)
    return total
  }
  return (<>
    <Header toggleCart={toggleCart} cartCount={cartproducts.length} cartTotal={ cartTotal} />
    <div className="grid grid-cols-5  ">
      <div className="col-start-1 col-end-2 divide-y border-r h-screen  ">
      
          <div className="flex flex-col w-full justify-center items-center mt-3">
            <Image src={wLogo} width={88} height={88} alt="fr" />
            <p>Walgreens</p>
            <div className="flex items-center">
                                       <svg width="18" height="18" viewBox="0 0 24 24" fill="#0AAD0A" xmlns="http://www.w3.org/2000/svg"  color="brandPrimaryRegular"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.535 4.32c.478-1.615-1.657-2.671-2.65-1.31L5.24 12.115c-.723.99-.016 2.384 1.212 2.384H11l-1.535 5.18c-.478 1.614 1.657 2.67 2.65 1.31l6.645-9.106c.723-.991.015-2.384-1.212-2.384H13l1.535-5.18Z"></path></svg>
            <p className="text-dummygreen font-bold text-[12px] ">Delivery by 1:05pm</p>
          </div>
          <div className="flex gap-1 items-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg"  className="css-1emnyvb fill-[#2B78C6]"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.553 1.88a2 2 0 0 0-3.111 0l-.408.504a2 2 0 0 1-2.075.674l-.626-.168a2 2 0 0 0-2.517 1.828l-.033.648A2 2 0 0 1 3.501 7.13l-.606.232a2 2 0 0 0-.961 2.958l.353.544a2 2 0 0 1 0 2.181l-.353.544a2 2 0 0 0 .961 2.958l.606.232a2 2 0 0 1 1.282 1.765l.033.648a2 2 0 0 0 2.517 1.828l.626-.168a2 2 0 0 1 2.075.674l.408.504a2 2 0 0 0 3.11 0l.408-.504a2 2 0 0 1 2.075-.674l.626.168a2 2 0 0 0 2.517-1.828l.033-.648a2 2 0 0 1 1.283-1.765l.605-.232a2 2 0 0 0 .962-2.958l-.354-.544a2 2 0 0 1 0-2.181l.354-.544a2 2 0 0 0-.962-2.958l-.605-.232a2 2 0 0 1-1.283-1.765l-.033-.648A2 2 0 0 0 16.66 2.89l-.626.168a2 2 0 0 1-2.075-.674l-.408-.504Zm-7.367 9.266a1.5 1.5 0 0 1 2.121-.001l1.943 1.94 5.436-5.44a1.5 1.5 0 1 1 2.122 2.121l-6.497 6.5a1.5 1.5 0 0 1-2.12 0l-3.004-3a1.5 1.5 0 0 1 0-2.12Z"></path></svg>
            <p className="text-[#2B78C6] font-bold text-[12px] ">100% satisfaction guarantee</p>
          </div>
          </div>
          <div className="flex flex-col w-full px-4 pt-5 gap-1">
          <button className="flex items-start focus:bg-[#343538] focus:text-white  px-3 py-2 rounded-lg bg-[#343538]  gap-2  text-[#343538]"><svg width="24" height="24" viewBox="0 0 24 24" className="focus:fill-[white] fill-[white]" xmlns="http://www.w3.org/2000/svg"  ><path fill-rule="evenodd" clip-rule="evenodd" d="M12.557 8.393a1.5 1.5 0 0 1-1.114 0L9.5 7.616l-1.936.776a1.5 1.5 0 0 1-.558.108H5a1.5 1.5 0 0 1-1.342-2.17l1-2A1.5 1.5 0 0 1 6 3.5h12a1.5 1.5 0 0 1 1.342.83l1 2A1.5 1.5 0 0 1 19 8.5h-2.002a1.5 1.5 0 0 1-.558-.108l-1.94-.776-1.943.777Zm-8.895 2.926c-.164.32-.164.74-.164 1.581v5.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.741.164 1.581.164H7.6c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581v-.5c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C10.76 16 11.04 16 11.6 16h.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C14 16.76 14 17.04 14 17.6v.5c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h1.698c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581v-5.2c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.655c-.32-.164-.74-.164-1.581-.164h-12.2c-.84 0-1.26 0-1.58.164a1.5 1.5 0 0 0-.656.655Z"></path></svg><span className="font-bold">Shop</span></button>
          <button className="flex items-start focus:bg-[#343538] focus:text-white  px-3 py-2 rounded-lg   gap-2  text-[#343538]"><svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg"  ><path fill-rule="evenodd" clip-rule="evenodd" d="M3.95 12.564a1.5 1.5 0 0 0 0 2.122l5.365 5.364a1.5 1.5 0 0 0 2.121 0l7.841-7.842a1.5 1.5 0 0 0 .42-.815l.704-4.24a1.5 1.5 0 0 0-.42-1.306l-1.828-1.829a1.5 1.5 0 0 0-1.306-.419l-4.24.705a1.5 1.5 0 0 0-.815.419l-7.841 7.841Zm13.229-5.69a1.5 1.5 0 1 1-2.122 2.122 1.5 1.5 0 0 1 2.122-2.122Z"></path></svg><span className="font-bold">Deals</span></button>

        </div>
        <div className="flex flex-col w-full px-4 pt-5 gap-4  overflow-y-scroll h-[500px] scrollbar-style">
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
      <ProductView products={products} addTocart={addTocart} />
    <Cart products={cartproducts ? cartproducts : null} open={open} setOPen={setOpen} setClose={setClose} addTocart={addTocart} suggestedProducts={ products} />
    </div>
    </div>
  </>)
}


export default HomePage
