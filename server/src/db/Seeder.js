/* eslint-disable no-console */
import { connection } from "../boot.js"
import { Build, User } from "../models/index.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    const buildsData = [
      {
        title: "Seed Build 1",
        userId: 1,
        processor: "intel i5",
        graphicsCard: "nvidia 3070",
        ram: 16,
        motherboard: "amd something",
        case: "small case",
        coolingSystem: "a bunch of fans",
        storageType: "ssd",
        coolingSystemType: "air",
        storageAmount: 1000
      },
      {
        title: "Seed Build 2",
        userId: 2,
        processor: "intel i6",
        graphicsCard: "nvidia 3080",
        ram: 8,
        motherboard: "amd something",
        case: "medium case",
        coolingSystem: "some fans",
        storageType: "ssd",
        coolingSystemType: "air",
        storageAmount: 2000
      },
      {
        title: "Seed Build 3",
        userId: 3,
        processor: "intel i8",
        graphicsCard: "nvidia 3090",
        ram: 32,
        motherboard: "amd something pro max++",
        case: "big case",
        coolingSystem: "some water and stuff",
        storageType: "ssd/hdd",
        coolingSystemType: "water",
        storageAmount: 3000
      }
    ]

    const usersData = [
      {
        email: "test1@email.com",
        cryptedPassword: "123"
      },
      {
        email: "test2@email.com",
        cryptedPassword: "123"
      },
      {
        email: "test3@email.com",
        cryptedPassword: "123"
      }
    ]

    console.log("seeding user data")
    for (const user of usersData) {
      await User.query().insert(user)
    }
    console.log("seeding build data")
    for (const build of buildsData) {
      await Build.query().insert(build)
    }
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder