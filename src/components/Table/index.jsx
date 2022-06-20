import React from 'react';
import './style.css';
import { Accordion } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

const Index = ({ tHead, data, tableTitle }) => {

    const location = useLocation();

    return (
        <div className='rounded p-2 bg-light'>
            <div className='mb-5'>
                <h3>{tableTitle}</h3>
            </div>
            <div className='px-2'>
                {
                    location.pathname === '/dashboard' ? (
                        <table className='table table-hover'>
                            <thead>
                                <div className='row rounded bg-light text-dark align-items-center p-2'>
                                    {
                                        tHead.map((head, headIdx) => (
                                            <div className='col text-center' key={headIdx}>{head}</div>
                                        ))
                                    }
                                </div>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, itemIdx) => (
                                        <Accordion>
                                            <div className='row rounded bg-light text-dark align-items-center' key={itemIdx}>
                                                <Accordion.Item eventKey={itemIdx}>
                                                    <Accordion.Header>
                                                        <div className='col text-center'>{item.title}</div>
                                                        <div className='col text-center'>{item.desc.length >= 70 ? `${item.desc.substring(0, 70)}...` : item.desc}</div>
                                                        <div className='col text-center'>{item.course}</div>
                                                        <div className='col text-center'>{item.employee}</div>
                                                        <div className='col d-flex justify-content-end px-3'>
                                                            <button className='btn btn-sm btn-outline-warning'>Edit</button>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='d-flex justify-content-end px-4'>
                                                            <div className='border text-center px-2 rounded border-danger'>
                                                                <span className='align-middle'>Delete this category, will remove all the items and the courses in this category</span>
                                                            </div>
                                                            <button className='btn btn-sm btn-outline-danger mx-2'>Delete</button>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>
                                        </Accordion>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <div>
                            <h1>bukan dashboard</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Index;
