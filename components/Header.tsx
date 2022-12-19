import Image from "next/image";
import Logo from  "./../images/logo.png"

const Header = ({ toggleCart, cartCount, cartTotal }: { toggleCart: any, cartCount: any, cartTotal: any }) => {
  const carT= cartTotal()
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
    
     
        <div className=" flex items-center gap-1 md:w-48 flex-shrink-0">
          <Image className="h-8 md:h-10" src={Logo} alt="" width={50 } height={70} /> <span className="font-bold text-dummygreen">Dummy Groceries</span>
        </div>
    
    
        <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
          <select className="bg-transparent uppercase font-bold text-sm p-4 mr-4" name="" id="">
            <option>all categories</option>
          </select>
          <input className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4" type="text" placeholder="I'm searching for ..."/>
          <svg className="ml-auto h-5 px-4 text-gray-500 svg-inline--fa fa-search fa-w-16 fa-9x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
        </div>
    
        <div className="  hidden sm:flex flex-row gap-1 items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg"  color="systemGrayscale70" className="css-1an9ecb-AddressButton"><path fillRule="evenodd" clipRule="evenodd" d="M20.489 11.816a1.5 1.5 0 0 1 .011.228V19a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1.5h-9V19A1.5 1.5 0 0 1 6 20.5H5A1.5 1.5 0 0 1 3.5 19v-6.956a1.498 1.498 0 0 1 .04-.39l.985-4.597a4.5 4.5 0 0 1 4.4-3.557h6.15a4.5 4.5 0 0 1 4.4 3.557l.985 4.598c.012.052.022.106.029.161ZM6.855 10.5h10.29l-.604-2.814A1.5 1.5 0 0 0 15.075 6.5h-6.15A1.5 1.5 0 0 0 7.46 7.686L6.855 10.5ZM6 14.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm10-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z"></path></svg><span className="font-bold md:text-xl">Delivery To 9163563</span>

        </div>
        <div>
              <a className="bg-dummygreen rounded-full px-4 text-white font-bold">Login</a>
            </div>
    
        <nav className="contents">
          <ul className=" flex items-center">
        
          
            <li className="relative ">
              <button className="" onClick={toggleCart}>
                <div className="absolute -top-1 right-0 z-10 bg-dummygreen text-xs text-white font-bold px-1 py-0.5 rounded-sm">{cartCount}</div>
                <svg className="h-9 lg:h-10 p-2 text-gray-500 svg-inline--fa fa-user fa-w-14 fa-9x"  aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg>
              </button>
        
            </li>
           
          </ul>
        </nav>
    
        <div className=" hidden sm:flex flex-col font-bold">
          <span className="text-xs text-dummygreen">Your Cart</span>
          <span>${carT}</span>
        </div>
      </div>
      
      <hr/>
    </header>)
}



export default Header
