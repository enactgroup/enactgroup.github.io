
   function searchBar() {
        var searchBar = document.getElementById('search-bar');
        searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') ? 'block' : 'none';
        const sea = document.getElementById('sea');
        sea.innerHTML = (sea.innerHTML === 'Cancel' || sea.innerHTML === '') ? 'search' : 'Cancel';
      
    }




// Show loading progress
const loadingDiv = document.getElementById('loading');
loadingDiv.style.display = 'block';
setTimeout(() => {
loadingDiv.style.display = "none";

}, 2000);

  // Get the buttons
  const home = document.getElementById('showDiv1');
  const grade12 = document.getElementById('showDiv2');
  const grade11 = document.getElementById('showDiv3');
  const grade10 = document.getElementById('showDiv4');

  // Add event listeners to the buttons
  home.addEventListener('click', () => {
document.getElementById('div2').classList.add('hidden');
document.getElementById('div1').classList.remove('hidden');
document.getElementById('div3').classList.add('hidden');
document.getElementById('div4').classList.add('hidden');
  
  });
  
  grade12.addEventListener('click', () => {
document.getElementById('div1').classList.add('hidden');
document.getElementById('div2').classList.remove('hidden');
document.getElementById('div3').classList.add('hidden');
document.getElementById('div4').classList.add('hidden');

  });

  grade11.addEventListener('click', () => {
document.getElementById('div1').classList.add('hidden');
document.getElementById('div2').classList.add('hidden');
document.getElementById('div3').classList.remove('hidden');
document.getElementById('div4').classList.add('hidden');


  
  });

   grade10.addEventListener('click', () => {
document.getElementById('div1').classList.add('hidden');
document.getElementById('div2').classList.add('hidden');
document.getElementById('div3').classList.add('hidden');
document.getElementById('div4').classList.remove('hidden');

  });