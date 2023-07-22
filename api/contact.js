import sendEmail from "../service/emailService";

export default function (req, res) {
    sendEmail(req.body).then((rest) => {
        console.log('response when send email ', rest)
        res.status(200).json({
            status: "success",
            message: rest
        })
    }).catch(err => {
        console.error(err)
        res.status(500).json({
            status: "error",
            message: err
        })
    })
}