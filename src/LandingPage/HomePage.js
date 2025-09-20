import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPageLayout from "./LandingPageLayout";

function HomePage() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
     .get("https://fastapi-service-tk85.onrender.com/api/program-pages")
      // .get("http://127.0.0.1:8011/api/program-pages")
      .then((res) => setPrograms(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="border-8 border-gray-300 border-t-8 border-t-blue-500 rounded-full w-20 h-20 animate-spin"></div>
      </div>
    );
  }

  return (
   <LandingPageLayout
  heroTitle={
    <h1 className="text-2xl md:text-6xl font-extrabold leading-tight text-gray-900">
      Welcome to <span className="text-blue-600">Codethinker</span>
    </h1>
  }
  heroSubtitle={
    <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
      Empowering learners with{" "}
      <span className="font-semibold text-blue-500">professional programs</span>{" "}
      and{" "}
      <span className="font-semibold text-blue-500">hands-on projects</span> to
      prepare you for the future.
    </p>
  }
  heroCTA={{ href: "https://codethinkers.org", label: "Visit Our Site" }}
>

      <section className="">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Our Programs
        </h2>

        <div className="p">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-500 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-700 mb-5">{program.description}</p>

                <ul className="list-disc list-inside space-y-2 mb-6">
                  {program.benefits.split("\r\n").map((benefit, index) => (
                    <li
                      key={index}
                      className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-200"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </section>
    </LandingPageLayout>
  );
}

export default HomePage;
