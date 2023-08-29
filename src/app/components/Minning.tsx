import Image from 'next/image'
import React from 'react'

const Minning = (props: any) => {
    return (
        <div className=' mt-16 pt-12 space-x-3 pr-6 lg:pb-16 lg:flex lg:mx-16 rounded-2xl  bg-gradient-to-r from-[#FEBEB710]    via-[#F899FF47] to-[#85B1FF91] '>
            <div>
                <p className='font-bold text-2xl text-customDeepBlue ml-9'>
                    {props.title1} <br />
                    {props.title2}
                </p>
                <p className='font-medium text-lg text-customBlueGray ml-9 mt-7  items-center justify-center'>
                    Experience a streamlined onboarding process that gets you up
                    and running in no time. With ONMINE, you can join the
                    bitcoin mining community swiftly independently and
                    confidently, free from centralized control. Take control of
                    your mining journey and enjoy the freedom to mine with
                    enterprise tools and expert support.
                </p>
                <div className='flex items-center justify-center'>
                    <button
                        className='group  flex items-center justify-center ml-9 mt-5 lg:mt-32  px-[16px] py-[12.2px] w-[160px] h-[43.4px] 
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
            <div className='flex lg:hidden   mt-10  justify-center items-center'>
                <Image
                    className=' '
                    src={props.src}
                    alt='ellipse'
                    height={195}
                    width={338}
                />
            </div>
            <Image
                className=' hidden lg:flex justify-center '
                src={props.src2}
                alt='ellipse'
                height={423}
                width={680}
            />
        </div>
    )
}

export default Minning
