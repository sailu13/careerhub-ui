import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AppCard from "@/shared/components/common/AppCard";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import Input from "@/shared/components/ui/Input";
import Label from "@/shared/components/ui/Label";
import { useAppTheme } from "@/shared/theme/theme";
import { registerSchema, type RegisterFormData } from "../validation/registerSchema";
import { useRegister } from "../hooks/useRegister";

export default function RegisterPage() {
  const navigate = useNavigate();
  const t = useAppTheme();
  const { register: registerUser, loading } = useRegister();
  const { register, handleSubmit, setValue, watch, formState: { errors }, } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema), defaultValues: { role: "JOB_SEEKER", }, });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  async function onSubmit(data: RegisterFormData) {
    const result = await registerUser(data);
    if (result.success) { 
      const loginData = result.data;
      localStorage.setItem("token", loginData.accessToken);
      localStorage.setItem("email", loginData.email);
      localStorage.setItem("firstName", loginData.firstName);
      localStorage.setItem("lastName", loginData.lastName);
      localStorage.setItem("userId", loginData.id.toString());
      localStorage.setItem("role", loginData.role);
      navigate("/dashboard"); 
    } else {
      console.log(result.message);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <AppCard className="w-full max-w-lg space-y-8">
        <div>
          <h1 className="mb-2 text-center text-2xl font-bold text-blue-500">
            CareerHub
          </h1>
          <h2 className={`text-center text-4xl font-bold ${t.heading}`}>
            Create Account
          </h2>
          <p className={`mt-2 text-center ${t.subText}`}>
            Join CareerHub and start your journey
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName"> First Name </Label>
              <Input id="firstName" placeholder="Enter first name"
                {...register("firstName")} error={errors.firstName?.message} />
            </div>
            <div>
              <Label htmlFor="lastName"> Last Name </Label>
              <Input id="lastName" placeholder="Enter last name"
                {...register("lastName")} error={errors.lastName?.message} />
            </div>
          </div>
          <div>
            <Label htmlFor="email"> Email </Label>
            <Input id="email" type="email" placeholder="Enter email"
              {...register("email")} error={errors.email?.message} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password"> Password </Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"}
                  placeholder="Enter password" className="pr-10"
                  {...register("password")} error={errors.password?.message} />
                <button type="button" onClick={() => setShowPassword(!showPassword) }
                  className="absolute right-3 top-1/2 -translate-y-1/2" >
                  {showPassword ? ( <EyeOff size={18} /> ) : ( <Eye size={18} /> )}
                </button>
              </div>
            </div>
            <div>
              <Label htmlFor="confirmPassword"> Confirm Password</Label>
              <div className="relative">
                <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password" className="pr-10" {...register("confirmPassword")}
                  error={errors.confirmPassword?.message} />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2">
                  {showConfirmPassword ? (<EyeOff size={18} />) : (<Eye size={18} />)}
                </button>
              </div>
            </div>
          </div>
          <div>
            <Label>Register As</Label>
            <div className="space-y-3 mt-2">
              <button type="button" onClick={() =>setValue("role","JOB_SEEKER")}
                className={`w-full rounded-xl border p-4 text-left ${watch("role") === "JOB_SEEKER"
                    ? "border-blue-500 bg-blue-50": ""}`}>
                👨‍💻 Job Seeker
              </button>
              <button type="button" onClick={() =>setValue("role","RECRUITER")}
                className={`w-full rounded-xl border p-4 text-left ${watch("role") === "RECRUITER"
                    ? "border-blue-500 bg-blue-50": ""}`}>
                🏢 Recruiter
              </button>
            </div>
          </div>
          <PrimaryButton type="submit" className="w-full" disabled={loading} >
            {loading ? "Creating..." : "Create Account"}
          </PrimaryButton>
          <p className={`text-center ${t.subText}`}>
            Already have an account?
            <Link to="/login" className="ml-2 text-blue-500"> Login </Link>
          </p>
        </form>
      </AppCard>
    </div>
  );
}