export default {
  selectService: "Select dining options",
  dineIn: "Dine in",
  takeaway: "Takeaway",
  selectLanguage: "Select language",

  language: {
    vi: "Tiếng Việt",
    en: "English",
  },

  barcode: {
    code: 'Code',
  },

  customer: {
    name: 'Name',
    phone_number: 'Phone number',
  },

  button: {
    verify: 'Verification',
  },

  placeholder_code: "Typing code...",
  placeholder_name: "Typing name...",
  placeholder_phone_number: "Typing phone number...",

  validate: {
    require: '{fieldName} cannot be left blank',
    white_pace: '{fieldName} must not contain spaces.',
    phone_number: {
      max_length_rule: '{fieldName} must not exceed  {maxNumber} characters',
      min_length_rule: '{fieldName} must be at least {minNumber} characters',
      format_rule: 'The phone number is not in the correct format'
    }
  }
};
