const validator = require('validator')
const chalk = require('chalk')
const abc = require('./notes.js')
const yargs = require('yargs')
const { describe } = require('yargs')
const fs = require('./notes.js')

// fs.writeFileSync('notes.txt', 'hey this is created by nodejs! \n')
// fs.appendFileSync('notes.txt', 'hey this is appended text by fs.appendFileSync!')

const xyz=abc()
console.log(xyz)

console.log(validator.isEmail('naman369@gmail.com'))
console.log(validator.isURL('https://gooogle.com'))
console.log(chalk.yellow.bgWhite.bold('Succes!'))
console.log(chalk.rgb(133,33,99)('yoo!'))

//taking user input from terminal
//and print msg according to msg

const input=process.argv[2];
console.log(process.argv);


if(input === 'naman'){
 console.log('hey naman! \n welcome');
}
else if(input === 'kunika'){
 console.log('hey! where is naman?');
}

//customize yargs version
yargs.version('1.1.0');

//creating a yargs command
yargs.command({
    command:'add',
    describe:'this will add a new note',
    builder:{ //build key value pair
        title:{ //key
            dedcribe:'note title',
            demandOption: true, //by default is false, true makes it necessary to pass the argument
            type:'string' //setting the type of argument as string so that , can't pass other data types
        },

        body:{
            describe:'provide body',
            demandOption:true,
            type:'string'

        }
    },
    handler: function( argv){ //calling or including the new arguments we're making necessary to pass(value)
        console.log("adding a new command!") //printing the value
        console.log(chalk.red('title:')+argv.title)
        console.log(chalk.red('body:')+argv.body)
    }
})

// creating a new yargs command
yargs.command({
    command:'remove',
    describe:'this will remove a note',
    handler: function(){
        console.log("removing a note!")
    }
})

yargs.command({
    command:'list',
    describe:'this will list the tasks',
    handler:function(){
        console.log("listing the taks!")
    }
})

yargs.command({
    command:'read',
    describe:'reading the task',
    handler:function(){
        console.log("reading the task!")
    }
})

//print yargs argument vector
//  console.log(yargs.argv) // traditional way which will print two times , one within function and one this one
yargs.parse() //will print only once