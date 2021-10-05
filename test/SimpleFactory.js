const { assert } = require('chai');
const SimpleFactory = artifacts.require("./SimpleFactory");


require('chai')
.use(require('chai-as-promised'))
.should()

contract('SimpleFactory', async () => {

    let simpleFactory;
    let favoriteNumber; 

    before( async() => {
        simpleFactory = await SimpleFactory.deployed();
        favoriteNumber = await simpleFactory.store(2);
    })

    describe('deployment', async() => {
        it('deploy successful', async() => {
            const address = await simpleFactory.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
            assert.notEqual(address, '');
        })


    })

}) 