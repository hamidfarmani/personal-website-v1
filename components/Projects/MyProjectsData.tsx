import githubStats from "./images/github-stats.png";
import homeOffice from "./images/home-office.png";
import mustWatch from "./images/must-watch.png";
import spotifyStats from "./images/spotify-stats.png";
import visualizr from "./images/visualizr.png";

export const myProjectsData = [
  {
    image: visualizr.src,
    title: "Visualizr",
    description:
      "Sorting algorithms are used to sort a data structure according to a specific order relationship, such as numerical order. Visualizing sorting algorithms can be a great way to better understand their functioning while having fun.",
    country: "JavaScript",
    badges: ["React", "Chartjs", "Sorting algorithms"],
    url: "https://github.com/hamidfarmani/visualizr",
    live_url: "https://hamidfarmani.github.io/visualizr",
  },
  {
    image: spotifyStats.src,
    title: "Spotify stats",
    description:
      "Spotify Stats is a fun and interactive web application that allows you to visualize your personalized Spotify data. You can view your top artists, top tracks, and recently played tracks.",
    country: "TypeScript",
    badges: ["React", "Spotify API", "emailjs"],
    url: "https://github.com/hamidfarmani/spotify-stats",
    live_url: "https://hamid-spotify.netlify.app",
  },
  {
    image: githubStats.src,
    title: "Github stats",
    description:
      "Using Next.js, Mantine and GitHub API, it allows visitors to search for GitHub profiles. The site also displays information about the queried user, such as their name, bio, location, and number of followers. It uses React Query and Axios for data fetching.",
    country: "TypeScript",
    badges: ["NextJs", "GitHub API"],
    url: "https://github.com/hamidfarmani/github-stats",
    live_url: "https://hamid-github-stats.netlify.app",
  },
  {
    image: homeOffice.src,
    title: "Home office",
    description:
      "Proximity visualization tool designed to help users understand the proximity of their homes to their office by displaying a map with markers indicating the home locations.",
    country: "JavaScript",
    badges: ["React", "Google API"],
    url: "https://github.com/hamidfarmani/home-office",
    live_url: "https://hamid-home-office.netlify.app",
  },
  {
    image: mustWatch.src,
    title: "Must watch",
    description:
      "A movie recommendation platform that allows users to create a personal movie library, recommend films to friends, discover new movies based on their and other users' preferences, and share their thoughts and ratings on films they have watched.",
    country: "TypeScript",
    badges: ["NextJs", "NextAuth"],
    url: "https://github.com/CinemaCircle/movie-library",
    live_url: "https://mustwatchmovies.netlify.app",
  },
];
