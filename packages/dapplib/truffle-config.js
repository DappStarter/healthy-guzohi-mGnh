require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note oven quantum hunt drive equal genre'; 
let testAccounts = [
"0x81d6f0a384ce2a30efe2c6069f14ea79b3fbbb1c39977681e384d9f04de59b73",
"0x6ad8079a96ed0955dcd9106f36803b6595dcd81346b451fdf89dd3a4d0a858a8",
"0xdf14c49acb148ed4dda167fe07d1fdc589b0952dd4112f6d5d55420cc16e5b8f",
"0xde4dd3bf47eb320180e33bc418717eba5a014177c317359328c4c7b8f9aa93ad",
"0x1b06ebd1051fe316d18a367e5aa97465dc624a2a3f46cf1a638f85b19658e41e",
"0xc140e1eb0dd3c033701d829a5359f16277a755a0528d5b2be2c6a144e5e0ed8d",
"0x5e9ef9024a84a0096e13157d2b46d68d1323834f1f51383ea4c28675b8632d6d",
"0xeafcc8c592ee81915b25daacbf5e0288f732a2ad6912e369a5206508a3341fce",
"0x99bd634e78b355beb2f9d4daaa1eabee85b60dda890375279b86bbf917dc13f4",
"0xb8dd4c3fe985fed8f45411c35e37b62dd82ce9935218b37d14f63690cd08a63d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

