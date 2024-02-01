import { User } from "../../index.js"

class UserSeeder {
    static async seed() {  
      const usersData = [
        {
          email: "test1@email.com",
          password: "123"
        },
        {
          email: "test2@email.com",
          password: "123"
        },
        {
          email: "test3@email.com",
          password: "123"
        }
      ]
  
      for (const user of usersData) {
        await User.query().insert(user)
      }
    }
  }

  export default UserSeeder