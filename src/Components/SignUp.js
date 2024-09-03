import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function SignUp({ onClose}) {
  const { register, handleSubmit, formState:{errors} } = useForm();  // Corrected the destructuring assignment

  const onSubmitHandler = (data) => {
    console.log(data);
  };


  return (
    <div className="modal-overlay">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-5">
            <div className="p-4 bg-light border rounded shadow-sm position-relative">
              <button type="button" className="btn-close position-absolute top-0 end-0 mt-2 me-2" aria-label="Close" onClick={onClose}></button>
              <h2 className="text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="row mb-3">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <label htmlFor="firstNameInput" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstNameInput"  placeholder="Enter your first name" {...register("firstName", {required: "Name is Required", minLength:{value:4, message: "Name must be 4 Characters"}})} />
                    <span>{errors.firstName && <p>{errors.firstName.message}</p>}</span>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="lastNameInput" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastNameInput" placeholder="Enter your last name"  {...register("lastName", {required: "Lastname is Required", minLength:{value:4, message: "Lastname Must be 4 Characters"}})}/>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter your email"
                  {...register("email")} />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Password</label>
                  <input type="password" className="form-control" id="passwordInput" {...register("password")} placeholder="Enter your password"/>
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="confirmPasswordInput" className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <input type='password' className="form-control pe-5" {...register("confirmPassword")} id="confirmPasswordInput" placeholder="Confirm your password"/>
                    <span 
                      className="input-group-text position-absolute end-0 pe-2 d-flex align-items-center" 
                      style={{ cursor: 'pointer', zIndex: 10 }}>
                      <i className="bi bi-eye-slash bi-eye" style={{ fontSize: '1.25rem' }}></i>
                    </span>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                <div className="mt-3 text-center">Already on Skill Set? 
                  <Link to="/login" className="text-primary"> Log In</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
