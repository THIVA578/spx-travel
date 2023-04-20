import { Form } from "../components/Form";
import { Footer } from "../components/Footer";
import { HeroImage } from "../components/HeroImage";
import { Navbar } from "../components/Navbar";

import contact from "../assests/contact.jpg";

export let Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage img={contact} heading="CONTACT" text="Contact SPX Travel" />
      <Form />
      <Footer />
    </div>
  );
};
