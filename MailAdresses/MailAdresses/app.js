const readline = require('readline');
const fs = require('fs');
let firstName;
let lastName;
let fields;
let counter = 0;



console.log("----------------------------------");
console.log("email adresses");
console.log("----------------------------------");

const compressedLines = [];


const rl = readline.createInterface({
    input: fs.createReadStream('teachers.csv'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    zerlegen(line);
});

rl.on('line', (line) => {
    compressedLines.push(line);
});


function zerlegen(line){
    firstName = line.charAt(0);
    fields = line.split(";");



    lastName = fields[1];
    lastName = lastName.toLowerCase();

    firstName = firstName.toLowerCase();
    lastName = lastName.replace("ö", "oe");
    lastName = lastName.replace("ä","ae");
    lastName = lastName.replace("ü","ue");
    console.log(getMailAddress(firstName,lastName));
    counter++;

   if(counter == 5){
       console.log("-------------------------------------");
   }

}

function getMailAddress(firstName,lastName){
    let email = firstName + "." + lastName + "@htl-leonding.ac.at";


    return email;
}





