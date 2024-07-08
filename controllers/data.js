
function postData(req, res) {
    const { name, age } = req.body;
    res.json({
        code: 200,
        message: `Received data: Name - ${name}, Age - ${age}`,
    });
}

module.exports = {
    postData
};
