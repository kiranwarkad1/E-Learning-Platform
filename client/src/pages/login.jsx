import React, { useEffect, useState } from 'react';
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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { userRegisterUserMutation } from '@/features/api/authApi';
import { useFormState } from 'react-dom';
import { toast } from 'sonner';

const Login = () => {
    const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });
    const [loginInput, setLoginInput] = useState({ email: "", password: "" });

    const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess, },] = userRegisterUserMutation()
    const [loginUser, { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess, },] = userLoginUserMutation();

    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignupInput({ ...signupInput, [name]: value });
        } else {
            setLoginInput({ ...loginInput, [name]: value });
        }
    };

    const handleRegistration = async(type) => {
        const inputData = type === "signup" ? signupInput : loginInput;
        const action = type === "signup" ? registerUser : loginUser;
        await action (inputData);
    };

    useEffect(()=>{
      if(registerError){
        toast.error(rigisterData.data.message || "Signup Failed");
      }
      if(registerIsSuccess && registerData){
        toast.success(registerData.message || "Signup successful." )
      }
      if(loginError){
        toast.error(loginData.data.message || "login Failed");
      }
      if(loginIsSuccess && loginData){
        toast.success(loginData.message || "Login successful." )
      }
    },[loginIsLoading,registerIsLoading, loginData,registerData, loginError,registerError,]);
    return (
        <div className="flex items-center w-full justify-center">
            <Tabs defaultValue="Signup" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Signup">Signup</TabsTrigger>
                    <TabsTrigger value="Login">Login</TabsTrigger>
                </TabsList>

                <TabsContent value="Signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                                Create a new account and click signup when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={signupInput.name}
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                    placeholder="Eg. Sanket"
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={signupInput.email}
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                    placeholder="Eg. sanket@gmail.com"
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={signupInput.password}
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                    placeholder="Eg. 123456"
                                    required
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={registerIsLoading} onClick={() => handleRegistration("signup")}>
                             {
                                registerIsLoading ? (
                                    <>
                                    <Loader2 className = "mr-2 h-4 w-4 animate-spin"/> Please wait
                                    </>
                                ) : "Signup"
                             }
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="Login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Login with your email and password.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={loginInput.email}
                                    onChange={(e) => changeInputHandler(e, "login")}
                                    placeholder="Eg. sanket@gmail.com"
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={loginInput.password}
                                    onChange={(e) => changeInputHandler(e, "login")}
                                    placeholder="Eg. 123456"
                                    required
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={loginIsLoading} onClick={() => handleRegistration("login")}>
                              {
                                loginIsLoading ? (
                                    <>
                                    <Loader2 className = "mr-2 h-4 w-4 animate-spin"/> Please wait
                                    </>
                                
                                ) : "Login"
                              }
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Login;
