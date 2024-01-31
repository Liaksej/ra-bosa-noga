"use client";

import { useGetItemQuery } from "@/lib/redux/services/catalogApi";
import clsx from "clsx";
import { useState } from "react";
import Table from "@/ui/item/Table";
import Sizes from "@/ui/item/Sizes";
import Quantity from "@/ui/item/Quantity";

export default function ItemPage({ params }: { params: { id: number } }) {
  const [chosenSize, setChosenSize] = useState("");
  const { data, isLoading, error } = useGetItemQuery(params.id);

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
                <Quantity />
              </div>
              {data?.sizes.some(
                (size: { size: string; available: boolean }) => size.available,
              ) && (
                <button
                  disabled={chosenSize === ""}
                  className="btn btn-danger btn-block btn-lg"
                >
                  В корзину
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
