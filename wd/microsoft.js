var phantom = require('phantom');
var http = require('http');
var https = require('https');
var url  = require('url');
var qs = require('querystring');
var fs =    require('fs');
var zlib = require('zlib');
var basePath = '/var/www/html/wd-rma/files/';
var logging = false;
var account = 'icombine001@hotmail.com';
var password = 'Abc12345';

repairLogin();

//loginToMS();

function loginToMS(){
    logging = true; // set script is logging
    // var pageUrl = "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=12&ct=1456285182&rver=6.5.6509.0&wp=MBI_SSL&wreply=https:%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signin%3Fru%3Dhttps%253a%252f%252faccount.microsoft.com%252f%253frefd%253daccount.microsoft.com%2526refp%253dhome-about-index&lc=1033&id=292666";
    var pageUrl = "https://account.microsoft.com/devices/remove?deviceId=wp8%5bd0VRe9XbAK5MEgovCf6Ch5eiVq_K1durx7qTuWUTOfE%3a27484B29817CBB9608BE072CB2F57AD4F6C3B9062661010AC089ABC719932460%5d&refd=account.microsoft.com";
    phantom.create(function (ph) {//mMAKE SURE WE CAN RENDER https
        ph.createPage(function (page) {
            //CREATE PAGE OBJECT
            page.set('viewportSize', {width:1280,height:900}, function(){
                page.set('clipRect', {top:0,left:0,width:1280,height:900}, function(){
                    var headers1 = {
                        'Host': 'login.live.com',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                        'Accept-Language': 'en-US,en;q=0.5',
                        'Accept-Encoding': 'gzip, deflate, br'
                    };
                    page.customHeaders = headers1;
                    //OPEN PAGE
                    page.open(pageUrl, function(status) {
                        console.log(status);
                        page.getCookies(function(cookie){
                            console.log(cookie);
                            var cookies2 = getCookieStringPhan(cookie);
                            console.log(cookies2);
                            console.log('\n\n\n');
                            page.getContent(function(content){
                                //console.log(content);
                                //console.log('\n\n\n');
                                //return false;
                                
                                var fileNameTmp = basePath+'ms1.html';
                                fs.writeFile(fileNameTmp, content, function (err) {
                                    if (err){ return console.log(err); }
                                    console.log('Hello World > 1');
                                });
                                
                                var PPFT = matchAll(content, /(<input type="hidden" name="PPFT".*?\/>)/g);
                                PPFT = PPFT[0].toString();
                                PPFT = PPFT.substr(PPFT.indexOf('value="')+7);
                                PPFT = PPFT.substr(0, PPFT.indexOf('"'));
                                console.log('\n\n\n');
                                console.log(PPFT);
                                console.log('\n\n\n');
                                //return false;
                                var url1 = 'https://login.live.com/ppsecure/post.srf?wa=wsignin1.0&rpsnv=12&ct=1456370191&rver=6.5.6509.0&wp=MBI_SSL&wreply=https:%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signin%3Fru%3Dhttps%253a%252f%252faccount.microsoft.com%252f%253frefd%253daccount.microsoft.com%2526refp%253dhome-about-index&lc=1033&id=292666&bk=1456370196&uaid=eb3861e0013047829d37b815d0e559f3&pid=0';
                                var data = qs.stringify({
                                    loginfmt:account,
                                    passwd:password,
                                    KMSI:1,
                                    login:account,
                                    type:11,
                                    PPFT:PPFT,
                                    PPSX:'Pa',
                                    idsbho:1,
                                    sso:0,
                                    NewUser:1,
                                    LoginOptions:3,
                                    i1:0,
                                    i2:1,
                                    i3:15228,
                                    i4:0,
                                    i7:0,
                                    i12:1,
                                    i13:0,
                                    i14:463,
                                    i15:1134,
                                    i17:0,
                                    i18:'__Login_Strings|1,__Login_Core|1,',
                                    //i16:'{"navigationStart":1456370184342,"unloadEventStart":0,"unloadEventEnd":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1456370184342,"domainLookupStart":1456370184364,"domainLookupEnd":1456370184367,"connectStart":1456370184367,"connectEnd":1456370184367,"requestStart":1456370185336,"responseStart":1456370185570,"responseEnd":1456370185572,"domLoading":1456370185580,"domInteractive":1456370187410,"domContentLoadedEventStart":1456370187411,"domContentLoadedEventEnd":1456370187579,"domComplete":1456370187581,"loadEventStart":1456370187581,"loadEventEnd":1456370187659}',
                                    //i19:28726
                                });
                                var headers2 = {
                                    'Host': 'login.live.com',
                                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
                                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                    'Accept-Language': 'en-US,en;q=0.5',
                                    'Accept-Encoding': 'gzip, deflate, br',
                                    'Referer': pageUrl,
                                    'Cookie': cookies2,
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                    'Content-Length': data.length
                                };
                                page.customHeaders = headers2;
                                page.open(url1, 'POST', data, function(status) {
                                    console.log(status);
                                    page.getCookies(function(cookie){
                                        console.log(cookie);
                                        var cookies3 = getCookieStringPhan(cookie);
                                        console.log(cookies3);
                                        console.log('\n\n\n');
                                        page.getContent(function(content){
                                            //console.log(content);
                                            //console.log('\n\n\n');
                                            var fileNameTmp = basePath+'ms2.html';
                                            fs.writeFile(fileNameTmp, content, function (err) {
                                                if (err){ return console.log(err); }
                                                console.log('Hello World > 2');
                                            });

                                            var data2 = getParamCompleteSignin(content);
                                            data2 = qs.stringify(data2);
                                            var url2 = content.substr(content.indexOf('action="')+8);
                                            url2 = url2.substr(0, url2.indexOf('" method="post"'));
                                            console.log(url2);
                                            console.log('\n\n\n');
                                            //url2 = decodeURIComponent(url2.replace(/&amp;/g, '&'));
                                            url2 = url2.replace(/&amp;/g, '&');
                                            console.log(url2);
                                            console.log('\n\n\n');
                                            var headers3 = {
                                                'Host': 'account.microsoft.com',
                                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
                                                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                                'Accept-Language': 'en-US,en;q=0.5',
                                                'Accept-Encoding': 'gzip, deflate, br',
                                                //'Referer': url1,
                                                'Cookie': cookies2+';'+cookies3,
                                                'Content-Type': 'application/x-www-form-urlencoded',
                                                'Content-Length': data2.length
                                            };
                                            page.customHeaders = headers3;
                                            setTimeout(function(){
                                                console.log('--- Complete ---');
                                                console.log('\n\n\n');
                                                page.open(url2, 'POST', data2, function(status) {
                                                    console.log(status);
                                                    page.getCookies(function(cookie){
                                                        console.log(cookie);
                                                        console.log('\n\n\n');
                                                        page.getContent(function(content){
                                                            logging = false;
                                                            var fileNameTmp = basePath+'ms3.html';
                                                            fs.writeFile(fileNameTmp, content, function (err) {
                                                                if (err){ return console.log(err); }
                                                                console.log('Hello World > 3');
                                                            });
                                                            
                                                            if(content.indexOf(account) > 0){ // Login success
                                                                pushCookieToServer(cookie);
                                                                console.log('\n\n Login Successful... \n\n');
                                                            } else{
                                                                console.log('\n\n Login Failed... \n\n');
                                                            }
                                                        });
                                                    });
                                                });
                                            }, 15000);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }, { dnodeOpts: {weak: false }});    
}
function matchAll(str, regex) {
    var res = []; var m;
    if (regex.global) { while (m = regex.exec(str)) { res.push(m[1]); } } else { if (m = regex.exec(str)) { res.push(m[1]); } }
    return res;
}
function getParamCompleteSignin(contents){
    try{
        var inputHidden = matchAll(contents.toString(), /(<input type="hidden".*?>)/g);
        var paramsResponse = {};
        for(var i9=0; i9<inputHidden.length; i9++){
            if(typeof inputHidden[i9] !== undefined){
                var itemI9 = inputHidden[i9];
                itemI9 = itemI9.toString();
                var itemI9Name = itemI9.substr(itemI9.indexOf('name="')+6);
                itemI9Name = itemI9Name.substr(0, itemI9Name.indexOf('"'));
                var itemI9Value = itemI9.substr(itemI9.indexOf('value="')+7);
                itemI9Value = itemI9Value.substr(0, itemI9Value.indexOf('"'));
                if(itemI9Name !== ''){
                    paramsResponse[itemI9Name] = itemI9Value;//decodeURIComponent(itemI9Value.replace(/&amp;/g, '&'));
                }
            }
        }
        console.log(paramsResponse);
        return paramsResponse;
    } catch(exx){ console.log(exx.message); return {}; }
}
function getCookieString(cookieArray){
    var cookieString = '';
    if(typeof cookieArray !== 'array' && typeof cookieArray !== 'object'){ return cookieString; }
    if(cookieArray.length < 1){ return cookieString; }
    for(var i=0; i< cookieArray.length; i++){
        var itemNa12Header = cookieArray[i].split(';');
        if(typeof itemNa12Header[0] !== undefined){
            var itemHeader = itemNa12Header[0];
            var itemHeaderChild = itemHeader.split('=');
            var itemHeaderKey = itemHeaderChild[0];
            var itemHeaderValue = itemHeaderChild[1];
            cookieString += (cookieString === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
        }
    }
    return cookieString;
}
function getCookieStringPhan(cookie){
    var cookies = '';
    for(var i1=0; i1<cookie.length; i1++){
        var i1Cookie = cookie[i1];
        cookies += (cookies === ''? '' : ';')+i1Cookie.name+'='+i1Cookie.value;
    }
    return cookies;
}
function pushCookieToServer($cookieArray){
    var data = {
        action:'microsoft_account_set',
        command:30,
        username:account,
        cookies:$cookieArray
    };
    data = JSON.stringify(data);
    console.log(data);
    var uri = '/beta/public/general/microsoft_account_set.php';
    var server = randomServer(uri);
    var headers = {
        'Host': server.url,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length
    };
    var options = {
        hostname: server.url,
        port: 80,
        path: server.uri,
        method: 'POST',
        headers: headers
    };
    
    var req = http.request(options, function(res) {        
        console.log("statusCode: ", res.statusCode);
        console.log("headers: ", res.headers);
        console.log('\n\n\n');
        
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            console.log(body);
        });
        
    });
    req.write(data);
    req.end();
    req.on('error', function(e) { console.error(e); });
}
function reCookieToServer(callback){
    if(!logging){ // logging is false
        var uri = '/beta/public/general/microsoft_account.php';
        var server = randomServer(uri);
        var data = JSON.stringify({
            action:'microsoft_account',
            account:account,
            stationsn:'EMPTY',
            command:30
        });
        var headers = {
            'Host': 'cloud16.greystonedatatech.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(data)
        };
        var options = {
            hostname: server.url,
            port: 80,
            path: server.uri,
            method: 'POST',
            headers: headers
        };
        var req = http.request(options, function(res) {        
            //console.log("statusCode: ", res.statusCode);
            //console.log("headers: ", res.headers);
            var body = '';
            res.on('data', function(chunk) { body += chunk; });
            res.on('end', function() {
                //console.log('contents: '+body);
                console.log('Status login: '+logging);
                console.log('\n\n\n');
                response = parseJson(body);
                if(typeof response.data.activated !== 'undefined'){
                    var activated = response.data.activated;
                    if(activated === '0'){
                        console.log('\n\n\n');
                        console.log('Relogin...');
                        console.log('\n\n\n');
                        callback();
                    }
                }
            });
        });
        req.write(data);
        req.end(function(){
            setTimeout(function(){ repairLogin(); }, 10000);
        });
        req.on('error', function(e) { console.error(e); });
    } else{
        console.log('\n Working... \n');
        setTimeout(function(){ repairLogin(); }, 10000);
    }
}
function repairLogin(){
    reCookieToServer(loginToMS);
    //checkCookieToServer();
}
function parseJson(objectString){
    try{ return JSON.parse(objectString); } catch(exx){ return {}; }
}
function randomServer(uri){
    var serverList = new Array();
    var max = 2;
    var min = 0;
    serverList[0] = {url:'cloud16.greystonedatatech.com', uri:uri};
    serverList[1] = {url:'cloud16.greystonedatatech.com', uri:uri};
    var randomNum = Math.floor(Math.random() * (max - min)) + min;
    var server = serverList[randomNum];
    console.log(server);
    return server;
}