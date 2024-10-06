import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];

        req.token = bearerToken;
        
        next();
        return;
    } else {
        res.sendStatus(403);
    }
}

function indexRouteGet(req, res) {
    res.render("index", { title: "Node Template" });
}

function APIRouteGet(req, res) {
    res.json({
        message: "Welcome to the API"
    })
}

const createPostPost = [
    verifyToken,
    (req, res) => {
        jwt.verify(req.token, "secretKey", (err, authData) => {
            if (err) {
                res.sendStatus(403);
                return;
            }
            res.json({
                message: "Post Created",
                authData
            })




        })
    }
]

function loginPost(req, res) {
    const user = {
        id: 1,
        username: "Ryan",
        email: "Ryan@gmail.com"
    }

    jwt.sign({ user: user }, "secretKey", { expiresIn: "30s" }, (err, token) => {
        res.json({
            token: token
        })
    });
}

export { indexRouteGet, APIRouteGet, createPostPost, loginPost };