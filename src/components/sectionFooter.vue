<template>
    <footer class="footer">
      <div class="footer__logo-container">
        <div class="footer__logo">
          <svg width="46" height="46" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5901 6.5901C0 13.1802 0 23.7868 0 45V75C0 96.2132 0 106.82 6.5901 113.41C13.1802 120 23.7868 120 45 120H75C96.2132 120 106.82 120 113.41 113.41C120 106.82 120 96.2132 120 75V45C120 23.7868 120 13.1802 113.41 6.5901C106.82 0 96.2132 0 75 0H45C23.7868 0 13.1802 0 6.5901 6.5901ZM29.9508 37.5912C25.01 37.5912 21 33.5401 21 28.5456C21 23.551 25.01 19.5 29.9508 19.5C34.8917 19.5 38.9016 23.551 38.9016 28.5456C38.9016 33.5401 34.8968 37.5912 29.9508 37.5912ZM22.2787 100.5V44.0933H37.6229V100.5H22.2787ZM83.6557 100.5H99V65.8407C99 38.9039 70.342 39.8833 63.1967 53.144V44.0933H47.8525V100.5H63.1967V71.7634C63.1967 55.8003 83.6557 54.4927 83.6557 71.7634V100.5Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="60" y1="0" x2="60" y2="120" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0077B5"/>
                <stop offset="1" stop-color="#0E6795"/>
              </linearGradient>
            </defs>
          </svg>
          <h1 class="footer__title__logo-title">
          Linked<span class="logo-title-style">In</span>
          </h1>
        </div>
      </div>
      <nav class="navigation">
        <div class="navigation__header">
          <h2 class="footer__title">
            Navigation
          </h2>
        </div>
        <div class="navigation__body">
          <ul class="navigation__list">
            <li class="navigation__item"><router-link to="/" class="navigation__link">About</router-link></li>
            <li class="navigation__item"><router-link to="/" class="navigation__link">Careers</router-link></li>
            <li class="navigation__item"><router-link to="/" class="navigation__link">Advertising</router-link></li>
            <li class="navigation__item"><router-link to="/" class="navigation__link">Small Business</router-link></li>
          </ul>
          <ul class="navigation__list">
            <li class="navigation__item"><router-link to="/" class="navigation__link">Talent Solutions</router-link></li>
            <li class="navigation__item"><router-link to="/" class="navigation__link">Marketing Solutions</router-link></li>
            <li class="navigation__item"><router-link to="/" class="navigation__link">Sales Solutions</router-link></li>
            <li class="navigation__item"><router-link to="/" class="navigation__link">Safery Center</router-link></li>
          </ul>
          <ul class="navigation__list">
            <li class="navigation__item"><router-link to="/" class="navigation__link">Community Guideline</router-link></li>
            <li class="navigation__item"><router-link to="/" class="navigation__link">Privacy & Terms</router-link></li>
            <li class="navigation__item"><router-link to="/" class="navigation__link">Mobile App</router-link></li>
          </ul>
        </div>
      </nav>
      <div class="footer__gamburger" style="">
        <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
          <path
            class="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
          <path
            class="line middle"
            d="m 30,50 h 40" />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
        </svg>

      </div>
      <div class="footer__access">
        <div class="footer__header">
          <h2 class="footer__title">
            Fast access
          </h2>
        </div>
        <div class="footer__access-buttons">
          <button class="button">
            <span class="button__prepend"></span>
            <span class="button__body">Questions?</span>
            <span class="button__append"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99998C14.6668 4.31808 11.6821 1.33331 8.00016 1.33331C4.31826 1.33331 1.3335 4.31808 1.3335 7.99998C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.06006 5.99995C6.21679 5.5544 6.52616 5.17869 6.93336 4.93937C7.34056 4.70006 7.81932 4.61258 8.28484 4.69243C8.75036 4.77228 9.1726 5.0143 9.47678 5.37564C9.78095 5.73697 9.94743 6.1943 9.94672 6.66662C9.94672 7.99995 7.94672 8.66662 7.94672 8.66662" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11.3333H8.00667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 </span>
          </button>
          <button class="button">
            <span class="button__prepend"></span>
            <span class="button__body">Settings</span>
            <span class="button__append"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M8.57861 10.1519C9.68318 10.1519 10.5786 9.25643 10.5786 8.15186C10.5786 7.04729 9.68318 6.15186 8.57861 6.15186C7.47404 6.15186 6.57861 7.04729 6.57861 8.15186C6.57861 9.25643 7.47404 10.1519 8.57861 10.1519Z" stroke="#0275B1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5118 10.1519C13.423 10.353 13.3966 10.576 13.4358 10.7923C13.475 11.0085 13.5781 11.2081 13.7318 11.3652L13.7718 11.4052C13.8958 11.529 13.9941 11.6761 14.0612 11.838C14.1283 11.9998 14.1628 12.1733 14.1628 12.3485C14.1628 12.5238 14.1283 12.6973 14.0612 12.8591C13.9941 13.021 13.8958 13.168 13.7718 13.2919C13.648 13.4158 13.5009 13.5142 13.339 13.5813C13.1772 13.6484 13.0037 13.6829 12.8284 13.6829C12.6532 13.6829 12.4797 13.6484 12.3179 13.5813C12.156 13.5142 12.0089 13.4158 11.8851 13.2919L11.8451 13.2519C11.688 13.0982 11.4884 12.9951 11.2722 12.9559C11.0559 12.9167 10.8329 12.9431 10.6318 13.0319C10.4346 13.1164 10.2664 13.2567 10.148 13.4356C10.0295 13.6144 9.96597 13.824 9.96512 14.0385V14.1519C9.96512 14.5055 9.82464 14.8446 9.57459 15.0947C9.32454 15.3447 8.98541 15.4852 8.63178 15.4852C8.27816 15.4852 7.93902 15.3447 7.68897 15.0947C7.43893 14.8446 7.29845 14.5055 7.29845 14.1519V14.0919C7.29329 13.8712 7.22186 13.6572 7.09346 13.4777C6.96505 13.2981 6.78561 13.1614 6.57845 13.0852C6.37737 12.9965 6.15432 12.97 5.93806 13.0092C5.72179 13.0484 5.52224 13.1515 5.36512 13.3052L5.32512 13.3452C5.20129 13.4692 5.05423 13.5675 4.89237 13.6346C4.73051 13.7017 4.557 13.7363 4.38178 13.7363C4.20656 13.7363 4.03306 13.7017 3.8712 13.6346C3.70933 13.5675 3.56228 13.4692 3.43845 13.3452C3.31448 13.2214 3.21614 13.0743 3.14904 12.9125C3.08194 12.7506 3.0474 12.5771 3.0474 12.4019C3.0474 12.2267 3.08194 12.0532 3.14904 11.8913C3.21614 11.7294 3.31448 11.5824 3.43845 11.4585L3.47845 11.4185C3.63214 11.2614 3.73524 11.0619 3.77445 10.8456C3.81367 10.6293 3.78719 10.4063 3.69845 10.2052C3.61394 10.008 3.47362 9.83986 3.29476 9.72141C3.1159 9.60296 2.90631 9.5394 2.69178 9.53854H2.57845C2.22483 9.53854 1.88569 9.39807 1.63564 9.14802C1.38559 8.89797 1.24512 8.55883 1.24512 8.20521C1.24512 7.85159 1.38559 7.51245 1.63564 7.2624C1.88569 7.01235 2.22483 6.87188 2.57845 6.87188H2.63845C2.85911 6.86671 3.07312 6.79529 3.25265 6.66688C3.43218 6.53848 3.56893 6.35903 3.64512 6.15188C3.73386 5.9508 3.76033 5.72775 3.72112 5.51148C3.68191 5.29522 3.57881 5.09566 3.42512 4.93854L3.38512 4.89854C3.26115 4.77471 3.1628 4.62766 3.0957 4.4658C3.02861 4.30393 2.99407 4.13043 2.99407 3.95521C2.99407 3.77999 3.02861 3.60649 3.0957 3.44462C3.1628 3.28276 3.26115 3.13571 3.38512 3.01188C3.50895 2.88791 3.656 2.78956 3.81786 2.72246C3.97973 2.65536 4.15323 2.62083 4.32845 2.62083C4.50367 2.62083 4.67717 2.65536 4.83904 2.72246C5.0009 2.78956 5.14795 2.88791 5.27178 3.01188L5.31178 3.05188C5.4689 3.20557 5.66846 3.30867 5.88472 3.34788C6.10099 3.38709 6.32404 3.36062 6.52512 3.27188H6.57845C6.77563 3.18737 6.94379 3.04705 7.06225 2.86819C7.1807 2.68933 7.24426 2.47973 7.24512 2.26521V2.15188C7.24512 1.79825 7.38559 1.45912 7.63564 1.20907C7.88569 0.959018 8.22483 0.818542 8.57845 0.818542C8.93207 0.818542 9.27121 0.959018 9.52126 1.20907C9.77131 1.45912 9.91178 1.79825 9.91178 2.15188V2.21188C9.91264 2.4264 9.9762 2.63599 10.0947 2.81485C10.2131 2.99371 10.3813 3.13403 10.5784 3.21854C10.7795 3.30729 11.0026 3.33376 11.2188 3.29455C11.4351 3.25533 11.6347 3.15223 11.7918 2.99854L11.8318 2.95854C11.9556 2.83457 12.1027 2.73623 12.2645 2.66913C12.4264 2.60203 12.5999 2.56749 12.7751 2.56749C12.9503 2.56749 13.1238 2.60203 13.2857 2.66913C13.4476 2.73623 13.5946 2.83457 13.7184 2.95854C13.8424 3.08237 13.9408 3.22942 14.0079 3.39129C14.075 3.55315 14.1095 3.72665 14.1095 3.90188C14.1095 4.0771 14.075 4.2506 14.0079 4.41246C13.9408 4.57433 13.8424 4.72138 13.7184 4.84521L13.6784 4.88521C13.5248 5.04233 13.4217 5.24189 13.3824 5.45815C13.3432 5.67441 13.3697 5.89746 13.4584 6.09854V6.15188C13.543 6.34905 13.6833 6.51722 13.8621 6.63567C14.041 6.75412 14.2506 6.81769 14.4651 6.81854H14.5784C14.9321 6.81854 15.2712 6.95902 15.5213 7.20907C15.7713 7.45912 15.9118 7.79825 15.9118 8.15188C15.9118 8.5055 15.7713 8.84464 15.5213 9.09468C15.2712 9.34473 14.9321 9.48521 14.5784 9.48521H14.5184C14.3039 9.48606 14.0943 9.54963 13.9155 9.66808C13.7366 9.78653 13.5963 9.9547 13.5118 10.1519V10.1519Z" stroke="#0275B1" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<rect x="0.578613" y="0.151855" width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
</span>
          </button>
        </div>
      </div>
      <div class="footer__language">
          <div class="footer__header">
            <h2 class="footer__title">
              Language
            </h2>
          </div>
        <div class="footer__language-body">
          <div class="select-box">
            <div class="select-box__current" tabindex="1">
              <div class="select-box__value"><input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked" />
                <p class="select-box__input-text">ENGLISH</p>
              </div>
              <div class="select-box__value"><input class="select-box__input" type="radio" id="1" value="2" name="Ben" checked="checked" />
                <p class="select-box__input-text">RUSSIAN</p>
              </div>
              <img class="select-box__icon" src="../assets/chevron-down.svg" alt="Arrow Icon" aria-hidden="true" /></div>
            <ul class="select-box__list">
              <li><label class="select-box__option" for="0" aria-hidden="aria-hidden">ENGLISH</label></li>
              <li><label class="select-box__option" for="1" aria-hidden="aria-hidden">RUSSIAN</label></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
</template>

<script>
export default {
  name: 'sectionFooter'
}
</script>

<style scoped>

</style>
