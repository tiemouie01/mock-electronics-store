import { useData } from "../getData";
import { FaSpinner } from "react-icons/fa";

const App = () => {
  const { data, error, loading } = useData();

  console.log(data);
  console.log(error);
  if (loading)
    return (
      <div className="flex justify-center items-center animate-spin h-dvh">
        <FaSpinner size={50} />
      </div>
    );

  return <h1>Hello World</h1>;
};

export default App;
