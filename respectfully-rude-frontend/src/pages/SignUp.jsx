import React from "react";
import FormInput from "../components/FormInput";

const SignUp = () =>{
    return(
        <div>
            <div className="flex min-w-screen min-h-screen ">
                <div className="flex flex-col items=center justify-center left w-1/2 ">
                    <h1 className="text-3xl font-bold">Respectfully Rude</h1>
                    <div className="flex flex-col items-center">
                       <image src="/logo.png" alt="Logo" className="w-24 h-24 mb-4" />
                    </div>
                </div>
                <div className="flex flex-col items=center justify-center w-1/2">
                right 
                </div>
            </div>
        </div>

        
    );

};
export default SignUp;