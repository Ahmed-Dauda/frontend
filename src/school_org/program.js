import React, {useEffect, useState} from "react";
import axios from "axios";
import "../App.css"
import "./program.css"


function Program() {
    const [programs, setProgrm] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect( () => {
        // axios.get("https://fastapi-service-tk85.onrender.com/api/program-pages")
        axios.get("http://127.0.0.1:8011/api/program-pages")
        .then((res) => setProgrm(res.data))
        .catch((err) => console.error("error",err))
        .finally(() => setLoading(false));
    }, []);

    let  content;

    if (loading){
        content = <div className="loader-container">
              <div className="loader"></div>
                  </div> 
    } else {
        content = programs.map((program) => (
  <div
    key={program.id}
    className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-3xl mx-auto hover:shadow-xl transition-shadow duration-300"
  >
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h2>
    <p className="text-gray-700 mb-6">{program.description}</p>

    <ul className="list-disc list-inside space-y-2 mb-6">
      {program.benefits.split("\r\n").map((benefit, index) => (
        <li key={index} className="text-gray-600 leading-relaxed">
          {benefit}
        </li>
      ))}
    </ul>

    <a
      href="https://codethinkers.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="bg-blue-300 hover:bg-blue-700 w-small text-white font-semibold py-3 px-6  shadow-md hover:shadow-lg transition-all duration-200">
        Back to Codethinkers
      </button>
    </a>
  </div>
))

    
    };
     
    return (
        <div> 
        <p>{content}</p>
        </div>
       
    )


};

export default Program;