import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import "./resume-template-view.styles.scss";

function ResumeTemplateView() {
    const [selectedResume, setSelectedResume] = useState()
    const params = useParams();
    const resumeList = useSelector((state) => state.resume.resumes);
    


    useEffect(() => {
 setSelectedResume(resumeList.find((resume) => resume.id === params.id))
    }, [])

    return (
      <React.Fragment>
        {selectedResume ? (
          <div className="template-wrapper">
            <div className="row first-section">
              <div className="col-sm-6">
                <h1>{selectedResume.name}</h1>
              </div>
              <div className="col-sm-6">
                <p>{selectedResume.careerObjective}</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-4 left-section">
                <h4>Personal Info</h4>
                <p>Email: {selectedResume.email}</p>
                <p>Phone: {selectedResume.phone}</p>
                <h4>Skills</h4>
                <ul className="skill-set">
                  {selectedResume.skills?.map((skill, index) => (
                    <li key={index}>{skill.skill}</li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-8">
                <h4>Work Experience</h4>
                {selectedResume.work?.map((company,index) => (
                  <React.Fragment key={index}>
                    <p className="company-details">
                      {company.company.toUpperCase()}({company.workStartDate} - {company.workEndDate?company.workEndDate:"present"})
                    </p>
                    <p>
                     {company.workDescription}
                    </p>
                  </React.Fragment>
                ))}
                <h4>Education</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Institute</th>
                      <th>Degree</th>
                      <th>Year of Completion</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                                <tbody>
                                    {selectedResume.education?.map((institute,index) => {
                                        return(
                                        <tr key={index}>
                                            <td>{institute.institute}</td>
                                            <td>{institute.degree}</td>
                                            <td>{institute.educationEndDate}</td>
                                            <td>{institute.scoreObtained}</td>
                                            </tr>)
                                    })}
                    <tr>
                    
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <h2>Ooops!!!Resume Not Found</h2>
        )}
      </React.Fragment>
    );
}

export default ResumeTemplateView;
