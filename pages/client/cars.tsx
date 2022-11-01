import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Avatar from '../../components/Avatar'
import Header from '../../components/Header'
import PrivatePage from '../../components/PrivatePage'
import Sidebar from '../../components/Sidebar'
import { URL_ASSETS } from '../../services/http'
import { LocalStorageService } from '../../services/LocalStorageService'
import { UserService } from '../../services/userService'
import moment from 'moment';

function CarsPage() {

    const [userInfo, setUserInfo] = useState<any>()

    useEffect(() => {
        const getUser = async (id: number) => {
            const response = await UserService.getClient(id)
            setUserInfo(response)
        }

        const session = LocalStorageService.get('imp-session-client')
        getUser(session.cliente.id)

    }, [])

    return (
        <PrivatePage>
            <main className='d-flex flex-nowrap'>

                <Sidebar />

                <div className='container mx-4'>

                    <div className='row'>
                        <Header />
                    </div>

                    <div className='row mt-5'>
                        {
                            userInfo?.importaciones.map((imp: any) => (
                                <div className='col-md-4 mb-4' key={imp.id}>
                                    <div className='card bg-warning'>
                                        <div className='card-body  p-4'>
                                            <div className='bg-white border-12'>
                                             <img src='/images/icon-car.png' className='d-block mx-auto my-3'  alt='Necesitas ayuda'/>
                                            </div>
                                            <p className='fw-bold  mb-1'>Modelo: { imp.modelo}</p>
                                            <p className='fw-bold  mb-1'>Año: { imp.modelo}</p>
                                            <p className='text-dark'>Fecha de registro: {imp.created_at ? moment(imp.created_at).format('DD-MM-YYYY'): 'N/A'}</p>

                                            <Link href={{ pathname: '/client/import', query: { import: imp.id } }} >
                                                <button className='btn btn-link text-dark p-0'>Ver documentos</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </main>
        </PrivatePage>
    )
}

export default CarsPage