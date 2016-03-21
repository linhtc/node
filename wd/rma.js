var https = require('https');
var qs = require('querystring');
var fs =    require('fs');
var zlib = require('zlib');
var mysql = require("mysql");
var url  = require('url');
var http = require('http');
var net = require('net');
var phantom = require('phantom');

var basePath = '/var/www/html/wd-rma/files/';
var fileNameTmp = '/var/www/html/wd-rma/files/res_co6_2905160305.html';
var fileNameTmp = '/var/www/html/wd-rma/files/err1.html';
var fileNameTmp = '/var/www/html/wd-rma/files/res_co6_5873178383.html';
var fileNameTmp = '/var/www/html/wd-rma/files/ms_login.html';

var contents = fs.readFileSync(fileNameTmp, 'utf8');
contents = contents.toString();
var urlCompleteSignin = contents.substr(contents.indexOf('action="')+8);
//urlCompleteSignin = urlCompleteSignin.substr(0, urlCompleteSignin.indexOf('" method="post"'));
//console.log(urlCompleteSignin);
//console.log('\n\n\n');

//$cookieArray = new Array();
//$cookieArray.push('a');
//$cookieArray.push('b');
//pushCookieToServer($cookieArray);

signOut();

function signOut(){
    phantom.create(function (ph) {//mMAKE SURE WE CAN RENDER https
        ph.createPage(function (page) {
            //CREATE PAGE OBJECT
            page.set('viewportSize', {width:1280,height:900}, function(){
                page.set('clipRect', {top:0,left:0,width:1280,height:900}, function(){
                var d = new Date();
                    var currentTime = d.getTime(); 
                    var url3 = 'https://login.live.com/logout.srf?ct='+currentTime+'&rver=6.5.6509.0&lc=1033&id=292666&ru=https:%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signout%3Fru%3Dhttps%253a%252f%252faccount.microsoft.com%252f%253frefd%253daccount.microsoft.com%2526refp%253dhome-about-index&uictx=me';
                    console.log(url3);
                    page.open(url3, function(status) {
                        console.log(status);
                        page.getCookies(function(cookie){
                            console.log(cookie);
                            console.log('\n\n\n');
                            page.getContent(function(content){
                                //console.log(content);
                                //console.log('\n\n\n');
                                var fileNameTmp = basePath+'ms4.html';
                                fs.writeFile(fileNameTmp, content, function (err) {
                                    if (err){ return console.log(err); }
                                    console.log('\n\n\n');
                                    console.log('Hello World > 4');
                                    console.log('\n\n\n');
                                });
                                
                                setTimeout(function(){
                                    var url4 = 'https://account.microsoft.com/auth/complete-signout?ru=https%3a%2f%2faccount.microsoft.com%2f%3frefd%3daccount.microsoft.com%26refp%3dhome-about-index&lc=1033';
                                    console.log(url4);
                                    page.open(url4, function(status) {
                                        console.log(status);
                                        page.getCookies(function(cookie){
                                            console.log(cookie);
                                            console.log('\n\n\n');
                                            page.getContent(function(content){
                                                console.log('\n\n\n');
                                                console.log(content);
                                                console.log('\n\n\n');
                                                var fileNameTmp = basePath+'ms5.html';
                                                fs.writeFile(fileNameTmp, content, function (err) {
                                                    if (err){ return console.log(err); }
                                                    console.log('\n\n\n');
                                                    console.log('Hello World > 5');
                                                    console.log('\n\n\n');
                                                });
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
    }, { dnodeOpts: {weak: false }});
}

function checkCookieToServer(){
    var headers = {
        'Host': '172.16.21.3',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br'
    };
    var options = {
        hostname: '172.16.21.3',
        port: 80,
        path: '/test/microsoft.php?imei=check',
        method: 'POST',
        headers: headers
    };
    
    var req = http.request(options, function(res) {        
        console.log("statusCode: ", res.statusCode);
        console.log("headers: ", res.headers);
        console.log('\n\n\n');
        var body = '';
        res.on('data', function(chunk) { body += chunk; });
        res.on('end', function() {
            console.log(body);
            if(body.indexOf('Lost Token') > 0){
                console.log('\n\n\n');
                console.log('Lost Token -> Relogin...');
            }
        });
    });
    req.end(function(){
        setTimeout(function(){ checkCookieToServer(); }, 30000);
    });
    req.on('error', function(e) { console.error(e); });
}

function pushCookieToServer($cookieArray){
    var data = new Array();
    try{ data = JSON.stringify($cookieArray); } catch(exx){ }
    var headers = {
        'Host': '172.16.21.3',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:44.0) Gecko/20100101 Firefox/44.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length
    };
    var options = {
        hostname: '172.16.21.3',
        port: 80,
        path: '/test/microsoft_set_cookie.php',
        method: 'POST',
        headers: headers
    };
    
    var req = http.request(options, function(res) {        
        console.log("statusCode: ", res.statusCode);
        console.log("headers: ", res.headers);
        console.log('\n\n\n');
    });
    req.write(data);
    req.end();
    req.on('error', function(e) { console.error(e); });
}

//getParamCompleteSignin(contents);

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
                    paramsResponse[itemI9Name] = itemI9Value.replace(/&amp;/g, '&');//decodeURIComponent(itemI9Value.replace(/&amp;/g, '&'));
                }
            }
        }
        return paramsResponse;
    } catch(exx){ console.log(exx.message); return {}; }
}




//var paramsVerify = getParamsToVerify(fileNameTmp);
//paramsVerify['emc'] = 17723;
//paramsVerify['save'] = 'Verify';
//console.log(paramsVerify);

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
                    paramsResponse[itemI9Name] = itemI9Value;
                }
            }
        }
        return paramsResponse;
    } catch(exx){ console.log(exx.message); return {}; }
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
    return JSON.stringify(result11Obj);
    response.end(JSON.stringify(result11Obj));
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

function randomInt(low, high){
    return Math.floor(Math.random() * (high - low) + low);
}

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