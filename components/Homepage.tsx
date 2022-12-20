import ProductView from "./ProductView"
import Cart from "./Cart"
import { useState } from "react"
import Header from '../components/Header';
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
    <ProductView products={products} addTocart={addTocart} />
    <Cart products={cartproducts? cartproducts : null} open={open} setOPen={setOpen} setClose={setClose} addTocart={addTocart} />
  </>)
}


export default HomePage
