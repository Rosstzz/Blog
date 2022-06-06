/* Logo animation */
const logoPath = "M28.941 23.575C26.7658 23.47 24.7989 25.1129 24.6544 27.3325C24.5066 29.5547 26.1863 31.4695 28.4035 31.4695C41.7621 32.341 53.3301 43.9143 54.2035 57.2695C54.3426 59.4011 56.1167 61.0371 58.2247 61.0371C58.3113 61.0371 58.4005 61.0318 58.4897 61.0266C60.7103 60.8848 62.395 58.9639 62.2505 56.7434C61.1406 39.6496 46.1914 24.7004 28.941 23.575ZM37.625 0C34.652 0 32.25 2.40363 32.25 5.375C32.25 8.34637 34.657 10.75 37.625 10.75C58.3691 10.75 75.25 27.6309 75.25 48.375C75.25 51.3464 77.657 53.75 80.625 53.75C83.593 53.75 86 51.3464 86 48.375C86 21.7016 64.2984 0 37.625 0ZM28.941 38.0953C26.4887 37.6082 24.1875 39.607 24.1875 42.093V50.5536C24.1875 52.2752 25.3846 53.6391 27.001 54.0977C30.0462 55.2315 32.2517 58.1928 32.2517 61.5051C32.2517 65.9563 28.6404 69.4164 24.1875 69.4164C19.7363 69.4164 16.1233 65.8051 16.1233 61.5051V20.1562C16.1233 17.9307 14.3177 16.2762 12.0904 16.2762L4.02621 16.2774C1.80566 16.1284 0 17.9391 0 20.1562V61.6613C0 76.6945 13.797 88.5699 29.3945 85.2945C38.5287 83.3629 45.9008 75.9723 47.8375 66.8684C50.7602 53.0949 41.6227 40.6148 28.941 38.0953Z";

const logo = anime({
  targets: '#brand-logo__target',
  d: [{value: logoPath}],
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  duration: 2000,
});

/* Wave animation */
const wavePath_2_1 = "M0 752L28.6667 749.733C57.3333 747.6 114.667 743.067 171.733 742C228.933 740.933 285.733 743.067 342.933 748.267C400 753.333 457.333 761.333 514.4 762.933C571.6 764.4 628.4 759.6 685.6 755.333C742.667 751.067 800 747.6 857.067 746C914.267 744.4 971.067 744.933 1028.27 748C1085.33 751.067 1142.67 756.933 1171.33 759.733L1200 762.667V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V752Z";
const wavePath_2_2 = "M0 760L28.6667 763.067C57.3333 766.267 114.667 772.4 171.733 773.333C228.933 774.267 285.733 769.733 342.933 765.6C400 761.333 457.333 757.333 514.4 758.933C571.6 760.4 628.4 767.6 685.6 771.6C742.667 775.6 800 776.4 857.067 774.4C914.267 772.4 971.067 767.6 1028.27 764.933C1085.33 762.267 1142.67 761.733 1171.33 761.6L1200 761.333V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V760Z";
const wavePath_2_3 = "M0 778.667L28.6667 778.4C57.3333 778.267 114.667 777.733 171.733 779.067C228.933 780.4 285.733 783.6 342.933 784.933C400 786.267 457.333 785.733 514.4 785.067C571.6 784.4 628.4 783.6 685.6 781.733C742.667 780 800 777.333 857.067 776.933C914.267 776.4 971.067 778.267 1028.27 780C1085.33 781.733 1142.67 783.6 1171.33 784.4L1200 785.333V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V778.667Z";

const wavePath_3_1 = "M0 746.667L28.6667 748.267C57.3333 749.733 114.667 752.933 171.733 754C228.933 755.067 285.733 754.267 342.933 752.4C400 750.667 457.333 748 514.4 747.6C571.6 747.067 628.4 748.933 685.6 753.733C742.667 758.667 800 766.667 857.067 767.6C914.267 768.4 971.067 762.267 1028.27 757.733C1085.33 753.333 1142.67 750.667 1171.33 749.333L1200 748V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V746.667Z";
const wavePath_3_2 = "M0 781.333L28.6667 779.6C57.3333 777.733 114.667 774.267 171.733 770C228.933 765.733 285.733 760.933 342.933 758.933C400 756.933 457.333 757.733 514.4 760.267C571.6 762.667 628.4 766.667 685.6 767.067C742.667 767.6 800 764.4 857.067 765.333C914.267 766.267 971.067 771.067 1028.27 773.067C1085.33 775.067 1142.67 774.267 1171.33 773.733L1200 773.333V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V781.333Z";
const wavePath_3_3 = "M0 774.667L28.6667 776.267C57.3333 777.733 114.667 780.933 171.733 782.267C228.933 783.6 285.733 783.067 342.933 783.6C400 784 457.333 785.333 514.4 784.667C571.6 784 628.4 781.333 685.6 781.333C742.667 781.333 800 784 857.067 784.933C914.267 785.733 971.067 784.933 1028.27 782.4C1085.33 780 1142.67 776 1171.33 774L1200 772V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V774.667Z";

const wavePath_4_1 = "M0 761.333L28.6667 760.267C57.3333 759.067 114.667 756.933 171.733 757.067C228.933 757.333 285.733 760 342.933 760.933C400 761.733 457.333 760.933 514.4 761.333C571.6 761.733 628.4 763.6 685.6 764C742.667 764.4 800 763.6 857.067 759.733C914.267 756 971.067 749.333 1028.27 746.4C1085.33 743.6 1142.67 744.4 1171.33 744.933L1200 745.333V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V761.333Z";
const wavePath_4_2 = "M0 770.667L28.6667 768C57.3333 765.333 114.667 760 171.733 757.067C228.933 754.267 285.733 753.733 342.933 754.667C400 755.6 457.333 757.733 514.4 762C571.6 766.267 628.4 772.4 685.6 775.733C742.667 779.067 800 779.6 857.067 778.667C914.267 777.733 971.067 775.6 1028.27 775.733C1085.33 776 1142.67 778.667 1171.33 780L1200 781.333V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V770.667Z";
const wavePath_4_3 = "M0 778.667L28.6667 779.6C57.3333 780.4 114.667 782.267 171.733 781.067C228.933 780 285.733 776 342.933 775.733C400 775.6 457.333 779.067 514.4 779.733C571.6 780.4 628.4 778.267 685.6 778.667C742.667 779.067 800 782.267 857.067 782.667C914.267 783.067 971.067 780.933 1028.27 780C1085.33 779.067 1142.67 779.6 1171.33 779.733L1200 780V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V778.667Z";

const wavePath_5_1 = "M0 757.333L28.6667 756C57.3333 754.667 114.667 752 171.733 749.733C228.933 747.6 285.733 745.733 342.933 748.4C400 751.067 457.333 758.267 514.4 762.933C571.6 767.6 628.4 769.733 685.6 769.067C742.667 768.4 800 764.933 857.067 764.267C914.267 763.6 971.067 765.733 1028.27 763.733C1085.33 761.733 1142.67 755.6 1171.33 752.4L1200 749.333V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V757.333Z";
const wavePath_5_2 = "M0 769.333L28.6667 769.067C57.3333 768.933 114.667 768.4 171.733 769.067C228.933 769.733 285.733 771.6 342.933 770C400 768.4 457.333 763.6 514.4 760.933C571.6 758.267 628.4 757.733 685.6 757.067C742.667 756.4 800 755.6 857.067 757.333C914.267 759.067 971.067 763.6 1028.27 767.333C1085.33 771.067 1142.67 774.267 1171.33 775.733L1200 777.333V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V769.333Z";
const wavePath_5_3 = "M0 785.333L28.6667 782.933C57.3333 780.4 114.667 775.6 171.733 772.933C228.933 770.267 285.733 769.733 342.933 769.6C400 769.333 457.333 769.333 514.4 770.667C571.6 772 628.4 774.667 685.6 775.333C742.667 776 800 774.667 857.067 776.267C914.267 777.733 971.067 782.267 1028.27 784.4C1085.33 786.667 1142.67 786.667 1171.33 786.667H1200V801.333H1171.33C1142.67 801.333 1085.33 801.333 1028.27 801.333C971.067 801.333 914.267 801.333 857.067 801.333C800 801.333 742.667 801.333 685.6 801.333C628.4 801.333 571.6 801.333 514.4 801.333C457.333 801.333 400 801.333 342.933 801.333C285.733 801.333 228.933 801.333 171.733 801.333C114.667 801.333 57.3333 801.333 28.6667 801.333H0V785.333Z";

waveAnimation('#wave__target_1_1', wavePath_2_1, wavePath_3_1, wavePath_4_1, wavePath_5_1);
waveAnimation('#wave__target_1_2', wavePath_2_2, wavePath_3_2, wavePath_4_2, wavePath_5_2);
waveAnimation('#wave__target_1_3', wavePath_2_3, wavePath_3_3, wavePath_4_3, wavePath_4_3);

function waveAnimation(target, path1, path2, path3, path4) {
  anime({
    targets: target,
    d: [
      {value: path1},
      {value: path2},
      {value: path3},
      {value: path4}
    ],
    duration: 5000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
  });
}

/* theme toggler animation */
const sunPath = "M32 49C41.3888 49 49 41.3888 49 32C49 22.6112 41.3888 15 32 15C22.6112 15 15 22.6112 15 32C15 41.3888 22.6112 49 32 49Z";
const moonPath = "M32 49C32 49 25.5 41.3888 25.5 32C25.5 22.6112 32 15 32 15C22.6112 15 15 22.6112 15 32C15 41.3888 22.6112 49 32 49Z";

themeToggler.addEventListener('click', themeTogglerAnimation);

let reverseFlag = false;
function themeTogglerAnimation() {
  anime({
    targets: '#toggler__target',
    d: [
      {value: reverseFlag ? sunPath : moonPath}
    ],
    rotate: -45,
    duration: 200,
    easing: 'easeOutQuint'
  });

  reverseFlag = !reverseFlag;
}

/* brand title animation */
const title = 'blogger';
const title_splited = title.split('');
brand_title.addEventListener('click', brandTitleAnimation);

function createSpanElem(text, target = '') {
  const span = document.createElement('span');
  if (text === target) {
    span.className = 'targetLetter';
  }
  span.append(text);
  return span;
}

for (const item of title_splited) {
  const singleLetter = createSpanElem(item, 'g');
  brand_title.append(singleLetter);
}

function brandTitleAnimation() {
  anime({
    targets: '.targetLetter',
    color: [
      {value: '#ffdb11'},
      {value: '#ff4500'}
    ],
    duration: 200,
    delay: anime.stagger(100),
    easing: 'easeOutQuint'
  });
}

/* Theme changing animation */
themeToggler.addEventListener('click', themeChangingAnimation);

function themeChangingAnimation() {
  const currentMode = this.getAttribute('data-mode');
  if (currentMode === 'sun') {
    applyLightTheme();
    this.setAttribute('data-mode', 'moon');
  }
  else {
    applyDarkTheme();
    this.setAttribute('data-mode', 'sun');
  }
}

function toggleMode(wave, color) {
  anime({
    targets: wave,
    fill: color,
    background: color,
    duration: 2000,
    easing: 'easeInOutSine'
  });
}

function applyLightTheme() {
  toggleMode('#wave__target_1_1', '#0077ff');
  toggleMode('#wave__target_1_2', '#1164ff');
  toggleMode('#wave__target_1_3', '#0a57ff');
  toggleMode('body', '#184eff');
}

function applyDarkTheme() {
  toggleMode('#wave__target_1_1', '#0E1E3A');
  toggleMode('#wave__target_1_2', '#06182E');
  toggleMode('#wave__target_1_3', '#001122');
  toggleMode('body', '#000d19');
}





