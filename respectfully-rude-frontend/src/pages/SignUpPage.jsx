import React, { useState } from "react";
import signUpPhoto from "../assets/img9.png";
import { Lock, Mail, User } from "lucide-react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useRegister from "@/hooks/useRegister";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const signupSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  });

  const { registerUser } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    await registerUser(
      data.name,
      data.email,
      data.password,
      data.confirmPassword
    );
  };

  return (
    <div className="grid lg:grid-cols-2 min-w-screen min-h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src={signUpPhoto} alt="Image error" className="w-45" />
        <h1 className="text-3xl font-extrabold text-[var(--color-primary)]">
          {" "}
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
          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormInput
              label={"Name"}
              icon={<User size={18} />}
              type={"text"}
              placeholder={"Enter your name"}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
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
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <FormInput
              label={"Confirm Password"}
              icon={<Lock size={18} />}
              type={showPassword ? "text" : "password"}
              placeholder={"Enter your password"}
              toggleIcon={showPassword ? faEye : faEyeSlash}
              onToggle={() => {
                setShowPassword(!showPassword);
              }}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
            <Button
              className="text-base bg-[var(--color-primary)] w-1/3 cursor-pointer hover:bg-[var(--color-secondary)] mt-2"
              variant="default"
            >
              Create Account
            </Button>
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
