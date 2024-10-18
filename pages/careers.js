import Head from "next/head";
import CallToAction from "../components/CallToAction"
import Link from "next/link"
import Button from "../components/Button"

export default function careers() {
    return (
        <>
            <Head>
                <title>Careers at Swirl | Work with us</title>
            </Head>
            <section className="px-5 pt-16 laptop:px-16 desktop:px-28 laptop:py-20">
                <div className="laptop:container container-fluid mx-auto">
                    <div className="laptop:px-28 px-2">
                        <p className="text-xl font-medium text-center desktop:pt-8 pt-20">Career</p>
                        <h1 className="pt-3 text-lg font-bold laptop:text-5xl text-center">
                            Thank you for your interest in working with SWIRL. We’ve got big plans and are building a stellar team to take us all the way to the top!
                        </h1>
                        <p className="pt-4 font-medium laptop:text-2xl text-lg text-center laptop:px-28">
                            We’re looking for smart, ambitious dreamers with the drive to back it up. If that sounds like you, read on for more information.
                        </p>
                        <div className="pt-14 text-center">
                            <Link href="/book-a-demo">
                                <Button text="See all vacancies" btn_variant="blackandwhite_btn" />
                            </Link>
                        </div>
                    </div>
                    <div className="pt-28 font-normal laptop:px-28 px-2 pb-20">
                        <p className="laptop:text-2xl text-lg">What is the future of live commerce?</p>
                        <p className="pt-3 laptop:text-2xl text-lg">Live commerce in China is already a 4.9 trillion yuan industry, but the wave is just beginning in the rest of the world. As more and more people move to online shopping, we expect to see video commerce play a huge role in retail.</p>
                        <p className="pt-12 laptop:text-2xl text-lg">The indicators are already visible. Since the start of the pandemic, live commerce has already grown by 76% - that’s huge! – and we’ve just begun. The numbers for video consumption and eCommerce are blowing up, and 5G is going to play a big role in pushing those charts even higher.</p>
                        <p className="pt-10 laptop:text-2xl text-lg">Where does SWIRL see itself in five years?</p>
                        <p className="pt-3 laptop:text-2xl text-lg">Why is it always the candidate that gets asked this question, and not the company? We want to find people who grow with us, so it’s only fair that we tell you where we’re going, and you can decide if you want to join us.</p>
                        <p className="pt-10 laptop:text-2xl text-lg">We’re building SWIRL for the world, and so we’re aiming for complete global domination. It’s that simple.</p>
                        <p className="pt-10 laptop:text-2xl text-lg">SWIRL already has a presence in India, USA, Brazil and Dubai. Our clients are from Europe, APAC, Middle East, and India, and we’re planning on setting up physical presences in all these locations.</p>
                        <p className="pt-10 laptop:text-2xl text-lg">We’re working towards being one of the top 3 live video selling brands in the world, and it’s going to take a lot of hard work and smart innovation to get there.</p>
                        <p className="pt-10 laptop:text-2xl text-lg"> As we see it, the journey is going to be as much fun as getting to the destination. Coming along for the ride?</p>
                        <p className="pt-10 laptop:text-2xl text-lg">What is it like to work at SWIRL?</p>
                        <p className="pt-3 laptop:text-2xl text-lg">We’re a close-knit team and we love good food, chai breaks and ice-cream treats. Oh, and we work pretty hard too!</p>
                        <p className="pt-10 laptop:text-2xl text-lg">As a young brand, we offer plenty of scope for self-learning, experimentation, skill development, and working across functions. In fact, we prefer it if everyone is involved and up to date with what the other teams are doing.</p>
                        <p className="pt-10 laptop:text-2xl text-lg">While work and growth are important, we pride ourselves on prioritising the mental health and wellbeing of our team. We encourage making time for hobbies, family and social life, and the development of interests, because we firmly believe it makes for a happier and healthier team.</p>
                        <p className="pt-10 laptop:text-2xl text-lg">We’re also inclusive and diversity-friendly. When you work at SWIRL, you’ll be respected for your authenticity, your integrity, your talent, and your effort. </p>
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
    )
}