import { useGSAP } from "@gsap/react"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"
import gsap from "gsap"

const SuperQuality = () => {

    useGSAP(() => {
        gsap.fromTo('.quality-image',
            {
                y: -30,
            },
            {
                y: 30,
                yoyo: true,
                repeat: -1,
                duration: 1.8,
                ease: 'power1.inOut'
            }
        );

        gsap.from('.left-animation', {
            x: '-70%',
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: '.left-animation',
            }
        })
    }, [])

    return (
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col left-animation">
                <h2 className="font-palanquin text-4xl capitalize font-bold max-w-lg">
                    We Provide You <span className="text-coral-red ">
                        Super
                    </span> <span className="text-coral-red ">
                        Quality
                    </span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.
                </p>


                <p className="mt-6 lg:max-w-lg info-text">
                    Our dedication to detail and excellence ensures your satisfaction
                </p>

                <div className="mt-11 ">

                    <Button label="View details" />
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain quality-image" />
            </div>
        </section>
    )
}
export default SuperQuality