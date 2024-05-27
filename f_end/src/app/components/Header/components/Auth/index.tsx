import { FC } from "react";

import Link from "next/link";
import { useAppDispatch } from "../../../../../lib/hooks";
import { clearToken } from "../../../../../lib/slices/tokenSlice";

interface Props {
  token: string | null;
}

const Auth: FC<Props> = ({ token }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {!!token ? (
        <button onClick={() => dispatch(clearToken())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="white"
              strokeWidth="2"
              d="M8 18.928A8 8 0 108 5.072"
            ></path>
            <path
              fill="white"
              d="M2 12l-.78-.625-.5.625.5.625L2 12zm9 1a1 1 0 100-2v2zM5.22 6.375l-4 5 1.56 1.25 4-5-1.56-1.25zm-4 6.25l4 5 1.56-1.25-4-5-1.56 1.25zM2 13h9v-2H2v2z"
            ></path>
          </svg>
        </button>
      ) : (
        <Link className="flex items-center hover:text-gray-200" href="/auth">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      )}
    </>
  );
};

export default Auth;
