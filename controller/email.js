const nodemailer = require('nodemailer');


const hbs = require('nodemailer-express-handlebars')
const path = require('path')

//const encryptpass=require('./crypt-test')
const crypt = require('./Encryptdecrypt');
const encPassword = crypt.encrypt('parth22parth');
console.log(encPassword);
const decPassword=crypt.decrypt(encPassword);
console.log(decPassword);



exports.emailsend=(data)=>{
    console.log(data);
    console.log(data.auther);
   // const datareplace=data.replace(/[{}]/g, '');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'dbijayalaxmiparth@gmail.com',
        pass: decPassword,
    },
});

const mailOptions = {
    from: 'dbijayalaxmiparth@gmail.com',
    to: 'bijayalaxmijena9438@gmail.com',
    template: 'email',
    subject: 'hello world!',
    //html: JSON.stringify(data).replace(/[{}]/g, '')
    context:{
        title: data.title, // replace {{name}} with Adebola
        descriptions: data.descriptions ,// replace {{company}} with My Company
        auther:data.auther
    }
    
};
console.log(data.descriptions);
// transport.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(`Message sent: ${info}`);
//     console.log(info);
// });
//}
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./controller'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./controller'),
};
transport.use('compile', hbs(handlebarOptions))


transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    console.log(`Message sent: ${info}`);
    console.log(info);
});
}