export default {
  methods: {

    formDtos(obj) {
      const dtos = {}
      for (const property in obj) {
        dtos[property] = obj[property].value
      }
      return dtos
    },
    
  }
}