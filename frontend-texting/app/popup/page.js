'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const PopupWrapper = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Automatically show the popup on page load
        setShowPopup(true);
    }, []);

    const handleAgree = () => {
        // Close popup on agree
        setShowPopup(false);
    };

    const handleDisagree = () => {
        // Reopen popup on disagree
        setShowPopup(false);
        setTimeout(() => setShowPopup(true), 500); 
    };
  return (
    <>
    {showPopup && (
   <div className="popup-wrapper" >
  <div className="popup-content">
    <div className="popup-header">
      <div className="sduko-logo-sign">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={82} height={72} viewBox="0 0 82 72">
          <defs>
            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#0098df" />
              <stop offset={1} stopColor="#0c4ea4" />
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="0.251" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#ff007a" />
              <stop offset={1} stopColor="#72003f" />
            </linearGradient>
            <linearGradient id="linear-gradient-3" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#bc005e" />
              <stop offset={1} stopColor="#ae0058" />
            </linearGradient>
            <linearGradient id="linear-gradient-4" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#066cbc" />
              <stop offset={1} stopColor="#0865b6" />
            </linearGradient>
          </defs>
          <g id="Group_59" data-name="Group 59" transform="translate(992 224)">
            <g id="Ellipse_40" data-name="Ellipse 40" transform="translate(-992 -224)" fill="none" stroke="#cecece" strokeWidth={1}>
              <circle cx={36} cy={36} r={36} stroke="none" />
              <circle cx={36} cy={36} r="35.5" fill="none" />
            </g>
            <g id="Group_1" data-name="Group 1" transform="translate(-977.269 -202.708)">
              <path id="Path_13" data-name="Path 13" d="M8554.679,17399.916c-.526,1.4.205,1.207.965,1.592.054.893-.426.771-.08,1.881.257.818-.089.119.017.865.053.371.252.4.472.752l.035.348.02.209c1.769-2.979-.309-.314.044.037a2.4,2.4,0,0,0,.6.338c-.128-.129-.4-.055-.686-.084-.795,4.094,4.653,1.762,6.881,1.453a11.53,11.53,0,0,1-2.422,3.707c-2.823,3.168-6.914,4.379-10.942,2.465-.793-.379-1.333-.852-1.955-1.135l-.131-.121-.14-.115-.128-.131-.136-.117-.123-.137-.127-.121-.128-.139-.116-.127-.094-.062.094.063.116.127.128.139.127.121.123.137.136.117.128.131.14.115.131.121c.631.98,4.011,3.508,5.912,3.686,4.616.432,10.165-3.1,13.476-5.7,1.395-1.1,6.832-7.348,7.134-7.764,4.19-9.668-3.433-20.016-14.973-16.088a8.979,8.979,0,0,0-3.624,2.148c-1.029,1.211-1.448,2.855,1.139,3-.237,1.133-1.824,3.207-1.2,4.275.461.787.966.754.293,2.031C8555.425,17398.633,8555.017,17399.2,8554.679,17399.916Z" transform="translate(-8531.851 -17385.596)" fillRule="evenodd" fill="url(#linear-gradient)" />
              <g id="Group_36" data-name="Group 36" transform="translate(0 0)">
                <path id="Path_12" data-name="Path 12" d="M4553.726,17421.943c.167-.408-.272.205-.326.275-1.832,2.213-3.8,4.34-5.785,6.426a11.923,11.923,0,0,1-.9.861l-.062.049c-3.395,2.635-8.845,6.078-13.3,5.707-2.016-.166-4.775-2.168-6.075-3.672a10.618,10.618,0,0,1-1.425-1.559c-1.417-2.252-3.1-4.787-4.276-7.139-.05-.1-.553-1.01-.322-1.064a34.15,34.15,0,0,1,3.418,2.863c1.393,1.18,5.136,4.277,5.474.545l.02-.211-.049-.461c-.057.207.034.143-.122.078a4.7,4.7,0,0,1-.184-2.057c.074-.791.329-1.127,1.07-1.266l.114.217.087.416c-.376-.029-.5.209-.411.652.482-.236.479-.484.322-1.068l-.116-.217c-.387-.859,2.1-.432,1.094-2.273-.463-.854-1.44-1.541-1.051-2.783,1.183-3.787-.333-3.512.407-4.852a1.529,1.529,0,0,0-.049-1.668,10.37,10.37,0,0,0-13.416-3.756c-7.371,3.717-7.419,10.482-4.816,17.4,2.243,5.828,11.381,14.254,17.239,16.266,3.477,1.152,5.778.211,8.81-1.516a38.412,38.412,0,0,0,8.507-6.809,33.269,33.269,0,0,0,6.047-9.229Z" transform="translate(-4511.482 -17404.893)" fillRule="evenodd" fill="url(#linear-gradient-2)" />
                <path id="Path_14" data-name="Path 14" d="M9387.525,21855.447c-.009-.16-.046-.5.1-.6s.409-.105.5-.229a.653.653,0,0,0,.037-.426c-.042-.34-.148-.3-.342-.516-.067-.082,0-.082.071-.1s.177-.057.21-.109a1.779,1.779,0,0,0,.068-.295c.06-.2.149-.189.28-.3.055-.049.029-.086.017-.158a1.4,1.4,0,0,0-.1-.354c-.023-.047-.054-.1-.079-.148-1.4-.676-1.669.064-1.4,1.268-.068.73-.853,1.893.517,2.059C9387.557,21855.529,9387.468,21855.607,9387.525,21855.447Z" transform="translate(-9368.891 -21835.713)" fillRule="evenodd" fill="url(#linear-gradient-3)" />
              </g>
              <path id="Path_15" data-name="Path 15" d="M11178.7,22398.924l-.021,1.588,1.069-.033.172-2.172-.677-.1Z" transform="translate(-11154.477 -22380.004)" fillRule="evenodd" fill="url(#linear-gradient-4)" />
            </g>
            <circle id="Ellipse_41" data-name="Ellipse 41" cx={11} cy={11} r={11} transform="translate(-932 -218)" fill="#ed0073" />
            <text id="_18_" data-name="18+" transform="translate(-930 -203)" fill="#fff" fontSize={11} fontFamily="OpenSans-Bold, Open Sans" fontWeight={700}>
              <tspan x={0} y={0}>18+</tspan>
            </text>
          </g>
        </svg>
      </div>
      <h5 className="popup-title">Please review the following disclaimer before proceeding</h5>
    </div>
    <div className="popup-body">
      <div className="popup-body-inner text-center">
        <p className="r3 px-md-5 px-sm-1"> I am <strong>over 18 years old</strong> and consent to viewing
          explicit content meant for an adult audience. </p>
        <hr className="my-1" />
        <p>I acknowledge that I have read and accepted the<br /> <a data-href="/terms-and-conditions/">Terms
            and Conditions</a></p>
      </div>
    </div>
    <div className="popup-footer">
      <a href="index.html" className="popup-btn">Decline</a>
      <button id="adultCookie" type="button" className="popup-btn popup-btn-primary" data-dismiss="modal">Accept</button>
    </div>
  </div>
</div>
    )}
    </>
  )
}

export default PopupWrapper