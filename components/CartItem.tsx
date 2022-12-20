import { useState } from 'react'
import { XMarkIcon, PlusIcon, MinusIcon,PencilIcon, } from '@heroicons/react/24/outline'

const CartItem = ({ product }: { product: any }) => {

  const [quantity, setQuantity] = useState(0)
  
  
  return (
    <li key={product.id} className="flex py-4">
  <div className="h-10 w-10 flex-shrink-0 overflow-hidden  ">
    <img
      src={product.imageSrc}
      alt={product.imageAlt}
      className="h-full w-full object-cover object-center"
    />
  </div>

  <div className="ml-4 flex flex-1 flex-col">
    <div>
      <div className="flex justify-between text-base text-gray-900">
        <h3 >
          <a href={product.href}>{product.name}</a>
          </h3>
         
        <div className="flex px-1"><p className="border px-2 rounded border-black">2</p>  <p className="ml-5">${parseFloat(product.price).toLocaleString('en-Us')}.00</p></div>
      </div>
      <p className=" text-sm text-gray-500 text-[10px]">{product.color}</p>
    </div>
    <div className="flex flex-1 items-end space-x-4 text-sm mt-3">
        <div className="text-gray-500 flex"><svg width="18" height="18" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" color="systemGrayscale70"><path fillRule="evenodd" clipRule="evenodd" d="M14.561 6.563a1.5 1.5 0 0 1-.001-2.121l.38-.38a1.5 1.5 0 0 1 2.121 0L19.94 6.94a1.5 1.5 0 0 1 0 2.12l-.378.38a1.5 1.5 0 0 1-2.121 0l-2.88-2.877ZM3.542 18.65a1.5 1.5 0 0 0 1.805 1.798l3.763-.885a1.5 1.5 0 0 0 .716-.399l6.112-6.103a1.5 1.5 0 0 0 0-2.122L13.062 8.06a1.5 1.5 0 0 0-2.122 0l-6.135 6.135a1.5 1.5 0 0 0-.4.723l-.862 3.731Z"></path></svg><span className="capitalize text-font-bold text-[12px]">add instructions</span></div>
        <div className="text-gray-500 flex"><svg width="18" height="18" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg"  color="systemGrayscale70"><path fillRule="evenodd" clipRule="evenodd" d="M17.5 4h-3.563a2 2 0 0 0-3.874 0H6.5a1.5 1.5 0 1 0 0 3h11a1.5 1.5 0 0 0 0-3ZM7 9a1 1 0 0 0-1 1v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10a1 1 0 0 0-1-1H7Z"></path></svg><span className="capitalize text-font-bold text-[12px]">remove</span></div>

   
    </div>
  </div>
</li>)
}


export default CartItem
