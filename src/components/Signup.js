import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../contexts/auth-context";
import { useNavigate, useLocation } from "react-router";
import { signupUser } from "../utils/requestUtils/AuthRequestUtils";

export const Signup = () => {
  const { setIsLoggedIn } = useAuth();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const location = useLocation();
  const navigate = useNavigate();
  const signupHandler = async (event) => {
    event.preventDefault();
    const response = await signupUser(userData);
    document.cookie = "token=" + response.encodedToken;
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
    navigate(location?.state?.from?.pathname, { replace: true });
    showSignupToast();
  };

  const testUserSignupHandler = async (event) => {
    event.preventDefault();
    setUserData({ ...userData, email: "test", password: "test" });
    const response = await signupUser({ email: "test", password: "test" });
    document.cookie = "token=" + response.encodedToken;
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
    navigate(location?.state?.from?.pathname, { replace: true });
    showTestSignupToast();
  };

  const showSignupToast = () =>
    toast.success("You have signed up successfully.");

  const showTestSignupToast = () =>
    toast.success("You have signed up as a test user.");

  return (
    <>
      <main>
        <div className="flex-row-wrap-start-center">
          <form>
            <div className="sign-up">
              <div className="input-container flex-col-wrap-center">
                <h2 className="md-heading">SIGN UP</h2>
                <div className="input-group">
                  <div className="input-label highlight-text">Email address</div>
                  <input
                    type="text"
                    className="input-field input-field-20w"
                    placeholder="ram.manohar@gmail.com"
                    onChange={(event) =>
                      setUserData({ ...userData, email: event.target.value })
                    }
                  ></input>
                </div>
                <div className="input-group">
                  <div className="input-label highlight-text">Password</div>
                  <input
                    type="password"
                    className="input-field input-field-20w"
                    placeholder="************"
                    onChange={(event) =>
                      setUserData({ ...userData, password: event.target.value })
                    }
                  ></input>
                </div>
                <div className="input-group">
                  <input type="radio" className="input-field"></input>
                  <span className="radio-text highlight-text">
                    &nbsp; I accept all Terms & Conditions
                  </span>
                </div>
                <button className="btn btn-primary" onClick={signupHandler}>
                  Create New Account
                </button>
                <button
                  className="btn btn-primary"
                  onClick={testUserSignupHandler}
                >
                  Create Test Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
