import { useGSAP } from "@gsap/react"
import Button from "../components/Button"
import gsap from "gsap"

const Subscribe = () => {

    useGSAP(() => {
        gsap.from('.button-scale', {
            scale: 0,
            opacity: 0,
            scrollTrigger: {
                trigger: '.button-scale'
            },
            duration: 1.5,
        })
    })
    return (
        <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
            <h3 className="text-4xl leading-68px lg:max-w-md font-palanquin font-bold">Sign Up form <span className="text-coral-red">Updates</span> & Newsletter</h3>

            <div className="lg:max-w-40% w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
                <input type="text" name="" id="" placeholder="Subscribe@Nike.com" className="input" />
                <div className="flex max-sm:justify-end items-center max-sm:w-full button-scale">
                    <Button label="Sign Up" fullWidth />
                </div>
            </div>
        </section>
    )
}
export default Subscribe