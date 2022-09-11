import React from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = () => {
  const priceForStripe = 9888 * 100;
  const navigate = useNavigate();
  const PublishKey =
    "pk_test_51InJLfLL6214pXMBnZ18A2gn0aC1Rkkf4nOJVAiw0L7TN9JUoWfGAnCRNLC3tscrihV5501pwLJ46px0bHIdZplP00KXHi4Qjw";

  const onToken = (token) => {
    console.log(token);
    navigate("/home/queue");
  };

  return (
    <StripeCheckout
      label="START 7-DAY FREE TRIAL"
      name="Taplio"
      shippingAddress
      billingAddress
      image="https://app.taplio.com/logo/Logo_Rec.png"
      description={`Your total is $${900}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishKey}
      className="py-3 px-4 rounded-md bg-[#37a1d6] ml-10"
    />
  );
};
export default StripeCheckoutButton;
