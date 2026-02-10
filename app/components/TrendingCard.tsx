import Image from "next/image";

interface TrendingCardProps {
  image: string;
  title: string;
  artist: string;
  size: string;
  price: number;
}

const TrendingCard = ({
  image,
  title,
  artist,
  size,
  price,
}: TrendingCardProps) => {
  return (
    <div className="flex flex-col gap-3 mb-3 md:mb-0">
      {/* Image wrapper */}
      <div className="aspect-[4/5] w-full relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between">
        <div>
          <h3
            className="text-[18.65px] font-medium mb-1 leading-snug"
            style={{ fontFamily: "Futura PT" }}
          >
            {title}
          </h3>

          <div
            className="flex justify-between text-[16px] font-book text-[#333]"
            style={{ fontFamily: "Futura PT" }}
          >
            <span className="hidden md:inline-block">Artist - {artist}</span>
            <span>{size}</span>
          </div>
        </div>

        {/* Price */}
        <div
          className="bg-[#9C3D14] text-white text-center py-2 mt-3 text-[16px] font-book cursor-pointer"
          style={{ fontFamily: "Microsoft Sans Serif" }}
        >
          ₹ {price.toLocaleString()} INR
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
