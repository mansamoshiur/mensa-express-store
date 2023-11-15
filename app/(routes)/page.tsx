import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductsList from "@/components/products-list";
import Container from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div>
{/*         <Banner /> */}
        <ProductsList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
