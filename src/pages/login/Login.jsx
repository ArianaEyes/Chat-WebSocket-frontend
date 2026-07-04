
import "../../styles/Login.css"

const Login = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className='w-20  h-100 d-flex justify-content-center align-items-center row-cols-1'>
      <div className='container-login col'>
        <h1 className='text-center'>Login</h1>
        <form className='d-flex flex-column '>
          <input type="text" placeholder='Usuario' className='form-control mb-3 '/>
          <input type="password" placeholder='Contraseña' className='form-control mb-3'/>
          <button type='submit' className='btn bg-jared text-white fw-semibold fz-20'>Iniciar Sesión</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
