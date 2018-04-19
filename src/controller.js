import client from "./config/dbConfig";

export async function initKeyspace(req, res) {
    try {
        client.execute("CREATE KEYSPACE demo WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3}", (err, result) => {
            if (!err) {
                return res.status(200).send({ message: "Ok." });
            } else {
                res.status(500).send({ message: "Error." });
            }
            fecharConexao(err, null);
        })
    } catch (err) {
        res.status(500).send({ message: "Error." });
    }
}

export async function initTable(req, res) {
    try {
        client.execute("CREATE TABLE demo.user (id int, firstname text, lastname text, PRIMARY KEY (firstname,id))", (err, result) => {
            if (!err) {
                return res.status(200).send({ message: "Ok." });
            } else {
                res.status(500).send({ message: "Error." });
            }
            fecharConexao(err, null);
        })
    } catch (err) {
        res.status(500).send({ message: "Error." });
    }
}

// exports.initKeyspace = function () {
//     client.execute("CREATE KEYSPACE demo WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3}", function (err, result) {
//         if (!err) {
//             console.log(result);
//         }
//     })
// }

// exports.initTable = function () {
//     client.execute("CREATE TABLE demo.user (id int, firstname text, lastname text, PRIMARY KEY (firstname,id))", function (err, result) {
//         if (!err) {
//             console.log(result);
//         }
//     })
// }

export async function insert(req, res) {
    const user = req.body;
    try {
        client.execute(`INSERT INTO demo.user(id, firstname, lastname) VALUES (${user.id}, '${user.firstname}', '${user.lastname}')`, (err, result) => {
            if (!err) {
                return res.status(200).send({ message: "Ok." });
            } else {
                res.status(500).send({ message: "Error." });
            }
            fecharConexao(err, null);
        })
    } catch (err) {
        res.status(500).send({ message: "Error." });
    }
}

//exports.insert = function (id, firstname, lastname) {
//    client.execute("INSERT INTO demo.user(id, firstname, lastname) VALUES (" + id + ", '" + firstname + "', '" + lastname + "');", function (err, result) {
//        if (!err) {
//            // console.log(result);
//        } else {
//            console.log(err);
//        }
//
//        // Run next function in series
//        fecharConexao(err, null);
//    });
//}

export async function selectAll(req, res) {
    try {
        client.execute(`SELECT * FROM demo.user`, (err, result) => {
            if (!err) {
                return res.status(200).send({ message: "Ok." });
            } else {
                res.status(500).send({ message: "Error." });
            }
            fecharConexao(err, null);
        })
    } catch (err) {
        res.status(500).send({ message: "Error." });
    }
}

//exports.selectAll = function () {
//    client.execute("SELECT * FROM demo.user", function (err, result) {
//        if (!err) {
//            if (result.rows.length > 0) {
//                for (let row of result.rows) {
//                    console.log("id = %d, name = %s, lastname = %s", row.id, row.firstname, row.lastname);
//                }
//            } else {
//                console.log("No results");
//            }
//        } else {
//            console.log(err);
//        }
//
//        // Run next function in series
//        fecharConexao(err, null);
//    });
//}

export async function select(req, res) {
    const user = req.body;
    try {
        client.execute(`SELECT * FROM demo.user WHERE firstname='${user.firstname}'`, (err, result) => {
            if (!err) {
                return res.status(200).send({ message: "Ok." });
            } else {
                res.status(500).send({ message: "Error." });
            }
            fecharConexao(err, null);
        })
    } catch (err) {
        res.status(500).send({ message: "Error." });
    }
}

//// Read users and print to console
//exports.select = function (firstname) {
//    client.execute("SELECT * FROM demo.user WHERE firstname='" + firstname + "'", function (err, result) {
//        if (!err) {
//            if (result.rows.length > 0) {
//                var user = result.rows[0];
//                console.log("id = %d, name = %s, lastname = %s", user.id, user.firstname, user.lastname);
//            } else {
//                console.log("No results");
//            }
//        } else {
//            console.log(err);
//        }
//
//        // Run next function in series
//        fecharConexao(err, null);
//    });
//}

export async function update(req, res) {
    const user = req.body;
    try {
        client.execute(`UPDATE demo.user SET lastname = '${user.lastname}' WHERE firstname = '${user.firstname}'`, (err, result) => {
            if (!err) {
                return res.status(200).send({ message: "Ok." });
            } else {
                res.status(500).send({ message: "Error." });
            }
            fecharConexao(err, null);
        })
    } catch (err) {
        res.status(500).send({ message: "Error." });
    }
}

//exports.update = function () {
//    client.execute("UPDATE demo.user SET lastname = 'teste' WHERE firstname = 'Joe'", function (err, result) {
//        // Run next function in series
//        fecharConexao(err, null);
//    });
//}

export async function deletar(req, res) {
    const user = req.body;
    try {
        client.execute(`DELETE FROM demo.user WHERE firstname = '${user.firstname}'`, (err, result) => {
            if (!err) {
                return res.status(200).send({ message: "Ok." });
            } else {
                res.status(500).send({ message: "Error." });
            }
            fecharConexao(err, null);
        })
    } catch (err) {
        res.status(500).send({ message: "Error." });
    }
}

//exports.deletar = function () {
//    client.execute("DELETE FROM demo.user WHERE firstname = 'Joe'", function (err, result) {
//        if (!err) {
//            console.log("Deleted");
//        }
//
//        // Run next function in series
//        fecharConexao(err, null);
//    });
//}

async function fecharConexao(err, results) {
    // All finished, quit
    process.exit();
}