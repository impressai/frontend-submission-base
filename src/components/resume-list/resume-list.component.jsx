import React from "react";
import "./resume-list.styles.scss"
import { useSelector } from "react-redux";
import { useHistory } from "react-router";


function ResumeList() {
    const resumeList = useSelector((state) => state.resume.resumes);
    const history = useHistory();


   const navigateToResume=(id)=>{
        history.push("/resume-view/" + id);
}
  return (
    <div className="container resume-list">
      <div className="row">
        {resumeList.map((resume, index) => (
            <React.Fragment key={index}>
              <div className="resume col-sm-4 mr-3 mb-3">
                <h2>{resume.name}'s Resume</h2>
                <a
                  href="javascript:void(0)"
                          onClick={() => {
                              navigateToResume(resume.id)
                          }
                          }
                >
                  View Resume
                </a>
              </div>
            </React.Fragment>
          ))}
          {!resumeList.length && <h2>No Resumes to display!</h2>}
    </div>
    </div>
  );
}

export default ResumeList;
