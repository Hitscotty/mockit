const Banner = ({ className }) => {
  return (
    <div className={`container mx-auto flex justify-center ${className}`}>
      <img src="/mockInterviews.jpeg" alt="mock interview" />
      <div className="grid place-content-center absolute top-1/4 text-white font-bold">
        <p className="uppercase">Practice</p>
        <p className="uppercase indent-1">Mock</p>
        <p className="uppercase indent-2">Interviews</p>
      </div>
    </div>
  );
};

export default Banner;
