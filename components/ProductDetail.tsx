import pdet from './../images/pdet.jpg'
import { useEffect, useState } from 'react'
import Image from "next/image"
import { ArrowLeftIcon,StarIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
const ProductDetail = () => {
  
  const [hideMe, setHideMe] = useState(true)
  

  useEffect(() => { 
    const stickheader = document.getElementById("detailhead");
       stickyOnScroll();
       
  }, [])
  

  const stickyOnScroll = () => { 
    const stickheader = document.getElementById("detailhead");

    const sticky = (stickheader as any)?.offsetTop
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > sticky) {
   

        

        setHideMe(false)
       


        


      } else {
        setHideMe(true)
      }
    
     })


  }


  return (<div className=" modal overflow-y-hidden   max-h-[300px] bg-white fade  " tabIndex={-1}>
    <div className={` ${hideMe ? "hidden shadow shadow-xl": ""} flex sticky  justify-between px-2`} id="detailhead">
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
    <div>
      <div className="flex gap-1 items-center ">
<ArrowLeftIcon  className="w-5 h-5  text-black"/> <span className="text-black">Back</span>
      </div>
      <div className="grid grid-cols-9 gap-12 w-full">
        <div className='col-start-1 col-end-3'>
          <Image src={pdet} width={600}  alt="fff"/>
        </div>
        <div className='col-start-3 col-end-6  ' >
          <h1>Zyrtec 24 Hour Allergy Relief Antihistamine Liquid Gels</h1>
          <p>Shop all Zyrtec</p>
          <p className="flex items-center"><StarIcon className="h-4 w-4 fill-[#fec12c] stroke-0" /><StarIcon className="h-4 w-4 fill-[#fec12c] stroke-0" /><StarIcon className="h-4 w-4 fill-[#fec12c] stroke-0" /><StarIcon className="h-4 w-4  stroke-[#fec12c]" /><span className=" h-4 text-[12px]">(451)</span></p>
          <span className={`  text-[11px] rounded text-[#2B78C6] bg-[#F2F8FF] pr-10 mb-2 font-bold z-20 px-1`}>FSA/HSA ELIGIBLE</span>
          <p>40ct</p>
          <h3>ingredients</h3>
          <p>
          Inactive Ingredients: Gelatin, Glycerin, Mannitol, Pharmaceutical Ink, Polyethylene Glycol 400, Purified Water, Sodium Hydroxide, Sorbitan, Sorbitol
          </p>
          <p>Read More</p>
          <div className="flex items-center border-t border-b">
            <p>Directions</p>
            <ChevronRightIcon className="w-5 h-z"/>
          </div>
          
        </div>
        <div className='col-start-6 col-end-9'></div>
      </div>
    </div>


  </div>)
}


export default ProductDetail
