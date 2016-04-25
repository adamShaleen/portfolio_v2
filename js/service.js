angular.module("hireMe").service("service", function() {

// BIO text
this.bio = "I hail from the cold, northern lands of Minnesota, where I learned that a persons work ethic is worth their weight in gold.  I've done quite a bit of everything over the years, but now I'm setting my sights on a career in web development.  Outside of the digital world you can find me out on the trail with my wife, Jen, and our cattle dog, Archer.  I'd love to talk with you about your projects, your dev team, or where the good locals spots are.";

this.getBio = function() {
    return this.bio;
};


// Skillset text
this.skillset = "I studied the fundementals of meanstack web development through an immersive program at DevMountain, in Provo, Utah.  I believe I have a strong foundation that satisfies the need for many different types of projects, and I am excited to learn new ways to make the web better.";

this.getSkillset = function() {
    return this.skillset;
};

});  // closing service
