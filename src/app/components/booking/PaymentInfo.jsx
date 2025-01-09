"use client";
import { useState } from "react";
import PaymentKind from "./PaymentKind";
import { postPaymentInfo } from "@/app/api";
import { useBasketFunctionality } from "@/stores/basket-functionality";

function PaymentInfo() {
  const [paymentType, setPaymentType] = useState("Credit Card");

  const step = useBasketFunctionality((step) => step.bookingStep);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);
  async function sendData(formData) {
    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      address_line_1: formData.get("adress_1"),
      adress_line_2: formData.get("adress_2"),
      city: formData.get("city"),
      zip_code: formData.get("zip_code"),
      name_on_card: formData.get("name_on_card"),
      card_number: formData.get("card_number"),
      MM: formData.get("MM"),
      YY: formData.get("YY"),
      CVV: formData.get("cvv"),
    };
    await postPaymentInfo(data);
  }

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-6">
        <PaymentKind typePayment="Credit Card" paymentType={paymentType} setPaymentType={setPaymentType} />
        <PaymentKind typePayment="Mobilepay" paymentType={paymentType} setPaymentType={setPaymentType} />
      </div>
      {paymentType === "Credit Card" && (
        <form action={sendData} onSubmit={() => setNewStep(step + 1)} className="flex flex-col gap-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-10 align-baseline justify-end ">
            <fieldset>
              <div className="flex flex-col gap-2">
                <legend className="font-rethink text-main-1 text-2xl py-2 mb-2  border-b border-tertiary ">Card information</legend>
                <div className="flex flex-col ">
                  <label for="email">Email</label>
                  <input id="email" type="email" name="email" placeholder="john@doe.com" required></input>
                </div>
                <div className="flex flex-col">
                  <label for="name_on_card">Name on Card</label>
                  <input id="name_on_card" type="text" name="name_on_card" placeholder="John" pattern="[A-Za-z\s]+" required></input>
                </div>
                <div className="flex flex-col">
                  <label for="cardnumber">CardNumber</label>
                  <input id="cardnumber" type="number" name="card_number" placeholder="XXXX-XXXX-XXXX-1234" maxLength="16" required></input>
                </div>
                <div>
                  <div className="flex gap-2">
                    <label for="MM">MM /</label>
                    <label for="YY"> YY</label>
                  </div>
                  <div className="flex gap-2">
                    <input id="MM" type="number" name="MM" className="w-1/5" placeholder="02" maxlength="2" required></input>
                    <p>/</p>
                    <input id="YY" type="number" name="YY" className=" w-1/5 " placeholder="26" maxLength="2" minLength="2" required></input>
                  </div>
                </div>
                <div className="flex flex-col w-1/5">
                  <label for="cvv">CVV</label>
                  <input id="cvv" type="number" name="cvv" placeholder="267" maxLength="3" minLength="3" required></input>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="flex flex-col gap-2">
                <legend className="font-rethink text-main-1 text-2xl py-2 mb-2  border-b border-tertiary ">Adress information</legend>
                <div className="flex flex-col ">
                  <label for="adress1">Address line 1</label>
                  <input id="adress1" type="text" name="adress_1" placeholder="Fun street 1" required></input>
                </div>
                <div className="flex flex-col ">
                  <label for="adress2">Adress Line 2</label>
                  <input id="adress2" type="text" name="adress_2" placeholder="Fun street 1"></input>
                </div>
                <div>
                  <div className="flex  flex-col md:flex-row lg:flex-col 2xl:flex-row gap-2">
                    <div className="flex flex-col">
                      <label for="city">City</label>
                      <input id="city" type="text" name="city" placeholder="Copenhagen" required></input>
                    </div>
                    <div className="flex flex-col">
                      <label for="zip_code">Zip code</label>
                      <input id="zip_code" type="number" name="zip_code" className="w-1/2" placeholder="2500" required></input>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <button type="submit" className="button grid place-self-end">
            Next step
          </button>
        </form>
      )}

      {paymentType === "Mobilepay" && (
        <div className="flex flex-col gap-4">
          <form action="" className="flex flex-col gap-2 ">
            <label for="phoneNumber">Enter your mobile number</label>
            <input id="phoneNumber" className="w-1/4" type="tel" inputMode="decimal" placeholder="XXXX3095" maxLength="8" minLength="8" required></input>
          </form>
          <button type="submit" onClick={() => setNewStep(step + 1)} className="button grid place-self-end">
            next step
          </button>
        </div>
      )}
    </section>
  );
}

export default PaymentInfo;
