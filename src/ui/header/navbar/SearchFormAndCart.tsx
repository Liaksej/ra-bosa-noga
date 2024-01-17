export default function SearchFormAndCart() {
  return (
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
  );
}
