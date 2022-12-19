import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, PlusIcon, MinusIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import CartItem from './CartItem'
import shoplogo from './../images/shoplogo.svg'

import CartSvg from './../images/cart.svg'
export default function Cart({products, open, setOPen,setClose}:{products:any,open:any, setOPen:any,setClose:any}) {


  return (
    
       <Transition.Root show={open} as={Fragment} >
      <Dialog as="div" className="relative z-40  font-dubai" onClose={setOPen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0   bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0  ">
          <div className="absolute inset-0  ">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-lg   ">
                  <div className="flex h-full flex-col  bg-white shadow-xl ">
                    <div className="flex-1 overflow-y-hidden  bg-gray-100 ">
                    <div  className="bg-white h-24 flex flex-col justify-center    border-b">  
                      <div className="flex items-center   justify-between">
                        
       <div className="ml-3 flex  items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={setClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6 stroke-black stroke-2" aria-hidden="true" />
                          </button>
                        </div>
                        <Dialog.Title className="text-lg  mx-auto font-medium text-gray-900"><span className="flex items-center flex-col">
                       <span className="text-[15px] font-bold text-gray-600"> Personal Walgreens Cart </span>
                       <span className="text-[12px] text-gray-500"> Shopping in 94105</span>
                        
                        </span>
                        </Dialog.Title>
                        
                        
                
                        </div>
                      
                      
                      
                      </div>


                      <div className="overflow-y-scroll">
                      <div className="mt-2 border-b mb-5 bg-white border-t">
                        <div className="flex items-center justify-between py-2 px-2"><span className="flex gap-2"><svg width="22" height="22" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" className="css-1oxvs31"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 2.5a3.24 3.24 0 0 1 2.25.905A3.25 3.25 0 0 1 17.25 7H19a1.5 1.5 0 0 1 1.5 1.5V11H13V9h-2v2H3.5V8.5A1.5 1.5 0 0 1 5 7h1.75a3.25 3.25 0 0 1 3-4.5Zm4.5 4.5A1.25 1.25 0 1 0 13 5.75V7h1.25ZM11 5.75V7H9.75A1.25 1.25 0 1 1 11 5.75ZM3.5 13H11v7.5H5A1.5 1.5 0 0 1 3.5 19v-6Zm9.5 0h7.5v6a1.5 1.5 0 0 1-1.5 1.5h-6V13Z"></path></svg><span className="font-bold">Make this order a gift</span>
                        
                        
                        </span>
                        
                        <label className="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-dummygreen"></div>
 
</label>
                        </div>
                        <div className="bg-white border-t flex justify-between pr-8 py-2">
                          <div className="flex gap-2">
                            <Image src={shoplogo} width={50} alt="shop" />
                            <div className="flex flex-col">
                              <span className="font-bold">
                              Walgreens
                              </span>
                                     <div className="flex items-center">
                                     <svg width="18" height="18" viewBox="0 0 24 24" fill="#0AAD0A" xmlns="http://www.w3.org/2000/svg"  color="brandPrimaryRegular"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.535 4.32c.478-1.615-1.657-2.671-2.65-1.31L5.24 12.115c-.723.99-.016 2.384 1.212 2.384H11l-1.535 5.18c-.478 1.614 1.657 2.67 2.65 1.31l6.645-9.106c.723-.991.015-2.384-1.212-2.384H13l1.535-5.18Z"></path></svg>
          <p className="text-dummygreen font-bold text-[12px] ">Delivery by 1:05pm</p>
        </div>
        <div className="flex gap-1 items-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg"  className="css-1emnyvb fill-[#2B78C6]"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.553 1.88a2 2 0 0 0-3.111 0l-.408.504a2 2 0 0 1-2.075.674l-.626-.168a2 2 0 0 0-2.517 1.828l-.033.648A2 2 0 0 1 3.501 7.13l-.606.232a2 2 0 0 0-.961 2.958l.353.544a2 2 0 0 1 0 2.181l-.353.544a2 2 0 0 0 .961 2.958l.606.232a2 2 0 0 1 1.282 1.765l.033.648a2 2 0 0 0 2.517 1.828l.626-.168a2 2 0 0 1 2.075.674l.408.504a2 2 0 0 0 3.11 0l.408-.504a2 2 0 0 1 2.075-.674l.626.168a2 2 0 0 0 2.517-1.828l.033-.648a2 2 0 0 1 1.283-1.765l.605-.232a2 2 0 0 0 .962-2.958l-.354-.544a2 2 0 0 1 0-2.181l.354-.544a2 2 0 0 0-.962-2.958l-.605-.232a2 2 0 0 1-1.283-1.765l-.033-.648A2 2 0 0 0 16.66 2.89l-.626.168a2 2 0 0 1-2.075-.674l-.408-.504Zm-7.367 9.266a1.5 1.5 0 0 1 2.121-.001l1.943 1.94 5.436-5.44a1.5 1.5 0 1 1 2.122 2.121l-6.497 6.5a1.5 1.5 0 0 1-2.12 0l-3.004-3a1.5 1.5 0 0 1 0-2.12Z"></path></svg>
          <p className="text-[#2B78C6] font-bold text-[12px] ">100% satisfaction guarantee</p>
        </div>
                            </div>
                          </div>
                          <span className="font-bold mt-5">${ products.reduce((acc: any, prd: any) => {
                            
                            return acc + prd.price
                           }, 0)
                           }</span>
                        </div>
                      </div>
                        <div className="-mt-3 ">
                          <div className="bg-[#FAF1E5] py-2 px-1 text-[18px]"><span className="text-[#750046]">Your first delivery is free!</span></div>
                        <div className="flow-root  ">
                          <ul role="list" className="-my-6   divide-y divide-gray-200">
                            {   products.length > 0 ? (products.map((product:any, index:any) => (
                             <CartItem key={index} product ={product} />
                            ))) : (<div className="flex flex-col items-center justify-center"><Image alt="cart" src={CartSvg} width={300 } /><p>Your personal cart is empty</p>    <button onClick={setClose} className="text-dummygreen">Shop Now</button></div>)}
                          </ul>
                        </div>
                      </div>
         </div>
                    </div>

                    <div className="border-t border-gray-200    mb-1 px-1">
                     
                   
                      <div className=" text-center rounded-md border border-transparent bg-dummygreen px-6 py-3">
                        <a
                          href="#"
                          className="  pl-6 font-bold text-xl text-white"
                        >
                         Go to Checkout <span className="float-right bg-[#004d23] flex flex-col justify-center px-2 rounded text-[12px] ">${
                          products.reduce((acc: any, prd: any) => {
                            
                         return acc + prd.price
                        }, 0)
                        }</span>
                        </a>
                      </div>
                  
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  
  )
}
