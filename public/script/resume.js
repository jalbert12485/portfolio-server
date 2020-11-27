let skills=[ "Web Development", "Algorithms", "Programming", "Object-Oriented Programming (OOP)", "Cascading Style Sheets (CSS)", "HTML", "JavaScript",  "JSON", "Node.js", "React.js", "MongoDB", "Mongoose", "NoSQL", "MySQL", "Sequelize", "SQL", "GitHub", "Git", "Bootstrap", "jQuery", "Heroku", "APIs", "Express.js", "Coding", "Mathematics", "Research", "Publishing", "Higher Education"];

for(let i=0; i< skills.length; i++){
    let li=$("<li>");
    li.addClass("col-md-4");
    li.text(skills[i]);

    $("#skills-row").append(li);
}