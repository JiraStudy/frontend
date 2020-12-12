import { useForm } from 'react-hook-form';

import TextInput from './TextInput';
import Datepicker from './Datepicker';

const AddTaskModal = ({ show, addTaskHandler, modalToggler, ...props }) => {
  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      {show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}

                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold">Agregar Tarea</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={modalToggler}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div class="bg-white rounded px-12 pt-6 pb-8 mb-4">
                    <div class="flex items-center justify-center">
                      <div class="w-full max-w-md">
                        <TextInput name="Titulo" register={register} errors={errors} />
                        <TextInput name="Prioridad" register={register} errors={errors} />
                        <Datepicker
                          name="Deadline"
                          register={register}
                          errors={errors}
                          control={control}
                        />
                        <TextInput name="Tipo" register={register} errors={errors} />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: 'all .15s ease' }}
                      onClick={modalToggler}
                    >
                      Cerrar
                    </button>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: 'all .15s ease' }}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddTaskModal;
