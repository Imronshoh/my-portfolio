import React from 'react'
import aboutImg from '../assets/about4.jpeg'

const About = () => {
    return (
        <div class="py-10 text-white bg-[#232325] h-[80vh]">
            <div class="flex sm:flex-row flex-col-reverse items-center md:gap-12 px-10 max-w-6xl mx-auto">
                <div class="w-[1600px] h-full">
                    <img src={aboutImg} alt="" class="object-fit-cover rounded-xl w-96 h-[300px] filter grayscale brightness-50" />
                </div>
                <div class="p-2">
                    <div class="text-gray-300 my-3">
                        <h3 class="text-4xl font-semibold mb-5">About<span class="primary-text">Me</span></h3>
                        <p class="text-justify leading-7 w-12/12 mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, quam vel quisquam, explicabo sit
                            labore dignissimos optio ratione quibusdam doloribus pariatur consequuntur sint. Reprehenderit
                            cupiditate possimus facere quasi voluptatem?
                        </p>
                    </div>
                    <div class="flex mt-10 items-center gap-7">
                        <div class="bg-[#333333] p-5 rounded-lg">
                            <h3 class="md:text-4xl text-2xl font-semibold text-white">11
                                <span class="primary-text">+</span>{" "}
                            </h3>
                            <p><span class="md:text-base text-xs">Projects</span></p>
                        </div>
                        <div className="bg-[#333333] p-5 rounded-lg"> <h3 className="md:text-4xl text-2xl font-semibold text-white">5 <span>+</span>
                        </h3>
                            <p><span className="md:text-base text-xs">years experience</span></p> </div>
                        <div className="bg-[#333333] p-5 rounded-lg">
                            <h3 className="md:text-4xl text-2xl font-semibold text-white">30
                                <span>+</span>
                            </h3>
                            <p><span className="md:text-base text-xs">happy clients</span></p> </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About