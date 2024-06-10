// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.


const statesInIndia = [

    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
   "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
    
   ];
   
   const statesWithoutVowels = statesInIndia.filter(state => {
    const firstLetter = state.charAt(0).toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
   });
   
   console.log(statesWithoutVowels);