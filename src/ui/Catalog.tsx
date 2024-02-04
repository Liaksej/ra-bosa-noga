"use client";

import { useGetItemsQuery } from "@/lib/redux/services/catalogApi";
import Categories from "@/ui/Categories";
import { ReactNode, useState } from "react";
import { RootState } from "@/lib/redux/store";
import { selectSearchQuery } from "@/lib/redux/features/search/selectors";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/lib/redux/hooks";
import Preloader from "@/ui/Preloader";
import Error from "@/ui/Error";

export default function Catalog({ children }: { children: ReactNode }) {
  const [offset, setOffset] = useState(0);
  const [category, setCategory] = useState<number | null>(null);
  const searchQuery = useAppSelector((state: RootState) =>
    selectSearchQuery(state),
  );
  const { data, isLoading, error, refetch } = useGetItemsQuery({
    offset: offset,
    categoryId: category,
    q: searchQuery,
  });

  if (error) {
    return (
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        {children}
        <Categories categoryId={setCategory} setOffset={setOffset} />
        <Error refetch={refetch} />
      </section>
    );
  }

  if (data && data.length === 0 && searchQuery) {
    return (
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        {children}
        <Categories categoryId={setCategory} setOffset={setOffset} />
        <h4 className="text-center">Товары не найдены</h4>
      </section>
    );
  }

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {children}
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Categories categoryId={setCategory} setOffset={setOffset} />
          <div className="row g-4 mb-4">
            {data?.map((item: any) => (
              <div className="col-4" key={item.id}>
                <div className="card h-100 catalog-item-card">
                  <Image
                    src={item.images[0]}
                    width={300}
                    height={300}
                    className="image-container card-img-top img-fluid"
                    alt={item.title}
                    objectFit="contain"
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="mt-auto">
                      <p className="card-text">{item.title}</p>
                      <p className="card-text">{item.price} руб.</p>
                      <Link
                        href={`/catalog/${item.id}/`}
                        className="btn btn-outline-primary"
                      >
                        Заказать
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {data.length >= offset + 6 && (
            <div className="text-center">
              {isLoading && <Preloader />}
              <button
                type="button"
                aria-disabled={isLoading}
                disabled={isLoading}
                onClick={() => setOffset((prev) => prev + 6)}
                className="btn btn-outline-primary"
              >
                Загрузить ещё
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
