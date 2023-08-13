import Link from "next/link";
import { useRouter } from "next/navigation";
import SuccessPageClientSide from "../components/SuccessPageClientSide";

const Success = async () => {
  const isDevMode = process.env.NODE_ENV === "development";

  const successUrl = isDevMode
    ? "https://localhost:3000/success"
    : "https://artlines-project.vercel.app/success";

  // useEffect(() => {
  //   dispatch(clearCart());

  // }, []);

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const sessions = await stripe.checkout.sessions.list({
    limit: 1,
  });

  const expirationTimeInMilliseconds = 3 * 60 * 1000; // 3 minutes

  const expiredSessions = sessions.data.filter((session:any) => {
    const currentTime = new Date().getTime();
    const sessionCreateTime = new Date(session.created * 1000).getTime();
    return currentTime - sessionCreateTime > expirationTimeInMilliseconds;
  });

  // if (expiredSessions.length > 0) {
  //   return (
  //     <div>
  //       <p>Loading...no new orders found</p>
  //       <p>Redirecting to your order history</p>
  //     </div>
  //   );
  // } else {
  //   console.log("No expired sessions.");
  // }

  //console.log("expired", expiredSessions)

  // redirect to orders page if there is no new orders found
  // useEffect(() => {
  //   if (!hasPayment) {
  //     const redirectTimeout = setTimeout(() => {
  //       router.push("/orders");
  //     }, 2000);

  //     return () => clearTimeout(redirectTimeout);
  //   }
  // }, [hasPayment]);

  // if (!hasPayment) {
  //   return (
  //     <div>
  //       <p>Loading...no new orders found</p>
  //       <p>Redirecting to your order history</p>
  //     </div>
  //   );
  // }



  return (
  <SuccessPageClientSide expiredSessions={expiredSessions}/>
  );
};

export default Success;
