'use strict';

const {Webhook} = require('jovo-framework');
const {app} = require('./app/app.js');

// =================================================================================
// Server Configuration
// =================================================================================

if (app.isWebhook()) {
    const port = process.env.PORT || 3000;
    Webhook.listen(port, () => {
        console.log(`Example server listening on port ${port}!`);
    });
    Webhook.post('/webhook', (req, res) => {
        app.handleWebhook(req, res);
    });
}

exports.handler = (event, context, callback) => {
    app.handleLambda(event, context, callback);
};

const express = require('express');
const bodyParser = require('body-parser');
// Initialize express server
const server = express();
server.use(bodyParser.json());
server.post('/chatbot', function(req, res){

  console.log(req.body)

  res.send({
    replies: [{
      type: 'text',
      content: 'Welcome to BDMA. This is from chatbot.',
    }], 
    conversation: {
      memory: { key: 'value' }
    }
  })

}); 
server.post('/', function(req, res){
    app.handleWebhook(req, res);
});
// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`App is listening on port ${PORT}`));