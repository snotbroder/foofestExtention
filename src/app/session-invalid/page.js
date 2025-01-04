"use client";
import { redirect } from "next/navigation";

function sessionInvalid() {
  function redirectToHome() {
    redirect("/");
  }
  return (
    <>
      <h1>Oops!</h1>
      <h3>Your session expired</h3>
      <p>Your booking did not complete, please try again.</p>
      <button className="button mt-6" onClick={redirectToHome}>
        Back to home
      </button>
    </>
  );
}

export default sessionInvalid;
