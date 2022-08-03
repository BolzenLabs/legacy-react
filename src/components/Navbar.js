import { ethers } from "ethers";
import React from "react";
import sbt from "../utils/abi.json";

function Navbar() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    "0x2e9F8b093960f8544f4649DFC83DfBA022438a85",
    sbt.abi,
    signer
  );
  const connectWallet = () => {
    let account = window.ethereum.request({ method: "eth_requestAccounts" });
    console.log(account);
    let mint = contract.safeMint("0x9037B0077A574D5e9D5a0F3A3fc580fB6f4006A6", {
      gasLimit: 100000,
    });
    console.log(mint);
  };

  return (
    <div>
      <h1>SBT</h1>
      <div>
        <button onClick={() => connectWallet()}>Connect Wallet</button>
      </div>
    </div>
  );
}

export default Navbar;
