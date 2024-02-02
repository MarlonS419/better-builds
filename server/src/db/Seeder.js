/* eslint-disable no-console */
import { connection } from "../boot.js"
import UserSeeder from "./seeders/UserSeeder.js"
import BuildSeeder from "./seeders/BuildSeeder.js"
import ReviewSeeder from "./seeders/ReviewSeeder.js"


class Seeder {
  static async seed() {
    // console.log("seeding user data")
    // await UserSeeder.seed()
    
    // console.log("seeding build data")
    // await BuildSeeder.seed()

    console.log("seeding review data")
    await ReviewSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder