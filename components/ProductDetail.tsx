import pdet from './../images/pdet.jpg'
import { useEffect, useState } from 'react'
import Image from "next/image"
import { ArrowLeftIcon,StarIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
const ProductDetail = ({closeDetail,hideMe}:{closeDetail:any,hideMe:any}) => {
  
 
  const [showDropDown, setShowDropDown] =useState(false)
  const [quantity, setQuantity] = useState(0)



  return (<div className=" modal   bg-white fade  backdrop-blur" tabIndex={-1} id="fodal" > 
    <div className={` ${hideMe ? "hidden ": "shadow shadow-xl sticky top-0 z-40"} flex sticky bg-white w-full  justify-between px-2 py-2`} id="detailhead">
      <div className="flex">
      <Image src={pdet} width={50} height={50} alt="dssd"/>
      <div className="flex flex-col">
        <p className="font-semibold"> Zyrtec 24 Hour Allergy Relief Antihistamine Liquid Gels</p>
        <p> $34.4940 ct</p>
      </div>
      
    </div>
      <button className="px-8  bg-dummygreen font-semibold text-white rounded-xl py-1">
        Add To Cart
        
    </button>
    </div>
    <div className="p-6">
      <div className="flex items-center cursor-pointer " onClick={closeDetail}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M10.94 3.94a1.5 1.5 0 0 1 2.12 2.12L8.622 10.5H19a1.5 1.5 0 0 1 1.493 1.355L20.5 12a1.5 1.5 0 0 1-1.5 1.5H8.621l4.44 4.44a1.5 1.5 0 0 1 .103 2.007l-.103.114a1.5 1.5 0 0 1-2.122 0l-7-7a2.54 2.54 0 0 1-.082-.09 1.334 1.334 0 0 1-.156-.22 1.496 1.496 0 0 1 .123-1.682c.035-.045.074-.088.115-.13l-.082.09c.02-.024.041-.047.063-.07l.02-.02 7-7Z"></path></svg> <span className="text-black text-[15px] font-semibold pl-2">Back</span>
      </div>
      <div className="grid grid-cols-12  gap-3">
        <div className='col-start-2 col-end-5 '>
          <Image src={pdet} width={600}  alt="fff"/>
        </div>
        <div className='col-start-5 col-end-9  gap-4' >
          <h1 className="text-[23px] text-black font-bold">Zyrtec 24 Hour Allergy Relief Antihistamine Liquid Gels</h1>
          <p className="text-[15px] font-semibold underline mb-2">Shop all Zyrtec</p>
          <p className="flex items-center mb-1 gap-[2px]"><StarIcon className="h-5 w-5 fill-[#fec12c] stroke-0" /><StarIcon className="h-5 w-5 fill-[#fec12c] stroke-0" /><StarIcon className="h-5 w-5 fill-[#fec12c] stroke-0" /><StarIcon className="h-5 w-5  stroke-[#fec12c]" /><span className=" text-[15px] font-semibold text-[#72767E]">4.5</span><span className=" h-5 text-[15px] underline">(451)</span></p>
          <p className={`  text-[15px] rounded text-[#2B78C6]  pr-10 mb-1 font-semibold z-20 px-1`}>FSA/HSA ELIGIBLE</p>
          <p className="mb-6 text-[15px] text-[#72767E] font-semibold">40ct</p>
          <h2 className="text-[15px] capitalize font-semibold text-black">ingredients</h2>
          <p className="text-[15px] text-[#72767E]">
          Inactive Ingredients: Gelatin, Glycerin, Mannitol, Pharmaceutical Ink, Polyethylene Glycol 400, Purified Water, Sodium Hydroxide, Sorbitan, Sorbitol
          </p>
          <p className="text-[#72767E] font-semibold cursor-pointer underline mb-2">Read more</p>
          <div className="flex items-center justify-between border-t border-b  h-12">
            <p className="text-[15px]">Directions</p>
            <ChevronRightIcon className="w-4 h-z"/>
          </div>
          
        </div>
        <div className='col-start-9 col-end-12 '>
          <div className="rounded-xl border flex items-start flex-col space-y-5 px-3 py-3">
            <p className="pt-2">$23.99</p>
            <p>$12.00 each</p>
            <p>Free Delivery</p>
            <p className="flex items-center"><svg data-testid="inventory_high_icon_custom" width="1em" height="1em" viewBox="0 0 24 24" fill="C7C8CD" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="16.5" width="8" height="3" rx="1.5" fill="green" fill-opacity="0.7"></rect><rect x="5.5" y="10.5" width="13" height="3" rx="1.5" fill="green" fill-opacity="0.8"></rect><rect x="3" y="4.5" width="18" height="3" rx="1.5" fill="green"></rect></svg><span>Many in Stock</span></p>
            
          
            <button onClick={() => {
              setShowDropDown(!showDropDown)
            }} id="dropdownDefault" data-dropdown-toggle="dropdown" className="w-full bg-[#f6f7f8]  flex justify-center text-black font-bold text-lg   rounded-lg  px-4 py-2.5  inline-flex items-center  " type="button"><span className="text-center grow" >{ quantity}</span><svg className=" flex-none w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            

<div id="dropdown" className={`${showDropDown ? "absolute w-80  top-64": "hidden"}  rounded rounded-xl  bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
              <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownDefault">
                {
                  Array.from(Array(9).keys()).map((item: any, index: any) => {
                    return(      <li className="rounded-xl hover:bg-gray-300 cursor-pointer" key={index} onClick={() => {
                      setQuantity( (item+1))
                    }}>
                      <button  className="block py-1 px-4 ">{item +1}</button>
                    </li>)
                  })
                }
     
    </ul>
            </div>
            <button className="bg-dummygreen  text-white font-bold w-full  rounded-lg text-lg px-4 py-2.5   ">Add To Cart</button>
          </div>
          <div className="flex gap-1 items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg"  className="css-1emnyvb fill-[#2B78C6]"><path fillRule="evenodd" clipRule="evenodd" d="M13.553 1.88a2 2 0 0 0-3.111 0l-.408.504a2 2 0 0 1-2.075.674l-.626-.168a2 2 0 0 0-2.517 1.828l-.033.648A2 2 0 0 1 3.501 7.13l-.606.232a2 2 0 0 0-.961 2.958l.353.544a2 2 0 0 1 0 2.181l-.353.544a2 2 0 0 0 .961 2.958l.606.232a2 2 0 0 1 1.282 1.765l.033.648a2 2 0 0 0 2.517 1.828l.626-.168a2 2 0 0 1 2.075.674l.408.504a2 2 0 0 0 3.11 0l.408-.504a2 2 0 0 1 2.075-.674l.626.168a2 2 0 0 0 2.517-1.828l.033-.648a2 2 0 0 1 1.283-1.765l.605-.232a2 2 0 0 0 .962-2.958l-.354-.544a2 2 0 0 1 0-2.181l.354-.544a2 2 0 0 0-.962-2.958l-.605-.232a2 2 0 0 1-1.283-1.765l-.033-.648A2 2 0 0 0 16.66 2.89l-.626.168a2 2 0 0 1-2.075-.674l-.408-.504Zm-7.367 9.266a1.5 1.5 0 0 1 2.121-.001l1.943 1.94 5.436-5.44a1.5 1.5 0 1 1 2.122 2.121l-6.497 6.5a1.5 1.5 0 0 1-2.12 0l-3.004-3a1.5 1.5 0 0 1 0-2.12Z"></path></svg>
            <p className="text-[#72767E] text-[15px] ">100% satisfaction guarantee</p>
           
          </div>
          <p className="text-[#72767E] text-[15px] text-center ">Place your order with peace of mind.</p>
        </div>
      </div>
    </div>


  </div>)
}


export default ProductDetail
