import Image from "next/image";
import url from "../../public/charting.png";

export default function Charting() {
  return (
    <div className="w-full h-full relative border border-grayish-blue-80">
      <Image
        alt="Main chart"
        src={url}
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />
    </div>
  );
}
