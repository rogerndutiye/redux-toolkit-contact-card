import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import Contact from "../model/Contact";
import { v4 as uuidv4 } from "uuid";

type initialStateType = {
  contactList: Contact[];
};

const contactList: Contact[] = [
  {
    id: uuidv4(),
    name: "Roger ndutiye",
    email: "rogerndutiye@gmail.com",
    telephone: "250788841494",
  },
  {
    id: uuidv4(),
    name: "Stacy ndutiye",
    email: "stacyndutiye@gmail.com",
    telephone: "250738841494",
  },
  {
    id: uuidv4(),
    name: "Joe Kalisa",
    email: "Joe.Kalisa@gmail.com",
    telephone: "250738841491",
  },
  {
    id: uuidv4(),
    name: "Ange Keza",
    email: "ange.keza@gmail.com",
    telephone: "250738841491",
  },
  {
    id: uuidv4(),
    name: "Roger ndutiye",
    email: "rogerndutiye@gmail.com",
    telephone: "250788841494",
  },
  {
    id: uuidv4(),
    name: "Stacy ndutiye",
    email: "stacyndutiye@gmail.com",
    telephone: "250738841494",
  },
  {
    id: uuidv4(),
    name: "Joe Kalisa",
    email: "Joe.Kalisa@gmail.com",
    telephone: "250738841491",
  },
  {
    id: uuidv4(),
    name: "Ange Keza",
    email: "ange.keza@gmail.com",
    telephone: "250738841491",
  },
  {
    id: uuidv4(),
    name: "Joe Kalisa",
    email: "Joe.Kalisa@gmail.com",
    telephone: "250738841491",
  },
  {
    id: uuidv4(),
    name: "Ange Keza",
    email: "ange.keza@gmail.com",
    telephone: "250738841491",
  },
];

const initialState: initialStateType = {
  contactList,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contactList.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const {
        payload: { id, name, email, telephone },
      } = action;

      state.contactList = state.contactList.map((contact) =>
        contact.id === id ? { ...contact, name, email, telephone } : contact
      );
    },
    removeContact: (state, action: PayloadAction<{ id: string }>) => {
      state.contactList = state.contactList.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, updateContact, removeContact } =
  contactSlice.actions;
export const getContactList = (state: RootState) => state.contact.contactList;

export default contactSlice.reducer;
