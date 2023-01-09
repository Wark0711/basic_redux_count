import React from 'react'

function Pagination({ totalPosts, postsPerPage, setCurrentPage }) {
    let pages = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className='pagination'>
            {
                pages.map((page, index) => {
                    return <div key={index} className={'pagin paginate'+page} onClick={() => setCurrentPage(page)}></div>
                })
            }
        </div>
    )
}

export default Pagination