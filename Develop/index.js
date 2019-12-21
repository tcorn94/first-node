const questions = [
  "What is your username?", "What is your favorite color?"
];


// pullling in stuff from homework

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "What is your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    
    
    axios
    .get(queryUrl)
    .then(function(res) {
 
  const repos = res.data.map(function(repo)
  
  {return repo.name;
  });

  function writeFile("userPage.pdf", data, function(err) {
    if (err) {
        throw err;
        
    }
   })
   
   function init() {
   
   init();