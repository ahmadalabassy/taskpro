import { useFormik } from "formik";
import styles from "./Login.module.css";
import { Link } from "react-router";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberDevice: false,
    },

    onSubmit: function (values) {
      console.log("Login Data:", values);
    },
  });

  return (
    <div className={`${styles.container} `}>
      {/* Right Side (Image) */}
      <div className={styles.rightSide}>
        <img src="/login-image.png" alt="Illustration" />
      </div>

      {/* Left Side (Form) */}
      <div className={styles.leftSide}>
        <div className={styles.formContainer}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Logo" />
          </div>
          <h3>Welcome Back!</h3>
          <p>Please login to continue.</p>

          <form onSubmit={formik.handleSubmit} className={styles.formStyle}>
            {/* Email Input */}
            <div className={styles.inputContainer}>
              <input
                type="email"
                id="email"
                placeholder=" "
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.email && formik.errors.email
                    ? styles.inputError
                    : ""
                }
              />
              <label htmlFor="email">Email address</label>
              {formik.touched.email && formik.errors.email ? (
                <div className={styles.errorMessage}>{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Password Input */}
            <div className={styles.inputContainer}>
              <input
                type="password"
                id="password"
                placeholder=" "
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.password && formik.errors.password
                    ? styles.inputError
                    : ""
                }
              />
              <label htmlFor="password">Password</label>
              {formik.touched.password && formik.errors.password ? (
                <div className={styles.errorMessage}>
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            {/* Remember this device and Forgot Password */}
            <div className={styles.optionsContainer}>
              <div className={styles.rememberDevice}>
                <input
                  type="checkbox"
                  id="rememberDevice"
                  checked={formik.values.rememberDevice}
                  onChange={formik.handleChange}
                  className={styles.checkbox}
                />
                <label
                  htmlFor="rememberDevice"
                  className={styles.checkboxLabel}
                >
                  Remember this device
                </label>
              </div>
              <div className={styles.forgotPassword}>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </div>

            {/* Buttons */}
            <div className={styles.groupBtn}>
              <button type="submit" className={styles.submitBtn}>
                Login
              </button>

              {/* Divider with "Or Sign in with" */}
              <div className={styles.dividerContainer}>
                <div className={styles.dividerLine}></div>
                <span className={styles.dividerText}>Or Sign in with</span>
                <div className={styles.dividerLine}></div>
              </div>

              {/* Google Sign In Button */}
              <button type="button" className={styles.googleBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Google
              </button>
              <p className={styles.createAccount}>
                New here? <Link to="/register">Create a new account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
