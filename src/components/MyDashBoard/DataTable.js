import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useSatoshi from '../../hooks/useSatoshi';
import coinImg1 from '../../icons/coinImg1.svg';

const DataTable = () => {

    const {email} = useSatoshi();

    const [tableData, setTableData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

  
  useEffect(()=>{
    setIsLoading(true);
    fetch('https://tranquil-beyond-13898.herokuapp.com/table8')
    .then(res=>res.json())
    .then(data => {
      setTableData(data);
      setIsLoading(false);
    });
  },[])

  return (
      <>
      <div className="tableWrapper">
          <h1 className="tableHeading m-0 mb-4">Coin on Hand</h1>
          <div className="cointable">
              <div className=" table-responsive">
                  <Table striped hover>
                      <thead>
                          <tr>
                              <th className=' text-nowrap'>Coin Name</th>
                              <th className=' text-nowrap'>Coin Price</th>
                              <th className=' text-nowrap'>QTY</th>
                          </tr>
                      </thead>
                      <tbody>
                    { !isLoading &&
                    tableData.filter( em => em?.clientname === email).reverse().map(item   => (                                   
                                item?.coins.map(i=>(
                                <tr key={i?.s}>
                                    <td className="d-flex align-items-center gap-2 text-nowrap">
                                        <img src={coinImg1} alt="icon" /> <span>{i?.s}</span>
                                    </td>
                                    <td>{(i?.p).toFixed(2)}</td>
                                    <td>{(i?.q).toFixed(2)}</td>
                                </tr>
                                    ))                                       
                            )).slice(0,1)
                            }
                      </tbody>
                  </Table>
                        {
                            isLoading &&  <div className='text-center'>
                                <Spinner className='my-4' animation="grow" variant="warning" />
                            </div>
                        }
              </div>
          </div>
          
      </div>
      </>
  );
}

export default DataTable