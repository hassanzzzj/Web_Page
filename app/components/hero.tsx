import Image from "next/image";
import arr from"@/app/assets/arr.png";
import circle from"@/app/assets/circle_img.png";
import apple from"@/app/assets/Apple.png";
import google from"@/app/assets/google.png";
import microsoft from"@/app/assets/microsoft.png";
import slack from"@/app/assets/slack.png";

export default function navbar(){
    return(
        <>
        {/* first blue part */}
            <div className=" w-[1920px] h-[829px] py-[140px] px-[220px] top-[92px] bg-[#043873] text-white flex items-center">
                <div className="w-[656px] h-[238px]">
                    <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
                    Get More Done with whitepace
                    </h2>
                    <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] ">
                    Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </p>
                 <button className="w-[219px] h-[63px] rounded-lg bg-[#4F9CF9] p-5 gap-[10px] font-bold text-lg mt-[60px] leading-[23px] tracking-[-0.02em] flex justify-between items-center">Try Whitepace Free
                        <Image src={arr} alt='' />
                </button>
                </div>
                <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
            </div>
{/* 2nd part white with 2 blocks */}
{/* block1 */}
            <div className="py-[140px] px-[220px] top-[921px] w-[1920px] h-[1588px] gap-[100px] ">
                <div className="w-[1480px] h-[547px] flex items-center">
                    <div className="w-[672px] h-[411px]  gap-[60px] ">
                    <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6 w-[672px] h-[174px]">Project Management</h1>
                    <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    <button className="w-[201px] h-[63px] rounded-md bg-[#4F9CF9] px-10 py-5 gap-[10px] font-bold text-lg mt-[60px] leading-[23px] tracking-[-0.02em] text-white flex justify-between items-center">Get Started
                        <Image src={arr} alt='' />
                </button>
                </div>
                <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
                </div>
                <div className="w-[1480px] h-[681px] mt-[100px] flex items-center justify-between" >
                <div className="w-[710px] h-[661px] border-2-[#A7CEFC]" >
                    <Image src={circle} alt='' />
                </div>
                {/* block 2  */}
                <div className="w-[670px] h-[294px] ">
                    <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6 w-[670px] h-[87px]">Work together</h1>
                    <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] w-[670px] h-[60px]">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                    <button className="w-[186px] h-[63px] rounded-md bg-[#4F9CF9] px-10 py-5 gap-[10px] font-bold text-lg mt-[60px] leading-[23px] tracking-[-0.02em] text-white flex justify-between items-center">Try it now
                        <Image src={arr} alt='' />
                </button>
                </div>
                </div>

            </div>
            {/* 3rd part blue colored */}
            <div className="w-[1921px] h-[759px] py-[140px] px-[220px] top-[2509px] bg-[#043873] text-white gap-[98px] flex items-center">
                <div className="w-[697px] h-[294px] gap-[60px]">
                    <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6 w-[697px] h-[87px] ">
                    Use as Extension
                    </h1>
                    <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] w-[697px] h-[60px]">
                    Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                    </p>
                    <button className="w-[171px] h-[63px] rounded-md bg-[#4F9CF9] px-10 py-5 gap-[10px] font-bold text-lg mt-[60px] leading-[23px] tracking-[-0.02em] text-white flex justify-between items-center">Let’s Go
                        <Image src={arr} alt='' />
                </button>

                </div>
                <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
            </div>
            {/* 4th part white bg */}
            <div className="w-[1921px] h-[812.09px] top-[3268px]  py-[140px] px-[220px] gap-[98px] flex items-center">
                <div className="w-[714px] h-[532.09px] bg-[#C4DEFD]"></div>
                <div className="w-[669px] h-[411px] gap-[60px]">
                    <h1 className="w-[669px] h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6">
                    Customise it to your needs
                    </h1>
                    <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] w-[669px] h-[90px]">
                    Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                    <button className="w-[171px] h-[63px] rounded-md bg-[#4F9CF9] px-10 py-5 gap-[10px] font-bold text-lg mt-[60px] leading-[23px] tracking-[-0.02em] text-white flex justify-between items-center">Let’s Go
                        <Image src={arr} alt='' />
                </button>
                </div>
            </div>
            
            {/* 5th part blue bg */}
            <div className="w-[1920px] h-[574] top-[4080px]  py-[140px] px-[220px]  bg-[#043873]  text-white ">
                <div className="w-[1481px] h-[294px] gap-[60px] ">
                   <div className="w-[1064px] h-[171px] gap-[24px] mx-[208.5px] "> 
                    <h1 className="w-[1084px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6 ">
                    Your work, everywhere you are
                    </h1>
                    <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] w-[1064px] h-[60px] text-center  ">
                    Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                    </p>
                    </div>
                    <button className="w-[195px] h-[63px] mx-[643px] rounded-lg bg-[#4F9CF9] px-10 py-5 gap-[10px] font-bold text-lg mt-[60px] leading-[23px] tracking-[-0.02em] text-white flex justify-between items-center">Try Taskey
                                            <Image src={arr} alt='' />
                    </button>
                </div>
                </div>
                {/* 6th part white bg *sponsors*/}
                <div  className="w-[1920px] h-[538px] top-[4654px]  py-[140px] px-[220px]  gap-[100px] text-center">
                <h1 className="w-[1482px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em]  text-[#212529]   mb-[100px]">
                   Our sponsors
                    </h1>
                
                <div className="w-[1481px] flex justify-between ">
                <div className="w-[55.47px] h-[68px] gap-1 " >
                    <Image src={apple} alt='' />
                </div> <div className="w-[287px] h-[62px] gap-1" >
                    <Image src={microsoft} alt='' />
                </div> <div className="w-[280px] h-[71px] gap-1" >
                    <Image src={slack} alt='' />
                </div> <div className="w-[211px] h-[69.81px] gap-1" >
                    <Image src={google} alt='' />
                </div>

                </div>
                </div>
              
        </>
    );}