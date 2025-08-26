import React from "react";
import { FaGlobe, FaReact, FaUnity } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import knowledgeSharingPlatformImage from '@/public/knowledge-sharing-platform.png';
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import visualizationImage from "@/public/d3.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        title: "Web3 Digital Nomad",
        location: "Anji/Dali/Tibet/Hangzhou",
        description: "Spent a year and a half learning and practicing in the Web3 field, including playing with runestones, chasing meme coins, doing airdrops, learning Solidity and Rust, participating in ETH hackathons and winning awards, building Twitter KOL auto-following projects, developing quantitative trading strategies for secondary markets, attempting TON chain gaming tutorial entrepreneurship, and recently working with the TradingFlow project team, hoping to find sustainable passive income opportunities in Web3.",
        icon: React.createElement(FaGlobe),
        date: "Feb 2024 - Aug 2025",
    },
    {
        title: "Game Client Cocos-Creator Developer",
        location: "Beijing Haoteng Chuangxiang Technology Co., Ltd.",
        description: "Responsible for the development and maintenance of 'King of Salted Fish' for Japanese/Korean/Asian/American servers; implemented IAA monetization features, increasing game revenue by 25%; developed user-customizable avatar system and chat reporting functionality.",
        icon: React.createElement(FaUnity),
        date: "Apr 2023 - Nov 2023",
    },
    {
        title: "Game Client Cocos-2D Developer",
        location: "Beijing Bole Technology Co., Ltd.",
        description: "Maintained the SEA region client for the company's game 'Da Fu Entertainment City', developed using Cocos-2D-X engine and Lua programming language for game logic.",
        icon: React.createElement(FaReact),
        date: "May 2022 - Nov 2022",
    },
    {
        title: "Bachelor's Degree in Software Engineering",
        location: "Qingdao University",
        description: "Graduated early with a 3.8/4.0 GPA, recognized as an outstanding graduate of the year, and received job opportunities from preferred large companies.",
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2019 - Jun 2022",
    },
]

export const experiencesDataZn = [
    {
        "title": "Web3数字游民",
        "location": "安吉/大理/西藏/杭州",
        "description": "在Web3领域中摸爬滚打学习实践一年半，期间打过符石，冲过土狗，做过撸毛，学过solidity和rust，打过一些eth hackthon，也获得了一些奖项，写过自动跟单Twitter_kol的项目，和二级市场的量化交易策略，尝试过ton链的链游戏教程创业，最近在TradingFlow项目组，希望找到在web3能够长久被动获益的事。",
        icon: React.createElement(FaGlobe),
        "date": "2024年2月 - 2025年8月"
    },
    {
        "title": "游戏客户端cocos-creator开发",
        "location": "北京豪腾创想科技有限公司",
        "description": `负责《咸鱼之王》在日服/韩服/亚服/美服的开发与维护；实现IAA变现功能，提升游戏收入25%；开发用户自定义头像系统及聊天举报功能。`,
        "icon": React.createElement(FaUnity),
        "date": "2023年4月 - 2023年11月"
    },
    {
        "title": "游戏客户端cocos-2d开发",
        "location": "北京博乐科技有限公司",
        "description": "维护公司游戏《大福娱乐城》客户端SEA板块，使用cocos-2d-x引擎开发，使用Lua语言开发逻辑。",
        "icon": React.createElement(FaReact),
        "date": "2022年5月 - 2022年11月"
    },
    {
        "title": "软件工程 本科学位",
        "location": "青岛大学",
        "description": "以3.8/4.0的GPA提前毕业，当年的优秀毕业生，获得了喜欢大厂的工作机会。",
        "icon": React.createElement(LuGraduationCap),
        "date": "2019年9月 - 2022年6月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "Ethical Digital Nation Collaborative Platform",
        "title_zh": "数字道德国家协作平台",
        "description":
            "A collaborative platform enhancing cooperation among Scottish higher education institutions in digital ethics.",
        "desc_zh": "旨在促进苏格兰高校在数字道德领域合作的协作平台。该平台集成用户访谈、工作坊、OAuth登录、最新数字博客RSS feed显示、完备的事件管理系统（包含高级评分与评论功能）以及注重可访问性的响应式设计。",
        "tags": ["React", "Next.js 14", "TypeScript", "TailwindCSS", "Convex", "Clerk"],
        "imageUrl": knowledgeSharingPlatformImage,
        "projectUrl": "https://github.com/Codefreyy/Ethical-Digital-Nation",
        "demoUrl": "https://yujie-ethical-digital-nation.netlify.app/"
    },
    {
        title: "Typing Speed",
        title_zh: '打字测验',
        description:
            "A comprehensive typing speed test application that tracks your overall typing performance. It provides detailed statistics, including total words typed, errors made, and accuracy rate, allowing users to monitor their progress and improve their typing efficiency.",
        desc_zh: "一个打字速度测试应用。敲击即开始打字，计时结束后将显示总敲击单词数、正确率、错误率等。该应用UI简洁现代，支持Dark Mode切换。",
        tags: ["React", "TypeScript", "Tailwind", 'Framer Motion'],
        imageUrl: typingSpeedImage,
        projectUrl: 'https://github.com/Codefreyy/typing-speed-game',
        demoUrl: 'https://joy-typing-speed.netlify.app/',
    },
    {
        title: "Breddit",
        title_zh: "社交新闻论坛",
        description:
            `A modern full-stack Reddit clone with infinite scrolling, secure NextAuth Google authentication, and a custom feed for authenticated users. It uses Upstash Redis for caching and React-Query for efficient, responsive data fetching with optimistic updates.
            `,
        desc_zh: "一个现代且简洁的Reddit克隆项目，使用Next.js、TypeScript和Tailwind CSS构建。项目功能包括无限滚动动态加载帖子、NextAuth与Google认证、为认证用户提供自定义Feed、高级缓存、乐观更新、React-Query数据获取、美观的帖子编辑器、图片上传和链接预览、以及完整的评论功能。",
        tags: ["Next.js", "TypeScript", "Upstash", "React-Query", "TailwindCSS"],
        imageUrl: breadditImage,
        projectUrl: 'https://github.com/Codefreyy/Breddit',
        demoUrl: 'https://joy-breddit.vercel.app/',
    },
    {
        title: "Global Wealth Spectrum Visualisation",
        title_zh: '世界财富可视化光谱',
        description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
        desc_zh: "交互式可视化图表探讨了税收政策如何影响财富、不同行业对不同性别的财富的影响以及这些影响在各大洲之间的差异。深入了解我们的数据，揭示全球财富的复杂层次。",
        tags: ["d3.js", "HTML", "CSS", "Vanilla JavaScript"],
        imageUrl: visualizationImage,
        projectUrl: 'https://github.com/Codefreyy/d3-evolution-visualisation',
        demoUrl: 'https://global-wealth-spectrum.netlify.app/',
    },


]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Solidity",
    "Web3",
    "Blockchain",
    "Next.js",
    "Node",
    "Express",
    "Git",
    "Github",
    "Tailwind",
    "Layui",
    "ClaudeCode",
    "Cursor",
    "MongoDB",
    "UI/UX",
    "Figma",
    "CI/CD",
    "Cocos Creator",
    "Unity",
    "Python",
    "C#",
] 
