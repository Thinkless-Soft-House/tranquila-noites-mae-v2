// Simple helper to get the user's country code using a public IP geolocation API
// This is a client-side function (browser)
export async function getUserCountryCode(): Promise<string | null> {
  try {
    // Use a free geolocation API (can be replaced by a paid one if needed)
    const res = await fetch('https://ipapi.co/json/');
    if (!res.ok) return null;
    const data = await res.json();
    return data.country_code || null;
  } catch (e) {
    return null;
  }
}
