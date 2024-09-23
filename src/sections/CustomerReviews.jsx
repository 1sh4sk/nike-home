import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const CustomerReviews = () => {


    useGSAP(() => {
        gsap.from('.fade-in', {
            y: 50,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.fade-in',
            }
        });
    }, [])

    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center text-4xl font-bold fade-in">
                What Our <span className="text-coral-red ">Customers</span> Say?
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center fade-in">Hear genuine stories From our satisfied customers about their exceptional experiences with us.</p>

            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {
                    reviews.map((review) => (
                        < ReviewCard key={review.customerName} {...review} />
                    ))
                }
            </div>
        </section>
    )
}
export default CustomerReviews