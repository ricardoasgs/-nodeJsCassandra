import app from "./config/appConfig";
import routes from "./router";

app.use("/api", routes);

// user.initKeyspace();

// initTable();

// insert('2', 'Marcelo', 'Zanin', function (err, results) {
//     // All finished, quit
//     process.exit();
// });

// selectAll();
