// Explore Bengal — Itinerary Generation Algorithm

import { getDestinationBySlug } from '../data/destinations.js';
import { getAttractionsByDestination } from '../data/attractions.js';
import { getHotelsByDestination } from '../data/hotels.js';

/**
 * Generates an independent day-by-day itinerary
 *
 * @param {Object} options
 * @param {string} options.origin Starting location
 * @param {string} options.destinationSlug Selected destination
 * @param {number} options.days Number of days
 * @param {string[]} options.interests Array of interests (nature, heritage, food, etc.)
 * @returns {Object} Complete itinerary with daily schedule, attractions, stays, and tips
 */
export function generateSuggestedItinerary({
  origin = "Kolkata",
  destinationSlug = "darjeeling",
  days = 3,
  interests = []
}) {
  const dest = getDestinationBySlug(destinationSlug) || getDestinationBySlug("darjeeling");
  const attractions = getAttractionsByDestination(dest.slug);
  const hotels = getHotelsByDestination(dest.slug);

  const safeDays = Math.max(1, Math.min(7, parseInt(days) || 3));
  const dailySchedule = [];

  // Distribute attractions logically across days
  let attractionIndex = 0;

  for (let dayNum = 1; dayNum <= safeDays; dayNum++) {
    const isFirstDay = dayNum === 1;
    const isLastDay = dayNum === safeDays;

    let dayTitle = "";
    let dayTheme = "";
    let dayAttractions = [];
    let schedule = [];

    if (isFirstDay) {
      dayTitle = `Journey from ${origin} & First Impressions of ${dest.name}`;
      dayTheme = "Arrival, check-in, orientation, and relaxed evening stroll";

      schedule.push({
        time: "Morning (07:00 - 11:30)",
        activity: `Depart ${origin}. Enjoy the scenic countryside transition en route to ${dest.name}.`
      });
      schedule.push({
        time: "Midday (12:30 - 14:00)",
        activity: `Check into your accommodation. Refresh and relish your first authentic local lunch.`
      });

      // Assign 1 afternoon attraction if available
      if (attractions.length > 0) {
        const primaryAttraction = attractions[attractionIndex % attractions.length];
        dayAttractions.push(primaryAttraction);
        attractionIndex++;

        schedule.push({
          time: "Afternoon (14:30 - 17:00)",
          activity: `Visit ${primaryAttraction.name}. ${primaryAttraction.description.slice(0, 110)}...`
        });
      }

      schedule.push({
        time: "Evening (17:30 - 20:30)",
        activity: `Twilight walk along the local town promenade or market. Savor regional tea and evening snacks.`
      });

    } else if (isLastDay) {
      dayTitle = `Cultural Souvenirs & Homeward Journey to ${origin}`;
      dayTheme = "Morning vistas, heritage markets, and return transit";

      if (attractions.length > attractionIndex) {
        const lastAttraction = attractions[attractionIndex % attractions.length];
        dayAttractions.push(lastAttraction);
        attractionIndex++;

        schedule.push({
          time: "Morning (08:30 - 11:00)",
          activity: `Explore ${lastAttraction.name}. Ideal for photography and peaceful exploration before departure.`
        });
      } else {
        schedule.push({
          time: "Morning (08:30 - 11:00)",
          activity: `Visit local cooperative artisan centers and souvenir markets for authentic GI-tagged crafts.`
        });
      }

      schedule.push({
        time: "Midday (11:30 - 13:00)",
        activity: `Pack and complete hotel checkout. Farewell lunch with authentic regional dishes.`
      });

      schedule.push({
        time: "Afternoon / Evening",
        activity: `Begin the return journey back to ${origin}. Arrive home with unforgettable memories.`
      });

    } else {
      // Core Exploration Days
      dayTitle = `In-Depth Exploration: Heritage, Nature & Highlights`;
      dayTheme = "Full-day immersion in local attractions and signature sights";

      schedule.push({
        time: "Early Morning (06:00 - 08:30)",
        activity: `Dawn viewpoint exploration or quiet morning walk while nature awakens.`
      });

      // Assign 1 or 2 attractions
      if (attractions.length > 0) {
        const morningAttraction = attractions[attractionIndex % attractions.length];
        dayAttractions.push(morningAttraction);
        attractionIndex++;

        schedule.push({
          time: "Morning (09:00 - 12:30)",
          activity: `Visit ${morningAttraction.name}. Expected duration: ${morningAttraction.suggestedDuration}.`
        });
      }

      schedule.push({
        time: "Lunch Break (12:30 - 14:00)",
        activity: `Authentic regional dining at a well-reviewed local eatery.`
      });

      if (attractions.length > attractionIndex) {
        const afternoonAttraction = attractions[attractionIndex % attractions.length];
        dayAttractions.push(afternoonAttraction);
        attractionIndex++;

        schedule.push({
          time: "Afternoon (14:30 - 17:30)",
          activity: `Excursion to ${afternoonAttraction.name}. ${afternoonAttraction.description.slice(0, 100)}...`
        });
      }

      schedule.push({
        time: "Evening (18:00 - 21:00)",
        activity: `Leisurely evening enjoying local folk music, artisan bazaars, or stargazing.`
      });
    }

    dailySchedule.push({
      day: dayNum,
      title: dayTitle,
      theme: dayTheme,
      attractions: dayAttractions,
      schedule
    });
  }

  return {
    origin,
    destination: dest,
    totalDays: safeDays,
    dailySchedule,
    suggestedAccommodations: hotels.slice(0, 3),
    travelTips: dest.travelTips || [],
    foodHighlights: dest.foodAndShopping?.specialties || []
  };
}
