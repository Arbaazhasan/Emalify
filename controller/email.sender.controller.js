import asyncCatchHandler from "../utils/asyncCatchHandler.js";

export const messageSend = asyncCatchHandler(async (req, res, next) => {

    

    res.status(200).json({
        success: true,
        message: "working",
    })
})