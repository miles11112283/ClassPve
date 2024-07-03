
const prompt = require("prompt-sync")();

let human = {
    name: "",
    level: 1,
}

let warriorClass = {
    class: "Warrior",
    currentHp: 6,
    maxHp: 6,
    damage: 3,
    maxDmg: 3,
    name: "",
    level: 1 ,
    attack1: "Smack",
    attack2: "Strike",
    attack3: "Slice and Dice",
    attack1description: "The user smacks the opponent",
    attack2description: "The user Strikes the opponent",
    attack3description: "The user slice and dices the opponenet, 50% chance to deal double dmg, 50% chance to temporarily double hp",
    exp: 0,
    nextLevel: 100,
    balance: 0,
}

let bruiserClass = {
    class: "Bruiser",
    currentHp: 8,
    maxHp: 8,
    damage: 2,
    maxDmg: 2,
    name: "",
    level: 1,
    attack1: "Clash",
    attack2: "Silence",
    attack3: "Stampede",
    attack1description: "The user clashes with the opponent",
    attack2description: "The user Silences the opponent",
    attack3description: "The user calls in backup, dealing double the base damage. 50% chance to temporarily lose half of current hp on use",
    exp: 0,
    nextLevel: 100,
    balance: 0,

}

let tankClass = {
    class: "Tank",
    currentHp: 10,
    maxHp: 10,
    damage: 1,
    maxDmg: 1,
    name: "",
    level: 1,
    attack1: "Shield Bash",
    attack2: "Charge",
    attack3: "Solidify",
    attack1description: "The user bashes the opponent with their shield",
    attack2description: "The user charges at the opponent",
    attack3description: "The user attacks the opponet, has a 5% chance to Solidify themselves, permanently increasing their damage stat equal to their maxHp",
    exp: 0,
    nextLevel: 100,
    balance: 0,
}

let archerClass = {
    class: "Archer",
    currentHp: 4,
    maxHp: 4,
    damage: 4,
    maxDmg: 4,
    name: "",
    level: 1,
    attack1: "Headshot",
    attack2: "Bullseye",
    attack3: "Arrow Storm",
    attack1description: "The user shoots the opponent",
    attack2description: "The user nails the opponent",
    attack3description: "The user summons a swarm of deadly arrows, dealing double dmg and temporarily decreases hp by 2",
    exp: 0,
    nextLevel: 100,
    balance: 0,
}

let wizardClass = {
    class: "Wizard",
    currentHp: 3,
    maxHp: 3,
    damage: 5,
    maxDmg: 5,
    name: "",
    level: 1,
    attack1: "Fireball",
    attack2: "ElectroBall",
    attack3: "Blizzard",
    attack1description: "The user casts a spell on the opponent",
    attack2description: "The user casts an ElectroBall on the opponent",
    attack3description: "The user attacks the opponent with a Blizzard, 50% change to deal triple dmg, 100% chance to temporaily set hp to 1",
    exp: 0,
    nextLevel: 100,
    balance: 0,
}

let enemy1 = {
    name: "Goomy the Goblin",
    currentHp: 3,
    maxHp: 3,
    damage: 1,
    attack1: "Thrash",
    attack2: "Bone Swing",
    exp: 25
}

let enemy2 = {
    name: "Sal the Sentinel",
    currentHp: 6,
    maxHp: 6,
    damage: 2,
    attack1: "Smash",
    attack2: "Swoosh",
    exp: 50
}

let enemy3 = {
    name: "Dan the Dragon",
    currentHp: 12,
    maxHp: 12,
    damage: 3,
    attack1: "FIRE BREATH AHAHAH",
    attack2: "SNOW CONE NOSE ATTACK",
    exp: 75
}

let enemy4 = {
    name: "Ike the Iron Giant",
    currentHp: 25,
    maxHp: 25,
    damage: 4,
    attack1: "Sits on opponent",
    attack2: "shoots lasers out of nipples",
    exp: 100
}

let enemy5 = {
    name: "Miles",
    currentHp: 50,
    maxHp: 50,
    damage: 5,
    attack1: "Left Kick",
    attack2: "Right Punch",
    exp: 125
}

const Introduction = () => {
    console.log("Welcome to ClassPve!, ClassPve is a rogue like game where you fight to defeat monsters and level up to unlock other monsters and upgrade your skills!")
    while(true){
    let namepick = prompt('What is your name?: ');
    if(namepick == null || namepick == "") {
        console.log("Invalid Name, Please try again.");

    } else{
        console.log(`Your name is ${namepick} `)
        human.name = namepick
        break;
    }
}
    prompt("Before the fun can start, You first must select a class. Allow me to give you a quick overview of each class!")
    prompt("The first class is the Warrior Class, Having a good amount of hp and a good amount of damage, the Warrior class is the most well-rounded class!")
    prompt("The second class is the Bruiser Class, Bruisers have a high amount of hp with a mid-low amount of damage!");
    prompt("The third class is the Tank Class, Tanks have the most hp in the game out of any class, and the lowest damage out of any class!");
    prompt("The fourth class is the Archer Class, Archers have a low amount of hp but make up for it with their high damage stat!");
    prompt("The fifth and final class is the Wizard Class, Having the highest attack stat in the game, and the lowest hp stat in the game!");
    prompt("Each class has a unique mechanic that can only be learned through playing the game. Anyways, its now time to pick your class! Please type the class you'd like to become!");
    while(true) {
    const selection = prompt('Warrior, Bruiser, Tank, Archer, Wizard: ');
    if(selection == "Warrior"){
        warriorClass.name = human.name;
        human = warriorClass;
        console.log('You have selected the Warrior Class!')
        break;
    } else if (selection == "Bruiser") {
        bruiserClass.name = human.name;
        human = bruiserClass;
        console.log('You have selected the Bruiser Class!')
        break;
    } else if (selection == "Tank") {
        tankClass.name = human.name;
        human = tankClass;
        console.log('You have selected the Tank Class!')
        break;
    } else if (selection == "Archer"){
        archerClass.name = human.name;
        human = archerClass;
        console.log('You have selected the Archer Class!')
        break;
    } else if (selection == "Wizard"){
        wizardClass.name = human.name;
        human = wizardClass;
        console.log("You have selected the Wizard Class!")
        break;
    } else {
        console.log("Invalid Class Selection, Please Try Again!")
    }
}
}
const timealonetutorial = () => {
    prompt(`Congrats ${human.name} on becoming a ${human.class}!`);
    prompt(`Now that you are a full fledged ${human.class}, its time to put you to the test.`);
    prompt('ITS TIME TO BATTLE!');
}

const tutorial1 = () => {
    prompt(`You have encountered a wild ${enemy1.name}!`)
    prompt(`In ClassPve, each type of entity has the same stats and same attack types. Its your job to learn as much as you can to become the best ${human.class} you can be!`)
    prompt('Who goes first in a fight is completely 50/50! With a well planned strategy any fight can be won!')
    prompt('On enemys turns, they will have a select amount of attacks they can choose from that each have different outcomes.')
    prompt('Goomy here is a level 1 enemy, You can only encounter enemys that are below or your current level.')
    prompt('On your turn, you can either decide to attack, or flee if you feel like youre not going to survive')
    prompt('If you die all of your stats will be reset and youll have to start from the beginning, so try not to die :)');
    prompt('When you choose a move, it will immediantly take effect. Meaning if your opponent is first and chooses to attack, he will attack you before you even get to pick a move.')
    prompt('Hope you enjoyed this brief tutorial, I better be able to meet you at the final boss :)')
    attackTutorial1();
    }


const attackTutorial1 = () => {
    prompt('It is your turn');
    prompt('Every class starts off as a level 1 with 2 attack-like moves');
    prompt('During your selection phase, you can either choose Attack, which will allow you to choose between one of your max of 3 attacks')
    prompt('You can choose Summary, which will give you a summary of your current stats and what your attacks do')
    prompt('Finally, you can choose to flee, this will have a 50% chance to flee the battle, healing you to full health in doing so.')
    prompt('Other than returning to the city, Leveling up is the only other way to heal.')
    prompt('Enough talking, what would you like to do?');
    while (true) {
        let selection = prompt('Attack, Summary, Flee: ');
        if (selection == 'Attack') {
            let movepick = prompt(`${human.attack1} / ${human.attack2}: `);
            if (movepick == human.attack1) {
                prompt(`${human.name} used ${human.attack1}!`);
                prompt(`${enemy1.name} took ${human.damage} damage!`);
                enemy1.currentHp = enemy1.currentHp - human.damage;
                prompt(`${enemy1.name} is now at ${enemy1.currentHp} / ${enemy1.maxHp} hp!`);
                if (enemy1.currentHp <= 0) {
                    prompt(`You have defeated ${enemy1.name}!`);
                    prompt('You have gained $1!')
                    gainExpierence1();
                    human.balance++;
                    enemy1.currentHp = enemy1.maxHp;
                    timealone();
                } else{
                    enemy1attackTutorial();
                }
            } else if (movepick == human.attack2) {
                prompt(`${human.name} used ${human.attack2}!`);
                prompt(`${enemy1.name} took ${human.damage} damage!`);
                enemy1.currentHp = enemy1.currentHp - human.damage;
                prompt(`${enemy1.name} is now at ${enemy1.currentHp} / ${enemy1.maxHp} hp!`);
                if (enemy1.currentHp <= 0) {
                    prompt(`You have defeated ${enemy1.name}!`);
                    prompt('You have gained $1!')
                    gainExpierence1();
                    human.balance++;
                    enemy1.currentHp = enemy1.maxHp;
                    timealone();
                } else{
                    enemy1attackTutorial();
                }
            } else {
                console.log("Invalid move selection, please try again.");
            }
        } else if (selection == 'Summary') {
            console.log(`Level: ${human.level}`);
            console.log(`Balance: $${human.balance}`)
            console.log(`Damage: ${human.damage}`)
            console.log(`Level: ${human.exp} / ${human.nextLevel}`)
            console.log(`Hp: ${human.currentHp} / ${human.maxHp}`);
            console.log(`${human.attack1} => ${human.attack1description}`);
            console.log(`${human.attack2} => ${human.attack2description}`);
            console.log(`${human.attack3} => ${human.attack3description}`);
            console.log('The third attack unlocks at level 3!')
        } else if (selection == "Flee") {
            FleeChance();
        } else {
            console.log("Invalid Selection, Please try again");
        }
    }
}    

const gainExpierence1 = () => {
    prompt('You have gained 25XP!');
    human.exp = human.exp + enemy1.exp; 
    prompt(`Current experience ${human.exp} / ${human.nextLevel}`)
    if(human.exp >= human.nextLevel)
        levelup();
}
const gainExpierence2 = () => {
    prompt('You have gained 50XP!');
    human.exp = human.exp + enemy2.exp; 
    prompt(`Current experience ${human.exp} / ${human.nextLevel}`)
    if(human.exp >= human.nextLevel)
        levelup();
}
const gainExpierence3 = () => {
    prompt('You have gained 75XP!');
    human.exp = human.exp + enemy3.exp; 
    prompt(`Current experience ${human.exp} / ${human.nextLevel}`)
    if(human.exp >= human.nextLevel)
        levelup();
}
const gainExpierence4 = () => {
    prompt('You have gained 100XP!');
    human.exp = human.exp + enemy4.exp; 
    prompt(`Current experience ${human.exp} / ${human.nextLevel}`)
    if(human.exp >= human.nextLevel)
        levelup();
}
const gainExpierence5 = () => {
    prompt('You have gained 125XP!');
    human.exp = human.exp + enemy5.exp; 
    prompt(`Current experience ${human.exp} / ${human.nextLevel}`)
    if(human.exp >= human.nextLevel)
        levelup();
}

const levelup = () => {
    human.level++
    prompt(`Congrats! You leveled up to level ${human.level}`)
    human.exp = 0
    human.nextLevel *= 1.25;
}


const enemy1attackTutorial = () => {
    console.log(`${enemy1.name} is getting ready to attack!`);
    let r = Math.random();
    if (r < 0.5) {
        prompt(`${enemy1.name} used ${enemy1.attack1}!`);
        human.currentHp = human.currentHp - enemy1.damage;
        prompt(`${human.name} lost ${enemy1.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy1.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack1();
        }
    } else {
        prompt(`${enemy1.name} used ${enemy1.attack2}!`);
        human.currentHp = human.currentHp - enemy1.damage;
        prompt(`${human.name} lost ${enemy1.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy1.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack1();
        }
    }
    attackTutorial1();
}
const timealone = () => {
    human.currentHp = human.maxHp;
    prompt('After a long day you decide to sit by a fountain in the city.');
    let shopDecision = prompt("Would you like to visit the shop? (Y/N): ");

    while (true) {
        if (shopDecision == 'Y') {
            prompt('You walk to the local shop');
            shopKeeper();
            break;
        } else if (shopDecision == 'N') {
            break;
        } else {
            console.log('Invalid Selection, Please Try Again');
            shopDecision = prompt('Would you like to visit the shop? (Y/N): ');
        }
    }

    let opponentDecision = prompt("Would you like to search for an opponent? (Y/N): ");

    while (true) {
        if (opponentDecision == 'Y') {
            console.log('Searching for an opponent');
            battleSelection();
            break;
        } else if (opponentDecision == 'N') {
            prompt("Stop being a lazy bum");
            timealone();
        } else {
            console.log('Invalid Selection, Please Try Again');
            timealone();
        }
    }
}
const shopKeeper = () => {
    prompt("Welcome to my shop, the names Mills, we have many things to offer, let me know if you are interested.");
    prompt("If you'd like to buy the first item, type 1. If you'd like to buy the second, type 2 and so on.");
    prompt("Heart Canister - $5, Death Canister - $5, Class Specialized Weapon - $20");

    while (true) {
        let shopping = prompt("Which item would you like to buy?: ");

        if (shopping == '1') {
            prompt("Heart Canister - $5, Permanently increases user's HP by 1");
            let heart = prompt("Would you like to buy this item? (Y/N): ");
            if (heart == "N") {
                prompt("You have changed your mind");
            } else if (heart == "Y" && human.balance >= 5) {
                prompt('Thank you for your purchase!');
                human.maxHp += 1;
                human.currentHp = human.maxHp;
                prompt(`Your hp is now ${human.currentHp} / ${human.maxHp}!`);
                human.balance -= 5;
            } else if (heart == "Y") {
                prompt("Sorry, you cannot afford this item.");
            }
        } else if (shopping == "2") {
            prompt("Death Canister - $5, Permanently increases user's DPS by 1");
            let death = prompt("Would you like to buy this item? (Y/N): ");
            if (death == "N") {
                prompt("You have changed your mind");
            } else if (death == "Y" && human.balance >= 5) {
                prompt('Thank you for your purchase!');
                human.maxDmg += 1;
                human.damage = human.maxDmg;
                prompt(`Your dmg is now ${human.damage}!`);
                human.balance -= 5;
            } else if (death == "Y") {
                prompt("Sorry, you cannot afford this item.");
            }
        } else if (shopping == "3") {
            prompt("Class Specialized Weapon - $20, Unlocks the 3rd move");
            let weapon = prompt("Would you like to buy this item? (Y/N): ");
            if (weapon == "N") {
                prompt("You have changed your mind");
            } else if (weapon == "Y" && human.balance >= 20) {
                prompt('Thank you for your purchase!');
                prompt(`idk what this does yet lol`);
                human.balance -= 20;
            } else if (weapon == "Y") {
                prompt("Sorry, you cannot afford this item.");
            }
        } else {
            prompt("Invalid Selection, Please Try Again");
        }
        leavingShop();
    }
    }
    let leavingShop = () => {
        while(true) {
            let leaving = prompt('Would you like to leave? (Y/N): ');
            if (leaving == "Y") {
                prompt("You have decided to leave");
                timealone();
                break; 
            } else if (leaving == "N") {
                prompt("You chose to stay in the shop");
                shopKeeper();
            } else {
                prompt("Invalid response, Please state Y/N");
    
            }
        }
    }
    const battleSelection = () => {
        if (human.level < 2) {
            battle1();
        } else if (human.level < 3) {
            let b = Math.random();
            if (b > 0.5) {
                battle1();
            } else {
                battle2();
            }
        } else if (human.level < 4) {
            let b = Math.random();
            if (b > 0.66) {
                battle1();
            } else if (b > 0.33) {
                battle2();
            } else {
                battle3();
            }
        } else if (human.level < 5) {
            let b = Math.random();
            if (b > 0.75) {
                battle1();
            } else if (b > 0.50) {
                battle2();
            } else if (b > 0.25) {
                battle3();
            } else {
                battle4();
            }
        } else if (human.level < 6) {
            let b = Math.random();
            if (b > 0.80) {
                battle1();
            } else if (b > 0.60) {
                battle2();
            } else if (b > 0.40) {
                battle3();
            } else if (b > 0.20) {
                battle4();
            } else {
                battle5();
            }
        } else {
        }
    }

const battle1 = () => {
    let battle = prompt(`You have encountered a wild ${enemy1.name}!`)
    let r = Math.random();
    if (r < 0.5){
        enemy1attack();
    } else {
        attack1();
    }   
}
const battle2 = () => {
    let battle = prompt(`You have encountered a wild ${enemy2.name}!`)
    let r = Math.random();
    if (r < 0.5){
        enemy2attack();
    } else {
        attack2();
    }   
}
const battle3 = () => {
    let battle = prompt(`You have encountered a wild ${enemy3.name}!`)
    let r = Math.random();
    if (r < 0.5){
        enemy3attack();
    } else {
        attack3();
    }   
}
const battle4 = () => {
    let battle = prompt(`You have encountered a wild ${enemy4.name}!`)
    let r = Math.random();
    if (r < 0.5){
        enemy4attack();
    } else {
        attack4();
    }   
}
const battle5 = () => {
    let battle = prompt(`You have encountered a wild ${enemy5.name}!`)
    let r = Math.random();
    if (r < 0.5){
        enemy5attack();
    } else {
        attack5();
    }   
}

const enemy1attack = () => {
    console.log(`${enemy1.name} is getting ready to attack!`);
    let r = Math.random();
    if (r < 0.5) {
        prompt(`${enemy1.name} used ${enemy1.attack1}!`);
        human.currentHp = human.currentHp - enemy1.damage;
        prompt(`${human.name} lost ${enemy1.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy1.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack1();
        }
    } else {
        prompt(`${enemy1.name} used ${enemy1.attack2}!`);
        human.currentHp = human.currentHp - enemy1.damage;
        prompt(`${human.name} lost ${enemy1.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy1.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack1();
        }
    }
}
const enemy2attack = () => {
    console.log(`${enemy2.name} is getting ready to attack!`);
    let r = Math.random();
    if (r < 0.5) {
        prompt(`${enemy2.name} used ${enemy2.attack1}!`);
        human.currentHp = human.currentHp - enemy2.damage;
        prompt(`${human.name} lost ${enemy2.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy2.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack2();
        }
    } else {
        prompt(`${enemy2.name} used ${enemy2.attack2}!`);
        human.currentHp = human.currentHp - enemy2.damage;
        prompt(`${human.name} lost ${enemy2.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy2.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack2();
        }
    }
}
const enemy3attack = () => {
    console.log(`${enemy3.name} is getting ready to attack!`);
    let r = Math.random();
    if (r < 0.5) {
        prompt(`${enemy3.name} used ${enemy3.attack1}!`);
        human.currentHp = human.currentHp - enemy3.damage;
        prompt(`${human.name} lost ${enemy3.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy3.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack3();
        }
    } else {
        prompt(`${enemy3.name} used ${enemy3.attack2}!`);
        human.currentHp = human.currentHp - enemy3.damage;
        prompt(`${human.name} lost ${enemy3.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy3.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack3();
        }
    }
}

const enemy4attack = () => {
    console.log(`${enemy4.name} is getting ready to attack!`);
    let r = Math.random();
    if (r < 0.5) {
        prompt(`${enemy4.name} used ${enemy4.attack1}!`);
        human.currentHp = human.currentHp - enemy4.damage;
        prompt(`${human.name} lost ${enemy4.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy4.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack4();
        }
    } else {
        prompt(`${enemy4.name} used ${enemy4.attack2}!`);
        human.currentHp = human.currentHp - enemy4.damage;
        prompt(`${human.name} lost ${enemy4.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy4.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack4();
        }
    }
}

const enemy5attack = () => {
    console.log(`${enemy5.name} is getting ready to attack!`);
    let r = Math.random();
    if (r < 0.5) {
        prompt(`${enemy5.name} used ${enemy5.attack1}!`);
        human.currentHp = human.currentHp - enemy5.damage;
        prompt(`${human.name} lost ${enemy5.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy5.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack5();
        }
    } else {
        prompt(`${enemy5.name} used ${enemy5.attack2}!`);
        human.currentHp = human.currentHp - enemy5.damage;
        prompt(`${human.name} lost ${enemy5.damage} hp and is now at ${human.currentHp}/${human.maxHp} hp!`);
        if (human.currentHp <= 0) {
            prompt(`You have been defeated by ${enemy5.name}!`);
            prompt('You Have Died');
            deathEnding();
        } else {
            attack5();
        }
    }
}


const FleeChance = () => {
    let f = Math.random();
    if(f < 0.5) {
        console.log('You have succesfully fled the battle!');
        human.currentHp = human.maxHp;
        timealone();
    } else {
        console.log('You were unable to flee the battle!')

    }


}

const deathEnding = () => {
    prompt("Thanks for playing :)")
    clear();
}

const ending = () => {
    prompt("Congrats on beating my game:)")
    prompt("This game was just for fun, im in the process of learning javascript and felt like making a game")
    prompt("How you enjoyed:D")

}

const attack1 = () => {
prompt("It is your turn")
prompt('What would you like to do?');
while (true) {
    let selection = prompt('Attack, Summary, Flee: ');
    if (selection == 'Attack' && human.level < 3) {
        let movepick = prompt(`${human.attack1} / ${human.attack2}: `);
        if (movepick == human.attack1) {
            prompt(`${human.name} used ${human.attack1}!`);
            prompt(`${enemy1.name} took ${human.damage} damage!`);
            enemy1.currentHp = enemy1.currentHp - human.damage;
            prompt(`${enemy1.name} is now at ${enemy1.currentHp} / ${enemy1.maxHp} hp!`);
            if (enemy1.currentHp <= 0) {
                prompt(`You have defeated ${enemy1.name}!`);
                prompt('You have gained $1!')
                    gainExpierence1();
                    human.balance++;
                enemy1.currentHp = enemy1.maxHp;
                timealone();
            } else{
                enemy1attack();
            }
        } else if (movepick == human.attack2) {
            prompt(`${human.name} used ${human.attack2}!`);
            prompt(`${enemy1.name} took ${human.damage} damage!`);
            enemy1.currentHp = enemy1.currentHp - human.damage;
            prompt(`${enemy1.name} is now at ${enemy1.currentHp} / ${enemy1.maxHp} hp!`);
            if (enemy1.currentHp <= 0) {
                prompt(`You have defeated ${enemy1.name}!`);
                prompt('You have gained $1!')
                    gainExpierence1();
                    human.balance++;
                enemy1.currentHp = enemy1.maxHp;
                timealone();
            } else{
                enemy1attack();
            }
        } else {
            console.log("Invalid move selection, please try again.");
        }
    } if (selection == 'Attack' && human.level >= 3) {
        let movepick = prompt(`${human.attack1} / ${human.attack2} / ${human.attack3}: `);
        if (movepick == human.attack1) {
            prompt(`${human.name} used ${human.attack1}!`);
            prompt(`${enemy1.name} took ${human.damage} damage!`);
            enemy1.currentHp = enemy1.currentHp - human.damage;
            prompt(`${enemy1.name} is now at ${enemy1.currentHp} / ${enemy1.maxHp} hp!`);
            if (enemy1.currentHp <= 0) {
                prompt(`You have defeated ${enemy1.name}!`);
                prompt('You have gained $1!')
                    gainExpierence1();
                    human.balance++;
                enemy1.currentHp = enemy1.maxHp;
                timealone();
            } else{
                enemy1attack();
            }
        } else if (movepick == human.attack2) {
            prompt(`${human.name} used ${human.attack2}!`);
            prompt(`${enemy1.name} took ${human.damage} damage!`);
            enemy1.currentHp = enemy1.currentHp - human.damage;
            prompt(`${enemy1.name} is now at ${enemy1.currentHp} / ${enemy1.maxHp} hp!`);
            if (enemy1.currentHp <= 0) {
                prompt(`You have defeated ${enemy1.name}!`);
                prompt('You have gained $1!')
                    gainExpierence1();
                    human.balance++;
                enemy1.currentHp = enemy1.maxHp;
                timealone();
            } else{
                enemy1attack();
            }
        } else if (movepick == human.attack3)
            t = Math.random();
            if(human.class = "Warrior"){
                if(t > 0.5)
                human.damage = human.damage * 2
            } else {
                human.currentHp = human.currentHp * 2
                continue;
            }   
            if(human.class = "Bruiser") {
                human.damage = human.damage * 2;
                continue;
            }if(t > 0.5){
                human.currentHp -= 4;
                continue;
            }
            if(human.class = "Tank") {
                if(t > 0.95) {
                    human.maxDmg = human.maxHp;
                    continue;
                }
            }if(human.class = "Archer"){
                human.damage = human.damage * 2;
                human.currentHp -= 2;
                continue;
            }if(human.class = "Wizard") {
                human.currentHp -= 1;
                continue;
             } if(t > 0.50) {
                    human.damage = human.damage * 3;
                    continue;
                }
            prompt(`${human.name} used ${human.attack3}!`);
            prompt(`${enemy1.name} took ${human.damage} damage!`);
            enemy1.currentHp = enemy1.currentHp - human.damage;
            prompt(`${enemy1.name} is now at ${enemy1.currentHp} / ${enemy1.maxHp} hp!`);
            human.currentHp = human.maxDmg; human.damage = human.maxDmg;
            if (enemy1.currentHp <= 0) {
                prompt(`You have defeated ${enemy1.name}!`);
                prompt('You have gained $1!')
                    gainExpierence1();
                    human.balance++;
                enemy1.currentHp = enemy1.maxHp;
                timealone();
            } else{
                enemy1attack();
            }
            console.log("Invalid move selection, please try again.");
        }
    else if (selection == 'Summary') {
        console.log(`Level: ${human.level}`);
        console.log(`Balance: $${human.balance}`)
        console.log(`Damage: ${human.damage}`)
        console.log(`Level: ${human.exp} / ${human.nextLevel}`)
        console.log(`Hp: ${human.currentHp} / ${human.maxHp}`);
        console.log(`${human.attack1} => ${human.attack1description}`);
        console.log(`${human.attack2} => ${human.attack2description}`);
        console.log(`${human.attack3} => ${human.attack3description}`);
        console.log('The third attack unlocks at level 3!')
    } else if (selection == "Flee") {
        FleeChance();
    } else {
        console.log("Invalid Selection, Please try again");
    }
}
}

const attack2 = () => {
    prompt("It is your turn")
    prompt('What would you like to do?');
    while (true) {
        let selection = prompt('Attack, Summary, Flee: ');
        if (selection == 'Attack' && human.level < 3) {
            let movepick = prompt(`${human.attack1} / ${human.attack2}: `);
            if (movepick == human.attack1) {
                prompt(`${human.name} used ${human.attack1}!`);
                prompt(`${enemy2.name} took ${human.damage} damage!`);
                enemy2.currentHp = enemy2.currentHp - human.damage;
                prompt(`${enemy2.name} is now at ${enemy2.currentHp} / ${enemy2.maxHp} hp!`);
                if (enemy2.currentHp <= 0) {
                    prompt(`You have defeated ${enemy2.name}!`);
                    prompt('You have gained $2!')
                    gainExpierence2();
                    human.balance += 2;
                    enemy2.currentHp = enemy2.maxHp;
                    timealone();
                } else{
                    enemy2attack();
                }
            } else if (movepick == human.attack2) {
                prompt(`${human.name} used ${human.attack2}!`);
                prompt(`${enemy2.name} took ${human.damage} damage!`);
                enemy2.currentHp = enemy2.currentHp - human.damage;
                prompt(`${enemy2.name} is now at ${enemy2.currentHp} / ${enemy2.maxHp} hp!`);
                if (enemy2.currentHp <= 0) {
                    prompt(`You have defeated ${enemy2.name}!`);
                    prompt('You have gained $2!')
                    gainExpierence2();
                    human.balance += 2;
                    enemy2.currentHp = enemy2.maxHp;
                    timealone();
                } else{
                    enemy2attack();
                }
            } else {
                console.log("Invalid move selection, please try again.");
            }
        } if (selection == 'Attack' && human.level >= 3) {
            let movepick = prompt(`${human.attack1} / ${human.attack2} / ${human.attack3}: `);
            if (movepick == human.attack1) {
                prompt(`${human.name} used ${human.attack1}!`);
                prompt(`${enemy2.name} took ${human.damage} damage!`);
                enemy2.currentHp = enemy2.currentHp - human.damage;
                prompt(`${enemy2.name} is now at ${enemy2.currentHp} / ${enemy2.maxHp} hp!`);
                if (enemy2.currentHp <= 0) {
                    prompt(`You have defeated ${enemy2.name}!`);
                    prompt('You have gained $2!')
                    gainExpierence2();
                    human.balance += 2;
                    enemy2.currentHp = enemy2.maxHp;
                    timealone();
                } else{
                    enemy2attack();
                }
            } else if (movepick == human.attack2) {
                prompt(`${human.name} used ${human.attack2}!`);
                prompt(`${enemy2.name} took ${human.damage} damage!`);
                enemy2.currentHp = enemy2.currentHp - human.damage;
                prompt(`${enemy2.name} is now at ${enemy2.currentHp} / ${enemy2.maxHp} hp!`);
                if (enemy2.currentHp <= 0) {
                    prompt(`You have defeated ${enemy2.name}!`);
                    prompt('You have gained $2!')
                    gainExpierence2();
                    human.balance += 2;
                    enemy2.currentHp = enemy2.maxHp;
                    timealone();
                } else{
                    enemy2attack();
                }
            } else if (movepick == human.attack3)
                t = Math.random();
                if(human.class = "Warrior"){
                    if(t > 0.5)
                    human.damage = human.damage * 2
                } else {
                    human.currentHp = human.currentHp * 2
                    continue;
                }   
                if(human.class = "Bruiser") {
                    human.damage = human.damage * 2;
                    continue;
                }if(t > 0.5){
                    human.currentHp -= 4;
                    continue;
                }
                if(human.class = "Tank") {
                    if(t > 0.95) {
                        human.maxDmg = human.maxHp;
                        continue;
                    }
                }if(human.class = "Archer"){
                    human.damage = human.damage * 2;
                    human.currentHp -= 2;
                    continue;
                }if(human.class = "Wizard") {
                    human.currentHp -= 1;
                    continue;
                 } if(t > 0.50) {
                        human.damage = human.damage * 3;
                        continue;
                    }
                prompt(`${human.name} used ${human.attack3}!`);
                prompt(`${enemy2.name} took ${human.damage} damage!`);
                enemy2.currentHp = enemy2.currentHp - human.damage;
                prompt(`${enemy2.name} is now at ${enemy2.currentHp} / ${enemy2.maxHp} hp!`);
                human.currentHp = human.maxDmg; human.damage = human.maxDmg;
                if (enemy2.currentHp <= 0) {
                    prompt(`You have defeated ${enemy2.name}!`);
                    prompt('You have gained $2!')
                    gainExpierence2();
                    human.balance += 2;
                    enemy2.currentHp = enemy2.maxHp;
                    timealone();
                } else{
                    enemy2attack();
                }
                console.log("Invalid move selection, please try again.");
            }
        else if (selection == 'Summary') {
            console.log(`Level: ${human.level}`);
            console.log(`Balance: $${human.balance}`)
            console.log(`Damage: ${human.damage}`)
            console.log(`Level: ${human.exp} / ${human.nextLevel}`)
            console.log(`Hp: ${human.currentHp} / ${human.maxHp}`);
            console.log(`${human.attack1} => ${human.attack1description}`);
            console.log(`${human.attack2} => ${human.attack2description}`);
            console.log(`${human.attack3} => ${human.attack3description}`);
            console.log('The third attack unlocks at level 3!')
        } else if (selection == "Flee") {
            FleeChance();
        } else {
            console.log("Invalid Selection, Please try again");
        }
    }
    }

    const attack3 = () => {
        prompt("It is your turn")
        prompt('What would you like to do?');
        while (true) {
            let selection = prompt('Attack, Summary, Flee: ');
            if (selection == 'Attack' && human.level < 3) {
                let movepick = prompt(`${human.attack1} / ${human.attack2}: `);
                if (movepick == human.attack1) {
                    prompt(`${human.name} used ${human.attack1}!`);
                    prompt(`${enemy3.name} took ${human.damage} damage!`);
                    enemy3.currentHp = enemy3.currentHp - human.damage;
                    prompt(`${enemy3.name} is now at ${enemy3.currentHp} / ${enemy3.maxHp} hp!`);
                    if (enemy3.currentHp <= 0) {
                        prompt(`You have defeated ${enemy3.name}!`);
                        prompt('You have gained $3!')
                        gainExpierence3();
                        human.balance += 3;
                        enemy3.currentHp = enemy3.maxHp;
                        timealone();
                    } else{
                        enemy3attack();
                    }
                } else if (movepick == human.attack2) {
                    prompt(`${human.name} used ${human.attack2}!`);
                    prompt(`${enemy3.name} took ${human.damage} damage!`);
                    enemy3.currentHp = enemy3.currentHp - human.damage;
                    prompt(`${enemy3.name} is now at ${enemy3.currentHp} / ${enemy3.maxHp} hp!`);
                    if (enemy3.currentHp <= 0) {
                        prompt(`You have defeated ${enemy3.name}!`);
                        prompt('You have gained $3!')
                        gainExpierence3();
                        human.balance += 3;
                        enemy3.currentHp = enemy3.maxHp;
                        timealone();
                    } else{
                        enemy3attack();
                    }
                } else {
                    console.log("Invalid move selection, please try again.");
                }
            } if (selection == 'Attack' && human.level >= 3) {
                let movepick = prompt(`${human.attack1} / ${human.attack2} / ${human.attack3}: `);
                if (movepick == human.attack1) {
                    prompt(`${human.name} used ${human.attack1}!`);
                    prompt(`${enemy3.name} took ${human.damage} damage!`);
                    enemy3.currentHp = enemy3.currentHp - human.damage;
                    prompt(`${enemy3.name} is now at ${enemy3.currentHp} / ${enemy3.maxHp} hp!`);
                    if (enemy3.currentHp <= 0) {
                        prompt(`You have defeated ${enemy3.name}!`);
                        prompt('You have gained $3!')
                        gainExpierence3();
                        human.balance += 3;
                        enemy3.currentHp = enemy3.maxHp;
                        timealone();
                    } else{
                        enemy3attack();
                    }
                } else if (movepick == human.attack2) {
                    prompt(`${human.name} used ${human.attack2}!`);
                    prompt(`${enemy3.name} took ${human.damage} damage!`);
                    enemy3.currentHp = enemy3.currentHp - human.damage;
                    prompt(`${enemy3.name} is now at ${enemy3.currentHp} / ${enemy3.maxHp} hp!`);
                    if (enemy3.currentHp <= 0) {
                        prompt(`You have defeated ${enemy3.name}!`);
                        prompt('You have gained $3!')
                        gainExpierence3();
                        human.balance += 3;
                        enemy3.currentHp = enemy3.maxHp;
                        timealone();
                    } else{
                        enemy3attack();
                    }
                } else if (movepick == human.attack3)
                    t = Math.random();
                    if(human.class = "Warrior"){
                        if(t > 0.5)
                        human.damage = human.damage * 2
                    } else {
                        human.currentHp = human.currentHp * 2
                        continue;
                    }   
                    if(human.class = "Bruiser") {
                        human.damage = human.damage * 2;
                        continue;
                    }if(t > 0.5){
                        human.currentHp -= 4;
                        continue;
                    }
                    if(human.class = "Tank") {
                        if(t > 0.95) {
                            human.maxDmg = human.maxHp;
                            continue;
                        }
                    }if(human.class = "Archer"){
                        human.damage = human.damage * 2;
                        human.currentHp -= 2;
                        continue;
                    }if(human.class = "Wizard") {
                        human.currentHp -= 1;
                        continue;
                     } if(t > 0.50) {
                            human.damage = human.damage * 3;
                            continue;
                        }
                    prompt(`${human.name} used ${human.attack3}!`);
                    prompt(`${enemy3.name} took ${human.damage} damage!`);
                    enemy3.currentHp = enemy3.currentHp - human.damage;
                    prompt(`${enemy3.name} is now at ${enemy3.currentHp} / ${enemy3.maxHp} hp!`);
                    human.currentHp = human.maxDmg; human.damage = human.maxDmg;
                    if (enemy3.currentHp <= 0) {
                        prompt(`You have defeated ${enemy3.name}!`);
                        prompt('You have gained $3!')
                        gainExpierence3();
                        human.balance += 3;
                        enemy3.currentHp = enemy3.maxHp;
                        timealone();
                    } else{
                        enemy3attack();
                    }
                    console.log("Invalid move selection, please try again.");
                }
            else if (selection == 'Summary') {
                console.log(`Level: ${human.level}`);
                console.log(`Balance: $${human.balance}`)
                console.log(`Damage: ${human.damage}`)
                console.log(`Level: ${human.exp} / ${human.nextLevel}`)
                console.log(`Hp: ${human.currentHp} / ${human.maxHp}`);
                console.log(`${human.attack1} => ${human.attack1description}`);
                console.log(`${human.attack2} => ${human.attack2description}`);
                console.log(`${human.attack3} => ${human.attack3description}`);
                console.log('The third attack unlocks at level 3!')
            } else if (selection == "Flee") {
                FleeChance();
            } else {
                console.log("Invalid Selection, Please try again");
            }
        }
        }

        const attack4 = () => {
            prompt("It is your turn")
            prompt('What would you like to do?');
            while (true) {
                let selection = prompt('Attack, Summary, Flee: ');
                if (selection == 'Attack' && human.level < 3) {
                    let movepick = prompt(`${human.attack1} / ${human.attack2}: `);
                    if (movepick == human.attack1) {
                        prompt(`${human.name} used ${human.attack1}!`);
                        prompt(`${enemy4.name} took ${human.damage} damage!`);
                        enemy4.currentHp = enemy4.currentHp - human.damage;
                        prompt(`${enemy4.name} is now at ${enemy4.currentHp} / ${enemy4.maxHp} hp!`);
                        if (enemy4.currentHp <= 0) {
                            prompt(`You have defeated ${enemy4.name}!`);
                            prompt('You have gained $4!')
                            gainExpierence4();
                            human.balance += 4;
                            enemy4.currentHp = enemy4.maxHp;
                            timealone();
                        } else{
                            enemy4attack();
                        }
                    } else if (movepick == human.attack2) {
                        prompt(`${human.name} used ${human.attack2}!`);
                        prompt(`${enemy4.name} took ${human.damage} damage!`);
                        enemy4.currentHp = enemy4.currentHp - human.damage;
                        prompt(`${enemy4.name} is now at ${enemy4.currentHp} / ${enemy4.maxHp} hp!`);
                        if (enemy4.currentHp <= 0) {
                            prompt(`You have defeated ${enemy4.name}!`);
                            prompt('You have gained $4!')
                            gainExpierence4();
                            human.balance += 4;
                            enemy4.currentHp = enemy4.maxHp;
                            timealone();
                        } else{
                            enemy4attack();
                        }
                    } else {
                        console.log("Invalid move selection, please try again.");
                    }
                } if (selection == 'Attack' && human.level >= 3) {
                    let movepick = prompt(`${human.attack1} / ${human.attack2} / ${human.attack3}: `);
                    if (movepick == human.attack1) {
                        prompt(`${human.name} used ${human.attack1}!`);
                        prompt(`${enemy4.name} took ${human.damage} damage!`);
                        enemy4.currentHp = enemy4.currentHp - human.damage;
                        prompt(`${enemy4.name} is now at ${enemy4.currentHp} / ${enemy4.maxHp} hp!`);
                        if (enemy4.currentHp <= 0) {
                            prompt(`You have defeated ${enemy4.name}!`);
                            prompt('You have gained $4!')
                            gainExpierence4();
                            human.balance += 4;
                            enemy4.currentHp = enemy4.maxHp;
                            timealone();
                        } else{
                            enemy4attack();
                        }
                    } else if (movepick == human.attack2) {
                        prompt(`${human.name} used ${human.attack2}!`);
                        prompt(`${enemy4.name} took ${human.damage} damage!`);
                        enemy4.currentHp = enemy4.currentHp - human.damage;
                        prompt(`${enemy4.name} is now at ${enemy4.currentHp} / ${enemy4.maxHp} hp!`);
                        if (enemy4.currentHp <= 0) {
                            prompt(`You have defeated ${enemy4.name}!`);
                            prompt('You have gained $4!')
                            gainExpierence4();
                            human.balance += 4;
                            enemy4.currentHp = enemy4.maxHp;
                            timealone();
                        } else{
                            enemy4attack();
                        }
                    } else if (movepick == human.attack3)
                        t = Math.random();
                        if(human.class = "Warrior"){
                            if(t > 0.5)
                            human.damage = human.damage * 2
                        } else {
                            human.currentHp = human.currentHp * 2
                            continue;
                        }   
                        if(human.class = "Bruiser") {
                            human.damage = human.damage * 2;
                            continue;
                        }if(t > 0.5){
                            human.currentHp -= 4;
                            continue;
                        }
                        if(human.class = "Tank") {
                            if(t > 0.95) {
                                human.maxDmg = human.maxHp;
                                continue;
                            }
                        }if(human.class = "Archer"){
                            human.damage = human.damage * 2;
                            human.currentHp -= 2;
                            continue;
                        }if(human.class = "Wizard") {
                            human.currentHp -= 1;
                            continue;
                         } if(t > 0.50) {
                                human.damage = human.damage * 3;
                                continue;
                            }
                        prompt(`${human.name} used ${human.attack3}!`);
                        prompt(`${enemy4.name} took ${human.damage} damage!`);
                        enemy4.currentHp = enemy4.currentHp - human.damage;
                        prompt(`${enemy4.name} is now at ${enemy4.currentHp} / ${enemy4.maxHp} hp!`);
                        human.currentHp = human.maxDmg; human.damage = human.maxDmg;
                        if (enemy4.currentHp <= 0) {
                            prompt(`You have defeated ${enemy4.name}!`);
                            prompt('You have gained $4!')
                            gainExpierence4();
                            human.balance += 4;
                            enemy4.currentHp = enemy4.maxHp;
                            timealone();
                        } else{
                            enemy4attack();
                        }
                        console.log("Invalid move selection, please try again.");
                    }
                else if (selection == 'Summary') {
                    console.log(`Level: ${human.level}`);
                    console.log(`Balance: $${human.balance}`)
                    console.log(`Damage: ${human.damage}`)
                    console.log(`Level: ${human.exp} / ${human.nextLevel}`)
                    console.log(`Hp: ${human.currentHp} / ${human.maxHp}`);
                    console.log(`${human.attack1} => ${human.attack1description}`);
                    console.log(`${human.attack2} => ${human.attack2description}`);
                    console.log(`${human.attack3} => ${human.attack3description}`);
                    console.log('The third attack unlocks at level 3!')
                } else if (selection == "Flee") {
                    FleeChance();
                } else {
                    console.log("Invalid Selection, Please try again");
                }
            }
            }

const attack5 = () => {
prompt("It is your turn")
prompt('What would you like to do?');
while (true) {
    let selection = prompt('Attack, Summary, Flee: ');
    if (selection == 'Attack' && human.level < 3) {
        let movepick = prompt(`${human.attack1} / ${human.attack2}: `);
        if (movepick == human.attack1) {
            prompt(`${human.name} used ${human.attack1}!`);
            prompt(`${enemy5.name} took ${human.damage} damage!`);
            enemy5.currentHp = enemy5.currentHp - human.damage;
            prompt(`${enemy5.name} is now at ${enemy5.currentHp} / ${enemy5.maxHp} hp!`);
            if (enemy5.currentHp <= 0) {
                prompt(`You have defeated ${enemy5.name}!`);
                prompt('You have gained $5!')
                gainExpierence5();
                human.balance += 5;
                enemy5.currentHp = enemy5.maxHp;
                timealone();
            } else{
                enemy5attack();
            }
        } else if (movepick == human.attack2) {
            prompt(`${human.name} used ${human.attack2}!`);
            prompt(`${enemy5.name} took ${human.damage} damage!`);
            enemy5.currentHp = enemy5.currentHp - human.damage;
            prompt(`${enemy5.name} is now at ${enemy5.currentHp} / ${enemy5.maxHp} hp!`);
            if (enemy5.currentHp <= 0) {
                prompt(`You have defeated ${enemy5.name}!`);
                prompt('You have gained $5!')
                gainExpierence5();
                human.balance += 5;
                enemy5.currentHp = enemy5.maxHp;
                timealone();
            } else{
                enemy5attack();
            }
        } else {
            console.log("Invalid move selection, please try again.");
        }
    } if (selection == 'Attack' && human.level >= 3) {
        let movepick = prompt(`${human.attack1} / ${human.attack2} / ${human.attack3}: `);
        if (movepick == human.attack1) {
            prompt(`${human.name} used ${human.attack1}!`);
            prompt(`${enemy5.name} took ${human.damage} damage!`);
            enemy5.currentHp = enemy5.currentHp - human.damage;
            prompt(`${enemy5.name} is now at ${enemy5.currentHp} / ${enemy5.maxHp} hp!`);
            if (enemy5.currentHp <= 0) {
                prompt(`You have defeated ${enemy5.name}!`);
                prompt('You have gained $5!')
                gainExpierence5();
                human.balance += 5;
                enemy5.currentHp = enemy5.maxHp;
                timealone();
            } else{
                enemy5attack();
            }
        } else if (movepick == human.attack2) {
            prompt(`${human.name} used ${human.attack2}!`);
            prompt(`${enemy5.name} took ${human.damage} damage!`);
            enemy5.currentHp = enemy5.currentHp - human.damage;
            prompt(`${enemy5.name} is now at ${enemy5.currentHp} / ${enemy5.maxHp} hp!`);
            if (enemy5.currentHp <= 0) {
                prompt(`You have defeated ${enemy5.name}!`);
                prompt('You have gained $5!')
                gainExpierence5();
                human.balance += 5;
                enemy5.currentHp = enemy5.maxHp;
                timealone();
            } else{
                enemy5attack();
            }
        } else if (movepick == human.attack3)
            t = Math.random();
            if(human.class = "Warrior"){
                if(t > 0.5)
                human.damage = human.damage * 2
            } else {
                human.currentHp = human.currentHp * 2
                continue;
            }   
            if(human.class = "Bruiser") {
                human.damage = human.damage * 2;
                continue;
            }if(t > 0.5){
                human.currentHp -= 4;
                continue;
            }
            if(human.class = "Tank") {
                if(t > 0.95) {
                    human.maxDmg = human.maxHp;
                    continue;
                }
            }if(human.class = "Archer"){
                human.damage = human.damage * 2;
                human.currentHp -= 2;
                continue;
            }if(human.class = "Wizard") {
                human.currentHp -= 1;
                continue;
             } if(t > 0.50) {
                    human.damage = human.damage * 3;
                    continue;
                }
            prompt(`${human.name} used ${human.attack3}!`);
            prompt(`${enemy5.name} took ${human.damage} damage!`);
            enemy5.currentHp = enemy5.currentHp - human.damage;
            prompt(`${enemy5.name} is now at ${enemy5.currentHp} / ${enemy5.maxHp} hp!`);
            human.currentHp = human.maxDmg; human.damage = human.maxDmg;
            if (enemy5.currentHp <= 0) {
                prompt(`You have defeated ${enemy5.name}!`);
                prompt('You have gained $5!')
                gainExpierence5();
                human.balance += 5;
                enemy5.currentHp = enemy5.maxHp;
                timealone();
            } else{
                enemy5attack();``
            }
            console.log("Invalid move selection, please try again.");
        }
    else if (selection == 'Summary') {
        console.log(`Level: ${human.level}`);
        console.log(`Balance: $${human.balance}`)
        console.log(`Damage: ${human.damage}`)
        console.log(`Level: ${human.exp} / ${human.nextLevel}`)
        console.log(`Hp: ${human.currentHp} / ${human.maxHp}`);
        console.log(`${human.attack1} => ${human.attack1description}`);
        console.log(`${human.attack2} => ${human.attack2description}`);
        console.log(`${human.attack3} => ${human.attack3description}`);
        console.log(`The second attack unlocks at level 3!`)
        console.log('The third attack unlocks at level 5!')
    } else if (selection == "Flee") {
        FleeChance();
    } else {
        console.log("Invalid Selection, Please try again");
    }
}
}


Introduction();
timealonetutorial();
tutorial1();
timealone();
deathEnding();
ending();