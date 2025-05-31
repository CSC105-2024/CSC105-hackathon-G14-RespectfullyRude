import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { Lock, Mail } from "lucide-react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import loginPhoto from "../assets/img11.png";
import { Button } from "../components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    // await login(data.email, data.password);
    console.log(data);
  };

  return (
    <div className="grid lg:grid-cols-2 min-w-screen min-h-screen justify-center items-center">
      <div className="left">
        <h2 className="font-bold text-center text-2xl">Welcome back</h2>
        <div className="flex flex-col items-center">
          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormInput
              label={"Email"}
              icon={<Mail size={18} />}
              type={"text"}
              placeholder={"Enter your email"}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <FormInput
              label={"Password"}
              icon={<Lock size={18} />}
              type={showPassword ? "text" : "password"}
              placeholder={"Enter your password"}
              toggleIcon={showPassword ? faEye : faEyeSlash}
              onToggle={() => {
                setShowPassword(!showPassword);
              }}
              {...register("password")}
            />

            {errors.password && (
              <p className="text-red-500 text-sm ">{errors.password.message}</p>
            )}
            <Button
              className="text-base bg-[var(--color-primary)] w-1/3 cursor-pointer hover:bg-[var(--color-secondary)] mt-2"
              variant="default"
              type="submit"
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
      <div className="right flex flex-col justify-center items-center">
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
