exports.userResponse = (user) => {
    console.log("user",user)
    return {
        name:user.name,
        email:user.email,
        username:user.email,
        role:user.role
    }
}

