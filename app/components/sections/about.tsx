import React from "react";

const About = ({ className }: { className?: string }) => (
  <div
    className={`container clear-both mx-auto flex flex-row justify-center ${className}`}
  >
    <div className="block w-1/2 rounded-lg bg-white text-center shadow-lg">
      <div className="border-b border-gray-300 bg-gray-100 py-3 px-6">
        About Us
      </div>
      <div className="p-6">
        <p className="mb-4 text-base text-gray-700">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
    <div className="block w-1/2 rounded-lg bg-white text-center shadow-lg">
      <div className="border-b border-gray-300 bg-gray-100 py-3 px-6">
        Creators
      </div>
      <div className="p-6">
        <p className="mb-4 text-base text-gray-700">
          <ul className="bp3-list-unstyled">
            <li>Artharva</li>
            <li>Shion</li>
            <li>Scotty</li>
            <li>J</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
);

export default About;
