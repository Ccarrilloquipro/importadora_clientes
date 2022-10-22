import Link from 'next/link';
import React, { useEffect } from 'react'
import Header from '../../components/Header'
import PrivatePage from '../../components/PrivatePage'

function HandleUser() {

    useEffect(() => {
        document.body.classList.add("bg-white");

        return () => document.body.classList.remove("bg-white")

    }, [])
    
    return (
        <PrivatePage>
            <div className='bg-white'>
                <div className='container mx-auto'>
                <Header altertative title='' />
                </div>
            </div>
            
            <div className='container mx-auto'>
                

                <div className='row'>
                    <div className='col-12'>

                        <div className='d-flex justify-content-center mt-5'>
                            <Link href="/users/form">
                                <div className='card card-hover bg-gray d-inline-block w-25 me-5'>
                                    <div className='card-body'>
                                        <div className='bg-warning mb-3'>
                                            <img src="https://via.placeholder.com/400x260" className='w-100 p-4' alt="Avatar" />
                                        </div>

                                        <button className='btn btn-link text-dark text-decoration-none fw-bold d-block mx-auto'>Nuevo usuario</button>
                                    </div>
                                </div>
                            </Link>

                            <div className='card card-hover bg-gray d-inline-block w-25'>
                                <div className='card-body'>
                                    <div className='bg-warning mb-3'>
                                        <img src="https://via.placeholder.com/400x260" className='w-100 p-4' alt="Avatar" />
                                    </div>

                                    <button className='btn btn-link text-dark text-decoration-none fw-bold d-block mx-auto'>Usuario existente</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PrivatePage>
    )
}

export default HandleUser