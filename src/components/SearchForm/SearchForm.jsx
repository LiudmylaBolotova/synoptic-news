import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import {
  Form,
  SectionForm,
  TitleForm,
  InputForm,
  BtnForm,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const handleSubmitForm = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.elements.query.value;

    if (query.trim() === '') {
      return toast.error(`Please enter a valid location!`);
    }
    onSubmit(query);
    console.log(query);
    form.reset();
  };

  return (
    <SectionForm>
      <Form onSubmit={handleSubmitForm}>
        <TitleForm>Enter the name of the locality</TitleForm>
        <label>
          <InputForm
            type="text"
            name="query"
            autocomplete="on"
            placeholder="Enter location"
          />
        </label>
        <BtnForm type="submit">Search</BtnForm>
      </Form>
      <Toaster />
    </SectionForm>
  );
};

export default SearchForm;
