import { useForm } from 'react-hook-form';

import TextInput from './TextInput';
import Datepicker from './Datepicker';
import Select from './Select';

const difficulties = [
  { label: 'Super Easy', value: 1 },
  { label: 'Easy', value: 2 },
  { label: 'Normal', value: 3 },
  { label: 'Difficult', value: 4 },
  { label: 'Super Difficult', value: 5 },
  { label: 'Extreme', value: 6 },
];

const types = [
  { label: 'Exam', value: 'EXAM' },
  { label: 'Final', value: 'FINAL' },
  { label: 'Project', value: 'PROJECT' },
];

const TaskForm = ({ task = {}, modalToggler, submitHandler, title, addMode }) => {
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: addMode ? '' : task,
  });
  const onSubmit = (data) => console.log(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 className="text-3xl font-semibold">{title}</h3>
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
              <TextInput name="title" register={register} errors={errors} />
              <Select
                name="difficulty"
                register={register}
                errors={errors}
                control={control}
                options={difficulties}
              />
              <Datepicker name="deadline" register={register} errors={errors} control={control} />
              <Select
                name="type"
                register={register}
                errors={errors}
                control={control}
                options={types}
              ></Select>
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
            Close
          </button>
          <button
            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="submit"
            style={{ transition: 'all .15s ease' }}
          >
            {addMode ? 'Add' : 'Edit'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
