class Student {
    constructor(firstname, lastname, age ) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    } 
}  
class Person {
    constructor(firstname, lastname, age ) {
        this.firstname = ''
        this.lastname = ''
        this.age = 0
    } 
}  

const person1 = new Person()
        person1.firstname = 'Madis'
        person1.lastname = 'Taja'
        age = '24'

const person2 = new Person()
        person2.firstname = 'Taavi'
        person2.lastname = 'Tiisler'
        age = '17'

const person3 = new Person()
        person3.firstname = 'Bill'
        person3.lastname = 'Gates'
        age = '69'

const student1 = new Student('Martin', 'Saar', '21')
const student2 = new Student('Pets', 'Park', '22')
const student3 = new Student('Sandra', 'Mets', '19')
console.log(student1)
console.log(student2)
console.log(person2)
console.log(person1)