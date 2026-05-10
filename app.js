import express from "express";
import routes from "./routes.js";
const app = express();
app.use("/", routes);

//setting middleware for all routes
app.set("view engine", "ejs");
app.use(express.static("public")); // for serving static files from public folder
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

//creating server port to listen request
app.listen(process.env.PORT || 5000, () => {
	console.log("Server is running on port " + (process.env.PORT || 5000));
});
