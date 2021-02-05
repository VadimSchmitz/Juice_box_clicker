//sets initial variables like prices for items and upgrades an how many owned
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

//calls the progress bar
move()
//moves the progress bar, increases 100% every 1000ms (1% = 10ms) when the  bar is full it counts the totalrate to the juice and updates it. then it resets
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

//updates juice in the dom
function UpdateJuice() {
  document.getElementById("juice-display").innerHTML = juice;
}


//updates juice, totalRate
function refreshValues() {
  document.getElementById("juice-display").innerHTML = juice;
  document.getElementById("rate-display").innerHTML = totalRate + " Juice/sec";
};

//updates juice, totalRate juicerOwned and juicerUpgradeOwned to the dom
function writeJuicerToDom() {
  refreshValues();
  document.getElementById("juicer-owned").innerHTML = juicerOwned + " clicker upgrades owned";
  document.getElementById("juicer-upgrades-owned").innerHTML = juicerUpgradeOwnded + " upgrades owned";
}

//updates juice, totalRate juicerOwned and juicerUpgradeOwned to the dom
function writeMumToDom() {
  refreshValues();
  document.getElementById("mum-owned").innerHTML = mumOwnded + " clicker upgrades owned";
  document.getElementById("mum-upgrades-owned").innerHTML = mumUpgradeOwnded + " upgrades owned";
}

//when the main icon is clicked it is increased and updated
document.getElementById("btn-main").addEventListener("click", () => {
  juice += clickRate;
  UpdateJuice()
});

//when juicer is bought it checks for funds then handles the costs, clickRate and juicerOwned and then updates all the entries
document.getElementById("btn-buy-juicer").addEventListener("click", () => {
  if (juice > juicerPrice) {
    juice -= juicerPrice;
    clickRate += juicerRate;
    juicerOwned++;
    writeJuicerToDom();
  }
});

//when juicerupgrade is bought it checks for funds then handles the costs, totalRate and juicerOwned and then updates all the entries
document.getElementById("btn-upgrade-juicer").addEventListener("click", () => {
  if (juice > juicerPrice) {
    juice -= juicerUpgradePrice;
    totalRate += juiceUpgradeRate;
    juicerUpgradeOwnded++;
    writeJuicerToDom();
  }
});


//when mum is bought it checks for funds then handles the costs, clickRate and mumOwned and then updates all the entries
document.getElementById("btn-buy-mum").addEventListener("click", () => {
  if (juice > mumPrice) {
    juice -= mumPrice;
    clickRate += mumRate;
    mumOwnded++;
    writeMumToDom();
  }
});

//when mumUpgrade is bought it checks for funds then handles the costs, clickRate and mumUpogradeOwned and then updates all the entries
document.getElementById("btn-upgrade-mum").addEventListener("click", () => {
  if (juice > mumUpgradePrice) {
    juice -= mumUpgradePrice;
    totalRate += mumUpgradeRate;
    mumUpgradeOwnded++;
    writeMumToDom();
    initBar()
  }
});
