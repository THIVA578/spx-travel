import "./HeroImageStyle.css";

export let HeroImage = (props) => {
  return (
    <div className="hero-img">
      <img src={props.img} alt="money"></img>
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
