import Button from "./Button"
import Link from "next/link"
import Image from "next/legacy/image"
import ArrowRight from "../public/assets/images/icons/arrow-right.svg"

const CaseStudyCard = ({ imageSrc, imageAlt, logoSrc, logoAlt, desc }) => {
    return (
        <div className='grid tablet:grid-cols-2 gap-x-8'>
            <div className="overflow-hidden aspect-w-4 aspect-h-5 rounded-3xl">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    objectFit="cover"
                    layout="fill"
                />
            </div>
            <div>
                <div className="text-left">
                    <Image
                        src={logoSrc}
                        alt={logoAlt}
                        objectFit="contain"
                        height="120"
                        width="120"
                        className="img"
                    />
                </div>
                <p className='laptop:text-lg tablet:text-base text-sm leading-7 tracking-tight font-medium tablet:py-4'>{desc}</p>
                <Link href="/case-studies/vivo" className="no-underline">
                    <div className="flex gap-x-3 py-4">
                        <div id="arrow-right-case-study-comp" className="h-fit"><ArrowRight />
                        </div>
                        <Button text="Read full story" btn_variant="basic_btn" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default CaseStudyCard;