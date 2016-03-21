var http = require('http');
var https = require('https');
var url  = require('url');
var qs = require('querystring');
var fs =    require('fs');
var zlib = require('zlib');
// var mysql = require("mysql");

var basePath = '/var/www/html/wd-rma/files/';

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
            //username: 'hoangnmt@greystonevn.com',
            //pw: 'pa55word1234',
            //Login:'Log In',
            //un:'hoangnmt@greystonevn.com',
            un:'hoangnmt@greystonevn.com',
            width:1366,
            height:768,
            hasRememberUn:true,
            startURL:null,
            loginURL:null,
            loginType:null,
            useSecure:true,
            local:null,
            lt:'standard',
            qs:null,
            locale:null,
            oauth_token:null,
            oauth_callback:null,
            login:null,
            serverid:null,
            display:'page',
            username:'hoangnmt@greystonevn.com',
            ExtraLog:[{"width":1366},{"height":768},{"language":"en-US"},{"offset":-7},{"scripts":[{"size":249,"summary":"if (self == top) {document.documentElement.style.v"},{"size":485,"summary":"var SFDCSessionVars={\"server\":\"https://login.sales"},{"url":"https://login.salesforce.com/jslibrary/SfdcSessionBase198.js"},{"url":"https://login.salesforce.com/jslibrary/LoginHint198.js"},{"size":26,"summary":"LoginHint.hideLoginForm();"},{"size":36,"summary":"LoginHint.getSavedIdentities(false);"},{"url":"https://login.salesforce.com/jslibrary/baselogin2.js"},{"url":"https://login.salesforce.com/jslibrary/LoginMarketingSurveyResponse.js"},{"size":357,"summary":"function handleLogin(){document.login.un.value=doc"}]},{"scriptCount":9},{"iframes":["https://c.salesforce.com/login-messages/promos.html","https://login.salesforce.com/login/sessionserver190.html"]},{"iframeCount":2}],
            pw:'pa55word1234',
            Login:'Log In'
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
            headers3['Cookie'] = cookies3;
            var options3 = {
                hostname: 'na12.salesforce.com',
                port: 443,
                path: '/secur/frontdoor.jsp'+na12Uri,
                method: 'GET',
                cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
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
                    cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
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
                    headers5['Cookie'] = cookies5;
                    //headers5['Cookie'] = cookies3+';'+cookies4;
                    var options5 = {
                        hostname: 'c.na12.visual.force.com',
                        port: 443,
                        path: '/apex/ReportView?sfdc.tabName=01rU0000000DTmR',
                        method: 'GET',
                        cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
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
                            cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
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
                                cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
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
                                    cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                    requestCert: true,
                                    headers: headers8
                                };
                                //console.log(options8);
                                // https://c.na12.visual.force.com/apex/ReportView?sfdc.tabName=01rU0000000DTmR
                                var req8 = https.request(options8, function(res8) {
                                    console.log("statusCode: ", res8.statusCode);
                                    console.log("headers: ", res8.headers);
                                    console.log('\n\n');
                                    var output = fs.createWriteStream(basePath+'res8.html');
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
                                        cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
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
                                        cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
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
                                                query = query.replace('j_id0:results:j_id1:serialNumbers=', '');
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
                                            case '/confirmed-oracle':{
                                                var rmaNum = query.replace('RMANumbers=', '');
                                                var cookies7 = cookies3+';'+cookies4;
                                                response.writeHead(200, { 'Content-Type': contentType });
                                                requestOracle(rmaNum, cookies7, cookies8, response);
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

function requestOracle(rmaNum, cookies7, cookies8, response){
    var rmaNumSearch = rmaNum;//'85929084';
    var headers6 = {
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'en-US,en;q=0.5',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
        'Connection':'keep-alive'
    };
    headers6['Cookie'] = cookies7;
    var options6 = {
        hostname: 'na12.salesforce.com',
        port: 443,
        path: '/_ui/search/ui/UnifiedSearchResults?asPhrase=1&searchType=2&sen=001&sen=a01&sen=003&sen=01t&sen=005&sen=500&sen=501&sen=a0F&sen=02i&sen=a0L&str='+rmaNumSearch,
        method: 'GET',
        cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
        requestCert: true,
        headers: headers6
    };
    console.log(options6);
    console.log('\n\n');

    var req6 = https.request(options6, function(res6) {
        console.log("statusCode: ", res6.statusCode);
        console.log("headers: ", res6.headers);
        console.log('\n\n');

        var randomNum = randomInt (1, 9999999999);
        var fileNameTmp = basePath+'res_co6_'+randomNum+'.html';
        var output6 = fs.createWriteStream(fileNameTmp);
        res6.pipe(zlib.createGunzip()).pipe(output6);
        output6.on('finish', function() {
            var contents = fs.readFileSync(fileNameTmp, 'utf8');
            var searchResultJson = matchAll(contents, /({searchResultClick.*?})/g);
            searchResultJson = searchResultJson.toString().replace('{searchResultClick.setRelatedListQueryData(', '').toString().trim();
            searchResultJson = searchResultJson.split(',');
            var searchResultJsonObj = {};
            if(searchResultJson.length > 0){
                for(var isearch1=0; isearch1<searchResultJson.length; isearch1++){
                    var itemIsearch1 = searchResultJson[isearch1].replace('{', '').replace('}', '').replace(/'/g, '');
                    var itemSearch1Child = itemIsearch1.split(':');
                    if(itemSearch1Child.length === 2){
                        searchResultJsonObj[itemSearch1Child[0].toString().trim()] = itemSearch1Child[1].toString().trim();
                    }
                }
            }
            var trHtmlList = matchAll(contents, /(<tr class=" dataRow even last first".*?\/tr>)/g);
            trHtmlList = trHtmlList.toString();
            var thHtmlList = matchAll(trHtmlList, /(<th scope="row".*?\/th>)/g);
            thHtmlList = thHtmlList.toString();
            var retUrl = thHtmlList.substr(thHtmlList.indexOf('href="')+6);
            retUrl = retUrl.substr(0, retUrl.indexOf('"'));
            retUrl = retUrl.replace('&amp;', '&');
            var clkRecordId = thHtmlList.substr(thHtmlList.indexOf('data-seclki="')+13);
            clkRecordId = clkRecordId.substr(0, clkRecordId.indexOf('"'));
            var clkIdHash = thHtmlList.substr(thHtmlList.indexOf('data-seclkh="')+13);
            clkIdHash = clkIdHash.substr(0, clkIdHash.indexOf('"'));
            var fullUrlSearchTmp = '/_ui/search/logging/SearchClickLoggingServlet?asPhrase=1&searchType=2&sen=a0L&str='+rmaNumSearch+'&clkLogFlag=1&clkRecordId='+clkRecordId+'&clkQueryGuid='+(searchResultJsonObj.queryGuid)+'&clkCount='+(searchResultJsonObj.count)+'&clkRank=1&clkBucketRank=1&clkIdHash='+clkIdHash+'&clkNumResultsForEntityBeforeDb='+(searchResultJsonObj.numResultsForEntityBeforeDb)+'&clkPageNum='+(searchResultJsonObj.pageNum)+'&clkNumResultsPerPage='+(searchResultJsonObj.numResultsPerPage)+'&clkFilter='+(searchResultJsonObj.isTagging)+'&filter='+(searchResultJsonObj.sort)+'&clkIsTagging='+(searchResultJsonObj.isTagging)+'&clkEntityName='+(searchResultJsonObj.name)+'&retURL='+retUrl+'';
            var headers7 = {
                'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Encoding':'gzip, deflate',
                'Accept-Language':'en-US,en;q=0.5',
                //'Host':'na12.salesforce.com',
                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                //'Referer':'https://c.na12.content.force.com/',
                'Connection':'keep-alive'
            };
            headers7['Cookie'] = cookies7;
            //https://na12.salesforce.com/_ui/search/ui/UnifiedSearchResults?asPhrase=1&searchType=2&sen=001&sen=a01&sen=003&sen=01t&sen=005&sen=500&sen=501&sen=a0F&sen=02i&sen=a0L&str=85929084
            var options7 = {
                hostname: 'na12.salesforce.com',
                port: 443,
                path: fullUrlSearchTmp,
                method: 'GET',
                cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                requestCert: true,
                headers: headers7
            };
            console.log(options7);
            var req7 = https.request(options7, function(res7) {
                console.log("statusCode: ", res7.statusCode);
                console.log("headers: ", res7.headers);
                console.log('\n\n');
                
                if(typeof res7.headers['location'] === 'undefined'){
                    response.end("0");
                    return false;
                }
                var res7Urls = res7.headers['location'].toString();
                var res7Uri = res7Urls.replace('https://na12.salesforce.com', '');
                var headers8 = {
                    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                    'Accept-Encoding':'gzip, deflate',
                    'Accept-Language':'en-US,en;q=0.5',
                    //'Host':'na12.salesforce.com',
                    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                    //'Referer':'https://c.na12.content.force.com/',
                    'Connection':'keep-alive'
                };
                headers8['Cookie'] = cookies7;
                var options8 = {
                    hostname: 'na12.salesforce.com',
                    port: 443,
                    path: res7Uri,
                    method: 'GET',
                    cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                    requestCert: true,
                    headers: headers8
                };
                console.log(options8);
                console.log('\n\n');

                var req8 = https.request(options8, function(res8) {
                    console.log("statusCode: ", res8.statusCode);
                    console.log("headers: ", res8.headers);
                    console.log('\n\n');

                    if(typeof res8.headers['location'] === 'undefined'){
                        response.end("0");
                        return false;
                    }
                    var res9Urls = res8.headers['location'].toString();
                    var res9Uri = res9Urls.replace('https://c.na12.visual.force.com', '');
                    var headers9 = {
                        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                        'Accept-Encoding':'gzip, deflate',
                        'Accept-Language':'en-US,en;q=0.5',
                        //'Host':'na12.salesforce.com',
                        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                        //'Referer':'https://c.na12.content.force.com/',
                        'Connection':'keep-alive'
                    };
                    headers9['Cookie'] = cookies8;
                    var options9 = {
                        hostname: 'c.na12.visual.force.com',
                        port: 443,
                        path: res9Uri,
                        method: 'GET',
                        cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                        requestCert: true,
                        headers: headers9
                    };
                    console.log(options9);
                    console.log('\n\n');

                    var req9 = https.request(options9, function(res9) {
                        console.log("statusCode: ", res9.statusCode);
                        console.log("headers: ", res9.headers);
                        console.log('\n\n');

                        var randomNum = randomInt (1, 9999999999);
                        var fileNameTmp = basePath+'res_co9_'+randomNum+'.html';
                        var output9 = fs.createWriteStream(fileNameTmp);
                        res9.pipe(zlib.createGunzip()).pipe(output9);
                        output9.on('finish', function(){
                            var contents = fs.readFileSync(fileNameTmp, 'utf8');
                            var linkConfirmedOracle = contents.substr(contents.indexOf("window.location.href ='")+23);
                            linkConfirmedOracle = linkConfirmedOracle.substr(0, linkConfirmedOracle.indexOf("'"));
                            linkConfirmedOracle = linkConfirmedOracle.replace('https://na12.salesforce.com', '');
                            console.log(linkConfirmedOracle);
                            
                            var headers10 = {
                                'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                'Accept-Encoding':'gzip, deflate',
                                'Accept-Language':'en-US,en;q=0.5',
                                //'Host':'na12.salesforce.com',
                                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                //'Referer':'https://c.na12.content.force.com/',
                                'Connection':'keep-alive'
                            };
                            headers10['Cookie'] = cookies7;
                            var options10 = {
                                hostname: 'na12.salesforce.com',
                                port: 443,
                                path: linkConfirmedOracle,
                                method: 'GET',
                                cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                requestCert: true,
                                headers: headers10
                            };
                            console.log(options10);
                            console.log('\n\n');
                            
                            var req10 = https.request(options10, function(res10) {
                                console.log("statusCode: ", res10.statusCode);
                                console.log("headers: ", res10.headers);
                                console.log('\n\n');
                    
                                var randomNum = randomInt (1, 9999999999);
                                var fileNameTmp = basePath+'res_co10_'+randomNum+'.html';
                                var output10 = fs.createWriteStream(fileNameTmp);
                                res10.pipe(zlib.createGunzip()).pipe(output10);
                                output10.on('finish', function(){
                                    var contents10 = fs.readFileSync(fileNameTmp, 'utf8');
                                    var linkWDSupport = matchAll(contents10, /(<a href="https:\/\/wdsupport\.wdc\.com\/warranty\/rmastatussfdc\.asp.*".*?>)/g);
                                    linkWDSupport = linkWDSupport.toString();
                                    linkWDSupport = linkWDSupport.substr(linkWDSupport.indexOf('href="')+6);
                                    linkWDSupport = linkWDSupport.substr(0, linkWDSupport.indexOf('"'));
                                    linkWDSupport = linkWDSupport.replace(/&amp;/g, '&');
                                    linkWDSupport = linkWDSupport.replace(/ /g, '%20');
                                    //linkWDSupport = qs.escape(linkWDSupport);
                                    var headers11 = {
                                        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                        'Accept-Encoding':'gzip, deflate',
                                        'Accept-Language':'en-US,en;q=0.5',
                                        //'Host':'na12.salesforce.com',
                                        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                        //'Referer':'https://c.na12.content.force.com/',
                                        'Connection':'keep-alive'
                                    };
                                    var options11 = {
                                        hostname: 'wdsupport.wdc.com',
                                        port: 443,
                                        path: linkWDSupport,
                                        method: 'GET',
                                        cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                        requestCert: true,
                                        headers: headers11
                                    };
                                    console.log(options11);
                                    console.log('\n\n');

                                    var req11 = https.request(options11, function(res11) {
                                        if(res11.statusCode === 302){
                                            response.end("0");
                                            return false;
                                        }
                                        console.log("statusCode: ", res11.statusCode);
                                        console.log("headers: ", res11.headers);
                                        console.log('\n\n');
                                        var randomNum = randomInt (1, 9999999999);
                                        var fileNameTmp = basePath+'res_co11_'+randomNum+'.html';
                                        var output11 = fs.createWriteStream(fileNameTmp);
                                        res11.pipe(zlib.createGunzip()).pipe(output11);
                                        output11.on('finish', function(){
                                            putOracleToArray(fileNameTmp, response);
                                        });
                                    });
                                    req11.end();
                                    req11.on('error', function(e) {
                                        console.error(e);
                                    });
                                });
                            });
                            req10.end();
                            req10.on('error', function(e) {
                                console.error(e);
                            });
                        });
                    });
                    req9.end();
                    req9.on('error', function(e) {
                        console.error(e);
                    });

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
    });
    req6.end();
    req6.on('error', function(e) {
        console.error(e);
    });
}
function putOracleToArray(file, response){
    //var fileNameTmp = 'res_co11_6139929690.html';
    var result11Obj = {};
    var contents11 = fs.readFileSync(file, 'utf8');
    try{
        var rmaInfoTable = matchAll(contents11, /<table id="rmainfo"[^>]*>([\s\S]*?)<\/table>/g);
        rmaInfoTable = rmaInfoTable[0];
        var rmaInfoTitle = rmaInfoTable.substr(0, rmaInfoTable.indexOf('<table'));
        var rmaInfoContent = rmaInfoTable.substr(rmaInfoTable.indexOf('<table'));
        rmaInfoTitle = matchAll(rmaInfoTitle, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
        rmaInfoTitle = rmaInfoTitle[0];
        rmaInfoTitle = rmaInfoTitle.trim()+'(rmainfo)';
        rmaInfoTitle = 'rmainfo';
        var rmaInfoContent = matchAll(rmaInfoContent, /<tr[^>]*>([\s\S]*?)<\/tr>/g);
        //console.log(rmaInfoContent);
        var rmaTableObj = new Array();
        for(var irma11=0; irma11<rmaInfoContent.length; irma11++){
            var rmaTd11 = rmaInfoContent[irma11];
            rmaTd11 = matchAll(rmaTd11, /<td[^>]*>([\s\S]*?)<\/td>/g);
            var rmaTrObj = new Array();
            for(var irmaTd11=0; irmaTd11<rmaTd11.length; irmaTd11++){
                var rmaTd11Content = rmaTd11[irmaTd11];
                rmaTd11Content = rmaTd11Content.toString();
                if(rmaTd11Content.indexOf('strong')>= 0){
                    rmaTd11Content = matchAll(rmaTd11Content, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
                    rmaTd11Content =rmaTd11Content[0];
                    rmaTd11Content = rmaTd11Content.trim();
                }
                rmaTrObj.push(rmaTd11Content);
            }
            rmaTableObj.push(rmaTrObj);
        }
        result11Obj[rmaInfoTitle] = rmaTableObj;
        console.log(result11Obj);
        console.log('\n\n\n');
    } catch(exx){
        console.log(exx.message);
    }
    try{
        var receivingDetailTitle = contents11.substr(contents11.indexOf('receivingdetail')-200, contents11.indexOf('receivingdetail'));
        receivingDetailTitle = matchAll(receivingDetailTitle, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
        receivingDetailTitle = receivingDetailTitle[0];
        receivingDetailTitle = receivingDetailTitle.trim()+'(receivingdetail)';
        receivingDetailTitle = 'receivingdetail';
        var receivingDetailTable = matchAll(contents11, /<table id="receivingdetail"[^>]*>([\s\S]*?)<\/table>/g);
        receivingDetailTable = receivingDetailTable[0];
        var receivingDetailContent = receivingDetailTable.substr(receivingDetailTable.indexOf('<table'));
        receivingDetailContent = matchAll(receivingDetailContent, /<tr[^>]*>([\s\S]*?)<\/tr>/g);
        //console.log(rmaInfoContent);
        var rcvTableObj = new Array();
        for(var ircv11=0; ircv11<receivingDetailContent.length; ircv11++){
            var rcvTd11 = receivingDetailContent[ircv11];
            rcvTd11 = matchAll(rcvTd11, /<td[^>]*>([\s\S]*?)<\/td>/g);
            var rcvTrObj = new Array();
            for(var ircvTd11=0; ircvTd11<rcvTd11.length; ircvTd11++){
                var rcvTd11Content = rcvTd11[ircvTd11];
                rcvTd11Content = rcvTd11Content.toString();
                if(rcvTd11Content.indexOf('strong')>= 0){
                    rcvTd11Content = matchAll(rcvTd11Content, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
                    rcvTd11Content =rcvTd11Content[0];
                    rcvTd11Content = rcvTd11Content.trim();
                }
                rcvTrObj.push(rcvTd11Content);
            }
            rcvTableObj.push(rcvTrObj);
        }
        result11Obj[receivingDetailTitle] = rcvTableObj;
        console.log(result11Obj);
        console.log('\n\n\n');
    } catch(exx){
        console.log(exx.message);
    }
    try{
        var shippingDetailTitle = contents11.substr(contents11.indexOf('shippingdetail')-200, contents11.indexOf('shippingdetail'));
        shippingDetailTitle = matchAll(shippingDetailTitle, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
        shippingDetailTitle = shippingDetailTitle[0];
        shippingDetailTitle = shippingDetailTitle.trim()+'(shippingdetail)';
        shippingDetailTitle = 'shippingdetail';
        var shippingDetailTable = matchAll(contents11, /<table id="shippingdetail"[^>]*>([\s\S]*?)<\/table>/g);
        shippingDetailTable = shippingDetailTable[0];
        var shippingDetailContent = shippingDetailTable.substr(shippingDetailTable.indexOf('<table'));
        shippingDetailContent = matchAll(shippingDetailContent, /<tr[^>]*>([\s\S]*?)<\/tr>/g);
        //console.log(rmaInfoContent);
        var shippingTableObj = new Array();
        for(var iship11=0; iship11<shippingDetailContent.length; iship11++){
            var shipTd11 = shippingDetailContent[iship11];
            shipTd11 = matchAll(shipTd11, /<td[^>]*>([\s\S]*?)<\/td>/g);
            var shipTrObj = new Array();
            for(var ishipTd11=0; ishipTd11<shipTd11.length; ishipTd11++){
                var shipTd11Content = shipTd11[ishipTd11];
                shipTd11Content = shipTd11Content.toString();
                if(shipTd11Content.indexOf('strong')>= 0){
                    shipTd11Content = matchAll(shipTd11Content, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
                    shipTd11Content =shipTd11Content[0];
                    shipTd11Content = shipTd11Content.trim();
                }
                shipTrObj.push(shipTd11Content);
            }
            shippingTableObj.push(shipTrObj);
        }
        result11Obj[shippingDetailTitle] = shippingTableObj;
        console.log(result11Obj);
        console.log('\n\n\n');
    } catch(exx){
        console.log(exx.message);
    }
    try{
        var resumeCombineContainer = contents11.substr(contents11.indexOf('rmainfo'));
        resumeCombineContainer = resumeCombineContainer.substr(0, resumeCombineContainer.indexOf('receivingdetail')-11);
        resumeCombineContainer = resumeCombineContainer.substr(resumeCombineContainer.indexOf('</table>')+30);
        var resumeCombine = resumeCombineContainer.substr(0, resumeCombineContainer.indexOf('</table>')+34);
        var resumeDetailCombine = resumeCombineContainer.substr(resumeCombineContainer.indexOf('</table>')+34);

        var resumeCombineTitle = resumeCombine.substr(0, resumeCombine.indexOf('class="bgnormal"'));
        resumeCombineTitle = matchAll(resumeCombineTitle, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
        resumeCombineTitle = resumeCombineTitle[0];
        resumeCombineTitle = resumeCombineTitle.trim()+'(resumerma)';
        resumeCombineTitle = 'resumerma';
        var resumeCombineTable = matchAll(resumeCombine, /<table[^>]*>([\s\S]*?)<\/table>/g);
        resumeCombineTable = resumeCombineTable[0];
        var resumeCombineContent = resumeCombineTable.substr(resumeCombineTable.indexOf('<table'));
        resumeCombineContent = matchAll(resumeCombineContent, /<tr[^>]*>([\s\S]*?)<\/tr>/g);
        var resumeCombineTableObj = new Array();
        for(var irs11=0; irs11<resumeCombineContent.length; irs11++){
            var rsTd11 = resumeCombineContent[irs11];
            rsTd11 = matchAll(rsTd11, /<td[^>]*>([\s\S]*?)<\/td>/g);
            var rsTrObj = new Array();
            for(var irsTd11=0; irsTd11<rsTd11.length; irsTd11++){
                var rsTd11Content = rsTd11[irsTd11];
                rsTd11Content = rsTd11Content.toString();
                if(rsTd11Content.indexOf('strong')>= 0){
                    rsTd11Content = matchAll(rsTd11Content, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
                    rsTd11Content =rsTd11Content[0];
                    rsTd11Content = rsTd11Content.trim();
                }
                rsTrObj.push(rsTd11Content);
            }
            resumeCombineTableObj.push(rsTrObj);
        }
        result11Obj[resumeCombineTitle] = resumeCombineTableObj;
        console.log(result11Obj);
        console.log('\n\n\n');

        var resumeDetailCombineTitle = resumeDetailCombine.substr(0, resumeDetailCombine.indexOf('class="bgnormal"'));
        resumeDetailCombineTitle = matchAll(resumeDetailCombineTitle, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
        resumeDetailCombineTitle = resumeDetailCombineTitle[0];
        resumeDetailCombineTitle = resumeDetailCombineTitle.trim()+'(resumedetail)';
        resumeDetailCombineTitle = 'resumedetail';
        var resumeCombineDetailTable = matchAll(resumeCombine, /<table[^>]*>([\s\S]*?)<\/table>/g);
        resumeCombineDetailTable = resumeCombineDetailTable[0];
        var resumeCombineDetailContent = resumeCombineDetailTable.substr(resumeCombineDetailTable.indexOf('<table'));
        resumeCombineDetailContent = matchAll(resumeCombineDetailContent, /<tr[^>]*>([\s\S]*?)<\/tr>/g);
        var resumeCombineDetailTableObj = new Array();
        for(var irsd11=0; irsd11<resumeCombineDetailContent.length; irsd11++){
            var rsdTd11 = resumeCombineDetailContent[irsd11];
            rsdTd11 = matchAll(rsdTd11, /<td[^>]*>([\s\S]*?)<\/td>/g);
            var rsdTrObj = new Array();
            for(var irsdTd11=0; irsdTd11<rsdTd11.length; irsdTd11++){
                var rsdTd11Content = rsdTd11[irsdTd11];
                rsdTd11Content = rsdTd11Content.toString();
                if(rsdTd11Content.indexOf('strong')>= 0){
                    rsdTd11Content = matchAll(rsdTd11Content, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
                    rsdTd11Content =rsdTd11Content[0];
                    rsdTd11Content = rsdTd11Content.trim();
                }
                rsdTrObj.push(rsdTd11Content);
            }
            resumeCombineDetailTableObj.push(rsdTrObj);
        }
        result11Obj[resumeDetailCombineTitle] = resumeCombineDetailTableObj;
        console.log(result11Obj);
        console.log('\n\n\n');
    } catch(exx){
        console.log(exx.message);
    }
    response.end(JSON.stringify(result11Obj));
}

function requestRMA(options9, cookies8, data10, response){
    //return "aaaaa";
    var req9 = https.request(options9, function(res9) {
        console.log("statusCode: ", res9.statusCode);
        console.log("headers: ", res9.headers);
        console.log('\n\n');
        var randomNum = randomInt (1, 9999999999);
        var fileNameTmp = basePath+'res9'+randomNum+'.html';
        var output9 = fs.createWriteStream(fileNameTmp);
        res9.pipe(zlib.createGunzip()).pipe(output9);
        //res9.on('data', function(d9) { });
        output9.on('finish', function() {
            try{
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
            } catch(exx){
                console.log(exx.message);
            }
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
        cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
        requestCert: true,
        headers: headers10
    };
    console.log(options10);
    var req10 = https.request(options10, function(res10) {
        try{
            console.log("statusCode: ", res10.statusCode);
            console.log("headers: ", res10.headers);
            console.log('\n\n');
            var randomNum = randomInt (1, 9999999999);
            var fileNameTmp = basePath+'res10'+randomNum+'.html';
            var output10 = fs.createWriteStream(fileNameTmp);
            res10.pipe(zlib.createGunzip()).pipe(output10);
            output10.on('finish', function() {
                putRMANumberToArray(fileNameTmp, response);
            });
        } catch(exx){
            console.log(exx.message);
        }
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
    try{
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
    } catch(exx){
        console.log(exx.message);
    }
}


function requestSN(options9, cookies8, data10, response){
    //return "aaaaa";
    var req9 = https.request(options9, function(res9) {
        console.log("statusCode: ", res9.statusCode);
        console.log("headers: ", res9.headers);
        console.log('\n\n');
        var randomNum = randomInt (1, 9999999999);
        var fileNameTmp = basePath+'res9'+randomNum+'.html';
        var output9 = fs.createWriteStream(fileNameTmp);
        res9.pipe(zlib.createGunzip()).pipe(output9);
        //res9.on('data', function(d9) { });
        output9.on('finish', function() {
            try{
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
            } catch(exx){
                console.log(exx.message);
            }
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
        cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
        requestCert: true,
        headers: headers10
    };
    console.log(options10);
    var req10 = https.request(options10, function(res10) {
        try{
            console.log("statusCode: ", res10.statusCode);
            console.log("headers: ", res10.headers);
            console.log('\n\n');
            var randomNum = randomInt (1, 9999999999);
            var fileNameTmp = basePath+'res10'+randomNum+'.html';
            var output10 = fs.createWriteStream(fileNameTmp);
            res10.pipe(zlib.createGunzip()).pipe(output10);
            output10.on('finish', function() {
                putSNNumberToArray(fileNameTmp, response);
            });
        } catch(exx){
            console.log(exx.message);
        }
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
    try{
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
    } catch(exx){
        console.log(exx.message);
    }
}
