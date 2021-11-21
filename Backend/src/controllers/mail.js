const nodemailer= require("nodemailer");
const { claveMail }= require("../middleware/jwt.validate");


const mail= async (req, res, next) => {
    try {
        let transporter= nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "diego1234sapo@gmail.com",
        pass: claveMail,
    },
});
let mailOptions= {
    from: "Raíz de X",
    to: "francisco.disanzo@gmail.com",
    subject: "¿Olvidó su contraseña?",
    text: "¡Hola! Este es un mail de prueba...",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        res.status(500).send(error.message);
    } else {
        console.log("mail enviado")
        res.status(200).jsonp(req.body);
    }
})
    } catch (error) {
        return next(error)
    }

};

module.exports= {
mail,
};
