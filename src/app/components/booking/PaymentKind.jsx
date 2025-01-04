function PaymentKind({ typePayment, paymentType, setPaymentType }) {
  return (
    <button onClick={() => setPaymentType(typePayment)} className={`${typePayment === paymentType ? "bg-tertiary font-semibold text-main-2 border-main-1" : "bg-feedback-disabled-2 text-feedback-disabled-1  border-feedback-disabled-1"} rounded-rounded-reg py-4 px-20 border-2 max-w-64 font-rethink`}>
      {typePayment}
    </button>
  );
}

export default PaymentKind;
