export const skills = [
  {
    icon: '⬡',
    cat: 'Languages',
    name: 'JavaScript / TypeScript',
    tags: ['ES6+', 'TypeScript', 'Async/Await', 'Closures'],
  },
  {
    icon: '◈',
    cat: 'Frontend',
    name: 'React.js Ecosystem',
    tags: ['Redux Toolkit', 'MUI', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    icon: '▣',
    cat: 'Backend',
    name: 'Node.js / Express.js',
    tags: ['REST APIs', 'Socket.io', 'WebSockets', 'Microservices'],
  },
  {
    icon: '◎',
    cat: 'Databases',
    name: 'MongoDB / MySQL',
    tags: ['Schema Design', 'Indexing', 'Query Optimization', 'Aggregation'],
  },
  {
    icon: '⬖',
    cat: 'Async / Queue',
    name: 'Redis / BullMQ',
    tags: ['Job Queues', 'Caching', 'Dead-Letter Queues', 'Rate Limiting'],
  },
  {
    icon: '◫',
    cat: 'Cloud & DevOps',
    name: 'Docker / AWS / CI/CD',
    tags: ['GitHub Actions', 'AWS S3', 'Vercel', 'Render'],
  },
  {
    icon: '◬',
    cat: 'API & Docs',
    name: 'REST / Swagger / JWT',
    tags: ['OpenAPI', 'Swagger', 'JWT Auth', 'Role-based Auth'],
  },
  {
    icon: '▦',
    cat: 'Architecture',
    name: 'Microservices & Patterns',
    tags: ['Retry Strategies', 'DLQ', 'Background Workers', 'Event Streaming'],
  },
  {
    icon: '◉',
    cat: 'Tools',
    name: 'Dev Tooling',
    tags: ['Git', 'Postman', 'JIRA', 'Code Review', 'Agile/Scrum'],
  },
];

export const projects = [
  {
    num: '01',
    badge: 'Live ↗',
    name: 'HDFC Premier Moments',
    desc: 'Enterprise concierge platform serving real banking customers across India. 35% page load reduction via Redis caching and React lazy loading with code splitting.',
    stack: ['Node.js', 'React.js', 'MongoDB', 'MySQL', 'Redis', 'Redux Toolkit'],
    link: 'https://hdfcbankpremiermoments.com/',
    highlight: true,
  },
  {
    num: '02',
    badge: 'Microservice · Production',
    name: 'Notification Microservice',
    desc: 'Async notification engine with BullMQ job queues, retry strategies, and dead-letter queues. 90% reduction in delivery failures under high load.',
    stack: ['Node.js', 'BullMQ', 'Redis', 'REST APIs', 'Microservices'],
    link: null,
    highlight: false,
  },
  {
    num: '03',
    badge: 'Banking · Microservice',
    name: 'GyFTR Gift Card Service',
    desc: 'Standalone microservice for secure gift card transactions in banking apps. JWT auth, Redis rate limiting, full Swagger/OpenAPI docs. 99.5% transaction success rate.',
    stack: ['Node.js', 'Express.js', 'Redis', 'JWT', 'Swagger', 'OpenAPI'],
    link: null,
    highlight: false,
  },
  {
    num: '04',
    badge: 'Live ↗',
    name: 'Quickvee Platform',
    desc: 'Real-time e-commerce with live order tracking and push notifications. Dockerized with GitHub Actions CI/CD pipeline and complete OpenAPI documentation.',
    stack: ['MERN Stack', 'Socket.io', 'Docker', 'JWT', 'GitHub Actions'],
    link: 'https://quickvee.com/',
    highlight: false,
  },
  {
    num: '05',
    badge: 'Live ↗',
    name: 'Takecutfilms',
    desc: 'Full-stack production house website with admin panel. React, Redux Toolkit, Node.js, Express, MongoDB. Deployed on Vercel with GitHub Actions CI/CD.',
    stack: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://takecutfilms.vercel.app',
    highlight: false,
  },
  {
    num: '06',
    badge: 'Live ↗',
    name: 'Realtime Chatroom',
    desc: 'Multi-user WebSocket chat application supporting concurrent users with persistent session management.',
    stack: ['Node.js', 'Socket.io', 'Express.js', 'WebSockets'],
    link: 'https://newchatroom.onrender.com',
    highlight: false,
  },
];

export const contactLinks = [
  {
    icon: '@',
    label: 'Email',
    value: 'magdumsachin82@gmail.com',
    href: 'mailto:magdumsachin82@gmail.com',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sachin-magdum',
    href: 'https://www.linkedin.com/in/sachin-magdum-0061003a0/',
  },
  {
    icon: 'gh',
    label: 'GitHub',
    value: 'github.com/sachinmagdum',
    href: 'https://github.com/sachinmags5',
  },
];

export const stats = [
  { num: '3+',    label: 'Years exp'    },
  { num: '100K+', label: 'Users served' },
  { num: '30%',   label: 'API speedup'  },
  { num: '99.9%', label: 'Uptime'       },
];