import Image from "next/image";

const Card = ({ toggle }) => {
  return (
    <div className="">
      {toggle === "One to Many"
        ? [
          <Image
            src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/book-a-demo-one-to-many.webp"
            alt=""
            height="734"
            width="414"
            key=""
          />,
        ]
        : toggle === "Shoppable Video"
          ? [
            <Image
              src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/index-shoppableVid.webp"
              alt=""
              height="600"
              width="600"
              key=""
            />,
          ]
          : [
            <Image
              src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/websites/one-to-one-hero.webp"
              alt=""
              height="600"
              width="600"
              key=""
            />,
          ]}
    </div>
  );
};
export default Card;
