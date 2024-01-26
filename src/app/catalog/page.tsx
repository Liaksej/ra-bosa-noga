import Search from "@/ui/catalog/Search";
import Catalog from "@/ui/Catalog";

export default function CatalogPage() {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <Search />
      <Catalog />
    </section>
  );
}
