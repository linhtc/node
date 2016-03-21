var http = require('http');
var https = require('https');
var url  = require('url');
var qs = require('querystring');
var fs =    require('fs');
var zlib = require('zlib');
var mysql = require("mysql");

processClientRequest();
// j_id0:results:j_id1:RMANumbers
// j_id0:results:j_id1:serialNumbers

function matchAll(str, regex) {
    var res = [];
    var m;
    if (regex.global) {
        while (m = regex.exec(str)) {
            res.push(m[1]);
        }
    } else {
        if (m = regex.exec(str)) {
            res.push(m[1]);
        }
    }
    return res;
}
function randomInt(low, high){
    return Math.floor(Math.random() * (high - low) + low);
}
function processClientRequest(){
    var options = {
        hostname: 'login.salesforce.com',
        port: 443,
        path: '/',
        method: 'GET'
    };

    var header = null;

    var req = https.request(options, function(res) {
        console.log("statusCode: ", res.statusCode);
        console.log("headers: ", res.headers);
        console.log('\n\n');
        header = res.headers['set-cookie'];

        //res.on('data', function(d) { process.stdout.write(d); });

        var data = qs.stringify({
            username: 'hoangnmt@greystonevn.com',
            pw: 'pa55word1234',
            Login:'Log In',
            un:'hoangnmt@greystonevn.com'
        });
        var headers2 = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(data)
        };
        var options2 = {
            hostname: 'login.salesforce.com',
            port: 443,
            path: '/',
            method: 'POST',
            headers: headers2
        };
        console.log(options2);
        console.log('\n\n');
        var req2 = https.request(options2, function(res2) {        
            console.log("statusCode: ", res2.statusCode);
            console.log("headers: ", res2.headers);
            console.log('\n\n');
            var na12Urls = res2.headers['location'].toString();
            var na12Url = na12Urls.substr(0, na12Urls.indexOf('?'));
            var na12Uri = na12Urls.replace(na12Url, '');
            var loginHeaders = res2.headers['set-cookie'];
            //res2.on('data', function(d2) { });
            var headers3 = {
                'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Encoding':'gzip, deflate',
                'Accept-Language':'en-US,en;q=0.5',
                'Host':'na12.salesforce.com',
                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                'Connection':'keep-alive',
                'Referer':'https://login.salesforce.com/'
            };
            var cookies3 = '';
            for(var i=0; i< loginHeaders.length; i++){
                var itemNa12Header = loginHeaders[i].split(';');
                if(typeof itemNa12Header[0] !== undefined){
                    itemHeader = itemNa12Header[0];
                    itemHeaderChild = itemHeader.split('=');
                    itemHeaderKey = itemHeaderChild[0];
                    itemHeaderValue = itemHeaderChild[1];
                    if(itemHeaderKey !== 'oinfo'){
                        //headers3[itemHeaderKey] = itemHeaderValue; 
                        cookies3 += (cookies3 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                    } else{
                        //headers3[itemHeaderKey] = itemHeaderValue+='"'; 
                        cookies3 += (cookies3 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                    }
                }
            }
            var options3 = {
                hostname: 'na12.salesforce.com',
                port: 443,
                path: '/secur/frontdoor.jsp'+na12Uri,
                method: 'GET',
                cert: fs.readFileSync('VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                requestCert: true,
                headers: headers3
            };
            console.log(options3);
            console.log('\n\n');
            var req3 = https.request(options3, function(res3) {
                console.log("statusCode: ", res3.statusCode);
                console.log("headers: ", res3.headers);
                console.log('\n\n');
                //res3.on('data', function(d3) { });

                var cna12Urls = res3.headers['location'].toString();
                var cna12Url = cna12Urls.substr(0, cna12Urls.indexOf('?'));
                var cna12Uri = cna12Urls.replace(cna12Url, '');
                var na12Headers = res3.headers['set-cookie'];
                var headers4 = {};
                var cookies4 = '';
                for(var i=0; i< na12Headers.length; i++){
                    var itemNa12Header = na12Headers[i].split(';');
                    if(typeof itemNa12Header[0] !== undefined){
                        itemHeader = itemNa12Header[0];
                        itemHeaderChild = itemHeader.split('=');
                        itemHeaderKey = itemHeaderChild[0];
                        itemHeaderValue = itemHeaderChild[1];
                        if(itemHeaderKey !== 'oinfo'){
                            //headers4[itemHeaderKey] = itemHeaderValue; 
                            cookies4 += (cookies4 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                        } else{
                            //headers4[itemHeaderKey] = itemHeaderValue+='"'; 
                            cookies4 += (cookies4 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                        }
                    }
                }
                //headers4['Cookie'] = cookies4;
                var options4 = {
                    hostname: 'c.na12.content.force.com',
                    port: 443,
                    path: '/secur/contentDoor'+cna12Uri,
                    method: 'GET',
                    cert: fs.readFileSync('VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                    requestCert: true,
                    headers: headers4
                };
                console.log(options4);
                console.log('\n\n');
                var req4 = https.request(options4, function(res4) {
                    console.log("statusCode: ", res4.statusCode);
                    console.log("headers: ", res4.headers);
                    console.log('\n\n');
                    //res4.on('data', function(d4) { });
                    var headers5 = {
                        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                        'Accept-Encoding':'gzip, deflate',
                        'Accept-Language':'en-US,en;q=0.5',
                        //'Host':'na12.salesforce.com',
                        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                        //'Referer':'https://c.na12.content.force.com/',
                        'Connection':'keep-alive'
                    };
                    var cookies5 = '';
                    var cna12Headers = res4.headers['set-cookie'];
                    for(var i=0; i< cna12Headers.length; i++){
                        var itemCna12Header = cna12Headers[i].split(';');
                        if(typeof itemCna12Header[0] !== undefined){
                            itemHeader = itemCna12Header[0];
                            itemHeaderChild = itemHeader.split('=');
                            itemHeaderKey = itemHeaderChild[0];
                            itemHeaderValue = itemHeaderChild[1];
                            if(itemHeaderKey !== 'oinfo'){
                                //headers5[itemHeaderKey] = itemHeaderValue; 
                                cookies5 += (cookies5 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                            } else{
                                //headers5[itemHeaderKey] = itemHeaderValue+='"';
                                cookies5 += (cookies5 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                            }
                        }
                    }
                    //headers5['Cookie'] = cookies5;
                    headers5['Cookie'] = cookies3+';'+cookies4;
                    var options5 = {
                        hostname: 'c.na12.visual.force.com',
                        port: 443,
                        path: '/apex/ReportView?sfdc.tabName=01rU0000000DTmR',
                        method: 'GET',
                        cert: fs.readFileSync('VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                        requestCert: true,
                        headers: headers5
                    };
                    console.log(options5);
                    console.log('\n\n');

                    var req5 = https.request(options5, function(res5) {
                        console.log("statusCode: ", res5.statusCode);
                        console.log("headers: ", res5.headers);
                        console.log('\n\n');
                        //var output = fs.createWriteStream('res5.html');
                        //res5.pipe(zlib.createGunzip()).pipe(output);

                        var locationTmps = res5.headers['location'].toString();
                        var locationTmpUrl = locationTmps.substr(0, locationTmps.indexOf('?'));
                        var locationTmpUri = locationTmps.replace(locationTmpUrl, '');
                        //console.log(locationTmpUri);
                        // https://na12.salesforce.com/visualforce/session

                        var headers6 = {
                            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                            'Accept-Encoding':'gzip, deflate',
                            'Accept-Language':'en-US,en;q=0.5',
                            //'Host':'na12.salesforce.com',
                            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                            //'Referer':'https://c.na12.content.force.com/',
                            'Connection':'keep-alive'
                        };

                        headers6['Cookie'] = cookies3+';'+cookies4;
                        var options6 = {
                            hostname: 'na12.salesforce.com',
                            port: 443,
                            path: '/visualforce/session'+locationTmpUri,
                            method: 'GET',
                            cert: fs.readFileSync('VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                            requestCert: true,
                            headers: headers6
                        };
                        console.log(options6);
                        var req6 = https.request(options6, function(res6) {
                            console.log("statusCode: ", res6.statusCode);
                            console.log("headers: ", res6.headers);
                            console.log('\n\n');
                            //res6.on('data', function(d6) { process.stdout.write(d6); });

                            var headers7 = {
                                'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                'Accept-Encoding':'gzip, deflate',
                                'Accept-Language':'en-US,en;q=0.5',
                                //'Host':'na12.salesforce.com',
                                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                //'Referer':'https://c.na12.content.force.com/',
                                'Connection':'keep-alive'
                            };
                            var locationTmps = res6.headers['location'].toString();
                            var locationTmpUrl = locationTmps.substr(0, locationTmps.indexOf('?'));
                            var locationTmpUri = locationTmps.replace(locationTmpUrl, '');
                            headers7['Cookie'] = cookies3+';'+cookies4;
                            var options7 = {
                                hostname: 'c.na12.visual.force.com',
                                port: 443,
                                path: '/visualforce/recsession'+locationTmpUri,
                                method: 'GET',
                                cert: fs.readFileSync('VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                requestCert: true,
                                headers: headers7
                            };
                            // https://c.na12.visual.force.com/visualforce/recsession
                            console.log(options7);
                            var req7 = https.request(options7, function(res7){
                                console.log("statusCode: ", res7.statusCode);
                                console.log("headers: ", res7.headers);
                                console.log('\n\n');
                                //res7.on('data', function(d7) { });

                                var headers8 = {
                                    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                    'Accept-Encoding':'gzip, deflate',
                                    'Accept-Language':'en-US,en;q=0.5',
                                    //'Host':'na12.salesforce.com',
                                    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                    //'Referer':'https://c.na12.content.force.com/',
                                    'Connection':'keep-alive'
                                };
                                var locationTmps = res7.headers['location'].toString();
                                var locationTmpUrl = locationTmps.substr(0, locationTmps.indexOf('?'));
                                var locationTmpUri = locationTmps.replace(locationTmpUrl, '');
                                var cookies8 = '';
                                var cna12Headers = res7.headers['set-cookie'];
                                for(var i=0; i< cna12Headers.length; i++){
                                    var itemCna12Header = cna12Headers[i].split(';');
                                    if(typeof itemCna12Header[0] !== undefined){
                                        itemHeader = itemCna12Header[0];
                                        itemHeaderChild = itemHeader.split('=');
                                        itemHeaderKey = itemHeaderChild[0];
                                        itemHeaderValue = itemHeaderChild[1];
                                        if(itemHeaderKey !== 'oinfo'){
                                            //headers5[itemHeaderKey] = itemHeaderValue; 
                                            cookies8 += (cookies8 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                                        } else{
                                            //headers5[itemHeaderKey] = itemHeaderValue+='"';
                                            cookies8 += (cookies8 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                                        }
                                    }
                                }
                                headers8['Cookie'] = cookies8;
                                var options8 = {
                                    hostname: 'c.na12.visual.force.com',
                                    port: 443,
                                    path: '/apex/ReportView?sfdc.tabName=01rU0000000DTmR',
                                    method: 'GET',
                                    cert: fs.readFileSync('VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                    requestCert: true,
                                    headers: headers8
                                };
                                //console.log(options8);
                                // https://c.na12.visual.force.com/apex/ReportView?sfdc.tabName=01rU0000000DTmR
                                var req8 = https.request(options8, function(res8) {
                                    console.log("statusCode: ", res8.statusCode);
                                    console.log("headers: ", res8.headers);
                                    console.log('\n\n');
                                    var output = fs.createWriteStream('res8.html');
                                    res8.pipe(zlib.createGunzip()).pipe(output);
                                    //res8.on('data', function(d8) { });

                                    var headers9 = {
                                        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                        'Accept-Encoding':'gzip, deflate',
                                        'Accept-Language':'en-US,en;q=0.5',
                                        //'Host':'na12.salesforce.com',
                                        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                        //'Referer':'https://c.na12.content.force.com/',
                                        'Connection':'keep-alive'
                                    };
                                    var options9 = {
                                        hostname: 'c.na12.visual.force.com',
                                        port: 443,
                                        path: '/apex/RMAReport',
                                        method: 'GET',
                                        cert: fs.readFileSync('VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                        requestCert: true,
                                        headers: headers9
                                    };
                                    headers9['Cookie'] = cookies8;
                                    //requestRMA(options9, cookies8);

                                    var options9s = {
                                        hostname: 'c.na12.visual.force.com',
                                        port: 443,
                                        path: '/apex/SNSearchwithRMA',
                                        method: 'GET',
                                        cert: fs.readFileSync('VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                        requestCert: true,
                                        headers: headers9
                                    };
                                    headers9['Cookie'] = cookies8;
                                    //requestSNRMA(options9s, cookies8);
                                    
                                    http.createServer(function (request, response){
                                        console.log('Request starting...');
                                        var requestUrl = request.url;
                                        var urlParts = url.parse(requestUrl);
                                        var pathname = urlParts.pathname;
                                        console.log(pathname);
                                        var contentType = 'text/html';
                                        var query = urlParts.query;
                                        console.log(query);
                                        switch(pathname){
                                            case '/get-rma':{
                                                query = query.replace('j_id0:results:j_id1:RMANumbers=', '');
                                                var data10 = {
                                                    'j_id0:results:j_id1:serialNumbers':query
                                                };
                                                response.writeHead(200, { 'Content-Type': contentType });
                                                requestRMA(options9, cookies8, data10, response);
                                                break;
                                            }
                                            case '/get-sn':{
                                                query = query.replace('j_id0:results:j_id1:RMANumbers=', '');
                                                var data10 = {
                                                    'j_id0:results:j_id1:RMANumbers':query
                                                };
                                                response.writeHead(200, { 'Content-Type': contentType });
                                                requestSN(options9s, cookies8, data10, response);
                                                break;
                                            }
                                            default:{
                                                response.writeHead(404);
                                                response.end("Error Command");
                                            }
                                        }
                                        //response.end("OK");
                                    }).listen(8080);
                                    console.log('Server running at http://127.0.0.1:8080/');
                                });
                                req8.end();
                                req8.on('error', function(e) {
                                    console.error(e);
                                });
                            });
                            req7.end();
                            req7.on('error', function(e) {
                                console.error(e);
                            });
                        });
                        req6.end();
                        req6.on('error', function(e) {
                            console.error(e);
                        });
                    });
                    req5.end();
                    req5.on('error', function(e) {
                        console.error(e);
                    });
                });
                req4.end();
                req4.on('error', function(e) {
                    console.error(e);
                });
            });
            req3.end();
            req3.on('error', function(e) {
                console.error(e);
            });
        });
        req2.write(data);
        req2.end();
        req2.on('error', function(e) {
            console.error(e);
        });
    });
    req.end();

    req.on('error', function(e) {
        console.error(e);
    });
}
function requestSNRMA(options9s, cookies8, serialNumber){
    var req9 = https.request(options9s, function(res9s) {
        console.log("statusCode: ", res9s.statusCode);
        console.log("headers: ", res9s.headers);
        console.log('\n\n');
        var output9s = fs.createWriteStream('res9s.html');
        res9s.pipe(zlib.createGunzip()).pipe(output9s);
        output9s.on('finish', function() {
            //output9.end('this is the end\n');
            console.error('all writes are now complete.');
            console.log('----------------------------------Read file--------------------------');
            var contents = fs.readFileSync('res9s.html', 'utf8');
            //console.log(contents);

            var data10s = {
                'j_id0:results':'j_id0:results', 
                'j_id0:results:j_id1:searchResultsButtons:j_id29':'Search', 
                /*'j_id0:results:j_id1:serialNumbers':'WCAZAE695841,WCAZAE720953'*/
            };

            var paramsList = matchAll(contents, /(<input type="hidden".*?\/>)/g);
            //console.log(paramsList);
            for(var i9=0; i9<paramsList.length; i9++){
                if(typeof paramsList[i9] !== undefined){
                    var itemI9 = paramsList[i9];
                    if(itemI9.indexOf('com.salesforce.visualforce') >= 0){
                        var itemI9s = itemI9.toString().split(' ');
                        var itemI9Name = '';
                        var itemI9Value = '';
                        for(var i9s=0; i9s<itemI9s.length; i9s++){
                            if(typeof itemI9s[i9s] !== undefined){
                                var itemI9s2 = itemI9s[i9s].toString();
                                if(itemI9s2.indexOf('name=') >= 0){
                                    itemI9Name = itemI9s2.replace('name="', '');
                                    itemI9Name = itemI9Name.substr(0, itemI9Name.length-1);
                                }
                                if(itemI9s2.indexOf('value=') >= 0){
                                    itemI9Value = itemI9s2.replace('value="', '');
                                    itemI9Value = itemI9Value.substr(0, itemI9Value.length-1);
                                }
                            }
                        }
                        if(itemI9Name !== ''){
                            data10s[itemI9Name] = itemI9Value;
                        }
                    }
                }
            }
            var start = 0;
            var limit = 10;
            //console.log(data10s);
            getRMAViaSNList(data10s, cookies8, start, limit);
            //getSerialNumberListCallBack(data10, cookies8, start, limit);
            console.log('----------------------------------End file--------------------------');
        });
    });
    req9.end();
    req9.on('error', function(e) {
        console.error(e);
    });
}
function getRMAViaSNList(data10s, cookies8, start, limit){
    var con = mysql.createConnection({
        host: "172.16.4.27",
        user: "sonnguyen",
        password: "1233",
        database: "wdgce"
    });
    var rmaListTmp = '';
    con.query('SELECT rma_number FROM rma_list GROUP BY rma_number LIMIT '+start+','+limit,function(err,rows){
        if(err) throw err;
        //console.log('Data received from Db:\n');
        //console.log(rows);
        for(var itmp=0; itmp<rows.length; itmp++){
            var row = rows[itmp];
            rmaListTmp += (rmaListTmp === '' ? '' : ',')+row.rma_number;
        }
    });
    con.end(function(){
        data10s['j_id0:results:j_id1:RMANumbers'] = rmaListTmp;
        //console.log(data10);
        //console.log('\n\n');
        data10s = qs.stringify(data10s);
        var headers10s = {
            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Encoding':'gzip, deflate',
            'Accept-Language':'en-US,en;q=0.5',
            'Connection':'keep-alive',
            'Host':'c.na12.visual.force.com',
            'Referer':'https://c.na12.visual.force.com/apex/SNSearchwithRMA',
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(data10s)
        };
        headers10s['Cookie'] = cookies8;
        var options10s = {
            hostname: 'c.na12.visual.force.com',
            port: 443,
            path: '/apex/SNSearchwithRMA',
            method: 'POST',
            cert: fs.readFileSync('VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
            requestCert: true,
            headers: headers10s
        };
        console.log(options10s);
        
        var req10s = https.request(options10s, function(res10s) {
            console.log("statusCode: ", res10s.statusCode);
            console.log("headers: ", res10s.headers);
            console.log('\n\n');
            var output10s = fs.createWriteStream('res10s.html');
            res10s.pipe(zlib.createGunzip()).pipe(output10s);
            output10s.on('finish', function() {
                //console.log('\n\n\n\n\n\n\n\n');
                //console.log('1111111111111111111111111111111');
                putSNNumberToDb('res10s.html');
            });
        });
        //console.log(data10s);
        //console.log('\n\n');
        req10s.write(data10s);
        req10s.end();
        req10s.on('error', function(e) {
            console.error(e);
        });
        
    });
}
function putSNNumberToDb(file){
    //console.log('push push push');
    var contents = fs.readFileSync(file, 'utf8');
    var tableHtml = contents.substr(contents.indexOf('<table class="list"'));
    tableHtml = tableHtml.substr(0, tableHtml.indexOf('</table>')+8);
    
    //console.log(contents);
    //console.log('\n\n\n');
    //console.log(tableHtml);
    //return;
    var regex = /<tr[^>]*>(.*)<\/tr>/igm;
    regex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
    var tableHtmlList = matchAll(tableHtml, regex);
    //console.log('\n\n\n');
    //console.log(tableHtmlList);
    
    var snListViaRMA = new Array();
    
    for(var ihtml=0; ihtml < tableHtmlList.length; ihtml++){
        var trHtml = tableHtmlList[ihtml].toString();
        if(trHtml.indexOf('td') >= 0){
            regex = /<td[^>]*>([\s\S]*?)<\/td>/g;
            var tdHtmlList = matchAll(trHtml, regex);
            if(tdHtmlList.length === 14){
                var rmaNumber = tdHtmlList[0];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                rmaNumber = matchAll(rmaNumber, regex);
                rmaNumber = rmaNumber[0].trim();
                //console.log(rmaNumber);
                
                var caseNumber = tdHtmlList[1];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                caseNumber = matchAll(caseNumber, regex);
                caseNumber = caseNumber[0].trim();
                //console.log(caseNumber);
                
                var serialNumber = tdHtmlList[2];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                serialNumber = matchAll(serialNumber, regex);
                serialNumber = serialNumber[0].trim();
                //console.log(serialNumber);
                
                var modelNumber = tdHtmlList[3];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                modelNumber = matchAll(modelNumber, regex);
                modelNumber = modelNumber[0].trim();
                //console.log(modelNumber);
                
                var datetimeOpened = tdHtmlList[4];
                //console.log(datetimeOpened);
                
                var rmaType = tdHtmlList[5];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                rmaType = matchAll(rmaType, regex);
                rmaType = rmaType[0].trim();
                //console.log(rmaType);
                
                var statusTmp = tdHtmlList[6];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                statusTmp = matchAll(statusTmp, regex);
                statusTmp = statusTmp[0].trim();
                //console.log(statusTmp);
                
                var accountName = tdHtmlList[7];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                accountName = matchAll(accountName, regex);
                accountName = accountName[0].trim();
                //console.log(accountName);
                
                var contactName = tdHtmlList[8];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                contactName = matchAll(contactName, regex);
                contactName = contactName[0].trim();
                //console.log(contactName);
                
                var receivingLocation = tdHtmlList[9];  
                //console.log(receivingLocation);
                
                var subRegion = tdHtmlList[10];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                subRegion = matchAll(subRegion, regex);
                subRegion = subRegion[0].trim();
                //console.log(subRegion);
                
                var rmaLineQty = tdHtmlList[11];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                rmaLineQty = matchAll(rmaLineQty, regex);
                rmaLineQty = rmaLineQty[0].trim();
                //console.log(rmaLineQty);
                
                var warrantyExpirationDate = tdHtmlList[12];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                warrantyExpirationDate = matchAll(warrantyExpirationDate, regex);
                warrantyExpirationDate = warrantyExpirationDate[0].trim();
                //console.log(warrantyExpirationDate);
                
                var warrantyStatus = tdHtmlList[13];
                regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                warrantyStatus = matchAll(warrantyStatus, regex);
                warrantyStatus = warrantyStatus[0].trim();
                //console.log(warrantyStatus);
                
                var snObjTmp = {
                    serial_number:rmaNumber,
                    case_number:caseNumber,
                    serial_number:serialNumber,
                    model_number:modelNumber,
                    datetime_opened:datetimeOpened,
                    rma_type:rmaType,
                    status:statusTmp,
                    account_name:accountName,
                    contact_name:contactName,
                    receiving_location:receivingLocation,
                    sub_region:subRegion,
                    rma_line_qty:rmaLineQty,
                    warranty_expiration_date:warrantyExpirationDate,
                    warranty_status:warrantyStatus
                };
                snListViaRMA.push(snObjTmp);
                
            }
        }
    }
    if(snListViaRMA.length > 0){
        console.log(snListViaRMA);
        insertSNViaRMA(snListViaRMA);
    }
}
function insertSNViaRMA(snListViaRMA){
    var con = mysql.createConnection({
        host: "172.16.4.27",
        user: "sonnguyen",
        password: "1233",
        database: "wdgce"
    });
    //var employee = { name: 'Winnie', location: 'Australia' };
    for(var itmp=0; itmp < snListViaRMA.length; itmp++){
        console.log(snListViaRMA[itmp]);
        con.query('INSERT INTO sn_list SET ?', snListViaRMA[itmp], function(err,res){
            if(err) throw err;
            console.log('Last insert ID:', res.insertId);
        });
    }
    con.end();
}




function requestRMA(options9, cookies8, data10, response){
    //return "aaaaa";
    var req9 = https.request(options9, function(res9) {
        console.log("statusCode: ", res9.statusCode);
        console.log("headers: ", res9.headers);
        console.log('\n\n');
        var randomNum = randomInt (1, 9999999999);
        var fileNameTmp = 'res9'+randomNum+'.html';
        var output9 = fs.createWriteStream(fileNameTmp);
        res9.pipe(zlib.createGunzip()).pipe(output9);
        //res9.on('data', function(d9) { });
        output9.on('finish', function() {
            //output9.end('this is the end\n');
            console.error('all writes are now complete.');
            console.log('----------------------------------Read file--------------------------');
            var contents = fs.readFileSync(fileNameTmp, 'utf8');
            //console.log(contents);

            //var data10 = {
            //    'j_id0:results':'j_id0:results', 
            //    'j_id0:results:j_id1:searchResultsButtons:j_id29':'Search'
            //};
            
            data10['j_id0:results'] = 'j_id0:results';
            data10['j_id0:results:j_id1:searchResultsButtons:j_id29'] = 'Search';
            var paramsList = matchAll(contents, /(<input type="hidden".*?\/>)/g);
            //console.log(paramsList);
            for(var i9=0; i9<paramsList.length; i9++){
                if(typeof paramsList[i9] !== undefined){
                    var itemI9 = paramsList[i9];
                    if(itemI9.indexOf('com.salesforce.visualforce') >= 0){
                        var itemI9s = itemI9.toString().split(' ');
                        var itemI9Name = '';
                        var itemI9Value = '';
                        for(var i9s=0; i9s<itemI9s.length; i9s++){
                            if(typeof itemI9s[i9s] !== undefined){
                                var itemI9s2 = itemI9s[i9s].toString();
                                if(itemI9s2.indexOf('name=') >= 0){
                                    itemI9Name = itemI9s2.replace('name="', '');
                                    itemI9Name = itemI9Name.substr(0, itemI9Name.length-1);
                                }
                                if(itemI9s2.indexOf('value=') >= 0){
                                    itemI9Value = itemI9s2.replace('value="', '');
                                    itemI9Value = itemI9Value.substr(0, itemI9Value.length-1);
                                }
                            }
                        }
                        if(itemI9Name !== ''){
                            data10[itemI9Name] = itemI9Value;
                        }
                    }
                }
            }
            executeFindRMAViaSN(data10, cookies8, response);
            console.log('----------------------------------End file--------------------------');
        });
    });
    req9.end();
    req9.on('error', function(e) {
        console.error(e);
    });
}
function executeFindRMAViaSN(data10, cookies8,response){
    data10 = qs.stringify(data10);
    var headers10 = {
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'en-US,en;q=0.5',
        'Connection':'keep-alive',
        'Host':'c.na12.visual.force.com',
        'Referer':'https://c.na12.visual.force.com/apex/RMAReport',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data10)
    };
    headers10['Cookie'] = cookies8;
    var options10 = {
        hostname: 'c.na12.visual.force.com',
        port: 443,
        path: '/apex/RMAReport',
        method: 'POST',
        cert: fs.readFileSync('VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
        requestCert: true,
        headers: headers10
    };
    console.log(options10);
    var req10 = https.request(options10, function(res10) {
        console.log("statusCode: ", res10.statusCode);
        console.log("headers: ", res10.headers);
        console.log('\n\n');
        var randomNum = randomInt (1, 9999999999);
        var fileNameTmp = 'res10'+randomNum+'.html';
        var output10 = fs.createWriteStream(fileNameTmp);
        res10.pipe(zlib.createGunzip()).pipe(output10);
        output10.on('finish', function() {
            putRMANumberToArray(fileNameTmp, response);
        });
    });
    //console.log(data10);
    //console.log('\n\n');
    req10.write(data10);
    req10.end();
    req10.on('error', function(e) {
        console.error(e);
    });
}
function putRMANumberToArray(file, response){
    var contents = fs.readFileSync(file, 'utf8');
    //console.log(contents);
    var tableHtml = contents.substr(contents.indexOf('<table class="list"'));
    tableHtml = tableHtml.substr(0, tableHtml.indexOf('</table>')+8);
    //console.log('\n\n\n');
    //console.log(tableHtml);
    var regex = /<tr[^>]*>(.*)<\/tr>/igm;
    regex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
    var tableHtmlList = matchAll(tableHtml, regex);
    //console.log('\n\n\n');
    //console.log(tableHtmlList);
    
    var rmaListViaSn = new Array();
    
    for(var ihtml=0; ihtml < tableHtmlList.length; ihtml++){
        var trHtml = tableHtmlList[ihtml].toString();
        if(trHtml.indexOf('td') >= 0){
            regex = /<td[^>]*>([\s\S]*?)<\/td>/g;
            var tdHtmlList = matchAll(trHtml, regex);
            if(tdHtmlList.length === 7){
                var serialNumber = tdHtmlList[0];
                if(serialNumber.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    serialNumber = matchAll(serialNumber, regex);
                    if(typeof serialNumber[0] !== 'undefined'){
                        serialNumber = serialNumber[0].trim();
                    } else{
                        serialNumber = '';
                    }
                }
                
                var fullPartNumber = tdHtmlList[1];
                if(fullPartNumber.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    fullPartNumber = matchAll(fullPartNumber, regex);
                    if(typeof fullPartNumber[0] !== 'undefined'){
                        fullPartNumber = fullPartNumber[0].trim();
                    } else{
                        fullPartNumber = '';
                    }
                }

                var rmaNumber = tdHtmlList[2];
                if(rmaNumber.trim() !== ''){
                    regex = /<a[^>]*>([\s\S]*?)<\/a>/g;
                    rmaNumber = matchAll(rmaNumber, regex);
                    if(typeof rmaNumber[0] !== 'undefined'){
                        rmaNumber = rmaNumber[0].trim();
                    } else{
                        rmaNumber = '';
                    }
                }

                var datetimeOpened = tdHtmlList[3];
                //console.log(datetimeOpened);
                
                var rmaType = tdHtmlList[4];
                if(rmaType.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    rmaType = matchAll(rmaType, regex);
                    if(typeof rmaType[0] !== 'undefined'){
                        rmaType = rmaType[0].trim();
                    } else{
                        rmaType = '';
                    }
                }
                
                var statusTmp = tdHtmlList[5];
                if(statusTmp.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    statusTmp = matchAll(statusTmp, regex);
                    if(typeof statusTmp[0] !== 'undefined'){
                        statusTmp = statusTmp[0].trim();
                    } else{
                        statusTmp = '';
                    }
                }
                
                var accountName = tdHtmlList[6];
                if(accountName.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    accountName = matchAll(accountName, regex);
                    if(typeof accountName[0] !== 'undefined'){
                        accountName = accountName[0].trim();
                    } else{
                        accountName = '';
                    }
                }

                var rmaObjTmp = {
                    serial_number:serialNumber,
                    full_part_number:fullPartNumber,
                    rma_number:rmaNumber,
                    datetime_opened:datetimeOpened,
                    rma_type:rmaType,
                    status:statusTmp,
                    account_name:accountName
                };
                //console.log(rmaObjTmp);
                //console.log('\n\n');
                rmaListViaSn.push(rmaObjTmp);
            }
        }
    }
    if(rmaListViaSn.length > 0){
        console.log(rmaListViaSn);
        response.end(JSON.stringify(rmaListViaSn));
        //insertRMA(rmaListViaSn);
    } else{
        response.end("Failed");
    }
}


function requestSN(options9, cookies8, data10, response){
    //return "aaaaa";
    var req9 = https.request(options9, function(res9) {
        console.log("statusCode: ", res9.statusCode);
        console.log("headers: ", res9.headers);
        console.log('\n\n');
        var randomNum = randomInt (1, 9999999999);
        var fileNameTmp = 'res9'+randomNum+'.html';
        var output9 = fs.createWriteStream(fileNameTmp);
        res9.pipe(zlib.createGunzip()).pipe(output9);
        //res9.on('data', function(d9) { });
        output9.on('finish', function() {
            //output9.end('this is the end\n');
            console.error('all writes are now complete.');
            console.log('----------------------------------Read file--------------------------');
            var contents = fs.readFileSync(fileNameTmp, 'utf8');
            //console.log(contents);

            //var data10 = {
            //    'j_id0:results':'j_id0:results', 
            //    'j_id0:results:j_id1:searchResultsButtons:j_id29':'Search'
            //};
            
            data10['j_id0:results'] = 'j_id0:results';
            data10['j_id0:results:j_id1:searchResultsButtons:j_id29'] = 'Search';
            var paramsList = matchAll(contents, /(<input type="hidden".*?\/>)/g);
            //console.log(paramsList);
            for(var i9=0; i9<paramsList.length; i9++){
                if(typeof paramsList[i9] !== undefined){
                    var itemI9 = paramsList[i9];
                    if(itemI9.indexOf('com.salesforce.visualforce') >= 0){
                        var itemI9s = itemI9.toString().split(' ');
                        var itemI9Name = '';
                        var itemI9Value = '';
                        for(var i9s=0; i9s<itemI9s.length; i9s++){
                            if(typeof itemI9s[i9s] !== undefined){
                                var itemI9s2 = itemI9s[i9s].toString();
                                if(itemI9s2.indexOf('name=') >= 0){
                                    itemI9Name = itemI9s2.replace('name="', '');
                                    itemI9Name = itemI9Name.substr(0, itemI9Name.length-1);
                                }
                                if(itemI9s2.indexOf('value=') >= 0){
                                    itemI9Value = itemI9s2.replace('value="', '');
                                    itemI9Value = itemI9Value.substr(0, itemI9Value.length-1);
                                }
                            }
                        }
                        if(itemI9Name !== ''){
                            data10[itemI9Name] = itemI9Value;
                        }
                    }
                }
            }
            executeFindSNViaRMA(data10, cookies8, response);
            console.log('----------------------------------End file--------------------------');
        });
    });
    req9.end();
    req9.on('error', function(e) {
        console.error(e);
    });
}
function executeFindSNViaRMA(data10, cookies8,response){
    data10 = qs.stringify(data10);
    var headers10 = {
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'en-US,en;q=0.5',
        'Connection':'keep-alive',
        'Host':'c.na12.visual.force.com',
        'Referer':'https://c.na12.visual.force.com/apex/SNSearchwithRMA',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data10)
    };
    headers10['Cookie'] = cookies8;
    var options10 = {
        hostname: 'c.na12.visual.force.com',
        port: 443,
        path: '/apex/SNSearchwithRMA',
        method: 'POST',
        cert: fs.readFileSync('VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
        requestCert: true,
        headers: headers10
    };
    console.log(options10);
    var req10 = https.request(options10, function(res10) {
        console.log("statusCode: ", res10.statusCode);
        console.log("headers: ", res10.headers);
        console.log('\n\n');
        var randomNum = randomInt (1, 9999999999);
        var fileNameTmp = 'res10'+randomNum+'.html';
        var output10 = fs.createWriteStream(fileNameTmp);
        res10.pipe(zlib.createGunzip()).pipe(output10);
        output10.on('finish', function() {
            putSNNumberToArray(fileNameTmp, response);
        });
    });
    //console.log(data10);
    //console.log('\n\n');
    req10.write(data10);
    req10.end();
    req10.on('error', function(e) {
        console.error(e);
    });
}
function putSNNumberToArray(file, response){
    //console.log('push push push');
    var contents = fs.readFileSync(file, 'utf8');
    var tableHtml = contents.substr(contents.indexOf('<table class="list"'));
    tableHtml = tableHtml.substr(0, tableHtml.indexOf('</table>')+8);
    
    //console.log(contents);
    //console.log('\n\n\n');
    //console.log(tableHtml);
    //return;
    var regex = /<tr[^>]*>(.*)<\/tr>/igm;
    regex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
    var tableHtmlList = matchAll(tableHtml, regex);
    //console.log('\n\n\n');
    //console.log(tableHtmlList);
    
    var snListViaRMA = new Array();
    
    for(var ihtml=0; ihtml < tableHtmlList.length; ihtml++){
        var trHtml = tableHtmlList[ihtml].toString();
        if(trHtml.indexOf('td') >= 0){
            regex = /<td[^>]*>([\s\S]*?)<\/td>/g;
            var tdHtmlList = matchAll(trHtml, regex);
            if(tdHtmlList.length === 14){
                var rmaNumber = tdHtmlList[0];
                if(rmaNumber.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    rmaNumber = matchAll(rmaNumber, regex);
                    if(typeof rmaNumber[0] !== 'undefined'){
                        rmaNumber = rmaNumber[0].trim();
                    } else{
                        rmaNumber = '';
                    }
                }
                var caseNumber = tdHtmlList[1];
                if(caseNumber.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    caseNumber = matchAll(caseNumber, regex);
                    if(typeof caseNumber[0] !== 'undefined'){
                        caseNumber = caseNumber[0].trim();
                    } else{
                        caseNumber = '';
                    }
                }

                var serialNumber = tdHtmlList[2];
                if(serialNumber.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    serialNumber = matchAll(serialNumber, regex);
                    if(typeof serialNumber[0] !== 'undefined'){
                        serialNumber = serialNumber[0].trim();
                    } else{
                        serialNumber = '';
                    }
                }
                var modelNumber = tdHtmlList[3];
                if(modelNumber.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    modelNumber = matchAll(modelNumber, regex);
                    if(typeof modelNumber[0] !== 'undefined'){
                        modelNumber = modelNumber[0].trim();
                    } else{
                        modelNumber = '';
                    }
                }
                var datetimeOpened = tdHtmlList[4];
                //console.log(datetimeOpened);
                
                var rmaType = tdHtmlList[5];
                if(rmaType.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    rmaType = matchAll(rmaType, regex);
                    if(typeof rmaType[0] !== 'undefined'){
                        rmaType = rmaType[0].trim();
                    } else{
                        rmaType = '';
                    }
                }
                
                var statusTmp = tdHtmlList[6];
                if(statusTmp.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    statusTmp = matchAll(statusTmp, regex);
                    if(typeof statusTmp[0] !== 'undefined'){
                        statusTmp = statusTmp[0].trim();
                    } else{
                        statusTmp = '';
                    }
                }
                
                var accountName = tdHtmlList[7];
                if(accountName.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    accountName = matchAll(accountName, regex);
                    if(typeof accountName[0] !== 'undefined'){
                        accountName = accountName[0].trim();
                    } else{
                        accountName = '';
                    }
                }

                var contactName = tdHtmlList[8];
                if(contactName.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    contactName = matchAll(contactName, regex);
                    if(typeof contactName[0] !== 'undefined'){
                        contactName = contactName[0].trim();
                    } else{
                        contactName = '';
                    }
                }

                var receivingLocation = tdHtmlList[9];  
                if(receivingLocation.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    receivingLocation = matchAll(receivingLocation, regex);
                    if(typeof receivingLocation[0] !== 'undefined'){
                        receivingLocation = receivingLocation[0].trim();
                    } else{
                        receivingLocation = '';
                    }
                }
                
                var subRegion = tdHtmlList[10];
                if(subRegion.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    subRegion = matchAll(subRegion, regex);
                    if(typeof subRegion[0] !== 'undefined'){
                        subRegion = subRegion[0].trim();
                    } else{
                        subRegion = '';
                    }
                }
                
                var rmaLineQty = tdHtmlList[11];
                if(rmaLineQty.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    rmaLineQty = matchAll(rmaLineQty, regex);
                    if(typeof rmaLineQty[0] !== 'undefined'){
                        rmaLineQty = rmaLineQty[0].trim();
                    } else{
                        rmaLineQty = '';
                    }
                }

                var warrantyExpirationDate = tdHtmlList[12];
                if(warrantyExpirationDate.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    warrantyExpirationDate = matchAll(warrantyExpirationDate, regex);
                    if(typeof warrantyExpirationDate[0] !== 'undefined'){
                        warrantyExpirationDate = warrantyExpirationDate[0].trim();
                    } else{
                        warrantyExpirationDate = '';
                    }
                }
                var warrantyStatus = tdHtmlList[13];
                if(warrantyStatus.trim() !== ''){
                    regex = /<span[^>]*>([\s\S]*?)<\/span>/g;
                    warrantyStatus = matchAll(warrantyStatus, regex);
                    if(typeof warrantyStatus[0] !== 'undefined'){
                        warrantyStatus = warrantyStatus[0].trim();
                    } else{
                        warrantyStatus = '';
                    }
                }

                var snObjTmp = {
                    rma_number:rmaNumber,
                    case_number:caseNumber,
                    serial_number:serialNumber,
                    model_number:modelNumber,
                    datetime_opened:datetimeOpened,
                    rma_type:rmaType,
                    status:statusTmp,
                    account_name:accountName,
                    contact_name:contactName,
                    receiving_location:receivingLocation,
                    sub_region:subRegion,
                    rma_line_qty:rmaLineQty,
                    warranty_expiration_date:warrantyExpirationDate,
                    warranty_status:warrantyStatus
                };
                snListViaRMA.push(snObjTmp);
                
            }
        }
    }
    if(snListViaRMA.length > 0){
        console.log(snListViaRMA);
        //response.end(JSON.stringify(snListViaRMA));
    } else{
        //response.end("Failed");
    }
    response.end(JSON.stringify(snListViaRMA));
}
