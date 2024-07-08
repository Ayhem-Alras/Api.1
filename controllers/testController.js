
function getTest(req, res) {
    res.json({
        code: 200,
        answer: "Hello World",
    });
}

module.exports = {
    getTest
};
