import Head from "next/head";
import Image from "next/image";
import CallToAction from "../components/CallToAction";
import FeaturedCard from "../components/FeaturedCard";
import FeaturedCardLatest from "../components/FeaturedCardLatest";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How Live Shopping Works With Swirl</title>
      </Head>
      {/* Hero Header Sec */}
      <section id="banner-section" className="px-5 pb-16 pt-32 tablet:px-7 laptop:px-14 desktop:px-28 desktop:py-20">
        <div className="laptop:container container-fluid mx-auto">
          <p className="text-center text-lg font-normal text-red-1000 laptop:text-2xl desktop:text-3xl">
            How it works
          </p>
          <div className="pt-4 pb-8 tablet:px-4 tablet:pt-5 laptop:px-32 desktop:px-28 desktop:pt-6">
            <h1 className="text-center font-bold text-xl laptop:text-6xl">
              Live commerce,<br /> get set, go!
            </h1>
          </div>
          <p className="px-4 text-center text-sm font-normal laptop:text-lg desktop:text-lg">
            Four easy steps and you’re all set to kickstart live selling:
          </p>
          <div className="laptop:px-32 laptop:py-16 p-0">
            <div className="laptop:my-0 my-5 border border-transparent rounded-32 overflow-auto">
              <video loop controls={false} autoPlay style={{ width: "100%", height: "100%" }}>
                <source src={"https://assets-global.website-files.com/63f0e6822ce56e6262917200/64ad05f9fd63ac59d854faf3_product video-transcode.mp4"} />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Description */}
      <section
        id="how-it-works-description"
        className="bg-warm-black-300 px-5 pb-16 pt-16 laptop:pt-32 tablet:px-7 laptop:px-14 desktop:px-28 desktop:py-20"
      >
        <div className="laptop:container container-fluid mx-auto">
          <div className="grid laptop:grid-cols-2 laptop:gap-x-32 gap-x-10">
            <div id="content">
              <h2 className="py-6 text-left text-xl font-bold text-white laptop:text-5xl desktop:pt-0 desktop:pb-16">
                How it works
              </h2>
              <div
                className="accordion space-y-4 pb-16 text-white"
                id="how-it-works-accordion"
              >
                <div className="border-b border-warm-gray-350 bg-warm-black-300 py-6 tablet:px-10">
                  <h3 className="accordion-header mb-0 flex items-center" id="headingOne">
                    <button
                      className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-base font-medium text-white tablet:text-lg laptop:text-xl desktop:text-2xl"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      1. Sign up with us
                    </button>
                  </h3>
                  <div
                    id="collapseOne"
                    className="collapse accordion-collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#how-it-works-accordion"
                  >
                    <div className="py-2 text-left">
                      <p className="pr-10 text-sm font-normal text-warm-gray-100  tablet:pr-20 laptop:text-base">
                        Reach out for a free demo to get all your questions
                        about live selling answered and choose the plan that
                        works best for you. When you subscribe to Swirl, you’ll
                        get access to all available features based on your plan.
                        Our exceptionally helpful tech team will get you started
                        on your live commerce journey with us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-b border-warm-gray-350 bg-warm-black-300 py-8 tablet:px-10">
                  <h3 className="accordion-header mb-0" id="headingTwo">
                    <button
                      className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-sm font-medium text-white tablet:text-lg laptop:text-xl desktop:text-2xl"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2. Easily integrate with brand assets
                    </button>
                  </h3>
                  <div
                    id="collapseTwo"
                    className="collapse accordion-collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#how-it-works-accordion"
                  >
                    <div className="py-2 text-left">
                      <p className="pr-10 text-sm font-normal text-warm-gray-100 tablet:pr-20 laptop:text-base ">
                        Swirl works with Shopify, WooCommerce and all other
                        major platforms. It only takes a couple of seconds to
                        integrate with embedding code and get started. Whether
                        you’re using livestreaming, shoppable videos, or
                        one-to-one shopping, you’ll get all the support you need
                        to create catchy video or learn how to repurpose
                        existing content to create a winning live commerce
                        strategy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-b border-warm-gray-350 bg-warm-black-300 py-8 tablet:px-10">
                  <h3 className="accordion-header mb-0" id="headingThree">
                    <button
                      className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-sm font-medium text-white tablet:text-lg laptop:text-xl desktop:text-2xl"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3. Go live
                    </button>
                  </h3>
                  <div
                    id="collapseThree"
                    className="collapse accordion-collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#how-it-works-accordion"
                  >
                    <div className="py-2 text-left">
                      <p className="pr-10 text-sm font-normal text-warm-gray-100 tablet:pr-20 laptop:text-base ">
                        Deploy a suite of products to offer broadcast live
                        selling videos, concierge-style shopping, or create
                        eyeball-grabbing short videos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-b border-warm-gray-350 bg-warm-black-300 py-8 tablet:px-10 ">
                  <h3 className="accordion-header mb-0" id="headingFour">
                    <button
                      className="bad2-accordion collapsed relative flex w-full items-center justify-between text-left text-sm font-medium text-white tablet:text-lg laptop:text-xl desktop:text-2xl"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      4. Make data-driven decisions
                    </button>
                  </h3>
                  <div
                    id="collapseFour"
                    className="collapse accordion-collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#how-it-works-accordion"
                  >
                    <div className="py-2 text-left">
                      <p className="pr-10 text-sm font-normal text-warm-gray-100 tablet:pr-20 laptop:text-base">
                        Get in-depth analytics, view customer history, capture
                        leads, see first-party data, retarget interested buyers,
                        and predict trends with precision. With access to data
                        like this, you’ll be able to plan powerful strategies
                        and make the right decisions for your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/hiw-description.webp"
                alt="young-woman-blogger-recording-video-camera"
                width={436}
                height={681}
                className="rounded-3xl laptop:mx-auto desktop:ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="bg-warm-cream-300 px-5 py-10 tablet:px-7 laptop:px-14 desktop:px-28 desktop:py-28"
      >
        <div className="laptop:container container-fluid mx-auto">
          <div className="grid grid-flow-row auto-rows-max">
            <div className="grid grid-flow-row auto-rows-max gap-6 pb-10 desktop:pb-20">
              <div className="mx-auto flex w-fit items-center justify-center rounded-24 bg-white px-4">
                <p className="text-lg font-normal tablet:text-xl">
                  Features
                </p>
              </div>
              <div className="px-3 pt-4 pb-6 text-center laptop:px-24 desktop:px-48">
                <h3 className="text-xl font-bold text-warm-gray-400 tablet:text-2xl laptop:text-5xl">
                  Transform your marketing strategy with Swirl’s next gen features.
                </h3>
              </div>
              <div className="px-3 pb-6 text-center tablet:px-20 tablet:pb-12 laptop:px-40 laptop:pb-20 desktop:px-80">
                <p className="text-sm font-normal text-warm-gray-400 laptop:text-base desktop:text-lg">
                  A powerful self-serve product with deep growth analytics to
                  help you convert, engage, and retain more customers.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-8 laptop:grid-cols-3">
              <FeaturedCardLatest
                bg_color="cream"
                title="Future-ready tech"
                content="Boost discovery and hold attention while building deeper connections with customers."
                icon={
                  <i className="ri-video-chat-line text-2xl laptop:text-3xl desktop:text-4xl"></i>
                }
              />
              <FeaturedCardLatest
                bg_color="cream"
                title="Native experience"
                content="Showcase products and create immersive experiences that spur viewers into taking action."
                icon={
                  <i className="ri-paint-line text-2xl laptop:text-3xl desktop:text-4xl"></i>
                }
              />
              <FeaturedCardLatest
                bg_color="cream"
                title="Data security"
                content="Turn viewers into buyers with seamless Add-to-Cart and checkout features."
                icon={
                  <i className="ri-shield-flash-line text-2xl laptop:text-3xl desktop:text-4xl"></i>
                }
              />
              <FeaturedCardLatest
                bg_color="cream"
                title="Deep analytics"
                content="Engagement metrics, trend prediction, and purchase history."
                icon={
                  <i className="ri-pie-chart-2-fill text-2xl laptop:text-3xl desktop:text-4xl"></i>
                }
              />
              <FeaturedCardLatest
                bg_color="cream"
                title="First-party data and attribution"
                content="Brand-owned data, qualified lead capture, retargeting."
                icon={
                  <i className="ri-line-chart-fill text-2xl laptop:text-3xl desktop:text-4xl"></i>
                }
              />
              <FeaturedCardLatest
                bg_color="cream"
                title="Professional quality video"
                content="RTMP, external camera and OBS software for a studio-like feel."
                icon={
                  <i className="ri-live-line text-2xl laptop:text-3xl desktop:text-4xl"></i>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why your customers will love goswirl */}
      <section className="px-5 py-10 tablet:px-7 laptop:px-14 desktop:px-28 desktop:py-40">
        <div className="laptop:container container-fluid mx-auto">
          <div className="grid grid-flow-row auto-rows-max gap-y-20 desktop:gap-y-48">
            <div className="grid items-center laptop:grid-cols-2 laptop:gap-x-24">
              <div className="order-1 mx-auto">
                <Image
                  className="rounded-3xl"
                  src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/hiw-customers-love-swirl.webp"
                  alt="customers-love-swirl"
                  width={412}
                  height={681}
                />
              </div>
              <div className="order-2 mx-auto">
                <h4 className="py-6 text-lg font-bold tablet:text-2xl laptop:text-3xl desktop:pr-24 desktop:pb-12 desktop:text-5xl">
                  Why your customers will love goswirl
                </h4>
                <p className="text-sm font-medium laptop:text-base desktop:text-lg">
                  Your customers are your first priority, and that’s exactly how
                  it should be. We’ve designed Swirl to be an effortless way for
                  customers to access and watch your shoppable videos, interact
                  and ask questions with your hosts, and most importantly, buy
                  easily. We’ve built in multiple ways for brands to create
                  short, quick shopping journeys that smoothly turn viewers into
                  buyers.
                </p>
                <p className="pt-6 pb-10 text-sm font-medium laptop:text-base desktop:text-lg">
                  Your customers will also love the following benefits:
                </p>
                <ul>
                  <li className="flex items-start gap-2 text-sm font-medium laptop:text-base desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Single-click
                    viewing
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>High quality,
                    fast-loading videos
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Authentic
                    conversations with brand
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Uninterrupted
                    in-video purchase
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Hyper-engaging
                    interactive features tools
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Curated
                    catalogues, custom product lists, and guided journeys
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Concierge-style
                    shopping
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto grid items-center laptop:grid-cols-2 laptop:gap-x-24">
              <div className="order-2 laptop:order-1 desktop:pl-24">
                <h4 className="py-6 text-lg font-bold tablet:text-2xl laptop:text-3xl desktop:pr-24 desktop:pb-12 desktop:text-5xl">
                  Why brands love GoSwirl
                </h4>
                <p className="text-sm font-medium laptop:text-base desktop:text-lg">
                  When you try live commerce with us, you’ll find that adding
                  shoppable video to your marketing and sales strategy is
                  seamless and easy. Our software enables you to create and
                  share immersive live selling videos with your customers,
                  control and simplify the customer journey, track metrics, and
                  plan more effective ways to showcase your products.
                </p>
                <p className="pt-6 pb-10 text-sm font-medium laptop:text-base desktop:text-lg">
                  Our clients love the following features:
                </p>
                <ul>
                  <li className="flex items-start gap-2 text-sm font-medium laptop:text-base desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Best in global
                    class technology
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>No-to low-tech
                    integration
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Comprehensive
                    onboarding support
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>100% native brand
                    experience
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Customized to your
                    brand needs
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Dedicated customer
                    success team
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-medium laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Business
                    intelligence tools
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-normal laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Less than one
                    second load time
                  </li>
                  <li className="flex items-start gap-2 pt-1 text-sm font-normal laptop:text-base desktop:pt-2 desktop:text-lg">
                    <i className="ri-check-line text-2xl"></i>Infinite
                    auto-scalability
                  </li>
                </ul>
              </div>
              <div className="order-1 mx-auto laptop:order-2">
                <Image
                  className="rounded-3xl"
                  src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/hiw-brands-love-swirl.webp"
                  alt="brands-love-swirl"
                  width={412}
                  height={681}
                />
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
        <CallToAction
          heading="Curious to learn more?"
          subheading="Our live selling demo takes just 15 minutes and can be scheduled when convenient for you."
          btnText="Book a demo"
          btnLink="Book a demo"
        />
      </section>
    </>
  );
}
