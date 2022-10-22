import Layout from "../components/Layout";
import data from "../utils/data";
import ProductItem from "../components/ProductItem";

const Home = () => {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
