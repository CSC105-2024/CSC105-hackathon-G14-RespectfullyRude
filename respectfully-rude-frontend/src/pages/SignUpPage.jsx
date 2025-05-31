import React, { useState } from "react";
import signUpPhoto from "../assets/img9.png";
import { Lock, Mail, User } from "lucide-react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid lg:grid-cols-2 min-w-screen min-h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src={signUpPhoto} alt="Image error" className="w-45" />
        <h1 className="text-3xl font-extrabold text-[var(--color-primary)]">
          {" "}
          {/* fix font */}
          Respectfully Rude
        </h1>
        <h2 className="font-normal md:w-80 lg:w-full text-center text-base text-[var(--color-primary)]">
          Generate backhanded compliments and paradoxical names for everyone
          social
        </h2>
      </div>

      <div className="right">
        <h2 className="font-bold text-center text-2xl">Create Account</h2>
        <div className="flex flex-col items-center">
          <form>
            <FormInput
              label={"Name"}
              icon={<User size={18} />}
              type={"text"}
              placeholder={"Enter your name"}
            />
            <FormInput
              label={"Email"}
              icon={<Mail size={18} />}
              type={"text"}
              placeholder={"Enter your email"}
            />
            <FormInput
              label={"Password"}
              icon={<Lock size={18} />}
              type={showPassword ? "text" : "password"}
              placeholder={"Enter your password"}
              toggleIcon={showPassword ? faEye : faEyeSlash}
              onToggle={() => {
                setShowPassword(!showPassword);
              }}
            />
            <FormInput
              label={"Confirm Password"}
              icon={<Lock size={18} />}
              type={showPassword ? "text" : "password"}
              placeholder={"Enter your password"}
              toggleIcon={showPassword ? faEye : faEyeSlash}
              onToggle={() => {
                setShowPassword(!showPassword);
              }}
            />
            <div>button placeholder</div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-base text-neutral-700">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-[var(--color-primary)] hover:text-primary-600 font-medium underline underline-offset-4"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
