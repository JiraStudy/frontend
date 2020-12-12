import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const InputSelect = ({ name, control }) => {
  return (
    <div class="flex flex-row mb-4 justify-center items-center">
      <label class="block text-gray-700 text-sm font-normal mr-2 capitalize" for={name}>
        {name}
      </label>
      <div className="shadow appearance-none border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <Controller as={Select} name={name} options={options} control={control} />
      </div>
    </div>
  );
};

export default InputSelect;
