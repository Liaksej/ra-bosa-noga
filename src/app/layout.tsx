import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Обувной магазин Bosa Noga",
  description: "Быстрая доставка обуви в Москве и Московской области",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="/">
                  <Image
                    src="/img/header-logo.png"
                    alt="Bosa Noga"
                    width={184}
                    height={59}
                  />
                </a>
                <div className="collapse navbar-collapse" id="navbarMain">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Главная
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/catalog">
                        Каталог
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        О магазине
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contacts">
                        Контакты
                      </a>
                    </li>
                  </ul>
                  <div>
                    <div className="header-controls-pics">
                      <div
                        data-id="search-expander"
                        className="header-controls-pic header-controls-search"
                      />
                      {/* Do programmatic navigation on click to /cart.html */}
                      <div className="header-controls-pic header-controls-cart">
                        <div className="header-controls-cart-full">1</div>
                        <div className="header-controls-cart-menu" />
                      </div>
                    </div>
                    <form
                      data-id="search-form"
                      className="header-controls-search-form form-inline invisible"
                    >
                      <input className="form-control" placeholder="Поиск" />
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className="container bg-light footer">
          <div className="row">
            <div className="col">
              <section>
                <h5>Информация</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="/about" className="nav-link">
                      О магазине
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/catalog" className="nav-link">
                      Каталог
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/contacts" className="nav-link">
                      Контакты
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="col">
              <section>
                <h5>Принимаем к оплате:</h5>
                <div className="footer-pay">
                  <div className="footer-pay-systems footer-pay-systems-paypal" />
                  <div className="footer-pay-systems footer-pay-systems-master-card" />
                  <div className="footer-pay-systems footer-pay-systems-visa" />
                  <div className="footer-pay-systems footer-pay-systems-yandex" />
                  <div className="footer-pay-systems footer-pay-systems-webmoney" />
                  <div className="footer-pay-systems footer-pay-systems-qiwi" />
                </div>
              </section>
              <section>
                <div className="footer-copyright">
                  2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
                  аксессуаров. Все права защищены.
                  <br />
                  Доставка по всей России!
                </div>
              </section>
            </div>
            <div className="col text-right">
              <section className="footer-contacts">
                <h5>Контакты:</h5>
                <a
                  className="footer-contacts-phone"
                  href="tel:+7-495-790-35-03"
                >
                  +7 495 79 03 5 03
                </a>
                <span className="footer-contacts-working-hours">
                  Ежедневно: с 09-00 до 21-00
                </span>
                <a
                  className="footer-contacts-email"
                  href="mailto:office@bosanoga.ru"
                >
                  office@bosanoga.ru
                </a>
                <div className="footer-social-links">
                  <div className="footer-social-link footer-social-link-twitter" />
                  <div className="footer-social-link footer-social-link-vk" />
                </div>
              </section>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
