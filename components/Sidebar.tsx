import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

function Sidebar() {

    const router = useRouter();

    const [height, setHeight] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            // const body = document.body,
            //     html = document.documentElement;

            // const height$ = Math.max(body.scrollHeight, body.offsetHeight,
            //     html.clientHeight, html.scrollHeight, html.offsetHeight);

            const height$ = document.body.scrollHeight

            setHeight(height$)
        }


        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize);


    }, [])


    return (
        <div className='sidebar d-flex flex-column flex-shrink-0  ' style={{ width: '280px', height: `${height}px` }}>

            <Link href='/analytics'>
                <a><img src='/images/logo.png' alt='Registro Vehicular' className='d-block mx-auto logo' style={{ width: '110px' }} /></a>
            </Link>


            <ul className="list-group">
                <li className={'list-group-item ' + (router.pathname.startsWith('/client/profile') ? 'current' : '')}>
                    <Link href="/client/profile">
                        <a><i className="bi bi-person-fill me-3"></i> Perfil</a>
                    </Link>
                </li>
                <li className={'list-group-item ' + (router.pathname.startsWith('/client/cars') ? 'current' : '')}>
                    <Link href="/client/cars">
                        <a><i className="bi bi-car-front-fill me-3"></i> Mis vehículos</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar