import React from "react";
import { useLocation } from "react-router-dom";
import CollapseBox from "../components/CollapseBox";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Owner from "../components/Owner";
import Tag from "../components/Tag";

const Housing = () => {
  const location = useLocation();
  const { housing } = location.state;
  console.log(housing);

  return (
    <div>
      <div className="main-wrapper">
        <Header />
        <section className="gallery-container">
          <h2 className="sr-only">Gallerie d'images</h2>
          <Gallery housing={housing} />
        </section>
        <section className="housing-presentation">
          <h1 className="housing-title">{housing.title}</h1>
          <h2 className="housing-location">{housing.location}</h2>
          <div className="tags">
            {housing.tags.map((tag) => (
              <Tag key={housing.id + "-" + tag} tag={tag} />
            ))}
          </div>

          <Owner owner={housing.host} rating={housing.rating} />
        </section>
        <section className="housing-details">
          <h2 className="sr-only">Description et équipements</h2>
          <CollapseBox
            id="1"
            title="Description"
            content={housing.description}
          />
          <CollapseBox
            id="2"
            title="Equipements"
            content={housing.equipments.map((kit) => (
              <span className="housing-desc__kit">{kit}</span>
            ))}
          />
        </section>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Housing;
