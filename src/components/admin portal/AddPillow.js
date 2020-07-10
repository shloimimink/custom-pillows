import React, {useState, useContext} from 'react';
import {GlobalContext} from "../../context/pillows/GlobalState";
import Spinner from "../layout/Spinner";

const AddPillow = (props) => {
    const initialState = {
        image: '',
        bannerImage: '',
        pillowNumber: 0,
        pillowColor: '',
        price: 0,
        size: '',
        description: '',
        galleryImages: []
    }

    const {addPillow, error} = useContext(GlobalContext);
    const [newPillow, setNewPillow] = useState(initialState)
    const [loading, setLoading] = useState(false)
    console.log(error);


    const handleChange = (e) => {
        setNewPillow({...newPillow, [e.target.name]: e.target.value})
    }

    const handleAttach = (e) => {
        console.log(e.target.files)
        if (e.target.files.length === 1) {
            setNewPillow({...newPillow, [e.target.name]: e.target.files[0]})
        } else {
            setNewPillow({...newPillow, [e.target.name]: e.target.files})

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('pillowNumber', newPillow.pillowNumber)
        formData.append('pillowColor', newPillow.pillowColor)
        formData.append('price', newPillow.price)
        formData.append('size', newPillow.size)
        formData.append('description', newPillow.description)
        formData.append('image', newPillow.image)
        formData.append('bannerImage', newPillow.bannerImage)
        for (let i = 0; i < newPillow.galleryImages.length; i++) {
            formData.append('galleryImages', newPillow.galleryImages[i])
        }

        const wasSuccessful = await addPillow(formData)
        if (wasSuccessful) {
            props.history.push('/pillows')
        }
        setLoading(false);
        //setNewPillow(initialState);
    };

    return (
        <form onSubmit={handleSubmit} className="row">
            <br/>
            <br/>
            <div className="container">
                {error && <p>{error}</p>}
                {loading ? <Spinner/> : (
                    <div className="col s12 m5 offset-m4 ">
                        <div className="card">
                            <div className="card-action grey lighten-3 black-text">
                                <h6>Add pillow</h6>
                            </div>
                            <div className="file-field input-field">
                                <div className="btn">
                                    <span>File</span>
                                    <input
                                        type="file"
                                        placeholder="Upload main card image"
                                        name="image"
                                        onChange={handleAttach}
                                    />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text"
                                           placeholder="Upload main card image"
                                           value={newPillow.image && newPillow.image.name}
                                    />
                                </div>
                            </div>
                            <div className="file-field input-field">
                                <div className="btn">
                                    <span>File</span>
                                    <input type="file"
                                           placeholder="Upload banner image"
                                           name="bannerImage"
                                           onChange={handleAttach}
                                    />
                                </div>
                                <div className="file-path-wrapper">
                                    <input
                                        className="file-path validate"
                                        type="text"
                                        placeholder="Upload banner image"
                                        value={newPillow.bannerImage && newPillow.bannerImage.name}
                                    />
                                </div>
                            </div>
                            <div className="file-field input-field">
                                <div className="btn">
                                    <span>File</span>
                                    <input
                                        type="file" multiple
                                        placeholder="Upload image gallery"
                                        name="galleryImages"
                                        onChange={handleAttach}
                                    />
                                </div>
                                <div className="file-path-wrapper">
                                    <input
                                        className="file-path validate"
                                        type="text"
                                        placeholder="Upload image gallery"
                                        value={[...newPillow.galleryImages].map(img => img.name).join(', ')}
                                    />
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="form-field">
                                    <label form="number">Pillow number</label>
                                    <input
                                        type="text"
                                        name="pillowNumber"
                                        value={newPillow.pillowNumber}
                                        id="number"
                                        onChange={handleChange}
                                    />
                                </div>
                                <br/>
                            </div>
                            <div className="card-content">
                                <div className="form-field">
                                    <label form="text">Color</label>
                                    <input
                                        type="text"
                                        name="pillowColor"
                                        value={newPillow.pillowColor}
                                        id="color"
                                        onChange={handleChange}
                                    />
                                </div>
                                <br/>
                            </div>
                            <div className="card-content">
                                <div className="form-field">
                                    <label form="number">Price</label>
                                    <input
                                        type="text"
                                        name="price"
                                        value={newPillow.price}
                                        id="price"
                                        onChange={handleChange}
                                    />
                                </div>
                                <br/>
                            </div>
                            <div className="card-content">
                                <div className="form-field">
                                    <label form="number">Size</label>
                                    <input
                                        type="text"
                                        name="size"
                                        value={newPillow.size}
                                        id="size"
                                        onChange={handleChange}
                                    />
                                </div>
                                <br/>
                            </div>
                            <div className="card-content">
                                <div className="form-field">
                                    <label form="text">Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        value={newPillow.description}
                                        id="description"
                                        onChange={handleChange}
                                    />
                                </div>
                                <br/>
                            </div>
                            <div className="form-field">
                                <button className="btn-large gray lighten-3">Add Pillow</button>
                            </div>
                            <br/>
                        </div>
                    </div>
                )}
            </div>
        </form>
    );
};

export default AddPillow;
