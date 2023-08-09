import React, { useContext } from 'react'
import { loginContext } from '../Context/PageContext'

const ShowData = () => {
    const { singleUser } = useContext(loginContext);
    console.log(singleUser);
    return (
        <div>
            {singleUser.name}
            <br />
            {singleUser.password}
        </div>
    )
}

export default ShowData
