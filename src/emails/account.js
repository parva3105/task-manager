const sgMail = require('@sendgrid/mail')

const sendgripAPIKey = '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'

sgMail.setApiKey(sendgripAPIKey)

sgMail.send({
    to : "parvashah310501@gmail.com", 
    from: 'workmail.parvashah@gmail.com',
    subject : 'First Test Mail',
    text: 'I hope it finds You.'
})