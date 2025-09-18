import React, {useEffect, useState} from "react";
import axios from "axios"
import "./App.css"
import Main from "./main";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true); // roller state

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8010/test")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false)); // stop roller
  }, []);

  let content;
  if (loading) {
    content = <div className="loader"></div>; // show roller while loading
  } else {
    content = <p>{message}</p>; // show message after loading
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
     <Main />
      <h1>FastAPI says:</h1>
      {content}
    </div>
  );
}

export default App;
