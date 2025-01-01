import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { API_URL } from "../config";

const ImageUpload = ({ onResult }) => {
    const [img, setImg] = useState(null);
    const [showWebcam, setShowWebcam] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const webcamRef = useRef(null);

    // Check if device is mobile on component mount
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImg(file);
        setShowWebcam(false);
    };

    const captureImage = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            fetch(imageSrc)
                .then(res => res.blob())
                .then(blob => {
                    setImg(new File([blob], 'camera.jpg', { type: 'image/jpeg' }));
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
            <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} />
            
            {isMobile && (
                <>
                    <button onClick={() => setShowWebcam(true)} className="camera-button">
                        Open Camera
                    </button>
                    
                    {showWebcam && (
                        <div className="camera-container">
                            <Webcam 
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                videoConstraints={{
                                    facingMode: { exact: "environment" },
                                    aspectRatio: 1
                                }}
                            />
                            <button onClick={captureImage}>Take Photo</button>
                            <button onClick={() => setShowWebcam(false)}>Cancel</button>
                        </div>
                    )}
                </>
            )}

            {img && !showWebcam && (
                <div className="preview">
                    <img src={URL.createObjectURL(img)} alt="preview" />
                </div>
            )}

            <button onClick={handleUpload} disabled={!img}>
                Upload
            </button>
        </div>
    );
};

export default ImageUpload;