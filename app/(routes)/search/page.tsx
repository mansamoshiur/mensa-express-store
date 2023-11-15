import getProducts from "@/actions/get-products";

const SearchPage = async () => {
  const products = await getProducts({});
  return <div>SearchPage</div>;
};

export default SearchPage;
