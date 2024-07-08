
let users = [
    { id: 1, username: "Ayhem", age: 30, email: "Ayhem.alrass@hotmail.com", password: "password123" },
    { id: 2, username: "Luis", age: 25, email: "Ayhem.alrass@gamil.com", password: "password456" },
];

function updateUser(req, res) {
    const { id } = req.params;
    const { username, age, email, password } = req.body;


    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    const updatedUser = {
        ...users[userIndex],
        username: username || users[userIndex].username,
        age: age || users[userIndex].age,
        email: email || users[userIndex].email,
        password: password || users[userIndex].password,
    };

    users[userIndex] = updatedUser;

    res.json({
        code: 200,
        message: "User updated successfully",
        user: {
            id: updatedUser.id,
            username: updatedUser.username,
            age: updatedUser.age,
            email: updatedUser.email, 
        },
    });


module.exports = {
    updateUser
};
