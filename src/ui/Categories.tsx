"use client";

import { useGetCategoriesQuery } from "@/lib/redux/services/catalogApi";
import Link from "next/link";
import { CatalogCategoryApiInterface } from "@/lib/types/apiDefinition";
import { MutableRefObject, MouseEvent, Dispatch } from "react";

export default function Categories({
  categoryId,
}: {
  categoryId: Dispatch<null | number>;
}) {
  const { data, isLoading, error } = useGetCategoriesQuery(undefined);

  if (error || isLoading) {
    return null;
  }

  const categoryHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    categoryId(event.currentTarget.id ? Number(event.currentTarget.id) : null);
  };
  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <button onClick={categoryHandler} className="nav-link">
          Все
        </button>
      </li>
      {data?.map((category: CatalogCategoryApiInterface) => (
        <li className="nav-item" key={category.id}>
          <button
            onClick={categoryHandler}
            className="nav-link"
            id={category.id.toString()}
          >
            {category.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
