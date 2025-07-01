'use client';
import { useEffect, useRef } from 'react';
import Card from '@/components/Card';
import { dummyRecipes } from '@/constants/examples';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition && scrollRef.current) {
      scrollRef.current.scrollTop = parseInt(savedScrollPosition, 10);
      sessionStorage.removeItem('scrollPosition');
    }
  });

  const handleCardClick = () => {
    if (scrollRef.current) {
      sessionStorage.setItem(
        'scrollPosition',
        scrollRef.current.scrollTop.toString(),
      );
    }
  };

  return (
    <div
      ref={scrollRef}
      className="w-full gap-4 p-4 h-fit max-h-screen flex flex-wrap overflow-y-auto"
    >
      {dummyRecipes.map((card, index) => {
        return (
          <Card
            key={index}
            id={card.id}
            name={card.name}
            image={card.image}
            labels={card.labels}
            handleCardClick={handleCardClick}
          />
        );
      })}
    </div>
  );
}
