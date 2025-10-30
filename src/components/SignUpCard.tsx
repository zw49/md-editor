"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Text } from "./ui/text";
import { Info, Loader, Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { signup } from "@/app/signup/actions";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { useState } from "react";

type FormValues = {
  email: string;
  confirmPassword: string;
  password: string;
};

export default function SignUpCard() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    await signup(data.email, data.password);
  });

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Enter your email and a secure password below to sign up for your
          account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className={cn(errors.email ? "border-destructive" : "")}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-destructive" />
                  <Text className="text-destructive" variant="small">
                    {errors.email.message}
                  </Text>
                </div>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                className={cn(errors.password ? "border-destructive" : "")}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum length is 6" },
                })}
              />
              {errors.password && (
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-destructive" />
                  <Text className="text-destructive" variant="small">
                    {errors.password.message}
                  </Text>
                </div>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
              </div>
              <Input
                id="confirmPassword"
                type="password"
                className={cn(
                  errors.confirmPassword ? "border-destructive" : ""
                )}
                {...register("confirmPassword", {
                  required: "Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-destructive" />
                  <Text className="text-destructive" variant="small">
                    {errors.confirmPassword.message}
                  </Text>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full">
              Sign Up{" "}
              {isLoading && <Loader2Icon className="h-4 w-4 animate-spin" />}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
