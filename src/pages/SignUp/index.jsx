import * as S from "./style";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/api/authService";

import background from "../../assets/FundoOnline3.jpg";
import picture from "../../assets/LogoRedondo.jpeg";

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ name, email, password }) => {
    setLoading(true);

    try {
      await signUp(name, email, password);
      navigate("/sign-in");
    } catch (error) {
      setError("Tente novamente, não foi possível cadastrar usuário");
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
            name="name"
            type="text"
            placeholder="Nome"
            {...register("name", { required: true })}
          />
          {errors.name && errors.name.message}
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
          <S.Button type="submit">
            {loading ? "Carregando..." : "Cadastrar"}
          </S.Button>

          <S.Register onClick={() => navigate("/sign-in")}>
            Já possui uma conta? Faça login!
          </S.Register>
        </S.Form>
      </S.Right>
    </S.Container>
  );
}