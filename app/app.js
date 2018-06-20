'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        this.toIntent('status');
    },

    'status': function() {
        this.ask('What more you need Guruji');
    },
//    'saturday': function(sunday){
//        this.tell('Tomorrow is saturday Hurray!' + sunday.value);
//    },
    'saturday': function(friday){
        getlatest();
         this.tell(' working Yea');
//        this.ask('Cool you live in' + friday.value + '. It\'s a nice place.'+ 'What Else You need Guruji');
    },
});



function getlatest() {
    var http = require("https");

var options = {
  "method": "GET",
  gzip:true,
  "hostname": "telcobigdata-test-margin-assurance-ui.cfapps.sap.hana.ondemand.com",
  "port": 443,
  "path": "/destination/SAP_BDPT_RSD/runsettingsdefinition/CalculationRuns?%24filter=LANGUAGE%20eq%20'en'%20and%20RUN_TYPE%20ne%20'UPLOAD'&%24orderby=CREATED_AT%20desc&%24top=1&%24skip=0&%24inlinecount=allpages&%24format=json",
  "headers": {
    "authorization": "Basic bmlzaGFudC5uYWxhd2FkZUBzYXAuY29tOkZyb3N0NFJlYWwh",
    "cache-control": "no-cache",
    "token": "b270d99c-c77a-8231-10b9-35fbf5cc2470"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();}

module.exports.app = app;
