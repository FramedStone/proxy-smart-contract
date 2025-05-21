# SimpleStorage with Proxy Smart Contract

### Abstract
The goal of this repository is to learn how `Proxy Smart Contract` works using verified Solidity library -- [OppenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable), 
showcasing the brief concept of `Proxy Smart Contract` with `@Upgradeable` by implementing a sample `SimpleStorage.sol`, deploy
it on `Sepolia Testnet` and upgrade from `V1` to `V2`.

![image](https://github.com/user-attachments/assets/776d9b1f-3774-470d-8f00-d878ea7197fa)
---
### Tech Stack
- Hardhat (with Viem)
- Solidity
- Node.js

### Services
- Infura
- Etherscan 

### Infrastructure
- Sepolia Testnet 

### Library used
[package.json](./package.json)
- @nomiclabs/hardhat-ethers
- @nomiclabs/hardhat-etherscan
- @openzeppelin/hardhat-upgrades
- ethers
- hardhat
- @openzeppelin/contracts
- @openzeppelin/contracts-upgradeable\

---
### Links
[sepolia etherscan (verified)](https://sepolia.etherscan.io/address/0x0C72bf6769F4B95AC5073895cf3eb49F60C92A50)
```text 
v1 functions
- setVal(uint8)
- getVal()

v2 functions
- inc()
- setVal(uint8)
- getVal()
```
