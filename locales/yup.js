export default {
  mixed: {
    required: { id: 'yup.mixed.required' },
  },

  string: {
    email: { id: 'yup.string.email' },
    min: ({ min }) => ({ id: 'yup.string.min', values: { min } }),
    max: ({ max }) => ({ id: 'yup.string.max', values: { max } }),
  },

  number: {
    max: ({ max }) => ({ id: 'yup.number.max', values: { max } }),
  },
};
