import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";


function Validation() {
  let values = {}
  const SetValues = (value) => {
    values = value;
  }

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      terms: false,
    },

    validationSchema: Yup.object({
      password: Yup.string()
        .min(5, "Name must be 20 characters or less.").required("Name must be 20 characters or less."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      terms: Yup.boolean().oneOf([true], "Please accept our terms"),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      SetValues(values)
    },
  });
  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Validation</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                <li className="breadcrumb-item active">Validation</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>

      {/* <!-- Main content --> */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* <!-- left column --> */}
            <div className="col-md-12">
              {/* <!-- jquery validation --> */}
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Quick Example <small>jQuery Validation</small></h3>
                </div>
                {/* <!-- /.card-header --> */}
                {/* <!-- form start --> */}
                <form id="quickForm"
                  onSubmit={formik.handleSubmit}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" name="email" className={`form-control  ${formik.touched.email && formik.errors.email
                        ? 'is-invalid'
                        : ""
                        }`}
                        id="exampleInputEmail1"
                        placeholder="Enter email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur} />
                      <span id="exampleInputEmail1-error" className="error invalid-feedback">Please enter a valid email address</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" name="password" className={`form-control  ${formik.touched.password && formik.errors.password
                        ? 'is-invalid'
                        : ""
                        }`} id="exampleInputPassword1" placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur} />
                      <span id="exampleInputPassword1-error" className="error invalid-feedback">Your password must be at least 5 characters long</span>
                    </div>
                    <div className="form-group mb-0">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" name="terms"className={`custom-control-input ${formik.touched.terms && formik.errors.terms
                        ? 'is-invalid'
                        : ""
                        }`} id="exampleCheck1"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur} />
                        <label className="custom-control-label" htmlFor="exampleCheck1">I agree to the <Link to="#">terms of service</Link>.</label>
                      </div>

                      {formik.touched.terms && formik.errors.terms
                        && <span id="terms-error" className="error invalid-feedback" style={{ display: "inline" }}>Please accept our terms</span>
                      }

                    </div>
                  </div>
                  {/* <!-- /.card-body --> */}
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!--/.col (left) --> */}
            {/* <!-- right column --> */}
            <div className="col-md-6">

            </div>
            {/* <!--/.col (right) --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>
      {/* <!-- /.content --> */}
    </div>
  )
}

export default Validation