import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { API_URL } from "../config";

const ImageUpload = ({ onResult }) => {
    const [img, setImg] = useState(null);
    const [showWebcam, setShowWebcam] = useState(true);
    const navigate = useNavigate();
    const webcamRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setImg(file);  // when event occurs, set file
        setShowWebcam(false);
    };

    const captureImage = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            // convert base64 to file
            fetch(imageSrc)
                .then(res => res.blob())
                .then(blob => {
                    setImg(new File([blob], 'webcam.jpg', { type: 'image/jpeg' }));
                    setShowWebcam(false);
                });
        }
    }, [webcamRef]);

    const handleUpload = async () => { 
        if (!img) return;  // return if no file is selected

        const data = new FormData();
        data.append("image", img);
        
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
            <h2>Upload a mango leaf image</h2>
            {/*<label htmlFor="file-upload" className="custom-file-upload">
                Choose File
            </label>*/}
            <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} />
            {showWebcam ? (
                <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
            ) : (
                <div className="preview">
                    <img src={URL.createObjectURL(img)} alt="preview" />
                </div>
            )}
            <button onClick={captureImage}>Take leaf photo</button>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ImageUpload;
