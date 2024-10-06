function indexRouteGet(req, res) {
    res.render("index", { title: "Node Template" });
}

function APIRouteGet(req, res) {
    res.json({
        message: "Welcome to the API"
    })
}

export { indexRouteGet, APIRouteGet };