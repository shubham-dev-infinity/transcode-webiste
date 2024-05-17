import BlogCard1 from "@public/Assets/BlogCard1.png";
import BlogCard2 from "@public/Assets/BlogCard2.png";
import BlogCard3 from "@public/Assets/BlogCard3.png";
import { StaticImageData } from 'next/image';

interface Blog {
    id: number;
    image: StaticImageData;
    title: string;
    content: string;
    date: string;
    link: string;
}

const blogItems: Blog[] = [
    {
        id: 1,
        image: BlogCard1,
        date: "November 20, 2023",
        title: 'Noteworthy technology acquisitions 2021',
        content: 'Explore the ever-evolving world of WordPress with Mastering the Tech Landscape, your comprehensive guide to the latest innovations. Stay ahead in web development with expert insights and practical tips.',
        link: '#',
    },
    {
        id: 2,
        image: BlogCard2,
        date: "November 20, 2023",
        title: 'Noteworthy technology acquisitions 2022',
        content: 'Dive into the cutting-edge realm of web development with Exploring the Top Node.js Frameworks Shaping Trends in 2024. Discover the frameworks revolutionizing Node.js and stay ahead in the dynamic tech landscape.',
        link: '#',
    },
    {
        id: 3,
        image: BlogCard3,
        date: "November 20, 2023",
        title: 'Noteworthy technology acquisitions 2023',
        content: 'When hiring a skilled React.js developer, prioritize expertise in React fundamentals, proficiency in JavaScript, ability to write clean and efficient code, experience with state management, and strong problem-solving skills.',
        link: '#',
    },
];

export default blogItems;
