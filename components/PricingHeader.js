import PricingCard from "../components/PricingCard"

const PricingHeader = () => {

    const starter_listing = [
        "<strong>Includes the following</strong>",
        "10000 viewing mins",
        "Upto 4 live shows",
        "Upto 200 concurrent viewers",
        "Branded player (Font, colour, logo, etc)",
        "Whitelabel domain with link sharing",
        "Interactive video overlays",
        "Multi page embedd",
        "Picture in picture video (PIP)",
        "Cart integration",
        "In-video checkout (coming soon)",
        "Analytics with funnel based cohorts ",
    ];
    const pro_listing = [
        "<strong> Everything in Starter PLUS </strong>",
        "25000 viewing mins",
        "Upto 10 live shows",
        "Upto 500 concurrent viewers",
        "Basic customizations(CTA, UI)",
        "Simulcasting on YouTube, Meta, Instagram",
        "Live show Moderator Access",
        "Previous live show recordings",
        "1: 1 onboarding and training",
        "Lead capture & retargeting",
        "UTM, Google analytics & FB pixel integration",
        "Dedicated support(Email)"
    ];
    const growth_enterprise_listing = [
        "<strong>Everything in Pro PLUS</strong>",
        "Custom viewing mins / video watch time",
        "Unlimited live shows",
        "Custom concurrent viewers",
        "Advanced analytics with deep attribution",
        "Advanced customizations & workflows (UX, features, etc)",
        "Multi host capabilities (coming soon)",
        "External camera + Multi camera compatibility with OBS (Studio setup)",
        "Advanced integrations (API, SDK, CRM, etc)",
        "Dedicated Success Manager & reporting (Whatsapp/Slack)",
        "High touch implementation (Landing page setup, tech team standby)",
        "Strategic business and tech consulting"
    ];

    return (
        <>
            <div className="laptop:pb-20 pb-5 grid laptop:grid-cols-3 laptop:gap-x-8 gap-y-8">
                <PricingCard heading="Starter" preSubHeading="Only for Shopify/Woo" subHeading="Best for start-ups that want to build engagement and convert shoppers with short videos and livestreaming"
                    pricing="$199"
                    btnContent="Contact Us" list={
                        <ul>
                            {starter_listing.map((item, index) => (
                                <li className="flex items-start gap-4 font-normal laptop:text-base text-sm laptop:py-2 py-1" key={index}><i className="desktop:text-2xl laptop:text-xl text-lg text-warm-black ri-check-line"></i>
                                    {index === 0 ? <span dangerouslySetInnerHTML={{ __html: item }} /> : item}
                                </li>
                            ))}
                        </ul>}
                />
                <PricingCard heading="Pro" subHeading="Best for small businesses looking to grow to the next level with live shopping and shoppable videos"
                    pricing="$499"
                    btnContent="Contact Us" list={
                        <ul className="">
                            {pro_listing.map((item, index) => (
                                <li className="flex items-start gap-4 font-normal laptop:text-base text-sm laptop:py-2 py-1" key={index}><i className="desktop:text-2xl laptop:text-xl text-lg text-warm-black ri-check-line"></i>
                                    {index === 0 ? <span dangerouslySetInnerHTML={{ __html: item }} /> : item}
                                </li>
                            ))}
                        </ul>}
                />
                <PricingCard heading="Growth & Enterprise" subHeading="Best for medium-large companies looking to scale up through custom video commerce solutions"
                    pricing="Talk to us"
                    btnContent="Contact us" list={
                        <ul>
                            {growth_enterprise_listing.map((item, index) => (
                                <li className="flex items-start gap-4 font-normal laptop:text-base text-sm laptop:py-2 py-1" key={index}><i className="desktop:text-2xl laptop:text-xl text-lg text-warm-yellow ri-check-line"></i>
                                    {index === 0 ? <span dangerouslySetInnerHTML={{ __html: item }} /> : item}
                                </li>
                            ))}
                        </ul>}
                />
            </div>
            <div className="text-center pb-10">
                <h6 className="text-base font-medium">*All live shopping plans will include easy front-end integration, product spotlight, and creator app (Android / iOS)</h6>
            </div>
        </>
    )
}

export default PricingHeader;

