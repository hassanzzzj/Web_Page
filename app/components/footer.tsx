import logo from"@/app/assets/Logo.png";
import Image from "next/image";

export default function footer(){
    return(
        <div className="w-[1920px] h-[461px]  top-[5195px] pt-[140px] pb-8 px[220px] gap-[200px] justify-center bg-[#043873]">
            
            
            <div className="w-[1480px] h-[289px] gap-[100px] mx-[220px] flex justify-center">



              <div className="w-[295px] h-[169px] gap-[15px]">
                    <div className='w-[191px] h-[34px]'>
					<Image src={logo} alt='' />
				    </div>
                    <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] w-[240px] h-[120px] mt-[15px] text-[#F7F7EE] ">
                    whitepace was created for the new ways we live and work. We make a better workspace around the world
                    </p>
              </div>
                

                <div className="w-[295px] h-[127px] gap-[15px]  ">
                        <p className="font-bold text-lg leading-[21.78px] tracking-[-0.02em] w-[68px] h-[22px]  text-[#FFFFFF] ">
                        Product
                        </p>
                        <p className="font-normal text-base leading-[20px] tracking-[-0.02em] w-[70px] h-[20px]  text-[#FFE492] ">Overview</p>
                        <p  className="font-normal text-base leading-[20px] tracking-[-0.02em] w-[50px] h-[20px]  text-[#FFFFFF] "> Pricing</p>
                        <p  className="font-normal text-base leading-[20px] tracking-[-0.02em] w-[717px] h-[20px]  text-[#FFFFFF] ">Customer stories</p>
                </div>

                <div className="w-[295px] h-[130px] gap-[16px]  ">
                        <p className="font-bold text-lg leading-[21.78px] tracking-[-0.02em] w-[91px] h-[22px]  text-[#FFFFFF] ">
                       Resources
                        </p>
                        <p className="font-normal text-base leading-[20px] tracking-[-0.02em] w-[33px] h-[20px]  text-[#FFFFFF] ">Blog</p>
                        <p  className="font-normal text-base leading-[20px] tracking-[-0.02em] w-[128px] h-[20px]  text-[#FFFFFF] ">Guides & tutorials</p>
                        <p  className="font-normal text-base leading-[20px] tracking-[-0.02em] w-[130px] h-[20px]  text-[#FFFFFF] ">Help center</p>
                </div>

                <div className="w-[295px] h-[130px] gap-[16px]  ">
                        <p className="font-bold text-lg leading-[21.78px] tracking-[-0.02em] w-[83px] h-[22px]  text-[#FFFFFF] ">
                       Company
                        </p>
                        <p className="font-normal text-base leading-[20px] tracking-[-0.02em] w-[66px] h-[20px]  text-[#FFFFFF] ">About us</p>
                        <p  className="font-normal text-base leading-[20px] tracking-[-0.02em] w-[62px] h-[20px]  text-[#FFFFFF] ">Careers</p>
                        <p  className="font-normal text-base leading-[20px] tracking-[-0.02em] w-[99px] h-[20px]  text-[#FFFFFF] ">Media kit</p>
                </div>
            </div>
            <div className="w-[1480px] mx-[220px] border-[#2E4E73] border-[1px]"></div> 
            <div className="w-[1480] h-5 flex justify-center mx-[220px] ">
                <div className="w-[169px] h-5 gap-[60px]  ">
                    <p className="font-normal  text-base leading-[20px] tracking-[-0.02em] w-[169px] h-[20px]  text-[#FFFFFF] text-center">©2021 Whitepace LLC.</p>
                </div>
            </div>

           

        </div>
    );
}