import Image from "next/image";
import url from "../../public/depth.png";

export default function DepthChart() {
  return (
    <section className="h-full w-full border border-grayish-blue-80">
      <header className="flex flex-row items-center h-6 px-4 border-b border-grayish-blue-80 bg-ct-header">
        <h2 className="text-tiny uppercase text-ct-label-white">Depth Chart</h2>
      </header>

      <div className="w-full h-depthChart relative">
        <Image
          alt="Depth chart"
          src={url}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      </div>
    </section>
  );
}
