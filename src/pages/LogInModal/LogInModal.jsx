// import Button from 'components/Button/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Svg from 'components/Svg/Svg';

// const validate = values => {
//   const errors = {};
//   if (!values.password) {
//     errors.password = 'Required';
//   } else if (values.password.length < 6) {
//     errors.password = 'Must be 6 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };
// const LogInForm = () => {
//   // Pass the useFormik() hook initial form values and a submit function that will
//   // be called when the form is submitted
//   const formik = useFormik({
//     initialValues: { email: '', password: '' },
//     validate,
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
const LogInForm = () => {
  console.log(Yup.ValidationError.isError);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email(<Svg icon="icon-invalid" width="22" height="22" />)

          .required(' '),
        password: Yup.string()
          .min(6, 'Must be 6 characters or more')
          .max(10, 'Must be 10 characters or less')
          .required(' '),
      })}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="email">Email Address</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="name@gmail.com"
          />
          {errors.email ? null : (
            <Svg
              icon="icon-Valid"
              width="22"
              height="22"
              fill={touched.email ? '#838099' : '#1749b3'}
            />
          )}

          <ErrorMessage name="email" />
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="********"
          />
          <ErrorMessage name="password" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

const LogInModal = () => {
  return (
    <div>
      <h4>Log in</h4>
      <p>New user? Create an account</p>
      <LogInForm />
      {/* <Button>Log in</Button> */}
      <p>Forfot password?</p>
      <span>Or sign in with</span>
      <p>
        Protected by reCAPTCHA and subject to the Google Privacy Policy and
        Terms of Service.
      </p>
    </div>
  );
};
export default LogInModal;
