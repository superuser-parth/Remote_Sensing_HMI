import { tokens } from "../theme";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect } from 'react';



const firebaseConfig = {
  apiKey: "AIzaSyD8GQluVh4cndeOO09cA8tt22hrv4vosCA",
  authDomain: "telecomsmps.firebaseapp.com",
  databaseURL: "https://telecomsmps-default-rtdb.firebaseio.com",
  projectId: "telecomsmps",
  storageBucket: "telecomsmps.appspot.com",
  messagingSenderId: "872319714203",
  appId: "1:872319714203:web:9307d0579ce272bb79573e",
  measurementId: "G-W9ZJ87BE2S"
};

firebase.initializeApp(firebaseConfig);
const db = getDatabase();

/*let current1Value; // declare a variable to store the value

const current1Ref = ref(db, 'UsersData2/readings/current1');
onValue(current1Ref, (snapshot) => {
  const current1 = snapshot.val();
  current1Value = current1; // update the variable with the new value  
  console.log(current1Value);
  mockDataTeam[0].value = current1Value;
 
});



/*const current1Ref = ref(db, 'UsersData2/readings/current1');
onValue(current1Ref, (snapshot) => {
  const current1 = snapshot.val();
  updateCurrent1Value(current1); // call function with the new value
});*/
const mockDataTeam = [
  {
    id: 1,
    current: "RECTIFIER CURRENT",
    value: null, // initialize value to null
    access: "Safe",
  },
  {
    id: 2,
    current: "BATTERY CURRENT",
    value: null,
    access: "Safe",
  },
  {
    id: 3,
    current: "AC CURRENT IN",
    value: null,
    access: "Safe",
  },
];


/*const current1Ref = ref(db, 'UsersData2/readings/current1');
onValue(current1Ref, (snapshot) => {
  const current1 = snapshot.val();
  mockDataTeam[0].value = current1; // update value of first object
  console.log(mockDataTeam); // log updated mockDataTeam array
});*/

const currentRef = ref(db, 'UsersData2/readings');
onValue(currentRef, (snapshot) => {
  const data = snapshot.val();
  const current1 = data.current1;
  const current2 = data.current2;
  const current3 = data.current3;

  // update the mock data team
  mockDataTeam[0].value = current1;
  mockDataTeam[1].value = current2;
  mockDataTeam[2].value = current3;

  if(current1<=0){
    mockDataTeam[0].access="Unsafe";
  }else{
    mockDataTeam[0].access="Safe";
  }

  if(current2<=0){
    mockDataTeam[1].access="Unsafe";
  }else{
    mockDataTeam[1].access="Safe";
  }

  if(current3<=0 ){
    mockDataTeam[2].access="Unsafe";
  }else {
    mockDataTeam[2].access="Safe";
  }


  
  console.log(mockDataTeam);
});

export { mockDataTeam };




const mockDataContacts = 
[
  {
    id: 1,
    voltage: "AC VOLTAGE IN",
    value: null,
    access: "Safe",
  },
  {
    id: 2,
    voltage: "DC VOLTAGE OUTPUT",
    value: null,
    access: "Safe",
  },
  
];

const voltageRef = ref(db, 'UsersData2/readings');
onValue(voltageRef, (snapshot) => {
  const data = snapshot.val();
  const voltage1 = data.voltage1;
  const voltage2 = data.voltage2;

  // update the mock data team
  mockDataContacts[0].value = voltage1;
  mockDataContacts[1].value = voltage2;

  if(voltage1>270 || voltage1<170){
    mockDataContacts[0].access="Unsafe";
  }else{
    mockDataContacts[0].access="Safe";
  }

  if(voltage2>270 || voltage2<170){
    mockDataContacts[1].access="Unsafe";
  }else{
    mockDataContacts[1].access="Safe";
  }


  console.log(mockDataContacts);
});

export { mockDataContacts };







const mockDataInvoices = 
[
  {
    id: 1,
    error: "LOW TEMPERATURE SHUTDOWN",
    value: null,
    access:"Safe",
  },
  {
    id: 2,
    error: "HIGH TEMPERATURE SHUTDOWN",
    value: null,
    access: "Safe",
  },
  {
    id: 3,
    error: "RECTIFIER FAIL",
    value: null,
    access: "safe",
  },
  {
    id: 4,
    error: "OUTPUT OVER VOLTAGE",
    value: null,
    access:"Safe",
  },
  {
    id: 5,
    error: "FAN FAILURE",
    value: null,
    access: "Safe",
  },
  {
    id: 6,
    error: "OUTPUT LOW VOLTAGE",
    value: null,
    access: "safe",
  },
];

const errorRef = ref(db, 'UsersData2/readings');
onValue(errorRef, (snapshot) => {
  const data = snapshot.val();
  const error1 = data.error1;
  const error2 = data.error2;
  const error3 = data.error3;
  const error4 = data.error4;
  const error5 = data.error5;
  const error6 = data.error6;

  // update the mock data team
  mockDataInvoices[0].value = error1;
  mockDataInvoices[1].value = error2;
  mockDataInvoices[2].value = error3;
  mockDataInvoices[3].value = error4;
  mockDataInvoices[4].value = error5;
  mockDataInvoices[5].value = error6;

  if(error1==1){
    mockDataInvoices[0].access="Unsafe";
  }else{
    mockDataInvoices[0].access="Safe";
  }

  if(error2==1){
    mockDataInvoices[1].access="Unsafe";
  }else{
    mockDataInvoices[1].access="Safe";
  }

  if(error3==1){
    mockDataInvoices[2].access="Unsafe";
  }else{
    mockDataInvoices[2].access="Safe";
  }

  if(error4==1){
    mockDataInvoices[3].access="Unsafe";
  }else{
    mockDataInvoices[3].access="Safe";
  }

  if(error5==1){
    mockDataInvoices[4].access="Unsafe";
  }else{
    mockDataInvoices[4].access="Safe";
  }

  if(error6==1){
    mockDataInvoices[5].access="Unsafe";
  }else{
    mockDataInvoices[5].access="Safe";
  }




  console.log(mockDataInvoices);
});



export { mockDataInvoices };

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];


// Reference to the Firebase database


const mockLineData = [
  {
    id: "Current1",
    color: tokens("dark").greenAccent[500],
    data: [],
  },
  {
    id: "Current2",
    color: tokens("dark").blueAccent[300],
    data: [],
  },
  {
    id: "Current3",
    color: tokens("dark").blueAccent[300],
    data: [],
  },
];

const readingsRef = ref(db, 'UsersData2/readings');

// Set up the real-time listener
onValue(readingsRef, (snapshot) => {
  const data = snapshot.val();

  // Get the current timestamp
  const currentTimestamp = new Date().getTime();

  // Update the values in the mockLineData array
  mockLineData[0].data.push({ x: currentTimestamp, y: data.current1 });
  mockLineData[1].data.push({ x: currentTimestamp, y: data.current2 });
  mockLineData[2].data.push({ x: currentTimestamp, y: data.current3 });

  // Rest of your code to update access status or perform other operations

  // Log the updated mockLineData array
  console.log(mockLineData);
});

export { mockLineData };


/*const mockVLineData = [
  {
    id: "Voltage1",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: mockDataContacts[0].timestamp,
        y: mockDataContacts[0].value,
        
      },
    
    ],
  },
  {
    id: "Voltage2",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: mockDataContacts[1].timestamp,
        y: mockDataContacts[1].value,
      }
    ],
  },
  
  
];
const readingRef = ref(db, 'UsersData2/readings');

// Set up the real-time listener
onValue(readingRef, (snapshot) => {
  const data = snapshot.val();

  // Get the current timestamp
  const currentTimestamp = new Date().getTime();

  // Update the values in the mockLineData array
  mockVLineData[0].data[0].x=currentTimestamp;
  mockVLineData[0].data[0].y=data.current1;
  mockVLineData[1].data[0].x = currentTimestamp;
  mockVLineData[1].data[0].y = data.current2;
  

  // Rest of your code to update access status or perform other operations

  // Log the updated mockLineData array
  console.log(mockLineData);
});

export {mockVLineData};
*/

const mockVLineData = [
  {
    id: "Voltage1",
    color: tokens("dark").greenAccent[500],
    data: [],
  },
  {
    id: "Voltage2",
    color: tokens("dark").blueAccent[300],
    data: [],
  },
];

const readingRef = ref(db, 'UsersData2/readings');

// Set up the real-time listener
onValue(readingRef, (snapshot) => {
  const data = snapshot.val();

  // Get the current timestamp
  const currentTimestamp = new Date().getTime();

  // Update the values in the mockVLineData array
  mockVLineData[0].data.push({ x: currentTimestamp, y: data.voltage1 });
  mockVLineData[1].data.push({ x: currentTimestamp, y: data.voltage2 });

  // Rest of your code to update access status or perform other operations

  // Log the updated mockVLineData array
  console.log(mockVLineData);
});

export { mockVLineData };



export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
