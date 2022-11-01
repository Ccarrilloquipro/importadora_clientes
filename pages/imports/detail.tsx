import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import PrivatePage from '../../components/PrivatePage'
import { URL_ASSETS } from '../../services/http'
import { ImportsService } from '../../services/importsService'

function ImportDetail() {

    const router = useRouter()
    const [importInfo, setImportInfo] = useState<any>()

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
                                                <div className='flex-grow-1'>
                                                    <button className="btn btn-secondary btn-lg d-block"  >Editar importación</button>
                                                    <button className="btn btn-primary  btn-lg d-block mt-3"  >Transferir propiedad</button>
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
                                                                </div>
                                                                
                                                                <div className='ms-auto text-center '>
                                                                    <a target="_blank" href={`${URL_ASSETS}${field.archivo}`} rel="noopener noreferrer" className=''>
                                                                        <button className="btn btn-secondary me-3"  >Ver/Descargar</button>
                                                                    </a>
                                                                    <button className="btn btn-secondary "  >Enviar</button>

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

export default ImportDetail
