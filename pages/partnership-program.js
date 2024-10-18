import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Button from "../components/Button"
import FeaturedCardLatest from "../components/FeaturedCardLatest"
import PartnerTestimonialsCard from "../components/PartnerTestimonialCard"
import CallToAction from "../components/CallToAction"

export default function partnershipProgram() {
    return (
        <>
            <Head>
                <title> Partnership Program | Grow Your Revenue With Swirl</title>
            </Head>
            {/* Hero Section */}
            <section
                id="banner"
                className="px-5 desktop:px-28 tablet:px-14 laptop:py-20 py-6"
            >
                <div className="laptop:container container-fluid mx-auto">
                    <div className="grid laptop:grid-cols-2 gap-x-8 grid-row-flow items-start">
                        {/* Hero Image */}
                        <div className="pt-40">
                            <Image
                                src="/assets/images/partnershiphero.png"
                                alt="Hero Image of Partnership page"
                                width={577}
                                height={637}
                            />
                        </div>

                        <div className="">
                            {/* Headline */}
                            <div className="pt-11">
                                <div className="w-fit px-4 py-1 flex items-center justify-center border-2 border-solid rounded-24 border-warm-gray-500">
                                    <p className="text-xs tablet:text-sm font-medium m-0">
                                        Partnership Program
                                    </p>
                                </div>
                            </div>
                            {/* Heading */}
                            <div className="laptop:pt-7 tablet:pt-5 pt-2">
                                <h1 className="font-bold desktop:text-5xl laptop:text-4xl tablet:text-2xl text-lg">
                                    Join forces with GoSwirl to offer integrated livestream commerce services and build win-win relationships for everyone.                                    </h1>
                            </div>
                            {/* Button */}
                            <div className="flex desktop:py-14 laptop:py-7 py-5 gap-x-6">
                                <Link href="/book-a-demo">
                                    <Button text="Become a partner" btn_variant="blackandwhite_btn" />
                                </Link>
                                <Link href="/book-a-demo">
                                    <Button text="Book a demo" btn_variant="contactUs_btn" />
                                </Link>
                            </div>
                            {/* Lists */}
                            <div className="list-outside desktop:pt-6 laptop:pt-3 font-normal desktop:text-lg laptop:text-base text-sm pl-0">
                                <div className="flex">
                                    <div>
                                        <i className="ri-check-line pr-2 align-sub text-xl laptop:text-2xl"></i>
                                    </div>
                                    <div>
                                        <span className="font-bold">No- to low-tech integration:</span>
                                        <span> Just copy-paste a few lines of code and get started with live video selling.</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <i className="ri-check-line pr-2 align-sub text-xl laptop:text-2xl"></i>
                                    </div>
                                    <div>
                                        <span className="font-bold">Comprehensive onboarding support:</span>
                                        <span>  Take advantage of Swirl’s round-the-clock support and execute seamless live events with tech team standby.</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <i className="ri-check-line pr-2 align-sub text-xl laptop:text-2xl"></i>
                                    </div>
                                    <div>
                                        <span className="font-bold">100% native brand experience:</span>
                                        <span>  Immersive live events that improve brand recall and reflect your brand identity.</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <i className="ri-check-line pr-2 align-sub text-xl laptop:text-2xl"></i>
                                    </div>
                                    <div>
                                        <span className="font-bold">In-depth analytics:</span>
                                        <span>  Track performance, measure growth, and make data-backed decisions with valuable information.</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <i className="ri-check-line pr-2 align-sub text-xl laptop:text-2xl"></i>
                                    </div>
                                    <div>
                                        <span className="font-bold">First-party data:</span>
                                        <span> Build your own database with qualified lead capture and extensive retargeting options, so you never have to rely on third-party data again.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Card Section */}
            <section id="card-section" className="px-5 desktop:px-28 laptop:px-14 tablet:px-10 laptop:py-24 tablet:py-12 py-6 bg-warm-gray-250">
                <div className="laptop:container container-fluid mx-auto">
                    <h2 className="text-center laptop:text-5xl tablet:text-3xl text-xl font-bold laptop:pt-4 pt-2 laptop:pb-6 pb-3">Level up in the live commerce game</h2>
                    <p className="desktop:px-56 laptop:px-28 text-center font-normal laptop:text-2xl tablet:text-xl text-sm laptop:pb-20 pb-10">As a Swirl partner, you can add incredible value to your clients’ brands through livestream video shopping. Here’s how:</p>
                    <div className="flex tablet:flex-row flex-col laptop:gap-x-8 tablet:gap-x-4 gap-y-4">
                        <div className="laptop:w-2/5 tablet:w-1/2">
                            <FeaturedCardLatest
                                bg_color="white"
                                title="Score 4x more conversions"
                                content="Everybody wants more sales. Increase ecommerce conversions with embedded videos on product pages"
                                icon={<i className="text-black desktop:text-4xl laptop:text-3xl text-2xl ri-video-line"></i>}
                            />
                        </div>
                        <div className="laptop:w-3/5 tablet:w-1/2">
                            <FeaturedCardLatest
                                bg_color="white"
                                title="Boost time spent by 700%"
                                content="Stand out from the clutter and generate interest with eye-grabbing live commerce launches. Create the perfect formula for shoppertainment to keep viewers hooked."
                                icon={<i className="text-black desktop:text-4xl laptop:text-3xl text-2xl ri-live-line"></i>}
                            />
                        </div>
                    </div>
                    <div className="flex tablet:flex-row flex-col laptop:gap-x-8 tablet:gap-x-4 gap-y-4 desktop:pt-8 pt-4">
                        <div className="tablet:w-1/3">
                            <FeaturedCardLatest
                                bg_color="white"
                                title="Lift engagement by 7x"
                                content="Drive engagement and brand recall with authentic engagement. Make your mark!"
                                icon={<i className="text-black desktop:text-4xl laptop:text-3xl text-2xl ri-question-answer-line"></i>}
                            />
                        </div>
                        <div className="tablet:w-1/3">
                            <FeaturedCardLatest
                                bg_color="white"
                                title="Improve ROI by 600%"
                                content="Improve ROI by adding shoppable layers to existing video/social content"
                                icon={<i className="text-black desktop:text-4xl laptop:text-3xl text-2xl ri-video-chat-line"></i>}
                            />
                        </div>
                        <div className="tablet:w-1/3">
                            <FeaturedCardLatest
                                bg_color="white"
                                title="Make 100% better decisions"
                                content="Use advanced analytics to support new business development"
                                icon={<i className="text-black desktop:text-4xl laptop:text-3xl text-2xl ri-pie-chart-box-line"></i>}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners description */}
            <section
                id="partner-description"
                className="px-5 desktop:px-28 laptop:px-14 laptop:py-36 py-9"
            >
                <div className="laptop:container container-fluid mx-auto grid grid-flow-row auto-rows-max laptop:gap-28 gap-14">
                    <div className="grid tablet:grid-cols-2 gap-y-14 tablet:gap-x-5 laptop:gap-x-10 items-center">
                        <div>
                            <Image
                                src="/assets/images/partnershipbenefits.png"
                                alt="Partnership Benefits Image"
                                width={600}
                                height={520}
                            />
                        </div>
                        <div>
                            <h2 className="text-left desktop:text-5xl laptop:text-4xl tablet:text-3xl text-2xl font-bold laptop:pb-6 pb-3">Partnership benefits</h2>
                            <p className="text-left font-normal laptop:text-2xl tablet:text-xl text-sm text-warm-gray-700">
                                We believe in a win-win partnership. When you partner with us, you’ll start seeing benefits right away.
                            </p>

                            <div className="grid grid-cols-2 gap-x-4 laptop:gap-x-8 laptop:gap-y-4 grid-flow-row text-left laptop:my-10 my-5">
                                <div className="text-left">
                                    <h4 className="text-black desktop:text-3xl laptop:text-2xl tablet:text-xl text-lg font-bold">
                                        Make profits
                                    </h4>
                                    <p className="text-warm-gray-700 laptop:text-lg tablet:text-sm text-xs pt-3 font-normal">
                                        Earn generous percentages for every referral that subscribes
                                    </p>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-black desktop:text-3xl laptop:text-2xl tablet:text-xl text-lg font-bold">
                                        Growth
                                    </h4>
                                    <p className="text-warm-gray-700 laptop:text-lg tablet:text-sm text-xs pt-3">
                                        Grow your business with a fully loaded live commerce solution
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 laptop:gap-x-8 laptop:gap-y-4 grid-flow-row text-left">
                                <div className="text-left laptop:pt-0 pt-4">
                                    <h4 className="text-black desktop:text-3xl laptop:text-2xl tablet:text-xl text-lg font-bold">
                                        Information
                                    </h4>
                                    <p className="text-warm-gray-700 laptop:text-lg tablet:text-sm text-xs pt-3">
                                        Get access to the latest use cases and strategy
                                    </p>
                                </div>
                                <div className="laptop:pt-0 pt-4 text-left">
                                    <h4 className="text-black desktop:text-3xl laptop:text-2xl tablet:text-xl text-lg font-bold">
                                        Mutual Benefits
                                    </h4>
                                    <p className="text-warm-gray-700 laptop:text-lg tablet:text-sm text-xs pt-3">
                                        Pass on attractive subscription discounts to clients
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-40 bg-warm-gray-100 laptop:p-24 p-6">
                        <p className="laptop:text-5xl font-bold text-2xl laptop:mb-16 mb-10 laptop:text-left text-center">Partners directory</p>
                        <div class="grid desktop:grid-rows-2 desktop:grid-flow-col laptop:gap-14 items-center laptop:grid-cols-3 auto-rows-auto grid-cols-2 gap-8 laptop:pl-0 tablet:pl-28">
                            <div><Image src="/assets/images/icons/shopflo.svg" width={126} height={28} alt="" /></div>
                            <div><Image src="/assets/images/icons/msg91.svg" width={86} height={28} alt="" /></div>
                            <div><Image src="/assets/images/icons/greenhonchos.svg" width={158} height={32} alt="" /></div>
                            <div><Image src="/assets/images/icons/remis.svg" width={84} height={24} alt="" /></div>
                            <div><Image src="/assets/images/icons/mediastic.svg" width={173} height={32} alt="" /></div>
                            <div><Image src="/assets/images/icons/klub.svg" width={71} height={28} alt="" /></div>
                            <div className="laptop:block hidden"><Image src="/assets/images/icons/entravision.svg" width={164} height={32} alt="" /></div>
                            <div className="laptop:block hidden"><Image src="/assets/images/icons/itrendglobal.svg" width={83} height={44} alt="" /></div>
                            <div className="laptop:block hidden"><Image src="/assets/images/icons/greenroom.svg" width={167} height={74} alt="" /></div>
                            <div className="laptop:block hidden"><Image src="/assets/images/icons/voxxy.svg" width={61} height={40} alt="" /></div>
                            <div className="laptop:block hidden"><Image src="/assets/images/icons/livecel.svg" width={71} height={38} alt="" /></div>
                            <div className="laptop:block hidden"><Image src="/assets/images/icons/alphamarketer.svg" width={195} height={32} alt="" /></div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Testimonials */}
            <section
                id="testimonials"
                className="px-5 py-10 desktop:px-52 laptop:py-28 laptop:px-16 tablet:px-10 bg-warm-black"
            >
                <div className="laptop:container container-fluid mx-auto">
                    <div className="text-center">
                        <h3 className="desktop:text-5xl laptop:text-5xl tablet:text-3xl text-2xl font-bold text-white">
                            Partner Testimonials
                        </h3>
                    </div>
                    <div className="pt-14">
                        <PartnerTestimonialsCard />
                    </div>
                </div>
            </section >

            {/* Call to Action  */}
            <section
                id="call-to-action"
                className="desktop:px-28 desktop:py-24 laptop:px-14 tablet:px-7 px-5 py-10 bg-warm-black-50"
            >
                <CallToAction heading="Fifteen minutes can transform your brand" subheading="Find out all you want to know about live shopping."
                    btnText="Request a demo" btnLink="Book a demo" />
            </section>
            <script
                async
                src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/js/v11.7/short-videos.min.js"
            ></script>
        </>
    )
}