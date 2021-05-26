
enum Role {ADMIN,READ_ONLY,AUTHOR}

const person = {
    name: "ori",
    age: 24,
    hobbies: ['eat', 'sleep'],
    role:Role.ADMIN
}


for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    
}

for(const key in Role){
    console.log(key);
    console.log(Role[key]);
}