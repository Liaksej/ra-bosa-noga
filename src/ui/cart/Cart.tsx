"use client";

import { selectCartList } from "@/lib/redux/features/cart/selectors";
import Link from "next/link";
import { cartActions } from "@/lib/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

export default function Cart() {
  const products = useAppSelector((state) => selectCartList(state));
  const dispatch = useAppDispatch();
  const deleteHook = (id: number) => {
    dispatch(cartActions.removeFromCart(id));
  };

  if (products.length === 0) {
    return (
      <section className="cart">
        <h2 className="text-center">Корзина пуста</h2>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {products[0] &&
            products.map(
              (
                product: {
                  id: number;
                  quantity: number;
                  size: string;
                  price: number;
                  title: string;
                },
                index: number,
              ) => (
                <tr key={index}>
                  <td scope="row">{index + 1}</td>
                  <td>
                    <Link href={`/catalog/${product.id}`}>{product.title}</Link>
                  </td>
                  <td>{product.size}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}руб.</td>
                  <td>{product.price * product.quantity} руб.</td>
                  <td>
                    <button
                      onClick={() => deleteHook(product.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ),
            )}
          <tr>
            <td colSpan={5} className="text-right">
              Общая стоимость
            </td>
            <td>
              {products.reduce(
                (a: number, b: { price: number; quantity: number }) =>
                  a + b.price * b.quantity,
                0,
              )}{" "}
              руб.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
