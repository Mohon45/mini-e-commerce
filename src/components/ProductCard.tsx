import { IProduct } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hook';
import { addToCart } from '@/redux/features/cart/cartSlice';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const dispatch = useAppDispatch();

  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart(product));
    toast({
      description: 'Product Add to Cart',
    });
  };
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/product-details/${product.id}`} className="w-full">
          <img
            className="h-[200px] mx-auto"
            src={product?.image}
            alt="product"
          />
          <h1 className="text-xl font-semibold">{product?.title}</h1>
        </Link>

        <p>Rating: {product?.rating?.rate}</p>
        <p className="text-sm">Availability: In stock</p>
        <p className="text-sm">Price: {product?.price}</p>
        <Button variant="default" onClick={() => handleAddProduct(product)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
