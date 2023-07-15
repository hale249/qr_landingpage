export default {
  selectService: "Chọn hình thức",
  selectLanguage: "Chọn ngôn ngữ",

  language: {
    vi: "Tiếng Việt",
    en: "English",
  },

  barcode: {
    code: 'Mã xác thực'
  },

  customer: {
    name: 'Tên',
    phone_number: 'Số điện thoại',
  },

  button: {
    verify: 'Xác thực',
  },

  placeholder_code: "Nhập mã xác thực...",
  placeholder_name: "Nhập tên...",
  placeholder_phone_number: "Nhập số điện thoại...",

  validate: {
    require: '{fieldName} không được để trống',
    white_pace: '{fieldName} không được chứa khoảng trắng',
    phone_number: {
      max_length_rule: '{fieldName} không được phép vượt quá {maxNumber} ký tự',
      min_length_rule: '{fieldName} không được phép ít hơn {minNumber} ký tự',
      format_rule: 'Số điện thoại không đúng định dạng'
    }
  }
};
