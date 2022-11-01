import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { AuthService } from '../../services/AuthService';
import { LocalStorageService } from '../../services/LocalStorageService';
import Swal from 'sweetalert2'


const Login: NextPage = () => {

    const router = useRouter();

    const defaultValues = {
        email: '',
        password: ''
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

    const submit = async (data: any) => {
        try {
            const response = await AuthService.login(data);

            LocalStorageService.save('imp-session-client', response);
            router.replace('/client/profile');
        } catch (error: any) {
            Swal.fire({
                title: '¡Error!',
                text: error.message || 'Ocurrio un error al iniciar sesión, intenta nuevamente',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
    }

    return (
        <div className='container-fluid bg-login h-full'>

            <div className='d-flex pt-5 justify-content-center align-items-center'>
                <form className='d-flex flex-column  px-5 bg-white w-50 ' onSubmit={handleSubmit(submit)}>

                    <img src='/images/logo.png' alt='Registro Vehicular' className='mb-3 d-block mx-auto mt-5' style={{ width: '15%' }} />
                    <h1 className='title mb-5 text-center'>Bienvenido</h1>
                    <div className="mb-3">
                        <label className="form-label">Correo electrónico</label>
                        <input type="email" className={'form-control ' + (errors.email ? 'is-invalid' : '')}  {...register('email', { required: true })} placeholder="usuario@domain.com" />
                        <div className="invalid-feedback">Campo obligatorio</div>
                    </div>
                    <div className="mb-5">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className={'form-control ' + (errors.password ? 'is-invalid' : '')}   {...register('password', { required: true })} placeholder="*********" />
                        <div className="invalid-feedback">Campo obligatorio</div>
                    </div>

                    <div className="d-grid gap-2 mb-5">
                        <button type="button" className="btn btn-danger fw-bold btn-lg" onClick={handleSubmit(submit)}>Iniciar sesión</button>
                    </div>

                    <div className='text-center mb-5'>
                        <button type="submit" className="btn btn-link text-secondary fw-bold" >¿Olvidaste tu contraseña?</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Login
