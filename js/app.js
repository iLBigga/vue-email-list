const app = new Vue({
    el: '#app',
    data:{
        randomEmail: [],
    },
    mounted() {
        for(i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.randomEmail.push(res.data.response)
                });
        };
    },
});