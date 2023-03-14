import { Navbar, Footer } from "@/components/shared";
import { Hero, NewProducts } from "@/components/Home";
import { fewProduct } from "./api/hello";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

interface ProductProps {
  featuredProducts: ProductType[];
}

const index = ({ featuredProducts }: ProductProps) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewProducts content={featuredProducts} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  let featuredProducts: ProductType[];
  try {
    featuredProducts = await fewProduct(5);
  } catch (err) {
    throw err;
  }
  return { props: { featuredProducts } };
}

export default index;
