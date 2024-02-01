import dynamic from "next/dynamic";
import Order from "@/ui/cart/Order";

const Cart = dynamic(() => import("@/ui/cart/Cart"), { ssr: false });

export default function CartPage() {
  return (
    <>
      <>
        <Cart />
        <Order />
      </>
    </>
  );
}
