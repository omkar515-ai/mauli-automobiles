export default async function handler(req, res) {
  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "Google Maps API key is not configured."
      });
    }

    const searchUrl =
      "https://places.googleapis.com/v1/places:searchText";

    const response = await fetch(searchUrl, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "places.id,places.displayName,places.formattedAddress"
      },

      body: JSON.stringify({
        textQuery: "Mauli Automobiles, Ambajogai, Maharashtra",
        maxResultCount: 1
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Google Places request failed."
      });
    }

    if (!data.places || data.places.length === 0) {
      return res.status(404).json({
        error: "Mauli Automobiles was not found."
      });
    }

    const place = data.places[0];

    return res.status(200).json({
      placeId: place.id,
      name: place.displayName?.text || "Mauli Automobiles",
      address: place.formattedAddress || ""
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Unable to connect to Google Places."
    });
  }
}