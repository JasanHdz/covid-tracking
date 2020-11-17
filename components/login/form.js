import { loginWithGoogle, loginWithEmailAndPassword } from 'lib/auth'
import { FcGoogle } from 'react-icons/fc'
import styled from 'styled-components'
import Button, { BtnPrimary } from 'common/button'
import { useRef } from 'react'

const Span = styled.span`
  margin-left: 10px;
`

const GoogleButton = styled(Button)`
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
  h1 {
    margin: 30px 0 30px 0;
    text-align: center;
    font-size: 20px;
  }
  .alternative {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
    height: 260px;
    input {
      font-size: 1rem;
      padding: 1rem;
      border-radius: 12px;
      outline: 0;
      border: 1px solid rgba(0,0,0,0.24);
      :focus {
        border: 1px solid var(--dark);  
      }
    }
  }

  @media screen and (min-width: 768px) {
    .isotipo {
      margin-top: 5px;
      font-size: 20px;
    }
    h1 {
      margin: 40px 0 40px 0;
      font-size: initial;
    }
    .alternative {
      margin: 10px 0 10px 0;
    }
  }

  @media screen and (min-width: 400px) {
    .form {
      height: 300px;
    }
  }
`

function LoginForm() {
  const ref = useRef(null)
  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(ref.current)
    const email = formData.get('email')
    const password = formData.get('password')
    await loginWithEmailAndPassword(email, password)
  }
  return (
    <LoginFormStyled>
      <div className="logotipo">
        <img src="/logo.svg" alt="logotipo" width="60" height="60" />
        <p className="isotipo">Covid Tracking</p>
      </div>
      <h1>Iniciar sesión como administrador</h1>
      <GoogleButton onClick={loginWithGoogle}><FcGoogle size={25} /> <Span>Iniciar sesión con Google</Span></GoogleButton><br />
      <div className="alternative">
        <div className="line" />
        <p>O INICIA CON CORREO</p>
        <div className="line" />
      </div>
      <form ref={ref} onSubmit={handleSubmit} method="POST" className="form">
        <input required type="email" placeholder="email" name="email" />
        <input required type="password" placeholder="contraseña" name="password" />
        <BtnPrimary padding="12px 16px;" type="submit">Iniciar sesión</BtnPrimary>
      </form>
    </LoginFormStyled>
  )
}

export default LoginForm