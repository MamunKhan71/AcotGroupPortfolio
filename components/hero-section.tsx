import React from 'react'
import EmblaCarousel from './common/slider/EmblaCarousel'
import { Button } from './ui/button'
import '../components/common/slider/embla.css';
import HeaderTitle from './common/HeaderTitle';
import HeaderDescription from './common/HeaderDescription';

let slides = [
    "heroNav.png",
    "heroNav.png",
    "heroNav.png",
]
const OPTIONS = { loop: true, duration: 30 }

const HeroSection = () => {
    return (
        <div>
            <div className="relative">
                <EmblaCarousel slides={slides} options={OPTIONS} />
                <div className="container mx-auto w-full h-full">
                    <div className="absolute top-1/2 -translate-y-1/2">
                        <div className="space-y-12">
                            <div className="max-w-xl space-y-5">
                                <HeaderTitle title='Your Trusted Software Development Partner' />
                                <h1 className="font-bold text-5xl leading-[32px] md:leading-[52px]"></h1>
                                <HeaderDescription title='We offer IT experts who bring data-driven and innovative digital transformation approaches to our clients. Our skills & experience in Software Development have enabled sustainable growth for enterprises of all sizes.' />
                            </div>
                            <Button variant={'default'}>Download Portfolio</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection