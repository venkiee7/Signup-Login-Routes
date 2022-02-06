import React from 'react';


export const Home = (props) => {
    const {showAlert} = props
    return (
        <div>
            {showAlert}
        </div>
    )
}

export default Home;