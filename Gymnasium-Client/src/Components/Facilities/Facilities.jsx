// components/Facilities.jsx


const Facilities = () => {
  const facilities = [
    { image: 'https://i.ibb.co.com/vL50Wjr/Facilites1.png', title: 'Lockers and towels', description: 'Clean, safe and sanitary environment to keep your stuffs.' },
    { image: 'https://i.ibb.co.com/QFy4pYL/Facilites2.png', title: 'Free Wifi', description: 'Stay connected to the world while you work yourself out.' },
    { image: 'https://i.ibb.co.com/Hz2JYvf/Facilites3.png', title: 'Complimentary Juice', description: 'We make sure that you stay hydrated so that you can push yourself to the limit.' },
    { image: 'https://i.ibb.co.com/1vMg2Cv/Facilites4.png', title: 'Hightech Gym', description: 'Build yourself with the best available equipments in the market.' },
    { image: 'https://i.ibb.co.com/t81xdGq/Facilites5.png', title: 'Changing Room', description: 'Sanitary changing room with proper privacy.' },
    { image: 'https://i.ibb.co.com/fQDR0nm/Facilites6.png', title: 'Personal Trainer', description: 'You benefit from the monthly care of a Personal Trainer.' },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Facilities</h2>
        <p className="text-gray-400">
          Crafting compelling descriptions of your gym's facilities is essential to attract members and highlight your unique selling points.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <div key={index} className="flex items-start">
            <img src={facility.image} alt={facility.title} className="w-1/3 rounded-lg mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
              <p className="text-gray-400">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;