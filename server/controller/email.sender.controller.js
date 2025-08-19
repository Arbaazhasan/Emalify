import asyncCatchHandler from "../utils/asyncCatchHandler.js";
import nodemailer from "nodemailer";
import errorHandler from "../utils/errorHandler.js";

export const messageSenderController = asyncCatchHandler(async (req, res, next) => {

    const { senderName, senderEmail, receiverEmail, subject, message } = req.body;

    if (!receiverEmail)
        return next(new errorHandler("Receiver address list is empty!", 400, "messageSenderController"))

    const file = req.file;

    if (!file) return next(new errorHandler("Please upload atleast one file!", 400, "messageSenderController -> multer file error"))

    const receiversArray = receiverEmail.split(",");

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD,
        },
    });

    // const allResults = await Promise.all(
    //     receiversArray.map(async (email) => {
    //         const info = await transporter.sendMail({
    //             from: `"${senderName}" <${senderEmail}>`,
    //             to: email,
    //             subject: subject,
    //             text: message,
    //             attachments: [
    //                 {
    //                     filename: file.originalname,
    //                     content: file.buffer,
    //                     contentType: "application/pdf"
    //                 }
    //             ]
    //         });
    //         console.log("Message sent : ", email, info);

    //         return {
    //             accepted: info.accepted,
    //             rejected: info.rejected,
    //             envelope: info.envelope
    //         };
    //     })
    // );

    let count = 0;
    const allResults = [];

    for (const email of receiversArray) {
        try {
            console.log(`📤 Sending to: ${email}`);

            const info = await transporter.sendMail({
                from: `"${senderName}" <${senderEmail}>`,
                to: email,
                subject: subject,
                text: message,
                attachments: [
                    {
                        filename: file.originalname,
                        content: file.buffer,
                        contentType: "application/pdf"
                    }
                ]
            });

            count++;
            console.log(`✅ Sent to: ${email}   |   ${count} outof ${receiversArray.length}  `);

            allResults.push({
                email,
                accepted: info.accepted,
                rejected: info.rejected,
                envelope: info.envelope
            });

        } catch (error) {
            console.error(`❌ Failed to send to ${email}:`, error.message);
            allResults.push({
                email,
                error: error.message
            });
        }
    }
    res.status(200).json({
        success: true,
        message: "Message sending process finished",
        total: receiversArray.length,
        sent: count,
        failed: receiversArray.length - count,
        results: allResults,
    });
});