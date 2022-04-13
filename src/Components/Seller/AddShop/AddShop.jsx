import React from 'react';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../../Context/Context';
import { useHistory } from 'react-router-dom';
import './AddShop.scss';

function AddShop() {
    const history = useHistory();
    const { Sellers, AdminTrue, Cartcount, seller } = useContext(DataContext);
    const [adminTrue, setadminTrue] = AdminTrue;
    const [res, setres] = useState(false);
    const [image, setimage] = useState();
    const [isloading, setisloading] = useState(false);
    const [url, seturl] = useState();
    const [show, setShow] = useState(false);
    const [input, setinput] = useState({
        name: '',
        category: '',
        phone: '',
        location: '',
    });
    const handleChange = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        setisloading(true);
        console.log('handleAdd Working');
        const formdata = new FormData();

        formdata.append('file', image);
        formdata.append('upload_preset', 'llcm6mzz');

        console.log(seller);

        await axios
            .post(
                'https://api.cloudinary.com/v1_1/di0bgblj1/image/upload ',
                formdata
            )
            .then((response) => {
                console.log(response);
                seturl(response.data.url);
            });
        url &&
            (await axios
                .post('https://productsandservices.herokuapp.com/seller/addshop', {
                    input: input,
                    url: url,
                    sellerId: seller,
                    createdBy: seller,
                })
                .then((res) => {
                    console.log(res);
                    res.data.vibe && alert('successfuly added');
                    setimage();
                    setisloading(false);
                    history.push("/seller");
                }));
    };
    const handleClose = () => {
        setShow(false);
        history.push('/seller');
    };

    useEffect(() => {
        setadminTrue(false);
    });

    return (
        <div>
            {/* try */}
            <div className='shop_body'>
                <div class='container'>
                    <form id='contact' method='post'>
                        <h3>ADD SHOP</h3>

                        <input
                            type='text'
                            onChange={handleChange}
                            name='name'
                            placeholder='Shop name'
                            required
                        />

                        <input
                            type='text'
                            onChange={handleChange}
                            name='category'
                            placeholder='Category'
                            required
                        />

                        <input
                            onChange={handleChange}
                            name='phone'
                            placeholder='Contact Number'
                            type='text'
                            required
                        />

                        <input
                            type="text"
                            placeholder='Location of shop'
                            onChange={handleChange}
                            name='location'
                            required
                        ></input>
                        <input
                            accept='image/png'
                            onChange={(e) => setimage(e.target.files[0])}
                            type='file'
                            required
                        />

                        <button name='submit' type='submit' onClick={handleAdd}>
                            {isloading ? 'confirm' : 'Add Shop'}{' '}
                        </button>
                        <button
                            name='submit'
                            type='reset'
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </form>
                </div>

            </div>
                {/* try */}
        </div>
    );
}

export default AddShop;
