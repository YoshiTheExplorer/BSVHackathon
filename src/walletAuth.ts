const connectBtn = document.getElementById("connect-btn")!;
const walletDisplay = document.getElementById("wallet-address")!;

connectBtn.addEventListener("click", () => {
  console.log("yes")
});

//check local storage if we are authenticated for token
function isAuthenticated(){
    return true;
}