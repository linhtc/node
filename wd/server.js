var http = require('http');
var fs = require('fs');
var path = require('path');
var url  = require('url');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
//var basePath = '/var/www/html/node/wd/';
var basePath = '/home/gdsuser/wd-rma/';

http.createServer(function (request, response){
    var filePath = request.url;
    console.log('Request starting: '+filePath);
    if (filePath === '/'){ filePath = '/backend.html'; }
    filePath = basePath+'public'+filePath;
    var extention = path.extname(filePath);
    var contentType = 'text/html';
    switch(extention){ case '.js': contentType = 'text/javascript'; break; case '.css': contentType = 'text/css'; break; }
    fs.exists(filePath, function(exists){
        if(exists){
            fs.readFile(filePath, function(error, content){
                if(error){
                    response.writeHead(500);
                    response.end();
                } else{
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });
            console.log('Reading file: '+filePath);
        } else{
            console.log('\n\n\n');
            console.log(extention);
            console.log('--'+filePath);
            var extentionList = { '.png':1, '.jpg':1, '.ico':1 };
            if(typeof extentionList[extention] !== 'undefined'){ response.writeHead(404); response.end(); return false; }
            processServices(request, response);
        }
    });
}).listen(80);
console.log('Server running at http://127.0.0.1:80/');

function processServices(request, response){
    var requestUrl = request.url;
    var urlParts = url.parse(requestUrl);
    var pathname = urlParts.pathname;
    console.log(pathname);
    switch(pathname){
        case '/cookie':{
            response.writeHead(200, { 'Content-Type': 'text/html' });
            var requestDataTmp = "";
            request.on('data', function (chunk){ requestDataTmp += chunk; });
            request.on('end', function () {
                var requestData = JSON.parse(requestDataTmp);
                var commandTmp = requestData.command;
                switch(commandTmp){
                    case 'save-cookie':{
                        var na = requestData.na;
                        var cna = requestData.cna;
                        var document = {na:na, cna:cna, time:new Date()};
                        MongoClient.connect('mongodb://localhost:27017/wd', function(err, db) {
                            assert.equal(null, err);
                            db.collection('cookies').insertOne(document);
                            response.end("OK");
                            db.close();
                        }); break;
                    }
                    case 'get-cookie':{
                        MongoClient.connect('mongodb://localhost:27017/wd', function(err, db) {
                            assert.equal(null, err);
                            db.collection('cookies').find({}).sort({time:-1}).limit(1).toArray(function(err, documents){
                                assert.equal(null, err);
                                if(typeof documents[0] === 'object'){
                                    response.end(JSON.stringify(documents[0]));
                                } else{
                                    response.end("{}");
                                }
                                db.close();
                            });
                        }); break;
                    } 
                    case 'history-cookie':{
                        MongoClient.connect('mongodb://localhost:27017/wd', function(err, db) {
                            assert.equal(null, err);
                            db.collection('cookies').find({}).sort({time:-1}).toArray(function(err, documents){
                                assert.equal(null, err);
                                response.end(JSON.stringify(documents));
                                db.close();
                            });
                        }); break;
                    } default:{ response.writeHead(200); response.end(JSON.stringify({message:'error'})); }
                }
            }); break;
        }
        default:{
            fs.readFile(basePath+'public'+'/backend.html', function(error, content){
                if(error){
                    response.writeHead(500);
                    response.end();
                } else{
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                }
            });
            // response.writeHead(404); response.end(); 
        }
    }
}

var getMenuFull = function(db, callback){
    var cursor = db.collection('cs_menu').find( {}, {_id:0} );
    var documents = {};
    cursor.each(function(err, doc) { assert.equal(err, null); if (doc !== null){ documents[doc.menu_unique] = doc; } else { callback(documents); } });
};
var getGroupViaKiosk = function(db, kioskUnique, callback){ db.collection('cs_group').findOne({group_kiosk:kioskUnique}, {fields:{_id:0}}, function(err, document) { assert.equal(null, err); callback(document); }); };
var getGroupUniqueViaFriendlyKiosk = function(db, friendlyKiosk, callback){ db.collection('cs_kiosk').findOne({kiosk_friendly:friendlyKiosk}, {fields:{_id:0}}, function(err, document) { assert.equal(null, err); callback(document); });};
var generateMenuClass = function(menuList, menuDocuments, groupControl, callback){
    console.log(menuList);
    console.log('\n\n');
    console.log(groupControl);
    console.log('\n\n');
    console.log(menuDocuments);
    callback();
};


var getSlideViaKiosk = function(db, kioskFriendly, callback){ db.collection('cs_slide').findOne({slide_kiosk:kioskFriendly}, {fields:{_id:0}}, function(err, document) { assert.equal(null, err); callback(document); }); };

