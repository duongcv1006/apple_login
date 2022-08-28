// import HeaderLogo from '@/components/icon/header-logo';
// import { useAuth } from '@/hooks/index';
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DefaultInput from "@/components/common/input/default-input";
import MButton from "@/components/common/button/button";
import InputPassword from "@/components/common/input/input-password";
import { CircularProgress } from "@mui/material";
import MyAppleSigninButton from "@/components/common/button/button-login-apple";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export default function LoginPage() {
  const router = useRouter();
  // const { login, user } = useAuth({
  //   revalidateOnMount: false,
  // });
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const onSubmit = async (data: any) => {
    try {
      const { username, password } = data;
      setLoading(true);
      setError("");
      // const userData = await login(username, password);
      // localStorage.setItem('user', JSON.stringify(userData?.user));
      // localStorage.setItem('REMOTE_CONFIG', JSON.stringify(userData?.REMOTE_CONFIG));
      router.push("/");
    } catch (error) {
      console.log("failed to login", error);
      setError("Login fail, something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // if (user) {
  //   router.replace('/');
  // }

  return (
    <div
      className="flex"
      style={{ maxWidth: 500, justifyContent: "center", alignItems: "cetner", margin:'auto' }}
    >
      <div className="login-form">
        <h2 className="mt-[60px] font-semibold text-[2.6rem]">WELCOME BACK</h2>
        <div className="mb-[45px]">
          <span className="text-[25px] text-[rgb(117,117,117)] ">
            Please log into your account
          </span>
          <div>{loading ? <CircularProgress size={24} /> : null}</div>
          <div className="text-[red]">{error ? error : null}</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-7">
            <label htmlFor="userphame" className="font-semibold">
              Phone Number
            </label>
            <div className="mt-3">
              <DefaultInput
                control={control}
                name="username"
                error={errors.username}
                helperText={errors.username?.message}
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="form-group mb-5">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <div className="mt-3">
              <InputPassword
                control={control}
                name="password"
                error={errors.password}
                helperText={errors.password?.message}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="mt-[30px]">
            <MButton className="login-button" onClick={handleSubmit(onSubmit)}>
              Login
            </MButton>
          </div>
        </form>
      </div>

      <MyAppleSigninButton />
    </div>
  );
}
