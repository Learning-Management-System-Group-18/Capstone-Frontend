import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Index = ({ handleClose, handleShow }) => {

    const newData = {
        title: '',
        description: '',
        image: '',
    }

    const userRegister = [];
    const [user, setUser] = useState(userRegister);
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
        event.preventDefault();
        const newUser = {
            title: data.title,
            description: data.description,
            image: data.image,
        };
        setUser(user.concat(newUser));
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
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </form>
        </div>
    );
}

export default Index;
