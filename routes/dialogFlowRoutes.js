'use strict';

const chatbot = require('../chatbot/chatbot');

module.exports = app => {

    app.get('/', (req, res) => {
        res.send({'hello': 'Johnny'})
    });

    app.post('/api/df_text_query', async (req, res) => {

        let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
        res.send(responses[0].queryResult);

    });

    app.post('/api/df_event_query', (req, res) => {
        res.send({'do': 'event query'})
    });
}