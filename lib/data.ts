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
        "title": "TradingFlow",
        "title_zh": "TradingFlow",
        "description":
            "A decentralized quant fund platform designed to democratize algorithmic trading. It allows users to create and invest in automated trading strategies powered by AI, making advanced trading tools accessible to all.",
        "desc_zh": "一个去中心化的量化基金平台，致力于让算法交易变得大众化。用户可以创建和投资基于AI的自动化交易策略，让所有人都能使用先进的交易工具。",
        "tags": ["React", "Next.js 14", "TypeScript", "TailwindCSS", "Solidity", "Jupiter api", "ClaudeCode", "Cursor"],
        "imageUrl": knowledgeSharingPlatformImage,
        "projectUrl": "https://github.com/TradingFlow-OpenSource/tradingflow-contracts",
        "demoUrl": "https://www.youtube.com/watch?v=dhsNnFw5goo"
    },
    {
        title: "NFT Market",
        title_zh: 'NFT市场',
        description:
            "A comprehensive NFT market application that allows users to buy and sell NFTs. It provides a user-friendly interface for browsing and searching NFTs, and a secure and reliable platform for buying and selling NFTs.",
        desc_zh: "一个完整的NFT市场系统，支持NFT铸造、购买、出售和拍卖功能。",
        tags: ["React", "TypeScript", "Next.js", 'Solidity', 'Foundry'],
        imageUrl: typingSpeedImage,
        projectUrl: 'https://github.com/cmu-ruoyan-lgl/NFT_Market',
        demoUrl: 'https://github.com/cmu-ruoyan-lgl/NFT_Market',
    },
    {
        title: "X-monitor-tradebot",
        title_zh: "推特监控交易机器人",
        description:
            `A memecoin monitoring and trading assistant that automatically monitors on-chain smart wallets and Twitter KOLs.`,
        desc_zh: "Memecoin 监控与交易辅助工具，实现自动监控链上智慧钱包，监控推特KOL等功能。",
        tags: ["Next.js", "TypeScript", "Upstash", "React-Query", "TailwindCSS", "Solidity", "Foundry"],
        imageUrl: breadditImage,
        projectUrl: 'https://github.com/cmu-ruoyan-lgl/X-monitor-tradebot',
        demoUrl: 'https://github.com/cmu-ruoyan-lgl/X-monitor-tradebot',
    },
    {
        title: "Death",
        title_zh: '死寂',
        description: "A first-person zombie shooting game inspired by Left 4 Dead, developed using UE4.",
        desc_zh: "第一人称枪战打僵尸游戏，仿照《求生之路》，使用UE4开发",
        tags: ["UE4", "C++", "Blueprint", "Unreal Engine 4"],
        imageUrl: visualizationImage,
        projectUrl: 'https://github.com/cmu-ruoyan-lgl/Death',
        demoUrl: 'https://www.bilibili.com/video/BV1WV4y1u7Nf/',
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
