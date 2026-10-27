// Explore Bengal — Transparent Budget Estimation Engine

/**
 * Calculates itemized estimated travel expenses for independent trips
 *
 * @param {Object} params
 * @param {string} params.destinationSlug
 * @param {number} params.days Duration in days (min 1)
 * @param {number} params.adults Number of adults (min 1)
 * @param {number} params.children Number of children (default 0)
 * @param {string} params.budgetTier 'budget' | 'moderate' | 'luxury'
 * @param {string} params.transportMode 'train' | 'car' | 'bus' | 'flight'
 * @returns {Object} Complete itemized budget breakdown with assumptions
 */
export function calculateTripBudget({
  destinationSlug = "darjeeling",
  days = 3,
  adults = 2,
  children = 0,
  budgetTier = "moderate",
  transportMode = "train"
}) {
  const safeDays = Math.max(1, parseInt(days) || 1);
  const nights = Math.max(1, safeDays - 1);
  const safeAdults = Math.max(1, parseInt(adults) || 1);
  const safeChildren = Math.max(0, parseInt(children) || 0);
  const totalTravelers = safeAdults + safeChildren;

  // Rooms calculation: 2 adults per room, children share
  const roomsNeeded = Math.ceil(safeAdults / 2);

  // Daily accommodation base rates by tier
  const roomRates = {
    budget: 1500,    // Clean homestay / budget lodge
    moderate: 3500,  // 3-star boutique or WBTDC lodge
    luxury: 8500     // 4/5-star heritage resort
  };

  // Daily food cost per adult and child
  const foodDailyRates = {
    budget: { adult: 600, child: 350 },
    moderate: { adult: 1200, child: 700 },
    luxury: { adult: 2400, child: 1400 }
  };

  // Base intercity transportation estimate per person based on mode
  const transportUnitCosts = {
    train: {
      budget: 650,    // Sleeper / Non-AC Chair Car
      moderate: 1400, // 3AC / 2AC / Vande Bharat Chair Car
      luxury: 2800    // 1st AC / Executive Class
    },
    bus: {
      budget: 450,    // Standard State Transport
      moderate: 950,  // Volvo AC
      luxury: 1400    // Premium Sleeper AC
    },
    car: {
      budget: 12,     // Per km / shared cab
      moderate: 18,   // Dedicated Sedan
      luxury: 25      // Dedicated Innova Crysta
    },
    flight: {
      budget: 4200,   // Economy advance saver
      moderate: 6500, // Standard domestic economy
      luxury: 11000   // Flexi / Business
    }
  };

  // Distance estimation multiplier (approximate 2-way transit)
  const isNorthBengal = ["darjeeling", "kalimpong", "dooars", "cooch-behar"].includes(destinationSlug);
  const distanceKm = isNorthBengal ? 600 : 200;

  let transportationCost = 0;
  if (transportMode === "car") {
    // Car rate per km round-trip plus driver allowance
    const ratePerKm = transportUnitCosts.car[budgetTier] || 18;
    const vehicleDays = safeDays;
    transportationCost = (distanceKm * 2 * ratePerKm) + (vehicleDays * 500);
  } else {
    const ratePerPerson = (transportUnitCosts[transportMode] || transportUnitCosts.train)[budgetTier];
    transportationCost = (ratePerPerson * 2 * safeAdults) + (ratePerPerson * 1.5 * safeChildren);
  }

  // Lodging calculation
  const dailyRoomRate = roomRates[budgetTier] || roomRates.moderate;
  const accommodationCost = roomsNeeded * dailyRoomRate * nights;

  // Food calculation
  const foodTier = foodDailyRates[budgetTier] || foodDailyRates.moderate;
  const foodCost = ((safeAdults * foodTier.adult) + (safeChildren * foodTier.child)) * safeDays;

  // Local transit inside destination (Totos, local taxis, joy rides)
  const localDailyRates = {
    budget: 500,
    moderate: 1200,
    luxury: 2500
  };
  const localTransitCost = (localDailyRates[budgetTier] || 1200) * safeDays;

  // Entry fees & activities allowance
  const activityRates = {
    budget: 300,
    moderate: 750,
    luxury: 1500
  };
  const activitiesCost = (activityRates[budgetTier] || 750) * totalTravelers;

  // Miscellaneous buffer (water, tips, emergency) ~8% of subtotal
  const subtotal = transportationCost + accommodationCost + foodCost + localTransitCost + activitiesCost;
  const miscellaneousCost = Math.round(subtotal * 0.08);

  const grandTotal = Math.round(subtotal + miscellaneousCost);
  const perPersonCost = Math.round(grandTotal / totalTravelers);

  return {
    grandTotal,
    perPersonCost,
    totalTravelers,
    roomsNeeded,
    nights,
    days: safeDays,
    budgetTier,
    currency: "INR",
    breakdown: [
      {
        category: "Intercity Transportation",
        amount: Math.round(transportationCost),
        description: `Round-trip transit via ${transportMode.toUpperCase()} for ${totalTravelers} travelers`
      },
      {
        category: "Accommodation & Lodging",
        amount: Math.round(accommodationCost),
        description: `${roomsNeeded} room(s) for ${nights} night(s) at ${budgetTier} standard`
      },
      {
        category: "Food & Dining",
        amount: Math.round(foodCost),
        description: `Daily breakfast, lunch, and dinner across ${safeDays} days`
      },
      {
        category: "Local Transfers & Sightseeing Taxis",
        amount: Math.round(localTransitCost),
        description: `Internal town taxis, totos, and sightseeing travel`
      },
      {
        category: "Attraction Entry & Activities",
        amount: Math.round(activitiesCost),
        description: `Monuments, museums, national park entry, and local tours`
      },
      {
        category: "Contingency & Miscellaneous",
        amount: miscellaneousCost,
        description: `Tipping, mineral water, unexpected road tolls (~8% buffer)`
      }
    ],
    assumptions: [
      `Travelers: ${safeAdults} Adult(s)${safeChildren > 0 ? `, ${safeChildren} Child(ren)` : ''}`,
      `Room occupancy based on twin-sharing (${roomsNeeded} room(s))`,
      `Prices are realistic estimates for standard seasons; peak festive dates (Durga Puja, Christmas) may carry premiums`,
      `Excludes long-haul shopping and personal purchases`
    ]
  };
}
