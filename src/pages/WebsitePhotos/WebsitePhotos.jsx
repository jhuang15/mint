import React, { useState } from "react";

export default function WebsitePhotos({ website, selectedImage }) {
  
  
  return (
    <div>
      <h1>Photos</h1>
      <img src={website.photos} alt="not found" />
    </div>
  );
}
