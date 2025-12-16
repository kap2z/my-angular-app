export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  cookingTimeMinutes: number;
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl?: string;
}
