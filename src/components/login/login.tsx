import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Login() {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const code = query.get('code');
  if(code) {
    axios.get(`/api/accesstoken?code=${code}`).then(res => {
      if(res.status === 200 && typeof res.data === 'string'){
        navigate('/',{state:{accessToken: res.data}})
      }
    });
  }
  return <>
    <a
      className="inline-flex items-center justify-center rounded-full bg-gray-100 p-3 m-2 absolute"
      href=".."
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="m12 19-7-7 7-7"></path>
        <path d="M19 12H5"></path>
      </svg>
    </a>
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="text-gray-500">Sign in with your github account</p>
      </div>
      <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-100 h-[1px] w-full my-6"></div>
      <img src="/github-icon.png" alt="github" className="mx-auto w-64" />
      <a className="space-y-4 block" href="https://github.com/login/oauth/authorize?client_id=Ov23liFOAvma299kOPOq">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border transition-colors duration-300 active:bg-black active:text-white h-10 px-4 py-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          Sign in with GitHub
        </button>
      </a>
    </div>
  </>;
}