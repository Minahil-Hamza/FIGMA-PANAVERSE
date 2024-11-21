'use client';

import React, { useState } from 'react';
import Wrapper from '@/app/components/shared/Wrapper';
import QuarterBox from '@/app/components/shared/QuarterBox'
import Image from 'next/image';

// Images
import metaverse from "../../../../public/meta.png";
import ai from "../../../../public/ai.png";
import cnc from "../../../../public/cnc.png";
import iot from "../../../../public/iot.png";
import genetics from "../../../../public/gb.png";
import network from "../../../../public/np.png";

export const data = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse Specialization focuses on developing full-stack Web 3.0 and Metaverse",
    image: metaverse,
    quarters: [
      {
        header: "Quarter IV",
        description: "W3-351: Developing smart contracts and planet-scale Web 3.0 Dapps",
        number: 4,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs",
    image: ai,
    quarters: [
      {
        header: "Quarter V",
        description:
          "WV-361: Developing planet-scale open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },

  {
    slug: "cnc",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: cnc,
    quarters: [
      {
        header: "Quarter IV",
        description:
       "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
    ],
  },
  {
    slug: "iot",
    header: "The Ambient Computing and IoT Specialization",
    description:
      "This specialization focuses on developing full-stack IoT applications and ambient computing solutions.",
    image: iot,
    quarters: [
      {
        header: "Quarter IV",
        description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
    ],
  },
  {
    slug: "gbs",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this information can be used.",
    image: genetics,
    quarters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4,
      },
    ],
  },
  {
    slug: "npt",
    header: "Network and Cloud Specialization",
    description:
      "This specialization focuses on cloud computing and advanced networking technologies.",
    image: network,
    quarters: [
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
];

const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");

  const selectedItemData = data.find((item) => item.slug === selectedItem);

  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-5xl font-bold whitespace-pre-line">Specialized Tracks:</h2>
          <p className="mt-3 text-lg text-slate-600 leading-[30px] max-w-screen-sm">
            After completing the first three quarters, participants will select one or more
            specializations consisting of two courses each:
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-10">
          {/* Left Content */}
          <div className="shadow-xl self-start sticky top-28 basis-6/12 rounded-md border p-6">
            <h4 className="text-teal-700 text-lg font-medium">Specialized Program</h4>
            <h3 className="text-2xl font-bold mt-2">{selectedItemData?.header}</h3>
            <p className="text-lg text-slate-600 mt-2">{selectedItemData?.description}</p>
            <button className="text-teal-700 text-xl mt-4 underline flex items-center gap-x-2">
              Learn More
              <svg
                width="8"
                height="11"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 10L6 5.5L1 1" stroke="#00616C" strokeWidth="2" />
              </svg>
            </button>

            <div className="flex gap-4 mt-8 flex-col md:flex-row">
              {selectedItemData?.quarters.map((quarter, index) => (
                <QuarterBox
                  key={index}
                  title={quarter.header}
                  num={quarter.number}
                  paragraph={quarter.description}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-wrap gap-6 basis-6/12">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item.slug)}
                className={`flex gap-x-3 items-center group cursor-pointer p-4 rounded-md border ${
                  selectedItem === item.slug ? "bg-teal-100" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.header}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-teal-700 font-medium">Specialized Program</h4>
                  <h3 className="text-xl font-medium">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;

