import { Footer } from "../components/Footer";
import { HeroImage } from "../components/HeroImage";
import { Navbar } from "../components/Navbar";
import { Trainingcp } from "../components/Trainingcp";
import training from "../assests/training.jpg";

export let Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        img={training}
        heading="TRAINING"
        text="Pre-Flight & In-Flight Training."
      />
      <Trainingcp />
      <Footer />
    </div>
  );
};
