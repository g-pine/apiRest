const { faker } = require('@faker-js/faker')

class ProductAirline {

  constructor() {
    this.airlines = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for(let i = 1; i < limit; i++) {
      this.airlines.push({
        id:faker.datatype.uuid(),
        airline: faker.airline.airline(),
        airport: faker.airline.airport(),
        number: faker.airline.flightNumber(),
      })
    }
  }
  create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.airlines.push(newProduct);
    return newProduct;
  }

  find(){
    return this.airlines;
  }
  findOne(id){
    return this.airlines.find(item => item.id === id)
  }

  update(id, changes){
    const index = this.airlines.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('product not found');
    }
    const product = this.airlines[index]
    this.airlines[index] = {
      ...product,
      ...changes
    }
    return this.airlines[index];
  }

  delete(id){
    const index = this.airlines.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('product not found');
    }
    this.airlines.splice(index, 1);
    return { id }
  }
}

module.exports = ProductAirline;
