import AppleSignin from "react-apple-signin-auth";

/** Apple Signin button */
const MyAppleSigninButton = () => (
  <AppleSignin
    authOptions={{
      clientId: "com.nekoverse.nekoversebattle",
      scope: "email name",
      redirectURI: "https://17s61b.csb.app",
      state: "",
      nonce: "nonce",
      usePopup: true
    }}
    uiType="dark"
    onSuccess={(response) => console.log(response)} 
    /** Called upon signin error */
    onError={(error) => console.error(error)} 
  />
);

export default MyAppleSigninButton;
