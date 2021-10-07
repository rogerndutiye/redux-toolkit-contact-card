import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addContact, updateContact } from "../app/contactSlice";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { BsFillCursorFill } from "react-icons/bs";

type ContactFormData = {
  name: string;
  email: string;
  telephone: string;
};
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required(),
  })
  .required();

interface NewContactProps {
  id: string;
}
const NewContact: React.FC<NewContactProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });
  console.log(id);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const contactData = useAppSelector((state) =>
    state.contact.contactList.find((contact) => contact.id === id)
  );

  setValue("name", contactData?.name || "");
  setValue("email", contactData?.email || "");
  setValue("telephone", contactData?.telephone || "");

  const onSubmit = (data: ContactFormData) => {
    const { name, email, telephone } = data;

    if (id) {
      editContact(name, email, telephone);
      return;
    }
    dispatch(addContact({ name, email, telephone, id: uuidv4() }));
    history.push("/");
  };

  const editContact = (name: string, email: string, telephone: string) => {
    dispatch(updateContact({ name, email, telephone, id }));
    history.push("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white  p-4 px-4 text-sm ">
        <div className="md:col-span-5">
          <label htmlFor="full_name" className="text-left">
            Full Name
          </label>

          <input
            type="text"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Full Name"
            {...register("name")}
          />
          <p className="mt-2 text-sm text-red-600">{errors.name?.message}</p>
        </div>

        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="email@domain.com"
            {...register("email")}
          />
          <p className="mt-2 text-sm text-red-600">{errors.email?.message}</p>
        </div>
        <div className="mt-3">
          <label htmlFor="email">PhoneNumber</label>
          <input
            type="text"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="250 788 841 494"
            {...register("telephone")}
          />
          <p className="mt-2 text-sm text-red-600">
            {errors.telephone?.message}
          </p>
        </div>

        <div className="mt-3 text-right">
          <div className="inline-flex items-end">
            <button
              type="submit"
              className="flex items-center bg-indigo-600 text-white hover:bg-purple-500 p-2 rounded text-sm w-auto"
              // onClick={onSubmitHandle}
            >
              <BsFillCursorFill />
              <span>&nbsp;Submit</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewContact;
