<template>
  <div
    v-if="isLoading"
    style="display:flex;justify-content:center;align-items:center;margin-top:100px"
  >
    <orbit-spinner :animation-duration="3200" :size="120" color="#055C0A" />
  </div>
  <div v-else-if="!isLoading && error">{{ error }}</div>
  <div v-else-if="!isLoading && results && results.length > 0">
    <section v-for="result in results" :key="result.id">
      <base-card
        @click="
          selectRow(result.id);
          showDialog(result.avatar);
        "
      >
        <img
          :class="[result.id == selectedCard ? 'img_filter' : '']"
          style="width:70px;height:70px;margin-right:25px"
          :src="`${result.avatar}`"
        />
        <h5 :class="[result.id == selectedCard ? 'highlight' : '']">
          {{ result.url }}
        </h5>
      </base-card>
    </section>
    <div class="pagination-wrapper">
      <base-button @click="changeNumber(pageNum - 1)" :disabled="pageNum == 1">
        -
      </base-button>
      <span v-for="(item, index) in numberOfPages" :key="index">
        <base-button
          :class="[pageNum == item ? 'active' : '']"
          @click="changeNumber(item)"
          >{{ item }}</base-button
        >
      </span>
      <base-button
        @click="changeNumber(pageNum + 1)"
        :disabled="pageNum == lastPage"
      >
        +
      </base-button>
    </div>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible" :avatar="avatar">
    <img style="width:16rem;height:16rem" :src="`${avatar}`" />
  </base-modal>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners';
export default {
  components: {
    OrbitSpinner
  },
  data() {
    return {
      lastPage: 100,
      results: [],
      isLoading: false,
      error: null,
      pageNum: this.$route.query.pageNum || 1,
      numberOfPages: [],
      selectedCard: null,
      dialogIsVisible: false,
      avatar: ''
    };
  },
  methods: {
    loadList(num) {
      this.isLoading = true;
      this.error = null;
      fetch(`https://api.github.com/gists/public?page=${num}&per_page=30`, {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          var filename = '';
          for (const id in data) {
            for (var property in data[id].files) {
              filename = property;
            }
            this.results.push({
              id: id,
              avatar: data[id].owner.avatar_url,
              url: filename
            });
          }
          this.isLoading = false;
        })
        .catch(error => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to fetch data - please try again later';
        });
    },
    changeNumber(num) {
      this.pageNum = num;

      this.results = [];

      this.$router.push({
        path: this.$route.path,
        query: { pageNum: this.pageNum }
      });

      this.numberOfPages = [1, 2, 3, 4, 5];

      if (num > 5) {

        this.numberOfPages = [];

        var startNum = num - 4;

        for (var i = startNum; i <= num; i++) {
          this.numberOfPages.push(i);
        }
      }

      this.loadList(this.pageNum);
    },
    selectRow(row) {
      this.selectedCard = row;
    },
    showDialog(avatar) {
      this.avatar = avatar;
      this.dialogIsVisible = true;

      setTimeout(() => (this.dialogIsVisible = false), 1000);
    },
    hideDialog() {
      setTimeout(function() {
        this.dialogIsVisible = false;
      }, 1000);
      this.dialogIsVisible = false;
    }
  },
  mounted() {
    this.changeNumber(1);
  }
};
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.active {
  background-color: #055c0a;
}

.highlight {
  color: #055c0a;
}

.disabled {
  color: white;
}

.img_filter {
  filter: brightness(50%);
}

@media only screen and (max-width: 600px) {
  .card {
    margin-left: 5px;
    margin-right: 5px;
  }
  button {
    padding: 0.5rem 0.8rem;
  }
}
</style>
