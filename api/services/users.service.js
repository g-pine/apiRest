const { faker } = require('@faker-js/faker')

class productUsers {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for(let i = 1; i < limit; i++) {
      this.users.push({
        id:faker.datatype.uuid(),
        name: faker.name.fullName(),
        job: faker.name.jobTitle(),
        number: faker.phone.number(),
      })
    }
  }

  create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newProduct);
    return newProduct;
  }

  find(){
    return this.users;
  }
  findOne(id){
    return this.users.find(item => item.id === id)
  }

  update(id, changes){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('product not found');
    }
    const product = this.users[index]
    this.users[index] = {
      ...product,
      ...changes
    }
    return this.users[index];
  }

  delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('product not found');
    }
    this.users.splice(index, 1);
    return { id }
  }
}

module.exports = productUsers;
