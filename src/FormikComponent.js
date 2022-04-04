import React from 'react';
import { Formik } from 'formik';
class formikComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  

  intialValue = {
    firstName: '',
    lastname: '',
    email: '',
    gender: '',
    courses: 'React',
  };

  Validate = (value) => {
    var error = {};
    if (value.firstName === '') error.firstName = 'First Name is Required';
    if (value.lastName === '') error.lastName = 'Last Name is Required';
    if (value.email === '') error.email = 'Email is Required';
    if (value.gender === '') error.gender = 'Gender is Required';
    return error;
  };

  handleSubmit = (Data) => {
    console.log(Data);
  };

  render() {
    return (
      <>
        <h3>Formik Component</h3>
        <Formik
          initialValues={this.intialValue}
          validate={(value) => this.Validate(value)}
          onSubmit={(data) => this.handleSubmit(data)}
        >
          {({
            values,
            handleChange,
            errors,
            handleBlur,
            touched,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{' '}
                <br />
                <span style={{ color: 'red' }}>
                  {touched.firstName && errors.firstName}
                </span>{' '}
                <br />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {touched.lastName && errors.lastName}
                </span>
                <br />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {touched.email && errors.email}
                </span>
                <br />
              </div>
              <div>
                <label>Gender</label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Female
                <br />
                {/* <span style={{ color: 'red' }}>
                  {touched.gender && errors.gender}
                </span> */}
              </div>
              <br />
              <br />
              <div>
                <label>Courses</label>
                <select
                  name="courses"
                  value={values.courses}
                  onChange={handleChange}
                >
                  <option value="react">React</option>
                  <option value="node">Node</option>
                  <option value="mysql">MySQL</option>
                  <option value="mongo">Mongo</option>
                </select>
                <br />
                <br />
              </div>
              <button type="submit">Submit</button> &nbsp;
              <button type="button">Reset</button>
            </form>
          )}
        </Formik>
      </>
    );
  }
}

export default formikComponent;
