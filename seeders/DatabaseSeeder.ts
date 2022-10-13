import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { AddressFactory } from './../factories/address.factory';
import { OrderFactory } from './../factories/order.factory';
import { ClientFactory } from '../factories/client.factory';
import { ClientConfigFactory } from '../factories/client_config.factory';
import { UserFactory } from "../factories/user.factory"
import { ProductFactory } from "./../factories/product.factory"

export class DatabaseSeeder extends Seeder {
  public async run(em: EntityManager): Promise<void> {
    const numberOfClient = 5
    const clients = await new ClientFactory(em)
      .each((client) => {
        client.configs.set(new ClientConfigFactory(em).make(3));
      })
      .create(numberOfClient);
    
    const numberOfUsersPerClient = 5
    const numberOfProductsPerClient = 30
    const numberOfAddressesPerClient = 10
    const numberOfOrdersPerClient = 50

    for (let client of clients) {
      const users = await new UserFactory(em).each((user) => {
        user.client = client
      }).create(numberOfUsersPerClient)

      const products = await new ProductFactory(em).each((product) => {
        product.client = client
      }).create(numberOfProductsPerClient)

      const addresses = await new AddressFactory(em).each((address) => {
        const randomUserIndex = Math.floor(Math.random() * users.length)
        const randomUser = users[randomUserIndex]
        address.client = client
        address.user = randomUser
      }).create(numberOfAddressesPerClient)

      const orders = await new OrderFactory(em).each((order) => {
        order.client = client
        
        const randomProductIndex = Math.floor(Math.random() * products.length)
        const randomProduct = products[randomProductIndex]
        order.product = randomProduct
          
        const randomUserIndex = Math.floor(Math.random() * users.length)
        const randomUser = users[randomUserIndex]
        order.user = randomUser
          
        const randomAddressIndex = Math.floor(Math.random() * addresses.length)
        const randomAddress = addresses[randomAddressIndex]
        order.address = randomAddress
      }).create(numberOfOrdersPerClient)

      // console.log(JSON.stringify(orders))
    }
  }
}
