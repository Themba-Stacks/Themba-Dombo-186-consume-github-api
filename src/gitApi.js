function getPullRequest(owner,repoName,dateStarted,dateEnded){
    const axios = require('axios').default;

    var startDate = new Date(dateStarted);
    var endDate = new Date(dateEnded);
    var pullRequestArray = [];
    axios.get(`https://api.github.com/repos/${owner}/${repoName}/pulls?state=all`)
        .then(function(response){

            for (const pullReq of response.data){
                let body = pullReq.body;                
                let createdAt = new Date(pullReq.created_at);
                let updatedAt = new Date(pullReq.updated_at);
                let mergedAt = new Date(pullReq.merged_at);
                let closedAt = new Date(pullReq.closed_at);
                
            if ((createdAt > startDate && createdAt < endDate)||
                (updatedAt > startDate && updatedAt < endDate)||
                (mergedAt > startDate && mergedAt < endDate)||
                (closedAt > startDate && closedAt < endDate)) {
                    pullRequestArray.push('Body: '+body,'Created: '+createdAt,'Updated: '+updatedAt,'Merged: '+mergedAt,'Closed: '+closedAt,'*******')
                }
            }
        })
        .catch(function(error){
            console.log(error);
        })
        setTimeout(()=>{console.log(pullRequestArray)},10000)
}

getPullRequest('torvalds','linux','2020-01-15','2020-03-22');
