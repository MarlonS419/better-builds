import { Build } from "../../models/index.js"
import { User } from "../../models/index.js"

class BuildSeeder {
    static async seed() {
      const user = await User.query().findOne({email: "test1@email.com"})
      const buildsData = [
        {
          title: "Seed Build 1",
          userId: user.id,
          processor: "intel i5",
          graphicsCard: "nvidia 3070",
          ram: "16",
          motherboard: "amd something",
          case: "small case",
          coolingSystem: "a bunch of fans",
          storageType: "ssd",
          coolingSystemType: "air",
          storageAmount: 1000
        },
        {
          title: "Seed Build 2",
          userId: user.id,
          processor: "intel i6",
          graphicsCard: "nvidia 3080",
          ram: "8",
          motherboard: "amd something",
          case: "medium case",
          coolingSystem: "some fans",
          storageType: "ssd",
          coolingSystemType: "air",
          storageAmount: 2000
        },
        {
          title: "Seed Build 3",
          userId: user.id,
          processor: "intel i8",
          graphicsCard: "nvidia 3090",
          ram: "32",
          motherboard: "amd something pro max++",
          case: "big case",
          coolingSystem: "some water and stuff",
          storageType: "ssd/hdd",
          coolingSystemType: "water",
          storageAmount: 3000
        }
      ]

      for (const build of buildsData) {
        const currentBuild = await Build.query().findOne(build)
        if(!currentBuild) {
            await Build.query().insert(build)
        }
    }
  }
}

export default BuildSeeder