#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";


console.log(chalk.green("-".repeat(50)));
console.log(chalk.red(`\t" WELCOME TO ADVANTURE GAME "`));
console.log(chalk.green("-".repeat(50)));

//CLASS FOR PLAYER :
class Player{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel
    }

    fuelIncrease(){
    
        this.fuel = 100;
    }
}

//CLASS FOR OPPONENT:
class Opponent{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel
    }
}

//VARIABLE OF PLAYER FOR OBJECT:
let player= await inquirer.prompt([
     
   { 
    name:"name",
    type:"input",
    message:"Please Enter Your Name:",
   }
    
]);

//VARIABLE OF OPPONENT FOR OBJECT:
let opponent= await inquirer.prompt([
     
    { 
      name:"select",
      type:"list",
      message:"Please select  Your opponenet",
      choices :[{value:'Skeleton'},{value:'Zombie'},{value:'Monster'}]
    }
     
 ]);

 let p1 =new Player(player.name);
 let o1 = new Opponent(opponent.select);
 console.log("-".repeat(50))
 console.log(chalk.blueBright`\t"${p1.name}" VS "${o1.name}"`);
 console.log("-".repeat(50))
 
 //USING DO WHILE LOOP:
 

 do{ 
   //SKELETON 
     if(opponent.select === 'Skeleton'){
    let ask =await inquirer.prompt([
           
       {
        name:"options",
        type:"list",
        message:(chalk.yellow("what would you like to do?")),
        choices:[{value:'Attack'} ,{value:'Drink Portion'} ,{value:'Run For Your Life' }],
       }
    ]);
    if(ask.options ===  'Attack'  ){
        let num= Math.floor(Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.green(`${p1.name} fuel is :${p1.fuel}`));
            console.log("-".repeat(50));
            console.log(chalk.red(`${o1.name} fuel is :${o1.fuel}`));
            console.log("-".repeat(50));
           if(p1.fuel <= 0){
              console.log(chalk.red("\tYou Fuel is Empty , YOU LOOSE!"));
              console.log("-".repeat(50));
              process.exit()
           }
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(chalk.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log("-".repeat(50));
            console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log("-".repeat(50));
            if(o1.fuel <= 0){
                console.log(chalk.yellow(`\tCongratulation "${p1.name}" YOU WIN!`));
                console.log("-".repeat(50));
                process.exit()
         }      
    }
}
    if(ask.options === 'Drink Portion'){
       p1.fuelIncrease()
       console.log(chalk.green(`You Drink Health Portion Your Fuel is:${p1.fuel}`));
       console.log("-".repeat(50));
       
    }

    if(ask.options ==='Run For Your Life'){
        console.log(chalk.red("\tYou Loose , Better Luck Next TIME!!"));
        console.log("-".repeat(50));
        process.exit()
    }
  }
 
  //ZOMBIE
  if(opponent.select === 'Zombie'){
    let ask =await inquirer.prompt([
           
       {
        name:"options",
        type:"list",
        message:(chalk.yellow("what would you like to do?")),
        choices:[{value:'Attack'} ,{value:'Drink Portion'} ,{value:'Run For Your Life' }],
       }
    ]);
    if(ask.options ===  'Attack'  ){
        let num= Math.floor(Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.green(`${p1.name} fuel is :${p1.fuel}`));
            console.log("-".repeat(50));
            console.log(chalk.red(`${o1.name} fuel is :${o1.fuel}`));
            console.log("-".repeat(50));
           if(p1.fuel <= 0){
              console.log(chalk.red("\tYou Fuel is Empty , YOU LOOSE!"));
              console.log("-".repeat(50));
              process.exit()
           }
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(chalk.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log("-".repeat(50));
            console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log("-".repeat(50));
            if(o1.fuel <= 0){
                console.log(chalk.yellow(`\tCongratulation "${p1.name}" YOU WIN!`));
                console.log("-".repeat(50));
                process.exit()
         }      
    }
}
    if(ask.options === 'Drink Portion'){
       p1.fuelIncrease()
       console.log(chalk.green(`You Drink Health Portion Your Fuel is:${p1.fuel}`));
       console.log("-".repeat(50));
       
    }

    if(ask.options ==='Run For Your Life'){
        console.log(chalk.red("\tYou Loose , Better Luck Next TIME!!"));
        console.log("-".repeat(50));
        process.exit()
    }
  }
   
  //MONSTER
  if(opponent.select === 'Monster'){
    let ask =await inquirer.prompt([
           
       {
        name:"options",
        type:"list",
        message:(chalk.yellow("what would you like to do?")),
        choices:[{value:'Attack'} ,{value:'Drink Portion'} ,{value:'Run For Your Life' }],
       }
    ]);
    if(ask.options ===  'Attack'  ){
        let num= Math.floor(Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.green(`${p1.name} fuel is :${p1.fuel}`));
            console.log("-".repeat(50));
            console.log(chalk.red(`${o1.name} fuel is :${o1.fuel}`));
            console.log("-".repeat(50));

           if(p1.fuel <= 0){
              console.log(chalk.red("\tYou Fuel is Empty , YOU LOOSE!"));
              console.log("-".repeat(50));
              process.exit()
           }
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(chalk.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log("-".repeat(50));
            console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log("-".repeat(50));
            if(o1.fuel <= 0){
                console.log(chalk.yellow(`Congratulation "${p1.name}" YOU WIN!`));
                console.log("-".repeat(50));
                process.exit()
         }      
    }
}
    if(ask.options === 'Drink Portion'){
       p1.fuelIncrease()
       console.log(chalk.green(`You Drink Health Portion Your Fuel is:${p1.fuel}`));
       console.log("-".repeat(50));
       
    }

    if(ask.options ==='Run For Your Life'){
        console.log(chalk.red("\tYou Loose , Better Luck Next TIME!!"));
        console.log("-".repeat(50));
        process.exit()
    }
  }
 
 }
 while(true)