import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../../../assets/CourseHub.png";
import Image from "../../../assets/login.png";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
  useTitle('Signup')
  const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    // const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,  email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Registration uccessful");
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name); //, photoURL
        handleEmailVerification();
        toast.info("Please verify your email address before login");
      })
      .catch((error) => toast.warning(error.message));
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      // photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => toast.warning(e));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((e) => toast.warning(e));
  };

  // const handleGoogleSignIn = () =>{
  //   signInWithGoogle()
  //   .then (result => {
  //     const user = result.user;
  //     console.log(user);
  //   })
  //   .catch(error => console.error(error));
  // }


  return (
    <div className="bg-[#e3eafe]">
      <p className="text-2xl text-center font-bold pt-5 text-sky-400 pb-5">
        Sign up to access everything!
      </p>
      <section className="py-20 lg:py-[8px]">
        <div className="grid lg:grid-cols-2 items-center justify-center mb-10">
          <div>
            <img className=" max-h-[515px] w-auto mx-auto" src={Image} alt="" />
          </div>
          <div className="flex w-auto flex-wrap mx-2">
            <div className="w-full px-4">
              <div className="max-w-[520px] mx-auto text-center bg-white rounded-lg relative overflow-hidden py-2 px-8 sm:px-12 md:px-[60px] ">
                <div className="md:mb-10 text-center">
                  <Link
                    href="#"
                    className="inline-block mt-2 max-w-[160px] mx-auto"
                  >
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="
                            w-full
                            rounded-md
                            border
                            bordder-[#E9EDF4]
                            py-3
                            px-5
                            bg-[#FCFDFE]
                            text-base text-[#525456]
                            placeholder-[#ACB6BE]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-info
                            "
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="
                            w-full
                            rounded-md
                            border
                            bordder-[#E9EDF4]
                            py-3
                            px-5
                            bg-[#fbfcfe]
                            text-base text-[#525456]
                            placeholder-[#9fa7ac]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-info
                            "
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="
                            w-full
                            rounded-md
                            border
                            bordder-[#E9EDF4]
                            py-3
                            px-5
                            bg-[#fbfcfe]
                            text-base text-[#525456]
                            placeholder-[#9fa7ac]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-info
                            "
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <button
                      type="submit"
                      value="login"
                      className="
                            w-full
                            rounded-md
                            py-3
                            px-5
                            bg-info
                            text-base text-white
                            cursor-pointer
                            hover:bg-opacity-90
                            transition
                            "
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <p className="text-base text-[#757575] pb-4">
                   Already a member?
                  <span className="pl-2">
                    <Link to="/login" className="text-primary hover:underline">
                      Log In
                    </Link>
                  </span>
                </p>
                <div>
                  <span className="absolute top-1 right-1">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.39737"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 1.39737 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 1.39737 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 13.6943 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 13.6943 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 25.9911 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 25.9911 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 38.288 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 38.288 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 1.39737 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 13.6943 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 25.9911 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 38.288 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 1.39737 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 13.6943 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 25.9911 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 38.288 14.0086)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                  <span className="absolute left-1 bottom-1">
                    <svg
                      width="29"
                      height="40"
                      viewBox="0 0 29 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="2.288"
                        cy="25.9912"
                        r="1.39737"
                        transform="rotate(-90 2.288 25.9912)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="25.9911"
                        r="1.39737"
                        transform="rotate(-90 14.5849 25.9911)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="25.9911"
                        r="1.39737"
                        transform="rotate(-90 26.7216 25.9911)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="13.6944"
                        r="1.39737"
                        transform="rotate(-90 2.288 13.6944)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="13.6943"
                        r="1.39737"
                        transform="rotate(-90 14.5849 13.6943)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="13.6943"
                        r="1.39737"
                        transform="rotate(-90 26.7216 13.6943)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="38.0087"
                        r="1.39737"
                        transform="rotate(-90 2.288 38.0087)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="1.39739"
                        r="1.39737"
                        transform="rotate(-90 2.288 1.39739)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="38.0089"
                        r="1.39737"
                        transform="rotate(-90 14.5849 38.0089)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="38.0089"
                        r="1.39737"
                        transform="rotate(-90 26.7216 38.0089)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="1.39761"
                        r="1.39737"
                        transform="rotate(-90 14.5849 1.39761)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="1.39761"
                        r="1.39737"
                        transform="rotate(-90 26.7216 1.39761)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
