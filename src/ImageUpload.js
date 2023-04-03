import React, { useState } from "react";
import { Image } from "cloudinary-react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset");
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setImage(data.public_id);
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {image && (
        <Image
          cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
          publicId={image}
        />
      )}
    </div>
  );
};

export default ImageUpload;
