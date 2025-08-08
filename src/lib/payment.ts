export function openPaymentLink() {
  const paymentLink = import.meta.env.VITE_RAZORPAY_PAYMENT_LINK;
  if (paymentLink) {
    window.open(paymentLink, "_blank");
  } else {
    alert("Payment link not configured.");
  }
}
