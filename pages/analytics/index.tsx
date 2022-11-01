import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import PrivatePage from '../../components/PrivatePage'
import Sidebar from '../../components/Sidebar'
import { DashboardService } from '../../services/dashboardService'

const Analytics: NextPage = () => {

    const [totalUsers, setTotalUsers] = useState(0)
    const [totalImports, setTotalImports] = useState(0)

    const getTotalUsers = async() => {
        const response = await DashboardService.getTotalUsers()
        setTotalUsers(response)
    }
    const getTotalImports = async() => {
        const response = await DashboardService.getTotalImports()
        setTotalImports(response)
    }

    useEffect(() => {
        getTotalUsers();
        getTotalImports();
    }, [])
    
    return (
        <PrivatePage>
            <main className='d-flex flex-nowrap'>

                <Sidebar />

                <div className='container mx-4'>

                    <div className='row'>
                        <Header />

                        <div className='col-12'>
                            <div className='d-flex align-items-center my-4'>
                                {/* <p className='m-0 text-secondary fw-bold me-3'>Usuario</p>
                                <div className="input-group input-group-search flex-nowrap w-50">
                                    <span className="input-group-text bg-white" ><i className="bi bi-search"></i></span>
                                    <input type="text" className="form-control" placeholder="Escribe para filtrar" value={filterTerm}  onChange={ ({ target }: any) => setFilterTerm(target.value)} />
                                </div> */}
                                <Link href="/users/handle-user">
                                    <button type="button" className="ms-auto btn btn-warning" >Nueva importación</button>
                                </Link>

                            </div>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-4'>
                            <div className='card card-black'>
                                <div className='card-header'>
                                    TOTAL DE USUARIOS
                                </div>
                                <div className='card-body'>
                                    <h1>{totalUsers}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='card card-black'>
                                <div className='card-header'>
                                TOTAL DE IMPORTACIONES
                                </div>
                                <div className='card-body'>
                                    <h1>{totalImports}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='card card-black'>
                                <div className='card-header'>
                                REPORTE DE VENTAS
                                </div>
                                <div className='card-body'>
                                    <h1>$0</h1>
                                    <p className='text-sm mb-4'>Ingresos del periodo</p>
                                    <h1>$0</h1>
                                    <p className='text-sm mb-0'>Ingresos por suscripción a plataforma</p>
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
