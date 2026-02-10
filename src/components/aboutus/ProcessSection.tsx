import React from "react";
import "../../styles/process.css";

import manufacturing from "../../assets/process/manufacturing.png";
import storage from "../../assets/process/storage.png";
import microfiltration from "../../assets/process/microfiltration.png";
import concentration from "../../assets/process/concentration.png";
import nanofiltration from "../../assets/process/nanofiltration.png";
import pasteurisation from "../../assets/process/pasteurisation.png";
import protein from "../../assets/process/protein.png";
import spray from "../../assets/process/spray.png";
import treatment from "../../assets/process/treatment.png";

interface ProcessItem {
  title: string;
  description: string;
  image: string;
}

const processData: ProcessItem[] = [
  {
    title: "Manufacturing High-Quality Dairy Products in Europe",
    description:
      "At Kuber Group Technology, we specialize in manufacturing instant fat-filled milk powders, SMP blends, and demineralised whey using advanced technologies and strict quality procedures in Europe.",
    image: manufacturing,
  },
  {
    title: "Raw Material Storage",
    description:
      "All raw materials for our instant fat filled milk powders, SMP blends, and demineralised whey are stored under modern refrigeration conditions.\n\nThis ensures preservation of valuable nutrients and maintains high hygienic standards.",
    image: storage,
  },
  {
    title: "Microfiltration (MF)",
    description:
      "Microfiltration using ceramic membranes is a crucial step in our powder production process.\n\nThis innovative technology ensures superior purification, fat removal, and reduction of micro-organisms compared to traditional methods.",
    image: microfiltration,
  },
  {
    title: "Concentration",
    description:
      "The final processes of whey powder production before drying is to thicken the concentrate downstream of NF using evaporator systems and crystallization.\n\nThe concentration process allows water evaporation under reduced pressure to 58%–60% dry matter.\n\nCrystallising the concentrate downstream ensures non-hygroscopic whey and smooth drying.",
    image: concentration,
  },
  {
    title: "Nanofiltration (NF)",
    description:
      "Nanofiltration (NF) is employed before evaporation in our process.\n\nIt concentrates raw materials and partially demineralises whey, enhancing purity and nutritional value of the final products.",
    image: nanofiltration,
  },
  {
    title: "Pasteurisation",
    description:
      "Pasteurisation is a crucial step where raw materials are heated to specific temperatures to reduce microorganism levels, ensuring product safety and extending shelf life. This process effectively eliminates harmful bacteria and pathogens while preserving the nutritional integrity of the raw materials.",
    image: pasteurisation,
  },

  {
    title: "Protein content",
    description:
      "One of the basic indicators of powder quality is its appropriate content of Whey protein in accordance with the requirements of standards as well as the requests of customers \n\n The only technology to standardise the protein content and thus maintain the same quality of powder obtained without additives is the ultrafiltration (UF) process that is implemented at our plants. Ultrafiltration removes a certain amount of the protein-free fraction (permeate) from the whey, and as such the protein content in the powder is controlled",
    image: protein,
  },
  {
    title: "Spray Drying",
    description:
      "The final stage of the whey powder production process is drying. For this purpose, the so-called spray driers are used where, using hot air, the whey is finally concentrated from an initial water content of 40% to 42% to a level of 3.0% to 4.0%. \n\n Such a low water content is a factor that makes it possible to store the finished product for up to several years without any organoleptic or physical-chemical changes, and health safety is maintained",
    image: spray,
  },
  {
    title: "Treatment and management",
    description:
      "Permeate and condensate treatment is carried out with the use of membrane technologies based on the reverse osmosis process, the so-called RO-polisher \n\n The applied technology is used to treat permeates downstream of after NF and condensate downstream of the evaporator to the obtain water quality providing completely microbiological safety and very good chemical quality. \n\n The technology implemented at our plants also allows significant reduction in the amount of wastewater discharged, and thus a reduction in production costs and the negative environmental impact.",
    image: treatment,
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="process-premium-section">
      <div className="container">
        <div className="timeline-line"></div>

        {processData.map((item, index) => (
          <div
            key={index}
            className={`process-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="process-step">
              <span>{index + 1}</span>
            </div>

            <div className="process-card">
              <div className="process-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="process-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
