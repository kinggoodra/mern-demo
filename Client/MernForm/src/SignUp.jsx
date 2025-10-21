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
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { FailAlert, SuccessAlert } from "./alerts";
export default function SignUp() {
  const [alerts, setalert] = useState("");

  const navigate = useNavigate();
  const [Inputvalues, setInputvalues] = useState({
    FullName: "",
    Username: "",
    Contact_Number: "",
    Date_of_Birth: "",
    Address: "",
    email: "",
    New_Password: "",
    New_Again_Password: "",
    Resume: null,
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
    const formData = new FormData();
    for (const key in Inputvalues) {
      formData.append(key, Inputvalues[key]);
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/signup",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 201) {
        setTimeout(() => {
          setalert([true, ""]);
        }, 1500);
        setTimeout(() => {
          setalert("");
          setTimeout(() => {
            // navigate("/");
          }, 3000);
        }, 3000);
      }
    } catch (err) {
      setTimeout(() => {
        setalert([false, err.response.data]);
      }, 1500);
      setTimeout(() => {
        setalert("");
      }, 7000);
    }
  };

  return (
    <>
      <div className="fixed top-5  right-[5%] z-50 ">
        {alerts[0] === true ? (
          <SuccessAlert />
        ) : alerts[0] === false ? (
          <FailAlert alerts={alerts[1]} />
        ) : (
          ""
        )}
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
                    onChange={debounce((e) => {
                      setInputvalues((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 800)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="Username">Username</Label>
                  <Input
                    id="Username"
                    type="text"
                    placeholder="Enter your username"
                    onChange={debounce((e) => {
                      setInputvalues((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 800)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="Contact_Number">Contact Number</Label>
                  <Input
                    id="Contact_Number"
                    type="tel"
                    placeholder="Contact Number"
                    onChange={debounce((e) => {
                      setInputvalues((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 800)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="Date_of_Birth">Date of Birth</Label>
                  <Input
                    id="Date_of_Birth"
                    type="date"
                    placeholder="Date of Birth"
                    onChange={debounce((e) => {
                      setInputvalues((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 800)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="Address">Enter your address</Label>
                  <Input
                    id="Address"
                    type="text"
                    placeholder="Enter your address"
                    onChange={debounce((e) => {
                      setInputvalues((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 800)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    onChange={debounce((e) => {
                      setInputvalues((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 800)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="New_Password">New Password</Label>
                  <Input
                    id="New_Password"
                    type="password"
                    placeholder="Enter new password"
                    onChange={debounce((e) => {
                      setInputvalues((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 800)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="New_Again_Password">
                    Confirm New Password
                  </Label>
                  <Input
                    id="New_Again_Password"
                    type="password"
                    placeholder="Confirm New Password"
                    onChange={debounce((e) => {
                      setInputvalues((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }, 800)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="Resume">Upload your Resume</Label>
                  <Input
                    id="Resume"
                    type="file"
                    placeholder="Upload your Resume file"
                    onChange={(e) => {
                      setInputvalues((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.files[0],
                      }));
                    }}
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
