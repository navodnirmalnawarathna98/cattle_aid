import React from "react";
import Header from "../components/header";
import SkinDiseaseDetection from "../containers/imageController/skinDiseaseDetection";
import OntologyDataRetrieval from "../containers/ontologyController/ontologyDataRetrieval";
import Chatbot from "../containers/chatbotController/chatbot";
// import { Button } from "semantic-ui-react";

const HomePageContent = ({ handelSideBar = null }) => {
  const farmerDetails = {
    firstName: "Dilshan",
    lastName: "Sudharaka",
    age: "34",
    NIC: "983425345V",
    gmail: "dilshansudharaka98@gmail.com",
    password: "abc123",
    contactNumber: "0757713501",
    district: "Anuradhapura",
    address: "345/B Valigama",
    position: "full time farmer",
    numOfCattle: "3",
    arrayOfCattle: [
      {
        cattleName: "Raththi",
        cattleAge: "8",
        cattleBreed: "Sinhala Cattle",
        cattleGender: "female",
        mainPurpose: "milking",
        isCattlePregnant: false,
      },
      {
        cattleName: "Hadaya",
        cattleAge: "6",
        cattleBreed: "Sinhala Cattle",
        cattleGender: "male",
        mainPurpose: "farming",
        isCattlePregnant: false,
      },
      {
        cattleName: "Suddi",
        cattleAge: "10",
        cattleBreed: "Sinhala Cattle",
        cattleGender: "female",
        mainPurpose: "milking",
        isCattlePregnant: true,
      },
    ],
  };
  return (
    <>
      <Header handelSideBar={handelSideBar} />
      <div className="main-layout">
        <SkinDiseaseDetection />
        <OntologyDataRetrieval />
        <Chatbot />
      </div>
    </>
  );
};

export default HomePageContent;
