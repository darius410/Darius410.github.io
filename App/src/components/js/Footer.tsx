import Divider from "./Divider"


function Footer() {


    return (

        <>

        

        <div className="flex flex-col lg:flex-col justify-between items-center footer-bg pt-12 text-center text-black text-3xl  w-full h-[200px]  lg:px-20 lg:justify-between lg:h-[200px] lg:items-center" >
     
                  <img src="./src/img/Untitled-2.png" className="w-7/12  relative top-[50px] self-center md:w-1/2 lg:w-3/6"/>

                

        {/* <ul className="flex flex-row  text-3xl  bg-white justify-center relative top-11 font-secondary pt-3 lg:top-[-60px] lg:w-1/3  lg:h-9 lg:mt-1 lg:py-0">

            <li className="footerLinks"> ABOUT </li>
            <li className="footerLinks"> BLOG </li>
            <li className="footerLinks"> PORTFOLIO </li>
            <li className="footerLinks text-white"><span className="reverseSpan"> FIND ME </span></li>
            
        </ul> */}
    <div className="w-screen font-secondary bg-white text-black text-xl" >Copyright 2023 - Darius Hansley</div>

    </div>

    </>
    )
  }
  
  export default Footer
  