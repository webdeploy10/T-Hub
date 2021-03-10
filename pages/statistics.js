import Navbar from "../components/navbar";
import Header from "../components/headers";
import { React, Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

class Statistics extends Component {

    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "https://t-hub-api.herokuapp.com/conexions/stats",
        })
            .then((response) => {
                //alert(response);
                this.setState({data: response});
                
            })
            .catch(function (response) {
                //alert(response);
            });
    }


    getDataForGraph = (labelP) =>{
        var dataA = this.state.data.data;
        if(dataA !== undefined)
        {
            var dataG = {
                labels: [],
                datasets: [{
                    label: labelP,
                    data: [],
                    backgroundColor: "rgb(52, 55, 235, 0.5)",
                }]
            }
            
            for(var i =0;i<dataA.length;i++)
            {
                if(i=== 0)
                {
                    dataG.labels[0] = dataA[0];
                    dataG.datasets[0].data[0] = 1;
                }
                else
                {
                    var flag =0;
                    for(var h=0;h<dataG.labels.length; h++)
                    {
                        if(dataG.labels[h] == dataA[i])
                        {
                            dataG.datasets[0].data[h]++;
                            flag = 1;
                            break;
                        }
                    }
                    if(!flag)
                    {
                        dataG.datasets[0].data[dataG.labels.length] = 1;
                        dataG.labels[dataG.labels.length] = dataA[i];
                    }
                }
            }
            return dataG;
        }
        else
        {
        }
    }

    render() {
        return (
            <div>
                <title>Stats</title>
                <Header />
                <Navbar />
                <br />
                <center>
                    <div className="container">
                        <div className="jumbotron">
                            <h1 className="display-4">Frequency Graph</h1>
                            <hr className="my-4" />
                            <div className="container">
                                <Line
                                    data={this.getDataForGraph("Accesses")}
                                    height={400}
                                    width={600}
                                />
                            </div>
                        </div>
                    </div>
                    
                </center>
            </div>)
    }

}

export default Statistics;