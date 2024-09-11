import run from '../../assets/run.jpg'

const RunExtraMile = () => {
  return (
    <section className="bg-gray-800 rounded-lg py-16 mb-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 px-8">
          <h2 className="text-4xl font-bold mb-4">Run an Extra Mile Easily</h2>
          <p className="text-gray-400 mb-8">
            We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts.
          </p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-full">Join Now</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={run} alt="Running" className="w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default RunExtraMile;