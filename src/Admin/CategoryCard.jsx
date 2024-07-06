import React from 'react'

function CategoryCard({ category, index, id }) {
    return (
        <>
            <div className="cart-single-list product-line" key={id}>
                <div className="row align-items-center">
                    <div className="col-lg-1 col-md-3 col-12">
                        <p>{index + 1}</p>
                    </div>
                    <div className="col-lg-3 col-md-1 col-12">
                        <p>{category.name}</p>
                    </div>
                    <div className="col-lg-4 col-md-3 col-12">
                        <p>{category.description}</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-12">
                        <p>{category.username}</p>
                    </div>
                    {/* <div className="col-lg-2 col-md-2 col-12">
                        <p>{category.timestamp.toDate().toLocaleDateString()}</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default CategoryCard
