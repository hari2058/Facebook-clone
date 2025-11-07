import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import z from "zod";

const registerFormSchema = z.object({
  firstname: z
    .string({ required_error: "Firts name is requred." })
    .nonempty({ message: "First name is required." }),
  lastname: z
    .string({ required_error: "Last name is required." })
    .nonempty({ message: "Last name is required." }),
  day: z.string({ required_error: "Day is required." }),
  month: z.string({ required_error: "Month is required." }),
  year: z.string({ required_error: "Year is required." }),
  email: z
    .string({ required_error: "Email is required." })
    .email("Enter a valid Email address."),
  password: z
    .string({ required_error: "Password is required." })
    .min(8, "Password must be 8 character long.")
    .max(15, "password must be less then 15 characters."),
  gender: z.string(),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
    mode: "onsubmit",
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    localStorage.setItem("fullname", data.firstname + " " + data.lastname);
    localStorage.setItem(
      "Birthdate:",
      data.month + "/" + data.day + "/" + data.year
    );
    localStorage.setItem("gender", data.gender);

    
    toast.success("Successfully Registered");
    navigate("/");
    // alert("Registration Successful.");
  };

 

  return (
    <>
      <div>
        <Toaster position="top-center" 
        reverseOrder={false}  />
      </div>
      <div>
        <div className="grid place-items-center  h-dvh w-screen bg-[rgb(242,244,247)]">
          <div>
            <h1 className="text-5xl font-bold text-[rgb(21,77,113)]">
              SOCIOGRAM
            </h1>
          </div>
          <div className="bg-white p-5 shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.2)]  w-[440px] h-[610.94px] rounded-sm ">
            <div className="px-[10px] py-[16px] ">
              <h3 className="text-2xl font-bold text-center">
                Create a new account
              </h3>
              <p className="text-sm opacity-80 text-center mb-2">
                It's quick and easy.
              </p>
            </div>

            <hr className="opacity-50 mb-4" />
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-1">
              {/* name input area */}
              <div className=" grid grid-cols-2 gap-2 mb-2">
                <input
                  name="firstname"
                  placeholder="First Name"
                  type="text "
                  className="border rounded-sm h-[36px] p-2"
                  {...register("firstname")}
                />
                <input
                  name="lastname"
                  {...register("lastname")}
                  placeholder="Last Name"
                  type="text "
                  className="border rounded-sm p-2 h-[36px]"
                />
              </div>
              <div className="flex gap-10">
                {errors.firstname && (
                  <div className="text-red-600">{errors.firstname.message}</div>
                )}
                {errors.lastname && (
                  <div className="text-red-600">{errors.lastname.message}</div>
                )}
              </div>

              {/* Birhday input area */}
              <div className="mb-2">
                <p className="text-sm opacity-80 mb-0.5">Birthday</p>
                <div className="flex justify-between">
                  <select
                    {...register("day")}
                    name="day"
                    id="day"
                    className="w-[125px] h-[36px] border rounded-sm "
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                  </select>
                  {errors.day && (
                    <div className="text-red-600">{errors.day.message}</div>
                  )}
                  <select
                    {...register("month")}
                    name="month"
                    id="month"
                    className="w-[125px] h-[36px] border rounded-sm "
                  >
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sept">Sept</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">nov</option>
                    <option value="Dec">dec</option>
                  </select>
                  {errors.month && (
                    <div className="text-red-600">{errors.month.message}</div>
                  )}

                  <select
                    {...register("year")}
                    name="year"
                    id="year"
                    className="w-[125px] h-[36px] border rounded-sm "
                  >
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                  </select>
                  {errors.year && (
                    <div className="text-red-600">{errors.year.message}</div>
                  )}
                </div>
              </div>

              {/* Gender input area */}
              <div>
                <p className="text-sm">Gender</p>
                <div className="flex justify-between">
                  <label
                    className="border   rounded-sm w-[125px] h-[36px] flex justify-around items-center "
                    {...register("gender")}
                  >
                    Male
                    <input type="radio" name="gender" value="male" />
                  </label>
                  <label
                    {...register("gender")}
                    className="border rounded-sm w-[125px] h-[36px] flex justify-around items-center "
                  >
                    Female
                    <input type="radio" name="gender" value="female" />
                  </label>
                  <label
                    className="border rounded-sm w-[125px] h-[36px]  flex justify-around items-center"
                    {...register("gender")}
                  >
                    Custom
                    <input type="radio" name="gender" value="custom" />
                  </label>
                </div>
              </div>

              <div>
                <input
                  name="email"
                  {...register("email")}
                  type="text"
                  className="border w-full mt-2 h-[36px] rounded-sm mb-2"
                  placeholder="Mobile number or email"
                />
                {errors.email && (
                  <div className="text-red-600">{errors.email.message}</div>
                )}
              </div>
              <div>
                <input
                  name="password"
                  {...register("password")}
                  type="password"
                  placeholder="New Password"
                  className="border w-full  h-[36px] rounded-sm mb-5"
                />
                {errors.password && (
                  <div className="text-red-600">{errors.password.message}</div>
                )}
              </div>
              <div className="grid gap-2">
                <p className=" text-[11px] ">
                  People who use our service may have uploaded your contact
                  information to SOCIOGRAM. Learn more.
                </p>
                <p className="text-[11px]">
                  By clicking Sign Up, you agree to our Terms, Privacy Policy
                  and Cookies Policy. You may receive SMS Notification from us
                  and can opt out any time.
                </p>
              </div>

              <div className="flex gap-2 justify-center m-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border bg-emerald-500 rounded-sm text-white w-[150px] h-[36px] font-bold cursor-pointer"
                >
                  Sign Up
                </button>
              </div>

              <Link to="/">
                <span className="text-blue-500  flex justify-center">
                  Already have an account?
                </span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
