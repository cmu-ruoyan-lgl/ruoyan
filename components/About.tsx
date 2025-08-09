"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale === "zh" || activeLocale === "cn" ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div>我是一个工作生活上十分可靠的人，一个痴迷于概率与博弈的人，一个热爱数学、算法和编程的人。</div>
          <div>
            我对"可靠"的定义是：如果我答应了你的事情，你就可以放心的把它从TodoList上面划去。
          </div>
          <div>
            对数学的思想大概是从小就有的，后来高中接触到了信息学竞赛，沉迷做算法题一发不可收拾，即便是现在也经常会去打Leetcode周赛，大学自然学了软件工程，因为痴迷游戏，毕业后又去当时的微信小游戏榜一《咸鱼之王》做了游戏开发。
          </div>
          <div>
            离职后因为一些机缘巧合开始接触web3，我还记得当时第一看bitcoin白皮书的惊讶，如此去中心化的解决方式真乃天才，那一刻我就认为这个技术一定会大有前景，后来去了DNA数字游民公社，发现在游民圈子中有非常多的web3从业者，我跟着大佬们学习逐渐深入web3领域，还找到了一份在ton链做游戏开发的工作。
          </div>
          <div>
            眨眼睛在web3圈子已经摸爬滚打滚打一年半了，期间目睹了419之夜、目睹了bitcoin从4万涨到13万，期间也打过符石，冲过土狗，做过撸毛，学过solidity和rust还有一些开发工具，打过很多的hackthon，也获得了不少奖项，尝试在这个圈子做一些真正可以稳定收益的东西：自动跟单Twitter_kol的bot、二级市场的量化交易策略、尝试过ton链的链游戏教程创业、mev_bot，可惜因为一些原因都没能成功。
          </div>
          <div>
            2024年，遇到了骚哥，骚哥入圈很久了，和我一样是对去中心化有信仰的人，正好也是我梦想大学cmu毕业的学长，我们相谈甚欢。当时闲聊得知他正在做一个基于AI的量化策略工作流，是一个可以让不懂代码的小白也可以生成交易策略的连线式的策略生成工具，我确信这是一个很有前景的项目，所以便加入兼职做开发工作，目前还在开发阶段，不过已经在不少黑客松获得了很高的评价和奖项了。
          </div>
          <div>
            目前，我正在准备web3求职，想进入web3的项目方进行深度学习，希望能得到一份有成长性的工作。
          </div>
        </div>
      ) : (
        <>
          <p className="mb-3">
            I am a person who is very reliable in both work and life, someone who is obsessed with probability and game theory, and someone who loves mathematics, algorithms, and programming. My definition of 'reliable' is: if I promise you something, you can safely cross it off your TodoList.
          </p>

          <p className="mb-3">
            My interest in mathematics has been there since childhood, and later in high school I was exposed to informatics competitions, becoming addicted to solving algorithmic problems. Even now I often participate in Leetcode weekly contests. Naturally, I studied software engineering in university, and because I was obsessed with games, after graduation I went to work on game development for the then-top WeChat mini-game 'Idle Fish King'.
          </p>

          <p className="mb-3">
            After leaving that job, I started getting involved in web3 through some coincidences. I still remember my amazement when I first read the Bitcoin whitepaper - such a decentralized solution was truly genius, and at that moment I believed this technology would have great prospects. Later I went to the DNA Digital Nomad Community and discovered that there were many web3 practitioners in the nomad circle. I learned from the experts and gradually deepened my involvement in the web3 field, even finding a job developing games on the TON blockchain.
          </p>

          <p className="mb-3">
            In the blink of an eye, I've been struggling in the web3 circle for a year and a half, during which I witnessed the 419 night, saw Bitcoin rise from 40,000 to 130,000, during which I also played with runestones, rushed into meme coins, did airdrops, learned Solidity and Rust and some development tools, participated in many hackathons and won quite a few awards, trying to create things in this circle that could truly generate stable returns: Twitter KOL copy trading bots, quantitative trading strategies for secondary markets, attempted TON blockchain game tutorial entrepreneurship, MEV bots, but unfortunately none succeeded due to various reasons.
          </p>

          <p>
            In 2024, I met Brother Sao, who has been in the circle for a long time and is also someone with faith in decentralization, and happens to be an alumnus from my dream university CMU. During casual conversation, I learned he was working on an AI-based quantitative strategy workflow, a visual strategy generation tool that allows people who don't understand code to generate trading strategies. I was certain this was a very promising project, so I joined as a part-time developer. It's still in development, but has already received high praise and awards at many hackathons. Currently, I am preparing for web3 job hunting, wanting to enter web3 project teams for deep learning, hoping to get a job with growth potential.
          </p>
        </>
      )}
    </motion.section>
  )
}
