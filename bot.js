const config = {
  levelLocation: 31
}
var currentLocation = '';

function game() {
  //menu Home
  var hero = document.getElementsByClassName('btn reply_markup_button')[0];
  var backpack = document.getElementsByClassName('btn reply_markup_button')[1];
  var locations = document.getElementsByClassName('btn reply_markup_button')[2];
  var hp = document.getElementsByClassName('btn reply_markup_button')[3];
  var npcs = document.getElementsByClassName('btn reply_markup_button')[4];
  var guild = document.getElementsByClassName('btn reply_markup_button')[5];
  var settings = document.getElementsByClassName('btn reply_markup_button')[6];
  var totems = document.getElementsByClassName('btn reply_markup_button')[7];
  var dungeons = document.getElementsByClassName('btn reply_markup_button')[7];

  //menu Locations
  var loc1 = document.getElementsByClassName('reply_markup_button')[0]; //1-10
  var loc2 = document.getElementsByClassName('reply_markup_button')[1]; //11-20
  var loc3 = document.getElementsByClassName('reply_markup_button')[2]; //21-30
  var loc4 = document.getElementsByClassName('reply_markup_button')[3]; //31-40
  var loc5 = document.getElementsByClassName('reply_markup_button')[4]; //41-50

  //menu locations
  var attackMob = document.getElementsByClassName('btn reply_markup_button')[0];
  var randomMob = document.getElementsByClassName('btn reply_markup_button')[1];
  var levelMob = document.getElementsByClassName('btn reply_markup_button')[2];
  var backpack = document.getElementsByClassName('btn reply_markup_button')[3];
  var home = document.getElementsByClassName('btn reply_markup_button')[4];

  function regenHP() {
    hp.click();
  }

  function goToLocations() {
    locations.click();
  }

  function goTolocation() {
    if (config.levelLocation === 1) {
      loc1.click();
    } else if (config.levelLocation === 11) {
      loc2.click();
    } else if (config.levelLocation === 21) {
      loc3.click();
    } else if (config.levelLocation === 31) {
      loc4.click();
    } else  {
      loc5.click();
    }
  }

  function selectMob() {
    levelMob.click();
  }

  function attack() {
    attackMob.click();
  }

  function goToHome() {
    home.click();
  }

  if (document.getElementsByClassName('btn reply_markup_button').length) {
    //Get current location
    if (document.getElementsByClassName('btn reply_markup_button')[0].innerText === '🏅 Герой') {
      currentLocation = 'home';
    } else if (document.getElementsByClassName('btn reply_markup_button')[0].innerText === ':hatching_chick:1-10 Окрестности Ген. штаба') {
      currentLocation = 'locations';
    } else {
      currentLocation = 'location';
    }
    console.log('--------------------> ' + currentLocation);

    if (currentLocation === 'home') {
      setTimeout(regenHP, 1000);
      setTimeout(goToLocations, 5000);
    } else if (currentLocation === 'locations') {
      setTimeout(goTolocation, 1000);
    } else {
      setTimeout(selectMob, 1000);
      setTimeout(attack, 10000);
      setTimeout(goToHome, 15000);
    }
  } else {
    console.log('--------------------> Персонаж умер, либо переходит в локацию!');
  }
}

setInterval(game, 20000);
