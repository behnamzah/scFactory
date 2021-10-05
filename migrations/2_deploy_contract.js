const SimpleFactory = artifacts.require("SimpleFactory");

module.exports = function (deployer) {
  deployer.deploy(SimpleFactory);
};
