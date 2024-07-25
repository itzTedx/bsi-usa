import Explore from "@/components/HeadAnim";
import About from "./_components/about";
import Billboard from "./_components/billboard";
import Categories from "./_components/categories";
import Experience from "./_components/experience";
import Products from "./_components/products";

export default function Home() {
  return (
    <main>
      <Billboard />
      <About />
      <Explore head="EXPLORE OUR" text="Products" />
      <Categories />
      <Experience />
      <Products />
    </main>
  );
}
