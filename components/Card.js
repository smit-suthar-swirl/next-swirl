import dynamic from "next/dynamic";

const Card = ({ toggle }) => {
    const PricingHeader = dynamic(() => import('./PricingHeader'), {
        ssr: false
    })
    const PlanAndFeatures = dynamic(() => import('./PlanAndFeatures'), {
        ssr: false
    })
    const PricingHeader2 = dynamic(() => import('./PricingHeader2'), {
        ssr: false
    })
    const PlanAndFeatures2 = dynamic(() => import('./PlanAndFeatures2'), {
        ssr: false
    })
    return (
        <>
            {toggle === 'Live shopping' ? [<PricingHeader key="" />, <PlanAndFeatures key="" />] : [<PricingHeader2 key="" />, <PlanAndFeatures2 key="" />]}
        </>
    );
};
export default Card;