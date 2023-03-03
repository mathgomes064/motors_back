const nodemailer= require ("nodemailer");

const vehicle = nodemailer.createTransport({
    host : 'smtp.office365.com',
    port:'587',
    secure : false,
    auth: {
        user: 'kenzieMotorsGrupo13@hotmail.com',
        pass: 'organiza23#'
    }
});

vehicle.sendMail({
    from: 'Kenzie Motors<kenzieMotorsGrupo13@hotmail.com>',
    to: 'sofiaalage@gmail.com',
    subject: 'Recuperação de senha Kenzie Motors',
    html: '',
    text: '',
})
.then(()=> console.log("email enviado com sucesso"))
.catch((err) => console.log('erro a enviar email',err))


