import React from "react";
import {MDBBtn, MDBInput, MDBValidation, MDBValidationItem} from "mdb-react-ui-kit";
import './style.css';


function Login(){

    return(
        <div className={"w-100 d-flex justify-content-center min-vh-100 align-items-center p-3 bg-primary"}>
            <div className={"col-lg-3 col-md-6 col-12 form-container p-3 bg-white rounded-4 shadow-3"}>
                <h2 className={"mb-4"}>ورود</h2>
                <form className={"row g-3"}>
                    <div>
                        <MDBInput
                            type='email'
                            name='email'
                            className={"form-control"}
                            label="ایمیل"
                        >
                            {/*<div className={"form-helper"}>*/}
                            {/*    ایمیل نامعتبر است*/}
                            {/*</div>*/}
                        </MDBInput>
                    </div>
                    <div>
                        <MDBInput
                            type='password'
                            name='password'
                            className={"form-control text-end"}
                            label="رمز عبور"
                        >
                            {/*<div className={"form-helper"}>*/}
                            {/*    ایمیل نامعتبر است*/}
                            {/*</div>*/}
                        </MDBInput>
                        <div className="p-1 text-secondary pointer reset-pass-text">
                            <span>رمز عبور خود را فراموش کرده اید؟</span>
                        </div>
                    </div>
                    <div className="w-100">
                        <MDBBtn type="submit" className="w-100 rounded-9">ورود</MDBBtn>
                    </div>
                </form>
                <div className="p-1 text-black-50 w-100 text-center mt-4 form-text-link">
                    <span>حساب کابری ندارید؟<span className="text-primary text-decoration-underline pointer">ایجاد کنید</span></span>
                </div>
            </div>
        </div>
    )
}

export default Login;