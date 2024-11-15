import Image from "next/image";
import logo from"@/app/assets/Logo.png";


export default function navbar(){
    return(
        <>
        <div className="w-[1920px] h-[92px] px-[220px] bg-[#043873] flex justify-between items-center">
                <div className='w-[191px] h-[36px]'>
					<Image src={logo} alt='' />
				</div>
                <div className="w-[737.5px] h-[60px] flex justify-between items-center">
                    <div className="w-[549 px] h-[23px]">
                        <ul className="flex flex-row gap-8 row-span-1 text-white">
                            <li>Products</li>

                            <li>Solutions</li>
                            
                            <li>Resources</li>
                            
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="w-[126px] h-[60px]">
                        <button className="px-10 py-4 rounded-lg bg-[#FFE492]">
                            Login
                        </button>

                    </div>
                </div>
        </div>
        </>
    );
}