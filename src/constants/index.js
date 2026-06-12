import car_image1 from "../assets/car_image1.jpg";
import car_image2 from "../assets/car_image2.jpg";
import car_image3 from "../assets/car_image3.jpg";
import car_image4 from "../assets/car_image4.jpg";
import user_profile from "../assets/user_profile.jpg";

// CITY LIST
export const cityList = ["New York", "Los Angeles", "Houston", "Chicago"];

// NAVBAR LINKS
export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Cars", path: "/cars" },
  { name: "My Bookings", path: "/my-bookings" },
];

// OWNER MENU LINKS
export const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/owner",
  },
  {
    name: "Add car",
    path: "/owner/add-car",
  },
  {
    name: "Manage Cars",
    path: "/owner/manage-cars",
  },
  {
    name: "Manage Bookings",
    path: "/owner/manage-bookings",
  },
];

// DUMMY USER DATA
export const dummyUserData = {
  id: "1",
  name: "Rohit",
  email: "admin@example.com",
  role: "owner",
  image: user_profile,
};

// DUMMY CAR DATA
export const dummyCarData = [
  {
    id: "1",
    owner: "John",
    brand: "BMW",
    model: "X5",
    image: car_image1,
    year: 2006,
    category: "SUV",
    seating_capacity: 4,
    fuel_type: "Hybrid",
    transmission: "Semi-Automatic",
    pricePerDay: 300,
    location: "New York",
    description:
      "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
    isAvaliable: true,
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    id: "2",
    owner: "Marco",
    brand: "Toyota",
    model: "Corolla",
    image: car_image2,
    year: 2021,
    category: "Sedan",
    seating_capacity: 4,
    fuel_type: "Diesel",
    transmission: "Manual",
    pricePerDay: 130,
    location: "Chicago",
    description:
      "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    isAvaliable: true,
    createdAt: "2025-04-16T08:33:57.993Z",
  },
  {
    id: "3",
    owner: "Sinon",
    brand: "Jeep ",
    model: "Wrangler",
    image: car_image3,
    year: 2023,
    category: "SUV",
    seating_capacity: 2,
    fuel_type: "Hybrid",
    transmission: "Automatic",
    pricePerDay: 200,
    location: "Los Angeles",
    description:
      "The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The Wrangler made its debut in 2003 as the first SUV ever produced by Jeep.",
    isAvaliable: true,
    createdAt: "2025-04-16T08:34:39.592Z",
  },
  {
    id: "4",
    owner: "Carlo",
    brand: "Ford",
    model: "Neo 6",
    image: car_image4,
    year: 2022,
    category: "Sedan",
    seating_capacity: 2,
    fuel_type: "Diesel",
    transmission: "Semi-Automatic",
    pricePerDay: 209,
    location: "Houston",
    description:
      "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    isAvaliable: true,
    createdAt: "2025-04-17T06:15:47.318Z",
  },
  {
    id: "5",
    owner: "Christy",
    brand: "BMW",
    model: "X5",
    image: car_image1,
    year: 2006,
    category: "SUV",
    seating_capacity: 4,
    fuel_type: "Hybrid",
    transmission: "Semi-Automatic",
    pricePerDay: 300,
    location: "New York",
    description:
      "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
    isAvaliable: true,
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    id: "6",
    owner: "Steave",
    brand: "Toyota",
    model: "Corolla",
    image: car_image2,
    year: 2021,
    category: "Sedan",
    seating_capacity: 2,
    fuel_type: "Diesel",
    transmission: "Manual",
    pricePerDay: 130,
    location: "Chicago",
    description:
      "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    isAvaliable: true,
    createdAt: "2025-04-16T08:33:57.993Z",
  },
  {
    id: "7",
    owner: "Stella",
    brand: "Jeep ",
    model: "Wrangler",
    image: car_image3,
    year: 2023,
    category: "SUV",
    seating_capacity: 4,
    fuel_type: "Hybrid",
    transmission: "Automatic",
    pricePerDay: 200,
    location: "Los Angeles",
    description:
      "The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The Wrangler made its debut in 2003 as the first SUV ever produced by Jeep.",
    isAvaliable: true,
    createdAt: "2025-04-16T08:34:39.592Z",
  },
  {
    id: "8",
    owner: "Juno",
    brand: "Ford",
    model: "Neo 6",
    image: car_image4,
    year: 2022,
    category: "Sedan",
    seating_capacity: 2,
    fuel_type: "Diesel",
    transmission: "Semi-Automatic",
    pricePerDay: 209,
    location: "Houston",
    description:
      "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    isAvaliable: true,
    createdAt: "2025-04-17T06:15:47.318Z",
  },
];

// DUMMY TESTIMONIALS
export const dummyTestimonialsData = [
  {
    id: 1,
    name: "Emma Rodriguez",
    place: "Barcelona, Spain",
    image: user_profile,
    rating: 5,
    review:
      "I've rented cars from various companies, but the experience with CarRental was exceptional. The booking process was smooth, the vehicle was spotless, and customer support was always available.",
  },
  {
    id: 2,
    name: "Michael Johnson",
    place: "Chicago, USA",
    image: user_profile,
    rating: 5,
    review:
      "Fantastic service from start to finish. The car was delivered on time, in perfect condition, and exactly as advertised. I highly recommend CarRental for business and leisure trips.",
  },
  {
    id: 3,
    name: "Sophia Williams",
    place: "Los Angeles, USA",
    image: user_profile,
    rating: 4,
    review:
      "Great selection of luxury vehicles at reasonable prices. The booking experience was seamless, and the team made the entire rental process effortless and enjoyable.",
  },
];

// FOOTER LINKS
export const footerLinks = [
  {
    name: "Privacy Policy",
    path: "/privacy",
  },
  {
    name: "Terms of Service",
    path: "/terms",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

// SOCIAL LINKS
export const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
  },
];

// AUTH TABS
export const authTabs = [
  {
    id: "login",
    label: "Login",
  },
  {
    id: "signup",
    label: "Sign Up",
  },
];