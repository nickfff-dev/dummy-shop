import Image from "next/image";
import Logo from "./../images/logo.svg"
import { useState , useEffect} from "react";
import { ChevronLeftIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
const Header = ({ toggleCart, cartCount }: { toggleCart: any, cartCount: any, }) => {

  const stickyOnScroll = () => { 
    const stickheader = document.getElementById("instahead");
    const sticky = (stickheader as any)?.offsetTop

    window.addEventListener('scroll', () => {
      if (window.scrollY > sticky) {
   
        stickheader?.classList.add('sticky');
        stickheader?.classList.add('top-0');
        stickheader?.classList.add('z-20');
   


        


      }
      else { 
   
  
        stickheader?.classList.remove('sticky');
        stickheader?.classList.remove('top-0');
        stickheader?.classList.remove('z-20');
     


 
      }
     })



  }

  useEffect(() => { 
    stickyOnScroll();
  }, [])

  
  return (
    <header className="bg-white" id="instahead">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
     
      
        <div className=" h-[56px] flex items-center justify-between gap-2 flex-shrink-0">
        <div className="w-5 pr-10"><svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg"  color="systemGrayscale70"><path fillRule="evenodd" clipRule="evenodd" d="M18.8 17.5c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6Zm0-7c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6Zm0-7c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6Z"></path></svg></div>
          <Image className="" src={Logo} alt="" width={125} /> 
          <div className="flex items-center mt-2 w-20"><ChevronLeftIcon className="bold h-4 w-4 text-[#72767E]"/>
          <p className="font-bold text-[12px] text-[#72767E]">All stores</p></div>
          
        </div>
       
    
        <div className="flex items-center rounded rounded-[8px] bg-[#f6f7f8] h-[56px]  shadow-inner px-2">
     
          <input className="  w-[550px] bg-transparent placeholder-gray-700 placeholder:font-bold placeholder:leading-6  placeholder:text-md font-semibold text-sm pl-4 focus:border-0" type="text" placeholder="Search Walgreens ..."/>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg"  color="systemGrayscale70"><path fillRule="evenodd" clipRule="evenodd" d="M16.396 14.275a7 7 0 1 0-2.121 2.121l3.664 3.665a1.5 1.5 0 0 0 2.122-2.122l-3.665-3.664ZM10.5 14.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"></path></svg>
        </div>

        <div className="  hidden sm:flex flex-row gap-1 items-center">
        <span><svg   viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg"  color="systemGrayscale70" className="h-6 w-6"><path fillRule="evenodd" clipRule="evenodd" d="M20.489 11.816a1.5 1.5 0 0 1 .011.228V19a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1.5h-9V19A1.5 1.5 0 0 1 6 20.5H5A1.5 1.5 0 0 1 3.5 19v-6.956a1.498 1.498 0 0 1 .04-.39l.985-4.597a4.5 4.5 0 0 1 4.4-3.557h6.15a4.5 4.5 0 0 1 4.4 3.557l.985 4.598c.012.052.022.106.029.161ZM6.855 10.5h10.29l-.604-2.814A1.5 1.5 0 0 0 15.075 6.5h-6.15A1.5 1.5 0 0 0 7.46 7.686L6.855 10.5ZM6 14.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm10-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z"></path></svg></span><span className="font-bold text-black text-[15px] leading-4 ">Delivery to 9163563</span>

        </div>
        <div className="hidden sm:flex ">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#0AAD0A" xmlns="http://www.w3.org/2000/svg" className="css-1uiiq64-ServiceEta"><path fillRule="evenodd" clipRule="evenodd" d="M14.535 4.32c.478-1.615-1.657-2.671-2.65-1.31L5.24 12.115c-.723.99-.016 2.384 1.212 2.384H11l-1.535 5.18c-.478 1.614 1.657 2.67 2.65 1.31l6.645-9.106c.723-.991.015-2.384-1.212-2.384H13l1.535-5.18Z"></path></svg>
          <p className="text-dummygreen font-bold ">Delivery by 1:05pm</p>
        </div>
        <div className="bg-dummygreen rounded-full px-4 py-2 text-white font-bold text-xl">
              <button className="">Login</button>
        </div>
        
        <div>
          <button onClick={toggleCart} className={` ${cartCount > 0 ? "bg-dummygreen text-white":"bg-[#f6f7f8] text-black"} rounded-full px-5 py-3  font-bold flex gap-2 items-center`}><svg width="24" height="24" viewBox="0 0 24 24" fill={cartCount > 0? "white":"#343538"} xmlns="http://www.w3.org/2000/svg"  color="systemGrayscale70"><path fillRule="evenodd" clipRule="evenodd" d="M7.923 4.526 8.5 6H19a1.5 1.5 0 0 1 1.455 1.864l-1.5 6A1.5 1.5 0 0 1 17.5 15h-8a1.5 1.5 0 0 1-1.398-.956L5 6.5a1.5 1.5 0 1 1 0-3h1.5a1.5 1.5 0 0 1 1.423 1.026ZM10 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg><span>{ cartCount}</span></button>
       
              </div>
        
      </div>
      
      <hr/>
    </header>)
}



export default Header
