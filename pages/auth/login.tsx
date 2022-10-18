import type { NextPage } from 'next'

const Login: NextPage = () => {
    return (
        <div className='container-fluid'>
            <div className='row h-full'>
                <div className='col-md-6 '>


                    <div className='h-100 d-flex flex-column justify-content-center px-5'>

                        <img src='/images/logo.png' alt='Registro Vehicular' className='mb-3 d-block mx-auto' style={{width: '15%'}}/>
                        <h1 className='title mb-5 text-center'>Bienvenido</h1>
                        <div className="mb-3">
                            <label className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control"  placeholder="name@example.com" />
                        </div>
                        <div className="mb-5">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control"  placeholder="*********" />
                        </div>

                        <div className="d-grid gap-2 mb-5">
                            <button type="button" className="btn btn-danger fw-bold btn-lg">Iniciar sesión</button>
                        </div>

                        <div className='text-center mb-5'>
                            <button type="button" className="btn btn-link text-secondary fw-bold">¿Olvidaste tu contraseña?</button>
                        </div>


                        <img src='/images/logo-gray.png' alt='Registro Vehicular' className='d-block mx-auto' />
                        

                        

                    </div>

                </div>
                <div className='col-md-6 bg-login' ></div>

            </div>
        </div>
    )
}

export default Login
