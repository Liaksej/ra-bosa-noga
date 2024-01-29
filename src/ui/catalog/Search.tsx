"use client";

import { useDispatch } from "react-redux";
import { FormEvent } from "react";
import { searchActions } from "@/lib/redux/features/search/searchSlice";

export default function Search() {
  const dispatch = useDispatch();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchActions.searchQuery(event.currentTarget.search.value));
  };

  return (
    <form onSubmit={submitHandler} className="catalog-search-form form-inline">
      <input className="form-control" name="search" placeholder="Поиск" />
    </form>
  );
}
