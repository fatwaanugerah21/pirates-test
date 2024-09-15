import { HeartIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ICardComponentProps {
  title: string;
  description?: string;
  rating?: {
    point: number;
    reviewAmt: number;
  };
  location: string;
  tagLine?: string;
  imgSrc: string;
}

const CardComponent: React.FC<ICardComponentProps> = ({ title, description, rating, location, tagLine, imgSrc }) => {
  return (
    <div className={`relative`}>
      <HeartIcon className={`text-white rounded-full p-2 w-9 h-9 absolute right-2 top-2 bg-[rgba(90,90,90,0.3)]`} />
      <Image src={imgSrc} alt="testing" width={500} height={400} className={`rounded-md`} />
      <div className={`relative`}>
        <Image src={imgSrc} alt="testing" layout="fill" className={`rounded-md`} />
      </div>

      <div className={`mt-2`}>
        {!!tagLine && (
          <div className={`row space-x-1`}>
            <StarIcon className={`text-chart-1`} /> <p className={`text-chart-1`}>${tagLine}</p>
          </div>
        )}
        <div className={`row justify-between mt-2`}>
          <h6 className={`font-semibold truncate`}>{title}</h6>
          <div className={`row shrink-0 `}>
            <StarIcon className={`fill-chart-5 stroke-chart-5 w-5 h-5`} />
            <p>{`${rating?.point || "-"}(${rating?.reviewAmt || "0"})`}</p>
          </div>
        </div>
        {!!description && <p className={`truncate`}>{description}</p>}
        <p className={`truncate`}>${location}</p>
      </div>
    </div>
  );
};
export default CardComponent;
