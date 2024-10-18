import React from 'react'

const Button = (props) => {

  let primary_btn = `text-xs tablet:text-sm laptop:text-base font-medium p-3 laptop:px-5 laptop:py-3 desktop:px-5 desktop:py-3 bg-warm-black-100 text-warm-yellow rounded-100 focus:outline-none shadow-btn-shdw transition duration-300 ease-in-out ${(props.width) ? 'w-full' : ''}`
  let secondary_btn = `text-xs tablet:text-sm laptop:text-base font-medium py-3 px-4 laptop:py-3 laptop:px-5 desktop:px-5 desktop:py-3 bg-warm-yellow text-warm-black-100 rounded-100 focus:outline-none shadow-btn-shdw  ${(props.width) ? 'w-full' : 'w-fit'} `
  let readMore_btn = `text-xs tablet:text-sm laptop:text-lg font-medium text-black`
  let cta_btn = `text-sm laptop:text-lg font-medium p-2 tablet:px-6 tablet:py-3 laptop:px-8 desktop:px-12 desktop:py-5 bg-warm-yellow text-warm-black-100 rounded-100 focus:outline-none shadow-btn-shdw transition duration-300 ease-in-out ${(props.width) ? 'w-full' : 'w-fit'}`
  let pricing_enterprise_btn = `text-xs tablet:text-sm laptop:text-base font-medium p-2 laptop:px-3 laptop:py-2 desktop:px-5 desktop:py-3 bg-warm-black-100 text-warm-yellow ${(props.width) ? 'w-full' : 'w-fit'} rounded-8`
  let growth_and_enterprise_btn = `text-xs tablet:text-sm laptop:text-base font-medium p-2 laptop:px-3 laptop:py-2 desktop:px-5 desktop:py-3 bg-card-1 text-warm-black ${(props.width) ? 'w-full' : 'w-fit'} rounded-8`
  let contactUs_btn = `text-xs tablet:text-sm laptop:text-base font-medium p-2 laptop:px-3 laptop:py-2 desktop:px-5 desktop:py-3 text-black focus:outline-none shadow-btn-shdw transition duration-300 ease-in-out ${(props.width) ? 'w-full' : 'w-fit'} border border-warm-gray-900 bg-opacity-0 rounded-8`
  let blackandwhite_btn = `text-xs tablet:text-sm laptop:text-base font-medium p-2 laptop:px-3 laptop:py-2 desktop:py-3 desktop:px-5 bg-warm-black-100 text-white ${(props.width) ? 'w-full' : 'w-fit'} rounded-8`
  let pricingContactUs_btn = `text-xs tablet:text-sm laptop:text-base font-medium p-2 laptop:px-3 laptop:py-2 desktop:py-3 desktop:px-5 bg-warm-yellow text-warm-black-100 rounded-8 ${(props.width) ? 'w-full' : 'w-fit'}`

  return (
    <>
      <button className={(props.btn_variant == "primary_btn") ? primary_btn : (props.btn_variant == "secondary_btn") ? secondary_btn :
        (props.btn_variant == "cta_btn") ? cta_btn : (props.btn_variant == "pricing_enterprise_btn") ? pricing_enterprise_btn : (props.btn_variant == "growth_and_enterprise_btn") ? growth_and_enterprise_btn : (props.btn_variant == "contactUs_btn") ? contactUs_btn :
          (props.btn_variant == "pricingContactUs_btn") ? pricingContactUs_btn :
            (props.btn_variant == "blackandwhite_btn") ? blackandwhite_btn : readMore_btn}>
        {props.text}
        {props.svg} {(props.arrow_icon) ? <i className="ri-arrow-right-circle-line align-middle text-2xl "></i> : ''}
      </button>
    </>
  )
}

export default Button