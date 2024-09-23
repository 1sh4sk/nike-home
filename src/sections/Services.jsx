import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Services = () => {

    useGSAP(() => {
        gsap.from('.service-card', {
            scale: 0.5,
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1.2,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.service-card',
            }
        })
    }, [])
    return (
        <section className="max-container flex justify-center flex-wrap gap-9">
            {
                services.map((service) => (
                    <ServiceCard key={service.label} {...service} />
                ))
            }
        </section>
    )
}
export default Services