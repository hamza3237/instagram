// Profiles.jsx
"use client"; // Required for components using client-side interactivity

import React from 'react';
import Image from 'next/image';
import img1 from '../../public/profile1.jpg'
import img2 from '../../public/profile2.jpg'
import img3 from '../../public/profile3.jpg'
import img4 from '../../public/profile4.jpg'
import img5 from '../../public/profile5.jpg'
import img6 from '../../public/profile6.jpg'
import img7 from '../../public/profile7.jpg'
import img8 from '../../public/profile8.jpg'
import img9 from '../../public/profile9.jpg'
import img10 from '../../public/profile10.jpg'
import img11 from '../../public/profile11.jpg'
import img12 from '../../public/profile12.jpg'
import img13 from '../../public/profile13.jpg'
import img14 from '../../public/profile14.jpg'
import img15 from '../../public/profile15.jpg'
import img16 from '../../public/profile16.jpg'

export default function Profiles() {
  const profilesData = [
    { image: img1, heading: 'Profile 1' },
    { image: img2, heading: 'Profile 2' },
    { image: img3, heading: 'Profile 3' },
    { image: img4, heading: 'Profile 4' },
    { image: img5, heading: 'Profile 5' },
    { image: img6, heading: 'Profile 6' },
    { image: img7, heading: 'Profile 7' },
    { image: img8, heading: 'Profile 8' },
    { image: img9, heading: 'Profile 9' },
    { image: img10, heading: 'Profile 10' },
    { image: img11, heading: 'Profile 11' },
    { image: img12, heading: 'Profile 12' },
    { image: img13, heading: 'Profile 13' },
    { image: img14, heading: 'Profile 14' },
    { image: img15, heading: 'Profile 15' },
    { image: img16, heading: 'Profile 16' },
  ];

  return (
    <div>
      <div className=' my-2   flex flex-row gap-[20px] overflow-x-auto scroll-m-10 py-4 scroll-container'>
        {profilesData.map((profile, index) => (
          <div key={index} className='flex-shrink-0 sm:w-[60px] w-[76px]'>
            <div className='border rounded-full overflow-hidden shadow-xl mb-2'>
              <Image
                src={profile.image}
                alt={profile.heading}
                width={150}
                height={150}
                className='rounded-full object-cover overflow-hidden'
              />
            </div>
            <h3 className='text-center text-xs'>{profile.heading}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
