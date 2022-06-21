import React from 'react';
import './style.css';
import { Accordion } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '../';

const Index = ({ tHead, data, tableTitle }) => {

    const location = useLocation();

    return (
        <div className='rounded p-3 bg-light'>
            <div className='mb-5'>
                <h3 className='heading_4 secondary_2'>{tableTitle}</h3>
            </div>
            <div className='px-4'>
                {
                    location.pathname === '/dashboard' ? (
                        <table className='table table-hover'>
                            <thead>
                                <div className='row rounded bg-light text-dark align-items-center p-2'>
                                    {
                                        tHead.map((head, headIdx) => (
                                            <div className='col text-center body_2 neutral_2' key={headIdx}>{head}</div>
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
                                                        <div className='col text-center caption_1 secondary_2'>{item.title}</div>
                                                        <div className='col text-center caption_1 secondary_2'>{item.desc.length >= 70 ? `${item.desc.substring(0, 70)}...` : item.desc}</div>
                                                        <div className='col text-center caption_1 secondary_2'>{item.course}</div>
                                                        <div className='col text-center caption_1 secondary_2'>{item.employee}</div>
                                                        <div className='col d-flex justify-content-end mx-3'>
                                                            <Button type={"btn-edit"} />
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='d-flex justify-content-end px-4'>
                                                            <div className='mx-2 card_alert'>
                                                                <span className='alert_delete caption_1 secondary_2'>Delete this category, will remove all the items and the courses in this category</span>
                                                            </div>
                                                            <Button type={"btn-delete"} />
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
