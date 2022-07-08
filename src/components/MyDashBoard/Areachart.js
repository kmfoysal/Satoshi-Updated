import { useEffect, useState } from "react";
// import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";


const Areachart = ({totalInvestmentValue, currentEquityValue }) =>{

    const email = "lmatsinde@gmail.com"


    const [isLoading, setIsLoading] = useState(false);

    

    const [investment, setInvesment] = useState([]);

    const [equity, setEquity] = useState([]);


    // const [allBtcRoi, setAllBtcRoi] = useState([]);



    const [btc, setBtc] = useState([]);

    const [btcRoi, setBtcRoi] = useState([]);


    const getAllBtc = [] ;

    // Use Table 2 
    useEffect(()=>{

        const allBtc = [];

        setIsLoading(true);

        // const timeWiseBtc = [];   
    
        const getData= async()=>{

            const reqData= await fetch("https://tranquil-beyond-13898.herokuapp.com/table2");

            const resData= await reqData.json();
            
            resData.filter( em => em?.clientname === email && em?.estequity != null && em?.coins.length !== 0).map(item => {
                
                allBtc.push({

                time: item?.time, 

                btcEquity: (item?.estequity * 0.95),

                btcQuantity : (item?.estequity * 0.95)/ item.coins.filter(cn=> cn?.s === 'BTCUSDT').map(i=>(i?.p)),

                sumOfQuantity: ((item?.estequity * 0.95)/ item.coins.filter(cn=> cn?.s === 'BTCUSDT').map(i=>(i?.p)))* item.coins.filter(cn=> cn?.s === 'BTCUSDT').map(i=>(i?.p)),

                btCoin: item.coins.filter(cn=> cn?.s === 'BTCUSDT').map(i=>({
                    coinName: i?.s,
                    coinPrice: i?.p,
                    coinQuantity: i?.q,

                    })),
                });


                getAllBtc.push(
                    
                    //     btc.map(i=> (i?.time)),
                    // currentCoinPrice

                    [
                        item?.time
                    ]
                    
            
                )
            
            })

    
            setBtc(allBtc)
            setBtcRoi(getAllBtc)
    
               setIsLoading(false);
    
            
        }
    
        getData()
        
    },[])

    console.log(getAllBtc);

    


    let totalBtcQuantity = btc.map(item => (item?.btcQuantity ))

    console.log(totalBtcQuantity);



    const getTotalBtcQuantity = (arr) =>{
        let total = 0;

        for(var i in arr) { 
            total += arr[i];
        }

        return total;
    }

    let totalBtcQuantityValue = getTotalBtcQuantity(totalBtcQuantity)

    console.log(totalBtcQuantityValue);


    let currentCoinPrice = btc.map(i => ( i.btCoin.map( cp => cp?.coinPrice * totalBtcQuantityValue)))


    console.log(currentCoinPrice);


    let roi = totalBtcQuantityValue*currentCoinPrice

    console.log(roi);
















    useEffect(()=>{

        setIsLoading(true);

        const currentEquity = [];


        const getData= async()=>{
            const reqData= await fetch("https://tranquil-beyond-13898.herokuapp.com/equityvalue");
            const resData= await reqData.json();
            
            resData.map(item => {
                
                currentEquity.push([
                item?.time, 
                (item?.currentvalue).toFixed(0)
            ])})

            setEquity(currentEquity)

            setIsLoading(false);

            
        }

        // console.log(equity.map(i=> (i?.time , i?.currentvalue)));

        getData()
        
    },[])


    useEffect(()=>{

        setIsLoading(true);

        const allInvestment = [];


        const getData= async()=>{
            const reqData= await fetch("https://tranquil-beyond-13898.herokuapp.com/table2");
            const resData= await reqData.json();
            
            resData.filter( em => em?.clientname === email && em?.estequity !== null && em?.coins !== []).map(item => {
                
                allInvestment.push([
                item?.time, 
                Math.ceil(item?.estequity * 0.95)
            ])})

            setInvesment(allInvestment)

            setIsLoading(false);
        }

        // console.log(equity.map(i=> (i?.time , i?.currentvalue)));

        getData()
        
    },[])


    // Use Table 2 
    // useEffect(()=>{

    //     setIsLoading(true);

    //     // const timeWiseBtc = [];

    //     const getAllBtc = []   
    
    //     const getData= async()=>{
    //         const reqData= await fetch("https://tranquil-beyond-13898.herokuapp.com/equityvalu");
    //         const resData= await reqData.json();
            
    //         resData.filter( em => em?.clientname === email && em?.estequity != null && em?.coins.length !== 0).map(item => {  

    //             allBtcRoi.push([
    //                 item?.time,
    //                 ((item?.estequity * 0.95)/ item.coins.filter(cn=> cn?.s === 'BTCUSDT').map(i=>(i?.p)))* item.coins.filter(cn=> cn?.s === 'BTCUSDT').map(i=>(i?.p)),
    //             ])


            
    //         })

    
    //         setAllBtcRoi(allBtcRoi)

    //         console.log(getAllBtc);
    
    //            setIsLoading(false);
    
            
    //     }
    
    //     getData()
        
    // },[])




    return(
        <>
            <div>
                    <ReactApexChart  
                    options={
                        {
                    selection: 'one_year',
                       colors : ["#17BD8D", "#FF3F78"],
                       chart: {
                        type: "area",
                        width: '100%',
                        toolbar: false
                    },

                    stroke: {
                        show: true,
                        width: 1,
                        colors: ["#17BD8D", "#FF3F78"],
                        curve:'straight'
                      },

                      fill: {
                        colors: ["#26C597", "#FF3F78"],
                        opacity: 0.15
                      },

                    grid: {
                        show: true,
                        borderColor: '#202124',
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
                    dataLabels: {
                        enabled: false,
                    },
                    legend: {
                        show: true,
                        position: "top",
                        showForSingleSeries: true,
                        offsetX: 250,
                        offsetY: 0,
                        colors: ["#fff", "#fff"] ,
                        labels: {
                            colors: ["#fff", "#fff"] ,
                            useSeriesColors: false,
                        }, 
                        fontSize: '14px',
                        fontWeight: 500,
                    },
                    noData:{text:"Data is Loading ...."},
                    responsive: [
                        {
                            breakpoint: 1600,
                            options: {
                                chart: {
                                    width: "500",
                                },
                                // legend: {
                                //     show: false,
                                // },
                            },
                        },
                        {
                            breakpoint: 575,
                            options: {
                                chart: {
                                    width: "300",
                                    height:"300"
                                },
                                legend: {
                                    show: true,
                                },
                            },
                        },
                
                    ],
                
                    // labels : labels

                    xaxis: {
                        type: 'datetime',
                        min: new Date(),
                        tickAmount: 12,
                      },
                    yaxis: {
                        labels: {
                          formatter: function(val, index) {
                            return "$" + val.toFixed(0);
                          },
                          style:{ fontSize:14, fontWeight:500}
                        }
                      }
                      
                    
                }
                
            } 

                
                
                series={[
                    {
                        name: `Equity Value (${currentEquityValue} USD)`,
                        data: equity
                    },
                    {
                        name: `Investment (${totalInvestmentValue} USD)`,
                        data: investment
                    },
                    {
                        name: `BTC ROI (${roi} USD)`,
                        data: btcRoi
                    },
             ]}             
                    type="area" 
                    />
                </div>
        </>
    )
}


export default Areachart;
