"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectCartList } from "@/lib/redux/features/cart/selectors";
import { useSendOrderMutation } from "@/lib/redux/services/catalogApi";
import { cartActions } from "@/lib/redux/features/cart/cartSlice";
import Cart from "@/ui/cart/Cart";
import Preloader from "@/ui/Preloader";

export default function Order() {
  const products = useAppSelector((state) => selectCartList(state));
  const [sendOrder, { isSuccess, isLoading, reset }] = useSendOrderMutation();
  const dispatch = useAppDispatch();

  const submitHandler = async (formData: FormData) => {
    const order = {
      owner: {
        phone: formData.get("phone"),
        address: formData.get("address"),
      },
      items: products.map((item) => ({
        id: item.id,
        price: item.price,
        count: item.quantity,
        size: item.size,
      })),
    };
    const result = await sendOrder(order);
    if (result.hasOwnProperty("data")) {
      dispatch(cartActions.reset());
    }
    if (result.hasOwnProperty("error")) {
      alert("Произошла ошибка");
    }
  };

  if (products.length === 0) {
    if (isSuccess) {
      return (
        <section className="order">
          <h2 className="text-center">Заказ оформлен</h2>
        </section>
      );
    }
    return <Cart />;
  }

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Cart />
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
          <form action={submitHandler} className="card-body">
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Ваш телефон"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Адрес доставки</label>
              <input
                className="form-control"
                id="address"
                name="address"
                placeholder="Адрес доставки"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreement"
                name="agreement"
              />
              <label className="form-check-label" htmlFor="agreement">
                Согласен с правилами доставки
              </label>
            </div>
            <button type="submit" className="btn btn-outline-secondary">
              Оформить
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
