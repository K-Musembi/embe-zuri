import React, { useState } from "react";
import { API_URL } from "../config";

const ImageUpload = ({ onResult }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);  // when event occurs, set file
    };

    const handleUpload = async () => {
        if (!file) return;  // return if no file is selected

        const data = new FormData();
        data.append("image", file);

        try {
            const response = await fetch(`${API_URL}/upload`, {
                method: "POST",
                body: data,
            });
            if (response.ok) {
                const result = await response.json();
                onResult(result);  // pass result to parent component
            }
        } catch (err) {
            console.error("Upload failed:", err);
        }
    };  
    return (
        <div className="image-upload">
            <h2>Upload an image</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    ); 
};

export default ImageUpload;
