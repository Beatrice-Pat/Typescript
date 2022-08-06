function hello( firstName: string, name: string) {
    console.log ("Hello " + firstName + ' ' + name);
    return hello;
}
hello("bob" , "marley");

function concat(a: string , b: string) {
    return a + b;
}
console.log(concat("Donkey", "School"));