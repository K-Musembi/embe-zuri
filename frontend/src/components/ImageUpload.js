import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const ImageUpload = ({ onResult }) => {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

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
                navigate("/result");
            }
        } catch (err) {
            console.error("Upload failed:", err);
        }
    };  
    return (
        <div className="image-upload-container">
            <h2>Upload an image</h2>
            <label htmlFor="file-upload" className="custom-file-upload">
                Choose File
            </label>
            <input id="file-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ImageUpload;
