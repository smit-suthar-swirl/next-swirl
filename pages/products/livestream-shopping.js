import Head from "next/head";
import Image from "next/image";
import Button from "../../components/Button";
import FeaturedCard from "../../components/FeaturedCard";
import Link from "next/link";
import ArrowRight from "../../public/assets/images/icons/arrow-right.svg"
import CallToAction from "../../components/CallToAction";
import FeaturedCardLatest from "../../components/FeaturedCardLatest";


export default function productOneToMany() {

    return (
        <>
            <Head>
                <title>Livestream Shopping | Swirl</title>
            </Head>

            {/* Hero Header Sec */}
            <section className='desktop:px-28 desktop:pb-28 desktop:pt-14 laptop:px-16 tablet:px-10 px-5 pt-32 laptop:pb-14 pb-6'>
                <div className="laptop:container container-fluid mx-auto">
                    <div className="flex flex-col items-center justify-between">
                        <h4 className='text-center text-red-1000 font-bold text-lg tablet:text-xl laptop:text-2xl'>Livestream Shopping</h4>
                        <div className="pt-2 laptop:pt-5 desktop:px-28">
                            <h1 className="font-bold text-center text-2xl tablet:text-4xl laptop:text-6xl">Point. Shoot. Inspire.</h1>
                        </div>
                        <div className="py-4 tablet:flex laptop:py-6">
                            <h4 className="desktop:text-lg font-normal pl-2 text-sm"><i className="mr-2 align-middle laptop:text-2xl text-xl ri-check-line"></i>Native experience</h4>
                            <h4 className="desktop:text-lg font-normal pl-2 text-sm"><i className="mr-2 align-middle laptop:text-2xl text-xl ri-check-line"></i>Easy integration</h4>
                            <h4 className="desktop:text-lg font-normal pl-2 text-sm"><i className="mr-2 align-middle laptop:text-2xl text-xl ri-check-line"></i>Authentic engagement</h4>
                        </div>
                        <Image src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/one-to-many-hero.webp" alt="HeroHeaderSection" width={800} height={521} className='mx-auto' />
                    </div>
                </div>
            </section>

            {/*Immersive video shopping for a tablet-first gen*/}
            <section className='desktop:px-28 desktop:pb-20 laptop:px-14 tablet:px-7 px-5 pb-10'>
                <div className="laptop:container container-fluid mx-auto">
                    <div className="desktop:px-80 laptop:px-28 tablet:pb-10 pb-5">
                        <h2 className="text-center laptop:text-5xl tablet:text-3xl text-xl font-bold">Immersive video shopping for a mobile-first gen</h2>
                    </div>
                    <div className='grid tablet:grid-cols-3 items-center desktop:gap-x-8 tablet:gap-x-4 gap-y-4'>
                        <FeaturedCardLatest borderColor="cream" title="Floating video" content="Undisturbed viewing with picture-in-picture video." icon={<i className="desktop:text-4xl  text-2xl ri-picture-in-picture-fill"></i>} />
                        <FeaturedCardLatest borderColor="cream" title="Curated playlist" content="Create carousel or grid format playlists and embed them in your website." icon={<i className="desktop:text-4xl  text-2xl ri-checkbox-multiple-line"></i>} />
                        <FeaturedCardLatest borderColor="cream" title="RTMP" content="Product studio-quality livestreams with RTMP, external camera set-up, and OBS integration" icon={<i className="desktop:text-4xl  text-2xl ri-camera-2-line"></i>} />
                    </div>
                </div>
            </section>

            {/* Broadcast ‘shoppertainment’ so hypnotic, viewers won’t be able to look away. */}
            <section className='desktop:px-28 howdesktop:py-20 laptop:px-14 tablet:px-7 px-5 py-10'>
                <div className="laptop:container container-fluid mx-auto">
                    <div className="desktop:pb-24 desktop:px-28 laptop:pb-12 pb-16 text-center">
                        <h2 className="desktop:text-6xl laptop:text-4xl tablet:text-3xl text-xl font-bold">Broadcast &#701;shoppertainment&#700; so hypnotic,<br className="tablet:block hidden" /><span className="text-warm-gray-700"> viewers won&#700;t be able to look away.</span></h2>
                    </div>
                    <div className="grid grid-flow-row auto-rows-max desktop:gap-y-28 gap-y-20 text-center">
                        <div className="grid tablet:grid-cols-2 desktop:gap-20 gap-10 items-center">
                            <div className="tablet:text-left">
                                <h3 className='desktop:text-5xl laptop:text-4xl tablet:text-3xl text-xl font-bold'>A fully native experience</h3>
                                <p className="font-normal tablet:text-xl laptop:text-2xl laptop:pt-8 text-base pt-2">Build brand-specific conversion workflows: from discovery to engagement to purchase.</p>
                            </div>
                            <div className='bg-warm-gray-100 rounded-40'>
                                <Image src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/one-to-many-fully-native-exp.webp" alt="A fully native experience" width={608} height={504} />
                            </div>
                        </div>
                        <div className="grid tablet:grid-cols-2 desktop:gap-20 gap-10 items-center">
                            <div className='order-2 tablet:order-1 bg-warm-gray-100 rounded-40'>
                                <Image src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/one-to-many-ease-in-video.webp" alt="easy in video Shopping" width={608} height={504} />
                            </div>
                            <div className='order-1 tablet:order-2 tablet:text-left'>
                                <h3 className="desktop:text-5xl laptop:text-4x tablet:text-3xl text-xl font-bold">Easy in-video checkout</h3>
                                <p className="font-normal laptop:text-2xl tablet:text-xl laptop:pt-8 text-base pt-2">Customers interact and shop without leaving video.</p>
                            </div>
                        </div>
                        <div className="grid tablet:grid-cols-2 desktop:gap-20 gap-10 items-center">
                            <div className='tablet:text-left'>
                                <h3 className="desktop:text-5xl laptop:text-4xl tablet:text-3xl text-xl font-bold">Simulcast on social media</h3>
                                <p className="font-normal laptop:text-2xl tablet:text-xl laptop:pt-8 text-base pt-2">Go live across Instagram, Facebook (Meta), YouTube, or any web platform.</p>
                            </div>
                            <div className='mx-auto bg-warm-gray-100 rounded-40'>
                                <Image src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/one-to-many-simulcast-on-social-media.webp" alt="Simulcast on social media" width={608}
                                    height={504} />
                            </div>
                        </div>
                        <div className="grid tablet:grid-cols-2 desktop:gap-20 gap-10 items-center">
                            <div className='order-2 tablet:order-1 bg-warm-gray-100 rounded-40'>
                                <Image src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/one-to-many-analytics-and-business-intelligence.webp" alt="Attribution for business intelligence " width={608} height={504} />
                            </div>
                            <div className='order-1 tablet:order-2 tablet:text-left'>
                                <h3 className="desktop:text-5xl laptop:text-4xl tablet:text-3xl text-xl font-bold">Analytics and business intelligence</h3>
                                <p className="font-normal laptop:text-2xl tablet:text-xl laptop:pt-8 text-base pt-2">Get detailed insights, attribution, consumer persona, and trend prediction. </p>
                            </div>
                        </div>
                        <div className="grid tablet:grid-cols-2 desktop:gap-20 gap-10 items-center">
                            <div className='tablet:text-left'>
                                <h3 className="desktop:text-5xl laptop:text-4xl tablet:text-3xl text-xl font-bold">Digital clienteling</h3>
                                <p className="font-normal laptop:text-2xl tablet:text-xl laptop:pt-8 text-base pt-2">Capture leads and retarget buyers with high intent through text, voice message, and chat.</p>
                            </div>
                            <div className='mx-auto bg-warm-gray-100 rounded-40'>
                                <Image src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/one-to-many-digital-clienteling.webp" alt="Digital clienteling" width={608} height={504} />
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
                                {/* Kamppi Helsinki (logo) */}
                                <div className="">
                                    <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/Kamppilogo.webp' alt=' Kamppi Helsinki (logo)' height="80" width="80" />
                                </div>
                                <div className='pt-3'>
                                    <p className='laptop:text-lg text-sm font-normal'>A retail outlet in the buzzing heart of Helsinki, Finland, improved customer relationships and conversions over just two months with One-to-Many live vide shopping.</p>
                                </div>
                                <div className='grid grid-flow-col auto-cols-auto desktop:gap-x-4 gap-x-2 desktop:py-20 tablet:py-10 py-5'>
                                    <div className='text-center'>
                                        <h4 className='laptop:text-3xl text-lg font-medium'>3x</h4>
                                        <p className='font-normal laptop:text-lg text-sm pt-2'>Higher conversions</p>
                                    </div>
                                    <div className='h-full w-px bg-warm-gray-500'></div>
                                    <div className='text-center'>
                                        <h4 className='laptop:text-3xl text-lg font-medium'>17min</h4>
                                        <p className='font-normal laptop:text-lg text-sm pt-2'>Average watch time</p>
                                    </div>
                                    <div className='h-full w-px bg-warm-gray-500'></div>
                                    <div className='text-center'>
                                        <h4 className='laptop:text-3xl text-lg font-medium'>117&#37;</h4>
                                        <p className='font-normal laptop:text-lg text-sm pt-2'>Increased engagement</p>
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
                                <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/case-studies-thumbnail.webp' alt='Case study thumbnail' width={608} height={638} className="img laptop:rounded-r-32 rounded-32" />
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
                        <div className="accordion desktop:pt-24 pt-12 text-black" id="livestream-accordion">

                            <div className="border border-warm-gray-350 rounded-t-3xl bg-warm-black-300 tablet:px-10 px-5 tablet:py-8 py-4">
                                <h3 className="accordion-header mb-0 flex items-center" id="headingOne">
                                    <button className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl" type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne"
                                    >
                                        I’m not sure if my customers want a live commerce option.
                                    </button>
                                </h3>
                                <div id="collapseOne" className="collapse accordion-collapse" aria-labelledby="headingOne" data-bs-parent="#livestream-accordion">
                                    <div className="py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100 laptop:text-base">
                                            As we move towards Web 3.0 and the metaverse, ecommerce as we know it is changing. If you’re already seeing higher acquisition costs, lower retention, and low website traffic, it is a sign that your customers want more.
                                            With SWIRL’s livestream shopping solutions, your brand won’t have to bear the brunt of rising costs and dipping profits.
                                        </p>
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 py-5 text-sm font-normal desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100 laptop:text-base">
                                            Globally, $2 trillion is lost in sales opportunities because of low conversion rates.
                                            Over 55% of global traffic show high bounce rates, with less than 15 seconds spent on websites.
                                        </p>
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100 laptop:text-base">
                                            With SWIRL’s livestream shopping solutions, your brand won’t have to bear the brunt of rising costs and dipping profits.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-warm-gray-350 bg-warm-black-300 tablet:px-10 px-5 tablet:py-8 py-4">
                                <h3 className="accordion-header mb-0" id="headingTwo">
                                    <button
                                        className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        What are the benefits of adding livestream video selling to my website?
                                    </button>
                                </h3>
                                <div
                                    id="collapseTwo"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#livestream-accordion"
                                >
                                    <div className="py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100  laptop:text-base">
                                            Each of our products have different use cases, and one may suit your brand requirements more than the others. If you’re interested in live commerce but not sure which to choose, book a demo and have a chat with our team.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-warm-gray-350 bg-warm-black-300 tablet:px-10 px-5 tablet:py-8 py-4">
                                <h3 className="accordion-header mb-0" id="headingThree">
                                    <button
                                        className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        How does live shopping work, exactly?
                                    </button>
                                </h3>
                                <div
                                    id="collapseThree"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#livestream-accordion"
                                >
                                    <div className="py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100  laptop:text-base">
                                            Yes, we offer a free trial that allows you to experiment
                                            with a few features and share your first live commerce
                                            video with a limited list of friends. Book a demo above to
                                            chat with us and ask for a free trial.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-warm-gray-350 rounded-b-3xl bg-warm-black-300 tablet:px-10 px-5 tablet:py-8 py-4">
                                <h3 className="accordion-header mb-0" id="headingFive">
                                    <button
                                        className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        Is there any way to track how my live events are performing?
                                    </button>
                                </h3>
                                <div
                                    id="collapseFour"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingFive"
                                    data-bs-parent="#livestream-accordion"
                                >
                                    <div className="py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100  laptop:text-base">
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
                <CallToAction heading="Interested?" subheading="Our demo only takes 15 minutes and you can book it at any time that works for you." btnText="Book a demo" btnLink="Book a demo" />
            </section>
        </>
    )
}
