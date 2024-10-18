import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
import FeaturedCard from "../../components/FeaturedCard";
import CallToAction from "../../components/CallToAction";
import ArrowRight from "../../public/assets/images/icons/arrow-right.svg"
import FeaturedCardLatest from "../../components/FeaturedCardLatest";
import pnRao from "../../public/assets/images/pn_rao.jpg";

export default function productOneToOne() {
    return (
        <>
            <Head>
                <title>One-to-One Live Personal Shopping Experience</title>
            </Head>

            {/* Hero Header Sec */}
            <section className="desktop:px-28 desktop:pb-28 desktop:pt-14 laptop:px-16 tablet:px-10 px-5 pt-32 laptop:pb-14 pb-6">
                <div className="laptop:container container-fluid mx-auto">
                    <div className="flex flex-col items-center justify-between">
                        <h4 className='text-center text-red-1000 font-bold text-lg tablet:text-xl laptop:text-2xl'>One-to-one Personal Shopping</h4>
                        <div className="pt-2 laptop:pt-5 desktop:px-28">
                            <h1 className="font-bold text-center text-2xl tablet:text-4xl laptop:text-6xl">
                                More intimate.<br />More effective.
                            </h1>
                        </div>
                        <div className="py-4 tablet:flex laptop:py-6">
                            <h4 className="desktop:text-lg font-normal pl-2 text-sm"><i className="mr-2 align-middle laptop:text-2xl text-xl  ri-check-line"></i>Assisted shopping</h4>
                            <h4 className="desktop:text-lg font-normal pl-2 text-sm"><i className="mr-2 align-middle laptop:text-2xl text-xl  ri-check-line"></i>Shorter sales cycle</h4>
                            <h4 className="desktop:text-lg font-normal pl-2 text-sm"><i className="mr-2 align-middle laptop:text-2xl text-xl  ri-check-line"></i>Expert consulting sessions</h4>
                        </div>
                        <Image
                            src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/one-to-one-hero.webp"
                            alt="HeroHeaderSection"
                            width={500}
                            height={500}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Concierge Style Shopping for High Value Customers*/}
            <section className='desktop:px-28 desktop:pb-20 laptop:px-14 tablet:px-7 px-5 pb-10'>
                <div className="laptop:container container-fluid mx-auto">
                    <div className="desktop:px-72 laptop:px-36 tablet:px-20 pb-6">
                        <h2 className="text-center laptop:text-5xl tablet:text-3xl text-xl font-bold">
                            Concierge-style shopping for high value customers
                        </h2>
                        <h4 className="text-center desktop:text-lg text-base font-medium py-5">Bring the personalized human touch of assisted shopping to your virtual storefront and recreate the experience of a physical store.</h4>
                    </div>
                    <div className='grid tablet:grid-cols-3 items-center desktop:gap-x-8 tablet:gap-x-4 gap-y-4'>
                        <FeaturedCardLatest title="High touch experience" content="Self-scheduled appointments, reminders and follow-ups, special offers, more" icon={<i className="desktop:text-4xl laptop:text-3xl text-2xl ri-focus-2-line"></i>} />
                        <FeaturedCardLatest title="Built-in shopping" content="In-video questions, voice messages or texts, live chat" icon={<i className="desktop:text-4xl laptop:text-3xl text-2xl ri-shopping-bag-2-line"></i>} />
                        <FeaturedCardLatest title="Assisted shopping" content="Build custom catalogues, offer exclusive recommendations, and add to cart on customers’ behalf" icon={<i className="desktop:text-4xl laptop:text-3xl text-2xl ri-t-shirt-line"></i>} />
                    </div>
                </div>
            </section>

            {/* Guiding Shopping Journey with consultive Approach */}
            <section className="desktop:px-28 desktop:py-20 laptop:px-14 tablet:px-7 px-5 py-10">
                <div className="laptop:container container-fluid mx-auto">
                    <div className="desktop:px-36 laptop:pb-12 pb-10 text-center">
                        <h2 className="desktop:text-6xl laptop:text-4xl tablet:text-3xl text-xl font-bold">Guided shopping journeys with a</h2>
                        <h2 className="desktop:text-6xl laptop:text-4xl tablet:text-3xl text-xl font-bold text-warm-gray-700">consultative approach</h2>
                    </div>
                    <div className="grid grid-flow-row auto-rows-max desktop:gap-y-28 gap-y-20 text-center">
                        <div className="grid tablet:grid-cols-2 laptop:gap-20 gap-10 items-center">
                            <div className="tablet:text-left">
                                <h3 className='desktop:text-5xl laptop:text-4xl tablet:text-2xl text-xl font-bold'>Analytics and metrics for business decisions
                                </h3>
                                <p className="font-normal laptop:text-2xl tablet:text-xl laptop:pt-8 text-base pt-2">Shopping history of customers, trend predictions, engagement records, etc</p>
                            </div>
                            <div className="desktop:ml-auto laptop:m-0 mx-auto bg-warm-gray-100 rounded-40">
                                <Image src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/one-to-one-Analytics-and-metrics.webp" alt="Analytics and metrics" width={608} height={504} />
                            </div>
                        </div>
                        <div className="grid tablet:grid-cols-2 laptop:gap-20 gap-10 items-center">
                            <div className="tablet:order-1 order-2 bg-warm-gray-100 rounded-40">
                                <Image src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/one-to-one-team-management.webp" alt="Team management" width={608} height={504} />
                            </div>
                            <div className="tablet:order-2 order-1 tablet:text-left">
                                <h3 className="desktop:text-5xl laptop:text-4xl tablet:text-2xl text-xl font-bold">Team management </h3>
                                <p className="font-normal laptop:text-2xl tablet:text-xl laptop:pt-8 text-base pt-2">View team performance, conduct training, delegate tasks from dashboard</p>
                            </div>
                        </div>
                        <div className="grid tablet:grid-cols-2 laptop:gap-20 gap-10 items-center">
                            <div className="tablet:text-left">
                                <h3 className="desktop:text-5xl laptop:text-4xl tablet:text-2xl text-xl font-bold">Build a valuable repository of first-party data</h3>
                                <p className="font-normal laptop:text-2xl tablet:text-xl laptop:pt-8 text-base pt-2">Capture leads, predict sales and conversions, and create your own database</p>
                            </div>
                            <div className="desktop:ml-auto laptop:m-0 mx-auto bg-warm-gray-100 rounded-40">
                                <Image src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/one-to-one-valuable-repo.webp" alt="valuable repository" width={608} height={504} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* case-study */}
            <section id='case-study' className='desktop:px-28 desktop:py-24 laptop:px-14 tablet:px-7 px-5 py-10 bg-warm-newgray-450'>
                <div className='laptop:container container-fluid mx-auto'>
                    <h3 className='laptop:text-5xl text-3xl font-bold pb-14 text-center'>Case studies</h3>
                    <div className='rounded-32 shadow box-border bg-white overflow-hidden'>
                        <div className='grid tablet:grid-cols-2 gap-x-12'>
                            <div className='grid grid-flow-rows items-center text-left desktop:px-14 desktop:py-12 laptop:py-6 px-6 pt-3'>
                                {/* PN RAO (logo) */}
                                <div className="">
                                    <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/pnraologo.webp' alt='PN RAO (logo) ' height="80" width="80" />
                                </div>
                                <div className='pt-3'>
                                    <p className='laptop:text-lg text-sm font-normal'>A luxury menswear brand in Bangalore collaborated with SWIRL during the COVID-19 lockdown to offer private shopping consultations via One-to-One personal virtual shopping experiences.</p>
                                </div>
                                <div className='grid grid-flow-col auto-cols-auto desktop:gap-x-4 gap-x-2 desktop:py-20 tablet:py-10 py-5'>
                                    <div className='text-center'>
                                        <h4 className='laptop:text-3xl text-lg font-medium'>37&#37;</h4>
                                        <p className='font-normal laptop:text-lg text-sm pt-2'>Higher sales</p>
                                    </div>
                                    <div className='h-full w-px bg-warm-gray-500'></div>
                                    <div className='text-center'>
                                        <h4 className='laptop:text-3xl text-lg font-medium'>5000</h4>
                                        <p className='font-normal laptop:text-lg text-sm pt-2'>Leads generated</p>
                                    </div>
                                    <div className='h-full w-px bg-warm-gray-500'></div>
                                    <div className='text-center'>
                                        <h4 className='laptop:text-3xl text-lg font-medium'>2x</h4>
                                        <p className='font-normal laptop:text-lg text-sm pt-2'>increase in AOV
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center py-4'>
                                    <Link href="/" className="no-underline">
                                        <div className='flex gap-x-3'>
                                            <div id="arrow-right-case-study-comp" className="p-0.5"><ArrowRight />
                                            </div>
                                            <Button text="Read Full Story" btn_variant="basic_btn" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='ml-auto h-full relative rounded-32'>
                                <Image
                                    src={pnRao}
                                    alt="pnRao thumbnail"
                                    width={960}
                                    height={960}
                                    className="img laptop:rounded-r-32 rounded-32"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="desktop:px-28 desktop:py-24 laptop:px-14 tablet:px-7 px-5 py-10 bg-warm-black-300">
                <div className="laptop:container container-fluid mx-auto">
                    <div className="text-center bg-warm-black-300">
                        <h3 className="desktop:text-5xl laptop:text-3xl text-2xl pt-8 font-bold text-white">
                            Questions? Answers.
                        </h3>
                        <div
                            className="accordion laptop:pt-24 pt-12 text-black"
                            id="one-to-one-accordion"
                        >
                            <div className="rounded-t-3xl border border-warm-gray-350 bg-warm-black-300 tablet:px-10 px-5 tablet:py-8 py-4">
                                <h3 className="accordion-header mb-0 flex items-center" id="headingOne">
                                    <button className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl" type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne"
                                    >
                                        Does assisted shopping increase conversions?
                                    </button>
                                </h3>
                                <div
                                    id="collapseOne"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#one-to-one-accordion"
                                >
                                    <div className="py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  text-warm-gray-100 laptop:text-base">
                                            Globally, $2 trillion is lost in sales opportunities because of low conversion rates. Over 55% of global traffic shows high bounce rates, with less than 15 seconds
                                            spent on eCommerce websites. With Swirl’s solutions, your brand won’t have to bear the brunt of rising costs and dipping profits. This assisted personal shopping experience
                                            adds to brand engagement and recall, makes clients feel valued, and increases the probability of a client coming back for more. Whether your brand offers luxury goods, skincare,
                                            electronics, real estate services, home and lifestyle products, makeup and skincare, fashion and apparel, private consulting, or other products,
                                            Swirl’s one-to-one solution can be used to engage with your customers. Get in touch with us to learn how brands like you are using live video selling today.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-warm-gray-350 bg-warm-black-300 tablet:px-10 px-5 tablet:py-8 py-4">
                                <h3 className="accordion-header mb-0" id="headingTwo">
                                    <button className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        What are the benefits of one-to-one personalized sessions for my business?
                                    </button>
                                </h3>
                                <div
                                    id="collapseTwo"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#one-to-one-accordion"
                                >
                                    <div className="py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  text-warm-gray-100 laptop:text-base">
                                            Customers enjoy the consultative approach of one-to-one shopping. You’ll be able to provide focused attention and a safe, comfortable space to answer queries and offer advice. Your team will appreciate the ease of creating shorter, more effective shopping journeys that are far more likely to convert. Before a live session, they’ll also be able to create custom catalogues, which allows them to customize the experience for high-profile customers or buyers with high interest. In addition, Swirl’s one-to-one solution offers a powerful dashboard that shows you the length of the call, queries solved, most effective hosts, revenue, and multiple other metrics that can help you hone your strategy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-b-3xl border-warm-gray-350 bg-warm-black-300 tablet:px-10 px-5 tablet:py-8 py-4">
                                <h3 className="accordion-header mb-0" id="headingFive">
                                    <button className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        How does one-to-one shopping work, exactly?
                                    </button>
                                </h3>
                                <div
                                    id="collapseFive"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingFive"
                                    data-bs-parent="#one-to-one-accordion"
                                >
                                    <div className="py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  text-warm-gray-100 laptop:text-base">
                                            Think of one-to-one shopping as a video call between host and customer, with the added convenience of powerful features like custom shopping journeys,
                                            personalized calls to action, easy and personalized guidance, and data collection.
                                            If you’d like to see it in action, book a demo with us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action  */}
            <section
                id="call-to-action"
                className="desktop:px-28 desktop:py-24 laptop:px-14 tablet:px-7 px-5 py-10 bg-warm-black-50"
            >
                <CallToAction heading="Interested?" subheading="Our demo only takes 15 minutes and 
                               you can book it at any time that works for you."
                    btnText="Book a demo" btnLink="Book a demo" />
            </section>
        </>
    )
}
