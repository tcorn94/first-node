


// pullling in stuff from homework

const generator = require("./generateHTML");
const axios = require("axios");
const inquirer = require("inquirer");

const opener = require("open");
const dote = require("dotenv");
const http = require("http");

const elec = require("electron");
const fs = require("fs");




const userAsk = [
  {
    type: "input",
    name: "question 1",
    message: "Enter your github username"
  },
  {
    type: "list",
    name: "question 2",
    message: "What is your favorite color?",
    choices: ["red", "green", "blue", "pink"]
  }]
  
async function getGithub(question1){
  const queryUrl = "https://api.github.com/users/" + question1;
 
  let gitHub = await axios.get(queryUrl);

  return gitHub.data;


}


  inquirer.prompt(userAsk).then(answers => {
    console.log("One moment please...");
   var data;
   getGithub(answers["question 1"]).then(x => {x.color = answers["question 2"];
 

   createPDF(generator.generateHTML(x));}); 
   
   
  

    
  });

  function createPDF(html) {
        
 
convertFactory = require("electron-html-to");

var conversion = convertFactory({
  converterPath:convertFactory.converters.PDF
});

conversion({html: html}, function(err, result) {
  if (err){
    return console.error(err);
    
  }
console.log(result.numberOfPages);
console.log(result.logs);

result.stream.pipe(fs.createWriteStream("C:\Users\Princess Itaya\Documents\Download\Stuff.pdf"));
conversion.kill();
opener("C:\Users\Princess Itaya\Documents\Download\Stuff.pdf");
})

       
      };
  










//refer to exercise 24
 //hook into .name
 //.avatar_url, .bio, .followers, .following, .public_repos

//  fs.exists("C:\Users\Princess Itaya\Documents\Download\Stuff.pdf", (exists) => {
//   console.log(exists ? 'it\'s there' : '');
//   if (exists) {
//     fs.unlink("C:\Users\Princess Itaya\Documents\Download\Stuff.pdf", (err) => {
//       if (err) console.log(err);
     
//     });
//   }
// });




