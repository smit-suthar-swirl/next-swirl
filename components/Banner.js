import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "../public/assets/images/hero-img.png";

const Banner = () => {
  return (
    <>
      <div className="laptop:container container-fluid mx-auto bg-warm-black">
        <div className="grid laptop:grid-cols-2 items-start mt-20">
          <div>
            <div className="bg-warm-black-200 rounded-100 mb-4 py-2 px-4 laptop:mt-10 w-fit">
              <p className="laptop:text-sm text-xs font-bold text-warm-yellow m-0"> Video selling for eCommerce brands </p>
            </div>
            {/* Hero Heading and Hero Text*/}
            <div>
              <h1 className="desktop:text-6xl laptop:text-5xl text-4xl font-bold text-white">
                Easy to integrate.<br /> Hard to ignore.
              </h1>
              <p className="laptop:pt-6 pt-4 laptop:pb-12 pb-8 laptop:text-xl text-lg font-normal text-white">
                Convert boring, static pages into hyper-engaging shoppable videos that your customers can&#39;t get enough of.</p>
            </div>
            {/* Button */}
            <div>
              <Link href="/book-a-demo">
                <Button text="Start Free Trial" btn_variant="secondary_btn" />
              </Link>
            </div>
            {/* Lists */}
            <ul className="laptop:text-lg text-base font-medium text-white mt-8 ml-0 pl-0">
              <li className="flex items-center gap-2">
                <i className="ri-add-line"></i>14% higher conversions
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-add-line"></i>7x customer engagement
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-add-line"></i>16+ mins average watch time
              </li>
            </ul>
          </div>
          {/* Hero Image of Homepage */}
          <div className="laptop:mx-auto laptop:mt-0 mt-5">
            <Image
              src={HeroImg}
              alt="Hero Image of Homepage"
              width={610}
              height={666}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
