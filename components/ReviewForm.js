app.component('review-form', {

    data() {
        return {
          name: '',
          review: '',
          rating: null,
          recommended: null
        }
      },

    methods: {
        onSubmit(){
            
            if(
                this.name == '' || 
                this.review == '' || 
                this.rating == null || 
                this.recommended == null){

                alert('Review is incomplete.')
                return;
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommended: this.recommended
            }

            // productReview is PayLoad inside the emit
            this.$emit('review-submitted', productReview);
            this.name = '';
            this.review = '';
            this.rating = null;
            this.recommended = null;
        }
    },

    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">
  
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
  
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <label for="recommended">Would you recommend this product?</label>
      <select id="recommended" v-model="recommended">
        <option>Yes</option>
        <option>No</option>
      </select>
  
      <input class="button" type="submit" value="Submit">
    </form>`,
    
  })