import PricingCard2 from "../components/PricingCard2"

const PricingHeader2 = () => {

    const starter_listing = [
        "<strong>Includes the following:</strong>",
        "20000 Viewing mins",
        "50 hosted videos",
        "Branded player (Font, colour, logo, etc)",
        "Whitelabel domain with link sharing ",
        "Interactive video overlays",
        "Multi page embedd ",
        "Picture in picture video (PIP)",
        "Cart integration",
        "In-video checkout (coming soon)",
        "Analytics with funnel based cohorts"
    ];

    const pro_listing = [
        "<strong>Everything in Starter PLUS</strong>",
        "50,000 Viewing mins",
        "250 hosted videos",
        "Basic customizations (CTA, UI)",
        "Lead capture & retargeting",
        "Consumer persona",
        "1:1 onboarding and training ",
        "UTM integration",
        "Google Analytics integration",
        "FB Pixel integration",
        "Dedicated support (Email)"
    ];

    const growth_enterprise_listing = [
        "<strong>Everything in Pro PLUS</strong>",
        "Custom viewing mins",
        "Unlimited hosted videos",
        "Advanced customizations (UX, features, etc)",
        "Custom workflows",
        "Advanced integrations (API, SDK, CRM, etc)",
        "Auto playlist multiplexing",
        "Advanced analytics with deep attribution",
        "Dedicated Success Manager & reporting (Whatsapp/Slack)",
        "High touch implementation (Landing page setup, tech team standby)",
        "Strategic business and tech consulting"
    ];

    return (
        <>
            <div className="laptop:pb-20 pb-5 grid laptop:grid-cols-3 laptop:gap-x-8 gap-y-8">
                <PricingCard2 heading="Starter" subHeading="Best for start-ups that want to build engagement and convert shoppers with short videos and livestreaming"
                    pricing="$199"
                    btnContent="Contact Us" list={
                        <ul>
                            {starter_listing.map((item, index) => (
                                <li className="flex items-start gap-4 font-normal laptop:text-base text-sm laptop:py-2 py-1" key={index}><i className="desktop:text-2xl laptop:text-xl text-lg text-warm-purple-50 ri-check-line"></i>
                                    {index === 0 ? <span dangerouslySetInnerHTML={{ __html: item }} /> : item}
                                </li>
                            ))}

                        </ul>}
                />
                <PricingCard2 heading="Pro" subHeading="Best for small businesses looking to grow to the next level with live shopping and shoppable videos"
                    pricing="$499"
                    btnContent="Contact Us" list={
                        <ul className="">
                            {pro_listing.map((item, index) => (
                                <li className="flex items-start gap-4 font-normal laptop:text-base text-sm laptop:py-2 py-1" key={index}><i className="desktop:text-2xl laptop:text-xl text-lg text-warm-purple-50 ri-check-line"></i>
                                    {index === 0 ? <span dangerouslySetInnerHTML={{ __html: item }} /> : item}
                                </li>
                            ))}
                        </ul>}
                />
                <PricingCard2 heading="Growth & Enterprise" subHeading="Best for medium-large companies looking to scale up through custom video commerce solutions"
                    pricing="Talk to us"
                    btnContent="Contact us"
                    list={
                        <ul>
                            {growth_enterprise_listing.map((item, index) => (
                                <li className="flex items-start gap-4 font-normal laptop:text-base text-sm laptop:py-2 py-1" key={index}><i className="desktop:text-2xl laptop:text-xl text-lg text-purple-100 ri-check-line"></i>
                                    {index === 0 ? <span dangerouslySetInnerHTML={{ __html: item }} /> : item}
                                </li>
                            ))}

                        </ul>}
                />
            </div>
            <div className="text-center pb-10">
                <h6 className="text-base font-medium">*All short shoppable video plans will include easy front-end integration, product tagging, and carousal / playlist integration.</h6>
            </div>
        </>
    )
}

export default PricingHeader2;