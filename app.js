const Person = function (name, firstName,age,sex,hobbies) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.sex = sex;
    this.hobbies = hobbies;

    this.getPerson = function () {
        return "Je m'appelle " + this.name + " " + this.firstName + " , " + "j'ai " + this.age + " ans " + "et de sexe "
            + this.sex + " , " + " mes hobbies sont: " + this.hobbies + " . ";
    }
}

let array = [];

let angelique = new Person("Dehainaut", "Angélique", 33, "féminin", ['l/écriture', 'le chant', 'la musique']);
let louane = new Person('Laurent', 'Louane', 9,'féminin', ['la boxe', 'les chevaux', 'la musique']);
let luka = new Person("Laurent", "Luka", 10, "masculin", ["la boxe", "la canne de combat", "les jeux vidéos"]);
let mickael = new Person("Laurent", "Mickael", 32, "masculin", ["les pompiers", "le sport"]);
let timeo = new Person("Laurent", "Timeo", 5, "masculin", ["la boxe", "la musique", "l'escalade"]);

array.push(angelique, louane, luka, mickael, timeo);

for (let i = 0; i < array.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = array[i].getPerson();
    document.body.appendChild(div);
}
