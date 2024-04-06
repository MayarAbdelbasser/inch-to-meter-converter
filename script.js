function convert () {
    const inch = document.querySelector("input")
    const meter = inch.value*0.0254
    document.querySelector("p").textContent = `${inch.value} Inches = ${meter} Meters`
    inch.value = ""
}
document.querySelector("button").onclick = convert

var a = "My"
var b = "name"
console.log(a + " " + b + " is Mayar")

let c = "I"
let d = "was"
console.log(`${c} ${d} born in 1997`)

const e = "learn"
const f = "Eraasoft"
console.log(c.concat(" ",e," frontend with ",f))

const sport = ["Reading", "Coding", "traveling"];
console.log("I love ",sport.join())


console.log(parseInt('123'));
console.log(parseInt('   123 '));
console.log(parseInt('077'));
console.log(parseInt('1.9'));
console.log(parseInt('xyz'));
