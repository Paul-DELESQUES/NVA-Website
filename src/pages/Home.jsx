import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { cardsHomeDatas } from "../constants/dataGen";
import { fadeIn } from "../utils/motion";
import PropTypes from "prop-types";
import { HomeDatas } from "../constants/dataGen";
import "../styles/Home.scss";

const CardsServices = ({ index, img, title }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.75, 1)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
        <div className="card-ctn-home">
          <img src={img} alt="service-card" className="img-card-home" />
          <div className="title-card-home">
            <p>{title}</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

function Home() {
  return (
    <section className="home-ctn">
      <div className="home-title-ctn">
        <h1>NOUVELLE VISION ET AUDITION OLORON</h1>
        <h2>{HomeDatas.slogan}</h2>
      </div>
      <div className="textLoop">
        <span>
          <Typewriter
            options={{
              strings: HomeDatas.priority,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <div className="cards-home">
        {cardsHomeDatas.map((card, index) => (
          <CardsServices key={`service-${index}`} index={index} {...card} />
        ))}
      </div>
    </section>
  );
}

CardsServices.propTypes = {
  index: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionWrapper(Home);
