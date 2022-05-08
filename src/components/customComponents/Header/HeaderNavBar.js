import {Link} from 'react-router-dom';

export const HeaderNavBar = () => {
    return <><header>
    <div className="logo-container">
        <Link to="/">
        <img className="logo" src="https://res.cloudinary.com/duddwta8d/image/upload/v1650806306/just_logo_whau5y.png" alt="logo"/>
        </Link>
    </div>
    <div className="search-wrapper">
        <form>
            <input type="text" name="search-bar" id="search-bar" placeholder="Search"/>
        </form>
    </div>
    <div className="header-nav">
        <nav>
            <ul>
                <li>
                    <div className="badge-container">
                        <Link to="/wishlist"> 
                            <img className="img-xs" src="https://res.cloudinary.com/duddwta8d/image/upload/v1650767411/video_call_he9qq7.svg" alt="wishlist"/>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="badge-container">
                        <Link to="/cart">
                            <img className="img-xs" src="https://res.cloudinary.com/duddwta8d/image/upload/v1650767297/bell_jnqt3x.svg" alt="shopping-cart"/>
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
        <Link to="/" className="user">
            <img className="avatar avatar-md rounded" src="https://res.cloudinary.com/duddwta8d/image/upload/v1648081722/avatar-1_q0h9ko.jpg" alt="avatar"/>
        </Link>
    </div>
</header></>
}