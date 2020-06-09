import React from 'react';
import Nav from './Nav';
import axios from 'axios';
import './Style/index_style.css';


class Index extends React.Component {
  constructor() {
    super()
    this.state = {id_user : '', response : {} ,onresult : false};
  }
	componentDidMount() {
  }
  onChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    const id_user = this.state.id_user;
    axios.post("http://127.0.0.1:5000/pred_product",{"Id":id_user})
         .then((res) => {this.setState({response:JSON.stringify(res.data),onresult:true})})
  }
  render() {
    let product1 = "" ;let product2 = "" ;let product3 = "" ;let product4 = "" ;let product5 = "" ;
    let product6 = "" ;let product7 = "" ;let product8 = "" ;let product9 = "" ;let product10 = "" ;
    let rating1 = "" ;let rating2 = "" ;let rating3 = "" ;let rating4 = "" ;let rating5 = "" ;
    let rating6 = "" ;let rating7 = "" ;let rating8 = "" ;let rating9 = "" ;let rating10 = "" ;
    if(this.state.onresult) {
      var obj = JSON.parse(this.state.response);
      product1 = obj[0][0].toString();product2 = obj[1][0].toString();
      product3 = obj[2][0].toString();product4 = obj[3][0].toString();
      product5 = obj[4][0].toString();product6 = obj[5][0].toString();
      product7 = obj[6][0].toString();product8 = obj[7][0].toString();
      product9 = obj[8][0].toString();product10 = obj[9][0].toString();
      rating1 = obj[0][1];rating2 = obj[1][1];
      rating3 = obj[2][1];rating4 = obj[3][1];
      rating5 = obj[4][1];rating6 = obj[5][1];
      rating7 = obj[6][1];rating8 = obj[7][1];
      rating9 = obj[8][1];rating10 = obj[9][1];
    }
  return (
    <div className="container-fluid">
      <Nav />
      <div className="container_title">
        <h1>Dashboard :</h1>
      </div>
      <div className="container_content">
        <form  onSubmit={this.onSubmit.bind(this)}>
           <div className="form-group">
                <label htmlFor="InputId">Id User :</label>
                <input type="text" className="form-control" id="InputId"  name="id_user" placeholder="Enter User Id " value={this.state.id_user} onChange={this.onChange.bind(this)} />
          </div>
          <div className="center_alert ">
                <button type="submit" className="btn btn-primary ">Submit</button>
          </div>
        </form>
      </div>
      <div className="container_content">
        {this.state.onresult &&
            <div className="container_content">
              <div className="container_title"><h1>Product </h1></div>
              <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id Product</th>
                  <th scope="col">Rating predict</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{product1}</th>
                  <td>{rating1}</td>
                </tr>
                <tr>
                  <th scope="row">{product2}</th>
                  <td>{rating2}</td>
                </tr>
                <tr>
                  <th scope="row">{product3}</th>
                  <td>{rating3}</td>
                </tr>
                <tr>
                  <th scope="row">{product4}</th>
                  <td>{rating4}</td>
                </tr>
                <tr>
                  <th scope="row">{product5}</th>
                  <td>{rating5}</td>
                </tr>
                <tr>
                  <th scope="row">{product6}</th>
                  <td>{rating6}</td>
                </tr>
                <tr>
                  <th scope="row">{product7}</th>
                  <td>{rating7}</td>
                </tr>
                <tr>
                  <th scope="row">{product8}</th>
                  <td>{rating8}</td>
                </tr>
                <tr>
                  <th scope="row">{product9}</th>
                  <td>{rating9}</td>
                </tr>
                <tr>
                  <th scope="row">{product10}</th>
                  <td>{rating10}</td>
                </tr>
              </tbody>
            </table>
          </div>
          }
      </div>
    </div>
  );
}}

export default Index;
