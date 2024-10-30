import React from 'react';

function Team() {
  return (
    <div className="team-section bg-[#121417] shadow-md rounded-lg p-6 mb-12">
      <h2 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="team-member text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Ephrem Mamo</h3>
          <p className="text-gray-500">Founder & CEO</p>
        </div>
        <div className="team-member text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Beka Birhanu</h3>
          <p className="text-gray-500">Head of Product</p>
        </div>
        <div className="team-member text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Biruk Tesfaye</h3>
          <p className="text-gray-500">Lead Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
