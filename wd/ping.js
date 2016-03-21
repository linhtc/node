var phantom = require('phantom');
var http = require('http');
var https = require('https');
var url  = require('url');
var qs = require('querystring');
var fs =    require('fs');
var zlib = require('zlib');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var basePath = '/var/www/html/wd-rma/files/';
//var basePath = '/home/gdsuser/wd-rma/files/';
// var mysql = require("mysql");

createServer();

function createServer(){
    http.createServer(function (request, response){
        console.log('Request starting...');
        var requestUrl = request.url;
        var urlParts = url.parse(requestUrl);
        var pathname = urlParts.pathname;
        console.log(pathname);
        var query = urlParts.query;
        console.log(query);
        
        var headers = {};
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = true;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept";
        
        switch(pathname){
            case '/get-rma':{
                headers["Content-Type"] = "text/html";
                query = query.replace('j_id0:results:j_id1:serialNumbers=', '');
                response.writeHead(200, headers);
                processRequest(query, response);
                break;
            }
            case '/get-sn':{
                headers["Content-Type"] = "text/html";
                query = query.replace('j_id0:results:j_id1:RMANumbers=', '');
                response.writeHead(200, headers);
                processRequest(query, response);
                break;
            }
            case '/confirmed-oracle':{
                headers["Content-Type"] = "text/html";
                var query = query.replace('RMANumbers=', '');
                response.writeHead(200, headers);
                processRequest(query, response);
                break;
            }
            default:{
                response.writeHead(500);
                response.end("Error Command");
            }
        }
    }).listen(80);
    console.log('Server running at http://127.0.0.1:80/');
}
function processRequest(req, res){
    MongoClient.connect('mongodb://localhost:27017/dashboard', function(err, db) {
        assert.equal(null, err);
        var date = new Date();
        db.collection('dashboard_log').insertOne({request:req, datetime:date});
        db.close();
        res.end(date.toString());
    });
}
