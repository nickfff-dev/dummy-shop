
import { ChevronLeftIcon, ShoppingCartIcon, StarIcon, PlusIcon } from "@heroicons/react/24/outline";

const Product = ({ product, addTocart }: { product: any , addTocart:any}) => {
  return (
    <div  className="group relative" onClick={()=>{addTocart(product)}}>
    <div className="min-h-50   overflow-hidden rounded-md   lg:h-50">
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="h-50  w-full object-center lg:h-auto object-contain"
        />
        <button className="flex  bg-dummygreen rounded-full left-24 top-2 px-2 w-20 group-hover:w-full   group-hover:left-0 absolute text-white font-bold py-1 items-center justify-between "><svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  color="systemGrayscale00"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5A1.5 1.5 0 0 1 13.5 5v5.5H19a1.5 1.5 0 0 1 1.493 1.355L20.5 12a1.5 1.5 0 0 1-1.5 1.5h-5.5V19a1.5 1.5 0 0 1-1.355 1.493L12 20.5a1.5 1.5 0 0 1-1.5-1.5v-5.5H5a1.5 1.5 0 0 1-1.493-1.355L3.5 12A1.5 1.5 0 0 1 5 10.5h5.5V5a1.5 1.5 0 0 1 1.355-1.493L12 3.5Z"></path></svg><p className="group-hover:before:content-['Add_to_cart']  before:content-['Add'] "></p> </button>
    </div>
    <span className={` ${product.category ? "visible": "invisible"} text-[11px] rounded text-[#2B78C6] bg-[#F2F8FF] pr-10 mb-2 font-bold z-20 px-1`}>{product.category}</span>
    <p className="text-2xl font-bold  text-black mt-2">${product.price.toString().split(".")[0]} <sup className="text-[14px] -ml-1">{product.price.toString().split(".")[1]}</sup></p>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          
          </h3>
          <p className="flex items-center"><StarIcon className="h-4 w-4 fill-[#fec12c] stroke-0"/><StarIcon  className="h-4 w-4 fill-[#fec12c] stroke-0"/><StarIcon className="h-4 w-4 fill-[#fec12c] stroke-0"/><StarIcon className="h-4 w-4  stroke-[#fec12c]"/><span className=" h-4 text-[12px]">(451)</span></p>
        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
      </div>
    
    </div>
  </div>
  )
}


export default Product