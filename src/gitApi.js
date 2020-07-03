function getPullRequest(owner,repoName,dateStarted,dateEnded){
    const axios = require('axios').default;

    var startDate = new Date(dateStarted);  //"2020-01-15"
    var endDate = new Date(dateEnded); //"2020-06-22"
    var pullRequestArray = [];
    axios.get(`https://api.github.com/repos/${owner}/${repoName}/pulls?state=all`)
        .then(function(response){

            for (const repo of response.data){
                let body = repo.body
                let createdAt = new Date(repo.created_at);
                let updatedAt = new Date(repo.updated_at);
                let closedAt = new Date(repo.closed_at);
                let mergedAt = new Date(repo.merged_at);
                
            if ((createdAt > startDate && closedAt < endDate)&& closedAt > startDate) {
                    pullRequestArray.push(body,createdAt,updatedAt,mergedAt,closedAt)
                }   
            }
        })
        .catch(function(error){
            console.log(error);
        })
        setTimeout(()=>{console.log(pullRequestArray)},10000)
}

getPullRequest('torvalds','linux','2020-01-15','2020-06-22');
