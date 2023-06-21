import header from './Header.module.css'

function Header() {
    return(
        <div className={header.container}>     
            <h1>Belly Memory</h1>
            <div className={header.scoreBoard}>
                <p>Score : </p>
                <p>High Score : </p>
            </div>
        </div>
    )
}

export default Header;