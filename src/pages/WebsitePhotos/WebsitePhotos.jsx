import React from "react";
export default function WebsitePhotos({ website }) {

  return (
    <div>
      <img src={website.photos} target="_blank" alt="not found" />
    </div>
  );
}