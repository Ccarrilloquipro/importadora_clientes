import type { NextPage } from 'next'
import Sidebar from '../../components/Sidebar'
import DataTable from 'react-data-table-component';
import { useState } from 'react';

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
                    <div className='col-12'>
                        <div className='d-flex align-items-center my-3'>
                            <p className='m-0 text-dark fw-bold fs-5'>¡Hola  Luis!</p>
                            <div className='ms-auto'>
                                <i className="bi bi-bell me-3 text-dark fw-bold "></i>
                                <button type="button" className="btn btn-link text-dark fw-bold text-decoration-none">Cerrar sesión</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className='d-flex align-items-center my-4'>
                            <p className='m-0 text-secondary fw-bold me-3'>Usuario</p>
                            <div className="input-group input-group-search flex-nowrap w-25">
                                <span className="input-group-text bg-white" ><i className="bi bi-search"></i></span>
                                <input type="text" className="form-control" placeholder="Modelo, No. de serie, usuario" />
                            </div>
                            <button type="button" className="ms-auto btn btn-warning">Nueva importación</button>
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

        </main>
    )
}

export default Users
