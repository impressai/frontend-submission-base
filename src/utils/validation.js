const validate = (inputs) => {
  const errors = {};
  if (!inputs.name) {
    errors.name = "Enter Name";
    }
    if (!inputs.email) {
        errors.email="Enter Email"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
    errors.email = "Invalid email address";
    }
     if (!inputs.phone) {
       errors.phone = "Enter Phone Number";
     }
     else if (
       !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
.test(inputs.phone)
     ) {
       errors.phone = "Invalid phone number";
    }
    if (!inputs.careerObjective) {
        errors.careerObjective = "Enter Career Objective";
    }
    let emptyEduObjIndex = inputs.education?.findIndex(e => Object.values(e).every(x => x === ''));
    if(emptyEduObjIndex!==-1)
    inputs.education?.splice(emptyEduObjIndex, 1);
    let validEducationInfo=inputs.education?.every(e=> e.institute && e.degree )
    if (!inputs.education?.length || !validEducationInfo) {
            errors.education = "Enter institute name and degree";
    }
    let emptyWorkObjIndex = inputs.work?.findIndex((e) =>
      Object.values(e).every((x) => x === "")
    );
    if (emptyWorkObjIndex !== -1)
        inputs.work?.splice(emptyWorkObjIndex, 1);
    let validWorkInfo = inputs.work?.every((c) => c.company && c.workDescription);
    if (!inputs.work?.length || !validWorkInfo) {
      errors.work = "Enter Company name and description";
    }
    if (!inputs.skills?.length) {
        errors.skills="Enter Skill Set"
    }
      return errors;
};
export default validate;
