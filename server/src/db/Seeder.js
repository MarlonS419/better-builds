/* eslint-disable no-console */
import { connection } from "../boot.js"
import { Build, User } from "../models/index.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    const buildsData = [
      {
        userId: "1",
        processor: "intel i5",
        graphics_card: "nvidia 3070",
        ram: "16",
        motherboard: "amd something",
        case: "small case",
        cooling_system: "a bunch of fans",
        storage_type: "ssd",
        cooling_system_type: "air",
        storage_amount: 1000
      },
      {
        userId: "2",
        processor: "intel i6",
        graphics_card: "nvidia 3080",
        ram: "8",
        motherboard: "amd something",
        case: "medium case",
        cooling_system: "some fans",
        storage_type: "ssd",
        cooling_system_type: "air",
        storage_amount: 2000
      },
      {
        userId: "3",
        processor: "intel i8",
        graphics_card: "nvidia 3090",
        ram: "32",
        motherboard: "amd something pro max++",
        case: "big case",
        cooling_system: "some water and stuff",
        storage_type: "ssd/hdd",
        cooling_system_type: "water",
        storage_amount: 3000
      }
    ]

    // const usersData = [
    //   { email: "test4@gmail.com", cryptedPassword: "$2b$10$glToDzHqux4L8gdPbdG6vu0sRtjhyOTyAMGQ05eqbra6ng4Pwqc5." },
    //   { email: "test5@gmail.com", cryptedPassword: "$2b$10$IHJAH0f9iYWUYEuYKHbsq.pITvYJh2Mlb3JG21dZxXs3kM/Wluep6" },
    //   { email: "test6@gmail.com", cryptedPassword: "$2b$10$iiZd/ZExBIkyo8SOFRqBIenh4bqBjUFM5o2.VqYfXR08/fOHITNOe"}
    // ]

    // console.log("seeding user data")
    // for (const user of usersData) {
    //   await User.query().insert(user)
    // }
    console.log("seeding build data")
    for (const build of buildsData) {
      await Build.query().insert(build)
    }
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder