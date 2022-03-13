const About = ({ className }) => (
  <div
    className={`container clear-both mx-auto flex flex-row justify-center ${className}`}
  >
    <div className="block rounded-lg shadow-lg bg-white text-center w-1/2">
      <div className="py-3 px-6 border-b border-gray-300 bg-gray-100">
        About Us
      </div>
      <div className="p-6">
        <p className="text-gray-700 text-base mb-4">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
    <div className="block rounded-lg shadow-lg bg-white text-center w-1/2">
      <div className="py-3 px-6 border-b border-gray-300 bg-gray-100">
        Creators
      </div>
      <div className="p-6">
        <p className="text-gray-700 text-base mb-4">
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
