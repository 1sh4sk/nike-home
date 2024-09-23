import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"

import { arrowRight } from '../assets/icons'

import { shoes, statistics } from '../constants/'
import { bigShoe1 } from "../assets/images"
import { useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useSpring, animated } from '@react-spring/web';

const Hero = () => {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    useGSAP(() => {
        gsap.from('.hero-heading', {
            opacity: 0,
            x: '-70%',
            duration: 1.5,
            ease: 'power1.inOut'
        })

    }, [])

    useGSAP(() => {
        gsap.from('.big-shoe', {
            rotate: 180,
            scale: 0,
            y: 300,
            duration: 2,
        });

    }, [bigShoeImg])



    return (
        <section id="#home" className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 z-10">
                <p className="text-xl font-montserrat text-coral-red ">Our Summer Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold hero-heading">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">The New Arrival</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">
                        Nike
                    </span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
                    Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
                </p>

                <Button label="Shop now" iconUrl={arrowRight} />

                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {
                        statistics.map(({ label, value }) => (
                            <StatisticItem key={label} label={label} value={value} />
                        ))
                    }
                </div>


            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="show collection"
                    width={610}
                    height={500}
                    className="big-shoe object-contain relative z-index-10"
                />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {
                        shoes.map((shoe) => (
                            <div key={shoe.bigShoe}>
                                <ShoeCard
                                    imgURL={shoe}
                                    changeBigShoeImg={(shoe) => {
                                        setBigShoeImg(shoe);
                                    }}
                                    bigShoeImg={bigShoeImg}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

const StatisticItem = ({ label, value }) => {

    const props = useSpring({
        from: { number: 0 },
        to: { number: value },
        config: { duration: 1000 },
        reset: false,
    });

    console.log(value);

    return (
        <div>
            <p className="text-4xl font-palanquin font-bold">
                <animated.span>
                    {props.number.to((n) => n.toFixed(0))}
                </animated.span>
                k+
            </p>
            <p className="leadin-7 font-montserrat text-slate-gray">{label}</p>
        </div>
    )
}

export default Hero