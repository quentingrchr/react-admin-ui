import * as React from "react";

function InformationCircleFilled(props) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10a8 8 0 11-16.001 0A8 8 0 0118 10zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 000-2v-3a1 1 0 00-1-1H9z"
      />
    </svg>
  );
}

export default InformationCircleFilled;
