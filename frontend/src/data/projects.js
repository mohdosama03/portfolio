// Update liveUrl / sourceUrl here when your projects are deployed.
// '#' keeps the button visible but inactive.
// category must be 'frontend' or 'fullstack' (used by the filter buttons).
export const projects = [
  {
    id: 1,
    category: 'fullstack',
    thumbClass: 'project-thumb-1',
    icon: 'fa-solid fa-cart-shopping',
    title: 'E-Commerce Website',
    description:
      'A responsive online shopping platform with product listings, a dynamic shopping cart, and a clean, modern UI built for a smooth buying experience.',
    features: [
      'Responsive product listing',
      'Shopping cart functionality',
      'Modern, conversion-focused UI',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 2,
    category: 'frontend',
    thumbClass: 'project-thumb-2',
    icon: 'fa-solid fa-list-check',
    title: 'To-Do List Application',
    description:
      'A productivity app to add, edit, delete, and complete tasks — with all data persisted locally using LocalStorage so nothing is lost on refresh.',
    features: [
      'Add, edit & delete tasks',
      'Mark tasks as completed',
      'LocalStorage persistence',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 3,
    category: 'fullstack',
    thumbClass: 'project-thumb-3',
    icon: 'fa-solid fa-hospital',
    title: 'Hospital Management System',
    description:
      'A full-stack system to manage patients and doctors, book appointments, and monitor hospital operations through an admin dashboard.',
    features: [
      'Patient & doctor management',
      'Appointment booking',
      'Hospital dashboard',
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB / MySQL'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];
