'use client';
import React from 'react'

interface Props {
  error: Error;
  reset: () => void; // has to be a function
}

const ErrorPage = ( {error, reset}: Props) => {
  // in real world we want to log this error not only in console but also somewhere else so we can take actions
  // Mosh suggests https://sentry.io/welcome/
  console.log("Error", error);

  return (
    <>
      <div>An unexpected error has occured.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
}

export default ErrorPage