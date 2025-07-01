Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'Hello',
        person: {
            firstName: 'John',
            lastName: 'Doe',
            age: 35
        },
        items: [1, 2, 3, 4, 5, 6]
    }),
    methods: {
        addItem() {
            this.items.push(this.$refs.myInput.value);
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app');