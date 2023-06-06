import React, { useEffect, useRef } from "react";
import './Errors.css'

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
            * {errors}
        </div>
    );
};

export default Errors;







