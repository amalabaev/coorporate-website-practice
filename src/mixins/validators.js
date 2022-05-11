export default {
  methods: {
    isEmpty(value, data) {
      return value.trim() === "" ? data.message || "Please fill in the field" : false;
    },
    
    isEmail(value, data) {
      /* eslint-disable */
      const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      return re.test(value) ? false : data.message || "Incorrect format";
    },
    
    isTel(value, data) {
      const re = /^\d{11}$/;
      return re.test(value) ? false : data.message || "Incorrect format";
    },
    
    isNumber(value, data) {
      const re = /^[0-9]*$/;
      return re.test(value) ? false : data.message || "Not a number";
    },
    
    maxlength(value, data) {
      return value.length < data.maxlength ? false : data.message || `length should be less ${data.maxlength}`;
    },
    
    minlength(value, data) {
      return value.length > data.minlength ? false : data.message || `length should be more ${data.minlength}`;
    },
    
    isSelected(value, data)  {
      return value !== data.value ? false : data.message || "Choose option!";
    },
  }
}