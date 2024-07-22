function cprLat(latitude, binaryFrame) {
    const Nb = 17;
    const Nz = 15;
    const dLatEven = 360 / (4 * Nz);
    const dLatOdd = 360 / (4 * Nz - 1);
  
    const isOddFrame = binaryFrame[21] === '1';
    const dLat = isOddFrame ? dLatOdd : dLatEven;
  
    const latIndex = Math.floor(latitude / dLat);
    const cprLat = Math.floor(((latitude - latIndex * dLat) / dLat) * Math.pow(2, Nb));
  
    return cprLat;
  }
  
  function cprLon(longitude, latitude, binaryFrame) {
    const Nb = 17;
    const Nz = 15;
  
    function NL(lat) {
      if (lat === 0) return 59;
      return Math.floor(2 * Math.PI / Math.acos(1 - Math.pow(Math.cos(Math.PI / 180 * Math.abs(lat)), 2)));
    }
  
    const isOddFrame = binaryFrame[21] === '1';
    const nl = NL(latitude) - isOddFrame;
    const dLon = 360 / nl;
  
    const lonIndex = Math.floor(longitude / dLon);
    const cprLon = Math.floor(((longitude - lonIndex * dLon) / dLon) * Math.pow(2, Nb));
  
    return cprLon;
  }
  
  // Example usage
  const binaryFrame = "1000110101000000011000100001110101011000110000111000001011010110100100001100100010101100001010000110001110100111";
  const latitude = 10.2162144547802;
  const longitude = 123.889128586342;
  
  console.log(cprLat(latitude, binaryFrame)); // CPR latitude value
  console.log(cprLon(longitude, latitude, binaryFrame)); // CPR longitude value
  