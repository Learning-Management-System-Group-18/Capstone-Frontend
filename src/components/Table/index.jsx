import React from 'react';

const Index = ({ tHead, data }) => {
    return (
        <div>
            <table className='table table-hover'>
                <thead>
                    <tr className='rounded bg-light text-dark align-items-center p-2'>
                        {
                            tHead.map((head, headIdx) => (
                                <th className='text-center' key={headIdx}>{head}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            data.map((row, rowIdx) => (
                                <td className='py-4 rounded bg-light text-dark align-items-center p-2'>
                                    {row}
                                </td>
                            ))
                            // data.map((item, itemIdx) => (
                            //     <div className='rounded align-items-center p-2 bg-light row mb-2 card_post' key={itemIdx}>
                            //         <div className='col-1 text-center'>{itemIdx + 1}</div>
                            //         <div className='col text-center'>{item.judul}</div>
                            //         <div className='col text-center'>{item.user.nama}</div>
                            //         <div className='col text-center'>
                            //             <Link to={`/dashboard/edit-post/${item.id}`} className='btn btn-sm btn-outline-warning mx-2'>Edit</Link>
                            //             <button onClick={() => {
                            //                 handleDeletePostButton(item.id)
                            //             }} className='btn btn-sm btn-outline-danger'>Delete</button>
                            //         </div>
                            //     </div>
                            // ))
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Index;
