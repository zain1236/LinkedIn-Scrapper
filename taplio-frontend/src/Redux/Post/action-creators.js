import axios from "axios";
import { toast } from "react-toastify";
import { PostAction } from "./Posts";

const api = `${process.env.REACT_APP_API}/linkedIn`;
export const fetchPosts = (data, navigate) => {
  return async (dispatch) => {
    console.log(data);
    dispatch(
      PostAction.getPosts({
        viralPost: [],
        isLoading: true,
        error: false,
      })
    );
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };

    //first get the linkedIn cradentials of the user of taplio
    const getLinkedIn = axios.get(
      `${process.env.REACT_APP_API}/api/v1/linkedIn`,
      config
    );

    getLinkedIn.then((d) => {
      console.log(d);
      if (!d.data.found) {
        dispatch(
          PostAction.getPosts({
            viralPost: [],
            isLoading: false,
            error: false,
          })
        );
        navigate("/cntlinkdIn");
      } else {
        const fetch = axios.post(api, {
          email: d.data.data.LinkedInemail,
          password: d.data.data.LinkedInPassword,
          keyword: data.keyword,
          time: data.time,
        });

        fetch
          .then((d) => {
            console.log(d.data.data);
            if (d.data.status === 200) {
              dispatch(
                PostAction.getPosts({
                  viralPost: d.data.data,
                  isLoading: false,
                  error: false,
                })
              );
            } else {
              dispatch(
                PostAction.getPosts({
                  viralPost: [],
                  isLoading: false,
                  error: false,
                })
              );
              toast.error(d.data.data, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          })
          .catch((err) => {
            console.log(err);
            dispatch(
              PostAction.getPosts({
                viralPost: [],
                isLoading: false,
                error: true,
              })
            );
          });
      }
    });
  };
};
