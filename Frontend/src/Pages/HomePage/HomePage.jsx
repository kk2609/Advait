import React from "react";
import Button from "../../Components/Button/Button";
import { FaDownload } from "react-icons/fa";
import Disclaimer from "../../Components/Disclaimer/Disclaimer";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1> HomePage</h1>
        <Button variant="primary" appearance="solid">
          Book a Consultation
        </Button>
        <Disclaimer/>
      </div>
    </div>
  );
};

export default HomePage;
