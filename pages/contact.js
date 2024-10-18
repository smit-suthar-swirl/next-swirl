import Head from "next/head";
import CallToAction from "../components/CallToAction";
import Form from "../components/Form";
import Image from "next/image";
import contactImage from "../public/assets/images/contactus.png";

export default function contact() {
  return (
    <>
      <Head>
        <title>Swirl | Contact Us To Explore Opportunities & Solutions</title>
      </Head>
      {/*Contact Us and Help & Support */}
      <section className="px-5 pt-32 laptop:px-14 desktop:px-28 desktop:pt-28 desktop:pb-28 bg-warm-black-500">
        <div className="laptop:container container-fluid mx-auto">

          <div className="laptop:grid grid-cols-2 grid-flow-rows gap-x-20 pb-14">
            <div className="grid-flow-rows">
              <h1 className="text-2xl tablet:text-3xl laptop:text-5xl font-bold text-white pt-5 pb-2">
                Contact Us
              </h1>
              <p className="pt-2 laptop:text-2xl tablet:text-xl text-base font-normal text-white">
                Drop us a line and we’ll get back to you as soon as possible</p>

              <div className="pt-20">
                <Image
                  src={contactImage}
                  alt="contact us image"
                  width={502}
                  height={542}
                  className="mx-auto"
                />
              </div>
              <div className="py-10 desktop:text-xl font-normal text-white">
                <p>We’re all for a conversation that stimulates our creative side! From a discussion on live commerce, video shopping, and industry trends, to what you do, what we do, the progression of the world around us, and everything in between, we’re up for conversations that add value to both of us. </p>
                <p className="pt-4">We know you have a lot to discuss. Got a question? Drop us a line and we’ll get back to you as soon as possible. Got feedback on our website or social media content? We’re waiting to hear from you. Got questions about our products and services? Drop us an email or book a demo to talk to our team.</p>
                <p className="pt-4">We’re great hosts too, so if you’re in a city with our presence, contact us in advance to set up a meeting. Get in touch now.</p>
              </div>
            </div>
            <div className="rounded-32 border bg-white desktop:px-14 laptop:px-7 px-5 desktop:pt-12 laptop:pt-6 pt-4 desktop:pb-44 laptop:pb-20 pb-10 laptop:mt-0 mt-12">
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="px-5 pb-10 laptop:pb-20 laptop:px-14 desktop:px-28 desktop:pb-20 desktop:pt-52 laptop:pt-36 pt-10">
        <div className="laptop:container container-fluid mx-auto">
          <div>
            <h2 className="text-lg font-bold text-warm-gray-400 tablet:text-3xl laptop:text-5xl">
              Our Offices
            </h2>
            <div className="grid grid-flow-row laptop:gap-8 gap-4 laptop:pt-12 pt-6 laptop:grid-cols-3 desktop:pt-24">
              <div className="border-t-2 border-t-warm-gray-500 px-2 pt-4 text-start laptop:border-l-2 laptop:border-t-0 laptop:border-l-warm-gray-500 laptop:px-4 laptop:pt-0 desktop:px-7">
                <h3 className="text-sm font-bold text-warm-gray-400 tablet:text-xl laptop:text-3xl">
                  Headquarter
                </h3>
                <p className="laptop:pt-6 pt-3 laptop:text-lg tablet:text-base text-xs font-normal text-warm-gray-130">
                  6 To 10, 1st Floor Lalbaug Plaza, Opp. Atria– I, Manjalpur,
                  Vadodara, Gujarat, INDIA 390011
                </p>
              </div>
              <div className="border-t-2 border-t-warm-gray-500 px-2 pt-4 text-start laptop:border-l-2  laptop:border-t-0 laptop:border-l-warm-gray-500 laptop:px-4 laptop:pt-0 desktop:px-7">
                <h3 className="text-sm font-bold text-warm-gray-400 tablet:text-xl laptop:text-3xl">
                  Banglore Office
                </h3>
                <p className="laptop:pt-6 pt-3 laptop:text-lg tablet:text-base text-xs font-normal text-warm-gray-130">
                  1794/36, BHIVE HSR 27th Main, 3, 27th Main Rd, near Power
                  Station, 2nd Sector, HSR Layout, Bengaluru, Karnataka 560102
                </p>
              </div>
              <div className="border-t-2 border-t-warm-gray-500 px-2 pt-4 text-start laptop:border-l-2  laptop:border-t-0 laptop:border-l-warm-gray-500 laptop:px-4 laptop:pt-0 desktop:px-7">
                <h3 className="text-sm font-bold text-warm-gray-400 tablet:text-xl laptop:text-3xl">
                  US Office
                </h3>
                <p className="laptop:pt-6 pt-3 laptop:text-lg tablet:text-base text-xs font-normal text-warm-gray-130">
                  2093A Philadelphia Pike, Suite 348, Claymont, DE 19703
                </p>
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
        <CallToAction heading="Fifteen minutes can transform your brand" subheading="Find out all you want to know about live shopping."
          btnText="Book a demo" btnLink="Book a demo" />
      </section>
    </>
  );
}
