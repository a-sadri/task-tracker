import Button from "./Button"

const Header = ({ title, onAdd, showTask }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onAdd} color={showTask ? 'red' : 'green'} text={showTask ? 'Close' : 'Add'} />
        </header>
    )
}

export default Header
