import type { NextPage } from 'next'
import Sidebar from '../../components/Sidebar'
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import PrivatePage from '../../components/PrivatePage';
import Link from 'next/link';
import { ImportsService } from '../../services/importsService';

const Imports: NextPage = () => {

    const [data, setData] = useState([])
    const [dataFiltered, setDataFiltered] = useState([])
    const [filterTerm, setFilterTerm] = useState('')

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };


    const columns = [
        {
            name: 'Modelo de vehículo',
            sortable: true,
            reorder: true,
            cell: (row: any) => <Link href={{ pathname: '/imports/form', query: { user: row.id } }} ><a>{row.modelo}</a></Link>
        },
        {
            name: 'Marca',
            selector: (row: any) => row.marca,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Año',
            selector: (row: any) => row.ano,
            sortable: true,
            reorder: true,
        },
        {
            name: 'No. de factura',
            selector: (row: any) => row.noFactura,
            sortable: true,
            reorder: true,
        },
        {
            name: 'No. de serie',
            selector: (row: any) => row.noSerie,
            sortable: true,
            reorder: true,
        },
    ];

    const getList = async() => {
        const response = await ImportsService.getList({});
        setData(response.importaciones)
        setDataFiltered(response.importaciones)
    }

    useEffect(() => {
        if(filterTerm) {
            const regex = new RegExp(filterTerm, 'i');

            const filtered = data.filter(( row: any) => {

                return  (row.modelo && regex.test(row.modelo)) ||
                        (row.marca && regex.test(row.marca)) ||
                        (row.ano && regex.test(row.ano)) ||
                        (row.noFactura && regex.test(row.noFactura)) ||
                        (row.noSerie && regex.test(row.noSerie)) 
            })
    
            setDataFiltered(filtered)
        } else {
            setDataFiltered(data)
        }
        
    }, [filterTerm])

    useEffect(() => {
        getList()
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
                                <p className='m-0 text-secondary fw-bold me-3'>Importaciones</p>
                                <div className="input-group input-group-search flex-nowrap w-50">
                                    <span className="input-group-text bg-white" ><i className="bi bi-search"></i></span>
                                    <input type="text" className="form-control" placeholder="Modelo, No. de serie, usuario" value={filterTerm}  onChange={ ({ target }: any) => setFilterTerm(target.value)} />
                                </div>
                                <Link href="/users/handle-user">
                                    <button type="button" className="ms-auto btn btn-warning">Nueva importación</button>
                                </Link>
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
                                        data={dataFiltered}
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
        </PrivatePage>
    )
}

export default Imports
