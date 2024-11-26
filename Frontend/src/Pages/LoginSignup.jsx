import { useState } from "react";
import { useForm } from "react-hook-form";


const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // This will now log the form data
  };

  return (
    <>
      {/* Top Bar */}
      <div className="w-full z-10 bg-blue-800 flex justify-center items-center text-4xl text-white font-extrabold py-4 shadow-md mt-20">
        {activeTab === "login" && "Login"}
        {activeTab === "signup" && "Sign Up"}
        {activeTab === "guest" && "Guest Check-In"}
      </div>

      {/* Form Container */}
      <div className="min-h-screen flex justify-center items-start pt-0 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
          {/* Tabs for switching between forms */}
          <div className="tabs mb-4 flex justify-center">
            <button
              onClick={() => handleTabClick("login")}
              className={`tab tab-bordered w-1/3 ${
                activeTab === "login" ? "tab-active" : ""
              }`}
            >
              <label className="block text-sm font-medium hover:text-blue-500 hover:font-bold">
                Login
              </label>
            </button>

            <button
              onClick={() => handleTabClick("signup")}
              className={`tab tab-bordered w-1/3 ${
                activeTab === "signup" ? "tab-active" : ""
              }`}
            >
              <label className="block text-sm font-medium hover:text-blue-500 hover:font-bold">
                Sign Up
              </label>
            </button>

            <button
              onClick={() => handleTabClick("guest")}
              className={`tab tab-bordered w-1/3 ${
                activeTab === "guest" ? "tab-active" : ""
              }`}
            >
              <label className="block text-sm font-medium hover:text-blue-500 hover:font-bold">
                Guest
              </label>
            </button>
          </div>

          {/* Login Form */}
          {activeTab === "login" && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"  {...register("email", { required: true })}
                />
                 {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                  
                />
                 {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
              </div>
              <button className="btn btn-primary w-full">Login</button>
            </form>
          )}

          {/* Sign Up Form */}
          {activeTab === "signup" && (
            <form  onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium">
                  Fullname
                </label>
                <input
                  id="fullname"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your full name"
                  {...register("fullname", { required: true })}
                />
                 {errors.fullname && <p className="text-red-500 text-sm">FullName is required</p>}
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="signupemail"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  {...register("signupemail", { required: true })}
                />

                {errors.signupemail && <p className="text-red-500 text-sm">Email is required</p>}              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium">
                  Contact Number
                </label>
                <input
                  id="contact"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your contact number"
                  {...register("contact", { required: true })}
                />
                 {errors.contact && <p className="text-red-500 text-sm">Contact is required</p>}
              </div>
              <div>
                <label htmlFor="password-signup" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="passwordsignup"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Create a password"
                  {...register("passwordsignup", { required: true })}
                />
                 {errors.passwordsignup && <p className="text-red-500 text-sm">password is required</p>}

              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  id="confirmpassword"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Confirm your password"
                  {...register("confirmpassword", { required: true })}
                  
                />
                 {errors.confirmpassword && <p className="text-red-500 text-sm">password is required</p>}

              </div>
              <button className="btn btn-primary w-full">Sign Up</button>
            </form>
          )}

          {/* Guest Check-In Form */}
          {activeTab === "guest" && (
            <form  onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="guest-name" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="guestname"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your full name"
                  {...register("guestname", { required: true })}
                  
                />
                 {errors.guestname && <p className="text-red-500 text-sm">GuestName is required</p>}


              </div>
              <div>
                <label htmlFor="guest-contact" className="block text-sm font-medium">
                  Contact Number
                </label>
                <input
                  id="guestcontact"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your contact number"
                  {...register("guestcontact", { required: true })}
                  
                />
                 {errors.guestcontact && <p className="text-red-500 text-sm">GuestContact is required</p>}

              </div>
              <div>
                <label htmlFor="guest-address" className="block text-sm font-medium">
                  Address
                </label>
                <input
                  id="guestaddress"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your address"
                  {...register("guestaddress", { required: true })}
                  
                />
                 {errors.guestaddress && <p className="text-red-500 text-sm">Guestaddress is required</p>}

              </div>
              <div>
                <label htmlFor="guest-email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="guestemail"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  {...register("guestemail", { required: true })}
                  
                />
                 {errors.guestemail && <p className="text-red-500 text-sm">GuestEmail is required</p>}

              </div>
              <button className="btn btn-primary w-full">Check-In as Guest</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
