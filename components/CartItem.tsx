import { useState } from 'react'
import { XMarkIcon, PlusIcon, MinusIcon, } from '@heroicons/react/24/outline'

const CartItem = ({ product }: { product: any }) => {


  return(               <li key={product.id} className="flex py-6">
  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
    <img
      src={product.imageSrc}
      alt={product.imageAlt}
      className="h-full w-full object-cover object-center"
    />
  </div>

  <div className="ml-4 flex flex-1 flex-col">
    <div>
      <div className="flex justify-between text-base font-medium text-gray-900">
        <h3>
          <a href={product.href}>{product.name}</a>
        </h3>
        <p className="ml-4">{product.price}</p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
    </div>
    <div className="flex flex-1 items-end justify-between text-sm">
      <p className="text-gray-500">Qty 2</p>

   
    </div>
  </div>
</li>)
}


export default CartItem
