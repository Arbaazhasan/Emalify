import axios from "axios"
import { server } from "../store/store"



const emailSenderAction = async (
    senderName,
    senderEmail,
    receiverEmails,
    attachment,
    subject,
    message,
) => {

    try {

        const { data } = await axios.post(`${server}/sendmessage`, {
            senderName,
            senderEmail,
            receiverEmails,
            attachment,
            subject,
            message,
        },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            }
        )



    } catch (error) {

    }
}