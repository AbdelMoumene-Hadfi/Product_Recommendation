import React from "react";
import {Link , withRouter } from "react-router-dom";
import "./Style/nav_style.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {nom : '' , prenom : '' };
  }

  componentDidMount() {}
  render () {
    return(
      <div className="navbar">
        <div className="navbar_user">
          <div className="navbar_nom">
            <h1>{this.state.nom} {this.state.prenom}</h1>
          </div>
        </div>
        <div className="navbar_list ">
          <div className="navbar_element">
            <Link to="/" ><h1>Home</h1></Link>
          </div>
          <div className="navbar_border" />
          <div className="navbar_element">
            <Link to="/dashboard" ><h1>Dashboard</h1></Link>
          </div>
        </div>
      </div>
  );
}
}
export default withRouter(Nav);
