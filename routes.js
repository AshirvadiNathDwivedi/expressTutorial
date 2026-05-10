import express from "express";
const router = express.Router();

//creating route for home page
router.get("/", (req, res) => {
	res.send("Welcome to Home Page");
});

//creating parameterized route for user profile
router.get("/user/:userId-:userName", (req, res) => {
	res.send(req.params);
});
router.get("/user/:userId/:userName", (req, res) => {
	res.send(req.params);
});
//creating query parameter route for search
router.get("/search", (req, res) => {
	res.send(req.query);
});
// response related methods
router.get("/send", (req, res) => {
	res.send("This is a response using send method");
});
//sending response in JSON format
router.get("/sendjson", (req, res) => {
	res.send({ message: "This is a JSON response with send method" });
});
router.get("/json", (req, res) => {
	res.json({ message: "This is a JSON response JSON method" });
});
router.all("/secret", (req, res, next) => {
	console.log("Accessing the secret section ...");
	next(); // pass control to the next handler
});

// response redirecting to another route
router.get("/redirect", (req, res) => {
	res.redirect(301, "https://www.google.com");
});
router.get("/redirect-home", (req, res) => {
	res.redirect("..");
});
// rendering view using ejs template engine
router.get("/ejs", (req, res) => {
	res.render("test");
});

//send status
router.get("/error", (req, res) => {
	res.sendStatus(404);
});

//setting response header for all routes
router.post("/datasent", (req, res) => {
	res.send(req.body);
});
router.get("/gettingHost", (req, res) => {
	res.send(req.hostname);
});
router.get("/gettingIP", (req, res) => {
	res.send(req.ip);
});
router.get("/gettingIPS", (req, res) => {
	res.send(req.ips);
});
router.get("/gettingMethod", (req, res) => {
	res.send(req.method);
});
router.get("/gettingOriginalUrl", (req, res) => {
	res.send(req.originalUrl);
});
router.get("/gettingRoutes", (req, res) => {
	res.send(req.path);
});
router.get("/gettingProtocol", (req, res) => {
	res.send(req.protocol);
});
router.get("/gettingSecure", (req, res) => {
	res.send(req.secure);
});
router.get("/gettingHeaders", (req, res) => {
	res.send(req.headers);
});
router.get("/gettingConnection", (req, res) => {
	const connectionInfo = {
		remoteAddress: req.connection.remoteAddress,
		remotePort: req.connection.remotePort,
		localAddress: req.connection.localAddress,
		networkstatus: req.header("connection"),
	};
	if (connectionInfo.networkstatus === "keep-alive") {
		return res.send(connectionInfo);
	} else {
		return res.send("Connection is not keep-alive");
	}
});
//handling 404 error
router.use((req, res) => {
	res.status(404).send("Page not found");
});

export default router;
