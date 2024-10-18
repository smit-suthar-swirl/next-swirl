import Image from "next/image";
import Link from "next/link";

export const BlogCards = (props) => {
  return (
    <div className="blogCardWrapper">
      <Link href={props.blogLink}>
        <div className="blogCard">
          <div className="blogCardHeader">
            <Image className="blogCardImg" src={props.blogImageSrc} alt={props.blogImageAlt} width={500} height={500} />
          </div>
          <div className="blogCardBody">
            <p className="py-2">{props.blogDetails}</p>
            <p className="text-base laptop:text-lg font-bold">{props.blogTitle}</p>
          </div>

          <style jsx>{`
              .blogCardWrapper{
                width: 25rem;
                height: auto;
                box-sizing: border-box;
              }
              .blogCard {
                border-radius: 32px;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                background-color: white;
                width: 100%;
                height: 100%;
              }
      
              .blogCardHeader {
                border-radius: 32px;
                overflow: hidden;
              }
      
              .blogCardImg {
                width: 100%;
                height: 100%;
              }
      
              .blogCardBody {
                padding: 20px;
              }
            `}</style>
        </div>
      </Link>
    </div>
  )
}
