import useAuth from "../../Hooks/useAuth";

const MeetOurTeam = () => {
  const { user } = useAuth()
  // console.log(user);
  
  const team = [
    { image: 'https://i.ibb.co/93wvDR6/trainer1.png', name: 'Jerome Bell', price: '500', role: 'Trainer' },
    { image: 'https://i.ibb.co.com/yRFCBCD/trainer2.png', name: 'Cameron Willi', price: '750', role: 'Trainer' },
    { image: 'https://i.ibb.co.com/nPzzywQ/trainer3.png', name: 'Darrell Steward', price: '800', role: 'Trainer' },
    { image: 'https://i.ibb.co.com/wd82yVV/trainer4.png', name: 'Dianne Russell', price: '900', role: 'Trainer' },
    { image: 'https://i.ibb.co.com/GTRbgw6/trainer5.png', name: 'Cody Fisher', price: '1000', role: 'Trainer' },
    { image: 'https://i.ibb.co.com/BqCp5cT/trainer6.png', name: 'Theresa Webb', price: '1200', role: 'Trainer' },
  ];

  // const handleAddToCart = async (trainer) => {
  //   const { name, price } = trainer;

  //   try {
  //     const response = await fetch('http://localhost:9000/cart', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ name, price }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log('Trainer added to cart:', data);
  //     } else {
  //       console.error('Failed to add trainer to cart');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-400">
          Our gyms team is your biggest asset. Highlight their expertise, passion, and dedication to helping members reach their goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-800 bg-opacity-10 rounded-lg p-8">
        {team.map((member, index) => (
          <div key={index} className="relative h-[300px]">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-lg brightness-75" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-white">{member.role}</p>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
