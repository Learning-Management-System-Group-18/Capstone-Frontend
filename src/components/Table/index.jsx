import React from 'react';

const Index = ({ tHead, data }) => {
    return (
        <div>
            <div className='rounded row bg-light text-dark align-items-center p-2'>
                {
                    tHead.map((head, headIdx) => (
                        <div className='col text-center' key={headIdx}>{head}</div>
                    ))
                }
            </div>
            {
                data.map((row, rowIdx) => (
                    <div>
                        <div className='rounded row bg-light text-dark align-items-center p-2'>
                            {row}
                        </div>
                    </div>
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
        </div>
    );
}

export default Index;
