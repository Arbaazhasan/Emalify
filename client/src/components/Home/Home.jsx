import React, { useEffect, useState } from 'react';

const emeilTemplate = `Dear...,

I’m Xyx....

DecorTrove – E-commerce platform with Razorpay integration, cart/wishlist, and admin dashboard.

Warm regards,
Xyx.....
📞 +91 9###
📧 xyz@gmail.com
🔗 LinkedIn | GitHub
`;

const Home = () => {
    const [senderName, setSenderName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [receiverEmails, setReceiverEmails] = useState("");
    const [attachment, setAttachment] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    useEffect(() => {
        // console.log(
        //     "\nsenderName : ", senderName,
        //     "\nsenderEmail : ", senderEmail,
        //     "\nreceiverEmails : ", receiverEmails,
        //     "\nattachment : ", attachment,
        //     "\nsubject : ", subject,
        //     "\nmessage : ", message
        // )
    }, [senderName, senderEmail, receiverEmails, attachment, subject, message]);


    const onSubmitHandler = (e) => {

        e.preventDefault();
        console.log(
            "\nsenderName : ", senderName,
            "\nsenderEmail : ", senderEmail,
            "\nreceiverEmails : ", receiverEmails,
            "\nattachment : ", attachment,
            "\nsubject : ", subject,
            "\nmessage : ", message
        )

    }


    return (
        <form
            encType="multipart/form-data"
            onSubmit={onSubmitHandler}
            className="grid grid-cols-[30%_50%_20%] w-full px-2.5 py-5"
        >

            {/* Left Section */}
            <div className="py-0 px-2.5">
                <fieldset
                    className="fieldset flex flex-col gap-5 bg-base-200 border-base-300 rounded-box border p-4 w-full"
                >
                    <h1 className="font-bold text-2xl">Details Section</h1>

                    <div className="flex flex-col gap-1">
                        <label className="label">Sender Name *</label>
                        <input
                            type="text"
                            placeholder="Alice Watt"
                            required
                            minLength={5}
                            pattern='[A-Za-z]+'
                            onChange={(e) => setSenderName(e.target.value)}
                            className="input w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="label">Sender Address *</label>
                        <input
                            type="email"
                            placeholder="sender@gmail.com"
                            required
                            minLength={5}
                            onChange={(e) => setSenderEmail(e.target.value)}
                            className="input w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="label">Receiver Address *</label>
                        <textarea
                            rows={10}
                            placeholder="abc@gmail.com, xyz@gmail.com"
                            required
                            minLength={10}
                            onChange={(e) => setReceiverEmails(e.target.value)}
                            className="textarea w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="label">Attachment *</label>
                        <input
                            type="file"
                            required
                            onChange={(e) => setAttachment(e.target.value)}
                            className="file-input w-full"
                        />
                    </div>

                    <div>
                        <button className="btn btn-block">Send</button>
                    </div>
                </fieldset>
            </div>

            {/* Middle Section */}
            <div className="py-0 px-2.5">
                <fieldset
                    className="fieldset flex flex-col gap-5 bg-base-200 border-base-300 rounded-box border p-4 w-full h-full"
                >
                    <h1 className="font-bold text-2xl">Message</h1>

                    <div className="flex flex-col gap-2">
                        <label className="label">Subject *</label>
                        <input
                            type="text"
                            placeholder="Asking for Role"
                            required
                            onChange={(e) => setSubject(e.target.value)}
                            className="input w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="label">Message *</label>
                        <textarea
                            rows={20}
                            placeholder={emeilTemplate}
                            required
                            onChange={(e) => setMessage(e.target.value)}
                            className="textarea w-full"
                        />
                    </div>
                </fieldset>
            </div>

            {/* Right Section */}
            <div className="py-0 px-2.5">
                <fieldset
                    className="fieldset flex flex-col gap-5 bg-base-200 border-base-300 rounded-box border p-4 w-full h-full"
                >
                    <h1 className="font-bold text-2xl">Console</h1>

                    <div className="flex flex-col gap-2">
                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody>
                                    <tr className="bg-base-200">
                                        <th>Send</th>
                                        <td>5</td>
                                    </tr>
                                    <tr className="bg-base-200">
                                        <th>Total</th>
                                        <td>12</td>
                                    </tr>
                                    <tr className="bg-base-200">
                                        <th>Failed</th>
                                        <td>0</td>
                                    </tr>
                                    <tr className="bg-base-200">
                                        <th>Emails Left</th>
                                        <td>452</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div
                            className="border-1 border-solid border-gray-700 p-3 flex flex-col gap-5 text-gray-500 h-90 overflow-auto"
                        >
                            <p>📤 Sending: aniegurwani@gmail.com ✅ Sent: aniegurwani@gmail.com | 1 out of 24</p>
                            <p>📤 Sending: aniegurwani@gmail.com ✅ Sent: aniegurwani@gmail.com | 2 out of 24</p>
                            <p>📤 Sending: aniegurwani@gmail.com ✅ Sent: aniegurwani@gmail.com | 3 out of 24</p>
                            <p>📤 Sending: aniegurwani@gmail.com ✅ Sent: aniegurwani@gmail.com | 4 out of 24</p>
                            <p>📤 Sending: aniegurwani@gmail.com ✅ Sent: aniegurwani@gmail.com | 5 out of 24</p>
                        </div>
                    </div>
                </fieldset>
            </div>

        </form>
    );
}

export default Home;
