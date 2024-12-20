import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const UserInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4001/user/login", UserInfo);

      if (response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirect based on role after login
        if (response.data.user.role === 'Admin') {
          navigate('/admindb');
        } else if (response.data.user.role === 'Organizer') {
          navigate('/orgdb');
        } else {
          navigate('/'); // General user page
        }
      } else {
        alert("Login successful, but no token received.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error: " + error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
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
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>
          <button className="btn btn-primary w-full">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
