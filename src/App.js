import React from "react";
import { Route, Switch, Redirect } from "react-router";
import './App.css';
import ResumeFormPage from './pages/resume-builder-form-page/resume-form-page';
import Header from "./components/header/header.component";
import ResumeTemplatePage from "./pages/resume-template/resume-template.component";
import ResumeListPage from "./pages/resume-list/resume-list-page.component";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="mt-5">
        <Switch>
          <Route exact path="/" component={ResumeFormPage} />
          <Route exact path="/create-resume" component={ResumeFormPage} />
          <Route exact path="/resumes" component={ResumeListPage} />
          <Route exact path="/resume-view/:id" component={ResumeTemplatePage} />
          <Route
            exact
            path="/*"
            render={(props) => <Redirect to={{ pathname: "/" }} />}
          />{" "}
          <Route />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
