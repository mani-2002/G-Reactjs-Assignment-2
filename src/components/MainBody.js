import React from "react";
import bad_boys from '../images/bad_boys.jpeg';
import headlights from '../images/headlights.jpeg';
import jhoome_jo_pathaan from '../images/jhoome_jo_pathaan.jpeg';
import let_me_love_you from '../images/let_me_love_you.jpeg';
import one_night_in_dubai from '../images/one_night_in_dubai.jpeg';
import safari from '../images/safari.jpeg';
import unstoppable from '../images/unstoppable.jpeg';


function MainBody() {
  return (
    <div className="middle">
      <ul>
        <div className="li_element"><img src={bad_boys} alt="bad_boys"/><li><a href="https://www.youtube.com/watch?v=6ttobrfMnyQ&pp=ygUNaW5uYWJhZCBib3lzIA%3D%3D" target="_blank" without rel="noreferrer">INNA-Bad Boys</a></li></div>
        <div className="li_element"><img src={headlights}  alt="headlights"/><li><a href="https://www.youtube.com/watch?v=kyLuzKbgXAs&pp=ygUWaGVhZGxpZ2h0cyBhbGFuIHdhbGtlcg%3D%3D" target="_blank" without rel="noreferrer">Headlights</a></li></div>
        <div className="li_element"><img src={jhoome_jo_pathaan}  alt="jhoome_jo_pathaan"/><li><a href="https://www.youtube.com/watch?v=YxWlaYCA8MU&pp=ygUWamhvb21lIGpvIHBhdGhhYW4gc29uZw%3D%3D" target="_blank" without rel="noreferrer">Jhoome JO Pathaan</a></li></div>
        <div className="li_element"><img src={let_me_love_you}  alt="let_me_love_you"/><li><a href="https://www.youtube.com/watch?v=SMs0GnYze34&pp=ygUPbGV0IG1lIGxvdmUgeW91" target="_blank" without rel="noreferrer">Let Me Love You</a></li></div>
        <div className="li_element"><img src={one_night_in_dubai}  alt="one_night_in_dubai"/><li><a href="https://www.youtube.com/watch?v=2SBsNJvN1ws&pp=ygUXb25lIG5pZ2h0IGluIGR1YmFpIHNvbmc%3D" target="_blank" without rel="noreferrer">One Night in Dubai</a></li></div>
        <div className="li_element"><img src={safari}  alt="safari"/><li><a href="https://www.youtube.com/watch?v=2SBsNJvN1ws&pp=ygUXb25lIG5pZ2h0IGluIGR1YmFpIHNvbmc%3D" target="_blank" without rel="noreferrer">Safari</a></li></div>
        <div className="li_element"><img src={unstoppable}  alt="unstoppable"/><li><a href="https://www.youtube.com/watch?v=2SBsNJvN1ws&pp=ygUXb25lIG5pZ2h0IGluIGR1YmFpIHNvbmc%3D" target="_blank" without rel="noreferrer">Unstoppable</a></li></div>
      </ul>
    </div>
  );
}

export default MainBody;
