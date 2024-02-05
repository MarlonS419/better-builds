class ReviewSerializer {
    static getReviewDetails(reviews) {
        const allowedAttributes = ["rating", "comment", "id", "createdAt", "updatedAt"]

        const serializedReviews = reviews.map(review => {
            const serializedReview = {}
            for (const attribute of allowedAttributes) {
                serializedReview[attribute] = review[attribute]
            }
            return serializedReview 
        })
        return serializedReviews
    }
}
export default ReviewSerializer