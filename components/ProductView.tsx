import Product from "./Product"
import { useEffect } from "react"
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowSmallRightIcon, ChevronLeftIcon, ChevronRightIcon,  } from "@heroicons/react/24/outline"
function ProductView({ products, addTocart }: { products: any, addTocart: any }) {
   

  return (
    <div className="bg-white -mt-6">
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center"><h2 className="text-[28px] font-bold tracking-tight  text-gray-900">FSA & HSA Eligible</h2><div className="flex ">
          <span className="flex items-center  w-24" ><span className="text-dummygreen font-bold text-[15px]">View more</span> <ChevronRightIcon className="stroke-dummygreen stroke-2 h-3 mt-1" /></span>
          <span className="flex items-center gap-1 "> <ChevronLeftIcon className=" bg-gray-200 stroke-gray-400 stroke-2 rounded-full p-2 w-9 " type="button"/> <ChevronRightIcon className=" bg-gray-300 stroke-2 rounded-full p-2 w-9"/> </span>
        </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-3 ">
          {products.map((product:any, index:number) => (
            <Product key={ index} product={product} addTocart={addTocart}/>
          ))}
        </div>
      </div>
    </div>
  )
}


export default ProductView
