import React from 'react'
import { useNavigate } from "react-router-dom";

export function CardComponent({ data }) {
    const navigation = useNavigate()

    return (
        <div className="card" style={{ alignItems: 'center', marginTop: 20, }} onClick={() => {
            navigation('/ProductDetail', { state: { product: data } })
            
                // sayfalar arası veri taşıdık
            
        }}>
            <img src={data.image} className="img-fluid mt-3" style={{ height: 128, width: 128 }} />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p>{data.description}</p>
                <p>{data.price + ' ₺'}</p>
            </div>
        </div>
    )
}