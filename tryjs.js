//sidebar
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
 
//<< ====== For LogOut Button       ====================== >>
function signOut() {
    // Redirect to sign-in page
    window.location.href = "login.php";
}

// Event listener for the signout button
document.getElementById("signout-button").addEventListener("click", function() {
    // Call signOut function when the button is clicked
    signOut();
});



//<< ============== Notificatio Pop UP =================================== >>
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
});

document.body.addEventListener('click', (event) => {
    // Check if the clicked element is not within the notifications popup
    if (!event.target.closest('.notifications-popup') && !event.target.closest('#notifications')) {
        document.querySelector('.notifications-popup').style.display = 'none';
    }
});



const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

//<< =============== Search Chat ============================================== >>
messageSearch.addEventListener('keyup', searchMessage);

// Hightlight message card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


// ================ Theme Box(display) Coustomization ====================================================
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
const themeLinks = document.querySelectorAll('.theme-link'); //for link color changing

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//Close Theme box
const closeThemeModal = (e) => {

    if(e.target.classList.contains('customize-theme')){
         themeModal.style.display = 'none';
    }

} 

themeModal.addEventListener('click', closeThemeModal); //close the box on click 
theme.addEventListener('click', openThemeModal);

// ==========================================================================================================
// remove active class from spans or font size selectors

const removeSizeSelector = () => {
  
    fontSizes.forEach(size => {
    size.classList.remove('active');
  })

}

// Font Size Changing 
fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
    fontSize = '10px';
    root.style.setProperty('----sticky-top-left','5.4rem');
    root.style.setProperty('----sticky-top-right','5.4rem');
    } 
    else if(size.classList.contains('font-size-2')){ 
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','-7rem');
    } 
    else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left','-2rem');
        root.style.setProperty('----sticky-top-right','-17rem');
    } 
    else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('----sticky-top-left','-5rem');
        root.style.setProperty('----sticky-top-right','-25rem');
    } 
    else if(size.classList.contains('font-size-5')){
        fontSize = '22px';  
        root.style.setProperty('----sticky-top-left','-12rem');
        root.style.setProperty('----sticky-top-right','-35rem');
    }
    document.querySelector('html').style.fontSize = fontSize;
 })

})

//==================================== Changing primary Color =======================================================
//=== to remove the active class (outer circle of selected color) from colors =====================
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
// change primary colors

colorPalette.forEach(color => { 
    color.addEventListener('click', () => { 
        let primaryHue;
        changeActiveColorClass();

    if(color.classList.contains('color-1')){
        primaryHue = 252;
    } 
    else if(color.classList.contains('color-2')){
        primaryHue = 52;
    } 
    else if(color.classList.contains('color-3')){
        primaryHue = 352; 
    }
    else if(color.classList.contains('color-4')){
        primaryHue = 152;
    }
    else if(color.classList.contains('color-5')){
        primaryHue = 202;
    }
    color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})  



// Theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Change background color function
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    if (darkColorLightness === '95%') {
        themeLinks.forEach(link => {
            link.style.color = 'gold'; // Set link color to white for dim theme
        });
    } else {
        themeLinks.forEach(link => {
            link.style.color = 'blue'; // Set link color to blue for other themes
        });
    }
}

Bg1.addEventListener('click', () => {
    // Remove any customizations
    darkColorLightness = null;
    whiteColorLightness = null;
    lightColorLightness = null;
    // Apply default styles
    changeBG();
    // Add active class
    Bg1.classList.add('active');
    // Remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    // Apply customized styles
    changeBG();
    // Add active class
    Bg2.classList.add('active');
    // Remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    // Apply customized styles
    changeBG();
    // Add active class
    Bg3.classList.add('active');
    // Remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
});


 



//<< ====  Request Accept & Decline Functioning ============================= >>
document.addEventListener("DOMContentLoaded", function() {
    const acceptBtns = document.querySelectorAll(".acceptBtn");
    const declineBtns = document.querySelectorAll(".declineBtn");
    const friendRequests = document.querySelectorAll(".request");

    acceptBtns.forEach(function(acceptBtn, index) {
      acceptBtn.addEventListener("click", function() {
        acceptBtn.style.display = "none";
        declineBtns[index].style.display = "none";
        friendRequests[index].querySelector(".friendshipStatus").style.display = "block";
      });
    });

    declineBtns.forEach(function(declineBtn, index) {
      declineBtn.addEventListener("click", function() {
        friendRequests[index].style.display = "none";
      });
    });
  });



// Code For Bookmark Saving..... & 
// Function for Bookmark color Changing
function toggleBookmark(icon) {
    icon.classList.toggle("bookmarked");
    if (icon.classList.contains("bookmarked")) {
        alert("Bookmark Saved"); icon.style.color = 'red';
    } else {
        alert("Bookmark removed"); icon.style.color = '';
    }
}

// Code For Like System
// Function for Like ++ / --
function toggleLike(icon, likeCountId) {
    const likeCountSpan = document.getElementById(likeCountId);
    let count = parseInt(likeCountSpan.textContent);
    
    if (icon.classList.contains("active")) {
      count--;
      icon.classList.remove("active");
      icon.style.color = "";
    } else {
      count++;
      icon.classList.add("active");
      icon.style.color = "red";
    }
    
    likeCountSpan.textContent = count;
  }


  // Check if the navigator supports the share API >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 5/2/2025 Previous Code ========================<<<<<<<<<<<<<<<<<
//   const shareButtons = document.querySelectorAll('.share-button');

//   shareButtons.forEach(button => {
//     button.addEventListener('click', async () => {
//       const shareDialogId = button.getAttribute('data-div');
//       const shareDialog = document.getElementById(shareDialogId);
  
//       if (navigator.share) {
//         const shareData = {
//           title: 'My Awesome Website',
//           text: 'Check out this cool content!',
//           url: window.location.href, // Replace with your desired URL
//         };
  
//         try {
//           await navigator.share(shareData);
//           console.log('Shared successfully! 🎉');
//         } catch (error) {
//           console.error('Error sharing:', error);
//         }
//       } else {
//         shareDialog.classList.toggle("active");
//       }
//     });
//   });

//   Trying to add upload Post Feature
// function showPostForm() {
//     var postForm = document.getElementById("postForm");
//     postForm.style.display = "grid";
// }

// function createPost() {
//     var imageFile = document.getElementById("imageInput").files[0];
//     var caption = document.getElementById("captionInput").value;
//     var hashtag = document.getElementById("hashtagInput").value;

//     // Create new post div
//     var newPost = document.createElement("div");
//     newPost.className = "feed";
//     newPost.innerHTML = `
//         <div class="user">
//             <div class="profile-pic">
//                 <img src="./images/user.png" alt="">
//             </div>
//             <div class="info">
//                 <h3>Username</h3>
//                 <small>Now</small>
//             </div>
//             <span class="edit"><i class="uil uil-ellipsis-h"></i></span>
//         </div>
//         <div class="photo">
//             <img src="${URL.createObjectURL(imageFile)}" alt="Uploaded Image">
//         </div>
//         <div class="action-button">
//             <div class="interaction-button">
//                 <i class="fas fa-heart"></i>
//                 <a href="#"><i class="fa-regular fa-comment"></i></a>
//                 <i class="fa-solid fa-share-from-square share-button" data-div="shareDialog1"></i>
//             </div>
//             <div class="bookmark">
//                 <span><i class="fa-sharp fa-regular fa-bookmark"></i></span>
//             </div>
//         </div>
//         <div class="liked-by">
//             Liked by <b>You</b> and <span id="likeCount1">0</span> others
//         </div>
//         <div class="caption">
//             <p><b>Username</b> ${caption}<a style="color: blue;" class="theme-link"><span class="hash-tag">${hashtag}</span></a></p>
//         </div>
//         <div class="comments text-muted">View all 0 comments</div>
//     `;

//     // Append new post to posts section
//     var postsSection = document.getElementById("postsSection");
//     postsSection.appendChild(newPost);

//     // Reset form and hide it
//     document.getElementById("imageInput").value = "";
//     document.getElementById("captionInput").value = "";
//     document.getElementById("hashtagInput").value = "";
//     document.getElementById("postForm").style.display = "none";
// }


   
// // Get references to the create post button (label) and the post form

const createPostButton = document.getElementById("create-post");
const postForm = document.querySelector(".dropzone-box.body");

const showForm = (e) => {
    if (e.target === createPostButton) {
        postForm.style.display = 'block';
        // Center the form on the screen
        postForm.style.top = `${(window.innerHeight - postForm.offsetHeight) / 2}px`;
        postForm.style.left = `${(window.innerWidth - postForm.offsetWidth) / 2}px`;
    }
};

const hideForm = (e) => {
    if (!postForm.contains(e.target) && e.target !== createPostButton) {
        postForm.style.display = 'none';
    }
};

document.addEventListener('click', showForm);
document.addEventListener('click', hideForm);



//===============>> Trying to Add Post 1 June 24  <<==============================

// function uploadMedia() {
//     const fileInput = document.getElementById('file-input');
//     const file = fileInput.files[0];
    
//     if (file) {
//         const reader = new FileReader();

//         reader.onload = function(event) {
//             // Create a new div element
//             const newDiv = document.createElement("div");
//             newDiv.className = "child-div";

//             // Create the media element based on file type
//             let mediaElement;
//             if (file.type.startsWith('image/')) {
//                 mediaElement = document.createElement("img");
//                 mediaElement.className = "media";
//                 mediaElement.src = event.target.result;
//             } else if (file.type.startsWith('video/')) {
//                 mediaElement = document.createElement("video");
//                 mediaElement.className = "media";
//                 mediaElement.src = event.target.result;
//                 mediaElement.controls = true;
//             }

//             // Append the media element to the new div
//             newDiv.appendChild(mediaElement);

//             // Get the main div and insert the new div at the top
//             const mainDiv = document.getElementById("main");
//             mainDiv.insertBefore(newDiv, mainDiv.firstChild);

//             // Clear the file input
//             fileInput.value = '';
//         };

//         reader.readAsDataURL(file);
//     } else {
//         alert('Please select a file to upload.');
//     }
// }

// End 1 June 24 (Add a post)

// =============> 2 june 24 <======================================


// document.getElementById("submit-button").addEventListener("click", function() {
//     // Get form values
//     var file = document.getElementById("upload-file").files[0];
//     var caption = document.getElementById("caption").value;
//     var location = document.getElementById("location").value;
//     var hashtag = document.getElementById("hashtag").value;

//     // Add new post
//     addNewPost(file, caption, location, hashtag);

//     // Reset form
//     document.getElementById("upload-form").reset();
// });

// function addNewPost(file, caption, location, hashtag) {
//     // Create new post HTML structure
//     var postHTML = `
//         <div class="feed">
//             <!-- Post content here -->
//         </div>
//     `;

//     // Append new post to the feed container
//     document.querySelector(".middle").innerHTML += postHTML;
// }
// ======================= Upload Post Section ==============================>

    document.addEventListener('DOMContentLoaded', function () {
        const createPostButton = document.getElementById('upload-button');
        const middleSection = document.querySelector('.middle');
        const createPostForm = document.querySelector('.create-post');
    
        createPostButton.addEventListener('click', function (event) {
            event.preventDefault();
    
            // Get data from the form
            const formData = new FormData(createPostForm);
            const postText = formData.get('post-text');
            const postImage = formData.get('post-image');
    
            // Create a new post element
            const newPost = document.createElement('div');
            newPost.classList.add('story'); // Assuming the new post follows the same structure as other posts
    
            // Set the inner HTML of the new post
            newPost.innerHTML = `
                <div class="profile-pic">
                    <img src="images/my-profile-pic.jpeg" alt="">
                </div>
                <p class="name">Your Story</p>
                <!-- Other content of the post goes here -->
                <p>${postText}</p>
                <img src="${postImage}" alt="Uploaded Image">
                <!-- Add more elements as needed -->
            `;
    
            // Append the new post to the middle section
            middleSection.appendChild(newPost);
    
            // Clear the form fields
            createPostForm.reset();
        });
    });
    

// ===================================== END ==========================
// =========== For Status Div Try 1 ==========================
document.getElementById('addStoryButton').addEventListener('click', function() {
    // Create a new story div
    const newStory = document.createElement('div');
    newStory.className = 'story';
    
    // Create profile picture container
    const profilePicDiv = document.createElement('div');
    profilePicDiv.className = 'profile-pic';
    
    // Create img element for the profile picture
    const img = document.createElement('img');
    img.src = './images/my-profile-pic.jpeg'; // Change to your default image
    img.alt = '';
    
    // Append img to profile picture div
    profilePicDiv.appendChild(img);
    
    // Create name paragraph
    const nameParagraph = document.createElement('p');
    nameParagraph.className = 'name';
    nameParagraph.textContent = 'New Story'; // Change as needed
    
    // Append profile picture and name to new story
    newStory.appendChild(profilePicDiv);
    newStory.appendChild(nameParagraph);
    
    // Append new story to the stories container
    document.querySelector('.stories').appendChild(newStory);
});

// ===================================== END ==========================


// Adding Story Try 2 =================================================

document.getElementById('addStoryButton').addEventListener('click', function() {
    // Create a new story div
    const newStory = document.createElement('div');
    newStory.className = 'story';
    
    // Create profile picture container
    const profilePicDiv = document.createElement('div');
    profilePicDiv.className = 'profile-pic';
    
    // Create img element for the profile picture
    const img = document.createElement('img');
    img.src = './images/my-profile-pic.jpeg'; // Change to your default image
    img.alt = '';
    
    // Append img to profile picture div
    profilePicDiv.appendChild(img);
    
    // Create name paragraph
    const nameParagraph = document.createElement('p');
    nameParagraph.className = 'name';
    nameParagraph.textContent = 'New Story'; // Change as needed
    
    // Append profile picture and name to new story
    newStory.appendChild(profilePicDiv);
    newStory.appendChild(nameParagraph);
    
    // Add the slide-in animation class
    newStory.classList.add('slide-in');
    
    // Insert the new story at the beginning of the stories container
    const storiesContainer = document.querySelector('.stories');
    storiesContainer.insertBefore(newStory, storiesContainer.firstChild);
});

// Share on Both Phone and PC 5/2/2025 ===========================================

const shareButtons = document.querySelectorAll('.share-button');

shareButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const shareDialogId = button.getAttribute('data-div');
    const shareDialog = document.getElementById(shareDialogId);
  
    // Check if the device supports the Web Share API
    if (navigator.share) {
      const shareData = {
        title: 'My Awesome Website',
        text: 'Check out this cool content!',
        url: window.location.href, // Use the current page URL or replace it
      };
  
      try {
        await navigator.share(shareData);
        console.log('Shared successfully! 🎉');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for devices that don't support the Web Share API
      if (shareDialog) {
        shareDialog.classList.toggle("active"); // Toggle the share dialog visibility
      } else {
        console.warn('Share dialog not found.');
      }
    }
  });
});


// Application making Try 1 =============== >> 8/2/2025 << =========================== 
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        console.log('Service Worker registration failed:', error);
      });
  }
  
  
//   Adding Story Try 4 ============= >> 13/2/2025 << ================

// // Function to Add a New Story When a File is Selected
// function addStory(event) {
//     const file = event.target.files[0]; // Get the selected file
//     if (!file) return; // If no file selected, exit function

//     const reader = new FileReader(); // Create FileReader to read file data
//     reader.onload = function(e) {
//         const storiesContainer = document.getElementById("storiesContainer");

//         // Create new story element
//         const newStory = document.createElement("div");
//         newStory.classList.add("story");
//         newStory.style.backgroundImage = `url(${e.target.result})`; // Set uploaded file as background

//         // Create Profile Picture Container
//         const profilePic = document.createElement("div");
//         profilePic.classList.add("profile-pic");
//         const img = document.createElement("img");
//         img.src = e.target.result; // Use the uploaded image as profile pic
//         profilePic.appendChild(img);

//         // Create Story Name
//         const name = document.createElement("p");
//         name.classList.add("name");
//         name.textContent = "New Story"; // Default story name

//         // Append Profile Pic and Name to Story
//         newStory.appendChild(profilePic);
//         newStory.appendChild(name);

//         // Add New Story at the Beginning of Stories List
//         storiesContainer.prepend(newStory);
//     };
//     reader.readAsDataURL(file); // Read file as Data URL
// }

// Function to Add a New Story When a File is Selected
function addStory(event) {
    const file = event.target.files[0]; // Get the selected file
    if (!file) return; // If no file selected, exit function

    const reader = new FileReader(); // Create FileReader to read file data
    reader.onload = function(e) {
        const storiesContainer = document.getElementById("storiesContainer");

        // Create new story element
        const newStory = document.createElement("div");
        newStory.classList.add("story");
        newStory.style.backgroundImage = `url(${e.target.result})`; // Set uploaded file as background

        // Create Profile Picture Container
        const profilePic = document.createElement("div");
        profilePic.classList.add("profile-pic");
        const img = document.createElement("img");
        img.src = e.target.result; // Use the uploaded image as profile pic
        profilePic.appendChild(img);

        // Create Story Name
        const name = document.createElement("p");
        name.classList.add("name");
        name.textContent = "New Story"; // Default story name

        // Append Profile Pic and Name to Story
        newStory.appendChild(profilePic);
        newStory.appendChild(name);

        // Add New Story at the Beginning of Stories List
        storiesContainer.prepend(newStory);
    };
    reader.readAsDataURL(file); // Read file as Data URL
}

//===================== End  << ==========================

// Adding Story with Scoll Bar >> 15/2/2025 << ======================

// Function to Add a New Story When a File is Selected
function addStory(event) {
    const file = event.target.files[0]; // Get the selected file
    if (!file) return; // If no file selected, exit function

    const reader = new FileReader(); // Create FileReader to read file data
    reader.onload = function(e) {
        const storiesContainer = document.getElementById("storiesContainer");

        // Create new story element
        const newStory = document.createElement("div");
        newStory.classList.add("story");
        newStory.style.backgroundImage = `url(${e.target.result})`; // Set uploaded file as background

        // Create Profile Picture Container
        const profilePic = document.createElement("div");
        profilePic.classList.add("profile-pic");
        const img = document.createElement("img");
        img.src = e.target.result; // Use the uploaded image as profile pic
        profilePic.appendChild(img);

        // Create Story Name
        const name = document.createElement("p");
        name.classList.add("name");
        name.textContent = "New Story"; // Default story name

        // Append Profile Pic and Name to Story
        newStory.appendChild(profilePic);
        newStory.appendChild(name);

        // Add New Story at the Beginning of Stories List
        storiesContainer.prepend(newStory);

        // Auto-scroll to show the newly added story
        const middleContainer = document.querySelector(".middle");
        middleContainer.scrollLeft = 0; // Scroll to the start
    };
    reader.readAsDataURL(file); // Read file as Data URL
}


// // Function to Replace the First Story Instead of Shifting Others
function addStory(event) {
    const file = event.target.files[0]; // Get the selected file
    if (!file) return; // If no file is selected, exit function

    const reader = new FileReader(); // Create FileReader to read file data
    reader.onload = function(e) {
        const storiesContainer = document.getElementById("storiesContainer");
        const firstStory = storiesContainer.firstElementChild; // Get the first story

        if (firstStory) {
            // If there is an existing first story, replace its content
            firstStory.style.backgroundImage = `url(${e.target.result})`; // Update background image
            
            const profilePic = firstStory.querySelector("./images/my-profile-pic.jpeg");
            if (profilePic) {
                profilePic.src = e.target.result; // Update profile picture
            }

            const name = firstStory.querySelector(".name");
            if (name) {
                name.textContent = "New Story"; // Change name if needed
            }
        } else {
            // If no story exists, create a new one
            const newStory = document.createElement("div");
            newStory.classList.add("story");
            newStory.style.backgroundImage = `url(${e.target.result})`; // Set uploaded file as background

            // Create Profile Picture Container
            const profilePic = document.createElement("div");
            profilePic.classList.add("profile-pic");
            const img = document.createElement("img");
            img.src = e.target.result; // Use the uploaded image as profile pic
            profilePic.appendChild(img);

            // Create Story Name
            const name = document.createElement("p");
            name.classList.add("name");
            name.textContent = "New Story"; // Default story name

            // Append Profile Pic and Name to Story
            newStory.appendChild(profilePic);
            newStory.appendChild(name);

            // Append the new story to the container
            storiesContainer.appendChild(newStory);
        }
    };
    reader.readAsDataURL(file); // Read file as Data URL
}
