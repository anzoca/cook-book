/* 
    Card component for displaying content in a card format.
*/
'use client';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ id, name, image, labels, handleCardClick }: CardType) => {
  const firstThreeLabels = labels.slice(0, 3);

  return (
    <Link
      href={`/recipe/${id}`}
      className="no-underline"
      onClick={handleCardClick}
    >
      <div className="flex flex-col gap-1 justify-center items-center w-xs h-60 p-4 bg-amber-100 shadow-md rounded-lg">
        <h2 className="max-h-[28px] text-xl text-center text-wrap font-semibold">
          {name}
        </h2>
        {image && (
          <Image
            src={image}
            alt="dish image"
            width={200}
            height={200}
            className={'w-[200px] h-auto rounded-lg'}
          />
        )}
        <div className="flex w-full justify-evenly">
          {firstThreeLabels.map((label, index) => {
            return (
              <p key={`${label.name}-${index}`} className="mt-auto">
                {label.name}
              </p>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Card;
