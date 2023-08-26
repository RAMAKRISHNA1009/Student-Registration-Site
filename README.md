# Student-Registration-Site


- On Left Side:
   - Image should be changed for every 5 Seconds. The API I've Used for images is "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"

# Validations
   - First Name & Last Name
      - Minimum length: 2 characters
      - Maximum length: 50 characters
      - Alphabetic characters only (no numbers or symbols)
      - Title case or capitalization (e.g., John, Alice)
   - Email
      - Format: Follow standard email format (e.g., user@example.com).
      - Minimum Length: Not empty.
      - Maximum Length: Reasonable limit.
      - Domain Name: Valid domain after "@" symbol.
      - No Spaces: Disallow spaces.
      - No Consecutive Dots: Avoid ".." in the local part.
      - Single "@" Symbol: Allow only one "@" symbol.
      - Valid Characters: Limit to alphanumeric, period, underscore, and hyphen.
   - Phone Number
      - Format: 10-digit number only (e.g., 1234567890).
      - Digits Only: Numeric digits (0-9) only, no other characters.
      - No Spaces or Dashes: Disallow spaces, dashes, or special characters.
      - No Country Code: Phone number without country code (e.g., +1).
      - Give Country code's in Select Box before Phone Number, get country code's from API Used "https://restcountries.com/v2/all" 
   - Password
      - Minimum Length: At least 5 characters.
      - Maximum Length: No more than 25 characters.
      - Uppercase Letters: Require at least one uppercase letter.
      - Lowercase Letters: Require at least one lowercase letter.
      - Numbers: Require at least one number (digit).
      - Special Characters: Require at least one special 1.character (e.g., !, @, #, $, %, etc.).
      - No Common Words or Patterns: Disallow common or easily guessable passwords like "password" or "123456".
      - No Sequential Characters: Disallow sequential characters or numbers like "abcdef" or "123456".
      - No Repeating Characters: Disallow repeating characters consecutively, such as "aa" or "11".
      - No Spaces: Password should not contain spaces.
  - Date of Birth
      - Past Date: Should be in the past.
      - Age: Must be 18 years or older.
  - Date of Joining
      - After DOB: Should be after the Date of Birth.
      - Age Restriction: Must be at least 18 years from the Date of Birth.
   
  - For the Countries the API used is "https://restcountries.com/v3.1/all"
  - In the University section only the above selected Country universities will be shown.
     The API used for the universities is "http://universities.hipolabs.com/search?country=India"

# Desktop View :

![Jabel - Register Page](https://github.com/RAMAKRISHNA1009/Student-Registration-Site/assets/95414437/d051b41f-3810-41ad-ae3d-caf065d5a5c4)

# Mobile View :

![Mobile- Jabel - Register Page](https://github.com/RAMAKRISHNA1009/Student-Registration-Site/assets/95414437/1933505d-b293-4adc-93e1-ebb422b42eae)



