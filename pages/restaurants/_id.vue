<template>
  <div class="uk-container uk-container-xsmall">
    <span class="uk-heading-small">
      // Link to go back to the previous page
      <NuxtLink class="uk-button uk-button-text" to="/">
        <span uk-icon="arrow-left"></span> go back
      </NuxtLink>
    </span>

    // Displaying dishes
    <div v-for="dish in dishes" :key="dish.id">
      <div class="uk-card uk-card-default uk-child-width-1-2 uk-margin" uk-grid>
        <div class="uk-card-body uk-card-small">
          <h2 class="uk-card-title">{{ dish.attributes.name }}</h2>
          <p>{{ restaurant.data.attributes.name }}</p>
          <p>{{ dish.attributes.price }} 원</p>
          <button
            class="uk-button uk-button-primary uk-margin-xlarge-top"
            @click="addToCart(dish)"
          >
            Add to cart
          </button>
        </div>
        <figure class="uk-card-media-right uk-cover-container">
          <img
            :src="getStrapiMedia(dish.attributes.image.data.attributes.url)"
            :alt="dish.attributes.image.data.attributes.alternativeText"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { getStrapiMedia } from '@/utils/media'
import restaurantQuery from '@/apollo/queries/restaurant'
export default {
  data() {
    return {
      restaurant: Object,
    }
  },
  apollo: {
    restaurant: {
      prefetch: true,
      query: restaurantQuery,
      variables() {
        return { id: this.$route.params.id }
      },
    },
  },
  computed: {
    dishes() {
      if (!this.restaurant?.data) return []
      return this.restaurant.data.attributes.dishes.data
    },
  },
  methods: {
    getStrapiMedia,
    ...mapMutations({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove',
    }),
  },
}
</script>
