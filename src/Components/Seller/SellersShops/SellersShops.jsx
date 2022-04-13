import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../Context/Context';
import './SellerShops.css'

function SellersShops() {
    const [shops, setShops] = useState([]);
    const { seller } = useContext(DataContext);

    const getShops = async () => {
        const response = await axios.get(`https://productsandservices.herokuapp.com/seller/all-shop/${seller._id}`);
        console.log(response.data)
        setShops(response.data)
    }

    useEffect(() => {
        getShops()
    }, [])
    return (
        <div>
            {
            shops.map((shop) => {
                return (
                    <div>
                        <img src={shop?.url} alt="" />
                        <h1>{shop.Name}</h1>
                        <p>{shop?.Category}</p>
                        <p>{shop?.Price}</p>
                    </div>
                )
            })
        }
        
        </div>
    )
}

export default SellersShops