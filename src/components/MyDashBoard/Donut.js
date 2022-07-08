import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { Spinner } from 'react-bootstrap';


// class Donut extends Component {

  const Donut = () =>{

    const email = "lmatsinde@gmail.com"

    const [isLoading, setIsLoading] = useState(false);

    

    const [labels, setLabels]= useState([]);

    const [equity, setEquity] = useState([])

   


useEffect(()=>{
    setIsLoading(true);

    const label = [];
    const currentEquity = [];


    const getData= async()=>{
        const reqData= await fetch("https://tranquil-beyond-13898.herokuapp.com/table8");
        const resData= await reqData.json();
        
        resData.filter( em => em?.clientname === email).reverse()[0]?.coins.map(item =>  {
            label.push(item?.s)
            currentEquity.push(item?.q * item?.p)
            
           })

           setLabels(label)
           setEquity(currentEquity)
           setIsLoading(false);
        
    }

    getData()
    
},[])
    
   

        return (   
            <>
                {!isLoading && 
                    <div className="donut">
                    <Chart 
                    options={{chart: {
              
                        type: "donut",
                        // width: '100%'
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    // legend: {
                    //     position: "right",
                    //     offsetY: 0,  
                    //     // height: 230,
                    //     // width:200
                    // },
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
                
                    labels : labels
                    
                }} 
                    series={equity} 
                    type="donut" 
                    width={530} 
                    height={560} />
                </div>
                }

                {
                    isLoading &&  <div className='text-center'>
                        <Spinner className='my-4' animation="grow" variant="warning" />
                    </div>
                }
            </>
        );

}

export default Donut;