const fs = require('fs')
const guessWork = fs.createWriteStream('harpkitties.txt');  


let baseStr = "8d3c5ee69901bd9540078d37335f".toUpperCase();

const toBin = (hex) => hex.split('').map(i => 
    parseInt(i, 16).toString(2).padStart(4, '0')).join('');

bin = toBin(baseStr);

const bin_arr = (arr) => {
    return arr.map((hex) => toBin(hex));
}

const harpKitty = [
"8DAB5E44586505E60F9BACC21447",
"8DAB5E42586505C60F8BACC21447",
"8DAB5E415865058E4F89AFC21447",
"8DAB5E405865058E4F89ACC21447",
"8DAB5E3F5865058E4F89A8C21447",
"8DAB5E3E5865058E4F89A0C21447",
"8DAB5E3D5865058E4F8992C21447",
"8DAB5E3C5865058E4F8982C21447",
"8DAB5E3B586505864F89AFC21447",
"8DAB5E3A586505864F89ACC21447",
"8DAB5E39586505864F89A8C21447",
"8DAB5E38586505864F89A0C21447",
"8DAB5E37586505864F8992C21447",
"8DAB5E36586505864F8982C21447",
"8DAB5E355865058E4F89EFC21447",
"8DAB5E345865058E5F89EFC21447",
"8DAB5E335865058E7F8A0FC21447",
"8DAB5E325865058EFF8A1FC21447",
"8DAB5E315865058F1F8A3FC21447",
"8DAB5E305865058F3F8A7FC21447",
"8DAB5E2F5865058F3F8A83C21447",
"8DAB5E2E5865058F1F8A8FC21447",
"8DAB5E2D5865058EFF8A9FC21447",
"8DAB5E2C5865058E7F8ABFC21447",
"8DAB5E2B5865058E5F8AFFC21447",
"8DAB5E2A5865058E4F8B0FC21447",
"8DAB5E295865058DE98B3FC21447",
"8DAB5E285865058D698B7FC21447",
"8DAB5E275865058D698B81C21447",
"8DAB5E265865058D698B87C21447",
"8DAB5E255865058D698B8FC21447",
"8DAB5E235865058D698B9FC21447",
"8DAB5E215865058D698BBFC21447",
"8DAB5E205865058D698BFFC21447",
"8DAB5E1E5865058D698C03C21447",
"8DAB5E1D5865058D698C0FC21447",
"8DAB5E1C5865058D698C3FC21447",
"8DAB5E1B5865058DE98C6FC21447",
"8DAB5E1A5865058E4F8C9FC21447",
"8DAB5E195865058E5F8CBFC21447",
"8DAB5E185865058E7F8CD1C21447",
"8DAB5E175865058EFF8CE1C21447",
"8DAB5E165865058F1F8CF4C21447",
"8DAB5E155865058F3F8D0DC21447",
"8DAB5E145865058F3F8D12C21447",
"8DAB5E135865058F1F8D26C21447",
"8DAB5E125865058EFF8D3AC21447",
"8DAB5E115865058E7F8D4EC21447",
"8DAB5E105865058E5F8D62C21447",
"8DAB5E0F5865058E4F8D76C21447",
"8DAB5E0E5865058E4F8DE3C21447",
"8DAB5E0D5865058E4F8DEDC21447",
"8DAB5E0C5865058E4F8DF7C21447",
"8DAB5E0B5865058E4F8E0BC21447",
"8DAB5E0A5865058E4F8E1FC21447",
"8DAB5E095865058E4F8E29C21447",
"8DAB5E08586505864F8DE3C21447",
"8DAB5E07586505864F8DEDC21447",
"8DAB5E06586505864F8DF7C21447",
"8DAB5E05586505864F8E0BC21447",
"8DAB5E04586505864F8E1FC21447",
"8DAB5E03586505864F8E29C21447",

]

let binKitties = bin_arr(harpKitty);

for (i = 0; i < binKitties.length; i++){
    subStrKitty = binKitties[i].substring(0,88);
    binKitties[i] = `*${BigInt('0b' + `${subStrKitty}${calculateCRC(subStrKitty)}`).toString(16)};`;
    guessWork.write(`${binKitties[i]}\n`); 
}

console.log(binKitties) // what i want to write




// DOUGLAS' HARDCODED CAT VALUES

const catArray = [
    [33.35759, -82],
    [33.35759, -81],
    [33.469845, -82],
    [33.7, -82],
    [33.9, -82],
    [33.469845, -81],
    [33.7, -81],
    [33.9, -82],
    [34.4, -81.3],
    [34.5, -81],
    [34.6, -80.8],
    [34.7, -80.6],
    [34.8, -80.8],
    [34.9, -81],
    [35, -81.3],
    [35.2, -82.1],
    [35.5, -82.4],
    [35.7, -82.4],
    [35.9, -82.4],
    [36.1, -82.4],
    [36.3, -82.4],
    [36.8, -81.3],
    [36.92, -81],
    [37, -80.8],
    [37.1, -80.6],
    [37.2, -80.8],
    [37.3, -81],
    [37.4, 81.3],
    [38, -81],
    [38.2, -81],
    [38.4, -81],
    [38.6, -81],
    [38, -82],
    [38.2, -82],
    [38.4, -82],
    [38.6, -82]
];

// SSG HARP HEX VALUES



// SUBSTRING INDEX LOCATIONS FOR FUTURE REFERENCE, UNUSED
    
const df = bin.substring(0, 5)
const ca = bin.substring(5,8)
const icao = bin.substring(8,32)
const data = bin.substring(32,88)
const tc = bin.substring(32,37)
const pi = bin.substring(88,112);
const lat = bin.substring(54,71);
const lon = bin.substring(71,88);

// BIGMAN REWORKED FORMULA TO CALCULATE CPR OF COORDINATES

const cprLat = (lat) => {
    lat = Math.floor(Math.abs(((lat/6) - 8)*131074)).toString(2);
    lat = lat.length < 17 ? lat.padStart(17,'0') : (lat.length > 17 ? lat = lat.slice(0,17) : lat)
    return lat;
};
const cprLon = (lon) => {
    lon = Math.floor(Math.abs(((lon/10))*131074)).toString(2);
    lon = lon.length < 17 ? lon.padStart(17,'0') : (lon.length > 17 ? lon = lon.slice(0,17) : lon)
    return lon;

}

// CRC CALCULATOR BASED ON MODE-S PROVIDED PSEUDOCODE

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



const createNewBin = (lat, lon) => bin.substring(0,54) + lat + lon;



const catGenerator = (catArr) => {
    let newBins = [];
    catArr.map((catPlotPoints, index) => {
        newCat = createNewBin(cprLat(catPlotPoints[0]),cprLon(catPlotPoints[1]));
        newBins = [...newBins, `*${BigInt('0b' + `${newCat}${calculateCRC(newCat)}`).toString(16)};`];
    });
    return newBins;
}

const catBinaries = catGenerator(catArray);

