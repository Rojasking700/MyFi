import React, { Component } from 'react'
import $ from 'jquery'; 

import CanvasJSReact from '../canvasjs.stock.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


 
export default class Charts extends Component {
    constructor(){
        super();
        this.state={ 
            stuff : []
        }
    }
      
    // componentDidMount(){
    //     fetch("https://canvasjs.com/data/docs/btcusd2018.json")
    //         .then(res => res.json())
    //         .then(data => this.setState({stuff: data}))
    // }
      
      
      render() {

        const stuff = this.state.stuff
        console.log('stuff',stuff)
       
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
                  fontColor: "blue",
                  text: "StockChart Title"
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
                  minimum: new Date("2018-01-01"),
                  maximum: new Date("2018-03-01")
                }
              }
            }); 
          
            $.getJSON(`https://canvasjs.com/data/docs/btcusd2018.json`, function(data) {  
              for(var i = 0; i < data.length; i++){
                dataPoints.push({x: new Date(data[i].date), y: Number(data[i].close)});
              }
              
              stockChart.render();
            });
          }
          return (
              <div ClassName="container">

                chart
                {/* <canvas ClassName="myChart4" width="400" height="400"></canvas> */}
                {/* <CanvasJSChart options = {options} /> */}
                <div id="chartContainer" ></div>
            </div>
        )
    }
}
