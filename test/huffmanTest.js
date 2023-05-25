const huffman = require('../index.js').huffman;
let assert = require('chai').assert;

describe('Huffman code testing', function() {
  it('encode correctly with inproper input', function() {
    assert.throws(() => {
          let inputData = 'ABBCCCDDDDEEEEE';
          let frequencyTable = huffman.buildFrequencyTable(inputData);
          let huffmanTree = huffman.buildHuffmanTree(frequencyTable);
          let codeTable = huffman.buildCodeTable(huffmanTree);

          huffman.compressData(undefined, codeTable);
        },
        Error
    );

    assert.throws(() => {
          let inputData = '';
          let frequencyTable = huffman.buildFrequencyTable(inputData);
          let huffmanTree = huffman.buildHuffmanTree(frequencyTable);
          let codeTable = huffman.buildCodeTable(huffmanTree);
          huffman.compressData(inputData, codeTable);
        },
        Error
    );

    assert.throws(() => {
          let inputData = 'ABBCCCDDDDEEEEE';
          let frequencyTable = huffman.buildFrequencyTable(inputData);
          let huffmanTree = huffman.buildHuffmanTree(frequencyTable);

          huffman.compressData(inputData, undefined);
        },
        Error
    );

  })

  it('encode correctly with proper input', function() {
    let inputData = 'ABBCCCDDDDEEEEE';
    let frequencyTable = huffman.buildFrequencyTable(inputData);
    let huffmanTree = huffman.buildHuffmanTree(frequencyTable);
    let codeTable = huffman.buildCodeTable(huffmanTree);
    let compressedData = huffman.compressData(inputData, codeTable);
    let decompressedData = huffman.decompressData(compressedData, huffmanTree);

    // console.log('Input:', inputData);
    // console.log('FrequencyTable:', frequencyTable);
    // console.log('CodeTable:', codeTable);
    // console.log('Compressed:', compressedData);
    // console.log('Decompressed:', decompressedData);
    assert.equal(decompressedData, inputData);

    inputData = 'ABB35';
    frequencyTable = huffman.buildFrequencyTable(inputData);
    huffmanTree = huffman.buildHuffmanTree(frequencyTable);
    codeTable = huffman.buildCodeTable(huffmanTree);
    compressedData = huffman.compressData(inputData, codeTable);
    decompressedData = huffman.decompressData(compressedData, huffmanTree);
    // console.log('Input:', inputData);
    // console.log('FrequencyTable:', frequencyTable);
    // console.log('CodeTable:', codeTable);
    // console.log('Compressed:', compressedData);
    // console.log('Decompressed:', decompressedData);

    assert.equal(decompressedData, inputData);

  })

  it('error in encode with proper input', function() {
    let inputData = 'AAAA';
    let frequencyTable = huffman.buildFrequencyTable(inputData);
    let huffmanTree = huffman.buildHuffmanTree(frequencyTable);
    let codeTable = huffman.buildCodeTable(huffmanTree);
    let compressedData = huffman.compressData(inputData, codeTable);
    let decompressedData = huffman.decompressData(compressedData, huffmanTree);

    console.log('Input:', inputData);
    console.log('FrequencyTable:', frequencyTable);
    console.log('huffmanTree:', huffmanTree);
    console.log('CodeTable:', codeTable);
    console.log('Compressed:', compressedData);
    console.log('Decompressed:', decompressedData);
    assert.equal(decompressedData, inputData);
  })


})
