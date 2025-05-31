import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { Lock, Mail } from "lucide-react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex min-w-screen min-h-screen gap-30 justify-center items-center">
      <div className="left">
        <h2 className="font-bold text-2xl">Welcome back</h2>
        <div className="flex flex-col items-center">
          <form>
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
            <div>button placeholder</div>
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
      <div className="right">
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
