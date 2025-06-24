type Label = {
    category: string;
    name: string;
}

type Ingredient = {
    name: string;
    quantity: string;
};

interface Recipe {
    name: string;
    description: string;
    image?: string;
    labels: Label[];
    ingredients: Ingredient[];
    instructions: string;
}