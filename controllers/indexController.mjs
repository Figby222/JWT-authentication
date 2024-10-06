import jwt from "jsonwebtoken";

function indexRouteGet(req, res) {
    res.render("index", { title: "Node Template" });
}

function APIRouteGet(req, res) {
    res.json({
        message: "Welcome to the API"
    })
}

function createPostPost(req, res) {
    res.json({
        message: "Post Created",
    })
}

function loginPost(req, res) {
    const user = {
        id: 1,
        username: "Ryan",
        email: "Ryan@gmail.com"
    }

    jwt.sign({ user: user }, "secretKey", (err, token) => {
        res.json({
            token: token
        })
    });
}

export { indexRouteGet, APIRouteGet, createPostPost, loginPost };