import { FC } from "react";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

interface pageProps {}

const HomePage: FC<pageProps> = async ({}) => {
  const billboard = await getBillboard("9ebed908-e20e-4d7b-9cff-8d3c08697c03");
  const response = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={response.products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
