let favoriteActivites: string[]
favoriteActivites = ['test', 'sleep']


const person = {
    name: "ori",
    age: 24,
    hobbies: favoriteActivites
}

console.log(person);


for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    
}