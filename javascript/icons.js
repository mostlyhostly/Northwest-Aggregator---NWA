export const listViewIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="icon icon-list-view">
  <path d="M4 6 L20 6 M12 6 L10 4 M12 6 L14 8" />
  <path d="M4 12 L20 12 M12 12 L10 10 M12 12 L14 14" />
  <path d="M4 18 L20 18 M12 18 L10 16 M12 18 L14 20" />
</svg>
`;

export const gridViewIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="icon icon-grid-view">
  <g transform="translate(3,3)">
    <path d="M0 0 L7 7 M0 7 L7 0" />
  </g>
  <g transform="translate(14,3)">
    <path d="M0 0 L7 7 M0 7 L7 0" />
  </g>
  <g transform="translate(14,14)">
    <path d="M0 0 L7 7 M0 7 L7 0" />
  </g>
  <g transform="translate(3,14)">
    <path d="M0 0 L7 7 M0 7 L7 0" />
  </g>
</svg>
`;

export const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="12" cy="12" r="5"/>
  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
</svg>
`;

export const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
</svg>
`;

export function setIcon(element, type) {
  switch (type) {
    case 'list':
      element.innerHTML = listViewIcon;
      break;
    case 'grid':
      element.innerHTML = gridViewIcon;
      break;
    case 'sun':
      element.innerHTML = sunIcon;
      break;
    case 'moon':
      element.innerHTML = moonIcon;
      break;
  }

  const svg = element.querySelector('svg');
  if (svg) {
    svg.classList.add("icon-animate");
    setTimeout(() => svg.classList.remove("icon-animate"), 400);
  }
}
