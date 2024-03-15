import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './ImageDiagnosisInterface.css';


const ImageDiagnosisInterface = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Check if the file is a JPEG image
            if (!file.type.includes('jpeg')) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Image format is not correct, please select a JPG image.',
                });
                setImagePreviewUrl('');
                setSelectedFile(null);
                return; // Stop further processing
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
            setSelectedFile(file);
        } else {
            setImagePreviewUrl('');
            setSelectedFile(null);
        }
    };


    const handleSubmit = async () => {
        if (!selectedFile) {
            // alert('Please select a file first!');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please select a file first!...',
            });
            return;
        }
        setIsLoading(true); // Start loading
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://127.0.0.1:5000/api/predict', {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                const result = await response.json();
                // Retrieve cattle information from localStorage
                const cattle = localStorage.getItem('selectedCattle');
                // Check if cattle information exists
                if (cattle) {
                    result.cattle = cattle; // Add cattle information to the result object
                } else {
                    console.error('Cattle information is not found in localStorage');
                    // Handle the case where cattle information is missing
                }
    
                setPrediction(result);
    
                // Send the prediction along with cattle information to the server for saving to MongoDB
                fetch('http://127.0.0.1:5001/api/save_prediction', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(result),
                })
                    .then(response => response.json())
                    .then(data => console.log('Prediction saved:', data))
                    .catch((error) => {
                        console.error('Error saving prediction:', error);
                    });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to predict. Please try again...',
                });
            }
        } catch (error) {
            console.error('Error during prediction:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred. Please try again..',
            });
        } finally {
            setIsLoading(false); // End loading
        }
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Cattle Skin Disease Identification</h2>
            <div className="image-preview mb-4 p-2 border border-gray-200 rounded-lg h-36 text-center flex items-center justify-center">
                {imagePreviewUrl ? (
                    <img src={imagePreviewUrl} alt="Preview" className="max-w-full max-h-full" />
                ) : (
                    <p className="text-gray-500">No image selected</p>
                )}
            </div>
            {isLoading && (
                <div className="flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            )}
            <div>
                {prediction && (
                    <>
                        <p>Predicted Class: {prediction.predicted_class}</p>
                        <p>Severity Level: {prediction.severity_level}</p>
                        <p>Probability: {prediction.probability.toFixed(2)}</p>
                    </>
                )}
            </div>
            <div className="flex justify-between items-center mt-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none" onClick={() => document.getElementById('file-input').click()}>
                    Upload Image
                </button>
                <input type="file" id="file-input" hidden onChange={handleImageChange} accept="image/*" />
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" onClick={handleSubmit}>Process</button>
            </div>
            <div className="mt-6">
                <h3 className="font-semibold">Details and Remedies :</h3>
                <details className="p-4 border border-gray-200 rounded-lg mt-2">
                    <summary className="font-medium cursor-pointer">Treatment Details</summary>
                    <p className="mt-2">Apply an iodine solution to the lumps.</p>
                    <summary className="font-medium cursor-pointer">Treatment Details</summary>
                    <p className="mt-2">Apply an iodine solution to the lumps.</p>
                    {/* Add more details as needed */}
                </details>
                <details className="p-4 border border-gray-200 rounded-lg mt-2">
                    <summary className="font-medium cursor-pointer">Treatment Details</summary>
                    <p className="mt-2">Apply an iodine solution to the lumps.</p>
                    <summary className="font-medium cursor-pointer">Treatment Details</summary>
                    <p className="mt-2">Apply an iodine solution to the lumps.</p>
                    {/* Add more details as needed */}
                </details>
                {/* <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 focus:outline-none">How to Prevent</button> */}
            </div>
        </div>
    );
};

export default ImageDiagnosisInterface;
