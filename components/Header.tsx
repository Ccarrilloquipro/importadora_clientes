import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { LocalStorageService } from '../services/LocalStorageService';

interface HeaderProps {
    altertative?: boolean;
    title?: string;
}
function Header({ altertative = false, title}: HeaderProps) {

    const router = useRouter()
    
    const logout = () => {
        LocalStorageService.clear();

        router.replace('/auth/login')
    }
    return (
        <div className='col-12'>
            <div className={'d-flex align-items-center py-3 ' }>
                {
                    altertative && (
                        <>
                            <Link href='/analytics'>
                                <a><img src='/images/logo.png' alt='Registro Vehicular' className=' logo' style={{ width: '110px' }} /></a>
                            </Link>
                            <p className='m-0 text-dark fw-bold fs-5 ms-5'>{title}</p>
                        </>
                    )
                }
                {
                    !altertative && <p className='m-0 text-dark fw-bold fs-5'>¡Hola  Luis!</p>
                }

                
                <div className='ms-auto'>
                    <i className="bi bi-bell me-3 text-dark fw-bold "></i>
                    <button type="button" className="btn btn-link text-dark fw-bold text-decoration-none" onClick={logout}>Cerrar sesión</button>
                </div>
            </div>
        </div>
    )
}

export default Header