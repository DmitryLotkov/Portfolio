import {
    faAngular,
    faNodeJs,
    faDocker,
    faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase,
    faShieldAlt,
    faBolt,
} from '@fortawesome/free-solid-svg-icons';
import ReactLogo from '@/shared/assets/icons/react.svg';
import SassLogo from '@/shared/assets/icons/sass.svg';
import JestLogo from '@/shared/assets/icons/jest.svg';
import RestAPI from '@/shared/assets/icons/rest.svg';
import TSLogo from '@/shared/assets/icons/typescript.svg';
import {SkillsDataType} from './types';

export const skillsData: SkillsDataType = {
    frontend: [
        {
            picture: faAngular,
            skill: 'Angular Ecosystem',
            skillDescription:
                'Production and Enterprise SPA development across Angular 7–22. Deep experience with Reactive Forms, Signals, RxJS stream orchestration, NgRx store/effects, PWA / Service Workers, standalone components, Route Guards (RBAC) and Angular Material.',
            tags: ['Angular 7–22', 'RxJS', 'NgRx', 'Signals', 'Route Guards (RBAC)', 'Angular Material', 'PrimeNG', 'Zoneless'],
        },
        {
            picture: ReactLogo,
            skill: 'React Ecosystem',
            skillDescription:
                'Building robust React 17–19 SPA and PWA applications with Redux Toolkit, RTK Query, TanStack Query, Zustand, React Router, custom hooks architecture, Context API, performance optimization, and modern component composition.',
            tags: ['React 17–19', 'Redux Toolkit', 'RTK Query', 'TanStack Query', 'Zustand', 'React Router', 'Context API', 'Axios'],
        },
        {
            picture: TSLogo,
            skill: 'TypeScript & Modern JS',
            skillDescription:
                'Strict type safety, complex generics, utility types, mapped types, modern ESNext features, OOP, functional programming paradigms, and clean architectural principles (SOLID, DRY).',
            tags: ['TypeScript 3+', 'Generics', 'FSD Architecture', 'SOLID', 'Design Patterns'],
        },
        {
            picture: SassLogo,
            skill: 'UI Architecture & Styling',
            skillDescription:
                'Modular, scalable styling systems using SCSS modules, BEM, CSS Variables, Material UI customization, design tokens, and Pixel Perfect responsive layouts.',
            tags: ['SCSS/SASS', 'CSS Modules', 'Material UI', 'Adaptive Layout', 'Design Tokens'],
        },
        {
            picture: JestLogo,
            skill: 'Testing & Quality Assurance',
            skillDescription:
                'Comprehensive testing pyramid with Unit, Integration, and Component tests using Jest, Vitest, and Storybook visual documentation.',
            tags: ['Jest', 'Vitest', 'Storybook', 'TDD', 'Karma/Jasmine'],
        },
        {
            picture: faBolt,
            skill: 'Web Performance & Standards',
            skillDescription:
                'Deep understanding of DOM/BOM APIs, Web Vitals metrics, responsive and cross-browser layouts, Service Workers for offline caching, SEO optimization, and bundle splitting.',
            tags: ['Web Vitals', 'DOM APIs', 'PWA', 'Service Workers', 'SEO', 'Performance'],
        },
    ],
    backend: [
        {
            picture: faNodeJs,
            skill: 'Node.js & NestJS',
            skillDescription:
                'Server-side development with NestJS and Express. Modular architecture, dependency injection, decorators, middleware, and interceptors for production-ready backend services.',
            tags: ['Node.js', 'NestJS', 'Express', 'Modular Architecture', 'RESTful API', 'WebSockets'],
        },
        {
            picture: faDatabase,
            skill: 'Databases & ORM',
            skillDescription:
                'Relational and NoSQL database design with PostgreSQL, MongoDB. Schema modeling, migrations, and query optimization via Prisma ORM.',
            tags: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Migrations'],
        },
        {
            picture: RestAPI,
            skill: 'API Design & Protocols',
            skillDescription:
                'Designing robust RESTful APIs, GraphQL endpoints, real-time WebSockets communication, API versioning, validation with Valibot, and Swagger/OpenAPI documentation.',
            tags: ['REST API', 'GraphQL', 'WebSockets', 'Swagger/OpenAPI', 'Valibot', 'Postman'],
        },
        {
            picture: faDocker,
            skill: 'DevOps & Build Tooling',
            skillDescription:
                'Containerization with Docker & Docker Compose, project builds with Vite, Webpack, and Angular CLI, environment configuration, and dev-server optimizations.',
            tags: ['Docker', 'Docker Compose', 'Vite', 'Webpack', 'Angular CLI'],
        },
        {
            picture: faShieldAlt,
            skill: 'Security & Auth',
            skillDescription:
                'Secure user authentication and enterprise authorization implementing Keycloak, OAuth2 integrations, JWT tokens, Refresh/Access token rotation, CORS policies, and XSS/CSRF protection.',
            tags: ['Keycloak', 'OAuth2', 'JWT', 'Token Rotation', 'CORS'],
        },
        {
            picture: faGitAlt,
            skill: 'Version Control & Workflows',
            skillDescription:
                'Advanced Git workflows (GitFlow, trunk-based development), branch management, rebase/merge strategies, code reviews, semantic versioning, and team collaboration.',
            tags: ['Git', 'GitHub', 'GitFlow', 'Code Review', 'Semantic Versioning'],
        },
    ],
};
