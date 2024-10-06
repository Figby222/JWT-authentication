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

export { indexRouteGet, APIRouteGet, createPostPost };