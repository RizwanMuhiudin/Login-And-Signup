import { createContext, useState } from "react";

const loginContext = createContext();

const PageContext = ({ children }) => {
    const [singleUser, setSingleUser] = useState();
    const [allUser, setAllUser] = useState([
        {
            name: 'Shuja',
            password: '1234'
        },
        {
            name: 'Asad',
            password: '5678'
        },
        {
            name: 'Rizwan',
            password: '8910'
        }
    ]);
    return (
        <loginContext.Provider value={{ allUser, setAllUser, singleUser, setSingleUser }}>
            {children}
        </loginContext.Provider>
    );
};
export default PageContext;
export { loginContext };