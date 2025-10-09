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
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
export default function SignUp() {
  const [FormData, setFormData] = useState({
    FullName: "",
    Username: "",
    Contact_Number: "",
    Date_of_Birth: "",
    Address: "",
    email: "",
    New_Password: "",
    New_Again_Password: "",
  });
  const debounce = (func, delay) => {
    let timeoutid;
    return (e) => {
      clearTimeout(timeoutid);

      timeoutid = setTimeout(
        () => setFormData({ ...FormData, [e.target.id]: e.target.value }),
        delay
      );
    };
  };
  console.log(FormData);

  return (
    <>
      <div className="flex justify-center align-middle mt-[5%]">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Registration</CardTitle>
            <CardDescription>
              Fill details to create a new account
            </CardDescription>
            <CardAction>
              <Link to={"/"}>
                <Button variant="link">Sign Up</Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form action={""}>
              <div className="grid grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="FullName">Full Name</Label>
                  <Input
                    id="FullName"
                    type="text"
                    placeholder="Enter full your name"
                    required
                    onChange={debounce((e) => e, 500)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="Username">Username</Label>
                  <Input
                    id="Username"
                    type="text"
                    placeholder="Enter your username"
                    required
                    onChange={debounce((e) => e, 500)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="Contact_Number">Contact Number</Label>
                  <Input
                    id="Contact_Number"
                    type="tel"
                    placeholder="Contact Number"
                    required
                    onChange={debounce((e) => e, 500)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="Date_of_Birth">Date of Birth</Label>
                  <Input
                    id="Date_of_Birth"
                    type="date"
                    placeholder="Date of Birth"
                    required
                    onChange={debounce((e) => e, 500)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="Address">Enter your address</Label>
                  <Input
                    id="Address"
                    type="text"
                    placeholder="Enter your address"
                    required
                    onChange={debounce((e) => e, 500)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={debounce((e) => e, 500)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="New_Password">New Password</Label>
                  <Input
                    id="New_Password"
                    type="password"
                    required
                    placeholder="Enter new password"
                    onChange={debounce((e) => e, 500)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="New_Again_Password">
                    Confirm New Password
                  </Label>
                  <Input
                    id="New_Again_Password"
                    type="password"
                    required
                    placeholder="Confirm New Password"
                    onChange={debounce((e) => e, 500)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Link to={""}>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
