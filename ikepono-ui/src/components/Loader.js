import React, { useState } from "react";

function Loader() {
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (

        <div className="file-loader">
            <h2>Upload your photos:</h2>
            <input className="label" type="file" onChange={handleChange} />
            <img src={file} />
        </div>

    );
}

export default Loader;
