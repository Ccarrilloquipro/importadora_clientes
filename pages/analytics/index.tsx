import type { NextPage } from 'next'
import PrivatePage from '../../components/PrivatePage'
import Sidebar from '../../components/Sidebar'

const Analytics: NextPage = () => {
    return (
        <PrivatePage>
            <main className='d-flex flex-nowrap'>

                <Sidebar />

                <div className='container mx-4'>

                    <div className='row'>
                        <div className='col'>
                            <div className='d-flex align-items-center my-3'>
                                <p className='m-0 text-dark fw-bold fs-5'>¡Hola  Luis!</p>
                                <div className='ms-auto'>
                                    <i className="bi bi-bell me-3 text-dark fw-bold "></i>
                                    <button type="button" className="btn btn-link text-dark fw-bold text-decoration-none">Cerrar sesión</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </PrivatePage>
    )
}

export default Analytics
