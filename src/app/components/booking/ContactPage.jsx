"use client";
import ContactForm from "./ContactForm";
import { postGuestInfo } from "@/app/api";
import { useBasketStore } from "@/stores/basket-stores";
import { useBasketFunctionality } from "@/stores/basket-functionality";

function ContactPage() {
  function sendData(formData) {
    const data = [];

    forms.forEach((_, index) => {
      const personData = {
        first_name: formData.get(`first_name_${index}`),
        last_name: formData.get(`last_name_${index}`),
        email: formData.get(`email_${index}`),
      };
      // Jeg bruger "_", en palceholder, i forEach fordi mit forms-array er fyldt med undefined-værdier.
      //  Jeg bruger udelukkende index-værdien til at hente specefikt data for hver perosn ved hjælp af formData.get.

      data.push(personData);
    });

    postGuestInfo(data);
  }

  const step = useBasketFunctionality((step) => step.bookingStep);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);
  const totalTickets = useBasketStore((state) => state.totalTickets());

  const forms = Array.from({ length: totalTickets });
  // Laver et array, hvis længde svarer til værdien af totatalTickets. Derved skabes et objekt i forms-array, for hver person der vil købe billet.

  return (
    <div>
      <form
        action={sendData}
        onSubmit={() => setNewStep(step + 1)}
        className="flex flex-col gap-8 "
      >
        <fieldset>
          <legend className="font-rethink text-2xl mb-6 text-main-1">
            Contact information
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {forms.map((_, index) => {
              return <ContactForm key={index} index={index} />;
            })}
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-accent-1 text-sm button flex self-start px-4 py-0.5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
