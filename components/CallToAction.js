import Link from "next/link"
import Button from "./Button"

export default function CallToAction(props) {

    return (
        <>
            <div className="laptop:container container-fluid mx-auto">
                <div className="laptop:py-11 laptop:grid laptop:grid-cols-2">
                    <h2 className="desktop:text-6xl laptop:text-5xl tablet:text-4xl text-3xl text-center laptop:text-left font-bold text-white">
                        {props.heading}
                    </h2>
                </div>
                <div className="laptop:text-end laptop:grid grid-cols-2 laptop:items-baseline">
                    <div className="laptop:text-left text-center">
                        <p className="desktop:text-2xl laptop:text-xl tablet:text-lg text-sm font-medium laptop:pt-8 pt-5 text-white">
                            {props.subheading}
                        </p>
                    </div>
                    <div className="desktop:pt-16 laptop:pt-8 pt-5 laptop:text-right text-center">
                        <Link href={(props.btnLink == "Book a demo") ? "/book-a-demo" : (props.btnLink == "View Careers") ? "/careers" : ""}>
                            <Button text={(props.btnText == "Book a demo") ? "Book a Demo" : (props.btnText == "View Careers") ? "View Careers" : "Request a demo"} btn_variant="cta_btn" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}