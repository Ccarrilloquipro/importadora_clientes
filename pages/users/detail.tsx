import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Avatar from '../../components/Avatar'
import Header from '../../components/Header'
import PrivatePage from '../../components/PrivatePage'
import { URL_ASSETS } from '../../services/http'
import { UserService } from '../../services/userService'
import moment from 'moment';

function UserDetail() {

    const router = useRouter()
    const [userInfo, setUserInfo] = useState<any>()

    useEffect(() => {
        const getUser = async (id: number) => {
            const response = await UserService.getClient(id)
            setUserInfo(response)
        }
        const userID: any = router.query.user;

        if (userID) {
            getUser(userID);
        }

    }, [router.query])

    return (
        <PrivatePage>
            <div className='bg-white'>
                <div className='container mx-auto'>
                    <Header altertative title='' />
                </div>

            </div>

            <main className=''>
                <div className='container mx-auto'>
                    <div className='row'>
                        <div className='col-12 '>

                            <div className='row py-3'>
                                <div className='col-12'>
                                    <button className="btn btn-link text-secondary text-decoration-none" onClick={() => router.back()}><i className="bi bi-arrow-left"></i> Volver a tablero</button>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className='card mb-4'>
                                        <div className='card-body p-5'>
                                            <div className='d-flex'>
                                                <div className=''>
                                                    <Avatar image={userInfo?.avatarWeb} />


                                                    <button className="btn btn-secondary d-block  mx-auto mt-4"  >Editar usuario</button>
                                                </div>
                                                <div className='mx-5 flex-grow-1'>
                                                    <p className='fw-bold fs-5 mb-1'>{userInfo?.nombres} {userInfo?.apellidos}</p>
                                                    <p className='m-0 text-gray'>Fecha de nacimiento: {userInfo?.fechaNacimiento}</p>
                                                    <p className='m-0 text-gray'>Teléfono: {userInfo?.telefono}</p>
                                                    <p className='m-0 text-gray'>Correo: {userInfo?.correo}</p>
                                                    <p className='m-0 text-gray'>Ubicación: {userInfo?.ciudad}</p>
                                                    <p className='m-0 text-gray'>No. de ID: {userInfo?.noId}</p>

                                                    <button className="btn btn-primary d-block mt-3"  >Nueva contraseña</button>
                                                </div>
                                                <div className='flex-grow-1'>
                                                    <a target="_blank" href={`${URL_ASSETS}${userInfo?.archivoLicencia}`} rel="noopener noreferrer" className='d-block mb-3'>
                                                        Licencia de conducir
                                                    </a>

                                                    <a target="_blank" href={`${URL_ASSETS}${userInfo?.archivoLicencia}`} rel="noopener noreferrer" className='d-block mb-3'>
                                                        Identificación Oficial
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='row '>
                                        {
                                            userInfo?.importaciones.map((imp: any) => (
                                                <div className='col-md-6 mb-3' key={imp.id}>
                                                    <div className='card bg-warning'>
                                                        <div className='card-body'>
                                                            <p className='fw-bold  mb-1'>Modelo: { imp.modelo}</p>
                                                            <p className='fw-bold  mb-1'>Año: { imp.modelo}</p>
                                                            <p className='text-dark'>Fecha de registro: {imp.created_at ? moment(imp.created_at).format('DD-MM-YYYY'): 'N/A'}</p>

                                                            <Link href={{ pathname: '/imports/detail', query: { import: imp.id } }} >
                                                                <button className='btn btn-link text-dark p-0'>Ver documentos</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className='col-md-3 offset-md-1'>
                                    <div className='text-center'>
                                        <p className='fw-bold fs-5'>{userInfo?.importaciones.length} Vehículos</p>
                                    </div>

                                    <Link href={{ pathname: '/imports/form', query: { user: userInfo?.id } }} >
                                        <div className='card cursor-pointer'>
                                            <div className='card-body'>

                                                <div className='bg-warning mb-3'>
                                                    <img src="https://via.placeholder.com/400x260" className='w-100 p-4' alt="Avatar" />
                                                </div>
                                                
                                                    <button className='btn btn-link text-dark text-decoration-none fw-bold d-block mx-auto'>Agregar vehículo</button>
                                                
                                            </div>
                                        </div>
                                    </Link>

                                    <div className='text-end'>
                                        <button className="btn btn-warning mt-3"  >Volver al tablero</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </main>
        </PrivatePage>
    )
}

export default UserDetail
