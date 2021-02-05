let juice = 0;

let juicerPrice = 30;
let juicerUpgradePrice = 30;
let juicerRate = 30;
let juiceUpgradeRate = 30;

let mumPrice = 500;
let mumUpgradePrice = 500;
let mumRate = 500;
let mumUpgradeRate = 500;

let juicerOwned = 0;
let juicerUpgradeOwnded = 0;
let mumOwnded = 0;
let mumUpgradeOwnded = 0;

let totalRate = 0;
let clickRate = 1;

move()
function move() {
  var i = 0;
  if (i == 0) {
    i = 0;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        elem.style.width = 0
        juice += totalRate;
        UpdateJuice();
        move()
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


function UpdateJuice() {
  document.getElementById("juice-display").innerHTML = juice;
}

function writeJuicerToDom() {
  document.getElementById("juice-display").innerHTML = juice;
  document.getElementById("rate-display").innerHTML = totalRate + " Juice/sec";
  document.getElementById("juicer-owned").innerHTML = juicerOwned + " clicker upgrades owned";
  document.getElementById("juicer-upgrades-owned").innerHTML = juicerUpgradeOwnded + " upgrades owned";
}

function writeMumToDom() {
  document.getElementById("juice-display").innerHTML = juice;
  document.getElementById("rate-display").innerHTML = totalRate + " Juice/sec";
  document.getElementById("mum-owned").innerHTML = mumOwnded + " clicker upgrades owned";
  document.getElementById("mum-upgrades-owned").innerHTML = mumUpgradeOwnded + " upgrades owned";
}

document.getElementById("btn-main").addEventListener("click", () => {
  juice += clickRate;
  UpdateJuice()
});

document.getElementById("btn-buy-juicer").addEventListener("click", () => {
  if (juice > juicerPrice) {
    juice -= juicerPrice;
    clickRate += juicerRate;
    juicerOwned++;
    writeJuicerToDom();
  }
});

document.getElementById("btn-upgrade-juicer").addEventListener("click", () => {
  if (juice > juicerPrice) {
    juice -= juicerUpgradePrice;
    totalRate += juiceUpgradeRate;
    juicerUpgradeOwnded++;
    writeJuicerToDom();
  }
});

document.getElementById("btn-buy-mum").addEventListener("click", () => {
  if (juice > mumPrice) {
    juice -= mumPrice;
    clickRate += mumRate;
    mumOwnded++;
    writeMumToDom();
  }
});

document.getElementById("btn-upgrade-mum").addEventListener("click", () => {
  if (juice > mumUpgradePrice) {
    juice -= mumUpgradePrice;
    totalRate += mumUpgradeRate;
    mumUpgradeOwnded++;
    writeMumToDom();
    initBar()
  }
});
