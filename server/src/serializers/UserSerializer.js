class UserSerializer {
    static serializeUser(user) {
        const cleanedUserObject = {}
        const allowedAttributes = ["id", "email", "createdAt"]
        for (const attribute of allowedAttributes) {
            cleanedUserObject[attribute] = user[attribute]
        }
        return cleanedUserObject
    }
}

export default UserSerializer