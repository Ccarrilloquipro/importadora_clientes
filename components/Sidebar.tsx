import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

function Sidebar() {

    const router = useRouter();

    return (
        <div className='sidebar d-flex flex-column flex-shrink-0  ' style={{ width: '280px' }}>

            <Link href='/analytics'>
                <a><img src='/images/logo.png' alt='Registro Vehicular' className='d-block mx-auto logo' style={{ width: '110px' }} /></a>
            </Link>


            <ul className="list-group">
                <li className={'list-group-item ' + (router.pathname.startsWith('/analytics') ? 'current' : '')}>
                    <Link href="/analytics">
                        <a><i className="bi bi-bar-chart-fill me-3"></i> Analytics</a>
                    </Link>
                </li>
                <li className={'list-group-item ' + (router.pathname.startsWith('/imports') ? 'current' : '')}>
                    <Link href="/imports">
                        <a><i className="bi bi-car-front-fill me-3"></i> Importaciones</a>
                    </Link>
                </li>
                <li className={'list-group-item ' + (router.pathname.startsWith('/users') ? 'current' : '')}>
                    <Link href="/users">
                        <a><i className="bi bi-person-fill me-3"></i> Usuarios</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar