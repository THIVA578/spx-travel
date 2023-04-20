import { Footer } from "../components/Footer";
import { HeroImage } from "../components/HeroImage";
import { Navbar } from "../components/Navbar";
import { Pricingcp } from "../components/Pricingcp";

import money from "../assests/money.jpg";

export let Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage img={money} heading="PRICING" text="Choose your trip" />
      <Pricingcp />
      <Footer />
    </div>
  );
};
