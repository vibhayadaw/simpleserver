console.log('Hello')
// localStorage.setItem('breakfast','cereal');
console.log(localStorage.getItem('breakfast'));

sessionStorage.setItem('breakfast','eggs');
console.log(sessionStorage.getItem('breakfast'));

sessionStorage.removeItem('breakfast')

// document.cookie = 'person=beau';
// document.cookie = "username=John Doe ";
document.cookie = "username=John Doe; expires=Thu, 16 Jan 2020 12:00:00 UTC; path=/";


// const clearLocalStorage = () => {
 
  
// }
// clearLocalStorage()

localStorage.removeItem('http://localhost:3000/')