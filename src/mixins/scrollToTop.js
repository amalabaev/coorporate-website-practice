export default {
  methods: { 
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  created() {
    this.scrollToTop()
  }
}