import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import Minning from './components/Minning'
import MinningData from './components/MinningData'

export default function Home() {
    return (
        <>
            <div className=''>
                <div className='lg:flex '>
                    <div className='flex justify-center m-7 lg:order-2 xl:mt-[110px] lg:mt-[110px] lg:hidden'>
                        <Image
                            className=' '
                            src='/Isolation_Mode.svg'
                            alt='bag'
                            width={342}
                            height={195}
                        />
                    </div>
                    <div className='hidden lg:flex order-2 mt-10 mr-5  '>
                        <div className=''>
                            <Image
                                className=' rounded-2xl shadow-xl'
                                src='/dashboard.svg'
                                alt='bag1'
                                width={467}
                                height={290}
                            />
                            <Image
                                className=' rounded-lg mt-5  ml-12  '
                                src='/MinersPerformance.svg'
                                alt='bag2'
                                width={328}
                                height={105}
                            />
                        </div>
                        <div className=''>
                            <div className=''>
                                <Image
                                    className=' rounded-lg   pl-2 mt-16  '
                                    src='/Investment.svg'
                                    alt='inv'
                                    width={330}
                                    height={174}
                                />
                            </div>
                            <div className='flex flex-shrink-0'>
                                <Image
                                    className=' rounded-lg mt-5  pt-7 mr-1 flex-shrink-0   '
                                    src='/Calculator.svg'
                                    alt='cal'
                                    width={140}
                                    height={130}
                                />
                                <Image
                                    className=' rounded-lg mt-5 flex-shrink-0'
                                    src='/NetworkStatistics.svg'
                                    alt='net'
                                    width={140}
                                    height={130}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='lg:order-1 flex justify-center'>
                        <div className='  space-y-8 m-7 xl:ml-36 lg:ml-28  xl:mt-[110px] lg:mt-[110px]     '>
                            <p className='w-[342px] h-[60px] font-bold text-3xl text-customDeepBlue '>
                                Unveiling the Future of Bitcoin Mining.
                            </p>
                            <p className='w-[342px] lg:w-[470px] xl:w-[482px]    font-medium text-2xl text-customBlueGray'>
                                The emergence of advanced mining technology has
                                enabled individuals to potentially profitably
                                mine Bitcoin from home.
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
                </div>
                <div className=''>
                    <Marquee className='flex justify-between'>
                        <div className='mr-[100px]'>
                            <Image
                                className='grayscale hover:grayscale-0 '
                                src='/Coinbase.svg'
                                alt='bag'
                                width={150}
                                height={40}
                            />
                        </div>
                        <div className='mr-[100px]'>
                            <Image
                                className='grayscale hover:grayscale-0  '
                                src='/Binance.svg'
                                alt='bag'
                                width={150}
                                height={40}
                            />
                        </div>
                        <div className='mr-[100px]'>
                            <Image
                                className='grayscale hover:grayscale-0  '
                                src='/Blockchain.svg'
                                alt='bag'
                                width={150}
                                height={40}
                            />
                        </div>
                        <div className='mr-[100px]'>
                            <Image
                                className='grayscale hover:grayscale-0  '
                                src='/Trezor.svg'
                                alt='bag'
                                width={150}
                                height={40}
                            />
                        </div>
                        <div className='mr-[100px]'>
                            <Image
                                className='grayscale hover:grayscale-0  '
                                src='/Ndax.svg'
                                alt='bag'
                                width={150}
                                height={40}
                            />
                        </div>
                        <div className='mr-[100px]'>
                            <Image
                                className='grayscale hover:grayscale-0  '
                                src='/Exodus.svg'
                                alt='bag'
                                width={150}
                                height={40}
                            />
                        </div>
                    </Marquee>
                </div>
                <div className='flex lg:flex-col max-w-max overflow-scroll pb-6 pr-3 lg:overflow-auto'>
                    <div className='flex'>
                        {/* First Card started */}
                        <div
                            className='flex-shrink-0 w-[277px]   h-[160px] ml-9 mt-10 rounded-md shadow-2xl shadow-slate-200 hover:shadow-slate-300  pl-5 pt-8 flex
                        lg:justify-between xl:w-[390px] lg:h-[163px] lg:w-[300px]    '>
                            <div className=''>
                                <div className='text-2xl font-bold '>
                                    10,000+
                                </div>
                                <div className='text-base font-medium mt-4 text-customBlueGray lg:mt-6 '>
                                    User <br /> Already Onboarded
                                </div>
                            </div>
                            <div className='ml-2'>
                                <Image
                                    className=''
                                    src='/mann.svg'
                                    alt='bag'
                                    width={60}
                                    height={60}
                                />
                            </div>
                        </div>
                        {/* First card Ended */}

                        {/* Second Card Started */}
                        <div
                            className='w-[277px] flex-shrink-0 h-[160px] ml-9 mt-10 rounded-md shadow-2xl shadow-slate-200 hover:shadow-slate-300 pl-5 pt-8 flex 
                        lg:justify-between xl:w-[390px] lg:h-[163px] lg:w-[300px]   '>
                            <div className=''>
                                <div className='text-2xl font-bold '>
                                    10,000+
                                </div>
                                <div className='text-base font-medium mt-4 text-customBlueGray lg:mt-6'>
                                    ASICs Deployed <br />
                                    Across North America
                                </div>
                            </div>
                            <div className='ml-2'>
                                <Image
                                    className=''
                                    src='/humbleicons_cpu.svg'
                                    alt='bag'
                                    width={60}
                                    height={60}
                                />
                            </div>
                        </div>
                        {/* Second card Ended */}

                        {/* Third Card Started */}
                        <div
                            className='flex-shrink-0 w-[277px] h-[160px] ml-9 mt-10 rounded-md shadow-2xl shadow-slate-200 hover:shadow-slate-300 pl-5 pt-8 flex 
                        lg:justify-between xl:w-[390px] lg:h-[163px] lg:w-[300px]  '>
                            <div className=''>
                                <div className='text-2xl font-bold '>200+</div>
                                <div className='text-base font-medium mt-4 lg:mt-4 text-customBlueGray '>
                                    Bitcoin <br />
                                    Mined for Clients
                                </div>
                            </div>
                            <div className='ml-2'>
                                <Image
                                    className=''
                                    src='/lucide_bitcoin.svg'
                                    alt='bag'
                                    width={60}
                                    height={60}
                                />
                            </div>
                        </div>
                        {/* Third Card Ended */}
                    </div>
                    <div className='flex'>
                        <div
                            className='flex-shrink-0 w-[277px] h-[160px] ml-9 mt-10 rounded-md shadow-2xl shadow-slate-200 hover:shadow-slate-300 pl-5 pt-8 flex
                        lg:justify-between xl:w-[598px] lg:h-[80px] lg:pt-4 lg:w-[480px] '>
                            <div className='lg:flex'>
                                <div className='text-2xl font-bold '>9+</div>
                                <div className='text-base font-medium mt-4 lg:mt-[1px] lg:ml-9 text-customBlueGray  '>
                                    Datacenter <br />
                                    Renovations
                                </div>
                            </div>
                            <div className='ml-2'>
                                <Image
                                    className=''
                                    src='/business-chart.svg'
                                    alt='bag'
                                    width={60}
                                    height={60}
                                />
                            </div>
                        </div>
                        <div
                            className='flex-shrink-0 w-[277px] h-[160px] ml-9 mt-10 rounded-md shadow-2xl shadow-slate-200 hover:shadow-slate-300 pl-5 pt-8 flex 
                            lg:justify-between xl:w-[598px] lg:h-[80px] lg:pt-4 lg:w-[480px] '>
                            <div className='lg:flex'>
                                <div className='text-2xl font-bold '>200+</div>
                                <div className='text-base font-medium mt-4 lg:mt-[1px] lg:ml-9 text-customBlueGray  '>
                                    MW of Computational <br />
                                    Power
                                </div>
                            </div>
                            <div className='ml-2'>
                                <Image
                                    className=''
                                    src='/solar_cpu.svg'
                                    alt='bag'
                                    width={60}
                                    height={60}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block  text-6xl font-bold text-customDeepBlue  '>
                    <div className='flex justify-center items-center'>
                        Buy ASICs
                    </div>
                    <div className='flex justify-center items-center'>
                        Start generating digital wealth
                    </div>
                </div>
                {/* Card Started card */}
                <div className='flex max-w-max overflow-scroll lg:overflow-auto'>
                    <div className='border last:border-2 px-1 mt-[40px] mx-9  shadow-xl w-[300px] lg:w-[365px]  h-[570px] hover:shadow-2xl'>
                        <div className='mb-6 flex justify-between'>
                            <div className='flex ml-2'>
                                <Image
                                    className='mr-1'
                                    src='/location.svg'
                                    alt='lc'
                                    height={18}
                                    width={18}
                                />
                                <p className='text-sm font-semibold text-customBlueGray'>
                                    Ontario, Canada
                                </p>
                            </div>
                            <div className='flex mr-2 '>
                                <Image
                                    className=''
                                    src='/Ellipse.svg'
                                    alt='ellipse'
                                    height={6}
                                    width={6}
                                />
                                <p className='text-customBlueGray1 ml-1'>
                                    Offline
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className=' flex justify-center mt-2'>
                                <Image
                                    className=''
                                    src='/Bitmain.svg'
                                    alt='ellipse'
                                    height={128}
                                    width={138}
                                />
                            </div>
                            <p className='mt-5 font-bold text-xl flex justify-center text-customDeepBlue'>
                                Bitmain Antminer S19j Pro
                            </p>
                            <p className='mt-3 font-bold text-xs flex justify-center text-yellow-600'>
                                Hash Rate: 100 TH/S
                            </p>
                            <p className='mt-[1px] font-bold text-xs flex justify-center text-yellow-600 '>
                                Power: 350 W kWh Fee: $0.069
                            </p>
                            <p className='mt-3 font-medium text-base flex justify-center text-customBlueGray '>
                                Hashing Since Mar 2023
                            </p>
                            <p className='mt-3 font-bold text-lg flex justify-center text-customDeepBlue '>
                                $9,850.99
                            </p>
                            <div className='flex font-normal text-sm justify-between ml-3 mr-2 mt-10 '>
                                <p className='text-customBlueGray1 '>
                                    Estimated Monthly Revenue
                                </p>
                                <p className=''>$20</p>
                            </div>
                            <div className='flex font-normal text-sm justify-between ml-3 mr-2 mt-[2px] '>
                                <p className='text-customBlueGray1 '>
                                    Estimated Annual Revenue
                                </p>
                                <p className=''>$244</p>
                            </div>
                            <hr className='h-[2px] w-[270px] lg:w-[340px] ml-3 mt-1 bg-customBlueGray' />

                            <div className='flex font-normal text-sm justify-between ml-3 mr-2 mt-2 '>
                                <p className=' '>Estimated Annual Revenue</p>
                                <p className=''>$244</p>
                            </div>
                            <button
                                className='flex flex-shrink-0 mt-10 ml-3 w-[280px]  lg:w-[330px] h-[43px] justify-center items-center
                        border-2 rounded-lg border-customOrangeBrown text-yellow-600
                        font-medium text-base
                        hover:border-orangeBrownTransparent '>
                                Start Mining
                            </button>
                        </div>
                    </div>
                    <div className='mt-[40px] border last:border-2 px-1 mx-9  shadow-xl w-[300px] lg:w-[365px] h-[570px] hover:shadow-2xl'>
                        <div className='mb-6 flex justify-between'>
                            <div className='flex ml-2'>
                                <Image
                                    className='mr-1'
                                    src='/location.svg'
                                    alt='lc'
                                    height={18}
                                    width={18}
                                />
                                <p className='text-sm font-semibold text-customBlueGray'>
                                    Ontario, Canada
                                </p>
                            </div>
                            <div className='flex mr-2 '>
                                <Image
                                    className=''
                                    src='/Ellipse.svg'
                                    alt='ellipse'
                                    height={6}
                                    width={6}
                                />
                                <p className='text-customBlueGray1 ml-1'>
                                    Offline
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className=' flex justify-center mt-2'>
                                <Image
                                    className=''
                                    src='/Bitmain.svg'
                                    alt='ellipse'
                                    height={128}
                                    width={138}
                                />
                            </div>
                            <p className='mt-5 font-bold text-xl flex justify-center text-customDeepBlue'>
                                Bitmain Antminer S19j Pro
                            </p>
                            <p className='mt-3 font-bold text-xs flex justify-center text-yellow-600'>
                                Hash Rate: 100 TH/S
                            </p>
                            <p className='mt-[1px] font-bold text-xs flex justify-center text-yellow-600 '>
                                Power: 350 W kWh Fee: $0.069
                            </p>
                            <p className='mt-3 font-medium text-base flex justify-center text-customBlueGray '>
                                Hashing Since Mar 2023
                            </p>
                            <p className='mt-3 font-bold text-lg flex justify-center text-customDeepBlue '>
                                $9,850.99
                            </p>
                            <div className='flex font-normal text-sm justify-between ml-3 mr-2 mt-10 '>
                                <p className='text-customBlueGray1 '>
                                    Estimated Monthly Revenue
                                </p>
                                <p className=''>$20</p>
                            </div>
                            <div className='flex font-normal text-sm justify-between ml-3 mr-2 mt-[2px] '>
                                <p className='text-customBlueGray1 '>
                                    Estimated Annual Revenue
                                </p>
                                <p className=''>$244</p>
                            </div>
                            <hr className='h-[2px] w-[270px] lg:w-[340px] ml-3 mt-1 bg-customBlueGray' />

                            <div className='flex font-normal text-sm justify-between ml-3 mr-2 mt-2 '>
                                <p className=' '>Estimated Annual Revenue</p>
                                <p className=''>$244</p>
                            </div>
                            <button
                                className='flex flex-shrink-0 mt-10 ml-3 w-[280px]  lg:w-[330px] h-[43px] justify-center items-center
                                border-2 rounded-lg border-customOrangeBrown text-yellow-600
                                font-medium text-base
                                hover:border-orangeBrownTransparent '>
                                Start Mining
                            </button>
                        </div>
                    </div>
                    <div className=' last:border-2 mt-[40px] px-1 mx-9  shadow-xl w-[300px] lg:w-[365px] h-[570px] hover:shadow-2xl'>
                        <div className='mb-6 flex justify-between'>
                            <div className='flex ml-2'>
                                <Image
                                    className='mr-1'
                                    src='/location.svg'
                                    alt='lc'
                                    height={18}
                                    width={18}
                                />
                                <p className='text-sm font-semibold text-customBlueGray'>
                                    Ontario, Canada
                                </p>
                            </div>
                            <div className='flex mr-2 '>
                                <Image
                                    className=''
                                    src='/Ellipse.svg'
                                    alt='ellipse'
                                    height={6}
                                    width={6}
                                />
                                <p className='text-customBlueGray1 ml-1'>
                                    Offline
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className=' flex justify-center mt-2'>
                                <Image
                                    className=''
                                    src='/Bitmain.svg'
                                    alt='ellipse'
                                    height={128}
                                    width={138}
                                />
                            </div>
                            <p className='mt-5 font-bold text-xl flex justify-center text-customDeepBlue'>
                                Bitmain Antminer S19j Pro
                            </p>
                            <p className='mt-3 font-bold text-xs flex justify-center text-yellow-600'>
                                Hash Rate: 100 TH/S
                            </p>
                            <p className='mt-[1px] font-bold text-xs flex justify-center text-yellow-600 '>
                                Power: 350 W kWh Fee: $0.069
                            </p>
                            <p className='mt-3 font-medium text-base flex justify-center text-customBlueGray '>
                                Hashing Since Mar 2023
                            </p>
                            <p className='mt-3 font-bold text-lg flex justify-center text-customDeepBlue '>
                                $9,850.99
                            </p>
                            <div className='flex font-normal text-sm justify-between ml-3 mr-2 mt-10 '>
                                <p className='text-customBlueGray1 '>
                                    Estimated Monthly Revenue
                                </p>
                                <p className=''>$20</p>
                            </div>
                            <div className='flex font-normal text-sm justify-between ml-3 mr-2 mt-[2px] '>
                                <p className='text-customBlueGray1 '>
                                    Estimated Annual Revenue
                                </p>
                                <p className=''>$244</p>
                            </div>
                            <hr className='h-[2px] w-[270px] lg:w-[340px] ml-3 mt-1 bg-customBlueGray' />

                            <div className='flex font-normal text-sm justify-between ml-3 mr-2 mt-2 '>
                                <p className=' '>Estimated Annual Revenue</p>
                                <p className=''>$244</p>
                            </div>
                            <button
                                className='flex flex-shrink-0 mt-10 ml-3 w-[280px]  lg:w-[330px] h-[43px] justify-center items-center
                        border-2 rounded-lg border-customOrangeBrown text-yellow-600
                        font-medium text-base
                        hover:border-orangeBrownTransparent '>
                                Start Mining
                            </button>
                        </div>
                    </div>
                </div>
                <Minning
                    title1='Fast Onboarding, Seamless'
                    title2=' Start for All Bitcoin Miners'
                    src='/Isolation_Mode(1).svg'
                    src2='/Animation.svg'
                />
                <Minning
                    title1='Unleash the Power of Your '
                    title2=' Bitcoin Mining Data'
                    src='/Mobile.svg'
                    src2='/dashboard.svg'
                />
                <Minning
                    title1='Your ASIC, Your Bitcoin,  '
                    title2=' Your Control.'
                    src='/Isolation_Mode.svg'
                    src2='/Animation.svg'
                />
                <div className='lg:flex mt-9'>
                    <div>
                        <p className='font-bold text-2xl text-customDeepBlue ml-9'>
                            <div className=''>Elevate your Bitcoin Mining</div>
                            <div className=''> Game</div>
                        </p>
                        <p className='font-medium text-lg text-customBlueGray ml-9 mt-7  items-center justify-center'>
                            Experience a streamlined onboarding process that
                            gets you up and running in no time. With ONMINE, you
                            can join the bitcoin mining community swiftly
                            independently and confidently, free from centralized
                            control. Take control of your mining journey and
                            enjoy the freedom to mine with enterprise tools and
                            expert support.
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

                    <div className='mt-10 ml-5 flex items-center justify-center '>
                        <div className='grid grid-cols-2 gap-2'>
                            <MinningData
                                src='/coinss.svg'
                                first1='140%'
                                second2='ROI'
                            />
                            <MinningData
                                src='/coinss.svg'
                                first1='4.55M'
                                second2='Benefits PV'
                            />
                            <MinningData
                                src='/coinss.svg'
                                first1='3.21M'
                                second2='NPV'
                            />
                            <MinningData
                                src='/coinss.svg'
                                first1='18-25'
                                second2='Months payback'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
