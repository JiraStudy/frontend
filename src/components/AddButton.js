import AddIcon from '../assets/add.svg'

const addButton = (props) => (
    <button onClick={props.onClick} class="border border-gray-300 text-gray-700 rounded-md py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        style={{width: '175px'}}
    >
        <div style={{
            display: 'flex',
            'justify-content': 'space-evenly',
            'align-items': 'center'
        }}>
            <span>{props.text}</span>
            <img src={AddIcon} alt='Add' style={{
                width: '25px'
            }}/>
        </div>
    </button>
)

export default addButton