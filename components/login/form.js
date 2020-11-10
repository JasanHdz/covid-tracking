import { loginWithGoogle } from 'lib/auth'
import { FcGoogle } from 'react-icons/fc'
import styled from 'styled-components'
import Button, { BtnPrimary } from 'common/button'

const Span = styled.span`
  margin-left: 10px;
`

const ButtonStyled = styled(Button)`
  margin: auto;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.24);
  color: rgba(0, 0, 0, 0.54);

  display: flex;
  align-items: center;  
  justify-content: center;

  width: 100%;
`

const LoginFormStyled = styled.section`
  padding: 1rem;
  margin: 0 auto;
  width: 80%;
  .logotipo {
    text-align: center;
  }
  .isotipo {
    margin-top: 5px;
    font-size: 20px;
  }
  h1 {
    margin: 40px 0 40px 0;
    text-align: center;
  }
  .alternative {
    margin: 10px 0 10px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: rgba(0,0,0,0.24);
    p {
      margin: 0 4px 0 4px;
    }
    .line {
      flex: 1;
      background: rgba(0,0,0,0.24);
      height: 1px;
    }
  }
  
  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 300px;
    input {
      font-size: 1rem;
      padding: 1rem;
      border-radius: 12px;
      outline: 0;
    }
  }
`

function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault()
    console.log('evento submit')
  }
  return (
    <LoginFormStyled>
      <div className="logotipo">
        <img src="/logo.svg" alt="logotipo" width="60" height="60" />
        <p className="isotipo">Covid Tracking</p>
      </div>
      <h1>Iniciar sesión como administrador</h1>
      <ButtonStyled onClick={loginWithGoogle}><FcGoogle size={25} /> <Span>Iniciar sesión con Google</Span></ButtonStyled><br />
      <div className="alternative">
        <div className="line" />
        <p>O INICIA CON CORREO</p>
        <div className="line" />
      </div>
      <form onSubmit={handleSubmit} method="POST" className="form">
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="contraseña" />
        <BtnPrimary type="submit">Iniciar sesión</BtnPrimary>
      </form>
    </LoginFormStyled>
  )
}

export default LoginForm