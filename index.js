

document.getElementById('btn').addEventListener('click', async function(){

  function Repo(repoName,language,forks,counts,watchers,url){
    this.repoName = repoName;
    this.language = language;
    this.forks = forks;
    this.counts = counts;
    this.watchers = watchers;
    this.url = url;
  }

    var name = document.getElementById('search-input').value;
    var repos = [];

  fetch("https://api.github.com/users/" + name)
    .then((response) =>response.json())
    .then((data) => {
        document.getElementById('profile').innerHTML =`

    <div class="user-profile">
    <img src=${data.avatar_url} alt="" />

    <div id="all-details">
    <div id="details">
    <div>
    <p>${data.name}</p>
    <a href="${data.html_url}" target="_blank" >@${data.login}</a>
    </div>
    <div>
    <p>Joined ${data.created_at}</p>
    </div>
    </div>
   
   <div id="follow">
   <p>Repos ${data.public_repos}</p>
   <p>Followers ${data.followers}</p>
   <p>Following ${data.following}</p>
   </div>
   <p>Location: ${data.location}</p>
    </div>
    </div>
        `
      });


      fetch("https://api.github.com/users/" + name + "/repos")
     
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('repos').innerHTML ="";
      
      data.forEach(data => {
        var repo = new Repo(data.name,data.language,data.forks,data.watchers,data.stargazers_count,data.html_url)
        repos.push(repo);
        document.getElementById('repos').innerHTML +=`
  
        <div class="user-repo">
        <p>${repo.repoName}</p>
           <p>${repo.language}</p>
           <div id="other">
           <p>Forks: ${repo.forks}</p>
           <p>Stars: ${repo.counts}</p>
           <p>Watchers: ${repo.watchers}</p>
           </div>
          <a href="${repo.url}" target="_blank" >Source Code</a>
        </div>`
       
      })

      });

});