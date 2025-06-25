const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const mailersender =  require('./config/email-config')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    try {
        const response =  await mailersender.sendMail({
        from: ServerConfig.GMAIL_EMAIL,
        to: 'dikshasinghlodhi@gmail.com',
        subject: 'Test Email',
        text: 'succesful'
    })
    console.log(response,'res');
    } catch (error) {
        console.log(error);
        
    }
    
});
