"use client";
import { login } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info, Loader2Icon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Text } from "./ui/text";
import { cn } from "@/lib/utils";


export default function LoginCard() {
  type FormValues = {
    email: string;
    confirmPassword: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    console.log(data)

    const successful = await login(data.email, data.password);
    if (successful) {
      redirect("/");
    }
    else {
      setIsLoading(false);
      toast.error("Unable to sign in")
    }
  });

  return (
    <>
      <Card className="shadow-lg w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button asChild className="hover:cursor-pointer" variant="outline">
              <Link href={"/signup"}>Sign Up </Link>
            </Button>
          </CardAction>
        </CardHeader>
        <form className="grid gap-6" onSubmit={onSubmit}>
          <CardContent>
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
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  className={cn(errors.password ? "border-destructive" : "")}
                  {...register("password", {
                    required: "Password is required",
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
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login{" "}
              {isLoading && <Loader2Icon className="h-4 w-4 animate-spin" />}
            </Button>
            <Button disabled variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </form>

      </Card >
    </>
  );
}
