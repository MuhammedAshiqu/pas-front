import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { useHistory } from "react-router-dom";
import "./AddProd.scss";

function AddProd() {
  const { Users, AdminTrue, Cartcount, seller } = useContext(DataContext);
  const [adminTrue, setadminTrue] = AdminTrue;
  const [cartCount, setcartCount] = Cartcount;
  const [res, setres] = useState(false);
  const history = useHistory();
  const [show, setShow] = useState(false);

  const [image, setimage] = useState();
  const [isloading, setisloading] = useState(false);
  const [url, seturl] = useState();
  const [input, setinput] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    setisloading(true);
    console.log("handleAdd Working");
    const formdata = new FormData();

    formdata.append("file", image);
    formdata.append("upload_preset", "llcm6mzz");
    await axios
      .post("https://api.cloudinary.com/v1_1/di0bgblj1/image/upload ", formdata)
      .then((response) => {
        console.log(response);
        seturl(response.data.url);
      });
    url &&
      (await axios
        .post("http://localhost:8008/seller/addproduct", {
          input: input,
          url: url,
          sellerId: seller,
        })
        .then((res) => {
          console.log(res);
          res.data.vibe && alert("successfuly added");
          setimage();
          setisloading(false);
          history.push("/seller");
        }));
  };

  const handleClose = () => {
    setShow(false);
    history.push("/seller");
  };
  
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    setadminTrue(false);

    handleShow();
  }, []);

  return (
    <div>
      <div className="container">
        <form method='POST' id="contact" onSubmit={handleAdd} >
          <h3>ADD PRODUCTS</h3>

          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Product name"
            required
          />

          <input
            type="text"
            onChange={handleChange}
            name="category"
            placeholder="Category"
            required
          />

          <input
            type="text"
            onChange={handleChange}
            name="price"
            placeholder="Price"
            required
          />

          <input
            accept="image/png"
            onChange={(e) => setimage(e.target.files[0])}
            type="file"
            required
          />
          <textarea
            placeholder="Emter the description"
            onChange={handleChange}
            name="description"
            required
          ></textarea>

          <button name="submit" type="submit" onClick={handleAdd}>
            {isloading ? "confirm" : "Add Product"}{" "}
          </button>
          <button name="submit" type="reset" onClick={handleClose}>
            Close
          </button>
        </form>
      </div>

      {/* try */}
    </div>
  );
}

export default AddProd;
