import axios from "axios";
import { toast } from "react-toastify";
import { UserActions } from "./UserSlice";

const api = `${process.env.REACT_APP_API}/api/v1`;
export const LoginUser = (cradentials, navigate) => {
  return async (dispatch) => {
    toast.promise(axios.post(`${api}/user/login`, cradentials), {
      pending: "Logging in...",
      success: {
        render({ data }) {
          console.log(data);
          dispatch(
            UserActions.login({
              isLoggedin: true,
              userData: data.data.data.user,
              token: data.data.data.token,
              error: false,
            })
          );
          localStorage.setItem("token", data.data.data.token);
          navigate("/newBoard");
          return "Success!";
        },
      },
      error: {
        render({ data }) {
          console.log(data);
          dispatch(
            UserActions.login({
              isLoggedin: false,
              userData: {},
              token: "",
              error: true,
            })
          );
          return `${data.response.data.error}`;
        },
      },
    });
  };
};

export const RegisterUser = (cradentials, navigate) => {
  return async (dispatch) => {
    toast.promise(axios.post(`${api}/user/register`, cradentials), {
      pending: "Registering...",
      success: {
        render({ data }) {
          console.log(data);
          dispatch(
            UserActions.register({
              isLoggedin: true,
              userData: data.data.data.user,
              token: data.data.data.token,
              error: false,
            })
          );
          localStorage.setItem("token", data.data.data.token);
          navigate("/newBoard");
          return "Success!";
        },
      },
      error: {
        render({ data }) {
          console.log(data);
          dispatch(
            UserActions.register({
              isLoggedin: false,
              userData: {},
              token: "",
              error: true,
            })
          );
          return `${data.response.data.error}`;
        },
      },
    });
  };
};
