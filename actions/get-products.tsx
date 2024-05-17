import qs from "query-string";
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  offset?: number;
  limit?: number;
}

const getProducts = async (
  query: Query
): Promise<{ products: Product[]; pagination: { total: number } }> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
      offset: query.offset,
      limit: query.limit,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
