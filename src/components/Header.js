import Button from "./Button"

const Header = ({ title }) => {

    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} color="green" text="Add" />
        </header>
    )
}

export default Header
