import Head from "next/head";
import Image from "next/legacy/image";
import CallToAction from "../components/CallToAction";

const zariinCaseStudy = () => {
    return (
        <>
            <Head>
                <title>Zariin Case study</title>
            </Head>
            {/* Content Sec */}
            <section className="desktop:px-56 laptop:px-280 px-10 desktop:py-20 laptop:py-10 py-5">
                <div className="laptop:container container-fluid mx-auto">
                    <div>
                        <p className="desktop:text-2xl laptop:text-xl text-lg font-normal desktop:leading-7 laptop:leading-5 leading-5 text-center">ZARIIN CASE STUDY</p>
                        <h1 className="desktop:text-5xl laptop:text-3xl tablet:text-xl text-lg font-bold laptop:pt-6 pt-3 laptop:pb-8 pb-4 laptop:px-16 px-8">Zariin triples average order value and increases customer engagement by 117% with GoSwirl Live Video Shopping.</h1>
                        <p className="desktop:pb-24 laptop:pb-12 pb-6 desktop:text-xl laptop:text-lg text-base font-normal desktop:leading-7 laptop:leading-5 leading-5 laptop:px-16 px-8">Zariin is a DTC luxury jewellery brand that retails in over 21 countries and 200 stores worldwide, including in premier boutiques like Anthropologie and Calypso St. Barth in the United States, and Hankyu department stores in Japan.</p>
                        <div className="grid laptop:grid-cols-2 laptop:gap-x-20 gap-x-10">
                            <div className="overflow-hidden aspect-w-10 aspect-h-16 rounded-32">
                                <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/zariin.webp' alt='Zariin Case study Hero Img' objectFit="cover"
                                    layout="fill" />
                            </div>
                            <div className="grid grid-flow-rows auto-rows-max laptop:pt-0 pt-8">
                                <div className="text-left p-0">
                                    <Image src='https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/zariinlogo.webp' alt='Zariin logo' objectFit="cover" height="80" width="80" />
                                </div>
                                <div className="laptop:py-8 py-4">
                                    <p className="font-normal desktop:text-xl laptop:text-lg text-base desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-130">Designed for the modern woman in daily life, Zariin creates designs that are versatile, striking, and easy to wear. It offers lifetime free repairs to encourage sustainable consumption, occasion-neutral editions as well as custom jewellery for special events. Despite these thoughtful services, Zariin saw high numbers of one-time shoppers but not enough return customers.</p>
                                </div>
                                <div className="border-t-2 border-t-warm-cream-50  text-left pt-8">
                                    <p className="font-normal desktop:text-3xl laptop:text-xl text-lg desktop:leading-9 laptop:leading-7 leading-7 text-warm-gray-130">As a digital-only brand, creating a lasting bond with customers is harder. In the online space, customers are overwhelmed by distractions and new brands vying for attention and may never return after the first purchase.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-flow-cols auto-rows-auto pt-24 laptop:auto-cols-auto laptop:grid-flow-col laptop:gap-x-4 gap-y-8">
                            <div className="pl-6 text-center">
                                <h4 className="text-2xl font-bold laptop:text-4xl desktop:text-6xl">
                                    32%
                                </h4>
                                <p className="pt-3 text-base font-normal laptop:text-xl desktop:leading-7 laptop:leading-5 leading-5">
                                    Sales conversion
                                </p>
                            </div>
                            <div className="border-t-2 border-t-neutral-100  pl-6 pt-4  laptop:border-l-2 laptop:border-t-0 laptop:border-l-neutral-100 laptop:pt-0 text-center">
                                <h4 className="text-2xl font-bold laptop:text-4xl desktop:text-6xl">
                                    117%
                                </h4>
                                <p className="pt-3 text-base font-normal laptop:text-xl desktop:leading-7 laptop:leading-5 leading-5">
                                    Increase customer engagement
                                </p>
                            </div>
                            <div className="border-t-2 border-t-neutral-100  pl-6 pt-4  laptop:border-l-2 laptop:border-t-0 laptop:border-l-neutral-100 laptop:pt-0 text-center">
                                <h4 className="text-2xl font-bold laptop:text-4xl desktop:text-6xl">
                                    3x
                                </h4>
                                <p className="pt-3 text-base font-normal laptop:text-xl desktop:leading-7 laptop:leading-5 leading-5">
                                    Improve average order value
                                </p>
                            </div>
                            <div className="border-t-2 border-t-neutral-100  pl-6 pt-4  laptop:border-l-2 laptop:border-t-0 laptop:border-l-neutral-100 laptop:pt-0 text-center">
                                <h4 className="text-2xl font-bold laptop:text-4xl desktop:text-6xl">
                                    50%
                                </h4>
                                <p className="pt-3 text-base font-normal laptop:text-xl desktop:leading-7 laptop:leading-5 leading-5">
                                    Reduction in returns
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Result */}
            <section className="desktop:px-56 laptop:px-28 px-14 desktop:pb-80 laptop:pb-40 pb-20 laptop:pt-0 pt-12">
                <div className="laptop:container container-fluid mx-auto">
                    <div className="bg-warm-gray-100 laptop:p-20 p-10 rounded-32">
                        <h3 className="desktop:text-3xl laptop:text-2xl text-lg desktop:leading-9 laptop:leading-7 leading-6 font-bold">Result</h3>
                        <p className="laptop:text-lg text-base desktop:leading-7 laptop:leading-5 leading-5 font-bold text-warm-gray-130 laptop:pt-6 pt-3">Working with Swirl Live Shopping, Zariin created unique video content that provided an immersive, memorable experience. With the extensive data analysis made possible by Swirl, it was able to retarget one-time shoppers and significantly improve its sales conversion rate by 32%,
                            increase customer engagement by 117%, improve average order value by 3X and saw a 50% reduction in returns rate</p>
                    </div>
                </div>
            </section>

            {/* Call to Action  */}
            <section
                id="call-to-action"
                className="px-7 pt-5 desktop:px-28 laptop:pt-11 laptop:px-14 bg-black"
            >
                <CallToAction heading="Increase your sales significantly." subheading="Find out all you want to know about live shopping." btnText="Book a demo" btnLink="Book a demo" />
            </section>
        </>
    )
}
export default zariinCaseStudy;