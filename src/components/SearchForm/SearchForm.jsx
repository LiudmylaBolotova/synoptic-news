import { useState, useEffect } from "react";
import { Form, SectionForm, TitleForm, InputForm, BtnForm } from "./SearchForm.styled";


const SearchForm = () => {
    const [city, setCity] = useState('');

    const handleChange = event => {
        event.preventDefault();
        // const form = event.currentTarget;
        setCity(event.target.value);
    //    form.reset();  
    }

    useEffect(() => {
        if (city.length > 0) {
        
    }
})

    return (
      <SectionForm>
        <Form >
          <TitleForm>Enter the name of the locality</TitleForm>
          <label>
            <InputForm
              type="text"
                        name="sity"
                        value={city}
              autocomplete="on"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="The city name can only contain letters, apostrophe, dashes and spaces. For example: New-York, Paris, Kyiv, London."
                        required
                        onChange={handleChange}
            />
          </label>
          <BtnForm type="submit">Search</BtnForm>
        </Form>
      </SectionForm>
    );
}


export default SearchForm;