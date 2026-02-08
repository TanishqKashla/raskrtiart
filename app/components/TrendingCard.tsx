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
    <div
      className="bg-[#EFE6D8] flex flex-col"
      style={{ width: "267.31px", height: "426.02px" }}
    >
      {/* Image wrapper */}
      <div className="flex items-center justify-center h-[321.7px] bg-[#CFC7B8]">
        <Image
          src={image}
          alt={title}
          width={267.31}
          height={321.7}
          className="shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 px-3 py-3 bg-[#FBF4EC]">
        <div>
          <h3
            className="text-[18.65px] font-medium mb-1"
            style={{ fontFamily: "Futura PT" }}
          >
            {title}
          </h3>

          <div
            className="flex justify-between text-[15.54px] font-book text-[#333]"
            style={{ fontFamily: "Futura PT" }}
          >
            <span>Artist - {artist}</span>
            <span>{size}</span>
          </div>
        </div>

        {/* Price */}
        <div
          className="bg-[#9C3D14] text-white text-center py-2 mt-3 text-[15.54px] font-book cursor-pointer"
          style={{ fontFamily: "Microsoft Sans Serif" }}
        >
          ₹ {price.toLocaleString()} INR
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
