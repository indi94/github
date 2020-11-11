class Github{
    constructor(){
        this.client_id = 'ffb59ac247a160d57730';
        this.client_secret = '0882d5944e6813810177e4b0278489fd9f340fb0';
        this.repos_count = 5;
        this.repos_sort='created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    } 

}