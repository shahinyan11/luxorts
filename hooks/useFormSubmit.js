import { useDispatch } from 'react-redux';

const useFormSubmit = (action, reset = false) => {
  const dispatch = useDispatch();

  return (values, form) => {
    dispatch(action(values, form));

    if (reset) {
      form.resetForm();
    }
  };
};

export default useFormSubmit;
