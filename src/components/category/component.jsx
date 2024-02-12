export const Category = ({ title, onClick }) => {

    return <button style={{color: 'white'}} onClick={onClick}>
        {title}
    </button>
}