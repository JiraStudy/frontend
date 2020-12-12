import React from 'react';

const TextInput = ({ name, register, errors }) => {
  return (
    <div class="flex flex-row mb-4 justify-center items-center">
      <label class="block text-gray-700 text-sm font-normal mr-2 capitalize" for={name}>
        {name}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name={name}
        v-model="form.email"
        type="text"
        autofocus
        placeholder={name}
        ref={register}
      />
      {errors[name] && <span>This field is required</span>}
    </div>
  );
};

export default TextInput;
