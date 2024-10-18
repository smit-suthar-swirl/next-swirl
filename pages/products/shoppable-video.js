import Head from 'next/head';
import Image from 'next/image';
import Button from '../../components/Button';
import CallToAction from "../../components/CallToAction";
import ArrowRight from "../../public/assets/images/icons/arrow-right.svg"
import Link from 'next/link';
import FeaturedCardLatest from '../../components/FeaturedCardLatest';
import bechefCaseStudy from "../../public/assets/images/bechef.png";
import ShowreelDynamic from "../../components/ShowreelShoppingVideo";
import QuickLoadTime from "../../public/assets/images/quick_load_time.png";


export default function shoppableVideo() {
    return (
        <>
            <Head>
                <title>Shoppable Videos - Watch, Click, Shop</title>
            </Head>
            {/* banner-section */}
            <section id='banner-section' className='desktop:px-28 desktop:pb-14 desktop:pt-14 laptop:px-16 tablet:px-10 px-5 pt-32 pb-6'>
                <div className='laptop:container container-fluid mx-auto'>
                    <div className="flex flex-col items-center justify-between">
                        <h4 className='text-center text-red-1000 font-bold text-lg tablet:text-xl laptop:text-2xl'>Shoppable Videos</h4>
                        <div className="pt-2 laptop:pt-8 desktop:px-28">
                            <h1 className="font-bold text-center text-2xl tablet:text-4xl laptop:text-6xl">Breathe life<br /> into your products.</h1>
                        </div>
                        <div className="py-4 tablet:flex laptop:py-6">
                            <h4 className="desktop:text-lg font-normal pl-2 text-sm"><i className="mr-2 align-middle laptop:text-2xl text-xl ri-check-line"></i>Byte-sized content</h4>
                            <h4 className="desktop:text-lg font-normal pl-2 text-sm"><i className="mr-2 align-middle laptop:text-2xl text-xl ri-check-line"></i>Swipe-able videos</h4>
                            <h4 className="desktop:text-lg font-normal pl-2 text-sm"><i className="mr-2 align-middle laptop:text-2xl text-xl ri-check-line"></i>Built-in CTAs</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* show-reels */}
            <ShowreelDynamic />

            {/* swirl-features */}
            <section id='swirl-features' className='desktop:px-28 desktop:pb-20 laptop:px-14 tablet:px-7 px-5 pb-10'>
                <div className='laptop:container container-fluid mx-auto'>
                    <div className='grid grid-flow-row auto-rows-max items-center laptop:gap-y-32 laptop:pt-24 gap-y-16 pt-10'>
                        <div className='flex flex-col desktop:gap-y-14 tablet:gap-y-7 gap-y-4 items-center'>
                            <div className='text-center'>
                                <h3 className='laptop:text-5xl tablet:text-3xl text-xl font-bold'>Quick load time</h3>
                                <p className='laptop:text-2xl tablet:text-xl font-normal pt-5 pb-10 text-base'>Videos served via CDN for no visible impact on load time</p>
                            </div>
                            <div className='bg-warm-gray-100 rounded-40'>
                                <Image src={QuickLoadTime} alt='Quick load time  1 sec' width={628} height={520} />
                            </div>
                        </div>
                        <div className='flex flex-col desktop:gap-y-14 laptop:gap-y-7 gap-y-4 items-center'>
                            <div className='text-center'>
                                <h3 className='laptop:text-5xl tablet:text-3xl text-xl font-bold'>Auto-import from social media</h3>
                                <p className='laptop:text-2xl tablet:text-xl font-normal pt-5 pb-10 text-base'>Record new videos or convert social media videos into shoppable assets.</p>
                            </div>
                            <div className='bg-warm-gray-100 rounded-40'>
                                <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/shoppable-auto-import.webp' alt='Auto-import from social media' width={628} height={520} />
                            </div>
                        </div>
                        <div className='flex flex-col desktop:gap-y-14 laptop:gap-y-7 gap-y-4 items-center'>
                            <div className='text-center'>
                                <h3 className='laptop:text-5xl tablet:text-3xl text-xl font-bold'>Multiple products in one video</h3>
                                <p className='laptop:text-2xl tablet:text-xl font-normal pt-5 pb-10 text-base'>Attach and demonstrate multiple product attributes in a single video.</p>
                            </div>
                            <div className=' bg-warm-gray-100 rounded-40'>
                                <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/shoppable-multiple-products.webp' alt='Multiple products in one video' width={628} height={520} />
                            </div>
                        </div>
                        <div className='flex flex-col desktop:gap-y-14 laptop:gap-y-7 gap-y-4 items-center'>
                            <div className='text-center'>
                                <h3 className='laptop:text-5xl tablet:text-3xl text-xl font-bold'>Multi-page embed</h3>
                                <p className='laptop:text-2xl tablet:text-xl font-normal pt-5 pb-10 text-base'>Add carousels and short videos to your product pages with a few clicks.</p>
                            </div>
                            <div className='bg-warm-gray-100 rounded-40'>
                                <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/shoppable-ecommerce.webp' alt='Multi-page embed' width={628} height={520} />
                            </div>
                        </div>
                        <div className='flex flex-col desktop:gap-y-14 laptop:gap-y-7 gap-y-4 items-center'>
                            <div className='text-center'>
                                <h3 className='laptop:text-5xl tablet:text-3xl text-xl font-bold'>In-video checkout</h3>
                                <p className='laptop:text-2xl tablet:text-xl font-normal pt-5 pb-10 text-base'>Shorten the path to purchase with an uninterrupted shopping experience.</p>
                            </div>
                            <div className=' bg-warm-gray-100 rounded-40'>
                                <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/shoppable-ecommerce.webp' alt='In-video checkout' width={628} height={520} />
                            </div>
                        </div>
                        <div className='flex flex-col desktop:gap-y-14 laptop:gap-y-7 gap-y-4 items-center'>
                            <div className='text-center'>
                                <h3 className='laptop:text-5xl tablet:text-3xl text-xl font-bold'>Simple one-line integration</h3>
                                <p className='laptop:text-2xl tablet:text-xl font-normal pt-5 pb-10 text-base'>Just copy-paste short code into your website and get started.</p>
                            </div>
                            <div className=' bg-warm-gray-100 rounded-40'>
                                <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/shoppable-simple-one-line.webp' alt='Simple one-line integration' width={628} height={520} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* explore */}
            <section id='explore' className='desktop:px-28 laptop:px-14 px-5 py-10'>
                <div className='laptop:container container-fluid mx-auto'>
                    <div className='desktop:px-52 laptop:px-20 text-center pb-10'>
                        <h2 className='laptop:text-5xl tablet:text-3xl text-lg font-bold'>TikTok-style eCommerce to inspire confidence</h2>
                    </div>
                    <div className='grid tablet:grid-cols-3 tablet:grid-flow-row tablet:auto-rows-max gap-8'>
                        <FeaturedCardLatest title="Carousel-style video" content="Boost engagement and average time spent with embedded product videos" icon={<i className="desktop:text-4xl text-2xl ri-video-line"></i>} />
                        <FeaturedCardLatest title="Interactive engagements" content="Trigger conversations with polls, questions, announcements, and other interactions" icon={<i className="desktop:text-4xl text-2xl ri-chat-poll-line"></i>} />
                        <FeaturedCardLatest title="Guided shopping journey" content="Create playlists, tutorials, demos, with built-in CTAs to inspire action" icon={<i className="desktop:text-4xl text-2xl ri-lightbulb-flash-line"></i>} />
                    </div>
                </div>
            </section>

            <section className='desktop:px-28 desktop:py-24 laptop:px-14 tablet:px-7 px-5 py-10 '>
                <div className='laptop:container container-fluid mx-auto'>
                    <div className='rounded-100 desktop:py-14 laptop:py-7 py-4 desktop:px-18 laptop:px-7 px-4 bg-warm-yellow text-center'>
                        <h2 className='desktop:text-7xl laptop:text-4xl text-xl font-bold text-warm-black'>Transform static to immersive </h2>
                    </div>
                </div>
            </section>

            {/* case-study */}
            <section id='case-study' className='desktop:px-28 desktop:py-24 laptop:px-14 tablet:px-7 px-5 py-10 bg-warm-newgray-450'>
                <div className='laptop:container container-fluid mx-auto'>
                    <h3 className='laptop:text-5xl text-3xl font-bold pb-14 text-center'>Case studies</h3>
                    <div className='rounded-32 shadow box-border bg-white overflow-hidden'>
                        <div className='grid tablet:grid-cols-2 gap-x-12'>
                            <div className='grid grid-flow-rows items-center text-left desktop:px-14 desktop:pt-12 laptop:py-6 px-6 pt-3'>
                                {/* BeChef logo  */}
                                <div className="">
                                    <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/becheflogo.webp' alt='BeChef logo ' height="80" width="80" />
                                </div>
                                <div className='pt-3'>
                                    <p className='laptop:text-lg text-sm font-normal'>Food brand BeChef collaborated with SWIRL to showcase their range of chef-curated cooking sauces and ingredients through video eCommerce and saw a dramatic difference across the board.</p>
                                </div>
                                <div className='grid grid-flow-col auto-cols-auto desktop:gap-x-4 gap-x-2 desktop:py-20 tablet:py-10 py-5'>
                                    <div className='text-center'>
                                        <h4 className='laptop:text-3xl text-lg font-medium'>4.3x</h4>
                                        <p className='font-normal laptop:text-lg text-sm pt-2'>Increase in
                                            Add-to-Cart</p>
                                    </div>
                                    <div className='h-full w-px bg-warm-gray-500'></div>
                                    <div className='text-center'>
                                        <h4 className='laptop:text-3xl text-lg font-medium'>50&#37;</h4>
                                        <p className='font-normal laptop:text-lg text-sm pt-2'>Less returns</p>
                                    </div>
                                    <div className='h-full w-px bg-warm-gray-500'></div>
                                    <div className='text-center'>
                                        <h4 className='laptop:text-3xl text-lg font-medium'>5.5&#37;</h4>
                                        <p className='font-normal laptop:text-lg text-sm pt-2'>Boost in
                                            conversions</p>
                                    </div>
                                </div>
                                <div className='laptop:text-left text-center py-4'>
                                    <Link href="/" className="no-underline">
                                        <div className='flex gap-x-3'>
                                            <div id="arrow-right-case-study-comp" className="p-0.5"><ArrowRight />
                                            </div>
                                            <Button text="Read Full Story" btn_variant="basic_btn" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='ml-auto h-full w-full relative'>
                                <Image
                                    src={bechefCaseStudy}
                                    alt="bechef"
                                    width={608}
                                    height={638}
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
                        <div className="accordion laptop:pt-24 pt-12 text-black" id="shoppable-accordion">
                            <div className="rounded-t-3xl border border-warm-gray-350 bg-warm-black-300 tablet:px-10 px-5 tablet:py-8 py-4">
                                <h3 className="accordion-header mb-0 flex items-center" id="headingOne">
                                    <button className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl" type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne"
                                    >
                                        Can shoppable video improve conversions on my website?
                                    </button>
                                </h3>
                                <div
                                    id="collapseOne"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#shoppable-accordion"
                                >
                                    <div className="py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100 laptop:text-base">
                                            Yes, absolutely! With our Shoppable Videos, you can create short, TikTok style videos that can be used as a
                                            carousel on your homepage to improve time spent and guide customers towards purchase, or you can use videos to
                                            enhance product pages and stand out in a sea of static images.
                                        </p>

                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100 laptop:text-base pt-4">
                                            Think of it as a seamless and simple way to transform your own ecommerce website into a live shopping platform that customers can’t get enough of.
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
                                        How can I build my own first-party data through shoppable videos?
                                    </button>
                                </h3>
                                <div
                                    id="collapseTwo"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#shoppable-accordion"
                                >
                                    <div className="py-2 text-left">
                                        <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100 laptop:text-base pt-4">
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
                                    data-bs-parent="#shoppable-accordion"
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

                            <div className="border rounded-b-3xl border-warm-gray-350 bg-warm-black-300 tablet:px-10 px-5 tablet:py-8 py-4">
                                <h3 className="accordion-header mb-0" id="headingFive">
                                    <button
                                        className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        Is there any way to track how my live events are performing?
                                    </button>
                                </h3>
                                <div
                                    id="collapseFive"
                                    className="collapse accordion-collapse"
                                    aria-labelledby="headingFive"
                                    data-bs-parent="#shoppable-accordion"
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
