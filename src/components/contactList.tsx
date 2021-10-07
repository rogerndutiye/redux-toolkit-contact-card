import { useState } from "react";
import ContactInfo from "../components/contactInfo";
import Contact from "../model/Contact";
import NewContact from "./NewContact";
import DialogBox from "./DialogBox";

interface ContactProps {
  contacts: Contact[] | undefined;
}
const ContactList: React.FC<ContactProps> = ({ contacts }) => {
  let [open, setOpen] = useState(false);
  let [id, setID] = useState("");

  const ContactUpdate = (id: string) => {
    setID(id);
    setOpen(true);
  };

  const DialogHandle = () => {
    setOpen((current) => !current);
  };
  return (
    <div className="flex flex-col mx-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {contacts &&
          contacts.map((contact) => (
            <ContactInfo
              key={contact.id}
              contact={contact}
              onContactUpdate={ContactUpdate}
            />
          ))}

        {open && (
          <DialogBox open={open} OnDialogHandle={DialogHandle}>
            <NewContact id={id} />
          </DialogBox>
        )}
      </div>
    </div>
  );
};

export default ContactList;
