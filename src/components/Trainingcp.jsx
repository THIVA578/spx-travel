import "./trainingStyle.css";

import man from "../assests/man.jpg";
import skill from "../assests/skill.jpg";
import { Link } from "react-router-dom";

export let Trainingcp = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          The space tourists will be given training,There will also be drills in
          dealing with emergency situations in space, and training.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img className="img" src={man} alt="man" />
          </div>

          <div className="image-stack bottom">
            <img className="img" src={skill} alt="skill" />
          </div>
        </div>
      </div>
    </div>
  );
};
