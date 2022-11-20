import express, { Application, NextFunction, Request, Response } from 'express'
import SetupsUtils from './Utils/Setups.utils'
import sgMail from '@sendgrid/mail'
const app: Application = express()

SetupsUtils(app)

const Contact_me = (email: string, username: string, senderMessage: string) => {
    const API_Email = process.env.Send_Email_Api_Key as string
    sgMail.setApiKey(API_Email)

    const message = {
        to: 'mohamed.mostafa0699@gmail.com',
        from: `${email}`,
        subject: `${username}-${email}`,
        html: `
                            <strong>
                                Welocme to the app, ${username}. Let me know how you get along with the app.
                                ${senderMessage}
                            </strong>
                        `,
    }

    sgMail
        .send(message)
        .then(() => {
            console.log('Email Send ...')
        })
        .catch((err) => console.log(err))
}

app.post('/email', (req: Request, res: Response, next: NextFunction) => {
    try{
        const data = req.body;
        Contact_me(data.email, data.username, data.senderMessage)
        res.status(200).json(data)
        next()
    }catch(err){
        res.status(500).json({code: 500, status: "Error", message: err})
    }
})

export default app
