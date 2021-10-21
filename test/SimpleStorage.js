const { assert } = require('chai');
const SimpleStorage = artifacts.require("./SimpleStorage");


require('chai')
.use(require('chai-as-promised'))
.should()

contract('SimpleStorage', async () => {

    let simpleStorage;
    let favoriteNumber; 

    before( async() => {
        simpleStorage = await SimpleStorage.deployed();
    })

    describe('deployment', async() => {
        it('deploy successful', async() => {
            const address = await SimpleStorage.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
            assert.notEqual(address, '');
        })


    })

}) 