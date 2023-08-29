import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div className='  '>
                <div className='h-[309px] w-[482px] ml-36  mr-[866px] mt-[110px] mb-[7633px] space-y-8    '>
                    <p className='w-[410px] h-[86px] font-bold text-3xl text-customDeepBlue '>
                        Unveiling the Future of Bitcoin Mining.
                    </p>
                    <p className='w-[482px] h-[120px] font-medium text-2xl text-customBlueGray'>
                        The emergence of advanced mining technology has enabled
                        individuals to potentially profitably mine Bitcoin from
                        home.
                    </p>
                    <button
                        className='group flex ml-[1px]  px-[16px] py-[12.2px] w-[160px] h-[43.4px] justify-center items-center
         border-2 rounded-lg border-customOrangeBrown text-customOrangeBrown 
          font-medium text-base hover:w-[170px]  hover:scale-1100 duration-300
           hover:border-orangeBrownTransparent hover:text-orangeBrownTransparent hover:font-bold'>
                        Start Mining
                        <Image
                            className='my-[12.2] ml-[10px] group-hover:hidden  '
                            src='/arrow.svg'
                            alt='bag'
                            width={20}
                            height={19}
                        />
                        <Image
                            className='hidden my-[12.2] ml-[10px] group-hover:block  '
                            src='/rightArrowLong.svg'
                            alt='bag'
                            width={20}
                            height={30}
                        />
                    </button>
                </div>
            </div>
        </>
    )
}
