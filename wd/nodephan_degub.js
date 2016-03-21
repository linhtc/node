var phantom = require('phantom');
var http = require('http');
var https = require('https');
var url  = require('url');
var qs = require('querystring');
var fs =    require('fs');
var zlib = require('zlib');
var basePath = '/var/www/html/wd-rma/files/';
//var basePath = '/home/gdsuser/wd-rma/files/';
// var mysql = require("mysql");

var pageUrl = "https://login.salesforce.com/";
phantom.create(function (ph) {//mMAKE SURE WE CAN RENDER https
    ph.createPage(function (page) {
        //CREATE PAGE OBJECT
        page.set('viewportSize', {width:1280,height:900}, function(){
            page.set('clipRect', {top:0,left:0,width:1280,height:900}, function(){
                //OPEN PAGE
                page.open(pageUrl, function(status) {
                    console.log(status);
                    page.getCookies(function(cookie){
                        var cookies1 = '';
                        for(var i1=0; i1<cookie.length; i1++){
                            var i1Cookie = cookie[i1];
                            cookies1 += (cookies1 === ''? '' : ';')+i1Cookie.name+'='+i1Cookie.value;
                        }
                        console.log(cookies1);
                        console.log(page); //return false;
                        console.log('\n\n');
                        var data = qs.stringify({
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
                        //page.setHeaders({'Cookie':cookies1});
                        page.open(pageUrl, 'post', data, function (status_1) {
                            console.log(status_1);
                            page.getCookies(function(cookie_1){
                                console.log(cookie_1);
                                var cookies2 = '';
                                for(var i1=0; i1<cookie_1.length; i1++){
                                    var i1Cookie = cookie_1[i1];
                                    cookies2 += (cookies2 === ''? '' : ';')+i1Cookie.name+'='+i1Cookie.value;
                                }
                                console.log(cookies2);
                                console.log('\n\n');
                                page.getContent(function(content){
                                    //console.log(typeof content);
                                    //content = content.toString();
                                    console.log(content);
                                    console.log('\n\n');
                                    var paramsVerify = getParamsToVerify2(content);
                                    //console.log(paramsVerify);
                                    console.log('Input the code: ');
                                    process.stdin.resume();
                                    process.stdin.setEncoding('utf8');
                                    process.stdin.on('data', function (text) {
                                        //console.log('received data:', util.inspect(text));
                                        if(text.toString().indexOf('\n') >= 0){
                                            text = text.toString().replace('\n', '');
                                            paramsVerify['emc'] = text;
                                            paramsVerify['save'] = 'Verify';
                                            console.log(paramsVerify);
                                            paramsVerify = qs.stringify(paramsVerify);
                                      
                                            console.log(paramsVerify);
                                            console.log('\n\n');
                                            
                                            var pageUrl2 = 'https://na12.salesforce.com/_ui/identity/verification/method/EmailVerificationFinishUi/e';
                                            page.open(pageUrl2, 'post', paramsVerify, function (status_2) {
                                                console.log(status_2);
                                                console.log('\n\n');
                                                page.getContent(function(content2){
                                                    console.log(content2);
                                                    console.log('\n\n');
                                                    
                                                    var pageUrl3 = 'https://na12.salesforce.com/home/home.jsp';
                                                    page.open(pageUrl3, function (status_3) {
                                                        console.log(status_3);
                                                        console.log('\n\n');
                                                        page.getContent(function(content3){
                                                            console.log(content3);
                                                            console.log('\n\n');
                                                        });
                                                    });
                                                });
                                            });
                                            
                                            
                                            /*
                                            var headers2 = {
                                                'Connection': 'keep-alive',
                                                'Content-Type': 'application/x-www-form-urlencoded',
                                                'Content-Length': Buffer.byteLength(data),
                                                'Cookie': cookies2
                                            };
                                            
                                            var options2 = {
                                                hostname: 'na12.salesforce.com',
                                                port: 443,
                                                path: '/_ui/identity/verification/method/EmailVerificationFinishUi/e',
                                                method: 'POST',
                                                headers: headers2
                                            };
                                            console.log(options2);
                                            console.log('\n\n');
                                            var req2 = https.request(options2, function(res2){   
                                                console.log("statusCode: ", res2.statusCode);
                                                console.log("headers: ", res2.headers);
                                                console.log('\n\n');

                                                res2.on('data', function(d2) { process.stdout.write(d2); });
                                            });
                                            req2.write(paramsVerify);
                                            req2.end();
                                            req2.on('error', function(e) {
                                                console.error(e);
                                            });
                                            */
                                        }
                                    });
                                });
                            });
                        });
                        return false;
                        
                        
                        var headers2 = {
                            'Connection':'keep-alive',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Content-Length': Buffer.byteLength(data)
                        };
                        // headers2['Cookie'] = cookies1;
                        var options2 = {
                            hostname: 'login.salesforce.com',
                            port: 443,
                            path: '/',
                            method: 'POST',
                            headers: headers2
                        };
                        console.log(options2);
                        console.log('\n\n');
                        var req2 = https.request(options2, function(res2){      
                            console.log("statusCode: ", res2.statusCode);
                            console.log("headers: ", res2.headers);
                            console.log('\n\n');
                            var na12Urls = res2.headers['location'].toString();
                            var na12Url = na12Urls.substr(0, na12Urls.indexOf('?'));
                            var na12Uri = na12Urls.replace(na12Url, '');
                            var loginHeaders = res2.headers['set-cookie'];
                            var headers3 = {
                                'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                'Accept-Encoding':'gzip, deflate',
                                'Accept-Language':'en-US,en;q=0.5',
                                'Host':'na12.salesforce.com',
                                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                'Connection':'keep-alive',
                                'Referer':'https://login.salesforce.com/'
                            };
                            var cookies2 = '';
                            for(var i=0; i< loginHeaders.length; i++){
                                var itemNa12Header = loginHeaders[i].split(';');
                                if(typeof itemNa12Header[0] !== undefined){
                                    var itemHeader = itemNa12Header[0];
                                    //cookies2 += (cookies2 === ''? '' : ';')+itemHeader;
                                    
                                    if(itemHeader.toString().indexOf('BrowserId') < 0 && itemHeader.toString().indexOf('login') < 0){
                                        var itemHeaderChild = itemHeader.split('=');
                                        var itemHeaderKey = itemHeaderChild[0];
                                        var itemHeaderValue = itemHeaderChild[1];
                                        if(itemHeaderKey !== 'oinfo'){
                                            cookies2 += (cookies2 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                                        } else{
                                            cookies2 += (cookies2 === ''? '' : ';')+itemHeader;
                                            //console.log(itemHeader);
                                        }
                                    }
                                   
                                }
                            }
                            //console.log(cookies2); return false;
                            headers3['Cookie'] = cookies2;
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
                                var cna12Urls = res3.headers['location'].toString();
                                var naHeaders = res3.headers['set-cookie'];
                                var cookies3 = '';
                                for(var i=0; i< naHeaders.length; i++){
                                    var itemNa12Header = naHeaders[i].split(';');
                                    if(typeof itemNa12Header[0] !== undefined){
                                        var itemHeader = itemNa12Header[0];
                                        var itemHeaderChild = itemHeader.split('=');
                                        var itemHeaderKey = itemHeaderChild[0];
                                        var itemHeaderValue = itemHeaderChild[1];
                                        if(itemHeaderKey !== 'lloopch_lpid' && itemHeaderKey !== 'lloopch_loid' && itemHeaderKey !== 'BrowserId' && itemHeaderKey !== 'inst'){
                                            if(itemHeaderKey !== 'oinfo'){
                                                cookies3 += (cookies3 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                                            } else{
                                                cookies3 += (cookies3 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                                            }
                                        }
                                    }
                                }
                                console.log(cookies3);
                                //return false;
                                
                                var cna12Urlsv = cna12Urls.toString().replace('https://na12.salesforce.com', '');
                                
                                // -- them vao de verify
                                var headers3v = {
                                    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                    'Accept-Encoding':'gzip, deflate',
                                    'Accept-Language':'en-US,en;q=0.5',
                                    'Host':'na12.salesforce.com',
                                    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                    'Connection':'keep-alive',
                                    'Referer':'https://login.salesforce.com/'
                                };
                                headers3v['Cookie'] = cookies3;
                                var options3v = {
                                    hostname: 'na12.salesforce.com',
                                    port: 443,
                                    path: cna12Urlsv,
                                    method: 'GET',
                                    cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                    requestCert: true,
                                    headers: headers3v
                                };
                                console.log(options3v);
                                var req3v = https.request(options3v, function(res3v) {
                                    console.log("statusCode: ", res3v.statusCode);
                                    console.log("headers: ", res3v.headers);
                                    console.log('\n\n');
                                    // res3v.on('data', function(d3v) { process.stdout.write(d3v); });
                                    
                                    var cna12UrlsVerify2 = res3v.headers['location'].toString();
                                    cna12UrlsVerify2 = cna12UrlsVerify2.toString().replace('https://na12.salesforce.com', '');
                                    // console.log(cna12UrlsVerify2);
                                    
                                    var headers3v2 = {
                                        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                        'Accept-Encoding':'gzip, deflate',
                                        'Accept-Language':'en-US,en;q=0.5',
                                        'Host':'na12.salesforce.com',
                                        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                        'Connection':'keep-alive',
                                        'Referer':'https://na12.salesforce.com'+cna12Urlsv
                                    };
                                    headers3v2['Cookie'] = cookies3;
                                    var options3v2 = {
                                        hostname: 'na12.salesforce.com',
                                        port: 443,
                                        path: cna12UrlsVerify2,
                                        method: 'GET',
                                        cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                        requestCert: true,
                                        headers: headers3v2
                                    };
                                    console.log(options3v2);
                                    var req3v2 = https.request(options3v2, function(res3v2) {
                                        console.log("statusCode: ", res3v2.statusCode);
                                        console.log("headers: ", res3v2.headers);
                                        console.log('\n\n');
                                        res3v2.on('data', function(d3v2) { process.stdout.write(d3v2); });
                                                                         
                                        var cna12UrlsVerify3 = res3v2.headers['location'].toString();
                                        cna12UrlsVerify3 = cna12UrlsVerify3.toString().replace('https://na12.salesforce.com', '');
                                        // console.log(cna12UrlsVerify2);

                                        var headers3v3 = {
                                            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                            'Accept-Encoding':'gzip, deflate',
                                            'Accept-Language':'en-US,en;q=0.5',
                                            'Host':'na12.salesforce.com',
                                            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                            'Connection':'keep-alive',
                                            'Referer':'https://na12.salesforce.com'+cna12UrlsVerify2
                                        };
                                        headers3v3['Cookie'] = cookies3;
                                        var options3v3 = {
                                            hostname: 'na12.salesforce.com',
                                            port: 443,
                                            path: cna12UrlsVerify3,
                                            method: 'GET',
                                            cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                            requestCert: true,
                                            headers: headers3v3
                                        };
                                        // console.log(options3v2);
                                        var req3v3 = https.request(options3v3, function(res3v3) {
                                            console.log("statusCode: ", res3v3.statusCode);
                                            console.log("headers: ", res3v3.headers);
                                            console.log('\n\n');
                                            // res3v3.on('data', function(d3v3) { process.stdout.write(d3v3); });
                                            var outputv3 = fs.createWriteStream(basePath+'res_verify.html');
                                            res3v3.pipe(zlib.createGunzip()).pipe(outputv3);
                                            outputv3.on('finish', function() {
                                                var fileNameTmp = basePath+'res_verify.html';
                                                var paramsVerify = getParamsToVerify(fileNameTmp);
                                                console.log('Input the code: ');
                                                process.stdin.resume();
                                                process.stdin.setEncoding('utf8');
                                                process.stdin.on('data', function (text) {
                                                    //console.log('received data:', util.inspect(text));
                                                    if(text.toString().indexOf('\n') >= 0){
                                                        text = text.toString().replace('\n', '');
                                                        paramsVerify['emc'] = text;
                                                        paramsVerify['save'] = 'Verify';
                                                        console.log(paramsVerify);
                                                        console.log('\n\n');
                                                        var dataVerify = qs.stringify(paramsVerify);
                                                        var headers3v4 = {
                                                            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                                            'Accept-Encoding':'gzip, deflate, br',
                                                            'Accept-Language':'en-US,en;q=0.5',
                                                            'Host':'na12.salesforce.com',
                                                            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                                            //'Connection':'keep-alive',
                                                            'Referer':'https://na12.salesforce.com'+decodeURIComponent(cna12UrlsVerify3),
                                                            'Content-Type': 'application/x-www-form-urlencoded',
                                                            'Content-Length': Buffer.byteLength(dataVerify)
                                                        };
                                                        headers3v4['Cookie'] = decodeURIComponent(cookies1+';'+cookies2+';'+cookies3);
                                                        console.log(headers3v4['Cookie']);
                                                        var options3v4 = {
                                                            hostname: 'na12.salesforce.com',
                                                            port: 443,
                                                            path: '/_ui/identity/verification/method/EmailVerificationFinishUi/e',
                                                            method: 'GET',
                                                            cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                                            requestCert: true,
                                                            headers: headers3v4
                                                        };
                                                        console.log(options3v4);
                                                        console.log('\n\n');
                                                        var req3v4 = https.request(options3v4, function(res3v4){      
                                                            console.log("statusCode: ", res3v4.statusCode);
                                                            console.log("headers: ", res3v4.headers);
                                                            console.log('\n\n');
                                                            
                                                            res3v4.on('data', function(d3v4) { process.stdout.write(d3v4); });
                                                        });
                                                        req3v4.write(dataVerify);
                                                        req3v4.end();
                                                        req3v4.on('error', function(e) {
                                                            console.error(e);
                                                        });
                                                    }
                                                });
                                            });
                                        });
                                        req3v3.end();
                                        req3v3.on('error', function(e) {
                                            console.error(e);
                                        });
                                    });
                                    req3v2.end();
                                    req3v2.on('error', function(e) {
                                        console.error(e);
                                    });
                                    
                                });
                                req3v.end();
                                req3v.on('error', function(e) {
                                    console.error(e);
                                });
                                
                                return false;
                                // -- ket thuc them vao de verify
                                
                                phantom.create(function (ph2) {//mMAKE SURE WE CAN RENDER https
                                    ph2.createPage(function (page2){
                                        page2.set('viewportSize', {width:1280,height:900}, function(){
                                            page2.set('clipRect', {top:0,left:0,width:1280,height:900}, function(){
                                                page2.open(cna12Urls, function(status2) {
                                                    console.log(status2);
                                                    page2.getCookies(function(cookie2){
                                                        console.log(cookie2);
                                                        var cookies4 = '';
                                                        for(var i1=0; i1<cookie2.length; i1++){
                                                            var i1Cookie = cookie2[i1];
                                                            cookies4 += (cookies4 === ''? '' : ';')+i1Cookie.name+'='+i1Cookie.value;
                                                        }
                                                        var headers5 = {
                                                            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                                            'Accept-Encoding':'gzip, deflate',
                                                            'Accept-Language':'en-US,en;q=0.5',
                                                            //'Host':'na12.salesforce.com',
                                                            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                                            //'Referer':'https://c.na12.content.force.com/',
                                                            'Connection':'keep-alive'
                                                        };
                                                        headers5['Cookie'] = cookies4;
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
                                                            var locationTmps = res5.headers['location'].toString();
                                                            var locationTmpUrl = locationTmps.substr(0, locationTmps.indexOf('?'));
                                                            var locationTmpUri = locationTmps.replace(locationTmpUrl, '');
                                                            var headers6 = {
                                                                'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                                                'Accept-Encoding':'gzip, deflate',
                                                                'Accept-Language':'en-US,en;q=0.5',
                                                                //'Host':'na12.salesforce.com',
                                                                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
                                                                //'Referer':'https://c.na12.content.force.com/',
                                                                'Connection':'keep-alive'
                                                            };

                                                            headers6['Cookie'] = cookies1+';'+cookies2+';'+cookies3;
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
                                                                headers7['Cookie'] = cookies1+';'+cookies2+';'+cookies3;
                                                                var options7 = {
                                                                    hostname: 'c.na12.visual.force.com',
                                                                    port: 443,
                                                                    path: '/visualforce/recsession'+locationTmpUri,
                                                                    method: 'GET',
                                                                    cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                                                    requestCert: true,
                                                                    headers: headers7
                                                                };
                                                                console.log(options7);
                                                                var req7 = https.request(options7, function(res7){
                                                                    console.log("statusCode: ", res7.statusCode);
                                                                    console.log("headers: ", res7.headers);
                                                                    console.log('\n\n');
                                                                    
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
                                                                                cookies8 += (cookies8 === ''? '' : ';')+itemHeaderKey+'='+itemHeaderValue;
                                                                            } else{
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
                                                                                    var cookies7 = cookies1+';'+cookies2+';'+cookies3;
                                                                                    response.writeHead(200, { 'Content-Type': contentType });
                                                                                    requestOracle(rmaNum, cookies7, cookies8, response);
                                                                                    break;
                                                                                }
                                                                                default:{
                                                                                    response.writeHead(404);
                                                                                    response.end("Error Command");
                                                                                }
                                                                            }
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
                                                });
                                            });
                                        });
                                    });
                                }, {
                                    dnodeOpts: {weak: false}
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
                });
            });
        });
    });
}, {
    dnodeOpts: {weak: false}
});

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
function sortObj( obj, order ) {
    "use strict";
    var key, tempArry = [], i, tempObj = {};
    for ( key in obj ) { tempArry.push(key); }
    tempArry.sort( function(a, b) { return a.toLowerCase().localeCompare( b.toLowerCase() ); } );
    if( order === 'desc' ) { 
        for ( i = tempArry.length - 1; i >= 0; i-- ) { tempObj[ tempArry[i] ] = obj[ tempArry[i] ]; }
    } else { for ( i = 0; i < tempArry.length; i++ ) { tempObj[ tempArry[i] ] = obj[ tempArry[i] ]; } }
    return tempObj;
}
function getParamsToVerify(file){
    try{
        var contents = fs.readFileSync(file, 'utf8');
        // console.log(contents);
        var inputHidden = matchAll(contents, /(<input type="hidden".*?\/>)/g);
        // console.log(inputHidden);
        var paramsResponse = {};
        for(var i9=0; i9<inputHidden.length; i9++){
            if(typeof inputHidden[i9] !== undefined){
                var itemI9 = inputHidden[i9];
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
                    paramsResponse[itemI9Name] = decodeURIComponent(itemI9Value.replace(/&amp;/g, '&'));
                }
            }
        }
        return paramsResponse;
    } catch(exx){ console.log(exx.message); return {}; }
}
function getParamsToVerify2(contents){
    try{
        // var contents = fs.readFileSync(file, 'utf8');
        //console.log('Read content: \n\n');
        //console.log(contents);
        var inputHidden = matchAll(contents.toString(), /(<input type="hidden".*?>)/g);
        //console.log(inputHidden);
        var paramsResponse = {};
        for(var i9=0; i9<inputHidden.length; i9++){
            if(typeof inputHidden[i9] !== undefined){
                var itemI9 = inputHidden[i9];
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
                            
                            itemI9Value = itemI9Value.substr(0, itemI9Value.length-2);
                            
                        }
                    }
                }
                if(itemI9Name !== ''){
                    paramsResponse[itemI9Name] = decodeURIComponent(itemI9Value.replace(/&amp;/g, '&'));
                }
            }
        }
        return paramsResponse;
    } catch(exx){ console.log(exx.message); return {}; }
}

function requestOracle(rmaNum, cookies7, cookies8, response){
	try{
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
                                /*
				var trHtmlList = matchAll(contents, /(<tr class=" dataRow even last first".*?\/tr>)/g);
				trHtmlList = trHtmlList.toString();
				if(trHtmlList.trim() === ''){ trHtmlList = matchAll(contents, /(<tr class=" dataRow odd last".*?\/tr>)/g); trHtmlList = trHtmlList.toString(); }
				if(trHtmlList.trim() === ''){ response.end("0"); return false; }
				var thHtmlList = matchAll(trHtmlList, /(<th scope="row".*?\/th>)/g);
				thHtmlList = thHtmlList.toString();
				var retUrl = thHtmlList.substr(thHtmlList.indexOf('href="')+6);
				retUrl = retUrl.substr(0, retUrl.indexOf('"'));
				retUrl = retUrl.replace('&amp;', '&');
				var clkRecordId = thHtmlList.substr(thHtmlList.indexOf('data-seclki="')+13);
				clkRecordId = clkRecordId.substr(0, clkRecordId.indexOf('"'));
				var clkIdHash = thHtmlList.substr(thHtmlList.indexOf('data-seclkh="')+13);
				clkIdHash = clkIdHash.substr(0, clkIdHash.indexOf('"'));
                                */
                                
                                var i6CaseNumberObj = getCaseNumberLink(contents);
                                if(typeof i6CaseNumberObj['href'] === 'undefined'){ response.end("0"); return false; }
                                var retUrl = i6CaseNumberObj['href'];
                                var clkRecordId = i6CaseNumberObj['data-seclki'];
                                var clkIdHash = i6CaseNumberObj['data-seclkh'];
                                
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
							try{
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
										try{
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
                                                                                                linkWDSupport = repairLinkWDSupport(linkWDSupport);
                                                                                                if(linkWDSupport === null || linkWDSupport === ''){ response.end("0"); return false; }
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
													try{
														if(res11.statusCode === 302 || res11.statusCode === 400){
                                                                                                                    response.writeHead(res11.statusCode);
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
													} catch(exx11){ console.log(exx11.message);  response.end("0"); }
												});
												req11.end();
												req11.on('error', function(e) {
													console.error(e);
												});
											});
										} catch(exx10){ console.log(exx10.message);  response.end("0"); }
									});
									req10.end();
									req10.on('error', function(e) {
										console.error(e);
									});
								});
							} catch(exx9){ console.log(exx9.message);  response.end("0"); }
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
	} catch(exx){ console.log(exx.message); response.end("0"); }
}
function repairLinkWDSupport(linkWDSupport){
    try{
        linkWDSupportUri = linkWDSupport.substr(0, linkWDSupport.indexOf('?')+1);
        linkWDSupportParams = linkWDSupport.substr(linkWDSupport.indexOf('?')+1);
        console.log(linkWDSupportUri);
        console.log(linkWDSupportParams);
        linkWDSupportParams = linkWDSupportParams.split('&');
        var linkWDSupportObj = {};
        if(typeof linkWDSupportParams !== 'object'){ console.log('error'); }
        linkWDSupportParams.forEach(function(wdParam) {
            try{
                var wdParam = wdParam.split('=');
                if(typeof wdParam === 'object'){
                    if(wdParam.length === 2){
                        linkWDSupportObj[wdParam[0]] = wdParam[1];
                    }
                }
            } catch(exx2){ console.log(exx2.message); }
        });
        var params = qs.stringify(linkWDSupportObj);
        var uri = linkWDSupportUri+params;
        return uri;
    } catch(exx){ console.log(exx.message); return null; }
}
function getCaseNumberLink(contents){
    try{
        //var contents = fs.readFileSync(file, 'utf8');
        var tableList = matchAll(contents, /<table class="list"[^>]*>([\s\S]*?)<\/table>/g);
        tableList = tableList[0];
        trList = matchAll(tableList, /<tr[^>]*>([\s\S]*?)<\/tr>/g);
        var shippingTableObj = new Array();
        var submitedList = {};
        var caseParams = {};
        for(var iship11=0; iship11<trList.length; iship11++){
            var shipTd11 = trList[iship11];
            shipTd11 = shipTd11.toString().replace('<th', '<td').replace('/th>', '/td>');
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
        // console.log(shippingTableObj);
        for(var i6=1; i6<shippingTableObj.length; i6++){
            var tdList = shippingTableObj[i6];
            var i6Status = tdList[7];
            if(i6Status.toString().trim().toLowerCase() !== 'closed'){
                var i6Link = tdList[1];
                var i6TimeOpened = tdList[9];
                i6TimeOpened = Date.parse(i6TimeOpened);
                var i7TimeModified = tdList[10];
                i7TimeModified = Date.parse(i7TimeModified);
                submitedList[i6TimeOpened] = i6Link;
            }
        }
        // console.log(submitedList);
        submitedList = sortObj(submitedList, 'desc');
        // console.log(submitedList);
        for(var i6Key in submitedList){
            if(submitedList.hasOwnProperty(i6Key)){
                var thHtmlList = submitedList[i6Key];
                thHtmlList = thHtmlList.toString();
                // console.log(thHtmlList);
                var retUrl = thHtmlList.substr(thHtmlList.indexOf('href="')+6);
                retUrl = retUrl.substr(0, retUrl.indexOf('"'));
                retUrl = retUrl.replace('&amp;', '&');
                var clkRecordId = thHtmlList.substr(thHtmlList.indexOf('data-seclki="')+13);
                clkRecordId = clkRecordId.substr(0, clkRecordId.indexOf('"'));
                var clkIdHash = thHtmlList.substr(thHtmlList.indexOf('data-seclkh="')+13);
                clkIdHash = clkIdHash.substr(0, clkIdHash.indexOf('"'));
                
                caseParams['href']  = retUrl;
                caseParams['data-seclki']  = clkRecordId;
                caseParams['data-seclkh']  = clkIdHash;
                // console.log(caseParams);
                break;
            }
        }
        console.log(caseParams);
        return caseParams;
    } catch(exx){
        console.log(exx.message);
        return '';
    }
}
function putOracleToArray(file, response){
    //var fileNameTmp = 'res_co11_6139929690.html';
    var result11Obj = {};
    var contents11 = fs.readFileSync(file, 'utf8');
    try{
        var rmaInfoTable = matchAll(contents11, /<table id="rmainfo"[^>]*>([\s\S]*?)<\/table>/g);
        rmaInfoTable = rmaInfoTable[0];
        var rmaInfoContent = rmaInfoTable.substr(rmaInfoTable.indexOf('<table'));
        // var rmaInfoTitle = rmaInfoTable.substr(0, rmaInfoTable.indexOf('<table'));
        // rmaInfoTitle = matchAll(rmaInfoTitle, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
        // rmaInfoTitle = rmaInfoTitle[0];
        // rmaInfoTitle = rmaInfoTitle.trim()+'(rmainfo)';
        var rmaInfoTitle = 'rmainfo';
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
        // console.log(result11Obj);
        // console.log('\n\n\n');
    } catch(exx){
        console.log(exx.message);
    }
    try{
        // var receivingDetailTitle = contents11.substr(contents11.indexOf('receivingdetail')-200, contents11.indexOf('receivingdetail'));
        // receivingDetailTitle = matchAll(receivingDetailTitle, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
        // receivingDetailTitle = receivingDetailTitle[0];
        // receivingDetailTitle = receivingDetailTitle.trim()+'(receivingdetail)';
        var receivingDetailTitle = 'receivingdetail';
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
        // console.log(result11Obj);
        // console.log('\n\n\n');
    } catch(exx){
        console.log(exx.message);
    }
    try{
        // var shippingDetailTitle = contents11.substr(contents11.indexOf('shippingdetail')-200, contents11.indexOf('shippingdetail'));
        // shippingDetailTitle = matchAll(shippingDetailTitle, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
        // shippingDetailTitle = shippingDetailTitle[0];
        // shippingDetailTitle = shippingDetailTitle.trim()+'(shippingdetail)';
        var shippingDetailTitle = 'shippingdetail';
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
        // console.log(result11Obj);
        // console.log('\n\n\n');
    } catch(exx){
        console.log(exx.message);
    }
    try{
        var resumeCombineContainer = contents11.substr(contents11.indexOf('rmainfo'));
        resumeCombineContainer = resumeCombineContainer.substr(0, resumeCombineContainer.indexOf('receivingdetail')-11);
        resumeCombineContainer = resumeCombineContainer.substr(resumeCombineContainer.indexOf('</table>')+30);
        var resumeCombine = resumeCombineContainer.substr(0, resumeCombineContainer.indexOf('</table>')+34);
        var resumeDetailCombine = resumeCombineContainer.substr(resumeCombineContainer.indexOf('</table>')+34);

        // var resumeCombineTitle = resumeCombine.substr(0, resumeCombine.indexOf('class="bgnormal"'));
        // resumeCombineTitle = matchAll(resumeCombineTitle, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
        // resumeCombineTitle = resumeCombineTitle[0];
        // resumeCombineTitle = resumeCombineTitle.trim()+'(resumerma)';
        var resumeCombineTitle = 'resumerma';
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
        // console.log(result11Obj);
        // console.log('\n\n\n');

        // var resumeDetailCombineTitle = resumeDetailCombine.substr(0, resumeDetailCombine.indexOf('class="bgnormal"'));
        // resumeDetailCombineTitle = matchAll(resumeDetailCombineTitle, /<strong[^>]*>([\s\S]*?)<\/strong>/g);
        // resumeDetailCombineTitle = resumeDetailCombineTitle[0];
        // resumeDetailCombineTitle = resumeDetailCombineTitle.trim()+'(resumedetail)';
        // resumeDetailCombineTitle = 'resumedetail';
        var resumeDetailCombineTitle = 'combinedetail';
        var resumeCombineDetailTable = matchAll(resumeDetailCombine, /<table[^>]*>([\s\S]*?)<\/table>/g);
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
        // console.log(result11Obj);
        // console.log('\n\n\n');
    } catch(exx){
        console.log(exx.message);
    }
    try{
        var creditMemo = contents11.substr(contents11.indexOf('receivingdetail')-11);
        creditMemo = creditMemo.substr(resumeCombineContainer.indexOf('</table>')+30);
        //console.log(creditMemo);

        var creditMemoTitle = 'creditmemo';
        var creditMemoTable = matchAll(creditMemo, /<table[^>]*>([\s\S]*?)<\/table>/g);
        creditMemoTable = creditMemoTable[0];
        var creditMemoContent = creditMemoTable.substr(creditMemoTable.indexOf('<table'));
        creditMemoContent = matchAll(creditMemoContent, /<tr[^>]*>([\s\S]*?)<\/tr>/g);
        var creditMemoTableObj = new Array();
        for(var irs11=0; irs11<creditMemoContent.length; irs11++){
            var rsTd11 = creditMemoContent[irs11];
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
            creditMemoTableObj.push(rsTrObj);
        }
        result11Obj[creditMemoTitle] = creditMemoTableObj;
        // console.log(result11Obj);
        // console.log('\n\n\n');
    } catch(exx){
        console.log(exx.message);
    }
    // return JSON.stringify(result11Obj);
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
