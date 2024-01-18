"use client";

import { useGetItemsQuery } from "@/lib/redux/services/catalogApi";
import Categories from "@/ui/Categories";

export default function Catalog() {
  const { data, isLoading, error } = useGetItemsQuery(undefined);

  if (error) {
    return null;
  }

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {isLoading ? (
        <div className="preloader">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : (
        <>
          <Categories />
          <div className="row">
            {data?.map((item: any) => (
              <div className="col-4" key={item.id}>
                <div className="card catalog-item-card">
                  <img
                    src={item.images[0]}
                    className="card-img-top img-fluid"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{item.price} руб.</p>
                    <a href="#" className="btn btn-outline-primary">
                      Заказать
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      ;
    </section>
  );
}
