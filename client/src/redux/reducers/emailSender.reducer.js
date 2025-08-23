import { createSlice } from "@reduxjs/toolkit";


const initialState = ({
    status : 'ideal',
    laoding : false,
    error : [],

})

const emailSenderReducer = createSlice({

    name: "EmailSenderReducer",
    initialState,

    reducers:{

        sendMessageRequest : (state, action)=>{
            state.laoding = true,
            state.error = [],
        },

        sendMessageSuccess:(state, action)=>{
            state.laoding = false,
        }


    }

});