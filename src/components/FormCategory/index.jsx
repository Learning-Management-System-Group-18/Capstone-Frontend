import React, { useState, useCallback } from 'react';
import { Form } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import './style.css';
import uploadIcon from '../../assets/img/upload-icon.svg';

const Index = ({ handleClose, handleShow }) => {

    const [imageBase64, setImageBase64] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        getBase64(acceptedFiles[0])
            .then((result) => {
                if (result) {
                    setImageBase64(result);
                } else {
                    setImageBase64('');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const newData = {
        title: '',
        description: '',
        image: '',
    }

    const newCategoryData = [];
    const [category, setCategory] = useState(newCategoryData);
    const [data, setData] = useState(newData);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({
            ...data,
            [name]: value,
        });
        console.log('data', data);
    };

    const handleSubmit = (event) => {
        console.log(data);
        event.preventDefault();
        const newCategory = {
            title: data.title,
            description: data.description,
            image: imageBase64,
        };
        setCategory(category.concat(newCategory));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <Form.Label className="title">Input Title</Form.Label>
                <div className="mb-3 text-start">
                    <input
                        type="text"
                        placeholder="Type something here"
                        className="form-control mr-3 mb-4"
                        onChange={handleInput}
                        value={data.title}
                        name="title"
                        required
                    ></input>
                </div>
                <Form.Label className="title">Input Description</Form.Label>
                <div className="mb-3 text-start">
                    <textarea
                        type="text"
                        placeholder="Type something here"
                        className="form-control mr-3 mb-4"
                        onChange={handleInput}
                        value={data.description}
                        name="description"
                        rows={5}
                        required
                    ></textarea>
                </div>
                <Form.Label className="title">Upload Image</Form.Label>
                <div className='form-control py-5 mb-3' {...getRootProps()} id="uploadImage">
                    <input name="image" defaultValue={imageBase64} {...getInputProps()} />
                    <img src={uploadIcon} alt="upload-icon" />
                    <p>Drag & drop image here</p>
                </div>
                <button className="btn btn-secondary" onClick={handleClose}>
                    Close
                </button>
                <button type="submit" className="btn btn-primary">
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default Index;
