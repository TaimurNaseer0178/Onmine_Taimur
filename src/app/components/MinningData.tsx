import Image from 'next/image'
import React from 'react'

const CoinningData = (props: any) => {
    return (
        <div className='border-2  w-[166px] h-[170px]  py-5 '>
            <div className='flex justify-center items-center'>
                <Image
                    className='  '
                    src={props.src}
                    alt='ellipse'
                    height={60}
                    width={60}
                />
            </div>
            <div className='flex justify-center items-center text-2xl font-semibold text-customDeepBlue'>
                {props.first1}
            </div>
            <div className='flex justify-center items-center text-xl font-semibold text-customDeepBlue'>
                {props.second2}
            </div>
        </div>
    )
}

export default CoinningData
