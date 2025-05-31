import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { Lock, Mail } from "lucide-react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import loginPhoto from "../assets/img11.png";
import { Button } from "../components/ui/button";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col-reverse md:flex-row min-w-screen min-h-screen justify-center items-center gap-10 px-10">
      <div className="left">
        <h2 className="font-bold text-center text-2xl">Welcome back</h2>
        <div className="flex flex-col items-center">
          <form className="flex flex-col items-center">
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
            <Button
              className="text-base bg-[var(--color-primary)] w-1/3 cursor-pointer hover:bg-[var(--color-secondary)] mt-2"
              variant="default"
            >
              Sign in
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-base text-neutral-700">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[var(--color-primary)] hover:text-primary-600 font-medium underline underline-offset-4"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="border-black border-l-4"></div> */}
      <div className="right flex flex-col justify-center items-center px-10">
        <img src={loginPhoto} alt="Image error" className="w-45" />
        <h1 className="text-3xl font-extrabold text-[var(--color-primary)]">
          {" "}
          {/* fix font */}
          Respectfully Rude
        </h1>
        <h2 className="font-normal text-base text-[var(--color-primary)]">
          Create sharp names and smarter jabs — log in to begin.
        </h2>
      </div>
    </div>
  );
};

export default LoginPage;
