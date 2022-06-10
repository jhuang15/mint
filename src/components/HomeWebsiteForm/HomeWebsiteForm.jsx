import React, { useState } from 'react';
import * as websiteAPI from '../../utilities/website-api';
import {  useNavigate } from "react-router-dom";

  export default function HomeWebsiteForm({ setWebsite }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState ({
      name1: '',
      name2: '',
      date: '',
      location: '',
      story: '',
      photos: '',
      invite: ''
    });

    function handleChange(evt) {
      setFormData({ ...formData, [evt.target.name]:evt.target.value })
    }

    async function handleSubmit(evt) {
      evt.preventDefault();
      //navigate('/preview-website')
      try {
        const website = await websiteAPI.createWebsite(formData)
        setWebsite(website);
      } catch {
        console.log('Website submit failed');
      }
    }

    return (
      <div className="container">
      <div className="website-form-container">
      <form onSubmit={handleSubmit}>
        <button className="submit-btn" type="submit" >Save</button>
        <div className="website-home">
          <h3>Home</h3>
          <input type="text" name="name1" value={formData.name1} onChange={handleChange} placeholder="Your name:"/>
          <input type="text" name="name2" value={formData.name2} onChange={handleChange} placeholder="Partner's name:" /> 
          <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Date of wedding:" />
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location of venue:" />
        </div>

        <div className='website-story'>
          <h3>Story</h3>
          <textarea id="website-textarea" name="story" type="text" value={formData.story} onChange={handleChange} placeholder="Tell your guest your story" />
        </div>

        <div className="website-photos">
          <h3>Photos</h3>
          <input type="file" name="photos"  value={formData.photos} onChange={handleChange} />
        </div>

        <div className="website-rsvp" >
          <h3>RSVP</h3>
          <p>This will show the user the guest list: accept/decline. Will nto be displayed to guests</p>
          <div className="add-invite-input" >
           <input type="text" name="invite" value={formData.invite} onChange={handleChange} placeholder="Name of guest" /> 
          </div>
        </div>

      </form>
      </div>
      {/* <div className='preview-container'> */}
      {/* x  <PreviewWebsitePage formData={formData} /> */}
      {/* </div> */}
      
      </div>
      
    );
  }