import { Review } from "../../models/index.js"
import { Build } from "../../models/index.js"
import { User } from "../../models/index.js"

class ReviewSeeder {
    static async seed() {  
        const build = await Build.query().findOne({title: "Seed Build 1"})
        const user = await User.query().findOne({email: "test1@email.com"})
        const reviewData = [
            {
                userId: user.id,
                buildId: build.id,
                rating: "5",
                comment:"woah thats wicked man"
            },
            {
                userId: user.id,
                buildId: build.id,
                rating: "3",
                comment:"my man got dat Personal Computerrrrr!"
            },
            {
                userId: user.id,
                buildId: build.id,
                rating: "4",
                comment:"I hate this"
            },
            {
                userId: user.id,
                buildId: build.id,
                rating: "2",
                comment:"That case is sick!"
            },
            {
                userId: user.id,
                buildId: build.id,
                rating: "1",
                comment:"The cable management is fire"
            },
            {
                userId: user.id,
                buildId: build.id,
                rating: "5",
                comment:"U suck"
            }
        ]

        for (const review of reviewData) {
            const currentReview = await Review.query().findOne(review)
            if(!currentReview) {
                await Review.query().insert(review)
            }
        }
    }
}

export default ReviewSeeder