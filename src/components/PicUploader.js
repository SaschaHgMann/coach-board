import React from "react";
import axios from "axios";
import styled from "styled-components";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

const StyledInput = styled.input`
   width: 100%;
   border-color: black;
   padding: 5px;
`;
const StyledImage = styled.img`
   display: flex;
   margin-left: 2%;
   margin-top: 2%;
   margin-bottom: 10px;
   width: 96%;
   border-radius: 10px;
`;
const StyledLabel = styled.div`
   margin-left: 5px;
   font-size: 18px;
`;

export default function PicUploader({ url, onImageChange }) {
   function upload(event) {
       const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;
       const formData = new FormData();
       formData.append("file", event.target.files[0]);
       formData.append("upload_preset", PRESET);
       console.log(url)
       axios
           .post(url, formData, {
               headers: {
                   "Content-type": "multipart/form-data"
               }
           })
           .then(onImageSave)
           .catch(err => console.error(err));
   }
   function onImageSave(response) {
       onImageChange(response.data.url);
   }
   return (
       <div>
           {url && <StyledImage src={url} alt="" />}
           <StyledLabel>
               {url ? "Change picture" : "Add profile picture"}
           </StyledLabel>
           <StyledInput type="file" name="file" onChange={upload} />
       </div>
   );
}