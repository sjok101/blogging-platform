import Header from "../components/Header";
import "../css/Signup.css";

export default function Signup() {
  return (
    <>
      <Header />
      <div id="signup-container">
        <h2>Sign-up</h2>
        <p>Please enter your information here:</p>
        <form id="signup-form">
          <label className="column" htmlFor="username">
            Username:{" "}
          </label>
          <input
            className="column"
            required
            type="text"
            id="username"
            name="username"
            autoComplete="off"
          />
          <label className="column" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="column"
            required
            type="password"
            id="password"
            name="password"
            autoComplete="off"
          />
          <label className="column" htmlFor="confirm-password">
            Confirm Password:{" "}
          </label>
          <input
            className="column"
            required
            type="password"
            id="confirm-password"
            name="confirm-password"
            autoComplete="off"
          />
          <input type="submit" id="submit" name="submit"></input>
        </form>
      </div>
    </>
  );
}
