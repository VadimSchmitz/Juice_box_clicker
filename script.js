

let juice = 0;

let juicerPrice = 30;
let juicerUpgradePrice = 30;
let juicerRate = 10;
let juiceUpgradeRate = 20;

let mumPrice = 500;
let mumUpgradePrice = 500;
let mumRate = 500;
let mumUpgradeRate = 500;

let juicerOwned = 0;
let juicerUpgradeOwnded = 0;
let mumOwnded = 0;
let mumUpgradeOwnded = 0;

let totalRate = 0;

function writeJuicerToDom() {
  document.getElementById("juice-display").innerHTML = juice + " Owned";
  document.getElementById("rate-display").innerHTML = totalRate + " Juice/sec";
  document.getElementById("juicer-owned").innerHTML = juicerOwned + " Owned";
  document.getElementById("juicer-upgrades-owned").innerHTML = juicerUpgradeOwnded + " upgrades owned";
}

function writeMumToDom() {
  document.getElementById("juice-display").innerHTML = juice + " Owned";
  document.getElementById("rate-display").innerHTML = totalRate + " Juice/sec";
  document.getElementById("mum-owned").innerHTML = mumOwnded + " Owned";
  document.getElementById("mum-upgrades-owned").innerHTML = mumUpgradeOwnded + " upgrades owned";

}

document.getElementById("btn-buy-juicer").addEventListener("click", () => {
  juice -= juicerPrice;
  totalRate += juicerRate;
  juicerOwned++;
  writeJuicerToDom();
});

document.getElementById("btn-upgrade-juicer").addEventListener("click", () => {
  juice -= juicerUpgradePrice;
  totalRate += juiceUpgradeRate;
  juicerUpgradeOwnded++;
  writeJuicerToDom();
});

document.getElementById("btn-buy-mum").addEventListener("click", () => {
  juice -= mumPrice;
  totalRate += mumRate;
  mumOwnded++;
  writeMumToDom();
});

document.getElementById("btn-upgrade-mum").addEventListener("click", () => {
  juice -= mumUpgradePrice;
  totalRate += mumUpgradeRate;
  mumUpgradeOwnded++;
  writeMumToDom();
});
