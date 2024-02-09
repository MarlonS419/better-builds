import { Review, Build, User } from "../../models/index.js"

class ReviewSeeder {
    static async seed() {  
        const build = await Build.query().findOne({ title: "Seed Build 1" })
        const user = await User.query().findOne({ email: "test1@email.com" })
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
                rating: "5",
                comment:"my man has a great build!"
            },
            {
                userId: user.id,
                buildId: build.id,
                rating: "1",
                comment:"I dislike this"
            },
            {
                userId: user.id,
                buildId: build.id,
                rating: "3",
                comment:"That case is sick!"
            },
            {
                userId: user.id,
                buildId: build.id,
                rating: "3",
                comment:"The cable management is fire"
            },
            {
                userId: user.id,
                buildId: build.id,
                rating: "1",
                comment:"this build is inadequate"
            }
        ]

        for (const review of reviewData) {
            const currentReview = await Review.query().findOne(review)
            if (!currentReview) {
                await Review.query().insert(review)
            }
        }
    }
}

export default ReviewSeeder