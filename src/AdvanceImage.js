import React, { useState } from "react";
import { Image } from "cloudinary-react";
import { v4 as uuidv4 } from "uuid";

const AdvanceImage = ({ url }) => {
  const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const [feature, setFeature] = useState("Original");

  const advancedFeatures = [
    {
      name: "Original",
      component: <Image cloudName={CLOUD_NAME} publicId={url} />,
    },
    {
      name: "Resizing and Cropping",
      component: (
        <Image cloudName={CLOUD_NAME} publicId={url} width="500" crop="scale" />
      ),
    },
    {
      name: "Grayscale Effect",
      component: (
        <Image cloudName={CLOUD_NAME} publicId={url} effect="grayscale" />
      ),
    },
    {
      name: "Image Quality Adjust",
      component: <Image cloudName={CLOUD_NAME} publicId={url} quality="auto" />,
    },
    {
      name: "Convert to PNG",
      component: <Image cloudName={CLOUD_NAME} publicId={url} format="png" />,
    },
    {
      name: "Adding watermarks",
      component: (
        <Image
          cloudName={CLOUD_NAME}
          publicId={url}
          overlay="watermark"
          gravity="south_east"
          opacity="60"
        />
      ),
    },
    {
      name: "Face detection",
      component: (
        <Image
          cloudName={CLOUD_NAME}
          publicId={url}
          gravity="faces"
          crop="thumb"
          width="200"
          height="200"
        />
      ),
    },
    {
      name: "Text and image overlays",
      component: (
        <Image
          cloudName={CLOUD_NAME}
          publicId={url}
          overlay="text:arial_30_bold:Hello World!"
          gravity="north_west"
        />
      ),
    },
    {
      name: "Automatic background removal",
      component: (
        <Image cloudName={CLOUD_NAME} publicId={url} remove_background="auto" />
      ),
    },
    {
      name: "Video Thumbnail Generation",
      component: (
        <Image cloudName={CLOUD_NAME} publicId={url} video_thumbnail="10" />
      ),
    },
    {
      name: "Face Blurring",
      component: (
        <Image cloudName={CLOUD_NAME} publicId={url} blur_faces="true" />
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-3">
        {advancedFeatures.map((item) => (
          <div
            className={`flex justify-center items-center border-2 border-slate-600 p-2 rounded-sm shadow-md cursor-pointer ${
              feature === item.name && "bg-green-200 shadow-lg"
            }`}
            onClick={() => setFeature(item.name)}
            key={uuidv4()}
          >
            <p className="text-center font-semibold"> {item.name}</p>
          </div>
        ))}
      </div>
      {advancedFeatures.map(
        (item) =>
          feature === item.name && (
            <div className="mt-5 flex justify-center" key={uuidv4()}>
              {item.component}
            </div>
          )
      )}
    </div>
  );
};

export default AdvanceImage;
