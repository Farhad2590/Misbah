import img from '../../assets/image1.png'
const Banner = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h3 className="text-5xl font-extrabold mb-4">
            Get body in <span className="font-dancing-script text-6xl">shape</span> & stay healthy
          </h3>
          <p className="text-gray-400 mb-8">
            A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!
          </p>
          <div className="space-x-4">
            <button className="bg-red-500 text-white px-8 py-3 rounded-full">Join Club Now!</button>
            <button className="bg-red-500 text-white px-8 py-3 rounded-full">Download App</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={img} alt="Fitness" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;