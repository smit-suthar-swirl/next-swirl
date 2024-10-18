const FeaturedCard = (props) => {
    let cream = 'rounded-32 desktop:py-12 desktop:px-10 laptop:px-5 laptop:py-6 p-5 box-border h-full bg-warm-gray-250 text-black'
    let black = 'rounded-32 desktop:p-10 laptop:p-6 p-5 box-border h-full bg-warm-gray-400 text-white'
    let white = 'rounded-32 desktop:py-12 desktop:px-10 laptop:px-5 laptop:py-6 p-5 box-border h-full bg-white text-black'

    return (

        <div className={(props.bg_color == "black") ? black : (props.bg_color == "white") ? white : (props.bg_color == "cream") ? cream : " " || (props.borderColor == "cream") ? "border solid border-warm-cream-50 rounded-40 desktop:py-10 desktop:px-12 tablet:px-6 tablet:py-5 p-5 box-border h-full text-black" : ""}>
            <div className="flex gap-x-8">
                <div>
                    {props.icon}
                </div>
                <div>
                    <h4 className='desktop:text-3xl laptop:text-xl text-lg font-bold' > {props.title}</h4>
                    <p className='desktop:text-lg laptop:text-base text-sm font-medium pt-3'>{props.content}</p>
                </div>
            </div>
        </div >

    )
}

export default FeaturedCard