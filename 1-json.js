const fs=require('fs')
const book={
    title:'ego is the enemy',
    author:'ryan holiday'
}

const bookJSON=JSON.stringify(book) //js method which take in an object or array or any value and return json string representation
console.log(bookJSON) //return a string not an object,// cant access like bookJSON.title/author as it's a string

const parsedDATA=JSON.parse(bookJSON) //it converts/return string as object back
console.log(parsedDATA.author)

fs.writeFileSync('1-jeson.json',bookJSON) //taking this data to a new file
/*
const dataBuffer=fs.readFileSync('1-jeson.json') //buffer because it'll not return the string but binary
console.log(dataBuffer)//will print data in bytes
const abc=dataBuffer.toString()// will convert bytes data to string
console.log(abc)

const JSONdata=JSON.parse(abc)//will consvert data back to object
console.log(JSONdata.title) //print an object fro array
*/

// changing the data in 1-jeson.json file

const dataBuffer=fs.readFileSync('1-jeson.json') //reading and saving the file data into databuffer
const JSONdata=dataBuffer.toString() //converting buffer data to string

const dataJSON=JSON.parse(JSONdata) //converting string to object/array so that we can change the data

dataJSON.title="wings of fire"  //changing title
dataJSON.author='apj abudl kalam' //changing author but in dataJSON

const user=JSON.stringify(dataJSON)  //now converting array back to string
fs.writeFileSync('1-jeson.json',user) // now over writing the changed data into new file