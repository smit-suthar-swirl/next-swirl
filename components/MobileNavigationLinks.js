import Link from "next/link";
import Button from "./Button";
import DropdownOneToMany from "../public/assets/images/icons/featuredIcon-1.svg";
import DropdownShoppable from "../public/assets/images/icons/featuredIcon-2.svg";
import DropdownOneToOne from "../public/assets/images/icons/featuredIcon-3.svg";
import { useState } from "react";

const MobileNavigationLinks = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="absolute left-0 top-20 flex flex-col h-screen w-full border-b border-gray-100 bg-white px-5 py-5 shadow-dropdown-shdw backdrop-blur tablet:px-14 z-10">
        <div className="accordion" id="accordionExample">
          <div onClick={() => props.isMobile && props.closeMobileMenu()} className="py-2">
            <Link href="/" className="text-black no-underline">
              <button className="relative flex w-full items-center p-1 text-base font-medium text-black transition" type="button">
                Home
              </button>
            </Link>
          </div>
          <div className="py-2">
            <h2 className="accordion-header mb-0" id="menuOne">
              <button
                className="accordion-button collapsed relative flex w-full items-center p-1 text-base font-medium text-black transition"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOneMenu"
                aria-expanded="true"
                aria-controls="collapseOneMenu"
                id="mobnav"
              >
                Products
              </button>
            </h2>
            <div
              id="collapseOneMenu"
              className="collapse accordion-collapse"
              aria-labelledby="menuOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="grid-flow-rows grid gap-y-2 tablet:p-5">
                  <div>
                    <Link
                      href="/products/livestream-shopping" className="no-underline"
                      onClick={() => props.isMobile && props.closeMobileMenu()}
                    >
                      <div className="grid auto-cols-max grid-flow-col items-center gap-3 p-3 hover:rounded-lg hover:bg-warm-gray-100">
                        <div className="rounded-full bg-warm-gray-200 p-2">
                          <DropdownOneToMany className="scale-75" />
                        </div>
                        <div className="pl-2">
                          <h3 className="text-sm font-semibold desktop:text-lg  text-black">
                            Livestream shopping
                          </h3>
                          <span className="block pt-1 text-xs text-warm-gray-130">
                            Point. Shoot. Inspire{" "}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/products/shoppable-video" className="no-underline"
                      onClick={() => props.isMobile && props.closeMobileMenu()}
                    >
                      <div className="grid auto-cols-max grid-flow-col items-center gap-3 p-3 hover:rounded-lg hover:bg-warm-gray-100">
                        <div className="rounded-full bg-warm-gray-200 p-2">
                          <DropdownShoppable className="scale-75" />
                        </div>
                        <div className="pl-2">
                          <h3 className="text-sm font-semibold desktop:text-lg text-black">
                            Shoppable Video
                          </h3>
                          <span className="block pt-1 text-xs text-warm-gray-130">
                            Breathe life into your products
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/products/product-one-to-one" className="no-underline"
                      onClick={() => props.isMobile && props.closeMobileMenu()}
                    >
                      <div className="grid auto-cols-max grid-flow-col items-center gap-3 p-3 hover:rounded-lg hover:bg-warm-gray-100">
                        <div className="rounded-full bg-warm-gray-200 p-2">
                          <DropdownOneToOne className="scale-75" />
                        </div>
                        <div className="pl-2">
                          <h3 className="text-sm font-semibold desktop:text-lg text-black">
                            One to One
                          </h3>
                          <span className="block pt-1 text-xs text-warm-gray-130">
                            More intimate. More effective
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className="py-2"
          >
            <Link href="/how-it-works" className="text-black no-underline">
              <button
                className="relative flex w-full items-center p-1 text-base font-medium text-black transition"
                type="button"
              >
                How it works
              </button>
            </Link>
          </div>
          <div
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className="py-2"
          >
            <Link href="/pricing" className="text-black no-underline">
              <button
                className="relative flex w-full items-center p-1 text-base font-medium text-black transition"
                type="button"
              >
                Pricing
              </button>
            </Link>
          </div>
          <div className="py-2">
            <h2 className="accordion-header mb-0" id="menuThree">
              <button
                className="accordion-button collapsed relative flex w-full items-center p-1 text-base font-medium text-black transition"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThreeMenu"
                aria-expanded="false"
                aria-controls="collapseThreeMenu"
                id="mobnav"
              >
                Resources
              </button>
            </h2>
            <div
              id="collapseThreeMenu"
              className="collapse accordion-collapse"
              aria-labelledby="menuThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="grid-flow-rows grid gap-y-2 tablet:p-5">
                  <Link
                    href="/partnership-program" className="no-underline"
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                  >
                    <div className="grid auto-cols-max grid-flow-col items-center p-3 hover:rounded-lg hover:bg-warm-gray-300 hover:p-3">
                      <h3 className="text-sm font-semibold desktop:text-lg  text-black no-underline">
                        Partnership Program
                      </h3>
                    </div>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link
            href="/book-a-demo"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <Button
              text="Get Started"
              btn_variant="primary_btn"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNavigationLinks;
