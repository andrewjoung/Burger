var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(error, result) {
            if(error) throw error;
            cb(result);
        });
    },
    insertOne: function(table, column, values, cb) {
        var queryString = "INSERT INTO " + table + "(" + column[0] + ") " + "VALUES (?)";
        console.log(queryString);

        connection.query(queryString, values, function(error, result) {
            if(error) throw error;
            cb(result);
        });
    },
    updateOne: function(table, condition, cb) {
        var queryString = "UPDATE " + table + " SET devoured = true WHERE " + condition;
        connection.query(queryString, function(error, result){
            if(error) throw error;
            cb(result);
        });
    }
};

module.exports = orm;