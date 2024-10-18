import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Button from "../components/Button";
import FeaturedCard from "../components/FeaturedCard";
import TestimonialsCard from "../components/TestimonialsCard";
import Link from "next/link";
import CallToAction from "../components/CallToAction";
import ArrowRight from "../public/assets/images/icons/arrow-right.svg";
import LiveShopping from "../public/assets/images/livestream-shopping.png";
import ShoppableVideo from "../public/assets/images/shoppable-videos.png";
import OneToOne from "../public/assets/images/one-to-one-shopping.png";
import PlayButton from "../public/assets/images/Play_Button.png";
import EaseOfImplementation from "../public/assets/images/ease_of_implementation.png";
import GlobalClassSupport from "../public/assets/images/global_class_support.png";
import SocialProof from "../components/SocialProof";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unleash the Power of Live video ecommerce | Swirl</title>
      </Head>
      {/* banner */}
      <section
        id="banner" className="bg-warm-black px-5 pt-5 tablet:px-10 laptop:px-16 desktop:px-28 desktop:pt-10">
        <Banner />
      </section>

      {/* social-proof section */}
      <section id="social-proof-section" className="bg-warm-black px-5 pt-3 pb-12 tablet:px-7 tablet:pt-6 laptop:px-14 laptop:pt-12 desktop:px-28 desktop:pt-0">
        <div className="laptop:container container-fluid mx-auto ">
          <SocialProof />
        </div>
      </section>

      {/* planning */}
      <section id="planning" className="bg-warm-cream px-5 py-10 laptop:px-16 desktop:px-28 laptop:py-20">
        <div className="laptop:container container-fluid mx-auto">
          <div className="text-center desktop:px-52">
            <h2 className="font-bold text-xl tablet:text-3xl laptop:text-5xl">
              See how our live commerce suite<br /> powers every stage of the funnel.
            </h2>
          </div>
          <div className="px-22 pt-4 text-center tablet:px-16 laptop:px-36 desktop:px-72">
            <p className="text-sm font-medium tablet:text-xl laptop:text-2xl">
              An easy plug-and-play solution that brings the magic of human
              interaction to your eCommerce site.
            </p>
          </div>
          <div className="pt-8 laptop:pt-16">
            <div className="grid items-center gap-y-4 tablet:grid-cols-3 tablet:gap-x-4 desktop:gap-x-8">
              <FeaturedCard
                bg_color="black"
                title="Engage"
                content="Boost discovery and hold attention while building deeper connections with customers."
                icon={
                  <i className="ri-question-answer-line text-2xl text-white laptop:text-3xl desktop:text-4xl"></i>
                }
              />

              <FeaturedCard
                bg_color="black"
                title="Inspire"
                content="Showcase products and create immersive experiences that spur viewers into taking action."
                icon={
                  <i className="ri-lightbulb-flash-line text-2xl text-white laptop:text-3xl desktop:text-4xl"></i>
                }
              />

              <FeaturedCard
                bg_color="black"
                title="Convert"
                content="Turn viewers into buyers with seamless Add-to-Cart and checkout features."
                icon={
                  <i className="ri-filter-line text-2xl text-white laptop:text-3xl desktop:text-4xl"></i>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* LiveShopping div */}
      <section id="one-to-many" className="bg-warm-cream-200 px-5 py-10 tablet:px-10 laptop:px-16 desktop:px-28 desktop:py-20">
        <div className="laptop:container container-fluid mx-auto rounded-40 bg-white">
          <div className="grid gap-x-5 p-8 tablet:grid-cols-2 items-center">
            <div className="mx-auto">
              <Image
                src={LiveShopping}
                alt="One to many"
                width={450}
                height={500}
                className="block"
              />
            </div>
            <div className="mx-auto">
              <div className="pb-3 laptop:pb-6">
                <h2 className="text-2xl font-bold tablet:text-3xl laptop:text-4xl desktop:text-6xl">
                  Livestream Shopping
                </h2>
                <p className="pt-4 text-base font-normal text-gray-900 laptop:text-2xl">
                  One host, thousands of viewers, and the most hypnotic way to create awareness and intent.
                </p>
              </div>
              <ul className="list-outside list-disc pl-4 text-sm font-normal text-gray-900 laptop:text-base desktop:text-lg">
                <li>Build authentic connection</li>
                <li>Offer IRL experiences</li>
                <li>Enable informed purchases</li>
              </ul>
              <div className="mt-8 grid auto-cols-max grid-flow-col gap-10 items-center">
                <Link href="/book-a-demo">
                  <Button text="Book a demo" btn_variant="primary_btn" />
                </Link>
                <Link href="/products/livestream-shopping" className="no-underline">
                  <div className="flex gap-x-3">
                    <div className="arrow-right">
                      <ArrowRight />
                    </div>
                    <Button id="read-more" className="arrow-right" text="Read More" btn_variant="readMore_btn" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* shoppable-videos div */}
      <section id="shoppable-videos" className="bg-warm-cream-200 px-5 py-10 tablet:px-10 laptop:px-16 desktop:px-28 desktop:py-20">
        <div className="laptop:container container-fluid mx-auto rounded-40 bg-white">
          <div className="grid gap-x-5 px-8 py-16 tablet:grid-cols-2 items-center">
            <div className="desktop:order-1 order-2 laptop:pt-0 laptop:pl-20 pt-10 mx-auto">
              <div className="pb-3 laptop:pb-6">
                <h2 className="text-2xl font-bold tablet:text-3xl laptop:text-4xl desktop:text-6xl">Shoppable Videos</h2>
                <p className="pt-4 text-lg font-normal text-gray-900 laptop:text-2xl">Snackable, short-form video content to fuel consideration and intent.</p>
              </div>
              <ul className="list-outside list-disc pl-4 text-sm font-normal text-gray-900 laptop:text-base desktop:text-lg">
                <li>Instantly convert Instagram Reels and TikTok videos to shoppable assets.</li>
                <li>Increase attention span with a watch and buy experience</li>
                <li>Inspire trust and confidence</li>
              </ul>
              <div className="mt-8 grid auto-cols-max grid-flow-col gap-10 items-center">
                <Link href="/book-a-demo"><Button text="Start Free Trial" btn_variant="primary_btn" /></Link>
                <Link href="/products/shoppable-video" className="no-underline">
                  <div className="flex gap-x-3">
                    <div className="arrow-right p-0.5">
                      <ArrowRight />
                    </div>
                    <Button text="Read More" className="arrow-right" btn_variant="readMore_btn" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="desktop:order-2 order-1 mx-auto">
              <Image
                src={ShoppableVideo}
                alt="Shoppable Video"
                width={507}
                height={606}
              />
            </div>
          </div>
        </div>
      </section>

      {/* one-to-one */}
      <section id="one-to-one" className="bg-warm-cream-200 px-5 py-10 tablet:px-10 laptop:px-16 desktop:px-28 desktop:py-20">
        <div className="laptop:container container-fluid mx-auto rounded-40 bg-white">
          <div className="grid gap-x-5 p-8 tablet:grid-cols-2 items-center">
            <div className="mx-auto">
              <Image
                src={OneToOne}
                alt="One to one"
                width={1716}
                height={2131}
                className="block"
              />
            </div>
            <div className="mx-auto">
              <div className="pb-3">
                <h2 className="text-2xl font-bold tablet:text-3xl laptop:text-4xl desktop:text-6xl">
                  One-to-One Personal Shopping
                </h2>
                <p className="pt-4 text-lg font-normal text-gray-900 laptop:text-2xl">
                  Offer a customized video shopping experience to help buyers move from evaluation to purchase.
                </p>
              </div>
              <ul className="list-outside list-disc pl-4 text-sm font-normal text-gray-900 laptop:text-base desktop:text-lg">
                <li>Build a phygital, consultative strategy</li>
                <li>High touch experience for high-value customers</li>
                <li>Guided shopping journeys</li>
              </ul>
              <div className="mt-8 grid auto-cols-max grid-flow-col gap-10 items-center">

                <Link href="/book-a-demo">
                  <Button text="Book a demo" btn_variant="primary_btn" />
                </Link>
                <Link href="/products/product-one-to-one" className="no-underline">
                  <div className="flex gap-x-3">
                    <div className="arrow-right p-0.5">
                      <ArrowRight />
                    </div>
                    <Button
                      text="Read More"
                      className="arrow-right"
                      btn_variant="readMore_btn"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* metrics-section */}
      <section id="metrics-section" className="bg-warm-yellow px-5 tablet:px-10 laptop:px-16 desktop:px-28">
        <div className="laptop:container container-fluid mx-auto">
          <div className="py-14 px-7 laptop:px-14 laptop:py-28 desktop:px-28">
            <div className="text-center">
              <h4 className="mx-auto font-bold text-warm-black text-3xl laptop:text-6xl desktop:text-8xl">
                The power of live commerce
              </h4>
              <p className="pt-3 text-lg font-normal text-warm-black laptop:text-2xl">
                A complete product suite to help you achieve more
              </p>
            </div>
            <div className="grid grid-flow-row gap-x-8 text-center laptop:grid-cols-3 laptop:mt-16">
              <div className="pt-4 text-center text-warm-black laptop:pt-0">
                <h4 className="font-bold text-2xl laptop:text-4xl desktop:text-6xl">
                  4x
                </h4>
                <p className="text-base font-normal laptop:text-basedesktop:text-lg">
                  Increase in conversions
                </p>
              </div>
              <div className="pt-4 text-center text-warm-black laptop:pt-0">
                <h4 className="font-bold text-2xl laptop:text-4xl desktop:text-6xl">
                  50%
                </h4>
                <p className="text-base font-normal laptop:text-base desktop:text-lg">
                  Lower customer acquisition cost
                </p>
              </div>
              <div className="pt-4 text-center text-warm-black laptop:pt-0">
                <h4 className="font-bold text-2xl laptop:text-4xl desktop:text-6xl">
                  11x
                </h4>
                <p className="text-base font-normal laptop:text-basedesktop:text-lg ">
                  Increase in ROI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* show-reels */}

      {/* swirl - apart */}
      <section id="swirl-apart" className="bg-warm-cream px-5 py-10 laptop:px-16 desktop:px-28 laptop:py-20">
        <div className="laptop:container container-fluid mx-auto">
          <div className="grid grid-flow-row auto-rows-max">
            <div className="pb-6 text-center laptop:pb-24 desktop:px-52 desktop:pt-4">
              <h2 className="font-bold text-3xl tablet:text-4xl laptop:text-6xl">
                What differentiates Swirl?
              </h2>
              <p className="w-full pt-3 text-base font-normal tablet:text-lg laptop:text-2xl tablet:pt-6">
                Unique features and benefits to help you level up in the new world of live commerce
              </p>
            </div>
            <div className="grid grid-flow-row auto-rows-max gap-y-12 text-white tablet:gap-y-14 desktop:gap-y-28">
              <div className="grid grid-flow-row tablet:grid-cols-2 gap-y-5 rounded-40 bg-warm-gray-400 p-10">
                <div className="grid grid-flow-row grid-auto-rows">
                  <div>
                    <h4 className="text-2xl font-bold tablet:text-3xl laptop:text-4xl desktop:text-5xl">
                      Ease of<br />implementation
                    </h4>
                    <ul className="list-outside list-disc py-3 pl-3 laptop:py-10 text-sm laptop:text-lg tablet:space-y-2 laptop:space-y-3 desktop:space-y-5">
                      <li>Use our no code/low code integration to get started</li>
                      <li>Create your microsite and go live in minutes</li>
                      <li>No more waiting for tech team approvals</li>
                    </ul>
                  </div>
                  <Link href="/book-a-demo" className="flex items-center gap-x-4 no-underline">
                    <Image src={PlayButton} alt="PlayButton" width={48} height={48} />
                    <span className="text-white no-underline">Watch a demo</span>
                  </Link>
                </div>
                <Image src={EaseOfImplementation} alt="Ease of implementation" width={608} height={430} />
              </div>

              <div className="grid grid-flow-row tablet:grid-cols-2 tablet:gap-x-10 gap-y-5 text-black p-10">
                <Image
                  src={GlobalClassSupport}
                  alt="Best in global class customer support"
                  width={608}
                  height={504}
                />

                <div>
                  <h4 className="text-2xl font-bold tablet:text-3xl laptop:text-4xl desktop:text-5xl">
                    Best in global class customer support
                  </h4>
                  <ul className="list-outside list-disc py-3 pl-3 text-sm laptop:text-lg tablet:space-y-2 laptop:space-y-3 desktop:space-y-5">
                    <li>Onboarding handholding and integration assistance</li>
                    <li>Tech team standby during live events</li>
                    <li>Post-event reporting</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-flow-row tablet:grid-cols-2 gap-y-5 rounded-40 bg-warm-gray-400 p-10 items-center">
                <div>
                  <h4 className="text-2xl font-bold tablet:text-3xl laptop:text-4xl desktop:text-5xl">
                    Industry-specific customizations and <br />workflows
                  </h4>
                  <ul className="list-outside list-disc pt-3 pl-3 laptop:space-y-5 text-sm tablet:text-base laptop:py-10 laptop:text-lg">
                    <li>Select conversion goals Leads, engagement, or purchase</li>
                    <li>Choose your CTA Enquire now, Chat now, or Buy now</li>
                    <li>Create a personalized customer journey</li>
                  </ul>
                </div>
                <Image src="/assets/images/industry-specific.png"
                  alt="Industry-specific customizations and workflows"
                  width={609}
                  height={466}
                  className="rounded-r-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials" className="bg-warm-black px-5 py-10 laptop:px-16 desktop:px-52 laptop:py-28">
        <div className="laptop:container container-fluid mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white laptop:text-5xl">
              Partner Testimonials
            </h3>
          </div>
          <div className="pt-14">
            <TestimonialsCard />
          </div>
        </div>
      </section>
      <section id="blogs" className="px-5 py-10 laptop:px-16 desktop:px-52 laptop:py-28"></section>
      {/* CTA */}
      <section id="call-to-action" className="desktop:px-28 laptop:py-24 laptop:px-14 px-5 py-10 bg-warm-black-50">
        <CallToAction
          heading="15 minutes can transform your brand"
          subheading="Find out all you want to know about live shopping."
          btnText="Book a demo"
          btnLink="Book a demo"
        />
      </section>
    </>
  );
}
