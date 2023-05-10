

let clickUpgrades = [
    {
        name: 'pickaxe',
        price: 10,
        quantity: 0,
        multiplier: 0,
        multiplierFunc: function() {
            this.multiplier += .25;
          }
    
    },
    {
      name: 'sword',
      price: 200,
      quantity: 0,
      multiplier: 0,
      multiplierFunc: function() {
        this.multiplier += .5;
      }
    },
    {
        name: 'Gun',
        price: 300,
        quantity: 0,
        multiplier: 0,
        multiplierFunc: function() {
            this.multiplier += .75;
          }  
    },
      {
        name: 'laser',
        price: 400,
        quantity: 0,
        multiplier: 0,
        multiplierFunc: function() {
            this.multiplier += 1;
          }  
    }
      
  ];
  
let automaticUpgrades = [
{
    name: 'rover',
    price: 600,
    quantity: 1,
    multiplier: 20
}
];

let autoUpdateAmount = '';
let gold = 0;
let nextResourceAmount = 1;
const pickaxeCost = 50;
const swordCost = 250;
const gunCost = 500;
const laserCost = 800

// needs to set the amount for clicks/gold

function mineCrystals() {
gold += 1 
applyMultipliers(clickUpgrades); 
resourceCount()   
}

// this needs to get a upgrade subtract it from gold and double the price of its self
// also needs to update how many of each item item has been bought 
// and also apply the multiplier function......holy balls.....



let upgradeCart = [];

function buyUpgrade(upgrade) {
if (gold >= upgrade.price) {
gold -= upgrade.price;
upgrade.quantity++;
upgradeCart.push(upgrade.name);
upgrade.multiplierFunc();
increaseUpgradePrice(upgrade); 
updateUpgradeCart();
showPurchaseMessage(upgrade);
resourceCount()
} else {
showErrorMessage();
}}

// function buyPickaxe() {
//   const pickaxeUpgrade = clickUpgrades[0];
//   buyUpgrade(pickaxeUpgrade);
//   pickaxeUpgrade.quantity++;
//   updateUpgradeCart();
//   updateAxeQuantity();
// }

function buyPickaxe() {
  const pickaxeUpgrade = clickUpgrades[0];
  buyUpgrade(pickaxeUpgrade);
  increaseUpgradePrice(pickaxeUpgrade, 'axeCost');
  pickaxeUpgrade.quantity++;
  updateUpgradeCart();
  updateAxeQuantity();
  
}


function updateAxeQuantity() {
  const pickaxeUpgrade = clickUpgrades[0];
  document.getElementById('axeQuantity').innerText = pickaxeUpgrade.quantity;
}



function buySword() {
const swordUpgrade = clickUpgrades[1];
buyUpgrade(swordUpgrade);
increaseUpgradePrice(swordUpgrade, 'swordCost');
document.getElementById('swordQuantity').innerHTML = swordUpgrade.quantity;
updateUpgradeCart() 
}

function buyGun() {
const gunUpgrade = clickUpgrades[2];
buyUpgrade(gunUpgrade)
increaseUpgradePrice(gunUpgrade, 'gunCost');
document.getElementById('gunQuantity').innerHTML = gunUpgrade.quantity;
updateUpgradeCart() 
}

function buyLaser() {
const laserUpgrade = clickUpgrades[3];
buyUpgrade(laserUpgrade);
increaseUpgradePrice(laserUpgrade, 'laserCost');
document.getElementById('laserQuantity').innerHTMl = laserUpgrade.quantity;
updateUpgradeCart() 
}


// we need to make a cart and be able to add purchased upgrades to.
// we also need to figure out a way to let the user know if they dont have enough gold

function updateUpgradeCart() {
upgradeCart.sort();
document.getElementById('updatePurchase').innerText = upgradeCart;
}

function showPurchaseMessage(upgrade) {
document.getElementById('').innerHTML = (`You have purchased ${upgrade.name}!`);        
}

function showErrorMessage() {

alert ('Not Enough gold!! ');        
}

    
    
//  this function needs to apply a multiplier to the player gold count

// function applyMultipliers(upgrades) {
// let totalMultiplier = 0;
// upgrades.forEach((upgrade) => {
// totalMultiplier = upgrade.quantity * upgrade.multiplier;
// });
// gold * totalMultiplier;
// document.getElementById("crystalCount").innerHTML = gold;
// console.log(totalMultiplier)
// document.getElementById('multiplierScreen').innerHTML = totalMultiplier
// }

function applyMultipliers(upgrades) {
  let totalMultiplier = 1;
  upgrades.forEach((upgrade) => {
    totalMultiplier += upgrade.quantity * upgrade.multiplier;
  });
  gold *= totalMultiplier;
  document.getElementById("crystalCount").innerHTML = gold;
  console.log(totalMultiplier)
  document.getElementById('multiplierScreen').innerHTML = totalMultiplier;
}


// these functions need to update the price of a clickUpgrade to 2X that amount 
// after the clickUpgrade is puurchased 


// function increaseUpgradePrice(upgrade) {
// upgrade.price *= 2;
// document.getElementById('axeCost', 'swordCost', 'gunCost','laserCost').innerHTML = (`${upgrade.price}`);
// }

function increaseUpgradePrice(upgrade, elementId) {
  upgrade.price *= 2;
  document.getElementById(elementId).innerHTML = `${upgrade.price}`;
}

      
// function updateClickUpgradePrice(upgrade) {
// upgrade.price *= 2;
// document.getElementById(`${upgrade.name}Cost`).textContent = upgrade.price;
// }
    
// this is my automatic update function



// we need functions that will keep track of how much gold per click we should get

function autoUpdateAmounts(){
autoUpdateAmount = 1
document.getElementById('autoCount').innerText = autoUpdateAmount;
} 


function resourceCount(){
nextResourceAmount = 1
clickUpgrades.forEach(upgrade => {
nextResourceAmount += gold * upgrade.multiplier   
});
document.getElementById('updatePrice').innerText = nextResourceAmount;
}

// this function need to have a setinterval that will apply the multiplier atleast every 3 seconds

function autoUpgrades() {
    autoUpdateAmounts()
    setInterval(runAutoUpgrades, 10000);        
    }

// function runAutoUpgrades(){ 
// automaticUpgrades.forEach(function (upgrade) {
// gold += upgrade.quantity * upgrade.multiplier;
// });
// document.getElementById("crystalCount").innerText = gold;
// document.getElementById('autoUpgrade').innerText =((new Date()).toLocaleString()) 
// }

function runAutoUpgrades(){ 
  automaticUpgrades.forEach(function (upgrade) {
    const upgradeCost = upgrade.price;
    if (gold >= upgradeCost) {
      gold -= upgradeCost;
      upgrade.quantity++;
      autoUpgrades()
      updateUpgradeCart();
      updateCrystalCount();
      document.getElementById('autoUpgrade').innerText =((new Date()).toLocaleString());
    } else {
      alert(`You don't have enough gold to purchase the ${upgrade.name} upgrade!`);
    }
  });
}



// these are my click upgrades or purchasable items

// function buyPickaxe() {
// const pickaxeUpgrade = clickUpgrades[0];
// buyUpgrade(pickaxeUpgrade);
// document.getElementById('axeQuantity').innerHTML = pickaxeUpgrade.quantity++;
// updateUpgradeCart()
// }




