const mailer = require("nodemailer")

const transport = mailer.createTransport({
    service: "gmail",
    auth: {
        user: "mr.akpatel6585@gmail.com",
        pass: "iinjjqdrgjrrcaoc"
    }
});

module.exports.sendOtp = (to, otp) => {
    let mailOptn = {
        from: "mr.akpatel6585@gmail.com",
        to: to,
        subject: "Verification OPT",
        text: `Your verification OTP is ${otp}`
    }
    transport.sendMail(mailOptn, (err) => {
        console.log(err ? err : 'OTP send successfully')
    })
}

module.exports.managerPass = (to, email, pass) => {
    let mailOption = {
        to: to,
        from: "",
        subject: "your password and email",
        text: `your email is ${email} and your password for this is ${pass}`
    }
}