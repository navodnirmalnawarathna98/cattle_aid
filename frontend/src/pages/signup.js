import React, { useState } from "react";
import {
  Form,
  FormButton,
  FormInput,
  FormSelect,
  Grid,
  GridColumn,
  GridRow,
} from "semantic-ui-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    NIC: "",
    contactNumber: "",
    gender: null,
    district: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const validateFirstName = (value) => {
    if (!value.match(/^[A-Za-z]+$/)) {
      return "first name not valid";
    }
    return "";
  };

  const validateLastName = (value) => {
    if (!value.match(/^[A-Za-z]+$/)) {
      return "lasr name not valid";
    }
    return "";
  };

  const validateAge = (value) => {
    if (!value.match(/^(?:\b[0-9]{1,2}\b|100)$/)) {
      return "age not valid";
    }
    return "";
  };

  const validateNIC = (value) => {
    if (!value.match(/^[A-Za-z0-9]+$/)) {
      return "NIC not valid";
    }
    return "";
  };

  const validateContactNumber = (value) => {
    if (!value.match(/^(?:\b[0-9]{1,2}\b|100)$/)) {
      return "contact number not valid";
    }
    return "";
  };

  const validateGender = (value) => {
    if (!value) {
      return "you must select a gender.";
    }
    return "";
  };

  const validateDistrict = (value) => {
    if (!value) {
      return "you must select a district.";
    }
    return "";
  };

  const validateAddress = (value) => {
    if (!value) {
      return "address not valid";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log("kk", formData);

    let error = "";
    if (name === "firstName") {
      error = validateFirstName(value);
    } else if (name === "lastName") {
      error = validateLastName(value);
    } else if (name === "age") {
      error = validateAge(value);
    } else if (name === "NIC") {
      error = validateNIC(value);
    } else if (name === "contactNumber") {
      error = validateContactNumber(value);
    } else if (name === "gender") {
      error = validateGender(value);
    } else if (name === "district") {
      error = validateDistrict(value);
    } else if (name === "address") {
      error = validateAddress(value);
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: validateFirstName(formData.firstName),
      lastName: validateLastName(formData.lastName),
      age: validateAge(formData.age),
      NIC: validateNIC(formData.NIC),
      contactNumber: validateContactNumber(formData.contactNumber),
      gender: validateGender(formData.gender),
      district: validateDistrict(formData.district),
      address: validateAddress(formData.address),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("Form Submitted Successfully", formData);
      // Submit form logic here
    } else {
      console.log("Validation errors", newErrors);
    }
  };

  const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ];

  const districts = [
    { key: "amp", text: "Ampara", value: "ampara" },
    { key: "anu", text: "Anuradhapura", value: "anuradhapura" },
    { key: "bad", text: "Badulla", value: "badulla" },
    { key: "bat", text: "Batticaloa", value: "batticaloa" },
    { key: "col", text: "Colombo", value: "colombo" },
    { key: "gal", text: "Galle", value: "galle" },
    { key: "gam", text: "Gampaha", value: "gampaha" },
    { key: "ham", text: "Hambantota", value: "hambantota" },
    { key: "jaf", text: "Jaffna", value: "jaffna" },
    { key: "kal", text: "Kalutara", value: "kalutara" },
    { key: "kan", text: "Kandy", value: "kandy" },
    { key: "keg", text: "Kegalle", value: "kegalle" },
    { key: "kil", text: "Kilinochchi", value: "kilinochchi" },
    { key: "kur", text: "Kurunegala", value: "kurunegala" },
    { key: "man", text: "Mannar", value: "mannar" },
    { key: "mat", text: "Matara", value: "matara" },
    { key: "mon", text: "Monaragala", value: "monaragala" },
    { key: "mul", text: "Mullaitivu", value: "mullaitivu" },
    { key: "nuw", text: "Nuwara Eliya", value: "nuwaraeliya" },
    { key: "pol", text: "Polonnaruwa", value: "polonnaruwa" },
    { key: "put", text: "Puttalam", value: "puttalam" },
    { key: "rat", text: "Ratnapura", value: "ratnapura" },
    { key: "tri", text: "Trincomalee", value: "trincomalee" },
    { key: "vav", text: "Vavuniya", value: "vavuniya" },
  ];

  return (
    <div className="main-layout">
      <div className="login-layout">
        <Grid
          style={{ marginLeft: "15px", marginRight: "15px", marginTop: "15px" }}
        >
          <GridRow style={{ display: "flex", justifyContent: "left" }}>
            <h1>
              Welcome to <span style={{ color: "#50c878" }}>Cattle Care</span>{" "}
              registration process..
            </h1>
          </GridRow>
          <GridRow
            style={{
              display: "flex",
              justifyContent: "left",
              color: "#808080",
            }}
          >
            <h2>Your personal details?</h2>
          </GridRow>
          <GridRow>
            <Form onSubmit={handleSubmit}>
              <Grid style={{ width: "400px" }}>
                <GridRow columns={2}>
                  <GridColumn width={8}>
                    <FormInput
                      fluid
                      label="First name"
                      type="text"
                      name="firstName"
                      placeholder="eg: saman"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={
                        errors.firstName ? { content: errors.firstName } : null
                      }
                    />
                  </GridColumn>
                  <GridColumn width={8}>
                    <FormInput
                      fluid
                      label="Last name"
                      type="text"
                      name="lastName"
                      placeholder="eg: perera"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={
                        errors.lastName ? { content: errors.lastName } : null
                      }
                    />
                  </GridColumn>
                </GridRow>
              </Grid>
              <Grid style={{ width: "400px" }}>
                <GridRow columns={2}>
                  <GridColumn width={8}>
                    <FormInput
                      fluid
                      label="Age"
                      type="number"
                      name="age"
                      placeholder="eg: 45"
                      value={formData.age}
                      onChange={handleChange}
                      error={errors.age ? { content: errors.age } : null}
                    />
                  </GridColumn>
                  <GridColumn width={8}>
                    <FormInput
                      fluid
                      label="NIC number"
                      type="text"
                      name="NIC"
                      placeholder="eg: 982345875V"
                      value={formData.NIC}
                      onChange={handleChange}
                      error={errors.NIC ? { content: errors.NIC } : null}
                    />
                  </GridColumn>
                </GridRow>
                <GridRow columns={2}>
                  <GridColumn width={8}>
                    <FormInput
                      fluid
                      label="Contact Number"
                      type="number"
                      name="contactNumber"
                      placeholder="eg: 0757756458"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      error={
                        errors.contactNumber
                          ? { content: errors.contactNumber }
                          : null
                      }
                    />
                  </GridColumn>
                  <GridColumn width={8}>
                    <FormSelect
                      fluid
                      label="Gender"
                      name="gender"
                      options={options}
                      placeholder="select gender"
                      onChange={handleChange}
                      error={errors.gender ? { content: errors.gender } : null}
                    />
                  </GridColumn>
                </GridRow>
                <GridRow columns={2}>
                  <GridColumn width={8}>
                    <FormSelect
                      fluid
                      label="District"
                      name="district"
                      options={districts}
                      placeholder="select district"
                      value={formData.district}
                      onChange={handleChange}
                      error={
                        errors.district ? { content: errors.district } : null
                      }
                    />
                  </GridColumn>
                  <GridColumn width={8}>
                    <FormInput
                      fluid
                      label="Address"
                      type="text"
                      name="address"
                      placeholder="eg: 237/B, malabe"
                      value={formData.address}
                      onChange={handleChange}
                      error={
                        errors.address ? { content: errors.address } : null
                      }
                    />
                  </GridColumn>
                </GridRow>

                <GridRow>
                  <FormButton type="submit">Submit</FormButton>
                </GridRow>
              </Grid>
            </Form>
          </GridRow>
        </Grid>
      </div>
    </div>
  );
};

export default Signup;
