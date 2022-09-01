let MyTokenSale=artifacts.require("./MyTokenSale.sol");

contract('MyTokenSale',function(accounts){
    let tokenSaleInstance;
    let tokenPrice=1000000000000000;
    it("Initializes the contract with the correct values",function(){
        return MyTokenSale.deployed().then(function(instance){
            tokenSaleInstance=instance;
            return tokenSaleInstance.address;
        }).then(function(address){
            assert.notEqual(address,0x0,"has contract address");
            return tokenSaleInstance.tokenContract();
        }).then(function(address){
            assert.notEqual(address,0x0,"has token contract address");
            return tokenSaleInstance.tokenPrice();
        }).then(function(price){
            assert.equal(price,tokenPrice,"token price is correct");
        })
    });
})