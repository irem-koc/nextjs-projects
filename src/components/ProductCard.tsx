import Image from "next/image";

type Props = {};

const ProductCard = ({ img, title, price, desc, rating }: ProductCardProps) => {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          width={200}
          height={300}
          alt={title}
          src={img}
          className="w-full h-auto"
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>Rating:{rating}</div>
        <div className="font-bold flex gap-4">
          {price}
          <del className="text-gray-500 font-normal">100</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
