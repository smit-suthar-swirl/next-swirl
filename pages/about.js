import Head from "next/head";
import Button from "../components/Button";
import Image from "next/image";
import Forbes from "../public/assets/images/icons/forbes.svg";
import Bustle from "../public/assets/images/icons/bustle.svg";
import Businessinsider from "../public/assets/images/icons/business-insider.svg";
import Adweek from "../public/assets/images/icons/adweek.svg";
import Yourstory from "../public/assets/images/icons/yourstory.svg";
import Enterpreneur from "../public/assets/images/icons/enterpreneur.svg";
import CallToAction from "../components/CallToAction";
import Link from "next/link";

export default function about() {
  return (
    <>
      <Head>
        <title>About Swirl | Live Video Commerce App</title>
      </Head>
      {/* ABOUT US */}
      <section className="px-16 pb-5 pt-24 tablet:pb-20 laptop:px-32 tablet:pt-28 laptop:pb-24 desktop:px-60 desktop:pt-20 desktop:pb-24">
        <div className="laptop:container container-fluid mx-auto">

          <p className="laptop:text-2xl tablet:text-xl text-base font-normal text-center">About us</p>
          <h1 className="pt-3 font-bold laptop:text-5xl tablet:text-3xl text-center">
            We are on a mission to make e-commerce less boring and more human by
            bringing the real-life shopping experience online.
          </h1>
          <p className="pt-14 laptop:text-lg text-sm font-normal tablet:text-base text-center">
            Swirl is the premier live shopping tablet SaaS to engage, convert
            and retain more customers. It uses video as a backbone to power
            real-time virtual shopping – helping brands build authentic customer
            engagements by bridging the online-offline gap.
          </p>
          <p className="pt-6 laptop:text-lg text-sm font-normal laptop:pt-10 tablet:text-base text-center">
            Our product improves the probability of sales conversions by
            turbocharging the pre-purchase journey of both new and existing
            customers using cloud-based interactive video commerce and live
            shopping software.
          </p>
          <p className="pt-6 laptop:text-lg text-sm font-normal laptop:pt-10 tablet:text-base text-center">
            We are trusted by over 100+ formidable brands from Retail,
            Lifestyle, Fashion, Beauty, F&B, and many more. We are headquartered
            in the charming and bustling city of Vadodara.
          </p>
          <div className="flex gap-x-4 tablet:pt-14 pt-5 justify-center">
            <Link href="/careers">
              <Button text="View Careers" btn_variant="blackandwhite_btn" />
            </Link>
            <Link href="/contact">
              <Button text="Contact us" btn_variant="contactUs_btn" />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-warm-gray-400 px-7 py-7 laptop:py-14 laptop:px-14 tablet:px-7 desktop:px-28 desktop:py-28">
        <div className="laptop:container container-fluid mx-auto">
          <div className="grid-cols-2 tablet:grid gap-10">
            <div className="desktop:py-11">
              <Image
                src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/about-us-story.webp"
                alt="Our Story"
                width={500}
                height={600}
              />
            </div>
            <div className="grid grid-flow-row py-12">
              <p className="pb-2 laptop:text-xl text-base font-bold text-white-2">
                OUR STORY
              </p>
              <h3 className="font-bold text-white-2 laptop:text-5xl text-lg pt-2">
                The future is incomplete without its past.
              </h3>
              <p className="pt-6 laptop:text-base text-sm font-normal text-white-2 desktop:text-lg">
                We had our humble beginnings in 2016 when we first launched
                GetNatty – A Premium designer fashion marketplace and since then
                our business grew quickly to 10+ cities serving more than 300+
                brands nationwide. But 2020 had different plans for us, and we
                decided to temporarily pause, reflect and then use adversity as
                an opportunity to come back stronger by making a pivot from
                GetNatty to GoSwirl.
              </p>
              <p className="pt-6 laptop:text-base text-sm font-normal text-white-2 desktop:text-lg">
                Did you know that video is all set to become 82% of the internet
                traffic by 2022? with India already recording a 4.3X growth last
                year. Will the global rollout of 5G, live streaming will surely
                become a default in all industries from education, to media to
                retail and eCommerce. We have already seen this happening in
                china where live commerce is already at 200+ USD GMV with over
                524M+ online streamers and is growing at over 30% CAGR.
              </p>
              <p className="pt-6 laptop:text-base text-sm font-normal text-white-2 desktop:text-lg">
                With a deep understanding of the hyperlocal Indian market and
                understand the purchase journey of the end consumer as well as
                working very closely over the last 5 years with hundreds of
                SMB’s in retail and eCommerce, Our team can clearly see the
                digitization tailwinds in the industry post-covid, and with
                better data connectivity post 5G roll out in India, & more
                consumers switching to experiential ways to shop online led by
                content-community-social needs, it is just a matter of time that
                live commerce becomes the new normal in retail and goes down in
                the history books as the next logical evolution to traditional
                eCommerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="tablet:px-16 px-8 tablet:py-12 pt-6 laptop:px-32 laptop:py-24 desktop:px-80 desktop:py-24">
        <div className="laptop:container container-fluid mx-auto">
          <p className="desktop:text-2xl laptop:text-xl text-lg font-bold">Vision</p>
          <h3 className="pt-3 text-lg font-bold tablet:text-2xl laptop:text-5xl desktop:text-6xl pb-16">
            Our vision is to empower businesses globally with cost-efficient
            experiential technology for accelerating their sales growth and
            extending its benefits to the masses.
          </h3>
          <div className='w-full border border-solid border-warm-gray-500'></div>
          <div className="py-16 flex laptop:gap-x-48 gap-x-12">
            <div className="desktop:text-2xl laptop:text-xl text-lg font-bold">Mission</div>
            <div className="text-lg font-medium text-left desktop:pr-40">
              As customers evolve and competition increases, brands will vie with each other for the attention of buyers. Live commerce is one of the rare solutions that combines novelty, urgency, and seamless ease, and will become a must-have for brands.
            </div>
          </div>
          <div className="text-lg font-bold tablet:text-3xl laptop:text-5xl desktop:text-6xl">
            We aim to be amongst the top 3 options globally for brands to choose from when they think about live shopping.
          </div>
          <div className="grid grid-cols-3 gap-y-12 laptop:py-16 py-10 laptop:gap-x-12 desktop:py-32">
            <div className="text-center">
              <h4 className="font-bold text-lg tablet:text-5xl laptop:text-7xl">
                4x
              </h4>
              <p className="pt-3 font-normal text-sm tablet:text-lg laptop:text-xl">
                Add-to-Cart
              </p>
            </div>
            <div className="text-center border-x-2 border-warm-cream-50">
              <h4 className="font-bold text-lg tablet:text-5xl laptop:text-7xl">
                300%
              </h4>
              <p className="pt-3 font-normal text-sm tablet:text-lg laptop:text-xl">
                boost in CLTV
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg tablet:text-5xl laptop:text-7xl">
                2x
              </h4>
              <p className="pt-3 font-normal text-sm tablet:text-lg laptop:text-xl">
                Average Order Value
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="bg-warm-gray-100">
        <div className="laptop:container container-fluid mx-auto">
          <div className="pb-28 desktop:px-40">
            <div className="text-center">
              <p className="laptop:py-20 py-10 desktop:text-2xl laptop:text-xl text-lg font-normal">Featured In</p>
            </div>
            <div className="laptop:px-12 px-6 grid laptop:grid-cols-6 tablet:grid-cols-3 gap-10">
              <div className="px-2 laptop:py-8 py-4">
                <Forbes className="mx-auto" />
              </div>
              <div className="px-2 laptop:py-8 py-4">
                <Bustle className="mx-auto" />
              </div>
              <div className="px-2 laptop:py-8 py-4">
                <Yourstory className="mx-auto" />
              </div>
              <div className="px-2 laptop:py-8 py-4">
                <Businessinsider className="mx-auto" />
              </div>
              <div className="px-2 laptop:py-8 py-4">
                <Adweek className="mx-auto" />
              </div>
              <div className="px-2 laptop:py-8 py-4">
                <Enterpreneur className="mx-auto" />
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
        <CallToAction heading="Join our team" subheading="We're looking for curious, passionate, and result oriented teammates who want to make impact in the livestreaming ecosystem."
          btnText="Book a demo" btnLink="Book a demo" />
      </section>
    </>
  );
}
