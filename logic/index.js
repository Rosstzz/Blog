const logoPath = "M28.941 23.575C26.7658 23.47 24.7989 25.1129 24.6544 27.3325C24.5066 29.5547 26.1863 31.4695 28.4035 31.4695C41.7621 32.341 53.3301 43.9143 54.2035 57.2695C54.3426 59.4011 56.1167 61.0371 58.2247 61.0371C58.3113 61.0371 58.4005 61.0318 58.4897 61.0266C60.7103 60.8848 62.395 58.9639 62.2505 56.7434C61.1406 39.6496 46.1914 24.7004 28.941 23.575ZM37.625 0C34.652 0 32.25 2.40363 32.25 5.375C32.25 8.34637 34.657 10.75 37.625 10.75C58.3691 10.75 75.25 27.6309 75.25 48.375C75.25 51.3464 77.657 53.75 80.625 53.75C83.593 53.75 86 51.3464 86 48.375C86 21.7016 64.2984 0 37.625 0ZM28.941 38.0953C26.4887 37.6082 24.1875 39.607 24.1875 42.093V50.5536C24.1875 52.2752 25.3846 53.6391 27.001 54.0977C30.0462 55.2315 32.2517 58.1928 32.2517 61.5051C32.2517 65.9563 28.6404 69.4164 24.1875 69.4164C19.7363 69.4164 16.1233 65.8051 16.1233 61.5051V20.1562C16.1233 17.9307 14.3177 16.2762 12.0904 16.2762L4.02621 16.2774C1.80566 16.1284 0 17.9391 0 20.1562V61.6613C0 76.6945 13.797 88.5699 29.3945 85.2945C38.5287 83.3629 45.9008 75.9723 47.8375 66.8684C50.7602 53.0949 41.6227 40.6148 28.941 38.0953Z"

const logo = anime({
  targets: '#brand-logo__target',
  d: [{value: logoPath}],
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  duration: 2000
});
