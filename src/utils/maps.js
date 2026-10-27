// Explore Bengal — Google Maps Directions & Route Utilities

/**
 * Builds a valid Google Maps Directions URL
 * Supports origin, destination, travel mode, and optional intermediate waypoints
 *
 * @param {string} origin Starting city, address, or coordinates
 * @param {string} destination Ending city or landmark
 * @param {string} mode 'driving' | 'transit' | 'walking' | 'bicycling'
 * @param {string[]} waypoints Array of intermediate stops
 * @returns {string} Fully encoded Google Maps Directions URL
 */
export function buildGoogleMapsDirectionsUrl(origin, destination, mode = "driving", waypoints = []) {
  if (!origin || !destination) {
    return "https://www.google.com/maps";
  }

  const validModes = ["driving", "transit", "walking", "bicycling"];
  const sanitizedMode = validModes.includes(mode.toLowerCase()) ? mode.toLowerCase() : "driving";

  const params = new URLSearchParams({
    api: "1",
    origin: origin.trim(),
    destination: destination.trim(),
    travelmode: sanitizedMode
  });

  if (Array.isArray(waypoints) && waypoints.length > 0) {
    const validWaypoints = waypoints.filter(w => typeof w === "string" && w.trim().length > 0);
    if (validWaypoints.length > 0) {
      params.append("waypoints", validWaypoints.join("|"));
    }
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

/**
 * Formats a user-friendly label for travel mode
 */
export function getTravelModeLabel(mode) {
  switch (mode?.toLowerCase()) {
    case "transit":
      return "Public Transit (Train / Bus)";
    case "driving":
      return "Driving / Private Car";
    case "flight":
      return "Air Transit + Connecting Taxi";
    case "walking":
      return "Walking";
    default:
      return "Road Travel";
  }
}
