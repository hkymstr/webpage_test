import React from 'react';

const Racing = () => {
  const races = [
    {
      type: 'Motorcycle',
      event: 'SuperBike Championship',
      date: '2023',
      position: '2nd Place',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=1000',
    },
    {
      type: 'Car',
      event: 'GT3 Series',
      date: '2023',
      position: '1st Place',
      image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1000',
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0b1e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Racing Career
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-purple-400">Recent Achievements</h2>
            {races.map((race, index) => (
              <div
                key={index}
                className="bg-[#12132d] rounded-lg overflow-hidden border border-purple-400/20"
              >
                <img
                  src={race.image}
                  alt={race.event}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-400 font-semibold">{race.type}</span>
                    <span className="text-gray-400">{race.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{race.event}</h3>
                  <p className="text-green-400 font-semibold">{race.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-purple-400">Racing Stats</h2>
            <div className="bg-[#12132d] p-6 rounded-lg border border-purple-400/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Career Podiums</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Motorcycle Racing</span>
                    <span className="text-purple-400 font-bold">15</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-300">Car Racing</span>
                    <span className="text-purple-400 font-bold">12</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Best Lap Times</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Silverstone</span>
                      <span className="text-purple-400">1:52.364</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Nürburgring</span>
                      <span className="text-purple-400">7:32.891</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Suzuka</span>
                      <span className="text-purple-400">2:01.749</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#12132d] p-6 rounded-lg border border-purple-400/20">
              <h2 className="text-xl font-semibold text-white mb-4">Current Season</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Points</span>
                  <span className="text-purple-400 font-bold">245</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Position</span>
                  <span className="text-purple-400 font-bold">2nd</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Races Remaining</span>
                  <span className="text-purple-400 font-bold">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Racing;