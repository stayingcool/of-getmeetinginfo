"use strict"

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'mysql.default.svc.cluster.local',
    user: 'root',
    password: 'password',
    database: 'attendancedb'
});

module.exports = (context, callback) => {
    connection.connect();
    const input = JSON.parse(context);

    var sql = 'SELECT * from sessions WHERE id = ?';
    connection.query(sql, [input.id], function (error, results, fields) {
        if (error) throw error;
        console.log(JSON.stringify(results));
    });
    connection.end();

    callback(undefined, '');
}

