import { useData } from "../getData";

const App = () => {
  const { data } = useData('https://fakestoreapi.com/products/category/electronics');
  console.log(data);

  return <h1>Hello World</h1>;
};

export default App;
