"use client";

import { useGetItemQuery } from "@/lib/redux/services/catalogApi";
import { ReactNode, useState } from "react";
import Table from "@/ui/item/Table";
import Sizes from "@/ui/item/Sizes";
import Quantity from "@/ui/item/Quantity";
import { cartActions } from "@/lib/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/hooks";

export default function ItemPage({ params }: { params: { id: number } }) {
  const [chosenSize, setChosenSize] = useState("");
  const [amount, setAmount] = useState(1);

  const { data, isLoading, error } = useGetItemQuery(params.id);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const addToCardHandler = () => {
    if (chosenSize !== "") {
      dispatch(
        cartActions.addToCart({
          id: data.id,
          size: chosenSize,
          quantity: amount,
          price: data.price,
          title: data.title,
        }),
      );
      router.push("/cart");
    }
  };

  return (
    <section className="catalog-item">
      {isLoading ? (
        <div className="preloader">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : (
        <>
          <h2 className="text-center">{data?.title}</h2>
          <div className="row">
            <div className="col-5">
              <img src={data?.images[0]} className="img-fluid" alt="" />
            </div>
            <div className="col-7">
              <Table data={data} />
              <div className="text-center">
                <Sizes
                  sizes={data.sizes}
                  chosenSize={chosenSize}
                  setChosenSize={setChosenSize}
                />
                <AvailabilityHOC sizes={data.sizes}>
                  <Quantity amount={amount} setAmount={setAmount} />
                </AvailabilityHOC>
              </div>
              <AvailabilityHOC sizes={data.sizes}>
                <button
                  disabled={chosenSize === ""}
                  onClick={addToCardHandler}
                  className="btn btn-danger btn-block btn-lg"
                >
                  В корзину
                </button>
              </AvailabilityHOC>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

function AvailabilityHOC({
  children,
  sizes,
}: {
  children: ReactNode;
  sizes: { size: string; available: boolean }[];
}) {
  return (
    sizes.some(
      (size: { size: string; available: boolean }) => size.available,
    ) && children
  );
}
