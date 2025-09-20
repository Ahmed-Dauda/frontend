import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function LandingPageLayout({ children, heroTitle, heroSubtitle, heroCTA }) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-blue-50 text-black py-24 px-4 text-center mt-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {heroTitle}
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          {heroSubtitle}
        </p>
        {heroCTA && (
          <a
            href={heroCTA.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              {heroCTA.label}
            </button>
          </a>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 py-12 max-w-7xl mx-auto w-full">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
