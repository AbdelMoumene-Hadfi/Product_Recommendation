import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: this.props.label,
        datasets:[{label:"count",data:this.props.data,backgroundColor:["Dark","Red","Orange","Yellow","Green","Cyan","Blue","Purple","Pink","White","Gray","Brown","Lightyellow","Silver","Azure","SKYBLUE","LIME","Dark","Red","Orange","Yellow","Green","Cyan","Blue","Purple","Pink","White","Gray","Brown","Lightyellow","Silver","Azure","SKYBLUE","LIME"]}]
      }
    };
  }
  componentDidMount() {

  }
  render(){
    return (
      <div className="chart">
          <Bar
            data={this.state.chartData}
            options={{
              title:{
                display:true,
                text:this.props.title,
                fontSize:25
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
      </div>
    );
  }
}

export default Chart;
