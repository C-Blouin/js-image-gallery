/*
JavaScript Assignment 2 - Image Gallery

Christopher Blouin
*/

// variables to attach query selectors to.
const focusImage = document.querySelector("#focusImage img");
const figure = document.querySelector("figure");
const listImages = document.querySelector("#thumbImages");
const focusImageContainer = document.querySelector("#figureContainer");

/* 
Create DOM elements that will hold text content, image references to be used later in the document.
The reason the elements are created outside the loop is that I don't want five elements to be generated when appending to the DOM.
*/
const figcaption = document.createElement("figcaption");
const focusImageAnchor = document.createElement("a");
const photoAnchor = document.createElement("a");
const photographerAnchor = document.createElement("a");
const originalPhotoDiv = document.createElement("div");
const photographerDiv = document.createElement("div");

// Array to hold the image sources from the images folder.
const thumbImages = [
  "images/gallery-image-1.jpg",
  "images/gallery-image-2.jpg",
  "images/gallery-image-3.jpg",
  "images/gallery-image-4.jpg",
  "images/gallery-image-5.jpg"
];

// Array that will hold the original photograph links that will be injected into the anchor elements based on the loop index.
const imageReference = [
  "https://unsplash.com/photos/RwHv7LgeC7s",
  "https://unsplash.com/photos/zLrqHNms8eE",
  "https://unsplash.com/photos/6cf1-07togI",
  "https://unsplash.com/photos/M9lslW1ueLo",
  "https://unsplash.com/photos/SDivo1PTBDs"
];

// Array of links for the original photographer.
const photographerReference = [
  "https://unsplash.com/@jplenio",
  "https://unsplash.com/@hyneseyes",
  "https://unsplash.com/@elevatedtv",
  "https://unsplash.com/@carca",
  "https://unsplash.com/@itfeelslikefilm"
];

// photographer socials that will be added to text content based on the array index.
const photographerSocials = [
  "@jplenio",
  "@hyneseyes",
  "@elevatedtv",
  "@carca",
  "@itfeelslikefilm"
];

// Array holding photographer names.
const photographers = [
  "Johannes Plenio",
  "Jeremy Hynes",
  "Ryan Pohanic",
  "Enrico Carcasci",
  "Janko Ferlič"
];

// Array to hold image captions for the focusImage.
const captions = [
  "Mystery Forest Light",
  "Owl Resting in the Snow",
  "Ice Covered Creek",
  "Koala Sleeping in Tree",
  "Brown Bear Cub Exploring"
];

// Array to hold the image attributes
const imageAttributes = [
  "Autumn forest scenery",
  "Snowy owl resting on tree branch",
  "Creek covered in ice",
  "Koala sleeping in tree",
  "Brown bear cub exploring forest"
];

// For loop to iterate through the thumbImages array, keep iterating through based on the length of the array, this way we can keep adding images
for (let i = 0; i < thumbImages.length; i++) {
  //Create list item elements, depending on the length of the thumbImages length, we will generate 5 li elements since the array contains 5 images.
  const newListItem = document.createElement("li");
  // Dynamically create image elements in the document based on the length of the array. In this case we will generate 5 image elements in the html document.
  const newThumbImage = document.createElement("img");
  
  // Set the newThumbImage source equal to each index of the thumbImages Array.
  newThumbImage.src = thumbImages[i];
  // Select the thumImages array, and append (render/add) each image child to the the unordered list with the ID of thumbImages.
  listImages.appendChild(newThumbImage);
  // Each appended thumbImage will have a width of 240px and height of 160px.
  newThumbImage.width = 160;
  newThumbImage.height = 100;

  // Target the newly created thumbImages, assign the setAttribute method, the first argument is the title or alt attributes, and they will contain the values of whatever index value in the associated arrays.
  newThumbImage.setAttribute("title", imageAttributes[i]);
  newThumbImage.setAttribute("alt", imageAttributes[i]);
  
  // Attach the img elements to each list item using the appendChild method.
  newListItem.appendChild(newThumbImage);
  // Call the variable listImages which is attached to the ul html element with ID thumbImages, and attach each li element to the ul element using the appendChild method.
  listImages.appendChild(newListItem);

  // Attach the focus image anchor created element to the figure element, 
  figure.appendChild(focusImageAnchor);
  // Append the focus image to the created focus image anchor element.
  focusImageAnchor.appendChild(focusImage);

  /* 
  I was having difficulties positioning the created figcaption element after my created focused image, so I used this reference to point me in the right direction. 
  
  https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentElement
  */
  focusImageAnchor.insertAdjacentElement('afterend', figcaption);

  /* 
  If statement that will set the descriptive content and link elements for the first index of the thumbImages array. 
  
  IF the thumbImages array is equal to the first index, display the first index text content for the caption and anchor captions.
  */
  if (thumbImages[i] == thumbImages[0]){

    // Set title and alt attributes the first image in focus. In this case it's the autumn forest.
    focusImage.setAttribute("title", imageAttributes[i]);
    focusImage.setAttribute("alt", imageAttributes[i]);

    // Set the text contents of the first index, as well the reference link to the corresponding url index.
    figcaption.textContent = `${captions[0]}`;
    photoAnchor.href = imageReference[0]; 
    photoAnchor.textContent = `Photo By ${photographers[0]} From Unsplash`;
    photoAnchor.target = "_blank";
    photoAnchor.setAttribute("title", "Original Photograph")

     // Update the href, textContent, and title attributes of the original photographer reference link.
    photographerAnchor.href = photographerReference[0];
    photographerAnchor.textContent = `Orginal Photographer: ${photographerSocials[0]}`;
    photographerAnchor.target = "_blank";
    photographerAnchor.setAttribute("title", "Original Photographer");

    // Set the anchor element that wraps the focus image to the current index of the imageReference array
    focusImageAnchor.href = imageReference[i];
    // Open in new tab using _blank
    focusImageAnchor.target = "_blank";
  }


  // Add an event listener to each of the thumbImages, listening for a click that executes an event invoking the function changeImage.
  newThumbImage.addEventListener("click", function (event) {

    // On each thumbnail image click, invoke the changeImage function.
    changeImage(event);

    // On each thumbnail click, the title attribute of the focus image will change to the current imageTitle index.
    focusImage.setAttribute("title", captions[i]);
    figcaption.textContent = `${captions[i]}`;

    // Update the href, textContent, and title attributes of the current photo reference link.
    // Using the created anchor element, set the hyperlink reference to the array index that holds the hyperlinks
    photoAnchor.href = imageReference[i]; 
    photoAnchor.textContent = `Photo By ${photographers[i]} From Unsplash`;
    photoAnchor.target = "_blank";
    photoAnchor.setAttribute("title", "Original Photograph")

     // Update the href, textContent, and title attributes of the original photographer reference link.
    photographerAnchor.href = photographerReference[i];
    photographerAnchor.textContent = `Orginal Photographer: ${photographerSocials[i]}`;
    photographerAnchor.target = "_blank";
    photographerAnchor.setAttribute("title", "Original Photographer");

    // Set the anchor element that wraps the focus image to the current index of the imageReference array
    focusImageAnchor.href = imageReference[i];
    // Open in new tab using _blank
    focusImageAnchor.target = "_blank";
  });
  
  // Attach two div elements to the image container div element using the appendChild() method.
  focusImageContainer.appendChild(originalPhotoDiv);
  focusImageContainer.appendChild(photographerDiv);
  
  // Attach the anchor elements for the photo references to the respect div elements.
  originalPhotoDiv.appendChild(photoAnchor);
  photographerDiv.appendChild(photographerAnchor);
  
  // Target the individual thumbnail images, add an event listener for on mouseover with a function that will alter the individual image styles when hovered on.
  newThumbImage.addEventListener("mouseover", function(){
    newThumbImage.style.cssText = "cursor: pointer; filter: none; box-shadow: 0px 0px 8px 3px #363636; scale: 1.08; transition: 0.2s;";
  });

  // Create an addition event listener so that when the user hovers off the images (mouseout), the styles are cleared, that way the previous hovered image will not have a static style applied.
  newThumbImage.addEventListener("mouseout", function(){
   newThumbImage.style.cssText = "";
  });

}

/*
Referenced the image gallery lesson during Week 6 regarding passing events.

Function with a passed in event object, create a variable of imageSrc that takes the passed object and targets the source.
*/
function changeImage(event) {
  let imageSrc = event.target.src;
  // Call the focusImage variable and set the source attribute to whatever the imageSrc variables target is.
  focusImage.setAttribute("src", imageSrc);
  console.log(focusImage);
}



