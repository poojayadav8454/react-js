import React from "react";
import img from "./f.png";
function CardComponent({ name, job, address, email, image }){
    return(
       
    <article class="card">
    <div class="banner"></div>

    <div class="content">
       <img className="avatar" src={img} alt="Profile photo" width={200}/>
      <div>
        <div class="name">{name}</div>
        <div class="job">{job}</div>

        <div class="row" title="Address">
         
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" stroke="currentColor" stroke-width="1.6"/>
            <circle cx="12" cy="10" r="2.6" stroke="currentColor" stroke-width="1.6"/>
          </svg>
          <span>{address}</span>
        </div>

        <div class="row" title="Email">
         
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6h18v12H3z" stroke="currentColor" stroke-width="1.6"/><path d="m3 7 9 6 9-6" stroke="currentColor" stroke-width="1.6"/>
          </svg>
          <span>{email}</span>
        </div>
      </div>
    </div>

    <div class="actions">
      <button class="btn primary">Contact</button>
      <button class="btn">View Profile</button>
    </div>
  </article>
 
    )
}
export default CardComponent;