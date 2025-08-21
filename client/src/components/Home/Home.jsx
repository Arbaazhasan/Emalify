import React from 'react';

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
    return (
        <form className='grid grid-cols-[30%_50%_20%] w-full px-2.5 py-5'>

            <div className='py-0 px-2.5' >


                <fieldset className="fieldset flex flex-col gap-5 bg-base-200 border-base-300 rounded-box border p-4 w-full">
                    <h1 className="font-bold text-2xl">Details Section</h1>

                    <div className="flex flex-col gap-1">
                        <label className="label">Sender Name *</label>
                        <input type="text" className="input w-full" placeholder="Alice Watt" required minLength={5} pattern='[A-Za-z]+'/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="label">Sender Address *</label>
                        <input type="email" className="input w-full" placeholder="sender@gmail.com" required minLength={5} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="label">Receiver Address *</label>
                        <textarea className="textarea w-full" rows={10} placeholder="abc@gmail.com, xyz@gmail.com" required minLength={10}></textarea>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="label">Attachment *</label>
                        <input type="file" className="file-input w-full" required />
                    </div>

                    <div>
                        <button className="btn btn-block">Send</button>
                    </div>
                </fieldset>

            </div>


            <div className='py-0 px-2.5' >


                <fieldset className="fieldset flex flex-col gap-5 bg-base-200 border-base-300 rounded-box border p-4 w-full h-full">
                    <h1 className="font-bold text-2xl">Message</h1>

                    <div className="flex flex-col gap-2">
                        <label className="label">Subject *</label>
                        <input type="text" className="input w-full" placeholder="Asking for Role" required />
                    </div >



                    <div className="flex flex-col gap-2">
                        <label className="label">Message *</label>
                        <textarea className="textarea w-full" rows={20} placeholder={emeilTemplate} required></textarea>
                    </div>

                </fieldset>

            </div>


            <div className='py-0 px-2.5' >


                <fieldset className="fieldset flex flex-col gap-5 bg-base-200 border-base-300 rounded-box border p-4 w-full h-full">
                    <h1 className="font-bold text-2xl">Console</h1>

                    <div className="flex flex-col gap-2">
                        <div className="overflow-x-auto">
                            <table className="table ">
                                <tbody>
                                    <tr className="bg-base-200 ">
                                        <th>Send</th>
                                        <td>5</td>
                                    </tr>

                                    <tr className="bg-base-200 ">
                                        <th>Total</th>
                                        <td>12</td>
                                    </tr>

                                    <tr className="bg-base-200 ">
                                        <th>Failed</th>
                                        <td>0</td>
                                    </tr>

                                    <tr className="bg-base-200 ">
                                        <th>Emails Left</th>
                                        <td>452</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className=' border-1 border-solid border-gray-700 p-3 flex flex-col gap-5 text-gray-500 h-90 overflow-auto'>

                            <p >

                                📤 Sending:n aniegurwani@gmail.com
                                ✅ Sent: aniegurwani@gmail.com   |   1 outof 24

                            </p>

                            <p>

                                📤 Sending to: aniegurwani@gmail.com
                                ✅ Sent to: aniegurwani@gmail.com   |   1 outof 24

                            </p>

                            <p>

                                📤 Sending to: aniegurwani@gmail.com
                                ✅ Sent to: aniegurwani@gmail.com   |   1 outof 24

                            </p>

                            <p>

                                📤 Sending to: aniegurwani@gmail.com
                                ✅ Sent to: aniegurwani@gmail.com   |   1 outof 24

                            </p>

                            <p>

                                📤 Sending to: aniegurwani@gmail.com
                                ✅ Sent to: aniegurwani@gmail.com   |   1 outof 24

                            </p>            <p>

                                📤 Sending to: aniegurwani@gmail.com
                                ✅ Sent to: aniegurwani@gmail.com   |   1 outof 24

                            </p>            <p>

                                📤 Sending to: aniegurwani@gmail.com
                                ✅ Sent to: aniegurwani@gmail.com   |   1 outof 24

                            </p>            <p>

                                📤 Sending to: aniegurwani@gmail.com
                                ✅ Sent to: aniegurwani@gmail.com   |   1 outof 24

                            </p>


                        </div>
                    </div>


                </fieldset>

            </div>


        </form>

    );
}

export default Home;
