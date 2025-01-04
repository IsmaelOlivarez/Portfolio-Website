import React from 'react'
import Image from 'next/image';

//raface creates a functional component automatically

export const HeroSection = () => {
  return (
    <section>

        <div className='grid grid-col-1 lg:grid grid-col-12'></div>

        <div className="grid grid-cols-1 
            lg:grid-cols-12 gap-[32] m-[96]">
            
            <div className="col-span-12 h-[1340px] w-auto relative
                bg-[rgb(36,36,36)] rounded-[42.1] 
                lg:h-[670] lg:w-[1320px] mx-auto">

                <section className='grid lg:grid-cols-12 lg:gap-[32] lg:mb-[45] lg:ml-[64] lg:mt-[64] lg:mr-[32]'>

                      <div className='col-span-4 bg-transparent h-[123px] w-[375] rounded-[40]'>
                          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-4xl lg:text-[72px] font-sans font-bold'>
                              Hello, I'm
                          </span>
                      </div>

                    <div className='col-span-8 bg-red-500 h-[116] mr-[32] rounded-[40]'>
                        <h1 className='text-[128px] text-white -mt-[64] font-sans'>Ismael</h1>
                    </div>

                    <div className='col-span-4 bg-transparent h-[133.5] mr-[32] rounded-[40]'>
                    </div>

                    <div className='col-span-8 bg-red-500 h-[116] mr-[32] rounded-[40]'>
                    </div>
                </section>
                
                <section className='absolute lg:top-[232] grid lg:grid-cols-12  lg:gap-[32] 
                    lg:mb-[96] lg:ml-[64] lg:mr-[32]'>

                    <div className='col-span-4 bg-black h-[375] w-[375] rounded-full'>
                    </div>
                    

                    <div className='col-span-5 bg-green-500 h-[240] rounded-[40] relative top-[135]
                        '>
                    
                        <h1 className='text-[#ADB7BE] text-lg lg:text-xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud asd.
                        </h1>
                    
                    </div>

                    <section className='col-span-3 space-y-[12px]'>

                          <div className='h-[72] relative top-[135] mr-[32] rounded-full'>

                              <button className='h-[72] w-full rounded-full bg-gradient-to-br from-purple-500 to-[#A23962] hover:bg-slate-200 text-white text-xl'>
                                  Hire Me
                              </button>

                          </div>

                          <div className='h-[72] relative top-[135] mr-[32] rounded-full'>

                              <button className='h-[72] w-full rounded-full bg-gradient-to-br from-purple-500 to-[#A23962] hover:bg-slate-200 text-white text-xl'>
                                  Projects
                              </button>

                          </div>

                          <div className=' h-[72] relative top-[135] mr-[32] rounded-full'>
                              <button className='px-1 py-1 w-full rounded-full bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-800
                                 text-white text-xl'>
                                  <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-4'>Download CV</span>
                              </button>
                          </div>

                      </section>

                    
                </section>

                
                {/* <section className='col-span-2 bg-black grid lg:grid-rows-12 lg:gap-[32] lg:m-[96]'>
                    <div className='row-span-3 w-[300] h-[300] bg-white absolute top-[30]'></div>
                    <div className='row-span-3 w-[300] h-[300] bg-red-500 absolute'></div>
                </section> */}
                
                
                {/* <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                    Hello, I'm Ismael
                    </h1>
                <p className = "text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                    This is placeholder text that I am putting here
                    at the current moment.
                </p>
                <div>
                    <button>Hire Me!</button>
                    <button>Download CV</button>
                </div> */}
            </div>

            {/* <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className="rounded-full bg-white w-[250] h-[250] lg:w-[450] lg:h-[450] relative overflow-hidden">
                    <Image
                        src="/images/horsetemp.jpg"
                        alt = "hero image"
                        className='rounded-ee-lg absolute transform lg:w-[396] w-[220] 
                        lg:-translate-x-1/2 lg:-translate-y- lg:top-64 lg:left-1/2
                        -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'

                        width={220}
                        height={220}
                    />
                </div>
            </div> */}
        </div>
    </section>
  )
}
