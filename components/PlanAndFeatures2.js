import Button from "./Button";
const PlanAndFeatures2 = () => {
    return (
        <>
            <div className="flex flex-col laptop:pt-20 pt-10">
                {/* Admin Features */}
                <div className="rounded-t-3xl bg-white">
                    <div className="flex flex-col overflow-x-auto">
                        <div classname="sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        {/* Main Heading */}
                                        <thead className="border-b border-NewGray-19">
                                            <tr>
                                                <th scope="col" className="text-center laptop:pl-14 pl-7 desktop:text-3xl text-xl font-bold text-warm-gray-400">
                                                    Compare plans
                                                </th>
                                                <th scope="col" className="text-center desktop:text-xl laptop:text-lg text-base font-bold text-warm-gray-400">
                                                    <span className="block">Starter</span>
                                                    <span className="block laptop:text-3xl text-xl font-bold laptop:my-3 tablet:my-5 invisible">Spacer</span>
                                                    <Button text='Contact us' btn_variant='pricing_enterprise_btn' width="w-full" />
                                                </th>
                                                <th scope="col" className="text-center desktop:text-xl laptop:text-lg text-base font-bold text-warm-gray-400">
                                                    <span className="block">Pro</span>
                                                    <span className="block laptop:text-3xl text-xl font-bold laptop:my-3 tablet:my-5 invisible">Spacer</span>
                                                    <Button text='Contact us' btn_variant='pricing_enterprise_btn' width="w-full" />
                                                </th>
                                                <th scope="col" className="text-center desktop:text-xl laptop:text-lg text-base font-bold text-warm-gray-400">
                                                    <span className="block">Growth & Enterprise</span>
                                                    <span className="block desktop:text-3xl laptop:text-2xl text-lg font-bold text-center my-3">Custom Quote</span>
                                                    <Button text='Request a Quote' btn_variant='pricingContactUs_btn' width="w-full" />
                                                </th>
                                            </tr>
                                        </thead>
                                        {/* Admin Features Heading*/}
                                        <thead className="border-b border-NewGray-19">
                                            <tr>
                                                <th scope="col" className="laptop:pl-14 pl-7 desktop:text-xl laptop:text-lg text-base font-bold  text-warm-gray-400">
                                                    <i className="laptop:text-2xl text-lg pr-1 ri-dashboard-line align-sub"></i> Admin features
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Live shows</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    4
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    10
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Custom
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Concurrent viewers</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    200
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    500
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Custom
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Video watch time</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    10000 mins
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    25000 mins
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Custom
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">User accounts</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    1
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    2
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Custom
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Live show moderator account</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Auto sync products</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Multi currency</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Multi language (consumer view)</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Core Features */}
                <div className="bg-white">
                    <div className="flex flex-col overflow-x-auto">
                        <div classname="sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        {/* Core features Heading */}
                                        <thead className="border-b border-NewGray-19">
                                            <tr>
                                                <th scope="col" className="laptop:pl-14 pl-7 desktop:text-xl laptop:text-lg text-base font-bold text-warm-gray-400">
                                                    <i className="laptop:text-2xl text-lg pr-1 ri-dvd-line align-sub"></i> Core features
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Easy front-end integration</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Product spotlight</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Interactive video overlays</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Cart integration</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">100% Whitelabel domain</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Analytics</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Basic
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Basic
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Advanced
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Custom CTA</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Admin dashboard</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Marketing Features */}
                <div className="bg-white">
                    <div className="flex flex-col overflow-x-auto">
                        <div classname="sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        {/* Marketing features Heading */}
                                        <thead className="border-b border-NewGray-19">
                                            <tr>
                                                <th scope="col" className="laptop:pl-14 pl-7 desktop:text-xl laptop:text-lg text-base font-bold text-warm-gray-400">
                                                    <i className="laptop:text-2xl text-lg pr-1 ri-global-line align-sub"></i>Marketing features
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Link sharing</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Picture in picture video (PIP)</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Lead capture</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    Up to 10,000
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    Custom
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Retargeting (WhatsApp, SMS, Voice call)</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Consumer persona with history</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Livestream simulcasting(Youtube, Instagram, Meta)</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Production features */}
                <div className="bg-white">
                    <div className="flex flex-col overflow-x-auto">
                        <div classname="sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        {/* Production features Heading */}
                                        <thead className="border-b border-NewGray-19">
                                            <tr>
                                                <th scope="col" className="laptop:pl-14 pl-7 desktop:text-xl laptop:text-lg text-base font-bold text-warm-gray-400">
                                                    <i className="laptop:text-2xl text-lg pr-1 ri-live-line align-sub"></i>Production features
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">Streaming device</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Android
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Android/iOS
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Android/iOS
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Event duration of 60 mins</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Live show monitoring</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Live show recording playback</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Previous live show listings</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Test live shows (Dry runs)</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    60 mins
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    120 mins
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Custom
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">External camera compatibility (OBS)</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Deferred live video streaming (pre-recorded)</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Multi-Host Livestreaming</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tech Integration */}
                <div className="bg-white">
                    <div className="flex flex-col overflow-x-auto">
                        <div classname="sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        {/* Tech Integration Heading */}
                                        <thead className="border-b border-NewGray-19">
                                            <tr>
                                                <th scope="col" className="laptop:pl-14 pl-7 desktop:text-xl laptop:text-lg text-base font-bold text-warm-gray-400">
                                                    <i className="laptop:text-2xl text-lg pr-1 ri-code-box-line align-sub"></i>Tech Integration
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Shopify / Javascript embed code</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Custom web integration (Javascript embed code) </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">CRM Integration</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700  text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700  text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700  text-center">
                                                    Zapier
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Mobile SDK/API integration</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Landing page setup</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium  text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Pixel Integration (FB, Google, etc)</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Google Ad manager integration</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">UTM integration</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Client Support */}
                <div className="rounded-b-3xl bg-white">
                    <div className="flex flex-col overflow-x-auto">
                        <div classname="sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        {/* Client Support Heading */}
                                        <thead className="border-b border-NewGray-19">
                                            <tr>
                                                <th scope="col" className="laptop:pl-14 pl-7 desktop:text-xl laptop:text-lg text-base font-bold text-warm-gray-400">
                                                    <i className="laptop:text-2xl text-lg pr-1 ri-customer-service-2-line align-sub"></i>Client Support
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium text-warm-gray-400">1:1 onboarding & training</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Account manager</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Tech team standby</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-NewGray-19">
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Monthly reporting and recommendations</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    -
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    <i className="laptop:text-2xl text-xl text-black ri-check-line"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="laptop:pl-14 pl-7 laptop:text-base text-sm font-medium  text-warm-gray-400">Support</td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Email/chat
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Email/chat/call - Same day response
                                                </td>
                                                <td className="laptop:text-base text-sm text-warm-gray-700 font-medium text-center">
                                                    Email/chat/call/Whatsapp/Slack - Immediate response
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PlanAndFeatures2;
