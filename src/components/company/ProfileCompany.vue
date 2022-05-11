<template>
  <div class="profile">
    <div class="container">
      <div class="profile__inner">
        <h3 class="profile__cap">会社概要</h3>
        <table class="profile__table">
          <tr v-for="info in profile" :key="info.id" class="profile__row">
            <th>{{ info.head }}</th>
            <td>{{ info.body }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: [
        {
          id: 1,
          head: '社名',
          body: '株式会社HOGE DESIGN'
        },
        {
          id: 2,
          head: '設立',
          body: '2020.01.10'
        },
        {
          id: 3,
          head: '代表取締役',
          body: 'ホゲ太郎'
        },
        {
          id: 4,
          head: '資本金',
          body: '1,000,000円'
        },
        {
          id: 5,
          head: '所在地',
          body: '〒791-1101　愛媛県松山市久米窪田町487-2'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  padding-bottom: 60px;
  &__cap {
    font-family: $font-family-secondary;
    font-size: 3.2rem;
    color: $accent;
    text-align: center;
    margin-bottom: 27px;
  }
  &__table {
    border-collapse: collapse;
    text-indent: initial;
    border-spacing: 0;
    margin: 0;
    padding: 0;
    text-align: left;
    width: 100%;
  }
  &__row {
    width: 100%;
    th, td {
      font-size: 1.5rem;
      padding: 26px 30px;
      margin: 0;
      text-align: left;
      color: #333333;
      border-bottom: 1px solid #DDDDDD;
    }
    th {
      min-width: 15.8%;
    }
    td {
      font-family: $font-family-secondary;
      letter-spacing: 0.05em;
      text-align: left;
    }
  }
  @media (max-width: 48em) {
    padding-bottom: 60px;
    &__cap {
      font-size: 2.5rem;
      margin-bottom: 19px;
    }
    &__table {
      display: block;
    }
    &__row {
      padding: 20px 0;
      display: block;
      border-bottom: 1px solid #DDDDDD;
      th, td {
        display: block;
        font-size: 1.6rem;
        padding: 0;
        border: none;
      }
      th {
        width: 100%;
        margin-bottom: 4px;
      }
    }
  }
}
</style>