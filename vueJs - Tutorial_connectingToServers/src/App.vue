<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" style="margin-bottom:20px">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="">Email address</label>
                    <input type="text" class="form-control"  v-model="user.email">
                </div>
                <button @click="submit" class="btn btn-primary">Submit</button>
            </div>
            <br><br><br>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                 <button @click="fetchData" class="btn btn-primary">Get data</button>
                 <div>
                     <ul>
                         <li v-for="u in users">
                             {{u.username}} - {{u.email}}
                         </li>
                     </ul>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {}
            }
        },
        methods: {
            submit(){
               /* this.$http.post('', this.user).then(
                    response => {
                        console.log(response.data)
                    },
                    error => {
                        console.log(error)
                    });*/

                 //this.resource.save({}, this.user);
                 this.resource.saveAlt(this.user);
                    
            },
            fetchData(){
                this.$http.get('data.json').then(
                    response => {
                       return response.json();
                     }
                ).then(data => {
                    const resultArray = [];
                    for(let key in data){
                        resultArray.push(data[key]);
                    }
                    this.users = resultArray;
                });
            }
        },
        created(){
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'}
            };
            this.resource = this.$resource('data.json', {}, customActions);
        }
    }
</script>

<style>
</style>
