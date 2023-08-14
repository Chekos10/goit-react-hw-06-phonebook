const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    contacts: [],
    filter: "",
}
const phoneBookSlice = createSlice({
    name:'phonebook',
    initialState,
    reducers: {
        createContact:(state, action) =>{
            state.contacts.push(action.payload)
        },
        removeContact:(state,action) =>{
            state.contacts = action.payload
        },
        filteredContacts:(state,action) =>{
            state.filter = action.payload
        }
    }
})

export const {createContact,removeContact,filteredContacts} = phoneBookSlice.actions
export default phoneBookSlice.reducer;