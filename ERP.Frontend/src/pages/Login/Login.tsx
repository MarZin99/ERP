import { useState } from 'react';
import { fetchAuth } from '../../_services/auth.service';
import { loginSchema, type AuthRequest } from '../../models/Auth.types';
import { toast } from 'react-toastify';

import "./Login.scss";
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components/Form/Form';
import { FormInput } from '../../components/Form/FormInput/FormInput';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data: AuthRequest) => {
    setLoading(true);

    try {
      const response = await fetchAuth(data);

      if (!response.isSuccess) {
        toast.error(response.error?.message ?? "Login Failed.");
        return;
      }

      localStorage.setItem("token", response.data.token);
      toast.success("Login Succesfull!");
      navigate("/employees");
    } catch (err) {
      toast.error(`${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Log in</h1>

      <Form schema={loginSchema} onSubmit={handleSubmit}>
        <FormInput name="email" label="Email"  /> {/*type="email"*/}
        <FormInput name="password" label="Hasło" type="password" />

        <button
          type="submit"
          disabled={loading}
          className="login-button"
        >
          {loading ? "Logging..." : "Sign in"}
        </button>
      </Form>
    </div>
  );
};
