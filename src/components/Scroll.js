import React from "react";


const Scroll = ({ children }) => {
    
    // TODO Review how children work and create a folder in the learning folder
    return (
        <div style={{overflowY: 'scroll', height: '800px'}}>
        {children}
    </div>

    )


}

export default Scroll;