import React, {useEffect, useState} from "react";
import axios from "axios";

import "./program.css"

function Program() {
    const [programs, setProgrm] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect( () => {
        axios.get("http://127.0.0.1:8011/api/program-pages")
        .then((res) => setProgrm(res.data))
        .catch((err) => console.error("error",err))
        .finally(() => setLoading(false));
    }, []);

    let  content;

    if (loading){
        content = <div className="loader"></div>
    } else {
        content = programs.map((program) => (
            <div key={program.id} className="program-card">
               <h2> {program.title}</h2>
                <p> {program.description}</p>
                

        <ul>
          {program.benefits
            .split("\r\n")
            .map((benefit, index) => <li key={index}>{benefit}</li>)}
        </ul>
        <a
          href="https://codethinkers.org"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          Back to Codethinkers 
        </a>
            </div>
            
        )
    )
    };
     
    return (
        <div> 
        <p>{content}</p>
        </div>
       
    )


};

export default Program;