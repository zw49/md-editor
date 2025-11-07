"use client";
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
import Link from "next/link";
export default function ValidateEmail() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Almost Done!</CardTitle>
          <CardDescription>
            Check your email for a validation link to complete your signup.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
