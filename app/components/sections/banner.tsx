const Banner = ({ className }: { className?: string }) => {
  return (
    <div className={`container mx-auto flex justify-center ${className}`}>
      <img src="/mockInterviews.jpeg" alt="mock interview" />
      <div className="absolute top-1/4 grid place-content-center font-bold text-white">
        <p className="uppercase">Practice</p>
        <p className="indent-1 uppercase">Mock</p>
        <p className="indent-2 uppercase">Interviews</p>
      </div>
    </div>
  );
};

export default Banner;
