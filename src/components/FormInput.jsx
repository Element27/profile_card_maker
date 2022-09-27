import { React, useState } from "react";
import getPhotoUrl from "get-photo-url";
import profilePicture from "./Assets/profileIcon.svg";

function FormInput() {
  // initial state state for the profile info
  const [details, setDetails] = useState({
    firstName: "Yosa",
    lastName: "Bosun",
    specialty: "Haiku Master Poet",
    twitterHandle: "twitterHandle",
    portfolioLink: "portfolio link",
    desc: `A summer river being crossed
  how pleasing
  with sandals in my hands!
  
  Light of the moon
  Moves west, flowers' shadows
  Creep eastward.
  
  In the moonlight,
  The color and scent of the wisteria
  Seems far away.`,
  });

  function createProfile(event) {
    event.preventDefault();

    setDetails({
      firstName: document.getElementById("inputFirstName").value,
      lastName: document.getElementById("inputLastName").value,
      specialty: document.getElementById("inputSpecialty").value,
      twitterHandle: document.getElementById("inputHandle").value,
      portfolioLink: document.getElementById("inputLink").value,
      desc: document.getElementById("inputDesc").value,
    });
  }

  // Display picture
  const [displayPhoto, setDisplayPhoto] = useState(profilePicture);

  const dpUpload = async () => {
    const dp = await getPhotoUrl("#uploadPhoto");

    setDisplayPhoto(dp);
  };

  const profileForm = (
    <div className="w-full lg:w-[40vw] p-4 md:p-6 lg:h-full">
      <form
        className="flex flex-col border-2 border-solid border-white p-4 rounded-lg hover:border-[#7983ec]"
        onSubmit={(e) => createProfile(e)}
      >
        <div className=" grid md:grid-cols-2 md:gap-3">
          <input
            className="h-10 px-2 w-full mb-4  border rounded-md required:border-red-500 focus:outline-1 focus:outline-[#7983ec]"
            type="text"
            id="inputFirstName"
            placeholder="First Name" /*required*/
          />
          <input
            className="h-10 px-2 w-full mb-4 required:border-red-500  border rounded-md focus:outline-1 focus:outline-[#7983ec]"
            type="text"
            id="inputLastName"
            placeholder="Last Name" /*required*/
          />
        </div>

        <input
          className="h-10 px-2 w-full mb-4 border rounded-md required:border-red-500 focus:outline-1 focus:outline-[#7983ec] "
          type="text"
          id="inputSpecialty"
          placeholder='What you do! Ex: "content writer"'
          maxLength={25} /*required*/
        />

        <div className=" grid md:grid-cols-2 md:gap-3  required:border-red-500">
          <input
            className="h-10 px-2 mb-4 required:border-red-500 border rounded-md w-full focus:outline-1 focus:outline-[#7983ec] "
            type="text"
            id="inputHandle"
            placeholder="twitter handle" /*required*/
          />

          <input
            className="h-10 px-2 mb-4 border required:border-red-500 rounded-md w-full focus:outline-1 focus:outline-[#7983ec] "
            type="text"
            id="inputLink"
            placeholder="link to your portfolio site" /*required*/
          />
        </div>
        <textarea
          className="text-[#8695b3] mb-4 p-2 h-28 rounded-md required:border-red-500 focus:outline-1 break-normal focus:outline-[#7983ec] "
          name=""
          id="inputDesc"
          cols="50"
          maxLength={200}
          placeholder="Describe yourself in 200 characters..." /*required*/
        ></textarea>

        <input
          className="hidden"
          type="file"
          name=""
          id="uploadPhoto"
          accept="image/*"
        />
        <label
          className="w-full bg-[#df208f] text-[#0d1359] text-center py-auto h-10 py-2 font-semibold rounded-md"
          htmlFor="uploadPhoto"
          onClick={dpUpload}
        >
          <p>Upload Display Picture</p>
        </label>

        <button
          className="bg-[#df208f] text-[#0d1359] mt-4 mx-auto h-10 px-10 rounded-lg font-semibold w-full"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );

  const inputPreview = (
    <div className="w-full lg:w-[60vw] p-4 md:p-6 bg-[#12c2e9] bg-gradient-to-t from-[#f64f59] via-[#c471ed] to-[#12c2e9] ">
      <div className="w-[268px] mx-auto rounded-2xl bg-[#0d1359] overflow-hidden relative">
        {/* display profile image */}
        <div className="w-full p-4 mb-2 h-fit bg-[#e9eafc] ">
          <div className="w-[150px] h-[150px] mx-auto overflow-hidden ">
            <img
              className="w-full h-full rounded-full "
              src={displayPhoto}
              alt=""
            />
          </div>
        </div>
        {/*  */}

        <div className="">
          <span className="text-center block text-2xl font-semibold text-[#e9eafc]">
            {details.firstName} {details.lastName}
          </span>

          <span className="text-center block w-[90%] mx-auto text-[#7983ec] text-md font-medium">
            {details.specialty}
          </span>

          <span className="text-center block text-xs italic text-[#e9eafc] border-b border-solid border-[#e9eafc] ">
            <i className="fa-brands fa-twitter icon text-xs mb-1  p-1 rounded-md text-[#0d1359] bg-[#df208f] mr-1"></i>
            {details.twitterHandle}
          </span>

          <p className="text-white w-[85%] break-word text-justify font-semibold text-sm mt-2 mx-auto">
            {details.desc}
          </p>

          <span className="text-center block text-xs italic text-[#e9eafc] my-2">
            <i className="fa-solid fa-link icon p-1 rounded-md text-[#0d1359] bg-[#df208f] mr-1 text-xs "></i>
            {details.portfolioLink}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col-reverse items-center justify-center lg:flex lg:flex-row">
      {profileForm}
      {inputPreview}
    </div>
  );
}

export default FormInput;
