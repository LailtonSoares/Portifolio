import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

function Main() {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="/istockphoto-618194170-612x612.jpg" alt="/" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Meu nome é Lailton.</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'> Eu sou

                        <TypeAnimation
                            sequence={[
                                'desenvolvedor de software.', // Types 'One'
                                2000, // Waits 1s
                                'desenvolvedor full stack.', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s

                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />

                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href="https://twitter.com/lailsoares"><FaTwitter href='https://twitter.com/lailsoares' className='cursor-pointer' size={20} /></a> 
                        <a href="https://web.facebook.com/lailton.soares.7"><FaFacebookF className='cursor-pointer' size={20} /></a>
                        <a href="https://www.instagram.com/lailsoares/"><FaInstagram className='cursor-pointer' size={20} /></a>
                        <a href="https://www.linkedin.com/in/lailton-soares-pinho-48650898/"><FaLinkedinIn className='cursor-pointer' size={20}/></a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main