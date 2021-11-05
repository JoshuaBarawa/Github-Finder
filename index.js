

document.getElementById('btn').addEventListener('click', async function(){

    var name = document.getElementById('search-input').value;

  fetch("https://api.github.com/users/" + name)
    .then((response) =>response.json())
    .then((data) => {
        document.getElementById('profile').innerHTML =`

      
    <div class="user-profile">
    <img src=${data.avatar_url} alt="" />
    <div id="details">
    <p>Member since: ${data.created_at}</p>
       <p>Name: ${data.login}</p>
       <p>Location: ${data.location}</p>
       <p>Repos: ${data.public_repos}</p>
       <span>Followers: ${data.followers}</span> <span>Following:${data.following}</span>
      <a href="${data.html_url}" target="_blank" >View Profile</a>
      </div>
    </div>
        `
      
      });


      fetch("https://api.github.com/users/" + name + "/repos")
    .then((response) =>response.json())
    .then((data) => {

      data.forEach(data => {

        document.getElementById('repos').innerHTML +=`
        <div class="user-repo">
        <p>${data.name}</p>
           <p>${data.description}</p>
           <p>Language: ${data.language}</p>
           <div id="other">
           <p>${data.visibility}</p>
           <p>Forks: ${data.forks}</p>
           <p>Watchers: ${data.watchers}</p>
           <p>Stars: ${data.stargazers_count}</p>
           </div>
          <a href="${data.html_url}" target="_blank" >Source Code</a>
        </div>`
      
      })
      
      });

});