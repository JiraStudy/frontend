import AddIcon from '../assets/add.svg'

const addButton = (props) => (
    <button onClick={props.onClick} class="border border-gray-300 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
        <img src={AddIcon} alt='Add'/>
    </button>
)

export default addButton