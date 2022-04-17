app.component('review-list', {
    props: {
        reviewList: {
            type: Array,
            required: true
        }
    },

    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviewList">
            {{ review.name }} gave this {{review.rating}} stars:
            <br/>
            "{{review.review}}"
            <br/>
            Recommends: {{review.recommended}}
            </li>
        </ul>
    </div>
        
    `
})