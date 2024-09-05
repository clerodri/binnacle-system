import { useForm } from "react-hook-form";
import { LoginProps } from "../types";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit = (data: object) => {
    //
    console.log(data);
  };
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-100">
      <header className="w-full bg-pink-400">Header vacio</header>

      <main className="w-10/12 glass sm:w-5/12 md:w-6/12 lg:w-5/12 xl:w-3/12 bg-white mt-10">
        <div className="w-full text-center my-5">
          <h1 className="text-4xl font-bold">Binnacle System</h1>
        </div>
        <form
          className="w-full px-3 space-y-3  mt-20 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <label
            htmlFor="username"
            className="input input-bordered flex items-center gap-2  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              id="username"
              type="text"
              className="grow "
              placeholder="Usuario"
              {...register("username", {
                required: "Usuario es obligatorio",
              })}
            />
          </label>
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
          <label
            htmlFor="password"
            className="input input-bordered flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              id="password"
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password", {
                required: "Contraseña es obligatorio",
              })}
            />
          </label>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <div className="mx-5  py-10">
            <button type="submit" className="btn w-full text-xl bg-blue-400 ">
              Login
            </button>
          </div>
        </form>
      </main>

      <footer className=" w-10/12 md:w-8/12 lg:w-5/12  mt-20">
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg">Get In Touch</h3>
          <p className=" text-gray-400">
            Email:{" "}
            <a
              href="mailto:support@binnacle.com"
              className="hover:text-teal-400"
            >
              support@binnacle.com
            </a>
          </p>
          <div className="mt-4 flex space-x-4 justify-center md:justify-end">
            <a href="#" className="hover:text-teal-400">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="hover:text-teal-400">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="hover:text-teal-400">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-2 text-center text-gray-500 text-sm">
          © 2024 Binnacle. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Login;
