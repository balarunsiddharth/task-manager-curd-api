const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: 'balarunsiddarth@gmail.com',
    from: 'elabbalarun@gmail.com',
    subject: 'This is my first sendgrid mail',
    text: 'It is working'
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'elabbalarun@gmail.com',
    subject: 'Canclation email',
    text: 'Your account has been deleted. Please confirm thats you or not.'
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
