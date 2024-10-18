import Script from 'next/script'

const ShowreelShoppingVideo = () => {
    return (
        <>
            <section id="show-reels" className="px-5 py-6 desktop:px-28 laptop:px-14 tablet:px-7">
                <div className="laptop:container container-fluid mx-auto">
                    <div className="swirl-short-videos-M" data-playlist="PMn0lH" data-playlist-name="HomePage"></div>
                    <div id="swirl-short-videos" data-code="joaulxyo" data-sw="0"></div>
                </div>
            </section>
            <Script strategy="lazyOnload" src="https://code.jquery.com/jquery-3.7.0.min.js"></Script>
            <Script strategy="lazyOnload" src="https://apigoswirl.com/short_video/v3/multiple_page/swirl-short-videos-v3.9.min.js"></Script>
        </>
    )
}
export default ShowreelShoppingVideo;