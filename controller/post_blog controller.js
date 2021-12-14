const { LONG } = require('mysql/lib/protocol/constants/types');
const connection = require('../config/db.config');
const inputt=require('./email');

exports.insertIntoBlog = (req, res) => {
    var datainsert=req.body;


    const qry = `insert into post(title,descriptions,auther,autherId) values('${req.body.title}','${req.body.descriptions}','${req.body.auther}','${req.body.autherId}')`
    //console.log(qry);
    connection.query(qry, (err, results, fields) => {
        
        if (!err) {
            return res.status(200).json({
                status: 1,
                message: results
                
            })
        

        }
        else {
            console.log(err);
        }
        //.emailsend(req.body);
        //console.log(`${req.body.title}`);

    })
    
    inputt.emailsend(datainsert);
}
exports.getAllBlog = (req, res) => {
    const qry = `select * from post`
    connection.query(qry, (err, rows, fields) => {
        if (!err) {
            return res.status(200).json({
                status: 1,
                message: rows
            })

        }
        else {
            console.log(err);
        }

    })
}
exports.getAllpostById = (req, res) => {
    const qry = `select * from post where post_Id=${req.params.post_id}`
    connection.query(qry, (err, rows, fields) => {
        if (!err) {
            return res.status(200).json({
                status: 1,
                message: rows
            })

        }
        else {
            console.log(err);
        }

    })
}
exports.DelpostById = (req, res) => {
    const qry = `Delete from post where post_Id=${req.params.post_id}`
    connection.query(qry, (err, rows, fields) => {
        if (!err) {
            return res.status(200).json({
                status: 1,
                message: rows
            })

        }
        else {
            console.log(err);
        }

    })
}
exports.getAllpostByautherId = (req, res) => {
    const qry = `select * from post where autherId=${req.params.autherId}`
    connection.query(qry, (err, rows, fields) => {
        if (!err) {
            return res.status(200).json({
                status: 1,
                message: rows
            })

        }
        else {
            console.log(err);
        }

    })
}
exports.updatepostById = (req, res) => {
    const qry = `update post set title='${req.body.title}',descriptions='${req.body.descriptions}',auther='${req.body.auther}', autherid='${req.body.autherid}' where post_Id=${req.body.post_id}`
    connection.query(qry, (err, rows, fields) => {
        if (!err) {
            return res.status(200).json({
                status: 1,
                message: rows
            })

        }
        else {
            console.log(err);
        }

    })
}