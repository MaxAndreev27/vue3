const App = {
    data() {
        return {
            title: 'Лист заміток',
            placeholderStr: 'Введіть замітку',
            inputValue: '',
            notes: ['note1', 'note55', 'note142'],
        }
    },
    methods: {
        inputChangeHandler(e) {
            this.inputValue = e.target.value;
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        keyDownHandler(e) {
            if (e.key == 'Enter') {
                this.addNewNote();
            }
        },
        toUpperCase(item) {
            return item.toUpperCase();
        },
        removeNote(index, event) {
            console.log(index);
            this.notes.splice(index, 1);
        },
        doubleCount() {
            console.log('doubleCount');
            return this.notes.length * 2;
        }
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed');
            return this.notes.length * 2;
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = '';
            }
            console.log('input Value changed', value);
        }
    }
}

Vue.createApp(App).mount('#app');