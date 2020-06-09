import React from 'react';
import Nav from './Nav';
import axios from 'axios';
import './Style/dashboard_style.css';
import Chart from './Chart';

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {response_rating : {} , etat_rating : false , response_product : {} , etat_product : false};
  }
	componentDidMount() {
    axios.post("http://127.0.0.1:5000/rating")
         .then((res) => {this.setState( { response_rating : JSON.parse(JSON.stringify(res.data)),etat_rating:true})})
         .catch((err) => {console.log(err);});
   //
   axios.post("http://127.0.0.1:5000/product")
        .then((res) => {this.setState( { response_product : JSON.parse(JSON.stringify(res.data)),etat_product:true})})
        .catch((err) => {console.log(err);});
  }
  render() {
  return (
    <div className="container-fluid">
      <Nav />
      <div className="container_title">
        <h1>Dashboard :</h1>
      </div>
      <div className="container_chart">
        {this.state.etat_rating && <Chart title= {"Rating Count"} label ={["1","2","3","4","5"]} data={[this.state.response_rating[1],this.state.response_rating[2],this.state.response_rating[3],this.state.response_rating[4],this.state.response_rating[5]]}  />}
      </div>
      <div className="container_chart">
        {this.state.etat_product && <Chart title= {"Top Product"}
        label ={[this.state.response_product[0][0],this.state.response_product[1][0],this.state.response_product[2][0],
               this.state.response_product[3][0],this.state.response_product[4][0],this.state.response_product[5][0],
               this.state.response_product[6][0],this.state.response_product[7][0],this.state.response_product[8][0],
               this.state.response_product[9][0],this.state.response_product[10][0],this.state.response_product[11][0],
               this.state.response_product[12][0],this.state.response_product[13][0],this.state.response_product[14][0],
               this.state.response_product[15][0],this.state.response_product[16][0],this.state.response_product[17][0],
               this.state.response_product[18][0],this.state.response_product[19][0]]}
        data={[this.state.response_product[0][1],this.state.response_product[1][1],this.state.response_product[2][1],
               this.state.response_product[3][1],this.state.response_product[4][1],this.state.response_product[5][1],
               this.state.response_product[6][1],this.state.response_product[7][1],this.state.response_product[8][1],
               this.state.response_product[9][1],this.state.response_product[10][1],this.state.response_product[11][1],
               this.state.response_product[12][1],this.state.response_product[13][1],this.state.response_product[14][1],
               this.state.response_product[15][1],this.state.response_product[16][1],this.state.response_product[17][1],
               this.state.response_product[18][1],this.state.response_product[19][1]]}  />}
      </div>
  </div>
  );
}}

export default Dashboard;
