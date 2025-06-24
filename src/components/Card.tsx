/* 
    Card component for displaying content in a card format.
*/

const Card = ({ name, image, labels }: CardType) => {
  const firstThreeLabels = labels.slice(0, 3);
  return (
    <div className="flex flex-col justify-items-center items-center bg-amber-100 shadow-md rounded-lg p-6 min-w-xs max-w-sm min-h-60 max-h">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="my-8">Image</p>
      <div>
        {firstThreeLabels.map((label) => {
          return <p className="mt-auto">{label.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Card;
