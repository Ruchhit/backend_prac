import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, SetJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        SetJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <>
      <h2>{jokes.length}</h2>
      { jokes.map((joke)=>(
        <div key={joke.id}>
            <h2>{joke.id}</h2>
            <h3>{joke.joke}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
