import React, {useEffect, useState} from "react";
import axios from "axios";
import "./items.css"


function Main() {

    const [items, setItems] = useState("");
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("http://127.0.0.1:8010/items")
        .then((res) => setItems(res.data.items))
        .catch((err) => console.error("error:", err))
        // .finally(() => setLoading(false));
    }, []);

    // let content;
    // if (loading){
    //     content = <div className="loader"></div>;
    // } else{
    //     <p>{message}</p>;
    // };

    return (
        <div className="main" >
        <h1>this is awesome</h1>
         <p>{items}</p>
        </div>
       
    );

};

export default Main;