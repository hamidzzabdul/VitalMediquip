import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./NavRoutes.scss"


const NavRoutes = () => {
    const location = useLocation()
    const routeSegments = location.pathname.split('/').filter(segment => segment !== '');
    return (
        <div className="navigation-routes">
            {routeSegments.map((segment, index) => {
                const decodedSegment = decodeURIComponent(segment);
                return (
                    <React.Fragment key={index}>
                        <Link to={`/${routeSegments.slice(0, index + 1).join('/')}`}>
                            {decodedSegment}
                        </Link>
                        {index !== routeSegments.length - 1 && <span> {'/'} </span>}
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export default NavRoutes