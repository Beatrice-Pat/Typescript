function hello(firstName, name) {
    console.log("Hello " + firstName + ' ' + name);
    return hello;
}
hello("bob", "marley");
function concat(a, b) {
    return a + b;
}
console.log(concat("Donkey", "School"));
