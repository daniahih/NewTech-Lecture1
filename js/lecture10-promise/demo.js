// api -- Async --Web Api
// fetch  api , http request

// fetch("URL API")
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     test = res.json();
//     console.log("test", test);
//     return test;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://jsonplaceholder.typice.com/posts")
//   .then((res) => {
//     return res.json();
//   })
//   .then((posts) => {
//     console.log(posts[0]);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

fetch("https://jsonplaceholder.typicode.com/wrong-url")
  .then(function (response) {
    console.log(response);

    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);

    if (response.ok === false) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.json();
  })
  .then(function (data) {
    console.log("Data:");
    console.log(data);
  })
  .catch(function (error) {
    console.log("Error:");
    console.log(error.message);
  });

// async await

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok === false) {
      throw new Error("Request failed with status: " + response.status);
    }
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}
getPosts();

console.log(3);

// axios
