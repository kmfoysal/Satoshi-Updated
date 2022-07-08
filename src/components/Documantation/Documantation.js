import React, {useCallback, useEffect, useState} from 'react'
import {Tab} from 'bootstrap';
import {Table, Tabs} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import arrowPoint from '../../icons/arrowPoint.png';
import './Documantation.scss';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import ModalVideo from "react-modal-video";
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faRightLong} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

//DATA START HERE

const tabOne = [
  {
    img: arrowPoint,
    heading: 'Go to https://www.binance.com/ or https://www.binance.us/ or https://www.coinbase.com/ depending on your exchange',
    panel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non.'
  },
  
  {
    img: arrowPoint,
    heading: "Make sure you've completed your KYC",
    panel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non.'
  },
  
  {
    img: arrowPoint,
    heading: "In your profile settings, click API Management",
    panel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non.'
  },
  
  {
    img: arrowPoint,
    heading: "Follow Binance instructions to create a new API Key",
    panel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non.'
  },
  
  {
    img: arrowPoint,
    heading: "API permissions should only allow 'Enable Reading' & 'Enable' Spot & Margin Trading",
    panel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non.'
  },
]

const tabOneSection = [
  
  {
    btnTxt: "Make sure to Disable API withdrawals",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "Bot will not work unless the API check is successful",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "For more information about creating a Binance API, please visit: CoinBase API Guide",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "For more information about creating a CoinBase API, please visit: Binance API Guide",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  

]

const tabTwo = [
  {
    img: arrowPoint,
    heading: 'Configure all the Bot parameters*',
    panel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non.'
  },
  
  {
    img: arrowPoint,
    heading: "Make sure the Current Configuration panel reads all the configurations sent",
    panel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non.'
  },
  
  {
    img: arrowPoint,
    heading: "Test your API Connection to ensure successful Exchange integration",
    panel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non.'
  },

]

const tabTwoSection = [
  
  {
    btnTxt: "Make Sure to Test your API Connection before leaving the configuration page",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
]

const tabThree = [
  
  {
    btnTxt: "Make Sure to Test your API Connection before leaving the configuration page",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "BINANCE API Secret for trading autonomously",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "Make Sure to Test your API Connection configuration page",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "Maximum allowable USDT amount per position",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "How often will the Bot add/adjust your portfolio",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "Activate / Deactivate Bot new positions",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "Follow Binance instructions to create a new API Key",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "In your profile settings, click API Management",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "Make sure you've completed your KYC",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "Bot will not work unless the API check is successful",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },
  
  {
    btnTxt: "Make Sure to Test your API Connection before leaving the configuration page",
    panal: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, corporis dicta dignissimos eaque incidunt iusto, minima necessitatibus optio quidem reiciendis rem repudiandae voluptatibus. Ab debitis error in ipsa, molestias quas suscipit! Beatae, dicta dolorem et fugit illum maiores mollitia natus placeat quae quibusdam repellat velit voluptatibus. Nisi possimus, voluptate. At commodi delectus doloribus dolorum earum error exercitationem illo ipsum, itaque maiores necessitatibus numquam optio pariatur quisquam recusandae reprehenderit similique velit veritatis? At, consequuntur cum, cupiditate debitis deserunt eveniet, fuga harum incidunt molestias neque nobis placeat quas quibusdam quidem ratione reprehenderit repudiandae rerum sed? Illum iure magni minus molestiae non."
  },

]


//DATA END HERE
const Documantation = () => {
  const [isOpen, setOpen] = useState(false);
  
  // const [state, setState] = useState(false);
  //
  // const handleColor = (e) => {
  //   setState(!state);
  // };
  //
  
  const [textColor, setTextColor] = useState('black');
  
  const handleChnageTextColor = (e) => {
    setTextColor('#CCCCCC')
  }
  
  //TODO : EXPORT THE DOCUMENTATION DATA TO ANOTHER COMPONENT AND SHOWING THE ALL DATA.
  //TODO: CHANGE THE ACCORDION COLOR WHEN CLICKED.
  
  return (
    <React.Fragment>
      
      <div className="sectionPadding">
        <div className="documentationTab">
          <NavLink to="/" className="d-flex align-items-center gap-2 text-decoration-none ">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.7653 13.8657C7.45288 14.1781 6.94634 14.1781 6.63392 13.8657L1.83392 9.06571C1.5215 8.75329 1.5215 8.24676 1.83392 7.93434L6.63393 3.13434C6.94634 2.82192 7.45288 2.82192 7.7653 3.13434C8.07772 3.44676 8.07772 3.95329 7.7653 4.26571L4.33098 7.70002H13.5996C14.0414 7.70002 14.3996 8.0582 14.3996 8.50002C14.3996 8.94185 14.0414 9.30002 13.5996 9.30002L4.33098 9.30002L7.7653 12.7343C8.07771 13.0468 8.07772 13.5533 7.7653 13.8657Z"
                fill="#0D99FF"
              />
            </svg>
            <p className="mb-0 textclrBlue fs-13 fw-bold">back</p>
          </NavLink>
          <div className={"d-flex justify-content-between flex-wrap align-middle"}>
            <h1 className="text-white fs-36">Documentation</h1>
            
            <div data-tip="React-tooltip" className={"video_player"}>
              
              <ModalVideo channel='youtube' autoplay={true} isOpen={isOpen} videoId="rgA1qzcazBY"
                          onClose={() => setOpen(false)}/>
              <button onClick={() => setOpen(true)}>Video Instructions</button>
              <FontAwesomeIcon data-tip data-for='_info' icon={faCircleInfo}/>
              
              <ReactTooltip className={"customTheme"} id='_info' type='dark'>
                <span>This is an approximation of<br/>  when the bot will buy, not an <br/> exact time.</span>
              </ReactTooltip>
            
            </div>
          
          </div>
          
          {/*TABS START HERE*/}
          
          <div className="mt-4">
            <Tabs defaultActiveKey="first" className="documantationWrapper">
              
              {/*1ST TAB*/}
              <Tab eventKey="first" title="Where to Get your API Keys">
                
                <div className="tabContent pe-5 mb-3">
                  
                  <Accordion allowZeroExpanded>
                    {tabOne.map((tabOne) => (
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <div className="d-flex align-items-center gap-3">
                              <img src={tabOne.img} className="img-fluid" alt=""/>
                              <button className={"mb-0 w-100 text-start acBtn"}>
                                <span className={'tap-title'}>{tabOne.heading}</span>
                              </button>
                            </div>
                          </AccordionItemButton>
                        
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>{tabOne.panel}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                
                </div>
                
                {/*Another Section*/}
                
                {
                  tabOneSection.map((tabOneSection) => (
                    <Accordion className="d-flex align-items-center gap-3" allowZeroExpanded>
                      <AccordionItem className="tabContent tabContent2 d-block pe-5 mb-3 w-100">
                        
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <button
                              className={"mb-0 w-100 text-start acBtn active"}>
                              <span>{tabOneSection.btnTxt}</span>
                            </button>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        
                        <AccordionItemPanel>
                          <p>{tabOneSection.panal}</p>
                        </AccordionItemPanel>
                      
                      </AccordionItem>
                    </Accordion>
                  ))
                }
              
              </Tab>
              
              {/*2ND TAB*/}
              
              <Tab eventKey="second" title="How to Configure your Bot">
  
                <Accordion allowZeroExpanded>
                  {tabTwo.map((tabTwo) => (
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <div className="d-flex align-items-center gap-3">
                            <img src={tabTwo.img} className="img-fluid" alt=""/>
                            <button className={"mb-0 w-100 tabTwoSection"}>
                              <span className={'tap-title'}>{tabTwo.heading}</span>
                            </button>
                          </div>
                        </AccordionItemButton>
        
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{tabTwo.panel}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                {/*Another Section*/}
  
                {
                  tabTwoSection.map((tabTwoSection) => (
                    <Accordion className="d-flex align-items-center gap-3" allowZeroExpanded>
                      <AccordionItem className="tabContent tabContent2 d-block pe-5 mb-3 w-100">
          
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <button
                              className={"mb-0 w-100 text-start tabTwoSection"}>
                              <span>{tabTwoSection.btnTxt}</span>
                            </button>
                          </AccordionItemButton>
                        </AccordionItemHeading>
          
                        <AccordionItemPanel>
                          <p>{tabTwoSection.panal}</p>
                        </AccordionItemPanel>
        
                      </AccordionItem>
                    </Accordion>
                  ))
                }
                
                {/*TABLE*/}
                
                <div className="tabTable mt-5">
                  <h4 className="text-white fs-6 fw-semibold">Definitions</h4>
                  <div className="tabTableWrapper">
                    <Table striped hover size="sm">
                      <thead>
                      <tr>
                        <th>#</th>
                        <th>Parameter</th>
                        <th>Description</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>Activate Bot</td>
                        <td>Activate / Deactivate Bot new positions</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Weekly Trading</td>
                        <td>How often will the Bot add/adjust your portfolio</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Volume Weighted Buys</td>
                        <td>
                          While Buying new positions, the Bot will split the allowed Budget on the purchased coins
                          according to their trading volume. When this option is
                          deactivated the Bot will split the budget equality between coins
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Bot Budget</td>
                        <td>Maximum allowable USDT amount per position</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>API Key</td>
                        <td>BINANCE API Key for trading autonomously</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>API Secret</td>
                        <td>BINANCE API Secret for trading autonomously</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Select Exchange</td>
                        <td>Select your Crypto Exchange</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Current Bot Configurations</td>
                        <td>
                          A Table representing the user data configured in the Bot. In case your inputs were not
                          registered, try refreshing the webpage or sending the data
                          gain.
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Test API Connection</td>
                        <td>
                          For security reasons the API connection needs to be checked before usage to make sure the
                          provided API is valid and that the user has disabled All
                          Local/International withdrawals.
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                
                {/*TABLE END HERE*/}
              
              </Tab>
              
              {/*THIRD TAB*/}
              <Tab eventKey="third" title="Frequently asked questions">
  
                {
                  tabThree.map((tabThree) => (
                    <Accordion className="d-flex align-items-center gap-3" allowZeroExpanded>
                      <AccordionItem className="tabContent tabContent2 d-block pe-5 mb-3 w-100">
          
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <button
                              className={"mb-0 w-100 text-start tabTwoSection"}>
                              <span>{tabThree.btnTxt}</span>
                            </button>
                          </AccordionItemButton>
                        </AccordionItemHeading>
          
                        <AccordionItemPanel>
                          <p>{tabThree.panal}</p>
                        </AccordionItemPanel>
        
                      </AccordionItem>
                    </Accordion>
                  ))
                }
              
              </Tab>
            
            </Tabs>
          </div>
        </div>
      
      </div>
    </React.Fragment>
  );
}

export default Documantation