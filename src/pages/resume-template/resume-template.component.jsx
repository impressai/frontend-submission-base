import React from "react"
import "./resume-template.styles.scss";
import ResumeTemplateView from "../../components/resume-template-view/resume-template-view.component";

function ResumeTemplatePage() {
  return (
    <div className="container resume-template p-5">

         <ResumeTemplateView></ResumeTemplateView>
        </div>
  );
}

export default ResumeTemplatePage;
