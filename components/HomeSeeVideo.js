import React from 'react'
import ReactPlayer from 'react-player'

export default function HomeSeeVideo() {
    return (
        <>
            <div className="row bg-orange-200 py-10">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                        <div className="py-20">
                            <div className="m-auto lg:h-[400px] lg:w-[600px] md:h-[350px] md:w-[500px] h-[300px] w-[400px] relative before:content-[''] before:block before:h-[380px] before:w-[300px] md:before:h-[400px] md:before:w-[380px] lg:before:h-[480px] lg:before:w-[430px] before:absolute before:top-[-40px] before:left-[-50px] md:before:top-[-25px] md:before:left-[-60px] lg:before:top-[-40px] lg:before:left-[-75px] before:rounded-tr-[100px] before:rounded-bl-[100px] before:border before:border-red-500">
                                <video className='p-5 absolute w-full' src='/assets/videos/video.mp4' controls></video>
                            </div>
                        </div>
                        <div className="px-10">
                            <p className='text-[16px] text-[#2BB673] md:text-left text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <h1 className={`mt-6 relative bg-transparent md:text-left text-center lg:text-[60px] md:text-[40px] text-[40px] text-[#128041] font-bold before:content-[''] before:block before:w-[96px] before:h-[136px] before:bg-no-repeat before:top-10 before:left-[70%] before:absolute before:bg-[url('/assets/images/p1.png')]`}>See the video to know more usability.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}