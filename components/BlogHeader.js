import Image from "next/image";

const BlogHeader = (props) => {

    return (
        <>
            <div className="text-center space-y-10">
                <h4 className="text-warm-gray-700">{props.published}</h4>
                <h1 className="laptop:text-6xl text-3xl">{props.blogTitle}</h1>
                <h4 className="text-warm-gray-700 tablet:text-xl text-lg">{props.summary}</h4>

                <figure className="">
                    <Image src={props.blogImg} className="mx-auto" loading="lazy" width={800} height={600} alt="" />
                    <figcaption className="pt-5">{props.caption}</figcaption>
                </figure>
                <blockquote className="pl-5 border-l-4 border-l-warm-cream-350 text-left text-lg font-normal">{props.blockquote}</blockquote>
            </div>
        </>
    )
}

export default BlogHeader