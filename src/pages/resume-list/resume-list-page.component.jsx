import React from "react";
import "./resume-list-page.styles.scss";
import ResumeList from "../../components/resume-list/resume-list.component";

function ResumeListPage() {
  return (
    <div className="container resume-list">
      <div className="row">
        <div className="col-sm-12">
          <ResumeList></ResumeList>
        </div>
      </div>
    </div>
  );
}

export default ResumeListPage;
