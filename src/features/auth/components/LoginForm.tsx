import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/shared/components/ui/Button";
import Card from "@/shared/components/ui/Card";
import Input from "@/shared/components/ui/Input";
import Label from "@/shared/components/ui/Label";

import { loginSchema, type LoginFormData } from "../validation/loginSchema";
import { Link, useNavigate } from "react-router-dom";

import Logo from "@/shared/components/common/Logo";
import { login } from "../services/authService";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { text } from "framer-motion/client";


export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(data: LoginFormData) {
    try {
      const response = await login(data);

      const loginData = response.data.data;

      localStorage.setItem("token", loginData.accessToken);
      localStorage.setItem("email", loginData.email);

      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  }

  return (
    <Card>

      <div className="mb-4">
        <Logo />
      </div>

      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-white">
        Welcome Back
      </h2>


      {/* 👇 Add it here */}
      <p className="mt-2 mb-8 text-center text-slate-400">
        Sign in to continue your career journey
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>

          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              error={errors.password?.message}
              className="pr-12"
              {...register("password")}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Forgot Password?
          </Link>
        </div>

        <Button type="submit">
          Login
        </Button>

        <p className="text-center text-slate-400">
          Don't have an account?
          <Link
            to="/register"
            className="ml-2 text-blue-400 hover:text-blue-300"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </Card>
  );
}