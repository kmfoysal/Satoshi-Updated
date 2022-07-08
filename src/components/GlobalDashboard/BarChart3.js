import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import useSatoshi from '../../hooks/useSatoshi';


const BarChart3 = ()=> {

    const {email, users} = useSatoshi();

    const [isLoading, setIsLoading] = useState(false)

    const [data, setData] = useState([]);

    const [bnCoins, setBnCoins] = useState([]);

    const [bnUsCoins, setBnUsCoins] = useState([]);





    useEffect(()=>{

        setIsLoading(true);

        let bn = [];
        let bnUs = [];

            // console.log(bn);

            const getData= async()=>{
                const reqData= await fetch("https://tranquil-beyond-13898.herokuapp.com/table6");
                const resData= await reqData.json();
                
                resData.map(i=>{
                    if( i?.theid === 1){
                        i.weeklycoins.map(c=> bn.push({
                            coinName: c?.s,
                            coinPrice: c?.P,
                            coinValue: c?.V
        
                        }))
                    }
                    else if( i?.theid === 2){
                        i.weeklycoins.map(c=> bnUs.push({
                            coinName: c?.s,
                            coinPrice: c?.P,
                            coinValue: c?.V 
        
                        }))
                    }
            })
                

            setBnCoins(bn);
            setBnUsCoins(bnUs);
        }

        getData();

        setIsLoading(false);

    },[]);
    


    useEffect(()=>{
        setIsLoading(true);

        users.filter(em=>em?.clientname === email).map(i => {

            if( i?.exch === 'BN'){
                setData(bnCoins)
            }
            else if( i?.exch === 'BNUS'){
                setData(bnUsCoins)
            }

        })


        console.log(data.map(i=>(i.coinName)));

        setIsLoading(false);
        
       
    },[bnCoins, bnUsCoins, data,email,users])

        return (
            <div>
                <div id="chart">
                    <ReactApexChart 
                    options={{
                        noData:{text:"Data is Loading ...."},
                        chart: {
                            height: 180,
                            type: "bar",
                            background: "#191A1D",
        
                            toolbar: {
                                show: false,
                            },
                        },
                        dataLabels: {
                            enabled: true,
                            formatter: function(val) {
                                return "$" + Number(val).toLocaleString() + "M";
                              },
                            offsetY: 250,
                            style: {
                                fontSize: "12px",
                                colors: ["#17BD8D"]
                            }
                        },
                        stroke: {
                            width: 0,
                        },
                        grid: {
                            show: true,
                            borderColor: "#202124",
                            strokeDashArray: 0,
                            position: "back",
                            xaxis: {
                                lines: {
                                    show: true,
                                },
                            },
                            yaxis: {
                                lines: {
                                    show: true,
                                },
                            },
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: "10px",
                                borderRadius: 6,
                                colors: {
                                    ranges: [
                                        {
                                            from: 0,
                                            to: 0,
                                            color: undefined,
                                        },
                                    ],
                                    backgroundBarColors: ["#202124"],
                                    backgroundBarOpacity: 1,
                                    backgroundBarRadius: 4,
                                },
                            },
                        },
                        xaxis: {
                            labels: {
                                rotate: -45,
                            },
                      
                            axisBorder: {
                                show: false,
                            },
                            axisTicks: {
                                show: false,
                            },
                            categories: data.map(i=>(i.coinName )),
                            tickPlacement: "on",
                        },
                        yaxis: {
                            show: false,
                        },
        
                        fill: {
                            type: "gradient",
                            // gradient: {
                            //     shade: "light",
                            //     type: "vertical",
                            //     shadeIntensity: 0.2,
                            //     gradientToColors: undefined,
                            //     inverseColors: false,
                            //     opacityFrom: 0.85,
                            //     opacityTo: 0.85,
                            //     stops: [10, 5, 100],
                            // },
        
                            gradient: {
                                type: "vertical",
                                shadeIntensity: 1,
                                opacityFrom: 0.7,
                                opacityTo: 0.9,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "#17BD8D",
                                        opacity: 1,
                                    },
                                    {
                                        offset: 20,
                                        color: "#17BD8D",
                                        opacity: 1,
                                    },
                                    {
                                        offset: 60,
                                        color: "#FF4E3E",
                                        opacity: 1,
                                    },
                                    {
                                        offset: 100,
                                        color: "#FF4E3E",
                                        opacity: 1,
                                    },
                                ],
                            },
                        },
                    }} 
                    series={
                        [
                            {
                                name: "Volume",
                                data: data.map(i=>(i.coinValue/1000000 ).toFixed(2)),
                            }
                        ]
                    } 
                    type="bar" 
                    height={260} />
                </div>
            </div>
        );
}

export default BarChart3;
