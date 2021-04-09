import React, { Component } from 'react'
import $ from 'jquery'; 

import CanvasJSReact from '../canvasjs.stock.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default class Chart extends Component {
    constructor(){
        super();
        this.state={ 
            TimeChart : []
        }
    }
      
    // async componentDidMount(){
    //     console.log('mounttttttttttt')
    // }
      
      
      render() {
        
    let test = this.props.match

    // console.log('trial time1',test);
        window.onload = function () {

            CanvasJS.addColorSet("blueShades",[//colorSet Array
                "#00f2ff",
                "#00f2ff",
                "#00f2ff",
                "#00f2ff",
                "#00f2ff",
                "#00f2ff",
                "#00f2ff",
                "#00f2ff",
                "#00f2ff"
              ]);
            var dataPoints = [];
            
            var stockChart = new CanvasJS.StockChart("chartContainer",{
                
                backgroundColor: "#000b26", //Change it to "red"
    
                // theme: "dark1", //Change it to "light1", "dark1", "dark2"
              title: {
                  fontColor: 'white',
                  text: `Stock Chart For ${test}`
                },
    
                colorSet: "blueShades",
                
                
    
              charts: [{      
                data: [{        
                  type: "line", //Change it to "spline", "area", "column"
                  dataPoints : dataPoints
                  
                }]
              }],
              navigator: {
                slider: {
                  minimum: new Date("2021-01-01"),
                  maximum: new Date("2021-03-01")
                }
              }
            }); 
            // https://canvasjs.com/data/docs/btcusd2018.json
            // http://127.0.0.1:5000/info/timeseries/MONTHLY_ADJUSTED/IBM
            $.getJSON(`http://127.0.0.1:5000/info/timeseries/MONTHLY_ADJUSTED/${test}`, function(data) {  
                
              for(var i = 0; i < data.length; i++){
                dataPoints.push({x: new Date(data[i].time), y: Number(data[i].close)});
              }

              
              stockChart.render();
            });
          }
          return (
              <div ClassName="container">
                <div ClassName="container">
    

                <div id="chartContainer" ></div>
                </div>
            </div>
        )
    }
    
}
