const app = Vue.createApp({
data() {
    return {
        friends: [
            {
                id: '180',
                name: 'Nadem',
                phoneNumber: '05375860521',
                email:'Nadem.ghannam1995@gmail.com',
            },
            {
                id: '181',
                name: 'Muhammad',
                phoneNumber: '05375860444',
                email: 'Muhammad123@gmail.com',
            }
        ]
    }
},
})
app.component('friend-contact', {
    data() {
        return {
            isShow: true,
        }
    },
    props: {
        friend: Object,
    },
    template: `
            <h2>{{friend.name}}</h2>
            <button @click="toggleIsShow">{{isShow?'Hide Details':'Show Details'}}</button>
            <ul v-if="isShow">
              <li><strong>Phone:</strong>{{friend.phoneNumber}}</li>
              <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
          `,
    
    methods: {
        toggleIsShow() {
            this.isShow = !this.isShow;
        }
    },

});

app.mount('#app');