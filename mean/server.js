var http = require('http');
var fs = require('fs');
var path = require('path');
var url  = require('url');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var basePath = '/var/www/html/node/mean/';

http.createServer(function (request, response){
    var filePath = request.url;
    console.log('Request starting: '+filePath);
    if (filePath === '/'){ filePath = '/frontend/main.html'; }
    if(filePath.indexOf('admin') >= 0){ filePath = '/backend/main.html'; }
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
        case '/quan-ly/':{
            response.writeHead(404);
            response.end("a");
            break;
        }
        case '/services':{
            var body = "";
            var kioskDocument = "{}";
            request.on('data', function (chunk){ body += chunk; });
            request.on('end', function () {
                var jsonObj = JSON.parse(body);
                MongoClient.connect('mongodb://localhost:27017/cloudservices', function(err, db) {
                    assert.equal(null, err);
                    var collection = db.collection('cs_kiosk');
                    collection.findOne({kiosk_name:jsonObj.kiosk_name}, {fields:{_id:0, kiosk_unique:1, kiosk_name:1}}, function(err, document) {
                        assert.equal(null, err);
                        kioskDocument = JSON.stringify(document);
                        db.close();
                        response.writeHead(200, { 'Content-Type': 'text/html' });
                        response.end(kioskDocument);
                    });
                });
            });
            break;
        }
        case '/menu':{
            response.writeHead(200, { 'Content-Type': 'text/html' });
            var requestDataTmp = "";
            request.on('data', function (chunk){ requestDataTmp += chunk; });
            request.on('end', function () {
                var requestData = JSON.parse(requestDataTmp);
                var commandTmp = requestData.command;
                switch(commandTmp){
                    case 'get-menu':{
                        MongoClient.connect('mongodb://localhost:27017/cloudservices', function(err, db) {
                            assert.equal(null, err);
                            var kioskFriendly = 'kiosk-test';
                            getGroupUniqueViaFriendlyKiosk(db, kioskFriendly, function(kioskDocument){
                                var kioskUnique = kioskDocument.kiosk_unique;
                                getGroupViaKiosk(db, kioskUnique, function(groupDocument){
                                    var groupControl = groupDocument.group_control;
                                    if(groupControl === 'undefined'){ response.end(JSON.stringify({error:1})); return false; }
                                    var menuList = new Array();
                                    for(var itemGroup in groupControl){ if(groupControl.hasOwnProperty(itemGroup)){ menuList.push(itemGroup); } }
                                    getMenuFull(db, function(menuDocuments){
                                        db.close();
                                        generateMenuClass(menuList, menuDocuments, groupControl, function(){
                                            response.end(JSON.stringify(menuDocuments));
                                        });
                                    });
                                });
                            });
                        }); break;
                    } default:{ response.writeHead(200); response.end(JSON.stringify({message:'error'})); }
                }
            }); break;
        }
        case '/slide':{
            response.writeHead(200, { 'Content-Type': 'text/html' });
            var requestDataTmp = "";
            request.on('data', function (chunk){ requestDataTmp += chunk; });
            request.on('end', function () {
                var requestData = JSON.parse(requestDataTmp);
                var commandTmp = requestData.command;
                var kioskFriendly = requestData.kiosk_friendly;
                console.log(kioskFriendly);
                switch(commandTmp){
                    case 'get-slide':{
                        MongoClient.connect('mongodb://localhost:27017/cloudservices', function(err, db) {
                            assert.equal(null, err);
                            getSlideViaKiosk(db, kioskFriendly, function(document){
                                response.writeHead(200, { 'Content-Type': 'application/json' });
                                response.end(JSON.stringify(document));
                            });
                        }); break;
                    } default:{ response.writeHead(200); response.end(JSON.stringify({message:'error'})); }
                }
            }); break;
        }
        case '/kiosk':{
            response.writeHead(200, { 'Content-Type': 'text/html' });
            var requestDataTmp = "";
            request.on('data', function (chunk){ requestDataTmp += chunk; });
            request.on('end', function () {
                var requestData = JSON.parse(requestDataTmp);
                var commandTmp = requestData.command;
                var kioskFriendly = requestData.kiosk_friendly;
                console.log(kioskFriendly);
                switch(commandTmp){
                    case 'get-information':{
                        MongoClient.connect('mongodb://localhost:27017/cloudservices', function(err, db) {
                            assert.equal(null, err);
                            getKioskInformation(db, kioskFriendly, function(document){
                                response.writeHead(200, { 'Content-Type': 'application/json' });
                                response.end(JSON.stringify(document));
                            });
                        }); break;
                    } default:{ response.writeHead(200); response.end(JSON.stringify({message:'error'})); }
                }
            }); break;
        } 
        case '/product':{
            response.writeHead(200, { 'Content-Type': 'text/html' });
            var requestDataTmp = "";
            request.on('data', function (chunk){ requestDataTmp += chunk; });
            request.on('end', function () {
                var requestData = JSON.parse(requestDataTmp);
                var commandTmp = requestData.command;
                var kioskFriendly = requestData.kiosk_friendly;
                console.log(kioskFriendly);
                switch(commandTmp){
                    case 'get-list':{
                        MongoClient.connect('mongodb://localhost:27017/cloudservices', function(err, db) {
                            assert.equal(null, err);
                            getProductList(db, kioskFriendly, function(documents){
                                response.writeHead(200, { 'Content-Type': 'application/json' });
                                response.end(JSON.stringify(documents));
                            });
                        }); break;
                    }
                    case 'get-detail':{
                        var productFriendly = requestData.product_friendly;
                        MongoClient.connect('mongodb://localhost:27017/cloudservices', function(err, db) {
                            assert.equal(null, err);
                            getProductDetail(db, kioskFriendly, productFriendly, function(documents){
                                response.writeHead(200, { 'Content-Type': 'application/json' });
                                response.end(JSON.stringify(documents));
                            });
                        }); break;
                    }
                    case 'get-related':{
                        var productFriendly = requestData.product_friendly;
                        MongoClient.connect('mongodb://localhost:27017/cloudservices', function(err, db) {
                            assert.equal(null, err);
                            getProductRelated(db, kioskFriendly, productFriendly, function(documents){
                                response.writeHead(200, { 'Content-Type': 'application/json' });
                                response.end(JSON.stringify(documents));
                            });
                        }); break;
                    }
                    default:{ response.writeHead(200); response.end(JSON.stringify({message:'error'})); }
                }
            }); break;
        }
        case '/manufacturer':{
            response.writeHead(200, { 'Content-Type': 'text/html' });
            var requestDataTmp = "";
            request.on('data', function (chunk){ requestDataTmp += chunk; });
            request.on('end', function () {
                var requestData = JSON.parse(requestDataTmp);
                var commandTmp = requestData.command;
                var kioskFriendly = requestData.kiosk_friendly;
                console.log(kioskFriendly);
                switch(commandTmp){
                    case 'get-list':{
                        MongoClient.connect('mongodb://localhost:27017/cloudservices', function(err, db) {
                            assert.equal(null, err);
                            getManufacturerList(db, kioskFriendly, function(documents){
                                response.writeHead(200, { 'Content-Type': 'application/json' });
                                response.end(JSON.stringify(documents));
                            });
                        }); break;
                    }
                    default:{ response.writeHead(200); response.end(JSON.stringify({message:'error'})); }
                }
            }); break;
        }
        case '/login':{
            response.writeHead(200, { 'Content-Type': 'text/html' });
            var requestDataTmp = "";
            request.on('data', function (chunk){ requestDataTmp += chunk; });
            request.on('end', function () {
                console.log(requestDataTmp);
                var user = {id:123456789, _id:"56ab29d610a75531168eee91", user_role:"admin"};
                response.end(JSON.stringify(user));
            }); break;
        }
        default:{
            fs.readFile(basePath+'public'+'/frontend/main.html', function(error, content){
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

var getProductDetail = function(db, kioskFriendly, productFriendly, callback){ db.collection('cs_product').findOne({product_kiosk:kioskFriendly, product_friendly:productFriendly}, {}, function(err, document) { assert.equal(null, err); callback(document); }); };
var getSlideViaKiosk = function(db, kioskFriendly, callback){ db.collection('cs_slide').findOne({slide_kiosk:kioskFriendly}, {fields:{_id:0}}, function(err, document) { assert.equal(null, err); callback(document); }); };
var getKioskInformation = function(db, kioskFriendly, callback){ db.collection('cs_kiosk').findOne({kiosk_friendly:kioskFriendly}, {fields:{_id:0}}, function(err, document) { assert.equal(null, err); callback(document); }); };
var getProductList = function(db, kioskFriendly, callback){ 
    var cursor = db.collection('cs_product').find( {product_kiosk:kioskFriendly}, {} );
    var documents = new Array();
    cursor.each(function(err, document) { assert.equal(err, null); if (document !== null){ documents.push(document); } else { callback(documents); } }); 
};
var getProductRelated = function(db, kioskFriendly, productFriendly, callback){ 
    var cursor = db.collection('cs_product').find( {product_kiosk:kioskFriendly}, {} ).sort({_id:1}).limit(4);
    var documents = new Array();
    cursor.each(function(err, document) { assert.equal(err, null); if (document !== null){ documents.push(document); } else { callback(documents); } }); 
};
var getManufacturerList = function(db, kioskFriendly, callback){ 
    var cursor = db.collection('cs_manufacturer').find( {manufacturer_kiosk:kioskFriendly}, {} );
    var documents = new Array();
    cursor.each(function(err, document) { assert.equal(err, null); if (document !== null){ documents.push(document); } else { callback(documents); } }); 
};

