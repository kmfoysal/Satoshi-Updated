import MyDashBoard from "./components/MyDashBoard/MyDashBoard";
import GlobalDashboard from "./components/GlobalDashboard/GlobalDashboard";

import User from "./components/ConfigurationCom/User";
import Preferences from "./components/ConfigurationCom/Preferences";
import APIkeys from "./components/ConfigurationCom/APIkeys";


// export const MyDashboardTab = [
//     {
//         id: 1,
//         summaryIcon: summaryIcon1,
//         summaryHints: "Next Weekly Buy",
//         summaryMain: "1 day 10:54:58",
//         color: "#fff",
//     },
//     {
//         id: 2,
//         summaryIcon: summaryIcon2,
//         summaryHints: "Next Month Buy",
//         summaryMain: "10:55:27",
//         color: "#fff",
//     },
//     {
//         id: 3,
//         summaryIcon: summaryIcon3,
//         summaryHints: "Current Equty Value",
//         summaryMain: "1749 USD",
//         color: "#17BD8D",
//     },
//     {
//         id: 4,
//         summaryIcon: summaryIcon4,
//         summaryHints: "1938 USD",
//         summaryMain: "1938 USD",
//         color: "#FFA114",
//     },
//     {
//         id: 5,
//         summaryIcon: summaryIcon5,
//         summaryHints: "Profit Against USD",
//         summaryMain: "-9.7",
//         color: "#fff",
//     },
// ];

export const myDashboard = [
    {
        id: 1,
        componentName: <MyDashBoard />,
    },
];

export const globalDashboard = [
    {
        id: 2,
        componentName: <GlobalDashboard />,
    },
];


export const user = [
    {
        id: 1,
        componentName: <User />,
    },
];
export const preferences = [
    {
        id: 1,
        componentName: <Preferences />,
    },
];
export const aPIkeys = [
    {
        id: 1,
        componentName: <APIkeys />,
    },
];
