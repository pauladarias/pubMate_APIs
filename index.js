

async function getUsers() {
  const response = await fetch ("http://35.178.207.61:8080/pubmate/api/0.1/user/1");
  const users = await response.json();
  console.log(users)


  document.querySelector("#users").innerHTML = `
    <div class="users-list">
      <h5>${users.username}</h5> 
      <p>${users.email}</p>
      
    </div>
  `;
}

getUsers()


document.getElementById("fetchForm").addEventListener("submit", submitUser);

//1 PREVENT DEFAULT 
async function submitUser(e) {
  e.preventDefault();

//2 GET THE VALUES FROM USER
  let username = document.getElementById("usernameInput").value
  let password = document.getElementById("passwordInput").value

//3 DEFINE OPTIONS
  const options = {
    method: "POST",
    body: JSON.stringify({username: username, password: password}),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  };

//4 FETCH DATA AND DISPLAY IT (plus error handling)
  const postPromise = await fetch('http://35.178.207.61:8080//pubmate/api/0.1/user', options);
    
    if (postPromise.ok) {
      const post = await postPromise.json();
      console.log(post)

      username = post.username;
      password = post.password;
    } else {
      username = "Error";
      password = `Status: ${postPromise.status}`
    }


  document.querySelector(".card-title").innerHTML = username;
  document.querySelector(".card-text").innerHTML = password;
  
  //CLEAR INPUTS AFTER SUBMIT
  // document.getElementById('fetchForm').reset();

}



  // data.forEach(user => {
  //   document.querySelector("#users").innerHTML = `User Name: ${user.username} Email Adress:${user.email}`
  //   // const div = document.createElement("div");
  //   // div.innerHTML = `User Name: ${data.username} Email Adress:${data.email}`
  //   // document.body.appendChild(div)
  // })