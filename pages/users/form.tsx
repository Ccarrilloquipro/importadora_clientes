import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../components/Header'

function FormUser() {

  const router = useRouter()

  return (
    <>
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

              <div className='row my-5'>
                <div className='col-12 '>
                  <div className='d-flex align-items-center'>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{ width: '150px' }} alt="Avatar" />
                    <div>
                      <input type='file' className='d-none' id='image-avatar' />
                      <label className="btn btn-link text-secondary fw-bold text-decoration-none ms-3" htmlFor='image-avatar' >Seleccionar imagen</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-4'>
                  <div className="mb-3">
                    <label className="form-label form-label-alternative">Email address</label>
                    <input type="text" className="form-control" placeholder="name@example.com" />
                  </div>
                </div>
                <div className='col-4'>
                  <div className="mb-3">
                    <label className="form-label form-label-alternative">Email address</label>
                    <input type="text" className="form-control" placeholder="name@example.com" />
                  </div>
                </div>
                <div className='col-4'>
                  <div className="mb-3">
                    <label className="form-label form-label-alternative">Email address</label>
                    <input type="text" className="form-control" placeholder="name@example.com" />
                  </div>
                </div>
                <div className='col-4'>
                  <div className="mb-3">
                    <label className="form-label form-label-alternative">Email address</label>
                    <input type="text" className="form-control" placeholder="name@example.com" />
                  </div>
                </div>
                <div className='col-4'>
                  <div className="mb-3">
                    <label className="form-label form-label-alternative">Email address</label>
                    <input type="text" className="form-control" placeholder="name@example.com" />
                  </div>
                </div>
                <div className='col-4'>
                  <div className="mb-3">
                    <label className="form-label form-label-alternative">Email address</label>
                    <input type="text" className="form-control" placeholder="name@example.com" />
                  </div>
                </div>
                <div className='col-4'>
                  <div className="mb-3">
                    <label className="form-label form-label-alternative">Email address</label>
                    <input type="text" className="form-control" placeholder="name@example.com" />
                  </div>
                </div>
                <div className='col-4'>
                  <div className="mb-3">
                    <label className="form-label form-label-alternative">Email address</label>
                    <input type="text" className="form-control" placeholder="name@example.com" />
                  </div>
                </div>
              </div>

              <div className='row gap-3 mt-5'>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-flex align-items-center '>
                        <div>
                          <p className='m-0 form-label-alternative fw-bold'>Licencia de conducir</p>
                          <p className='m-0 form-text'>JPG, PDF</p>
                        </div>
                        <div className='ms-auto d-flex align-items-center '>
                          <p className='m-0 me-3 form-text'>nombre archivo .pdf</p>
                          <div>
                            <input type='file' className='d-none' id='image-licencia' />
                            <label className="btn btn-secondary px-5" htmlFor='image-licencia' >Seleccionar imagen</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-flex align-items-center '>
                        <div>
                          <p className='m-0 form-label-alternative fw-bold'>Identificación oficial</p>
                          <p className='m-0 form-text'>JPG, PDF</p>
                        </div>
                        <div className='ms-auto d-flex align-items-center '>
                          <p className='m-0 me-3 form-text'>nombre archivo .pdf</p>
                          <div>
                            <input type='file' className='d-none' id='image-id' />
                            <label className="btn btn-secondary px-5" htmlFor='image-id' >Seleccionar imagen</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row mt-5'>
                <div className='col-12'>
                  <div className='text-end'>

                    <button type="button" className="btn btn-danger px-5 me-3">Cancelar</button>
                    <button type="button" className="btn btn-warning px-5">Guardar</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>

  )
}

export default FormUser