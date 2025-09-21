import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import z from "zod";

const loginFormSchema = z.object(
    {
        email: z.string({ required_error: "Email is required." })
            .email("Enter a valid email."),
        password: z
            .string({ required_error: "Password is required." })
            .min(8, "Password must be 8 character long.")
    }
);



const LoginForm = () => {

    const { register, handleSubmit,
        formState: { errors, isSubmitting }

    } = useForm(
        {
            resolver: zodResolver(loginFormSchema),
            mode: "onSubmit"
        }
    );
    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (userData.email === data.email || userData.password === data.password) { alert('Login Successful.') }
        else {
            alert('Unregistered User, Please register.')
            return ('/');
        }
        navigate('/home')
    }

    const userData = {
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password')
    }
    console.log({ userData });



    return (

        <>
            <div className="sm:flex h-dvh sm:px-80 sm:py-60 justify-between bg-[rgb(242,244,247)] grid grid-rows-1">
                <div className="sm:w-100 mt-20 ">
                    <h1 className="text-5xl font-bold text-[rgb(21,77,113)]">
                        SOCIOGRAM
                    </h1>
                    <p className="text-[24px]">
                        Connect with friends and the world around you on Sociogram.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <div className=" sm:p-3 rounded-sm bg-white sm:shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.2)] w-[396px] h-[348.83px] >)">
                            <ul className=" grid gap-3 ">
                                <li>
                                    <input
                                        placeholder="Email or Phone number"
                                        type="text"
                                        {...register("email")}

                                        className="border rounded-sm w-[100%]  h-[51.3px] px-[16px] py-[14px]"
                                    />
                                    {errors.email && <div className="text-red-600">{errors.email.message}</div>}
                                </li>
                                <li>
                                    <input
                                        placeholder="Password"
                                        type="password"
                                        {...register("password")}

                                        className="border rounded-sm w-[100%]  h-[51.3px] px-[16px] py-[14px]"
                                    />
                                    {errors.password && <div className="text-red-600">{errors.password.message}</div>}
                                </li>
                                <li>
                                    <button
                                        disabled={isSubmitting}
                                        className="flex justify-center  border rounded-sm cursor-pointer
                                        bg-[rgb(21,77,113)] text-white  
                                        font-bold w-[100%] h-[51.3px] px-[16px] py-[14px] mb-2">

                                        Log In
                                    </button>
                                </li>
                                <li className="flex justify-center mb-1">Forgot password?</li>
                                <hr />

                                <li className="flex justify-center">
                                    <Link to="/register" > <button className="flex justify-center cursor-pointer
                                      w-[192.61px] h-[48px] px-[16px] py-[10px] border rounded-sm bg-emerald-600 text-white ">
                                        Create new account
                                    </button></Link>
                                </li>
                            </ul>
                        </div>
                        <p className="flex justify-center mt-2">
                            Create a page for a celebrity, brand or business.
                        </p>
                    </div>

                </form>







            </div>
        </>
    );
};

export default LoginForm;
