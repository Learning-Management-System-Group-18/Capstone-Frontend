import React, { useState } from 'react';
import {
    Card,
    Button,
    Table,
    NavbarAdmin,
    SearchBar,
    Notification,
    ProgressBar
} from '../../components';
import { Form } from 'react-bootstrap';
import { employIcon, categoriesIcon, courseIcon, arrowRightIcon, totalMentorIcon } from '../../assets';
import uploadIcon from '../../assets/img/upload-icon.svg';
import './style.css';
import { useParams } from 'react-router-dom';

const Index = () => {

    const { categoryName } = useParams();

    const [progressValue, setProgressValue] = useState(1);

    const tableTitle = ['Course'];
    const tHead = [
        'Course Title',
        'Mentor',
        'Section',
        'Employee',
        'Action',
    ];
    const data = [
        {
            title: 'Android Developer',
            mentor: ['mentor 1', 'mentor 2'],
            section: '12 Section',
            employee: '34 Employees',
            iconTitle: 'https://img.icons8.com/ultraviolet/344/play-button-circled.png',
            mentorImg: ['https://akcdn.detik.net.id/visual/2016/08/31/46968e0b-a0db-4348-920b-94a64aad2efd_169.jpg?w=650', 'https://akcdn.detik.net.id/visual/2016/08/31/46968e0b-a0db-4348-920b-94a64aad2efd_169.jpg?w=650']
        },
        {
            title: 'Android Developer',
            mentor: ['mentor 1', 'mentor 2'],
            section: '12 Section',
            employee: '34 Employees',
            iconTitle: 'https://img.icons8.com/color/344/apple-app-store--v1.png',
            mentorImg: ['https://akcdn.detik.net.id/visual/2016/08/31/46968e0b-a0db-4348-920b-94a64aad2efd_169.jpg?w=650', 'https://akcdn.detik.net.id/visual/2016/08/31/46968e0b-a0db-4348-920b-94a64aad2efd_169.jpg?w=650']
        },
    ];

    const handleNextButton = (progresValue) => {
        console.log(progresValue);
        setProgressValue(progresValue);
    }

    const handleImageUpload = () => {
        document.getElementById('uploadImage');
    }

    return (
        <>
            <NavbarAdmin />
            <div className="background">
                <div className="nav-info">
                    <div className="container d-flex justify-content-between py-4">
                        <div className="nav-name">
                            <span className='align-middle caption_2'>Dashboard <img src={arrowRightIcon} alt="arrow-right" /> {categoryName} <img src={arrowRightIcon} alt="arrow-right" /> Create New Course </span>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <SearchBar />
                            <Notification />
                        </div>
                    </div>
                </div>
                <div className='pt-5'>
                    <ProgressBar proggres={progressValue} />
                </div>
                <div className='body'>
                    {
                        progressValue === 1 ? (
                            <div className='m-4 bg_neutral_4 rounded'>
                                <div className='px-5 pt-5'>
                                    <h1 className='heading_4'>Course Information</h1>
                                    <p className='body_1'>Please fill the details below about course information</p>
                                </div>
                                <form className='p-5'>
                                    <Form.Label className="subtitle_2">Title</Form.Label>
                                    <div className="mb-3 text-start">
                                        <input
                                            type="text"
                                            placeholder="Enter course title"
                                            className="form-control mb-4 radiusborder"
                                            // onChange={handleInput}
                                            // value={data.title}
                                            name="title"
                                            required
                                        ></input>
                                    </div>
                                    <Form.Label className="subtitle_2">Description</Form.Label>
                                    <div className="mb-3 text-start">
                                        <textarea
                                            type="text"
                                            placeholder="Type something here"
                                            className="form-control mb-4 radiusborder"
                                            // onChange={handleInput}
                                            // value={data.title}
                                            rows={7}
                                            name="title"
                                            required
                                        ></textarea>
                                    </div>
                                    <Form.Label className="subtitle_2">Level</Form.Label>
                                    <div className="mb-3 text-start">
                                        <select className='form-select neutral_5 mb-4 radiusborder' name="level">
                                            <option selected>Choose level</option>
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="advance">Advance</option>
                                        </select>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <Button type={'btn-next'} onClick={() => handleNextButton(2)} />
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className='m-4 bg_neutral_4 rounded'>
                                <div className='px-5 pt-5'>
                                    <h1 className='heading_4'>Attachment File</h1>
                                    <p className='body_1'>Attach all file that needed in this course</p>
                                </div>
                                <form className='p-5'>
                                    {/* <Form.Label className="subtitle_2">Title</Form.Label> */}
                                    <label className='subtitle_2 mb-3' for="uploadImage">
                                        Title
                                        <input
                                            name="image"
                                            // defaultValue={imageBase64}
                                            // {...getInputProps()}
                                            type="file"
                                            id='uploadImage'
                                        />
                                        <div className="py-3 input-image-form">
                                            <img src={uploadIcon} alt="upload-icon" />
                                            <p className='caption_1 neutral_2'>Drag & drop image here</p>
                                        </div>
                                    </label>
                                    <Form.Label className="subtitle_2">Mentor</Form.Label>
                                    <div className="mb-3 text-start">
                                        <textarea
                                            type="text"
                                            placeholder="Type something here"
                                            className="form-control mb-4 radiusborder"
                                            // onChange={handleInput}
                                            // value={data.title}
                                            rows={7}
                                            name="title"
                                            required
                                        ></textarea>
                                    </div>
                                    <Form.Label className="subtitle_2">Tools</Form.Label>
                                    <div className="mb-3 text-start">
                                        <select className='form-select neutral_5 mb-4 radiusborder' name="level">
                                            <option selected>Choose level</option>
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="advance">Advance</option>
                                        </select>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <Button type={'btn-back'} onClick={() => handleNextButton(1)} />
                                        <Button type={'btn-save'} />
                                    </div>
                                </form>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Index;
