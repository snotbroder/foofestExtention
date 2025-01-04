export const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const api = process.env.NEXT_PUBLIC_GLITCH_URL;

export async function getBands() {
  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  const response = await fetch(`${api}/bands`, {
    method: "GET",
    headers: headersList,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch bands: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function getSpots() {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch(`${api}/available-spots`, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

export async function postVoluenteerInfo(voluenteerData) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey: key,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  let response = await fetch(`${url}voluenteerInfo`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(voluenteerData),
  });

  let data = await response.json();
  return data;
}

export async function postPaymentInfo(paymentInfo) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey: key,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  let response = await fetch(`${url}paymentInfo`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(paymentInfo),
  });
}

export function postGuestInfo(GuestInfo) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
    apikey: key,
  };

  fetch(`${url}subGuestsInfo`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(GuestInfo),
  });
}

export async function reserveSpot(selectedArea, ticketAmount) {
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    area: selectedArea,
    amount: ticketAmount,
  });

  try {
    let response = await fetch(`${api}/reserve-spot`, {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Fejl", error);
  }
}
export async function fulfillReservation(reservationId) {
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    id: reservationId,
  });

  try {
    let response = await fetch(`${api}/fullfill-reservation`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Fejl", error);
  }
}
