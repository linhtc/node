var phantom = require('phantom');
var http = require('http');
var https = require('https');
var url  = require('url');
var qs = require('querystring');
var fs =    require('fs');
var zlib = require('zlib');
var basePath = '/var/www/html/wd-rma/files/';

var pageUrl = "https://account.microsoft.com/devices";
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
                        var cookies2 = getCookieStringPhan(cookie);
                        console.log(cookies2);
                        console.log('\n\n\n');
                        page.getContent(function(content){
                            console.log(content);
                            console.log('\n\n\n');
                            
                            
                            var fileNameTmp = basePath+'ms_login_complete.html';
                            fs.writeFile(fileNameTmp, content, function (err) {
                                if (err){ return console.log(err); }
                                console.log('Hello World > helloworld.txt');
                            });
                            
                            
                            return false;
                            
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