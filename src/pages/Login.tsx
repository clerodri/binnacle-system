import { useForm } from "react-hook-form";
import { LoginProps } from "../types";

//
//
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
    <div className="flex flex-col h-screen md:items-center  ">
      <header className="flex-1 max-h-[100px] w-screen items-center justify-center   ">
        <a href=""></a>
        <span>Tu gestion es nuestra prioridad.</span>
      </header>
      <main className="flex-1 md:mt-16 md:flex-none md:max-h-[400px] md:flex md:border-2 md:rounded-xl md:shadow-xl  md:max-w-[450px] md:w-full md:h-full  items-center justify-center">
        <div className="flex flex-col md:w-full items-center ">
          <h2 className="text-4xl text-black text-center  font-lobster ">
            Binnacle System
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 p-4 space-y-3 flex-col  max-w-[500px] "
          >
            <label
              htmlFor="username"
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
                id="username"
                type="text"
                className="grow"
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
              className="input input-bordered flex items-center gap-2"
              htmlFor="password"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
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
            <div className="divider"></div>
            <button
              type="submit"
              className="btn  md:btn-md  w-full bg-blue-400 "
            >
              Login
            </button>
          </form>
        </div>
      </main>
      <footer className="flex-1 text-black ">
        <div className="container mx-auto  flex flex-col  justify-center items-center md:mt-10 md:w-full ">
          <h3 className="font-semibold text-lg">Get In Touch</h3>
          <p className="mt-4 text-gray-400">
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

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          © 2024 Binnacle. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Login;
