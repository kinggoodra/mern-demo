import { Button } from "./components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import React from "react";
export default function SignUp() {
  return (
    <>
      <div className="flex justify-center align-middle mt-[1%]">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Registration</CardTitle>
            <CardDescription>
              Fill details to create a new account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="FullName">Full Name</Label>
                  <Input
                    id="FullName"
                    type="text"
                    placeholder="Enter full your name"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="Username">Username</Label>
                  <Input
                    id="Username"
                    type="text"
                    placeholder="Enter your username"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="Contact Number">Contact Number</Label>
                  <Input
                    id="Contact Number"
                    type="tel"
                    placeholder="Contact Number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="Date_of_Birth">Date of Birth</Label>
                  <Input
                    id="Date_of_Birth"
                    type="date"
                    placeholder="Date of Birth"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="Address">Enter your address</Label>
                  <Input
                    id="Address"
                    type="text"
                    placeholder="Enter your address"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="New_Password">New Password</Label>
                  <Input
                    id="New_Password"
                    type="password"
                    required
                    placeholder="Enter new password"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="New_Again_Password">Confirm New Password</Label>
                  <Input
                    id="New_Again_Password"
                    type="password"
                    required
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
