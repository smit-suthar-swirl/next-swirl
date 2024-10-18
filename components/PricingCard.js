import Button from "./Button"
import Link from "next/link";

const PricingCard = ({ heading, preSubHeading, subHeading, pricing, list }) => {
    return (
        <div>
            {
                (heading == "Growth & Enterprise") ?
                    <div className={`laptop:pt-8 pt-6 laptop:px-8 px-4 shadow-lg border rounded-3xl h-full bg-warm-gray-400`}>
                        <div className="border-b laptop:pb-8 pb-4 border-warm-cream-50">
                            <h5 className="font-bold desktop:text-2xl laptop:text-2xl tablet:text-lg text-base text-card-1">{heading}</h5>
                            <p className="font-normal laptop:text-base text-xs desktop:pt-9 pb-8 text-white">{subHeading}</p>
                            <Link href="/contact">
                                <Button text='Contact us' btn_variant='growth_and_enterprise_btn' width="w-full" />
                            </Link>
                        </div>
                        <div className="mx-auto laptop:pt-8 pt-5 desktop:pb-40 laptop:pb-20 pb-10 text-white">
                            {list}
                        </div>
                    </div> :

                    (heading == "Starter") ?
                        <div className={`laptop:pt-8 pt-6 laptop:px-8 px-4 shadow-lg border rounded-3xl h-full bg-white`}>
                            <div className="border-b laptop:pb-8 pb-4 border-warm-cream-50">
                                <h5 className="font-bold desktop:text-2xl laptop:text-2xl tablet:text-lg text-base text-warm-gray-400">{heading}</h5>
                                <p className="font-normal laptop:text-base text-xs pt-1 text-warm-black">{preSubHeading}</p>
                                <p className="font-normal laptop:text-base text-xs pt-2 pb-8 text-warm-gray-350">{subHeading}</p>
                                <Link href="/book-a-demo">
                                    <Button text='Contact us' btn_variant='pricing_enterprise_btn' width="w-full" />
                                </Link>
                            </div>
                            <div className="mx-auto laptop:pt-8 pt-5 desktop:pb-40 laptop:pb-20 pb-10 text-warm-gray-350">
                                {list}
                            </div>
                        </div>
                        :
                        <div className={`laptop:pt-8 pt-6 laptop:px-8 px-4 shadow-lg border rounded-3xl h-full bg-white`}>
                            <div className="border-b laptop:pb-8 pb-4 border-warm-cream-50">
                                <h5 className="font-bold desktop:text-2xl laptop:text-2xl tablet:text-lg text-base text-warm-gray-400">{heading}</h5>
                                <p className="font-normal laptop:text-base text-xs pt-10 pb-8 text-warm-gray-350">{subHeading}</p>
                                <Link href="/book-a-demo">
                                    <Button text='Contact us' btn_variant='pricing_enterprise_btn' width="w-full" />
                                </Link>
                            </div>
                            <div className="mx-auto laptop:pt-8 pt-5 desktop:pb-40 laptop:pb-20 pb-10 text-warm-gray-350">
                                {list}
                            </div>
                        </div>
            }
        </div >
    )
}
export default PricingCard;