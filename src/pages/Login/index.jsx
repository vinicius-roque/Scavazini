import * as S from "./style";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/api/authService";

import background from "../../assets/FundoOnline3.jpg";
import picture from "../../assets/LogoRedondo.jpeg";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ email, password }) => {
    setLoading(true);

    try {
      const answer = await signIn(email, password);
      localStorage.setItem("token", answer.token);
      navigate("/home");
    } catch (error) {
      setError("Tente novamente, usuário ou senha inválido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container background={background}>
      <S.Left>
        <S.Picture src={picture} />
      </S.Left>

      <S.Right>
        <S.LogoResponsive src={picture} />
        <S.Form onSubmit={handleSubmit(onSubmit)} error={error}>
          {error && <S.Error>{error}</S.Error>}
          <S.Input
            name="email"
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.message}
          <S.Input
            name="password"
            type="password"
            placeholder="Senha"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && errors.password.message}
          <S.Button>
            {loading ? "Carregando..." : "Entrar"}
          </S.Button>

          <S.Register onClick={() => navigate("/sign-up")}>
            Ainda não possui uma conta? Cadastre-se!
          </S.Register>
        </S.Form>
      </S.Right>
    </S.Container>
  );
}