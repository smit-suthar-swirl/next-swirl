import React from "react";
import Link from "next/link";
import Button from "./Button";
import Navitems from "./Navitems";
import { useState, useEffect } from "react";
import DropdownOneToMany from "../public/assets/images/icons/featuredIcon-1.svg";
import DropdownShoppable from "../public/assets/images/icons/featuredIcon-2.svg";
import DropdownOneToOne from "../public/assets/images/icons/featuredIcon-3.svg";
import MobileNavigation from "./MobileNavigation";
import BrandLogo from "../public/assets/images/icons/swirl-logo/swirl-latest-logo.svg";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'blurred' : ''} fixed z-10 w-full px-5 py-4 tablet:px-7 laptop:px-14 laptop:py-4 desktop:px-28 desktop:py-4`}>
        <div className="laptop:container container-fluid mx-auto">
          <div className="flex flex-row justify-between">
            <div className="flex">
              <Link href="/" className="flex items-center">
                <BrandLogo />
              </Link>
              <nav id="headernav" className="hidden laptop:block pl-10">
                <div id="navlinks" className="flex gap-x-0 laptop:gap-x-4">
                  <div className="group relative p-2">
                    <Navitems text="Products" id="nav-arrows" dropdown_required="yes" />
                    <div className="absolute hidden w-auto rounded-12 border-2 border-warm-gray-100 bg-white p-5 shadow-dropdown-shdw group-hover:block desktop:top-11 desktop:-left-[0px]">
                      <div className="grid-flow-rows grid gap-y-2">
                        <Link href="/products/livestream-shopping" className="no-underline">
                          <div className="grid auto-cols-max grid-flow-col items-center gap-1 p-3 hover:rounded-lg hover:bg-warm-gray-100">
                            <div className="rounded-full bg-warm-gray-100 p-3">
                              <DropdownOneToMany className="scale-75" />
                            </div>
                            <div className="pl-4">
                              <h3 className="text-base font-medium desktop:text-lg text-black">
                                Livestream shopping
                              </h3>
                              <span className="block pt-1 text-sm text-warm-gray-130">
                                Point. Shoot. Inspire
                              </span>
                            </div>
                          </div>
                        </Link>
                        <Link href="/products/shoppable-video" className="no-underline">

                          <div className="grid auto-cols-max grid-flow-col items-center gap-1 p-3 hover:rounded-lg hover:bg-warm-gray-100">
                            <div className="rounded-full bg-warm-gray-100 p-3">
                              <DropdownShoppable className="scale-75" />
                            </div>
                            <div className="pl-4">
                              <h3 className="text-base font-medium desktop:text-lg text-black">
                                Shoppable Video
                              </h3>
                              <span className="block pt-1 text-sm text-warm-gray-130">
                                Breathe life into your products
                              </span>
                            </div>
                          </div>
                        </Link>
                        <Link href="/products/product-one-to-one" className="no-underline">

                          <div className="grid auto-cols-max grid-flow-col items-center gap-1 p-3 hover:rounded-lg hover:bg-warm-gray-100">
                            <div className="rounded-full bg-warm-gray-100 p-3">
                              <DropdownOneToOne className="scale-75" />
                            </div>
                            <div className="pl-4">
                              <h3 className="text-base font-medium desktop:text-lg text-black">
                                One to One
                              </h3>
                              <span className="block pt-1 text-sm text-warm-gray-130">
                                More intimate. More effective
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <Link href="/how-it-works" className="text-white no-underline">
                      <Navitems text="How it works" />
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link href="/pricing" className="text-white no-underline">
                      <Navitems text="Pricing" />
                    </Link>
                  </div>
                  <div id="headernav" className="group relative p-2">
                    <Navitems text="Resources" dropdown_required="yes" />
                    <div className="absolute hidden w-[20rem] rounded-12 border-2 border-warm-gray-100 bg-white p-3 shadow-dropdown-shdw group-hover:block desktop:top-11 desktop:-left-[0px]">
                      <div className="grid-flow-rows grid gap-y-2 text-base font-normal">
                        <Link href="/partnership-program" className="no-underline">
                          <div className="grid auto-cols-max grid-flow-col items-center gap-x-6 p-3 hover:rounded-lg hover:bg-warm-gray-100 hover:p-3">
                            <h3 className="text-base font-medium desktop:text-lg text-black">Partnership Program</h3>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="">
              <Link className="hidden laptop:block" href="/book-a-demo">
                <Button text="Get Started" btn_variant="secondary_btn" />
              </Link>
              <div className="block laptop:hidden">
                <MobileNavigation />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
