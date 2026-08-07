import React from "react";
import Button from "../../Components/Button/Button";
import { FaDownload } from "react-icons/fa";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Disclaimer from "../../Components/Disclaimer/Disclaimer";
import FAQ from "../../Components/FAQ/FAQ"

const HomePage = () => {
  return (
    <div>
      <div>
        <h1> HomePage</h1>
        <Button variant="primary" appearance="solid">
          Book a Consultation
        </Button>
        <ContactForm/>
        <Disclaimer/>
        <FAQ/>
      </div>
    </div>
  );
};

export default HomePage;
