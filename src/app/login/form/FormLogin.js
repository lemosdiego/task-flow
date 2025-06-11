import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import "../login.css";

const FormLogin = () => {
  return (
    <div className="form-container">
      <h2>Task Flow</h2>
      <form className="form">
        <input
          type="text"
          placeholder="Username"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit" className="form-button">
          Entrar
        </button>

        <div>
          <span>Ou entre com:</span>
        </div>

        <div className="input-icon-wrapper">
          <FcGoogle className="input-icon" />
          <input
            type="text"
            placeholder="Google"
            className="form-input with-icon"
            required
          />
        </div>

        <div className="input-icon-wrapper">
          <FaMicrosoft className="input-icon" />
          <input
            type="text"
            placeholder="Microsoft"
            className="form-input with-icon"
            required
          />
        </div>

        <div className="input-icon-wrapper">
          <FaApple className="input-icon" />
          <input
            type="text"
            placeholder="Apple"
            className="form-input with-icon"
            required
          />
        </div>

        <div>
          <span>
            Não tem uma conta?{" "}
            <Link href="/" className="link">
              Cadastre-se
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
