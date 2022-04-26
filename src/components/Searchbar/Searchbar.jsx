import { Formik} from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Searchfield, SearchForm, InputField, Error, BtnSubmitForm} from './Searchbar.styled'
import { BiSearch } from 'react-icons/bi';
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'Name is not valid')
})
const initialValues = {
    name: '',
};
export const Searchbar = ({onSubmit}) => {
    const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name);
    resetForm();
  };
    return (
        <Searchfield>
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}>
            <SearchForm autoComplete='off'>            
                <BtnSubmitForm type="submit">
                  <BiSearch size="2em"/>    
                </BtnSubmitForm>
                <InputField
                    type="text"
                    name="name"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                <Error name="name" component="div"/>                
            </SearchForm >
            </Formik>
        </Searchfield>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
}