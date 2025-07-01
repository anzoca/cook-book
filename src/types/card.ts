interface CardType {
    id: string;
    name: string;
    image?: string;
    description?: string;
    labels: Label[];
    handleCardClick: () => void;
}