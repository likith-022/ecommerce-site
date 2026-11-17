
import { useNavigate } from "react-router";
import { useState } from "react";
import { Form, Field, useForm } from "@formisch/react";
import * as v from "valibot";
import useAuthStore from "../store/auth-store";

const LoginSchema = v.object({
  email: v.pipe(
    v.string(),
    v.minLength(1, "Email is required"),
    v.email("Enter a valid email address")
  ),

  username: v.pipe(
    v.string(),
    v.minLength(1, "Username is required"),
    v.minLength(3, "Username must be at least 3 characters")
  ),

  password: v.pipe(
    v.string(),
    v.minLength(1, "Password is required"),
    v.minLength(6, "Password must be at least 6 characters")
  ),
});

const LoginPage = () => {
  const login = useAuthStore((state) => state.login);
  const username = useAuthStore((state) => state.username);
  const savedEmail = useAuthStore((state) => state.email);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);

  const [error, setError] = useState("");

  const loginForm = useForm({
    schema: LoginSchema,
  });
  const navigate = useNavigate();

  const handleLogin = async (
    output: v.InferOutput<typeof LoginSchema>
  ) => {
    try {
      setError("");
      await login(output.username, output.password);

      alert ("successfully Logged In!");
        navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  
  if (isLoggedIn) {
    return (
      <div className="container my-5">
        <div
          className="card shadow-sm border-0 p-4 mx-auto"
          style={{ maxWidth: "450px", borderRadius: "15px" }}
        >
          <div className="text-center mb-4">
            <i
              className="bi bi-person-circle"
              style={{ fontSize: "65px", color: "#174b38" }}
            ></i>

            <h2 className="fw-bold mt-3" style={{ color: "#174b38" }}>
              My Account
            </h2>

            <p className="text-muted">
              Welcome to your GLK account
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Username
            </label>
            <p className="form-control bg-light">{username}</p>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">
              Email
            </label>
            <p className="form-control bg-light">{savedEmail}</p>
          </div>

          <button
            className="btn text-white w-100 py-2"
            style={{ backgroundColor: "#174b38" }}
            onClick={logout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
        </div>
      </div>
    );
  }

 
  return (
    <div className="container my-5">
      <div
        className="card shadow-sm border-0 p-4 p-md-5 mx-auto"
        style={{ maxWidth: "480px", borderRadius: "15px" }}
      >
        <div className="text-center mb-4">
          <i
            className="bi bi-person-circle"
            style={{ fontSize: "65px", color: "#174b38" }}
          ></i>

          <h2 className="fw-bold mt-3" style={{ color: "#174b38" }}>
            Welcome Back
          </h2>

          <p className="text-muted">
            Login to your GLK account
          </p>
        </div>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <Form of={loginForm} onSubmit={handleLogin}>
       
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email
            </label>

            <Field of={loginForm} path={["email"]}>
              {(field) => (
                <>
                  <input
                    {...field.props}
                    value={field.input ?? ""}
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />

                  {field.errors?.[0] && (
                    <small className="text-danger">
                      {field.errors[0]}
                    </small>
                  )}
                </>
              )}
            </Field>
          </div>

        
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Username
            </label>

            <Field of={loginForm} path={["username"]}>
              {(field) => (
                <>
                  <input
                    {...field.props}
                    value={field.input ?? ""}
                    type="text"
                    className="form-control"
                    placeholder="Enter your username"
                  />

                  {field.errors?.[0] && (
                    <small className="text-danger">
                      {field.errors[0]}
                    </small>
                  )}
                </>
              )}
            </Field>
          </div>

       
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Password
            </label>

            <Field of={loginForm} path={["password"]}>
              {(field) => (
                <>
                  <input
                    {...field.props}
                    value={field.input ?? ""}
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />

                  {field.errors?.[0] && (
                    <small className="text-danger">
                      {field.errors[0]}
                    </small>
                  )}
                </>
              )}
            </Field>
          </div>

          <button
            type="submit"
            className="btn text-white w-100 py-2 fw-semibold"
            style={{ backgroundColor: "#174b38" }}
          >
            Login
          </button>
        </Form>

        <hr className="my-4" />

        <div className="text-center">
          <h6 className="fw-bold" style={{ color: "#174b38" }}>
            Demo Credentials
          </h6>

          <p className="mb-1">
            <strong>Email:</strong> emily.jones@x.dummyjson.com
          </p>

          <p className="mb-1">
            <strong>Username:</strong> emilys
          </p>

          <p className="mb-0">
            <strong>Password:</strong> emilyspass
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
