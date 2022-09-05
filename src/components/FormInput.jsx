import {React, useState} from 'react'
import getPhotoUrl from 'get-photo-url'
import profilePicture from './Assets/profileIcon.svg'


function FormInput() {
  
// initial state state for the profile info
const [details, setDetails]=useState({
  firstName:'Yosa',
  lastName:'Bosun',
  specialty:'Haiku Master Poet',
  twitterHandle:'twitterHandle',
  portfolioLink:'portfolio link',
  desc:`A summer river being crossed
  how pleasing
  with sandals in my hands!
  
  Light of the moon
  Moves west, flowers' shadows
  Creep eastward.
  
  In the moonlight,
  The color and scent of the wisteria
  Seems far away.`
})

function createProfile(event) {
    event.preventDefault()

    setDetails({
      firstName: document.getElementById('inputFirstName').value,
      lastName: document.getElementById('inputLastName').value,
      specialty: document.getElementById('inputSpecialty').value,
      twitterHandle:document.getElementById('inputHandle').value,
      portfolioLink: document.getElementById('inputLink').value,
      desc: document.getElementById('inputDesc').value
    })
    
}
 
  // Display picture
  const [displayPhoto, setDisplayPhoto] = useState(profilePicture)

  const dpUpload = async()=>{
    const dp = await getPhotoUrl('#uploadPhoto')

    setDisplayPhoto(dp)
  }

  const profileForm = (
    <div className='form'>
      <form className='form-inputs' 
      onSubmit={(e)=>createProfile(e)}>

        
      <div className="form-group-group">
            <input type="text" id='inputFirstName' placeholder='First Name' /*required*/ />
            <input type="text" id='inputLastName' placeholder='Last Name' /*required*/ />
          </div>


          <input type='text' id='inputSpecialty' placeholder='What you do! Ex: "content writer"' maxLength={25} /*required*//>

        <div className="form-group-group">
          <input type='text' id='inputHandle' placeholder='twitter handle' /*required*//>
         
        <input type='text' id='inputLink' placeholder='link to your portfolio site' /*required*//>
        </div>
        <textarea name="" id="inputDesc" cols="50" maxLength={200} placeholder="Describe yourself in 200 characters..." /*required*/></textarea>

  <input type="file" name="" id="uploadPhoto" accept='image/*' />
<label className='btn' htmlFor='uploadPhoto'onClick={dpUpload} >
 <p>Upload Display Picture</p>
</label>
    
    <button className='btn' type='submit'>Create</button>
      </form>
    </div>
  )




  const inputPreview = (
    <div className="input-preview-container">

      <div className="profile-card">

         {/* display profile image */}
         <div className="bkgDiv">
         <div className="imgDiv">
          <img src={displayPhoto} alt="" />
        </div>
        </div>

            {/*  */}
            <div className="profile-card-text">

            <span className="fullName" >{details.firstName} {details.lastName}</span>

        <span className="specialty" >{details.specialty}</span>

        <span className="twitter_handle">
        <i className="fa-brands fa-twitter icon"></i>{details.twitterHandle}</span>

        <p className='desc'>{details.desc}</p>

      <span className="portfolio_link" >
      <i className="fa-solid fa-link icon"></i>
      {details.portfolioLink}</span>

      </div>
      </div>

    </div>
  )

  return (
    <>
      {profileForm}
      {inputPreview}    
    </>

  )
}

export default FormInput