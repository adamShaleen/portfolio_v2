angular.module("hireMe").service("service", function() {


// BIO text
this.bio = "I spent the first 28 years of my life in Minnesota, where I learned all about proper ice house placement, how to properly eat a 'Juicy Lucy', and about work ethic.  I've done quite a bit of everything over the years, but now I'm setting my sights on a career in web development.  Outside of the digital world you can find me out on the trail with my wife, Jen, and our cattle dog, Archer.  I'd love to talk with you about your projects, your dev team, or where the good local spots are.";

this.getBio = function() {
    return this.bio;
};


// Skillset text
this.skillset = "I studied the fundementals of meanstack web development through an immersive program at DevMountain, in Provo, Utah. I've been pushed farther than I thought I could go in such a short time, but I've learned how to succeed with the tools I now have. I believe I have a strong foundation that satisfies the need for many different types of projects, and I am excited to learn new ways to make the web better.";

this.getSkillset = function() {
    return this.skillset;
};


// Project text
this.project = "My current body of work focuses on simple design and appropriate functionality for the task.  The more I learn, the more I try to incorporate new techniques into my style.  Please check back often for new and different examples as I continue my career into web development.";

this.getProject = function() {
    return this.project;
};

});  // closing service
