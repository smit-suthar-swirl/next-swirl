import Head from "next/head";
import Button from "../components/Button";
import SocialProof from "../components/SocialProof";
import { useState } from "react";
import Card2 from "../components/Card2";
import Form from "../components/Form";
import CallToAction from "../components/CallToAction";

export default function BookADemo() {
  const [Active, setIsActive] = useState("FirstDiv");

  const handleClickScroll = () => {
    const element = document.getElementById('banner-section-book-a-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Get Started</title>
      </Head>
      {/* Hero Header Section/ */}
      <section
        id="banner-section-book-a-demo"
        className="bg-warm-gray-100 desktop:px-28 desktop:py-24 laptop:px-14 tablet:px-7 px-5 laptop:py-16 py-16"
      >
        <div className="laptop:container container-fluid mx-auto">
          <div className="desktop:grid grid-cols-2 grid-flow-rows gap-x-36 pt-16">
            <div className="grid-flow-rows desktop:pb-0 pb-8">
              <h1 className="desktop:text-5xl tablet:text-4xl text-xl font-bold text-warm-black-200 pt-5 pb-2">
                Get started with live commerce
              </h1>
              <p className="pt-6 desktop:text-2xl laptop:text-2xl laptop-max:text-xl text-base font-normal desktop:leading-8 laptop:leading-6 leading-5 text-black">
                Executing your live commerce strategy is easy with Swirl. What do you get when you sign up with us? The most compelling way to grab attention and increase sales              </p>
              <div className="list-outside pt-6 font-normal desktop:leading-7 laptop:leading-5 leading-5 desktop:text-lg laptop-max:text-base laptop:text-lg text-sm pl-0">
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
              <div className="pt-12">
                <div className="rounded-32 border px-8 py-8">
                  <i className="ri-double-quotes-l laptop:text-5xl text-3xl"></i>
                  <p className="pt-12 laptop:text-xl text-base font-normal desktop:leading-7 laptop:leading-5 leading-5">
                    We partnered with L&#39;Oréal where O+O was integrated with OOH, to telecast our live show on a billboard. This could not have been possible without SWIRL® and their entire team for seamless LIVE integration between all platforms. ”
                  </p>
                  <div className="pt-12">
                    <p className="laptop:text-xl text-base font-normal">Maira Rehan Khan</p>
                    <p className="laptop:text-lg text-sm font-medium text-warm-gray-700">Live Streaming and Campaign Manager BaGallery, Pakistan </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-32 border bg-white desktop:px-14 laptop:px-7 px-5 desktop:pt-12 laptop:pt-6 pt-4 desktop:pb-44 laptop:pb-20 pb-10 laptop:mt-0 mt-12">
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* Metric Section */}
      <section
        id="Metric Section"
        className="desktop:py-24 desktop:px-28 laptop:px-14 tablet:px-7 px-5 laptop:py-12 tablet:py-6 py-4 bg-warm-brown-500"
      >
        <div className="laptop:container container-fluid mx-auto">
          <div className="grid-flow-rows grid items-center text-left">
            <div className="desktop:px-52 laptop:px-24 tablet:px-12 px-7 desktop:pt-20 laptop:pt-10 tablet:pt-5 pt-5">
              <h2 className="text-center desktop:text-5xl laptop:text-5xl laptop-max:text-3xl tablet:text-2xl text-xl font-bold text-white">
                Our clients love their live shopping transformation!
              </h2>
            </div>
            <div className="grid grid-flow-cols auto-cols-auto gap-y-12 laptop:pt-8 pt-4 laptop:pb-12 pb-6 laptop:auto-cols-auto laptop:grid-flow-col laptop:gap-x-4 desktop:pb-24 desktop:pt-16">
              <div className="pl-8 text-center">
                <h4 className="text-2xl font-bold text-white laptop:text-4xl desktop:text-7xl">
                  6x
                </h4>
                <p className="pt-3 text-base font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-white laptop:text-lg desktop:text-xl">
                  More orders per day
                </p>
              </div>
              <div className="border-t-2 border-t-warm-cream-50 pl-4 pt-4 text-center laptop:border-l-2 laptop:border-t-0 laptop:border-l-warm-cream-50 laptop:pt-0">
                <h4 className="text-2xl font-bold text-white laptop:text-4xl desktop:text-7xl">
                  14%
                </h4>
                <p className="pt-3 text-base font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-white laptop:text-lg desktop:text-xl">
                  Conversion rate
                </p>
              </div>
              <div className="border-t-2 border-t-warm-cream-50 pl-4  pt-4 text-center  laptop:border-l-2 laptop:border-t-0 laptop:border-l-warm-cream-50 laptop:pt-0">
                <h4 className="text-2xl font-bold text-white laptop:text-4xl desktop:text-7xl">
                  11x
                </h4>
                <p className="pt-3 text-base font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-white laptop:text-lg desktop:text-xl">
                  Higher engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Suite */}
      <section id="product-suite" className="desktop:px-28 desktop:py-24 laptop:px-14 tablet:px-7 px-5 laptop:py-12 tablet:py-6 py-4">
        <div className="laptop:container container-fluid mx-auto">
          <div>
            <div className="grid desktop:py-12 py-6 laptop:grid-cols-2 gap-x-12">
              <div className="grid-flow-rows grid desktop:!order-1 !order-2 items-center text-left">
                <div className="">
                  {Active === "FirstDiv" && <Card2 toggle="One to Many" />}
                  {Active === "SecondDiv" && <Card2 toggle="Shoppable Video" />}
                  {Active === "ThirdDiv" && <Card2 toggle="One to One" />}
                </div>
              </div>
              <div className="laptop:pt-0 pt-8 desktop:!order-2 !order-1">
                <p className="laptop:text-sm text-xs font-medium">Product Suite</p>
                <div className="pt-3 desktop:pb-8">
                  <h3 className="desktop:text-5xl laptop:text-3xl tablet:text-2xl text-xl font-bold text-warm-black-200">Try our solutions</h3>
                </div>
                {/* accordion */}
                <div className="accordion text-black" id="book-a-demo-accordion">
                  <div
                    className="border-t-4 border-b-2 border-t-warm-gray-700 border-b-warm-gray-450
                    py-8"
                    onClick={() => setIsActive("FirstDiv")}
                  >
                    <h3
                      className="accordion-header mb-0 flex items-center"
                      id="prodheadingOne"
                    >
                      <button
                        className="bad-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-black laptop:text-xl font-bold desktop:text-2xl"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#prodcollapseOne"
                        aria-expanded="false"
                        aria-controls="prodcollapseOne"
                      >
                        One-to-Many Livestreaming
                      </button>
                    </h3>
                    <div
                      id="prodcollapseOne"
                      className="collapse accordion-collapse"
                      aria-labelledby="prodheadingOne"
                      data-bs-parent="#book-a-demo-accordion"
                    >
                      <div className="accordion-body py-2 text-left">
                        <p className="desktop:pr-40 text-sm font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-black laptop:text-lg desktop:text-xl">
                          One host, millions of viewers, and the most hypnotic way to create awareness. Our livestream product enables you to create immersive video shopping to increase engagement, build brand recall, and sell to more customers during a video-selling event. With our advanced features, it’s easy to create ‘shoppertainment’ that customers can’t get enough of!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="border-b-2 border-b-warm-gray-450 py-8"
                    onClick={() => setIsActive("SecondDiv")}
                  >
                    <h3 className="accordion-header mb-0" id="prodheadingTwo">
                      <button
                        className="bad-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-black laptop:text-xl font-bold desktop:text-2xl"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#prodcollapseTwo"
                        aria-expanded="false"
                        aria-controls="prodcollapseTwo"
                      >
                        <p className="pr-40">Shoppable Video</p>
                      </button>
                    </h3>
                    <div
                      id="prodcollapseTwo"
                      className="collapse accordion-collapse"
                      aria-labelledby="prodheadingTwo"
                      data-bs-parent="#book-a-demo-accordion"
                    >
                      <div className="accordion-body py-2 text-left">
                        <p className="desktop:pr-40 text-sm font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-black laptop:text-lg desktop:text-xl">
                          Snackable, short-form video content to fuel consideration and intent. Easily convert social media videos into content that converts customers. Add catchy carousels to your home page or enhance product pages with TikTok-style videos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="border-b-2 border-b-warm-gray-450 py-8"
                    onClick={() => setIsActive("ThirdDiv")}
                  >
                    <h3 className="accordion-header mb-0" id="prodheadingThree">
                      <button
                        className="bad-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-black laptop:text-xl font-bold desktop:text-2xl"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#prodcollapseThree"
                        aria-expanded="false"
                        aria-controls="prodcollapseThree"
                      >
                        One-to-One Personal Shopping
                      </button>
                    </h3>
                    <div
                      id="prodcollapseThree"
                      className="collapse accordion-collapse"
                      aria-labelledby="prodheadingThree"
                      data-bs-parent="#book-a-demo-accordion"
                    >
                      <div className="accordion-body py-2 text-left">
                        <p className="desktop:pr-40 text-sm font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-black laptop:text-lg desktop:text-xl">
                          Customized video shopping experiences to move viewers from evaluation to purchase. Offer personal shopping experiences to high-value customers or add a touch of exclusivity to luxury products. Our assisted shopping product allows you to build guided customer journeys with a consultative approach.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider */}
      <section id="slider" className="laptop:py-6 py-3 desktop:py-11 desktop:px-28 laptop:px-14 px-7">
        <div className="laptop:container container-fluid mx-auto">
          <p className="pb-8 text-center desktop:text-xl font-medium">
            Trusted by more than 100+ businesses worldwide
          </p>
          <div className="py-8">
            <SocialProof />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-warm-black-300 desktop:px-56 laptop:px-28 tablet:px-14 px-7 desktop:!py-24 laptop:!py-12 tablet:!py-12 !py-12">
        <div className="laptop:container container-fluid mx-auto">
          <div className="text-center bg-warm-black-300">
            <h3 className="desktop:text-5xl laptop:text-3xl tablet:text-2xl text-xl font-bold text-white">
              Frequently Asked Questions
            </h3>
            <div
              className="accordion pt-24 text-black"
              id="accordionExample"
            >
              <div className="rounded-t-3xl border border-warm-gray-350 bg-warm-black-300 px-10 py-8">
                <h3 className="accordion-header mb-0 flex items-center" id="headingOne">
                  <button className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl" type="button"
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
                // data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-2 text-left">
                    <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100 laptop:text-base">
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
                    className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl"
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
                // data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-2 text-left">
                    <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100  laptop:text-base">
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
                    className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl"
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
                // data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-2 text-left">
                    <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100  laptop:text-base">
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
                    className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl"
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
                // data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-2 text-left">
                    <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100  laptop:text-base">
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
                    className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base desktop:leading-8 laptop:leading-6 leading-5 text-white laptop:text-xl font-medium desktop:text-2xl"
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
                // data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-2 text-left">
                    <p className="laptop:pr-40 tablet:pr-20 pr-10 text-sm font-normal  desktop:leading-7 laptop:leading-5 leading-5 text-warm-gray-100  laptop:text-base">
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
        className="px-10 py-5 laptop:py-11 laptop:px-24 bg-warm-black-50"
      >
        <CallToAction heading="Try our hottest live shopping solution" subheading="Get a 15-day free trial to explore our One-to-Many livestream solution and see for yourself how easy it is to start with live commerce."
          btnText="Book a demo" btnLink="Book a demo" />
      </section>
    </>
  );
}
