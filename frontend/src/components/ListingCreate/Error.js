import React, { useEffect, useRef } from "react";
import './Error.css'

const Errors = ({ errors }) => {
    const errorRef = useRef(null);

    useEffect(() => {
        if (errors) {
            errorRef.current.style.display = "block";
        } else {
            errorRef.current.style.display = "none";
        };
    }, [errors]);

    return (
        <div ref={errorRef} className="error-message">
            * Missing some information
        </div>
    );
};

export default Errors;







