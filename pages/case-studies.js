import Head from "next/head"
import Image from "next/legacy/image"
import Button from "../components/Button";
import Link from "next/link";
import CaseStudyCard from "../components/CaseStudyCard";
import CallToAction from "../components/CallToAction";
import ArrowRight from "../public/assets/images/icons/arrow-right.svg"


export default function casestudy(data) {
    return (
        <>
            {/* case-study-hero */}
            <Head>
                <title>Success Stories And Case Studies | Swirl</title>
            </Head>
            <section id='case-study-hero' className='desktop:px-28 desktop:py-20 laptop:px-14 tablet:px-7 px-5 laptop:py-10 py-16'>
                <div className='laptop:container container-fluid mx-auto'>
                    <div className="text-center pt-16">
                        <h1 className="desktop:text-5xl tablet:text-4xl text-xl font-bold desktop:pt-5 desktop:pb-2">Case Studies</h1>
                        <p className="desktop:text-2xl laptop-max:text-xl laptop:text-2xl tablet:text-base text-sm desktop:leading-8 laptop:leading-6 leading-5 font-medium laptop:pb-16 pb-8">
                            Explore our case studies to see what GoSwirl Live Shopping has done for partner brands.
                        </p>
                    </div>
                    <div className='bg-warm-gray-100 rounded-40 box-border'>
                        <div className='grid desktop:grid-cols-2 desktop:gap-x-11'>
                            <div className='grid grid-flow-rows items-center text-left desktop:px-14 laptop:px-7 px-4 desktop:py-12 laptop:py-6 py-3 laptop:!order-1 !order-2'>
                                {/* <h2 className='desktop:text-5xl laptop:text-3xl text-xl font-bold'>Kamppi Helsinki</h2> */}
                                {/* Kamppi Helsinki (logo) */}
                                <div className="text-left desktop:pt-0 py-4">
                                    {/* <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/Kamppilogo.webp' alt=' Kamppi Helsinki (logo) ' height="80" width="80" /> */}
                                    <Image
                                        src="/assets/images/vivocasestudylogo.png"
                                        alt="vivo logo image"
                                        width={80}
                                        height={30}
                                    />
                                </div>
                                <div className='desktop:pt-6 pt-3 desktop:pb-20 laptop:pb-10 pb-5'>
                                    <p className='font-normal desktop:leading-7 laptop:leading-5 leading-5 desktop:text-lg laptop:text-lg laptop-max:text-base tablet:text-base text-sm'>
                                        A global consumer electronics brand scores 17,583 conversions and 1500% higher ROI
                                    </p>
                                </div>
                                <div className='grid grid-flow-col auto-cols-auto laptop:gap-x-6 gap-x-2'>
                                    <div className='text-center'>
                                        <h4 className='desktop:text-3xl laptop:text-3xl laptop-max:text-2xl tablet:text-2xl text-lg font-medium desktop:leading-9 leading-6 text-center'>2mn</h4>
                                        <p className='font-normal desktop:text-lg laptop:text-sm text-xs pt-3 desktop:leading-7 laptop:leading-5 leading-5'>Total views</p>
                                    </div>
                                    <div className='h-full w-px bg-warm-gray-500'></div>
                                    <div className='text-center'>
                                        <h4 className='desktop:text-3xl laptop:text-3xl laptop-max:text-2xl tablet:text-2xl text-lg font-medium desktop:leading-9 leading-6'>15x</h4>
                                        <p className='font-normal desktop:text-lg laptop:text-sm text-xs pt-3 desktop:leading-7 laptop:leading-5 leading-5'>Return investment</p>
                                    </div>
                                    <div className='h-full w-px bg-warm-gray-500'></div>
                                    <div className='text-center'>
                                        <h4 className='desktop:text-3xl laptop:text-3xl laptop-max:text-2xl tablet:text-2xl text-lg font-medium desktop:leading-9 leading-6 text-center'>17,583</h4>
                                        <p className='font-normal desktop:text-lg laptop:text-lg laptop-max:text-base tablet:text-base text-sm pt-3 desktop:leading-7 laptop:leading-5 leading-5'>Sales conversions</p>
                                    </div>
                                </div>
                                <div className='laptop:text-start laptop:pt-18 tablet:pt-12 pt-5'>
                                    <Link href="/case-studies/vivo" className="desktop:pt-4 laptop:pt-3 pt-1 px-2 no-underline">
                                        {/* <Button text='Continue reading' btn_variant='btn_basic' arrow_icon /> */}
                                        <div className='flex gap-x-3'>
                                            <div id="arrow-right-case-study-comp" className="p-0.5"><ArrowRight />
                                            </div>
                                            <Button text="Read Full Story" btn_variant="basic_btn" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='laptop:!order-2 !order-1 desktop:text-right text-center'>
                                {/* <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/case-studies-thumbnail.webp' alt='Case study thumbnail' className="rounded-r-40" layout="fill" /> */}
                                <Image
                                    src="/assets/images/vivocasestudy.png"
                                    alt="vivo case study image"
                                    className="rounded-40"
                                    height={522}
                                    width={617}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* case-studies */}
            <section id="case-studies" className="desktop:px-28 laptop:px-14 tablet:px-7 px-5">
                <div className="laptop:container container-fluid mx-auto">
                    <div className="pt-36 pb-4">
                        <h3 className="text-5xl font-bold">Highlights</h3>
                        <div className="desktop:py-20 laptop:py-10 py-5 grid desktop:grid-cols-2 desktop:gap-x-16 gap-y-16">
                            <div>
                                <CaseStudyCard
                                    imageSrc={"https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/greenberry.webp"}
                                    imageAlt={"greenberry"}
                                    logoSrc={"https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/greenberrylogo.webp"}
                                    logoAlt={"greenberry"}
                                    desc="Greenberry Organics boosts customer engagement by 70% and executed a successful launch of its new collection by partnering with Swirl."
                                />
                            </div>
                            <div>
                                <CaseStudyCard
                                    imageSrc={"/assets/images/bagallery.png"}
                                    imageAlt={"bagallery"}
                                    logoSrc={"/assets/images/bagallerylogo.png"}
                                    logoAlt={"bagallery"}
                                    desc="BPC marketplace BaGallery 10X'd its impact with a successful phygital live commerce campaign."
                                />
                            </div>
                        </div>
                        <div className="desktop:py-20 laptop:py-10 py-5 grid desktop:grid-cols-2 desktop:gap-x-16 gap-y-16">
                            <div>
                                <CaseStudyCard
                                    imageSrc={"/assets/images/traya.png"}
                                    imageAlt={"traya"}
                                    logoSrc={"/assets/images/trayalogo.png"}
                                    logoAlt={"traya"}
                                    desc="Traya Health, a scientific hair health brand sees a 6X increase in orders per day"
                                />
                            </div>
                            <div>
                                <CaseStudyCard
                                    imageSrc={"/assets/images/vivocasestudy.png"}
                                    imageAlt={"vivo"}
                                    logoSrc={"/assets/images/vivocasestudylogo.png"}
                                    logoAlt={"vivo"}
                                    desc="VIVO, a global consumer electronics brand scores 17,583 conversions and 1500% higher ROI"
                                />
                            </div>
                        </div>
                        <div className="desktop:py-20 laptop:py-10 py-5 grid desktop:grid-cols-2 desktop:gap-x-16 gap-y-16">
                            <div>
                                <CaseStudyCard
                                    imageSrc={"/assets/images/mulmul.png"}
                                    imageAlt={"mulmul"}
                                    logoSrc={"/assets/images/mulmullogo.png"}
                                    logoAlt={"mulmul"}
                                    desc="Designer fashion boutique Mulmul gained 7.4% more conversions by integrating shoppable video carousels on its website. "
                                />
                            </div>
                            <div>
                                <CaseStudyCard
                                    imageSrc={"/assets/images/caseStudy-Hero.png"}
                                    imageAlt={"kamppi"}
                                    logoSrc={"/assets/images/kamppilogo.png"}
                                    logoAlt={"kamppi"}
                                    desc="Finland' s premier mall, Kamppi Helsinki 10X'd its impact with a truly phygital video selling experience."
                                />
                            </div>
                        </div>
                        <div className="desktop:py-20 laptop:py-10 py-5 grid desktop:grid-cols-2 desktop:gap-x-16 gap-y-16">
                            <div>
                                <CaseStudyCard
                                    imageSrc={"https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/bechef.webp"}
                                    imageAlt={"bechef"}
                                    logoSrc={"https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/becheflogo.webp"}
                                    logoAlt={"bechef"}
                                    desc="Food brand BeChef collaborated with SWIRL to showcase their range of chef-curated cooking sauces and ingredients through video eCommerce and saw a dramatic difference across the board."
                                />
                            </div>

                            <div>
                                <CaseStudyCard
                                    imageSrc={"/assets/images/zariin.png"}
                                    imageAlt={"zariin"}
                                    logoSrc={"/assets/images/zariinlogo.png"}
                                    logoAlt={"zariin"}
                                    desc="A D2C jewellery brand 3Xs average order value and increases customer engagement by 117% with live commerce."
                                />
                            </div>
                        </div>
                        <div className="desktop:py-20 laptop:py-10 py-5 grid desktop:grid-cols-2 desktop:gap-x-16 gap-y-16">
                            <div>
                                <CaseStudyCard
                                    imageSrc={"https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/pnrao.webp"}
                                    imageAlt={"pnrao"}
                                    logoSrc={"https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/pnraologo.webp"}
                                    logoAlt={"pnrao"}
                                    desc="A luxury menswear brand in Bangalore collaborated with SWIRL during the COVID-19 lockdown to offer private shopping consultations via One-to-One personal virtual shopping experiences."
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action  */}
            <section
                id="call-to-action"
                className="px-10 py-5 laptop:py-11 laptop:px-28 bg-warm-black-50"
            >
                <CallToAction heading="15 minutes can transform your brand" subheading="Find out all you want to know about live shopping."
                    btnText="Book a demo" btnLink="Book a demo" />
            </section>
        </>
    )

}