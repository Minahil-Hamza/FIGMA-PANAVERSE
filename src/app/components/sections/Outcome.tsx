import React from 'react';
import Image from 'next/image';
import Wrapper from '@/app/components/shared/Wrapper';

const outComePoint = [
  "Product Ownership",
  "Freelancing",
  "Global Marketing by DAO",
  "Boosting Economy."
];

const Outcome = () => {
  return (
    <section className='mt-16 md:mt-28'>
      <Wrapper>
        <div className='flex gap-x-8 items-center flex-col-reverse md:flex-row'>
          {/* Left Image */}
          <div className='flex-1'>
            <Image src={require("../../../../public/female.png")} alt="female employ" width={500} height={500} />
          </div>

          {/* Right Content */}
          <div className='flex-1'>
            <h2 className='font-bold text-xl'>The Outcome for Participants of the Program</h2>
            <p className='mt-4 text-slate-600 text-lg'>
              As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan software exports.
            </p>

            {/* Outcome Points */}
            <div className='mt-6 grid grid-cols-2 gap-x-2 gap-y-4'>
              {outComePoint.map((item, index) => (
                <div key={index} className="flex items-center gap-x-2">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="26" cy="26" r="25" stroke="#000" strokeWidth="2" />
                    <line x1="15" y1="26" x2="26" y2="37" stroke="#000" strokeWidth="2" />
                    <line x1="26" y1="37" x2="37" y2="15" stroke="#000" strokeWidth="2" />
                  </svg>
                  <h3 className='font-medium text-lg'>{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Outcome;
