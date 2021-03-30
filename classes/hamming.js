//Hamming 4->7
class HammingCode {
  //dataToEncode [i1, i2, i3, i4]
  static encode(dataToEncode) {
    if(dataToEncode.length != 4) {
      throw Error("HammingCode: encode input must have exactly 4 bits");
    }

    for(let i = 0; i < 4; i++) {
      if(dataToEncode[i] > 1) {
        throw Error("HammingCode: encode input must consist of bits");
      }
    }

    let hammingEncoded = [1,1,1,1,1,1,1]; //p1 p2 i1 p3 i2 i3 i4
    /*
    1 = 001
    2 = 010
    3 = 011
    4 = 100
    5 = 101
    6 = 110
    7 = 111
    */
    hammingEncoded[2] = dataToEncode[0];
    hammingEncoded[4] = dataToEncode[1];
    hammingEncoded[5] = dataToEncode[2];
    hammingEncoded[6] = dataToEncode[3];

    hammingEncoded[0] = hammingEncoded[2] ^ hammingEncoded[4] ^ hammingEncoded[6];
    hammingEncoded[1] = hammingEncoded[2] ^ hammingEncoded[5] ^ hammingEncoded[6];
    hammingEncoded[3] = hammingEncoded[4] ^ hammingEncoded[5] ^ hammingEncoded[6];

    return hammingEncoded;
  }

  static decode() {

  }
}

module.exports = HammingCode;
