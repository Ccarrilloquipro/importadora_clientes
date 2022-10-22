import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Header from '../../components/Header'
import PrivatePage from '../../components/PrivatePage'
import { StateService } from '../../services/stateService';
import { UploadService } from '../../services/uploadService';
import { UserService } from '../../services/userService';

function FormUser() {

  const router = useRouter();
  const avatarRef = useRef<any>()

  const defaultValues = {
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    telefono: '',
    correo: '',
    noId: '',
    password: '',
    idEstado: '',
    ciudad: '',
    archivoLicencia: '',
    archivoLicenciaFile: '',
    archivoINE: '',
    archivoINEFile: '',
    avatarWeb: '',
    avatarWebFile: '',
  }
  const { register, watch, handleSubmit, formState: { errors } } = useForm({ defaultValues });

  const [states, setStates] = useState([])
  const [submitting, setSubmitting] = useState(false)

  const avatar: any = watch('avatarWebFile')
  const archivoLicenciaFile: any = watch('archivoLicenciaFile')
  const archivoINEFile: any = watch('archivoINEFile')

  const avatarBlob = useMemo(() => {
    if (avatar) {
      return URL.createObjectURL(avatar[0])
    }

    return '/images/empty-img.jpg'
  }, [avatar])

  const submit = async (data: any) => {
    try {
      setSubmitting(true)

      const avatarURL = await UploadService.upload(data.avatarWebFile[0])
      const archivoLicenciaFileURL = await UploadService.upload(data.archivoLicenciaFile[0])
      const archivoINEFileURL = await UploadService.upload(data.archivoINEFile[0])

      data.archivoLicencia = archivoLicenciaFileURL;
      data.archivoINE = archivoINEFileURL;
      data.avatarWeb = avatarURL;

      delete data.archivoLicenciaFile;
      delete data.archivoINEFile;
      delete data.avatarWebFile;

      await UserService.register(data);

      await Swal.fire('¡Éxito!', 'Se guardó correctamente al usuario. Ahora puedes asignarle una importación', 'success')
      router.push('/imports/form')
    } catch (error: any) {
      Swal.fire({
        title: '¡Error!',
        text: error.message || 'Ocurrio un error al registrar al usuario, intenta nuevamente',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    })
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    const getStates = async () => {
      const response = await StateService.getStates();
      setStates(response)
    }

    getStates();
  }, [])


  return (
    <PrivatePage>
      <div className='bg-white'>
        <div className='container mx-auto'>
          <Header altertative title='Nuevo usuario' />
        </div>
      </div>

      <main className=''>
        <div className='container mx-auto'>
          <div className='row'>
            <div className='col-12'>

              <div className='row mt-3'>
                <div className='col-12'>
                  <button className="btn btn-link text-secondary text-decoration-none" onClick={() => router.back()}><i className="bi bi-arrow-left"></i> Atras</button>
                </div>
              </div>

              <form onSubmit={handleSubmit(submit)}>

                <div className='row my-5'>
                  <div className='col-12 '>
                    <div className='d-flex align-items-center'>
                      <div className='text-center'>
                        <img src={avatarBlob} className={'rounded-circle ' + (errors.avatarWebFile ? 'is-invalid' : '')} style={{ width: '150px', height: '150px' }} alt="Avatar" />
                        <div className="invalid-feedback">Campo obligatorio</div>
                      </div>
                      <div>
                        <input type='file' className='d-none' id='image-avatar' accept='.png,.jpg,.jpeg' {...register('avatarWebFile', { required: true })} />
                        <label className="btn btn-link text-secondary fw-bold text-decoration-none ms-3" htmlFor='image-avatar' >{avatar ? 'Cambiar' : 'Seleccionar'} imagen</label>
                        <p className='ms-3 ps-3 form-text'>{avatar ? avatar[0].name : ''}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-4'>
                    <div className="mb-3">
                      <label className="form-label form-label-alternative">Nombre(s)</label>
                      <input type="text" className={'form-control ' + (errors.nombres ? 'is-invalid' : '')}  {...register('nombres', { required: true })} />
                      <div className="invalid-feedback">Campo obligatorio</div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className="mb-3">
                      <label className="form-label form-label-alternative">Apellidos</label>
                      <input type="text" className={'form-control ' + (errors.apellidos ? 'is-invalid' : '')}  {...register('apellidos', { required: true })} />
                      <div className="invalid-feedback">Campo obligatorio</div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className="mb-3">
                      <label className="form-label form-label-alternative">Fecha de nacimiento</label>
                      <input type="text" className={'form-control ' + (errors.fechaNacimiento ? 'is-invalid' : '')}  {...register('fechaNacimiento', { required: true })} />
                      <div className="invalid-feedback">Campo obligatorio</div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className="mb-3">
                      <label className="form-label form-label-alternative">Contraseña</label>
                      <input type="text" className={'form-control ' + (errors.password ? 'is-invalid' : '')}  {...register('password', { required: true })} />
                      <div className="invalid-feedback">Campo obligatorio</div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className="mb-3">
                      <label className="form-label form-label-alternative">Teléfono</label>
                      <input type="text" className={'form-control ' + (errors.telefono ? 'is-invalid' : '')}  {...register('telefono', { required: true })} />
                      <div className="invalid-feedback">Campo obligatorio</div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className="mb-3">
                      <label className="form-label form-label-alternative">Correo</label>
                      <input type="text" className={'form-control ' + (errors.correo ? 'is-invalid' : '')}  {...register('correo', { required: true })} />
                      <div className="invalid-feedback">Campo obligatorio</div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className="mb-3">
                      <label className="form-label form-label-alternative">No. de ID</label>
                      <input type="text" className={'form-control ' + (errors.noId ? 'is-invalid' : '')}  {...register('noId', { required: true })} />
                      <div className="invalid-feedback">Campo obligatorio</div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className="mb-3">
                      <label className="form-label form-label-alternative">Estado </label>
                      <select className={'form-select ' + (errors.idEstado ? 'is-invalid' : '')}  {...register('idEstado', { required: true })} >
                        <option value={''}>Selecciona un estado</option>
                        {
                          states.map((edo: any) => <option key={edo.id} value={edo.id}>{edo.nombre}</option>)
                        }
                      </select>
                      <div className="invalid-feedback">Campo obligatorio</div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className="mb-3">
                      <label className="form-label form-label-alternative">Ciudad </label>
                      <input type="text" className={'form-control ' + (errors.ciudad ? 'is-invalid' : '')}  {...register('ciudad', { required: true })} />
                      <div className="invalid-feedback">Campo obligatorio</div>
                    </div>
                  </div>

                </div>

                <div className='row gap-3 mt-5'>
                  <div className='col-12'>
                    <div className={'card ' + (errors.archivoLicenciaFile ? 'is-invalid' : '')}>
                      <div className={'card-body '}>
                        <div className='d-flex align-items-center '>
                          <div>
                            <p className='m-0 form-label-alternative fw-bold'>Licencia de conducir</p>
                            <p className='m-0 form-text'>JPG, PDF</p>
                          </div>
                          <div className='ms-auto d-flex align-items-center '>
                            {archivoLicenciaFile && <p className='m-0 me-3 form-text'>{archivoLicenciaFile[0].name}</p>}
                            <div>
                              <input type='file' className='d-none' id='image-licencia' accept='.png,.jpg,.jpeg,.pdf' {...register('archivoLicenciaFile', { required: true })} />
                              <label className="btn btn-secondary px-5" htmlFor='image-licencia' >Seleccionar imagen</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="invalid-feedback">Campo obligatorio</div>
                  </div>
                  <div className='col-12'>
                    <div className={'card ' + (errors.archivoINEFile ? 'is-invalid' : '')}>
                      <div className={'card-body '}>
                        <div className='d-flex align-items-center '>
                          <div>
                            <p className='m-0 form-label-alternative fw-bold'>Identificación oficial</p>
                            <p className='m-0 form-text'>JPG, PDF</p>
                          </div>
                          <div className='ms-auto d-flex align-items-center '>
                            {archivoINEFile && <p className='m-0 me-3 form-text'>{archivoINEFile[0].name}</p>}
                            <div>
                              <input type='file' className='d-none' id='image-id' accept='.png,.jpg,.jpeg,.pdf' {...register('archivoINEFile', { required: true })} />
                              <label className="btn btn-secondary px-5" htmlFor='image-id' >Seleccionar imagen</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="invalid-feedback">Campo obligatorio</div>
                  </div>
                </div>

                <div className='row my-5'>
                  <div className='col-12'>
                    <div className='text-end'>

                      <button type="button" className="btn btn-danger px-5 me-3" onClick={() => router.push('/users')}>Cancelar</button>

                      <button type="submit" className="btn btn-warning px-5"  disabled={submitting}>
                        { submitting && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> }
                        { !submitting && 'Guardar' }
                      </button>

                    </div>
                  </div>
                </div>

              </form>

            </div>
          </div>
        </div>
      </main>
    </PrivatePage>
  )
}

export default FormUser