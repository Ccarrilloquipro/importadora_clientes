import type { NextPage } from 'next'
import Sidebar from '../../components/Sidebar'
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import Header from '../../components/Header';

const Users: NextPage = () => {

    const [data, setData] = useState([
        {
            id: 1,
            title: `item ${1}`,
            year: '1984',
        },
        {
            id: 2,
            title: `item ${2}`,
            year: '1984',
        },
        {
            id: 3,
            title: `item ${3}`,
            year: '1984',
        },
    ])


    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };


    const columns = [
        {
            name: 'Title',
            selector: (row: any) => row.title,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Year',
            selector: (row: any) => row.year,
            sortable: true,
            reorder: true,
        },
    ];

    return (
        <main className='d-flex flex-nowrap'>

            <Sidebar />

            <div className='container mx-4'>

                <div className='row'>
                    <Header />

                    <div className='col-12'>
                        <div className='d-flex align-items-center my-4'>
                            <p className='m-0 text-secondary fw-bold me-3'>Usuario</p>
                            <div className="input-group input-group-search flex-nowrap w-25">
                                <span className="input-group-text bg-white" ><i className="bi bi-search"></i></span>
                                <input type="text" className="form-control" placeholder="Modelo, No. de serie, usuario" />
                            </div>
                            <button type="button" className="ms-auto btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Nueva importación</button>
                        </div>
                    </div>

                    {/* <div className='col-12'>
                        <div className='d-flex align-items-center my-4'>
                            <p className='m-0 text-secondary fw-bold me-3'>Filtros</p>
                            <select className="form-select me-3 w-auto" defaultValue=''>
                                <option value="" disabled selected>TIPO DE VEHÍCULO</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select w-auto" defaultValue=''>
                                <option value="" disabled selected>MARCA</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div> */}


                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>


                                <DataTable
                                    defaultSortFieldId={1}
                                    columns={columns}
                                    data={data}
                                    pagination
                                    paginationComponentOptions={paginationComponentOptions}
                                    responsive
                                />

                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <div className="modal fade" id="exampleModal">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-body">
                        <div className='bg-white'>
                            <div className='container mx-auto'>
                                <Header altertative title='' />

                                <div className='row'>
                                    <div className='col-12'>

                                        <div className='d-flex justify-content-center mt-5'>
                                            <div className='card card-hover bg-gray d-inline-block w-25 me-5'>
                                                <div className='card-body'>
                                                    <div className='bg-warning mb-3'>
                                                        <img src="https://via.placeholder.com/400x260" className='w-100 p-4' alt="Avatar" />
                                                    </div>

                                                    <button className='btn btn-link text-dark text-decoration-none fw-bold d-block mx-auto'>Nuevo usuario</button>
                                                </div>
                                            </div>
                                            
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
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Users
