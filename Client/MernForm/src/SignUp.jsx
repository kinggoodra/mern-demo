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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { FailAlert, SuccessAlert } from "./alerts";
export default function SignUp() {
  const [alerts, setalert] = useState("");
  const navigate = useNavigate();
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

      timeoutid = setTimeout(() => func(e), delay);
    };
  };

  const SignUpForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/signup",
        FormData
      );

      if (response.status === 201) {
        setalert(true);
        setTimeout(() => {
          navigate("/");
          setalert("");
        }, 1500);
      }
    } catch (err) {
      setTimeout(() => {
        setalert(false);
      }, 1500);
      setTimeout(() => {
        setalert("");
      }, 7000);
    }
  };

  return (
    <>

      <div className="fixed top-5 right-[5%] z-50 ">
        {alerts === true ? <SuccessAlert />: alerts === false ? <FailAlert /> : ""}
      </div>

      <div className="flex justify-center align-middle mt-[5%]">
        <Card className="w-full max-w-2xl">
          <form onSubmit={SignUpForm}>
            <CardHeader>
              <CardTitle>Registration</CardTitle>
              <CardDescription>
                Fill details to create a new account
              </CardDescription>
              <CardAction>
                <Link to={"/"}>
                  <Button variant="link">Login</Button>
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="FullName">Full Name</Label>
                  <Input
                    id="FullName"
                    type="text"
                    placeholder="Enter full your name"
                    required
                    onChange={debounce((e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 1000)}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="Username">Username</Label>
                  <Input
                    id="Username"
                    type="text"
                    placeholder="Enter your username"
                    required
                    onChange={debounce((e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 1000)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="Contact_Number">Contact Number</Label>
                  <Input
                    id="Contact_Number"
                    type="tel"
                    placeholder="Contact Number"
                    required
                    onChange={debounce((e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 1000)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="Date_of_Birth">Date of Birth</Label>
                  <Input
                    id="Date_of_Birth"
                    type="date"
                    placeholder="Date of Birth"
                    required
                    onChange={debounce((e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 1000)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="Address">Enter your address</Label>
                  <Input
                    id="Address"
                    type="text"
                    placeholder="Enter your address"
                    required
                    onChange={debounce((e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 1000)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={debounce((e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 1000)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="New_Password">New Password</Label>
                  <Input
                    id="New_Password"
                    type="password"
                    required
                    placeholder="Enter new password"
                    onChange={debounce((e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 1000)}
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
                    onChange={debounce((e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 1000)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col mt-10 gap-2">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
