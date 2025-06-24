import Card from '@/components/Card';

const dummyCards: CardType[] = [
  {
    name: 'Sample Card',
    image: 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg',
    labels: [
      { category: 'Category1', name: 'Label1' },
      { category: 'Category2', name: 'Label2' },
      { category: 'Category3', name: 'Label3' },
    ],
  },
  {
    name: 'Sample Card 2',
    image: 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg',
    labels: [
      { category: 'Category1', name: 'Label1' },
      { category: 'Category2', name: 'Label2' },
    ],
  },
  {
    name: 'Sample Card 3',
    image: 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg',
    labels: [],
  },
];

export default function Home() {
  return (
    <div>
      <main className="flex">
        <div>Content</div>
        <div>
          {dummyCards.map((card, index) => {
            return (
              <Card
                key={index}
                name={card.name}
                image={card.image}
                labels={card.labels}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
