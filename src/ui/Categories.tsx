"use client";

import { useGetCategoriesQuery } from "@/lib/redux/services/catalogApi";
import Link from "next/link";

export default function Categories() {
  const { data, isLoading, error } = useGetCategoriesQuery(undefined);

  if (error || isLoading) {
    return null;
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" href="#">
          Все
        </Link>
      </li>
      {data?.map((category: any) => (
        <li className="nav-item" key={category.id}>
          <Link className="nav-link" href="#">
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
