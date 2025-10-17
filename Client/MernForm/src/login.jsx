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
import { Link } from "react-router";
export default function Login() {
  const [LoginData, setLoginData] = useState({});
  function debounce(func, timer) {
    let timeoutID;
    return (e) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => func(e), timer);
    };
  }

  const LoginAccount = () => {};
  const debouncedChange = debounce((e) => {
    setLoginData((val) => ({
      ...val,
      [e.target.id]: e.target.value,
    }));
  }, 1500);
  
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
                    required
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
                  <Input id="password" type="password" required />
                </div>
              </div>
              <CardFooter className="flex-col mt-5 gap-2">
                <Link to={""}>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </Link>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
