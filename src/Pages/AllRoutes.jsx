import { Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";
import Dashboard from "./Charts_and_Maps";
import EditContact from "../Components/Edit_Contact";
import ContactForm from "../Components/ContactForm";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" >
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contact_form" element={<ContactForm />} />
        <Route path="/chart" element={<Dashboard />} />
        <Route path="contacts/edit/:id" element={<EditContact />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
