import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Avatar from '../../components/Avatar'
import Header from '../../components/Header'
import PrivatePage from '../../components/PrivatePage'
import { URL_ASSETS } from '../../services/http'
import { UserService } from '../../services/userService'
import { useFieldArray, useForm } from 'react-hook-form';
import { ImportsService } from '../../services/importsService'
import { UploadService } from '../../services/uploadService'
import Swal from 'sweetalert2'

function FormImport() {

    const router = useRouter()
    const [userInfo, setUserInfo] = useState<any>()
    const [typeCard, setTypeCard] = useState([])

    const defaultValues = {
        idCliente: '',
        origen: 'extranjero',
        idTipo: '',
        modelo: '',
        marca: '',
        ano: '',
        noFactura: '',
        noSerie: '',
        imports: [{
            idTipoDocumento: 0,
            file: '',
            pago: '',
            requierePago: false,
            nombre: ''
        }]
    }

    const { control, register, setValue, watch, handleSubmit, formState: { errors, isSubmitting } } = useForm({ defaultValues });

    const { fields, replace } = useFieldArray({
        control,
        name: 'imports',
    });


    register("idCliente", { required: true })

    const submit = async (data: any) => {
        try {

            let params: any = {
                idCliente: data.idCliente,
                origen: data.origen || 'extranjero',
                idTipo: data.idTipo,
                modelo: data.modelo,
                marca: data.marca,
                ano: data.ano,
                noFactura: data.noFactura,
                noSerie: data.noSerie,
                documentos: []
            }

            for (let index = 0; index < data.imports.length; index++) {
                const row = data.imports[index];

                const uploadResponse = await UploadService.upload(row.file[0])

                let doc = {
                    idTipoDocumento: row.idTipoDocumento,
                    archivo: uploadResponse,
                    pago: row.pago
                }

                if (!row.requierePago) {
                    delete doc.pago
                }

                params.documentos.push(doc)
            }

            const response = await ImportsService.saveImport(params);
        
            await Swal.fire('¡Éxito!', 'Se guardó correctamente la importación.', 'success')
            
            router.push({ pathname: '/imports/detail', query: { import: response.id }})

        } catch (error: any) {
            console.log(error)
            Swal.fire({
                title: '¡Error!',
                text: error.message || 'Ocurrio un error al registrar la importación, intenta nuevamente',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
    }

    useEffect(() => {
        const getUser = async (id: number) => {
            const response = await UserService.getClient(id)
            setUserInfo(response)
        }
        const userID: any = router.query.user;

        if (userID) {
            getUser(userID);
            setValue('idCliente', userID)
        }

    }, [router.query])

    useEffect(() => {
        const getTypesCard = async () => {
            const response = await ImportsService.getTypesCard()
            setTypeCard(response)
        }
        const getTypesDocuments = async () => {
            const response = await ImportsService.getTypesDocuments()

            replace(response.map( (document: any) => ({
                idTipoDocumento: document.id,
                file: '',
                monto: '',
                requierePago: !!document.requierePago,
                nombre: document.nombre
            })))
        }

        getTypesCard()
        getTypesDocuments()
    }, [])

    return (
        <PrivatePage>
            <div className='bg-white'>
                <div className='container mx-auto'>
                    <Header altertative title='Nuevo usuario' />
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

                        <form onSubmit={handleSubmit(submit)}>

                            <div className='row my-3'>
                                <div className='col-12 '>
                                    <div className='card mb-4'>
                                        <div className='card-body p-5'>
                                            <div className='d-flex'>
                                                <div className=''>
                                                    <Avatar image={userInfo?.avatarWeb} />
                                                </div>
                                                <div className='mx-5 flex-grow-1'>
                                                    <p className='fw-bold fs-5 mb-1'>{userInfo?.nombres} {userInfo?.apellidos}</p>
                                                    <p className='m-0 text-gray'>Fecha de nacimiento: {userInfo?.fechaNacimiento}</p>
                                                    <p className='m-0 text-gray'>Teléfono: {userInfo?.telefono}</p>
                                                    <p className='m-0 text-gray'>Correo: {userInfo?.correo}</p>
                                                    <p className='m-0 text-gray'>Ubicación: {userInfo?.ciudad}</p>
                                                    <p className='m-0 text-gray'>No. de ID: {userInfo?.noId}</p>
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
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Tipo de vehículo</label>
                                        <select className={'form-select ' + (errors.idTipo ? 'is-invalid' : '')}  {...register('idTipo', { required: true })} >
                                            <option value={''}>Selecciona un tipo de vehículo</option>
                                            {
                                                typeCard.map((edo: any) => <option key={edo.id} value={edo.id}>{edo.nombre}</option>)
                                            }
                                        </select>
                                        <div className="invalid-feedback">Campo obligatorio</div>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Modelo</label>
                                        <input type="text" className={'form-control ' + (errors.modelo ? 'is-invalid' : '')}  {...register('modelo', { required: true })} />
                                        <div className="invalid-feedback">Campo obligatorio</div>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Marca</label>
                                        <input type="text" className={'form-control ' + (errors.marca ? 'is-invalid' : '')}  {...register('marca', { required: true })} />
                                        <div className="invalid-feedback">Campo obligatorio</div>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Año</label>
                                        <input type="text" className={'form-control ' + (errors.ano ? 'is-invalid' : '')}  {...register('ano', { required: true })} />
                                        <div className="invalid-feedback">Campo obligatorio</div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Número de factura</label>
                                        <input type="text" className={'form-control ' + (errors.noFactura ? 'is-invalid' : '')}  {...register('noFactura', { required: true })} />
                                        <div className="invalid-feedback">Campo obligatorio</div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Número de serie</label>
                                        <input type="text" className={'form-control ' + (errors.noSerie ? 'is-invalid' : '')}  {...register('noSerie', { required: true })} />
                                        <div className="invalid-feedback">Campo obligatorio</div>
                                    </div>
                                </div>


                            </div>

                            <div className='row gap-3 mt-5'>
                                {
                                    fields.map((field: any, index: number) => (
                                        <div className='col-12' key={field.id}>
                                            <div className={'card ' + (errors.imports?.[index]?.file ? 'is-invalid' : '')}>
                                                <div className='card-body'>
                                                    <div className='d-flex align-items-center '>
                                                        <div className='flex-grow-1'>
                                                            <p className='m-0 form-label-alternative fw-bold'>{field.nombre}</p>
                                                            <p className='m-0 form-text'>PDF</p>
                                                        </div>
                                                        {
                                                            field.requierePago && (
                                                                <div className="ms-auto me-5">
                                                                    <label className="form-label form-label-alternative">Monto a pagar *</label>
                                                                    <input type="text" className={'form-control form-control-altertative ' + (errors.imports?.[index]?.pago ? 'is-invalid' : '')}  {...register(`imports.${index}.pago`, { required: true, min: 1 })} />
                                                                    <div className="invalid-feedback">Campo obligatorio</div>
                                                                </div>
                                                            )
                                                        }

                                                        <div className='ms-auto text-center '>

                                                            <div>
                                                                <input type='file' className='d-none' id={`${index}-file`} {...register(`imports.${index}.file`, { required: true })} accept='.png,.jpg,.jpeg,.pdf' />
                                                                <label className="btn btn-secondary px-5" htmlFor={`${index}-file`} >Seleccionar imagen</label>

                                                                <p className='m-0 form-text'>{(watch(`imports.${index}.file`) as any)?.[0]?.name}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="invalid-feedback">Por favor adjunta un archivo</div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='row mt-5'>
                                <div className='col-12'>
                                    <div className='text-end'>

                                        <button type="button" className="btn btn-danger px-5 me-3">Cancelar</button>
                                        <button type="submit" className="btn btn-warning px-5" disabled={isSubmitting}>
                                            {isSubmitting && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                            {!isSubmitting && 'Guardar'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </PrivatePage>

    )
}

export default FormImport