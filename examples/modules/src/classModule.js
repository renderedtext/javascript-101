class Dog {
  constructor(breed, name) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    console.log('Woof, woof');
  }
  introduceDog() {
    console.log(`Woof ${this.name}, Woof ${this.breed}`);
  }
};

module.exports = Dog;
