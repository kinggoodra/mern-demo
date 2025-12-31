import { Button } from "./components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
import { Link } from "react-router";
import axios from "axios";
export default function Login() {
  const [LoginData, setLoginData] = useState({});
  function debounce(func, timer) {
    let timeoutID;
    return (e) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => func(e), timer);
    };
  }

  const LoginAccount = async () => {
    const response = await axios.post("http://localhost:3000/", LoginData, {
      withCredentials: true,
    });
    console.log(response);
    
  };
  const debouncedChange = debounce((e) => {
    setLoginData((val) => ({
      ...val,
      [e.target.id]: e.target.value,
    }));
  }, 1000);

  return (
    <>
      <div className="flex justify-center align-middle mt-[10%]">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Link to={"/SignUP"}>
                <Button variant="link">Sign Up</Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form action={LoginAccount}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    onChange={debouncedChange}
                  />
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
                    placeholder="password"
                    onChange={debouncedChange}
                  />
                </div>
              </div>
              <CardFooter className="flex-col mt-5 gap-2">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <div className="grid grid-cols-2  gap-2 w-full ">
                  <Button
                    variant="outline"
                    className="w-full gap-1"
                    onClick={() =>
                      (window.location.href =
                        "http://localhost:3000/auth/google")
                    }
                  >
                    <FcGoogle />
                    Login with Google
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full gap-1"
                    onClick={() =>
                      (window.location.href =
                        "http://localhost:3000/auth/linkedin")
                    }
                  >
                    <AiFillLinkedin style={{ color: "#0077B5" }} />
                    Login with Linkedin
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full gap-1"
                    onClick={() =>
                      (window.location.href =
                        "http://localhost:3000/auth/github")
                    }
                  >
                    <AiFillGithub style={{ color: "#171515" }} />
                    Login with Github
                  </Button>
                </div>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
