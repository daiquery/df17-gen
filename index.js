// credit to SSG Harp & PFC Bigman for logical thinking
// why didnt i use python?? waaaaaaaaa waaaaa thats because i dont know python enjoy it

const fs = require('fs') // node.js required
const createFile = (fileName) => fs.createWriteStream(fileName);  

// todo: look for a better way to implement this there should be a more-vanilla way
const toBin = (hex) => hex.split('').map(i => 
    parseInt(i, 16).toString(2).padStart(4, '0')).join('');

// todo: learn how to generate ENTIRETY of message, including ID
let baseStr = "8d3c5ee69901bd9540078d37335f".toUpperCase();

// feels redundant/weird
bin = toBin(baseStr);

// hard-coded kitty-cat values thx douglas

const posCatArr = [
    [33.35759+83, -82+83],
    [33.35759+83, -81+83],
    [33.469845+83, -82+83],
    [33.7+83, -82+83],
    [33.9+83, -82+83],
    [33.469845+83, -81+83],
    [33.7+83, -81+83],
    [33.9+83, -82+83],
    [34.4+83, -81.3+83],
    [34.5+83, -81+83],
    [34.6+83, -80.8+83],
    [34.7+83, -80.6+83],
    [34.8+83, -80.8+83],
    [34.9+83, -81+83],
    [35+83, -81.3+83],
    [35.2+83, -82.1+83],
    [35.5+83, -82.4+83],
    [35.7+83, -82.4+83],
    [35.9+83, -82.4+83],
    [36.1+83, -82.4+83],
    [36.3+83, -82.4+83],
    [36.8+83, -81.3+83],
    [36.92+83, -81+83],
    [37+83, -80.8+83],
    [37.1+83, -80.6+83],
    [37.2+83, -80.8+83],
    [37.3+83, -81+83],
    [37.4+83, 81.3+83],
    [38+83, -81+83],
    [38.2+83, -81+83],
    [38.4+83, -81+83],
    [38.6+83, -81+83],
    [38+83, -82+83],
    [38.2+83, -82+83],
    [38.4+83, -82+83],
    [38.6+83, -82+83]
];

const catArray = [
    [-103.35759, 82],
    [-103.35759, 81],
    [-103.469845, 82],
    [-103.7, 82],
    [-103.9, 82],
    [-103.469845, 81],
    [-103.7, 81],
    [-103.9, 82],
    [-104.4, 81],
    [-104.5, 81],
    [-104.6, 80],
    [-104.7, 80],
    [-104.8, 80],
    [-104.9, 81],
    [-105, 81],
    [-105.2, 82],
    [-105.5, 82],
    [-105.7, 82],
    [-105.9, 82],
    [-106.1, 82],
    [-106.3, 82],
    [-106.8, 81],
    [-106.92, 81],
    [-107, 80],
    [-107.1, 80],
    [-107.2, 80],
    [-107.3, 81],
    [-107.4, 81],
    [-108, 81],
    [-108.2, 81],
    [-108.4, 81],
    [-108.6, 81],
    [-108, 82],
    [-108.2, 82],
    [-108.4, 82],
    [-108.6, 82]
];

// SUBSTRING INDEX LOCATIONS FOR FUTURE REFERENCE, UNUSED
    
const df = bin.substring(0, 5)
const ca = bin.substring(5,8)
const icao = bin.substring(8,32)
const data = bin.substring(32,88)
const tc = bin.substring(32,37)
const pi = bin.substring(88,112);
const lat = bin.substring(54,71);
const lon = bin.substring(71,88);

// creates binary without PI/CRC validation
const createNewBin = (bin, lat, lon) => bin.substring(0,54) + lat + lon;

// generates CPR-formatted lat/long based on ads-b formula
// https://mode-s.org/decode/content/ads-b/1-basics.html 

// const cprLat = (lat, odd) => {
//     console.log(lat);
//     console.log(Math.floor(Math.abs(((lat/6) - 8)*131074)))
//     lat = Math.floor(Math.abs(((lat/6) - 8)*131074)).toString(2);
//     lat = lat.length < 17 ? lat.padStart(17,'0') : (lat.length > 17 ? lat = lat.slice(0,17) : lat)
//     return lat;
// };

// const cprLon = (lon, odd) => {
//     lon = Math.floor(Math.abs(((lon/10))*131074)).toString(2);
//     lon = lon.length < 17 ? lon.padStart(17,'0') : (lon.length > 17 ? lon = lon.slice(0,17) : lon)
//     return lon;

// }

function cprLat(latitude, isOddFrame) {
    const Nb = 17;
    const Nz = 15;
    const dLatEven = 360 / (4 * Nz);
    const dLatOdd = 360 / (4 * Nz - 1);
  
    const dLat = isOddFrame ? dLatOdd : dLatEven;
    const latIndex = Math.floor(latitude / dLat);
    const cprLat = Math.floor(((latitude - latIndex * dLat) / dLat) * Math.pow(2, Nb)).toString(2);
    console.log(`${isOddFrame} check this out hell yea: ` + Math.floor(((latitude - latIndex * dLat) / dLat) * Math.pow(2, Nb)))
    formatLat = cprLat.length < 17 ? cprLat.padStart(17,'0') : (cprLat.length > 17 ? cprLat = cprLat.slice(0,17) : cprLat)

  
    return formatLat;
  }
  
  function cprLon(longitude, latitude, isOddFrame) {
    const Nb = 17;
  
    function NL(lat) {
      const a = 1 - Math.cos((Math.PI / 180) * Math.abs(lat));
      return Math.floor(2 * Math.PI / Math.acos(1 - a));
    }
  
    const nl = NL(latitude) - isOddFrame;
    const dLon = 360 / nl;
    const lonIndex = Math.floor(longitude / dLon);
    const cprLon = Math.floor(((longitude - lonIndex * dLon) / dLon) * Math.pow(2, Nb)).toString(2);
    formatLon = cprLon.length < 17 ? cprLon.padStart(17,'0') : (cprLon.length > 17 ? cprLon = cprLon.slice(0,17) : cprLon)

    return formatLon;
  }
  
  


  
  

// CRC CALCULATOR BASED ON MODE-S ORG PROVIDED PSEUDOCODE
// https://mode-s.org/decode/content/ads-b/8-error-control.html for crc generation pseudocode & breakdown

function calculateCRC(binary) {
    const generator = 0x1FFF409; 
    let data = BigInt('0b' + binary + '000000000000000000000000');

    for (let i = 0; i <= binary.length - 1; i++) {
        if ((data >> BigInt(112 - 1 - i)) & BigInt(1)) {
            data ^= BigInt(generator) << BigInt(112 - 25 - i);
        }
    }
    const remainder = data & BigInt(0xFFFFFF);
    return remainder.toString(2).padStart(24, 0); // as binary
//    return remainder.toString(16).toUpperCase().padStart(6, '0'); // as hex
}

const createMessage = (baseHex, lat, lon) => {
    binBase = toBin(baseHex);
    console.log("odd or even: " + binBase[54])
    preCRC = createNewBin(binBase,cprLat(lat, binBase[54]),cprLon(lon, lat, binBase[54]))
    return `*${BigInt('0b' + `${preCRC}${calculateCRC(preCRC)}`).toString(16)};`;
}

// example array: [ [lat,lon], [lat,lon], [lat,lon], ];
const createMessages = (baseHex, arr, file) => {
    // newFile = createFile(`messages_${Math.floor(Math.random() * 1000)}.txt`);
    newFile = createFile('messages_win.txt')
    newBins = [];
    arr.map((points, index) => {
        newBins = [...newBins, createMessage(baseHex,points[0],points[1])];
        file ? newFile.write(`${createMessage(baseHex,points[0],points[1])}\n`) : null;
    });
    return newBins; 
}

// const workingHexes = [
//     "8da27a2d58af95dedd9ebdaa22aa",
// ]

const workingHexes = (id) => [
    `8da${id}a2d58af95dedd9ebdaa22aa`,
    `8da${id}a2d9914563a38045784f44d`,
    `8da${id}a2dea428858015c08ca1771`,
    `8da${id}a2d58af95df399eb46c8a4e`,
    `8da${id}a2d9914563a380857ccae4d`,
    `8da${id}a2df8230002004ab8499afe`,
    `8da${id}a2d58af85df839eae5b9c1f`,
    `8da${id}a2d9914563a380857ccae4d`,
    `8da${id}a2dea428858015c08ca1771`,
    `8da${id}a2d58af923ec929b8c5b8c9`,
]

const createStream = () => {
    newFile = createFile('messages_win.txt')
    for (i=0; i < workingHexes('00').length; i++){
        for (x=0; x < catArray.length; x++){
            if (x === 27) {
                console.log("THIS IS WHAT I WANT PLEASE PLEASE PLEASE")
            }
            console.log(`current cat iteration: ${x.toString().padStart(2, "0")}, cat point: ${catArray[x]}`);
            newFile.write(`${createMessage(workingHexes(x.toString().padStart(2, "0"))[i],catArray[x][0],catArray[x][1])}\n`)

        }
    }


    // catArray.map((catPoint) => {
    //     // for each cat point, change the lat/long of a working hex.
    //     createMessage(baseHex)

    // })


};

createStream();


// console.log(createMessage("8da01a2d58af95dedd9ebdaa22aa", 23, 23));
