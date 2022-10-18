import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  // useEffect(() => {
  //   const getUserMetadata = async () => {
  //     const domain = process.env.REACT_APP_AUDIENCE;
  //     // console.log("domain: ", domain)
  //     try {
  //       const accessToken = await getAccessTokenSilently({
  //         audience: domain,
  //         scope: "read:current_user",
  //       });
  //       console.log("accesstoken: ", accessToken);
  //       const userDetailsByIdUrl = domain + user.sub;
  //       console.log("user url: ", userDetailsByIdUrl);
  //       // const metadataResponse = await fetch(userDetailsByIdUrl, {
  //       //   headers: {
  //       //     Authorization: `Bearer ${accessToken}`,
  //       //   },
  //       // });

  //       // const { user_metadata } = await metadataResponse.json();

  //       // setUserMetadata(user_metadata);
  //     } catch (e) {
  //       console.log("err: ", e.message);
  //     }
  //   };
  //   // console.log(userMetadata);
  //   getUserMetadata();
  // }, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated && (
      <div className="profile">
        <h4>{user.name}</h4>
      </div>
    )
  );
};

export default Profile;
