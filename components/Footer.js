import Link from "next/link";
import BrandLogo from "../public/assets/images/icons/swirl-logo/swirl-latest-logo-bright.svg";

const Footer = () => {
  return (
    <footer className="bg-warm-black-50 px-5 pt-6 tablet:px-7 laptop:px-14 laptop:pt-10 tablet:pb-6 pb-4 desktop:pt-20 desktop:pb-12 desktop:px-28">
      <div className="laptop:container container-fluid mx-auto">
        <div className="border-b border-solid border-brown-17"></div>
        <div className="grid tablet:auto-cols-auto tablet:grid-flow-col justify-between">
          <div className="pt-8 desktop:pt-16">
            <Link href="/">
              <BrandLogo />
            </Link>
          </div>
          <div className="pt-8 desktop:pt-16 tablet:pb-20">
            <div className="mx-auto grid grid-flow-row grid-cols-2 tablet:auto-cols-auto tablet:grid-flow-col desktop:gap-x-36 laptop:gap-x-16 tablet:gap-x-8 gap-x-32 desktop:px-16">
              <div>
                <h4 className="desktop:text-lg laptop:text-base text-sm font-normal desktop:pb-6 pb-3 text-white-2">
                  Products
                </h4>
                <ul className="desktop:text-lg laptop:text-base text-sm  leading-7 font-normal text-warm-gray-700 pl-0">
                  <li className="pb-1">
                    <Link href="/products/livestream-shopping" className="footer text-warm-gray-700 no-underline">
                      Livestream Shopping
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="/products/shoppable-video" className="footer text-warm-gray-700 no-underline">Shoppable Videos</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/products/product-one-to-one" className="footer text-warm-gray-700 no-underline">
                      One to One
                    </Link>
                  </li>
                  <li className="pt-1">
                    <Link href="/pricing" className="footer text-warm-gray-700 no-underline">Pricing</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="desktop:text-lg laptop:text-base text-sm font-normal desktop:pb-6 pb-3 text-white-2">
                  Resources
                </h4>
                <ul className="desktop:text-lg laptop:text-base text-sm leading-7 font-normal text-warm-gray-700 pl-0">
                  <li className="pt-1">
                    <Link href="/partnership-program" className="footer text-warm-gray-700 no-underline">Partnership Program</Link>
                  </li>
                </ul>
              </div>
              <div className="tablet:pt-0 pt-8">
                <h4 className="desktop:text-lg laptop:text-base text-sm font-normal desktop:pb-6 pb-3 text-white-2">
                  Links
                </h4>
                <ul className="desktop:text-lg laptop:text-base text-sm leading-7 font-normal text-warm-gray-700 pl-0">
                  <li className="pt-1">
                    <Link href="https://www.linkedin.com/company/swirl-live-app/" className="footer text-warm-gray-700 no-underline">LinkedIn</Link>
                  </li>
                  <li className="py-1">
                    <Link href="https://twitter.com/swirl_live_app" className="footer text-warm-gray-700 no-underline">Twitter</Link>
                  </li>
                  <li className="py-1">
                    <Link href="https://www.instagram.com/swirl_live_app/" className="footer text-warm-gray-700 no-underline">Instagram</Link>
                  </li>
                  <li className="pb-1">
                    <Link href="https://www.facebook.com/swirlliveapp/" className="footer text-warm-gray-700 no-underline">Facebook</Link>
                  </li>
                </ul>
              </div>
              <div className="tablet:pt-0 pt-8">
                <h4 className="desktop:text-lg laptop:text-base text-sm font-normal desktop:pb-6 pb-3 text-white-2">
                  Company
                </h4>
                <ul className="desktop:text-lg laptop:text-base text-sm leading-7 font-normal text-warm-gray-700 pl-0">
                  <li className="pt-1">
                    <Link href="/about" className="footer text-warm-gray-700 no-underline">About Us</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/contact" className="footer text-warm-gray-700 no-underline">Contacts</Link>
                  </li>
                  <li className="pb-1">
                    <Link href="/careers" className="footer text-warm-gray-700 no-underline">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-solid border-brown-17"></div>
        <div className="flex pt-6 text-sm font-normal  text-warm-gray-700 justify-between">
          <div><p>© 2022 Goswirl</p></div>
          <div className="text-sm font-normal text-warm-gray-700">
            <div className="flex">
              <div>
                <Link href="/terms-and-conditions" className="text-warm-gray-700 no-underline">Terms & Conditions  .</Link>
              </div>
              <div className="pl-2">
                <Link href="/privacy-policy" className="text-warm-gray-700 no-underline">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
