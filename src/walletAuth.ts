import { Transaction, PrivateKey, PublicKey, P2PKH, ARC } from '@bsv/sdk'

const connectBtn = document.getElementById("connect-btn")!;
const walletDisplay = document.getElementById("wallet-address")!;

// Login Button
//TODO: add logic for login here
connectBtn.addEventListener("click", async () => {
  
  console.log("yes")
});

//check local storage if we are authenticated for token
function isAuthenticated(){
    return true;
}