import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';

const Datepicker = ({ name, control }) => {
  return (
    <div class="flex flex-row mb-4 justify-center items-center">
      <label class="block text-gray-700 text-sm font-normal mr-2 capitalize" for={name}>
        {name}
      </label>
      <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <Controller
          name={name}
          control={control}
          render={({ onChange, value }) => (
            <DatePicker selected={value ? new Date(value) : new Date()} onChange={onChange} />
          )}
        />
      </div>
    </div>
  );
};

export default Datepicker;
