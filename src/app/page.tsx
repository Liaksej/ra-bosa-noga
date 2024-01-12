import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <div className="banner">
            <Image
              src="/img/banner.jpg"
              className="img-fluid"
              alt="К весне готовы!"
              width={1296}
              height={385}
            />
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="preloader">
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <div className="preloader">
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
