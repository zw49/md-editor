"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
