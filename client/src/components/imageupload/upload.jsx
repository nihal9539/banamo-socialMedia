import React, { useEffect, useState } from 'react'
import { getAllPost, uploadPost } from '../../api/PostRequest';

const Upload = () => {

    const [image, setImage] = useState("")
    const [imageArraay, setImageArraay] = useState([])

    const convertToBase64 = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result)
        }
        reader.onerror = (err) => {
            console.log("error", err);
        }
    }
    const uploadImage = ()=>{
        const data = {
            image:image
        }
        uploadPost(data).then((res)=>{
            // console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getAllPost().then((res)=>{
            setImageArraay(res.data)
        }).catch((err)=>{
            console.log(err);
        })

    },[])
    return (
        <div>
            <div>
                <input
                    type="file"
                    accept='image/'
                    onChange={convertToBase64}
                />
            </div>

            {image === "" || image == null ? "" : <img src={image} width={100} height={100} alt="" />
            }

            <button onClick={uploadImage}>Upload image</button>


            {imageArraay.map((img)=>{
                return(
                    <div>
                        {/* {console.log(img)} */}
                        <img src={img.image} width={200} height={200} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default Upload
