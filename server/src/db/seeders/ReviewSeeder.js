import { Review } from "../../models/index.js"

class ReviewSeeder {
    static async seed() {  
        const reviewData = [
            {
                userId: "1",
                buildId: "3",
                rating: "5",
                comment:"woah thats wicked man"
            },
            {
                userId: "1",
                buildId: "2",
                rating: "3",
                comment:"my man got dat Personal Computerrrrr!"
            },
            {
                userId: "2",
                buildId: "1",
                rating: "4",
                comment:"I hate this"
            },
            {
                userId: "2",
                buildId: "3",
                rating: "2",
                comment:"That case is sick!"
            },
            {
                userId: "3",
                buildId: "1",
                rating: "1",
                comment:"The cable management is fire"
            },
            {
                userId: "3",
                buildId: "2",
                rating: "5",
                comment:"U suck"
            }
        ]

        for (const review of reviewData) {
            await Review.query().insert(review)
        }
    }
}

export default ReviewSeeder