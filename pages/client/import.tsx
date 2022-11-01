import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import PrivatePage from '../../components/PrivatePage'
import Sidebar from '../../components/Sidebar'
import { URL_ASSETS } from '../../services/http'
import { ImportsService } from '../../services/importsService'

function ImportDetailPage() {

    const router = useRouter()
    const [importInfo, setImportInfo] = useState<any>()

    const currencyFormat = (num: any) =>  {
        return '$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    useEffect(() => {
        const getImport = async (id: number) => {
            const response = await ImportsService.getImport(id)
            setImportInfo(response)
        }
        const importID: any = router.query.import;

        if (importID) {
            getImport(importID);
        }

    }, [router.query])

    return (
        <PrivatePage>
            <main className='d-flex flex-nowrap'>

                <Sidebar />

                <div className='container mx-4'>

                    <div className='row'>
                        <Header />
                    </div>

                    <div className='row  my-5'>
                        <div className='col-12 '>

                            <div className='row py-3'>
                                <div className='col-12'>
                                    <button className="btn btn-link text-secondary text-decoration-none" onClick={() => router.back()}><i className="bi bi-arrow-left"></i> Volver</button>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='card mb-4'>
                                        <div className='card-body'>
                                            <div className='d-flex'>
                                                <div className=' flex-grow-1'>
                                                    <p className=' text-gray'>Tipo de vehículo: {importInfo?.tipo.nombre}</p>
                                                    <p className=' text-gray'>Marca: {importInfo?.marca}</p>
                                                    <p className=' text-gray'>Modelo de vehículo: {importInfo?.modelo}</p>
                                                </div>
                                                <div className=' flex-grow-1'>
                                                    <p className=' text-gray'>Año: {importInfo?.ano}</p>
                                                    <p className=' text-gray'>Serie: {importInfo?.noSerie}</p>
                                                    <p className=' text-gray'>No. de factura: {importInfo?.noFactura}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='row '>
                                        {
                                            importInfo?.documentos.map((field: any) => (
                                                <div className='col-12 mb-3' key={field.id}>
                                                    <div className={'card '}>
                                                        <div className='card-body'>
                                                            <div className='d-flex align-items-center '>
                                                                <div className='flex-grow-1'>
                                                                    <p className='m-0 form-label-alternative fw-bold'>{field.tipo_documento.nombre}</p>
                                                                    { field.tipo_documento.requierePago !== 0 && <p className='m-0 form-text'>{currencyFormat(field.pago)}</p>}
                                                                </div>

                                                                <div className='ms-auto text-center '>
                                                                    
                                                                    { field.tipo_documento.requierePago !== 0 && <button className="btn btn-secondary "  >Pagar</button>}
                                                                    

                                                                    <a target="_blank" href={`${URL_ASSETS}${field.archivo}`} rel="noopener noreferrer" className=''>
                                                                        <button className="btn btn-secondary ms-3"  >Descargar</button>
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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

export default ImportDetailPage
