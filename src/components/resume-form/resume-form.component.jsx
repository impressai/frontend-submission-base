import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component"
import { useHistory } from "react-router";
import CustomButton from "../custom-button/custom-button.component"
import MultiSelectDropdown from "../multi-select-dropdown/multi-select-dropdown.component"
import "./resume-form.styles.scss";
import { updateResume } from "../../redux/resume/resume.action";
import validate from "../../utils/validation";

const ResumeForm = (props) => {
    const shortid = require("shortid");
    const [formBody, setFormBoby] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();
    const [showEducationMoreDetails, setshowEducationMoreDetails] = useState(false);
    const [showCompanyMoreDetails, setshowCompanyMoreDetails] = useState(false);
    const [errors, setErrors] = useState();
    const skills = [{ skill: "javascript" }, { skill: "Typescript" }, { skill: "React" }, { skill: "Angular" }, { skill: "Nodejs" }]
    const [educationFields, setEducationFields] = useState([
      {
        institute: "",
        degree: "",
        educationEndDate: "",
        scoreObtained: "",
      },
    ]);
    const [workFields,setWorkFields] = useState([{
        company:"",
        workDescription:"",
        workStartDate:"",
        workEndDate:""
    }]);

  const handleSubmit = (event) => {
      event.preventDefault();
      let validationError=validate(formBody)
      setErrors(validationError);
      if (Object.keys(validationError).length===0) {
        dispatch(updateResume(formBody));
        history.push("/resume-view/" + formBody.id);
      }
  };

  const handleChange = (event) => {
      let { value, name } = event.target;
   
      setFormBoby({ ...formBody, [name]: value });
    };
    
  useEffect(() => {
      setFormBoby({ id: shortid.generate() })
  }, []);
    const handleEducationFieldChange = (index,event) => {
        let inputFields = [...educationFields];
        let { value, name } = event.target;
        inputFields[index][name] = value;
        setEducationFields(inputFields)
        setFormBoby({...formBody,education:inputFields})
    }
        const handleWorkFieldChange = (index, event) => {
          let inputFields = [...workFields];
          let { value, name } = event.target;
            inputFields[index][name] = value;
            setWorkFields(inputFields)
            setFormBoby({...formBody,work:inputFields})
        };

  return (
    <React.Fragment>
      <div className="page-heading">Create your Resume </div>
      <form id="trial-request-form" onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type="text"
          handleChange={handleChange}
          label="Name"
          isRequired={true}
        />
        {errors?.name && <p className="invalid">{errors.name}</p>}
        <FormInput
          name="careerObjective"
          type="text"
          handleChange={handleChange}
          label="Career Objective"
          isRequired={true}
          isTextArea={true}
        />
        {errors?.careerObjective && (
          <p className="invalid">{errors.careerObjective}</p>
        )}
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          label="Email"
          isRequired={true}
        />
        {errors?.email && <p className="invalid">{errors.email}</p>}

        <FormInput
          name="phone"
          type="number"
          handleChange={handleChange}
          label="Phone Number"
          isRequired={true}
        />
        {errors?.phone && <p className="invalid">{errors.phone}</p>}

        <div className="info-wrapper">
          <h4>Education</h4>
          {errors?.education && <p className="invalid">{errors.education}</p>}
          {educationFields.map((inputField, index) => (
            <React.Fragment key={`${inputField}~${index}`}>
              <FormInput
                name="institute"
                type="text"
                handleChange={(event) =>
                  handleEducationFieldChange(index, event)
                }
                label="Name of institute"
                isRequired={true}
              />
              <FormInput
                name="degree"
                type="text"
                handleChange={(event) =>
                  handleEducationFieldChange(index, event)
                }
                label="Degree"
                isRequired={true}
              />
              {!showEducationMoreDetails && (
                <div
                  className="add-more-info"
                  onClick={() => {
                    setshowEducationMoreDetails(true);
                  }}
                >
                  + Add More info
                </div>
              )}

              {showEducationMoreDetails && (
                <React.Fragment>
                  <FormInput
                    name="educationEndDate"
                    type="date"
                    handleChange={(event) =>
                      handleEducationFieldChange(index, event)
                    }
                    label="Graduation End Date"
                  />
                  <FormInput
                    name="scoreObtained"
                    type="text"
                    handleChange={(event) =>
                      handleEducationFieldChange(index, event)
                    }
                    label="Score Obtained"
                  />
                  {index === educationFields.length - 1 ? (
                    <div
                      className="add-more-info"
                      onClick={() => {
                        setEducationFields([
                          ...educationFields,
                          {
                            institute: "",
                            degree: "",
                            educationStartDate: "",
                            education: "",
                          },
                        ]);
                      }}
                    >
                      + Add One More institute
                    </div>
                  ) : null}
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="info-wrapper mt-4">
          <h4>Work</h4>
          {errors?.work && <p className="invalid">{errors.work}</p>}

          {workFields.map((inputField, index) => (
            <React.Fragment key={`${inputField}~${index}`}>
              <FormInput
                name="company"
                type="text"
                handleChange={(event) => handleWorkFieldChange(index, event)}
                label="Company Name"
                isRequired={true}
              />
              <FormInput
                name="workDescription"
                type="text"
                handleChange={(event) => handleWorkFieldChange(index, event)}
                label="Work Description"
                isTextArea={true}
                isRequired={true}
              />
              {!showCompanyMoreDetails && (
                <div
                  className="add-more-info"
                  onClick={() => {
                    setshowCompanyMoreDetails(true);
                  }}
                >
                  + Add More info
                </div>
              )}
              {showCompanyMoreDetails && (
                <React.Fragment>
                  <FormInput
                    name="workStartDate"
                    type="date"
                    handleChange={(event) =>
                      handleWorkFieldChange(index, event)
                    }
                    label="Work Start Date"
                  />
                  <FormInput
                    name="workEndDate"
                    type="date"
                    handleChange={(event) =>
                      handleWorkFieldChange(index, event)
                    }
                    label="Work End Date"
                  />
                  {index === workFields.length - 1 ? (
                    <div
                      className="add-more-info"
                      onClick={() => {
                        setWorkFields([
                          ...workFields,
                          {
                            company: "",
                            workDescription: "",
                            workStartDate: "",
                            workEndDate: "",
                          },
                        ]);
                      }}
                    >
                      + Add One More Company
                    </div>
                  ) : null}
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </div>
        <MultiSelectDropdown
          label="Skills"
          options={skills}
          displayValue="skill"
          isRequired={true}
          onSelect={(selectedList) => {
            setFormBoby({ ...formBody, skills: selectedList });
          }}
          onRemove={(selectedList) => {
            setFormBoby({ ...formBody, skills: selectedList });
          }}
        />
        {errors?.skills && <p className="invalid">{errors.skills}</p>}

        <div className="buttons my-4">
          <CustomButton disabled={false} type="submit">
            {" "}
            Create{" "}
          </CustomButton>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ResumeForm;
