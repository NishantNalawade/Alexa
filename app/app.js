'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');
        var https = require('https');
const config = {
    logging: true,
};

const app = new App(config);
var ngrok_url = 'https://7a8094ec.ngrok.io' ;

// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        this.toIntent('status');
    },

    'status': function() {
        this.ask('Hey There, How can i help you');
    },
//    'saturday': function(sunday){
//        this.tell('Tomorrow is saturday Hurray!' + sunday.value);
//    },
    'last_status_overview': function(){          
              https.get(ngrok_url + '/status', (res) => {
              console.log('statusCode:', res.statusCode);
              console.log('headers:', res.headers);
            
              res.on('data', (d) => {
                var dataJson = d.toString('utf8');

                console.log("body: ", d.toString('utf8'));

              
               // process.stdout.write(d);
               
                console.log("Last status" +  d.toString('utf8'));
                this.ask(d.toString('utf8') + " Anything else you need");
              });
            
            }).on('error', (e) => {
              console.error(e); 
            this.tell('Error getting the Info');
            });
    },
	 'latest_product': function(){          
              https.get(ngrok_url + '/product', (res) => {
              console.log('statusCode:', res.statusCode);
              console.log('headers:', res.headers);
            
              res.on('data', (d) => {
                var dataJson = d.toString('utf8');

                console.log("body: ", d.toString('utf8'));

              
               // process.stdout.write(d);
               
                console.log("Last status" +  d.toString('utf8'));
                this.ask(d.toString('utf8') + " Anything else you need");
              });
            
            }).on('error', (e) => {
              console.error(e); 
            this.tell('Error getting the Info');
            });
    },
	
	 'service': function(){          
              https.get(ngrok_url + '/service', (res) => {
              console.log('statusCode:', res.statusCode);
              console.log('headers:', res.headers);
            
              res.on('data', (d) => {
                var dataJson = d.toString('utf8');

                console.log("body: ", d.toString('utf8'));

              
               // process.stdout.write(d);
               
                console.log("Last status" +  d.toString('utf8'));
                this.ask(d.toString('utf8') + " Anything else you need?");
              });
            
            }).on('error', (e) => {
              console.error(e); 
            this.tell('Error getting the Info');
            });
    },
	
    'metric_insights': function(){
              https.get(ngrok_url + '/metric_insights', (res) => {
              console.log('statusCode:', res.statusCode);
              console.log('headers:', res.headers);
            
              res.on('data', (d) => {
                var dataJson = d.toString('utf8');

                console.log("body: ", d.toString('utf8'));

              
               // process.stdout.write(d);
               
                console.log("Last status" +  d.toString('utf8'));
                this.ask(d.toString('utf8') + ". Anything else you need?");
              });
            
            }).on('error', (e) => {
              console.error(e); 
            this.tell('Error getting the Info');
            });
    },
    'commands': function(){
        this.ask("You can ask me: Tell me about last run, tell me the cluster type");
    },
    'AMAZON.CancelIntent': function(){
    
    this.tell("Adios");
    },
    
    'AMAZON.NoIntent': function(name) {
        this.ask('I dont know that. TO know available commands you can say what are the commands')
    }
});


module.exports.app = app;
