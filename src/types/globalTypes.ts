export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: boolean;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number;
}
