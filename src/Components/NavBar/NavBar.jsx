import { NavLink, useLocation, useNavigate } from 'react-router-dom';
function Navbar() {
    let style = {
        backgroundColor: '#B235B2',
        borderRadius: '7px'
    }
    let path = useLocation().pathname
    let menuOptions = [
        {
            text: 'Home',
            to: ''
        },
        {
            text:'Aboutus',
            to: 'aboutus'
        },
        {
            text: 'Gallery',
            to: 'gallery'
        },
        {
            text:'Services',
            to: 'services'
        },
        {
            text: 'Contactus',
            to: 'contactus'
        }
    ]
    return (
            <div className='row header-element' style={{backgroundColor:'#AFAFAF'}}>
                <div className='d-flex justify-content-end p-2'>
                    <ul className="nav text-center" style={{ fontSize: '1.3rem' }}>
                        {menuOptions.map((ele) => {
                            return (<li className="nav-item li">
                                <NavLink className="nav-link text-primary" to={ele.to} style={{ width: '8rem',...(true&&{})}}>
                                    {ele.text}
                                </NavLink>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
    )
}

export default Navbar