import Header from "../components/Header";

export default function Signup() {
  return (
    <>
      <Header />
      <h2>signup</h2>
      <form>
        <label htmlFor="username">Username: </label>
        <input
          required
          type="text"
          id="username"
          name="username"
          autoComplete="off"
        />
        <label htmlFor="password">Password: </label>
        <input
          required
          type="password"
          id="password"
          name="password"
          autoComplete="off"
        />
        <label htmlFor="confirm-password">Confirm Password: </label>
        <input
          required
          type="password"
          id="confirm-password"
          name="confirm-password"
          autoComplete="off"
        />
        <input type="submit" id="submit" name="submit"></input>
      </form>
    </>
  );
}
