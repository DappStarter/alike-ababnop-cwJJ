require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski stock raise machine evidence hunt light army giggle'; 
let testAccounts = [
"0xf4129031408085e1b1c8380c69e8f4cd36dba186da6fd286c4a203c20159e802",
"0x3522ed9419e2953a9cbc1fcc6467e6d2d6f9b4417beeae7a21f41d77b22218f6",
"0x87f242c02462efe7c5d57427fb6d188dbfaa5a15eb6d26d9e48755b70e2b770f",
"0xc0e1211cc3516da41563e992e95d2cb1f9d518b9db3e7f2e1e8088c58fc5a361",
"0xf435a25c662d299b143b44009694ec66d8e69b40dd93d7df3a6aa2b1901d9251",
"0xba3ab9eb04c9045a5c0bb5c1c0084b2446259d81b8181b7d71b60bc91b54b684",
"0xcebe4cf8bb8473eecc1ecd872f4eb204fc03343b395422d392e3e375971c415e",
"0xfaefa66153db4e208cc5bca9cde7ea4e4141b1cde55efb0469d858c26d8870ef",
"0x303207fa919f4287a97a901c52374c4c8b5b9c397b6576e5823f796fe8c1d02b",
"0xc0d0287c5ede4137f8becabab5d1bc5c634641037396a30a2cfbf8da41d7342e"
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

