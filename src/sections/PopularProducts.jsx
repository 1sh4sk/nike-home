import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const PopularProducts = () => {

    useGSAP(() => {
        gsap.from('.popular-card', {
            y: 200,
            stagger: 0.4,
            ease: 'power1.inOut',
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: '#products',
            },
        });

        gsap.from('.product-fade-in', {
            y: 50,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.product-fade-in',
            }
        });
    })


    return (
        <section id="products" className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5 product-fade-in">
                <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
            </div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
                {
                    products.map((product) => (
                        <PopularProductCard key={product.name} {...product} />
                    ))
                }
            </div>
        </section>
    )
}
export default PopularProducts