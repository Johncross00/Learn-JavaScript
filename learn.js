//Déclaration de variable
let variable = valeur

//Déclaration de constante
const constante = valeur

//Voir le contenu


//Type
Boolean,String,Number

//object
let variablee = {
    attribut: "valeur",
    attribut: "valeur",
    attribut: "valeur",
}

//add objet
variablee.attribut = "valeur"
console.log(variablee.attribut) //Pour voir la valeur

//Tableaux
const constantee = ["Attribut1", "Attribut2", "Attribut3", "Attribut", "Attribut"]

const attribuut = "valeur1"
const attribuuut = "valeur2"
const tableau = [attribuut, attribuuut]
let valeur2 = constantee[1]

// Copie par valeur
let variableSimple1 = 25
let variableSimple2 = variableSimple1

//copie par référence
let variableComplexe1 = ['pomme', 'cerise']
let variableComplexe2 = variableComplexe1

//copie du tableau en entier
let variableComplexe3 = [...variableComplexe1];

let var1 = 5
let var2 = var1
console.log("var1", var1)
console.log("var2", var2)

var2 = 30
console.log("var1", var1)
console.log("var2", var2)

let var1 = ["pomme", "cerise"]
let var2 = var1
console.log("var1", var1)
console.log("var2", var2)

let var3 = [...var1]
console.log("var1", var1)
console.log("var2", var2)
console.log("var3", var3)

var2.push("poire")
console.log("var1", var1)
console.log("var2", var2)
console.log("var3", var3)