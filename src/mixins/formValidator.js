import axios from "axios";

export default {
  data: {
    messages: {
      status: false,
      success: "Thank you, your application has been accepted",
      error: "Something went wrong! Try again!"
    },
    isSend: false,
    isUploading: false,
    isFormValid: false,
    formDataDtos: {},
    isReset: false
  },
  methods: {
    checkField(value, name, isValid) {
      this.isReset = false
      this.formData[name].value = value;
      this.formData[name].isValid = isValid;
      this.check();
    },
    check() {
      this.isFormValid = this.checkForm(this.formData)
    },
    checkForm(proxyObj) {
      const obj = JSON.parse(JSON.stringify(proxyObj))
      for (const property in obj) {
        if (obj[property].isValid || !obj[property].required) {
          continue
        } else {
          return false
        }
      }
      return true
    },
    async sendFormdata(to) {
      this.isUploading = true;
      this.isSend = false;
      this.formDataDtos = this.formDtos(this.formData);
      const response = await axios.post(
        `http://localhost:3000/${to}`,
        this.formDataDtos
      );
      this.isUploading = false;
      this.messages.status = response.status === 201 ? this.messages.success : this.messages.error;
      this.isSend = true;
      this.isReset = true
    },

  }
}