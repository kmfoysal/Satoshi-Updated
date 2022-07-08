import { Alert } from "bootstrap";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MultiStepForm from "./components/AccountSetup/MultiStepForm/MultiStepForm";
import FailedStep from "./components/AccountSetup/Step/FailedStep/FailedStep";
import StepFinal from "./components/AccountSetup/Step/SuccessStep/StepFinal";
import ConfirmPass from "./components/ConfirmPass/ConfirmPass";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Documantation from "./components/Documantation/Documantation";
import ForgetPass from "./components/ForgetPass/ForgetPass";
import Login from "./components/Login/Login";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Settings from "./components/Settings/Settings";
import SideBar from "./components/SideBar/SideBar";
import AuthProvider from "./context/AuthProvider";
import AlertGroup from "./pages/Alert/AlertGroup";
import Alertrule from "./pages/Alert/Alertrule";
import Silence from "./pages/Alert/Silence";
import Configaration from "./pages/Configaration/Configaration";
import Browse from "./pages/Dashboard/Bowse";
import Dashboard from "./pages/Dashboard/Dashboard";
import LibraryPanel from "./pages/Dashboard/LibraryPanel";
import Playlist from "./pages/Dashboard/Playlist";
import Snapshort from "./pages/Dashboard/Snapshort";
import AdminControl from "./components/AdminControl/AdminControl";
import useSatoshi from "./hooks/useSatoshi";


function App() {

    const {email} = useSatoshi();

    const [isLoading, setIsLoading] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

    const [btc, setBtc] = useState([]);

    // const [btcRoi, setBtcRoi] = useState([]);


    const allBtc = [];

    // Use Table 2 
    useEffect(()=>{

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
                })
            
            })

    
            setBtc(allBtc)

            // console.log(allBtc);
    
               setIsLoading(false);
    
            
        }
    
        getData()
        
    },[])

    // ------------------------------------------


    // Use Table 7

    // useEffect(()=>{

    //     setIsLoading(true);

    //     // const timeWiseBtc = [];   
    
    //     const getData= async()=>{
    //         const reqData= await fetch("https://tranquil-beyond-13898.herokuapp.com/equityvalue");
    //         const resData= await reqData.json();
            
    //         resData.filter( em => em?.currentvalue != null && em?.coins.length !== 0).map(item => {
                
    //             allBtc.push({
    //             time: item?.time, 
    //             btcEquity: (item?.currentvalue * 0.95),
    //             btcQuantity : (item?.currentvalue * 0.95)/ item.coins.filter(cn=> cn?.s === 'BTCUSDT').map(i=>(i?.p)),
    //             btCoin: item.coins.filter(cn=> cn?.s === 'BTCUSDT').map(i=>({
    //                 coinName: i?.s,
    //                 coinPrice: i?.p,
    //                 coinQuantity: i?.q,

    //                })),
    //             })
            
    //         })

    
    //         setBtc(allBtc)

    //         console.log(allBtc);
    
    //            setIsLoading(false);
    
            
    //     }
    
    //     getData()
        
    // },[])

    // ------------------------------------------


    let totalBtcQuantity = btc.map(item => (item?.btcQuantity ))

    // console.log(totalBtcQuantity);



    const getTotalBtcQuantity = (arr) =>{
        let total = 0;

        for(var i in arr) { 
            total += arr[i];
        }

        return total;
    }

    let totalBtcQuantityValue = getTotalBtcQuantity(totalBtcQuantity)

    // console.log(totalBtcQuantityValue);


    let currentCoinPrice = btc.map(i => ( i.btCoin.map( cp => cp?.coinPrice)))


    // console.log(currentCoinPrice);


    let btcRio = parseInt(totalBtcQuantityValue*currentCoinPrice)

    // console.log(btcRio);




    return (
        <AuthProvider>
            <BrowserRouter basename="/satoshiClientSide">
            <div className="main-container">
                <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div className={"main-wrapper " + (menuOpen && "overLay")}>
                    <NavigationBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Routes>
                        <Route path={"/"} element={<Dashboard menuOpen={menuOpen} setMenuOpen={setMenuOpen}  btcRio={btcRio} totalBtcQuantityValue={totalBtcQuantityValue} />}></Route>
                        <Route path={"/dashboard"} element={<Dashboard menuOpen={menuOpen} setMenuOpen={setMenuOpen} btcRio={btcRio} totalBtcQuantityValue={totalBtcQuantityValue}/>}></Route>
                        <Route path={"/admincontrol"} element={<AdminControl/>}/>
                        <Route path={"/configaration"} element={<Configaration />}></Route>
                        <Route path={"/documantation"} element={<Documantation />}></Route>
                        <Route path={"/login"} element={<Login />}></Route>
                        <Route path={"/setting"} element={<Settings />}></Route>
                        <Route path={"/create_account"} element={<CreateAccount></CreateAccount>}></Route>
                        <Route path={"/forget_password"} element={<ForgetPass />}></Route>
                        <Route path={"/confirm_password"} element={<ConfirmPass></ConfirmPass>}></Route>
                        <Route path={"/multi_step_form"} element={<MultiStepForm />} />
                        <Route path={"/final_step"} element={<StepFinal />} />
                        <Route path={"/failed_step"} element={<FailedStep />} />
                        <Route path={"/browse"} element={<Browse />} />
                        <Route path={"/playlist"} element={<Playlist />} />
                        <Route path={"/libraryPanel"} element={<LibraryPanel />} />
                        <Route path={"/snapshots"} element={<Snapshort />} />
                        <Route path={"/alert"} element={<Alert />} />
                        <Route path={"/alertgroup"} element={<AlertGroup />} />
                        <Route path={"/alertrule"} element={<Alertrule />} />
                        <Route path={"/silence"} element={<Silence />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </AuthProvider>
    );
}

export default App;
