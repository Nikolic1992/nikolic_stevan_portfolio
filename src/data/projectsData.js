const projectsData = [
  {
    id: 1,
    title: "Music Player 🎵📻",
    image: "/assets/music-player.png",
    mainDescription:
      "Modern music player that connects to Deezer API, allowing users to explore tracks, play music, and enjoy a dynamic UI with toast notifications, sliders, and smooth navigation.",
    description:
      "ZaMusic is a dynamic and elegant web-based music player built with React and styled-components. It connects to the Deezer API (via proxy) using Axios to fetch real-time music data. Users can browse top tracks, play/pause music, and navigate between tracks with a custom slider powered by rc-slider. The interface includes responsive design elements, toast notifications with react-toastify, loading states with react-loading-skeleton, and a carousel experience using Swiper. Error handling is implemented via react-error-boundary, ensuring stability. This project demonstrates integration with third-party APIs and a well-structured, interactive audio player interface.",
    live: "https://react-music-player-za-music.vercel.app/",
    github: "https://github.com/Nikolic1992/react-music-player-za-music",
  },
  {
    id: 2,
    title: "Travel Marvel ✈️🌍",
    image: "/assets/travel-marvel.png",
    mainDescription:
      "Smart and modern travel planner that helps users organize trips with ease. It allows users to log in, choose destinations, track expenses, and add images and documents — all designed to enhance the travel planning experience",
    description:
      "Travel Marvel is a sleek and interactive travel planning web app designed to help users organize their trips with ease. Built using React, TypeScript, and Redux Toolkit, it delivers a fast and responsive user interface. The app features smooth animations powered by Framer Motion and a clean design using Material UI components.Firebase is used for user authentication and real-time data storage, ensuring a secure and reliable experience. Forms are managed efficiently with React Hook Form, while Redux Persist maintains state across sessions. Travel Marvel offers an intuitive, modern solution for managing your next adventure—all in one place.",
    live: "https://travel-marvel.vercel.app/",
    github: "https://github.com/Nikolic1992/travel-marvel",
  },
  {
    id: 3,
    title: "Movie App 🎬🍿",
    image: "/assets/movie-app.png",
    mainDescription:
      "Modern and responsive movie search app powered by TMDB API and Appwrite. Search, explore trending movies, and enjoy smooth UX with loading spinners and error handling.",
    description:
      "Movie App is a dynamic and fully responsive movie search web application built with React, Tailwind CSS, and Appwrite. It leverages the TMDB API to fetch real-time movie data and allows users to search for movies, explore trending titles, and view results with debounced search functionality to optimize API calls. The UI features smooth loading states using custom spinners, error handling for failed API requests, and a clean modern interface powered by Tailwind CSS. Appwrite is integrated to manage trending movie data, while React-use ensures efficient debouncing. This project showcases integration with external APIs, modern UI/UX patterns, and frontend architecture best practices.",
    live: "https://movie-app-react-plum.vercel.app/",
    github: "https://github.com/Nikolic1992/movie-app-react",
  },
  {
    id: 4,
    title: "Shopfinity 🛒💳",
    image: "/assets/ecommerce.png",
    mainDescription:
      "Modern and responsive online store that offers a seamless shopping experience. Users can browse products, manage their cart, and simulate the checkout process — all within a clean and intuitive interface.",
    description:
      "Shopfinity is a fully functional shopping web app built with React, JavaScript,TailwindCSS, Redux Toolkit and Clerk. It allows users to explore a product catalog, add and remove items from the cart, and dynamically update quantities with real-time price calculations. The UI is designed with Tailwind CSS for a modern and clean look, and Framer Motion is used to add smooth transitions and animations. The app includes state persistence via Redux Persist and emphasizes performance and usability. Ideal for showcasing eCommerce logic and frontend architecture, this project demonstrates a complete product flow from browsing to checkout.",
    live: "https://e-commerce-react-js-opal-ten.vercel.app/",
    github: "https://github.com/Nikolic1992/eCommerce-react-js",
  },
];

export default projectsData;
