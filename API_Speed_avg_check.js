/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) === false || !times.every(item => typeof item === "number")) {
        return "Invalid";
   }

   if (times.length === 0) {
        return "Invalid";
    }

 let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }

  return total / times.length;
}

