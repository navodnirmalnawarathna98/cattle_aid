import React from "react";
import { Segment } from "semantic-ui-react";
import ImageDiagnosisInterface from "../../pages/ImageDiagnosisInterface";

const SkinDiseaseDetection = () => {
  return (
    <div>
      <Segment style={{ height: "500px" }}>
        <ImageDiagnosisInterface/>
      </Segment>
    </div>
  );
};

export default SkinDiseaseDetection;
