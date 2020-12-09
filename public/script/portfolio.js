let projects=[];

function addProject(dashname, name, description, skillsused, deployatgithub, deployelsewhere, deployelse){
    projects.push(
        {
            "dashname": dashname,
            "name": name,
            "description": description,
            "skillsused": skillsused,
            "deployatgithub": deployatgithub,
            "deployelsewhere": deployelsewhere,
            "deployelse": deployelse
        }
    );
}

addProject("explorer","Explorer!", "Explore and learn about the world and solar system you live in.  This educational game provides the player with the opportunity to create and character and purchase ships.  They can use these ships to fly around the world or through space and be given information on the locations they visit.  They then earn money by answering quiz questions on what they've learned.  If they get stuck, they can also use the in game chat in order to get help.", "Explorer is a MERN full-stack application, that is it utilizes mongo DB and mongoose, express, react and node.js.  We also use of the bcrypt, jsonwebtoken and socket.io packages.  In particular, I designed the overall structure of the game and implemented the explore and learn portion of the game.",false,true, "https://gentle-atoll-92825.herokuapp.com/")

addProject("limit-electronics","Limit Electronics","Limit Electronics is a one-stop shop for your electronic needs. In this project we created a mock e-commerce site complete with search, add to cart, checkout, inventory management and sales analysis features. Use username: Justin password: password to access admin features.","In this project we utilized css, html, js, jquery, bootstrap, handlebars, mySql and express in order to make a full-stack functional website.  In particular, I focused on providing administrative tools that allowed for editing inventory and monitoring sales.",false,true,"https://fierce-earth-38835.herokuapp.com/");

addProject("whats-for-dinner","What's For Dinner?","A website meant to recommend dinner and drink options to the user.  After choosing an option, the user can then see the recipe and instructions to make his/her choice.", "In this project we utilized css, html, js, and third party apis.  In particular, I developed the main page, over all layout and implemented the api calls.",true,false,null);

addProject("employee-directory","Employee Directory","Look up information for the employees of your company.  You can sort your results by name and time at company and can filter by locations.","In this react app, I used css, html, js, jquery, node.js.", false,true,"https://agile-island-64595.herokuapp.com/");

addProject("budget-tracker","Budget Tracker","Dynamically keep track of your budget.  Add deposits, subtract withdrawels even without the internet.","This application uses css, html, js, jquery, node.js, express, mongoDB and mongoose.  Furthermore it incorporates a service worker and indexedDB to keep the app functioning while offline.", false,true,"https://warm-dawn-06348.herokuapp.com/");

addProject("fitness-tracker","Fitness Tracker","Keep track of all your exercising over multiple workouts!","This application uses css, html, js, jquery, node.js, express, mongoDB and mongoose.",false,true,"https://morning-tor-96328.herokuapp.com/?id=5fae161b53fea50017749a3e");

addProject("burger","Burgers!","A full stak application that logs burgers that have been made and those that have been eaten.","In this application css, html, js, jquery, node.js, express, and mysql are used.", false,true,"https://ghoulish-nightmare-54214.herokuapp.com/");

addProject("permutations", "Combinatorial Counting", "Calculate the number of permutations, combination or multisets for given situations.  You can also view a random example of each of these.","This application is written using only css, html and vanilla javascript so that the techniques can be implemented in a wide range of apps.",true,false,null);

addProject("covid-data","COVID Tracking","Want to check the latest statistics for COVID in your state?  You can get detailed up to date information here.","In this project we utilized css, html, js, chart.js and third party apis.  In particular, I developed the api calls for the covid data and implemented the chart.", true,false,null);

addProject("team-information","Team Information","A node.js program that can take user infomration and save and display employee information.","This appliation uses node.js and inquirer.", false,false,null);

addProject("readme-generator","Readme Generator","A node.js program that is used to generate a detailed readme for github repositories.","This appliation uses node.js and inquirer.",false,false,null);

addProject("weather-forecast","Weather Forecast","Choose any city or cities.  Then view the current weather as well as the five-day forecast for a chosen city.","This application utilizes css, html, js, and third party apis.",true,false,null);

addProject("code-quiz","Code Quiz","See how well you know javaScript.  After finishing you can also save your high score!","This applicaiton uses css, html, js and bootstrap.",true,false,null);

addProject("daily-calendar","Daily Calendar","Write down and store your planned activities for the day.  Then remove them from you itinerary when you've completed them.","This application uses css, html, js and bootstrap", true,false,null);

addProject("password-generator","Password Generator","Generate a secure password from your choice of character sets.","This applicaiton uses css, html, and js.", true,false,null);


for(let i=0; i<projects.length; i++){
let newDiv=$("<div>");
newDiv.addClass("card col-sm-12");
newDiv.attr("style", "width: 18rem");
let newImg=$("<img>");
newImg.addClass("card-img-top");
newImg.attr("src", `img/${projects[i].dashname}.png`);
newImg.attr("alt",`${projects[i].name}`);

newDiv.append(newImg);

let newDiv2=$("<div>");
newDiv2.addClass("card-body");
let cardTitle=$("<h5>");
cardTitle.addClass("card-title");
cardTitle.text(`${projects[i].name}`);
let cardText=$("<p>");
cardText.addClass("card-text");
cardText.text(`${projects[i].description}`);

newDiv2.append(cardTitle);
newDiv2.append(cardText);

cardTitle=$("<h6>");
cardTitle.addClass("card-title");
cardTitle.text(`Technologies Used`);
cardText=$("<p>");
cardText.addClass("card-text");
cardText.text(`${projects[i].skillsused}`);
let repo=$("<a>");
repo.attr("href",`https://github.com/jalbert12485/${projects[i].dashname}`);
repo.attr("target","_blank");
repo.addClass("btn btn-primary m-2");
repo.text("View Github Repository");


newDiv2.append(cardTitle);
newDiv2.append(cardText);
newDiv2.append(repo);

if(projects[i].deployatgithub){
let deploy=$("<a>");
deploy.attr("href",`https://jalbert12485.github.io/${projects[i].dashname}`);
deploy.attr("target","_blank");
deploy.addClass("btn btn-primary m-2");
deploy.text("View Live Deployment");
newDiv2.append(deploy);
} 

if(projects[i].deployelsewhere){
    let deploy=$("<a>");
    deploy.attr("href",`${projects[i].deployelse}`);
    deploy.attr("target","_blank");
    deploy.addClass("btn btn-primary m-2");
    deploy.text("View Live Deployment");
    newDiv2.append(deploy);
    }



newDiv.append(newDiv2);
$("#portfolio-input").append(newDiv);
}

