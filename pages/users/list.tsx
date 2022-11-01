import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Header from "../../components/Header"
import PrivatePage from "../../components/PrivatePage"
import { UserService } from '../../services/userService'


function Users() {

    const router = useRouter()

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
            name: 'Nombre',
            sortable: true,
            reorder: true,
            cell: (row: any) => <Link href={{ pathname: '/imports/form', query: { user: row.id } }} ><a>{row.nombres}</a></Link>
        },
        {
            name: 'Apellido',
            selector: (row: any) => row.apellidos,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Fecha de creación',
            selector: (row: any) => row.created_at,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Ubicación',
            selector: (row: any) => row.ciudad,
            sortable: true,
            reorder: true,
        },
        {
            name: 'No. importaciones',
            selector: (row: any) => row.cuantos,
            sortable: true,
            reorder: true,
        },
    ];


    const getList = async () => {
        const response = await UserService.getList();
        setData(response)
        setDataFiltered(response)
    }

    useEffect(() => {
        if(filterTerm) {
            const regex = new RegExp(filterTerm, 'i');

            const filtered = data.filter(( row: any) => {

                const fullName = `${row.nombres || ''} ${row.apellidos || ''}`;

                return  (fullName && regex.test(fullName) ) ||
                        (row.ciudad && regex.test(row.ciudad) ) 
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
            <div className='bg-white'>
                <div className='container mx-auto'>
                    <Header altertative title='Usuario existente' />
                </div>

            </div>


            <div className='container mx-auto'>
                <div className='row'>
                    <div className='col-12 pb-5'>

                        <div className='row mt-3'>
                            <div className='col-12'>
                                <button className="btn btn-link text-secondary text-decoration-none" onClick={() => router.back()}><i className="bi bi-arrow-left"></i> Atras</button>
                            </div>
                        </div>

                    </div>

                    <div className='col-12'>
                        <div className='d-flex align-items-center my-4'>
                            <p className='m-0 text-secondary fw-bold me-3'>Usuario</p>
                            <div className="input-group input-group-search flex-nowrap w-50">
                                <span className="input-group-text bg-white" ><i className="bi bi-search"></i></span>
                                <input type="text" className="form-control" placeholder="Escribe para filtrar" value={filterTerm}  onChange={ ({ target }: any) => setFilterTerm(target.value)} />
                            </div>
                        </div>
                    </div>
                    
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
                                    noDataComponent='No hay registros para mostrar'
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </PrivatePage>

    )
}

export default Users