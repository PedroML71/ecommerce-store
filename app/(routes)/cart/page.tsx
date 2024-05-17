import { FC } from "react";
import Container from "@/components/ui/container";

import CartList from "./components/cart-list";

interface CartPageProps {}

const CartPage: FC<CartPageProps> = ({}) => {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <CartList />
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
