import Header from "./components.js/Header";
import "./App.css";
import {useEffect, useState, useCallback} from "react";

function App() {
  const [painters, setPainters] = useState([]);

  const getPainters = useCallback(async () => {
    try {
      const response = await fetch("/api/painters/");
      const json = await response.json();
      setPainters(json.data);
    } catch (err) {
      console.log(err);

    }
  }, []);
  
  useEffect(() => {
    getPainters();
  }, [getPainters]);

  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
