import Head from 'next/head';
import { useState } from 'react';
import Card from '../components/Card';
import CallToAction from '../components/CallToAction';

export default function Pricing() {
    const [isActive, setIsActive] = useState("FirstPage");

    return (
        <>
            <Head>
                <title>Swirl Pricing Plans | Choose The Right Plan For You</title>
            </Head>
            {/* {Pricing Heading Sec }*/}
            <section id='pricing-header-section' className='bg-warm-cream-300 py-32'>
                <div className="laptop:container container-fluid-fluid mx-auto desktop:px-28 laptop:px-14 tablet:px-7 px-5">
                    <h1 className="font-bold text-warm-gray-400 text-center laptop:text-6xl text-2xl">Pricing</h1>
                    <div className="pt-14">
                        <div className="flex justify-center pb-20">
                            <button onClick={() => setIsActive("FirstPage")} className={`${isActive === 'FirstPage' ? 'active' : 'inactive'} text-warm-gray-400 desktop:border-b-4 border-b-2 font-medium laptop:text-xl text-lg laptop:px-20 laptop:py-8 tablet:p-5 p-2`}>Live shopping</button>
                            <button onClick={() => setIsActive("SecondPage")} className={`${isActive === 'SecondPage' ? 'active' : 'inactive'} text-warm-gray-400 desktop:border-b-4 border-b-2 font-medium laptop:text-xl text-lg laptop:px-20 laptop:py-8 tablet:p-5 p-2`}>Shoppable Video</button>
                        </div>
                    </div>
                    {isActive === "FirstPage" && <Card toggle="Live shopping" />}
                    {isActive === "SecondPage" && <Card toggle="Shopping Video" />}
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="desktop:px-28 desktop:py-24 laptop:px-14 tablet:px-7 px-5 py-10 bg-warm-black-300">
                <div className="laptop:container container-fluid mx-auto">
                    <div className="text-center bg-warm-black-300">
                        <h3 className="desktop:text-5xl laptop:text-3xl tablet:text-2xl text-xl font-bold text-white">
                            Frequently Asked Questions
                        </h3>
                        <div
                            className="accordion pt-24 text-black"
                            id="pricing-accordion"
                        >
                            <div className="rounded-t-3xl border border-warm-gray-350 bg-warm-black-300 px-10 py-8">
                                <h3 className="accordion-header mb-0 flex items-center" id="headingOne">
                                    <button className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base text-white laptop:text-xl font-medium desktop:text-2xl" type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne"
                                    >
                                        How hard is it to integrate SWIRL onto my website?
                                    </button>
                                </h3>
                                <div
                                    id="collapseOne"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#pricing-accordion"
                                >
                                    <div className="accordion-body py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 text-warm-gray-100 laptop:text-base">
                                            Integrating SWIRL onto your website only requires a short
                                            copy-paste of a code. Our team will help you do this when
                                            you’re ready, so you don’t need any special technical
                                            integration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-warm-gray-350 bg-warm-black-300 px-10 py-8">
                                <h3 className="accordion-header mb-0" id="headingTwo">
                                    <button
                                        className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base text-white laptop:text-xl font-medium desktop:text-2xl"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 ">
                                            One to Many, Shoppable Video, and One to One – How should
                                            I choose which product will work for me?
                                        </p>
                                    </button>
                                </h3>
                                <div
                                    id="collapseTwo"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#pricing-accordion"
                                >
                                    <div className="accordion-body py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 text-warm-gray-100  laptop:text-base">
                                            Each of our products have different use cases, and one may
                                            suit your brand requirements more than the others. If
                                            you’re interested in live commerce but not sure which to
                                            choose, book a demo and have a chat with our team.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-warm-gray-350 bg-warm-black-300 px-10 py-8">
                                <h3 className="accordion-header mb-0" id="headingThree">
                                    <button
                                        className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base text-white laptop:text-xl font-medium desktop:text-2xl"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Can I try it out before subscribing?
                                    </button>
                                </h3>
                                <div
                                    id="collapseThree"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#pricing-accordion"
                                >
                                    <div className="accordion-body py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 text-warm-gray-100  laptop:text-base">
                                            Yes, we offer a free trial that allows you to experiment
                                            with a few features and share your first live commerce
                                            video with a limited list of friends. Book a demo above to
                                            chat with us and ask for a free trial.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-warm-gray-350 bg-warm-black-300 px-10 py-8 ">
                                <h3 className="accordion-header mb-0" id="headingFour">
                                    <button
                                        className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base text-white laptop:text-xl font-medium desktop:text-2xl"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        What if I don’t have any video content?
                                    </button>
                                </h3>
                                <div
                                    id="collapseFour"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#pricing-accordion"
                                >
                                    <div className="accordion-body py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 text-warm-gray-100  laptop:text-base">
                                            You can still start off with Shoppable Videos, by
                                            repurposing your social media videos with an ecommerce
                                            layer. These videos will be added as a carousel on your
                                            website and can significantly improve time spent as well
                                            as bring in new sales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-b-3xl border-warm-gray-350 bg-warm-black-300 px-10 py-8">
                                <h3 className="accordion-header mb-0" id="headingFive">
                                    <button
                                        className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base text-white laptop:text-xl font-medium desktop:text-2xl"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        What if my brand can’t afford influencers?
                                    </button>
                                </h3>
                                <div
                                    id="collapseFive"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingFive"
                                    data-bs-parent="#pricing-accordion"
                                >
                                    <div className="accordion-body py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 text-warm-gray-100  laptop:text-base">
                                            You don’t need to hire influencers to host your
                                            livestreams. Research shows that customers are more likely
                                            to trust brand experts or members of sales teams for live
                                            shopping. Just make sure your host is knowledgeable, can
                                            answer questions and is comfortable in front of the
                                            camera.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action  */}
            <section id="call-to-action" className="desktop:px-28 desktop:py-24 laptop:px-14 tablet:px-7 px-5 py-10 bg-warm-black-50">
                <CallToAction heading="Fifteen minutes can transform your brand" subheading="Find out all you want to know about live shopping." btnText="Book a demo" btnLink="Book a demo" />
            </section>
        </>
    )
}