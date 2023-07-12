import { Button } from '@/components/ui/button';
import { useSingleProductQuery } from '@/redux/features/products/productApi';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useSingleProductQuery(Number(id));

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img className="w-[50%] mx-auto py-5" src={product?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.title}</h1>
          <p className="text-sm">
            <span className="text-xl">Description</span> :{' '}
            {product?.description}
          </p>
          <p className="text-xl">Category : {product?.category}</p>
          <p className="text-xl">
            Rating : {product?.rating?.rate} ({product?.rating?.count})
          </p>

          <Button>Add to cart</Button>
        </div>
      </div>
    </>
  );
}
