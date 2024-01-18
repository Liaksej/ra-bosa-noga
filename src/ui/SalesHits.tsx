"use client";

import { useGetSalesHitsQuery } from "@/lib/redux/services/catalogApi";
import { CatalogItemApiInterface } from "@/lib/types/apiDefinition";

export default function SalesHits() {
  const { data, isLoading, error } = useGetSalesHitsQuery(undefined);

  if (error) {
    return null;
  }

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {isLoading ? (
        <div className="preloader">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : (
        <>
          <div className="row">
            {data?.map((item: CatalogItemApiInterface) => (
              <div className="col-4" key={item.id}>
                <div className="card">
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
    </section>
  );
}
