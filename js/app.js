const app = new Vue({
    el: '#app',
    data:{
        randomEmail: [],
        email: null,
    },
    mounted() {
        for(i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.email = res.data.response;
                    this.randomEmail.push(this.email)
                });
        };
    },
});