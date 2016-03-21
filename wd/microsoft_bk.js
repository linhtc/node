var phantom = require('phantom');
var http = require('http');
var https = require('https');
var url  = require('url');
var qs = require('querystring');
var fs =    require('fs');
var zlib = require('zlib');
var basePath = '/var/www/html/wd-rma/files/';

var pageUrl = "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=12&ct=1456285182&rver=6.5.6509.0&wp=MBI_SSL&wreply=https:%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signin%3Fru%3Dhttps%253a%252f%252faccount.microsoft.com%252f%253frefd%253daccount.microsoft.com%2526refp%253dhome-about-index&lc=1033&id=292666";
phantom.create(function (ph) {//mMAKE SURE WE CAN RENDER https
    ph.createPage(function (page) {
        //CREATE PAGE OBJECT
        page.set('viewportSize', {width:1280,height:900}, function(){
            page.set('clipRect', {top:0,left:0,width:1280,height:900}, function(){
                //OPEN PAGE
                page.open(pageUrl, function(status) {
                    console.log(status);
                    page.getCookies(function(cookie){
                        console.log(cookie);
                        var cookies2 = '';
                        for(var i1=0; i1<cookie.length; i1++){
                            var i1Cookie = cookie[i1];
                            cookies2 += (cookies2 === ''? '' : ';')+i1Cookie.name+'='+i1Cookie.value;
                        }
                        console.log(cookies2);
                        page.getContent(function(content){
                            console.log(content);
                            console.log('\n\n\n');
                            var PPFT = matchAll(content, /(<input type="hidden" name="PPFT".*?\/>)/g);
                            PPFT = PPFT[0].toString();
                            PPFT = PPFT.substr(PPFT.indexOf('value="')+7);
                            PPFT = PPFT.substr(0, PPFT.indexOf('"'));
                            console.log('\n\n\n');
                            console.log(PPFT);
                            console.log('\n\n\n');
                            //return false;
                            var url = 'https://login.live.com/ppsecure/post.srf?wa=wsignin1.0&rpsnv=12&ct=1456370191&rver=6.5.6509.0&wp=MBI_SSL&wreply=https:%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signin%3Fru%3Dhttps%253a%252f%252faccount.microsoft.com%252f%253frefd%253daccount.microsoft.com%2526refp%253dhome-about-index&lc=1033&id=292666&bk=1456370196&uaid=eb3861e0013047829d37b815d0e559f3&pid=0';
                            var data = qs.stringify({
                                loginfmt:'itestgreystone@hotmail.com',
                                passwd:'abc123ABC',
                                KMSI:1,
                                login:'itestgreystone@hotmail.com',
                                type:11,
                                PPFT:PPFT,
                                PPSX:'Pass',
                                idsbho:1,
                                sso:1,
                                NewUser:1,
                                LoginOptions:1,
                                i1:0,
                                i2:1,
                                i3:28722,
                                i4:0,
                                i7:0,
                                i12:1,
                                i13:1,
                                i14:343,
                                i15:1280,
                                i17:0,
                                i18:'__Login_Strings|1,__Login_Core|1,',
                                i16:'{"navigationStart":1456370184342,"unloadEventStart":0,"unloadEventEnd":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1456370184342,"domainLookupStart":1456370184364,"domainLookupEnd":1456370184367,"connectStart":1456370184367,"connectEnd":1456370184367,"requestStart":1456370185336,"responseStart":1456370185570,"responseEnd":1456370185572,"domLoading":1456370185580,"domInteractive":1456370187410,"domContentLoadedEventStart":1456370187411,"domContentLoadedEventEnd":1456370187579,"domComplete":1456370187581,"loadEventStart":1456370187581,"loadEventEnd":1456370187659}',
                                i19:28726
                            });
                            var headers2 = {
                                'Host': 'login.live.com',
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
                                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                'Accept-Language': 'en-US,en;q=0.5',
                                'Accept-Encoding': 'gzip, deflate, br',
                                'Referer': url,
                                'Cookie': cookies2,
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Content-Length': data.length
                            };
                            var options2 = {
                                hostname: 'login.live.com',
                                port: 443,
                                path: '/ppsecure/post.srf?wa=wsignin1.0&rpsnv=12&ct=1456285182&rver=6.5.6509.0&wp=MBI_SSL&wreply=https:%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signin%3Fru%3Dhttps%253a%252f%252faccount.microsoft.com%252f%253frefd%253daccount.microsoft.com%2526refp%253dhome-about-index&lc=1033&id=292666&bk=1456393786&uaid=f1df7bffc578405fab4394b9822a725e&pid=0',
                                method: 'POST',
                                cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                requestCert: true,
                                headers: headers2
                            };
                            var req2 = https.request(options2, function(res2) {        
                                console.log("statusCode: ", res2.statusCode);
                                console.log("headers: ", res2.headers);
                                console.log('\n\n\n');
                                
                                if(res2.headers['content-encoding'] === 'gzip'){
                                    var fileNameTmp = basePath+'ms_login.html';
                                    var output2 = fs.createWriteStream(fileNameTmp);
                                    res2.pipe(zlib.createGunzip()).pipe(output2);
                                    output2.on('finish', function() {
                                        var contents = fs.readFileSync(fileNameTmp, 'utf8');
                                        console.log(contents);
                                        console.log('\n\n\n');
                                        
                                        var urlCompleteSignin = contents.substr(contents.indexOf('action="')+8);
                                        urlCompleteSignin = urlCompleteSignin.substr(0, urlCompleteSignin.indexOf('" method="post"'));
                                        var uriCompleteSignin = urlCompleteSignin.replace('https://account.microsoft.com', '');
                                        console.log(urlCompleteSignin);
                                        console.log(uriCompleteSignin);
                                        console.log('\n\n\n');
                                        
                                        var data3 = getParamCompleteSignin(contents);
                                        data3 = qs.stringify(data3);
                                        var cookies3 = getCookieString(res2.headers['set-cookie']);
                                        var headers3 = {
                                            'Host':'account.microsoft.com',
                                            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
                                            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                            'Accept-Language':'en-US,en;q=0.5',
                                            'Accept-Encoding':'gzip, deflate, br',
                                            'Referer': url,
                                            'Cookie': cookies3,
                                            'Content-Type': 'application/x-www-form-urlencoded',
                                            'Content-Length': data3.length
                                        };
                                        var options3 = {
                                            hostname: 'account.microsoft.com',
                                            port: 443,
                                            path: uriCompleteSignin,
                                            method: 'POST',
                                            cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                            requestCert: true,
                                            headers: headers3
                                        };
                                        console.log(options3);
                                        console.log('\n\n\n');
                                        var req3 = https.request(options3, function(res3) {        
                                            console.log("statusCode: ", res3.statusCode);
                                            console.log("headers: ", res3.headers);
                                            console.log('\n\n\n');
                                            if(res3.headers['content-encoding'] === 'gzip'){
                                                var fileNameTmp = basePath+'ms_login_complete.html';
                                                var output3 = fs.createWriteStream(fileNameTmp);
                                                res3.pipe(zlib.createGunzip()).pipe(output3);
                                            } else{
                                                res3.on('data', function(d3) { /*process.stdout.write(d3);*/ console.log('\n\n\n'); });
                                                
                                                var url4 = res3.headers['location'].toString();
                                                var uri4 = url4.replace('https://login.live.com', '');
                                                var cookies4 = getCookieString(res3.headers['set-cookie']);
                                                
                                                var headers4 = {
                                                    'Host':'login.live.com',
                                                    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
                                                    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                                    'Accept-Language':'en-US,en;q=0.5',
                                                    'Accept-Encoding':'gzip, deflate, br',
                                                    'Referer': url,
                                                    'Cookie': cookies2+';'+cookies3+';'+cookies4
                                                };
                                                var options4 = {
                                                    hostname: 'login.live.com',
                                                    port: 443,
                                                    path: uri4,
                                                    method: 'GET',
                                                    cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                                    requestCert: true,
                                                    headers: headers4
                                                };
                                                console.log(options4);
                                                console.log('\n\n\n');
                                                var req4 = https.request(options4, function(res4) {        
                                                    console.log("statusCode: ", res4.statusCode);
                                                    console.log("headers: ", res4.headers);
                                                    console.log('\n\n\n');
                                                    if(res4.headers['content-encoding'] === 'gzip'){
                                                        var fileNameTmp = basePath+'ms_login_2.html';
                                                        var output4 = fs.createWriteStream(fileNameTmp);
                                                        res4.pipe(zlib.createGunzip()).pipe(output4);
                                                        
                                                        output4.on('finish', function() {
                                                            var contents = fs.readFileSync(fileNameTmp, 'utf8');
                                                            console.log(contents);
                                                            console.log('\n\n\n');
                                                            
                                                            var url5 = contents.substr(contents.indexOf('action="')+8);
                                                            url5 = url5.substr(0, url5.indexOf('" method="post"'));
                                                            var uri5 = url5.replace('https://account.microsoft.com', '');
                                                            console.log(url5);
                                                            console.log(uri5);
                                                            console.log('\n\n\n');
                                                            
                                                            var data5 = getParamCompleteSignin(contents);
                                                            data5 = qs.stringify(data5);
                                                            var cookies5 = getCookieString(res4.headers['set-cookie']);
                                                            
                                                            var headers5 = {
                                                                'Host':'account.microsoft.com',
                                                                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
                                                                'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                                                'Accept-Language':'en-US,en;q=0.5',
                                                                'Accept-Encoding':'gzip, deflate, br',
                                                                'Referer': url,
                                                                'Cookie': cookies2+';'+cookies3+';'+cookies4+';'+cookies5,
                                                                'Content-Type': 'application/x-www-form-urlencoded',
                                                                'Content-Length': data5.length
                                                            };
                                                            var options5 = {
                                                                hostname: 'account.microsoft.com',
                                                                port: 443,
                                                                path: uri5,
                                                                method: 'POST',
                                                                cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                                                requestCert: true,
                                                                headers: headers5
                                                            };
                                                            console.log(options5);
                                                            console.log('\n\n\n');
                                                            var req5 = https.request(options5, function(res5) {        
                                                                console.log("statusCode: ", res5.statusCode);
                                                                console.log("headers: ", res5.headers);
                                                                console.log('\n\n\n');
                                                                if(res5.headers['content-encoding'] === 'gzip'){
                                                                    var fileNameTmp = basePath+'ms_login_3.html';
                                                                    var output5 = fs.createWriteStream(fileNameTmp);
                                                                    res5.pipe(zlib.createGunzip()).pipe(output5);
                                                                    
                                                                } else{
                                                                    res5.on('data', function(d5) { /*process.stdout.write(d5);*/ console.log('\n\n\n'); });
                                                                    var url6 = res5.headers['location'].toString();
                                                                    var uri6 = url6.replace('https://account.microsoft.com', '');
                                                                    var cookies6 = getCookieString(res5.headers['set-cookie']);                                                                    
                                                                    
                                                                    var headers6 = {
                                                                        'Host':'account.microsoft.com',
                                                                        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
                                                                        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                                                        'Accept-Language':'en-US,en;q=0.5',
                                                                        'Accept-Encoding':'gzip, deflate, br',
                                                                        'Referer': url,
                                                                        'Cookie': cookies2+';'+cookies3+';'+cookies4+';'+cookies5+';'+cookies6
                                                                    };
                                                                    var options6 = {
                                                                        hostname: 'account.microsoft.com',
                                                                        port: 443,
                                                                        path: uri6,
                                                                        method: 'GET',
                                                                        cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                                                        requestCert: true,
                                                                        headers: headers6
                                                                    };
                                                                    console.log(options6);
                                                                    console.log('\n\n\n');
                                                                    var req6 = https.request(options6, function(res6) {      
                                                                        console.log("statusCode: ", res6.statusCode);
                                                                        console.log("headers: ", res6.headers);
                                                                        console.log('\n\n\n');
                                                                        if(res6.headers['content-encoding'] === 'gzip'){
                                                                            var fileNameTmp = basePath+'ms_login_4.html';
                                                                            var output6 = fs.createWriteStream(fileNameTmp);
                                                                            res6.pipe(zlib.createGunzip()).pipe(output6);
                                                                            
                                                                            
                                                                            console.log('\n\n\n end.... \n\n\n');
                                                                            return false;
                                                                            
                                                                            
                                                                        } else{
                                                                            res6.on('data', function(d6) { process.stdout.write(d6); console.log('\n\n\n'); });
                                                                            
                                                                            
                                                                            console.log('\n\n\n d6.... \n\n\n');
                                                                            
                                                                            var url7 = res6.headers['location'].toString();
                                                                            var uri7 = url7.replace('https://login.live.com', '');
                                                                            var cookies7 = getCookieString(res6.headers['set-cookie']);   
                                                                            
                                                                            var headers7 = {
                                                                                'Host':'login.live.com',
                                                                                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
                                                                                'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                                                                'Accept-Language':'en-US,en;q=0.5',
                                                                                'Accept-Encoding':'gzip, deflate, br',
                                                                                'Referer': url,
                                                                                'Cookie': cookies2+';'+cookies3+';'+cookies4+';'+cookies5+';'+cookies6+';'+cookies7
                                                                            };
                                                                            var options7 = {
                                                                                hostname: 'login.live.com',
                                                                                port: 443,
                                                                                path: uri7,
                                                                                method: 'POST',
                                                                                cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                                                                requestCert: true,
                                                                                headers: headers7
                                                                            };
                                                                            
                                                                            console.log(options7);
                                                                            console.log('\n\n\n');
                                                                                                                                                      
                                                                            
                                                                            var req7 = https.request(options7, function(res7) {        
                                                                                console.log("statusCode: ", res7.statusCode);
                                                                                console.log("headers: ", res7.headers);
                                                                                console.log('\n\n\n');
                                                                                if(res7.headers['content-encoding'] === 'gzip'){
                                                                                    var fileNameTmp = basePath+'ms_login_7.html';
                                                                                    var output7 = fs.createWriteStream(fileNameTmp);
                                                                                    res7.pipe(zlib.createGunzip()).pipe(output7);
                                                                                    output7.on('finish', function() {
                                                                                        var contents = fs.readFileSync(fileNameTmp, 'utf8');
                                                                                        console.log(contents);
                                                                                        console.log('\n\n\n');

                                                                                        var url8 = contents.substr(contents.indexOf('action="')+8);
                                                                                        url8 = url8.substr(0, url8.indexOf('" method="post"'));
                                                                                        var uri8 = url5.replace('https://account.microsoft.com', '');
                                                                                        console.log(uri8);
                                                                                        console.log(uri8);
                                                                                        console.log('\n\n\n');

                                                                                        var data8 = getParamCompleteSignin(contents);
                                                                                        data8 = qs.stringify(data8);
                                                                                        var cookies8 = getCookieString(res7.headers['set-cookie']);
                                                                                        
                                                                                        var headers8 = {
                                                                                            'Host':'account.microsoft.com',
                                                                                            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
                                                                                            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                                                                            'Accept-Language':'en-US,en;q=0.5',
                                                                                            'Accept-Encoding':'gzip, deflate, br',
                                                                                            'Referer': url,
                                                                                            'Cookie': cookies2+';'+cookies3+';'+cookies4+';'+cookies5+';'+cookies6+';'+cookies7+';'+cookies8,
                                                                                            'Content-Type': 'application/x-www-form-urlencoded',
                                                                                            'Content-Length': data8.length
                                                                                        };
                                                                                        var options8 = {
                                                                                            hostname: 'account.microsoft.com',
                                                                                            port: 443,
                                                                                            path: uri8,
                                                                                            method: 'POST',
                                                                                            cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                                                                            requestCert: true,
                                                                                            headers: headers8
                                                                                        };
                                                                                        console.log(options8);
                                                                                        console.log('\n\n\n');
                                                                                        var req8 = https.request(options8, function(res8) {        
                                                                                            console.log("statusCode: ", res8.statusCode);
                                                                                            console.log("headers: ", res8.headers);
                                                                                            console.log('\n\n\n');
                                                                                            if(res8.headers['content-encoding'] === 'gzip'){
                                                                                                var fileNameTmp = basePath+'ms_login_8.html';
                                                                                                var output8 = fs.createWriteStream(fileNameTmp);
                                                                                                res8.pipe(zlib.createGunzip()).pipe(output8);

                                                                                            } else{
                                                                                                res8.on('data', function(d8) { process.stdout.write(d8); console.log('\n\n\n'); });
                                                                                                
                                                                                                console.log('\n\n\n d8.... \n\n\n');
                                                                            
                                                                                                var url9 = res8.headers['location'].toString();
                                                                                                var uri9 = url9.replace('https://account.microsoft.com', '');
                                                                                                var cookies9 = getCookieString(res8.headers['set-cookie']);   

                                                                                                var headers9 = {
                                                                                                    'Host':'account.microsoft.com',
                                                                                                    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
                                                                                                    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                                                                                                    'Accept-Language':'en-US,en;q=0.5',
                                                                                                    'Accept-Encoding':'gzip, deflate, br',
                                                                                                    'Referer': url,
                                                                                                    'Cookie': cookies2+';'+cookies3+';'+cookies4+';'+cookies5+';'+cookies6+';'+cookies7+';'+cookies8+';'+cookies9
                                                                                                };
                                                                                                var options9 = {
                                                                                                    hostname: 'account.microsoft.com',
                                                                                                    port: 443,
                                                                                                    path: uri9,
                                                                                                    method: 'POST',
                                                                                                    cert: fs.readFileSync(basePath+'VeriSignClass3PublicPrimaryCertificationAuthority-G5.crt'),
                                                                                                    requestCert: true,
                                                                                                    headers: headers9
                                                                                                };
                                                                                                
                                                                                                console.log(options9);
                                                                                                console.log('\n\n\n');
                                                                                                
                                                                                                var req9 = https.request(options9, function(res9) {        
                                                                                                    console.log("statusCode: ", res9.statusCode);
                                                                                                    console.log("headers: ", res9.headers);
                                                                                                    console.log('\n\n\n');
                                                                                                    if(res9.headers['content-encoding'] === 'gzip'){
                                                                                                        var fileNameTmp = basePath+'ms_login_9.html';
                                                                                                        var output9 = fs.createWriteStream(fileNameTmp);
                                                                                                        res9.pipe(zlib.createGunzip()).pipe(output9);
                                                                                                    } else{
                                                                                                        var body = '';
                                                                                                        res9.on('data', function(chunk) {
                                                                                                            body += chunk;
                                                                                                        });
                                                                                                        res9.on('end', function() {
                                                                                                            console.log('\n\n\n\n\n\n\n\n\n');
                                                                                                            //console.log(body);
                                                                                                            var fileNameTmp = basePath+'ms_login_9s.html';
                                                                                                            fs.writeFile(fileNameTmp, body, function (err) {
                                                                                                                if (err){ return console.log(err); }
                                                                                                                console.log('Hello World > helloworld.txt');
                                                                                                            });
                                                                                                        });
                                                                                                    }
                                                                                                });
                                                                                                req9.end();
                                                                                                req9.on('error', function(e) { console.error(e); });
                                                                                            }
                                                                                        });
                                                                                        req8.write(data8);
                                                                                        req8.end();
                                                                                        req8.on('error', function(e) { console.error(e); });
                                                                                    });                                                                                    
                                                                                } else{
                                                                                    console.log('\n\n\n d7.... \n\n\n');
                                                                                    console.log('-------------------------------------------------------------------');
                                                                                    res7.on('data', function(d7) { 
                                                                                        // process.stdout.write(d7); 
                                                                                        // console.log('\n\n\n');
                                                                                        buffer = new Buffer(d7);
                                                                                        var pathTmp = basePath+"ms_devices.html";
                                                                                        fs.open(pathTmp, 'w', function(err, fd) {
                                                                                            if (err) { throw 'error opening file: ' + err; }
                                                                                            fs.write(fd, buffer, 0, buffer.length, null, function(err) {
                                                                                                if (err) throw 'error writing file: ' + err;
                                                                                                fs.close(fd, function() {
                                                                                                    console.log('file written');
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                }
                                                                            });
                                                                            req7.end();
                                                                            req7.on('error', function(e) { console.error(e); });   
                                                                        }
                                                                    });
                                                                    req6.end();
                                                                    req6.on('error', function(e) { console.error(e); });                                                                    
                                                                }
                                                            });
                                                            req5.write(data5);
                                                            req5.end();
                                                            req5.on('error', function(e) { console.error(e); });
                                                            
                                                        });
                                                        
                                                    } else{
                                                        res4.on('data', function(d4) { /*process.stdout.write(d4);*/ console.log('\n\n\n'); });
                                                    }
                                                });
                                                // req4.write(data3);
                                                req4.end();
                                                req4.on('error', function(e) { console.error(e); });
                                            }
                                        });
                                        req3.write(data3);
                                        req3.end();
                                        req3.on('error', function(e) { console.error(e); });
                                    });
                                } else{
                                    res2.on('data', function(d2) { /*process.stdout.write(d2);*/ console.log('\n\n\n'); });
                                }
                            });
                            req2.write(data);
                            req2.end();
                            req2.on('error', function(e) { console.error(e); });
                        });
                    });
                });
            });
        });
    });
}, { dnodeOpts: {weak: false }});

function matchAll(str, regex) {
    var res = []; var m;
    if (regex.global) { while (m = regex.exec(str)) { res.push(m[1]); } } else { if (m = regex.exec(str)) { res.push(m[1]); } }
    return res;
}
function getParamCompleteSignin(contents){
    try{
        // var contents = fs.readFileSync(file, 'utf8');
        //console.log('Read content: \n\n');
        //console.log(contents);
        var inputHidden = matchAll(contents.toString(), /(<input type="hidden".*?>)/g);
        console.log(inputHidden);
        console.log('\n\n\n');
        var paramsResponse = {};
        for(var i9=0; i9<inputHidden.length; i9++){
            if(typeof inputHidden[i9] !== undefined){
                var itemI9 = inputHidden[i9];
                itemI9 = itemI9.toString();
                console.log(itemI9);
                console.log('\n\n\n');
                
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