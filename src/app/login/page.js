import FormLogin from "./form/FormLogin";
import "./login.css";

export default function Login() {
  return (
    <main className="login-page">
      <img src="/amico.png" className="img" />
      <FormLogin />
    </main>
  );
}
