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
            My journey into programming kicked off during my undergrad in
            <span className="font-medium italic">
              {" "}
              Digital Publishing
            </span> at {}
            <span className="italic underline">
              <a
                href="https://en.wikipedia.org/wiki/Wuhan_University"
                target="_blank"
              >
                Wuhan University.
              </a>
            </span>{" "}
            As a freshman, I got my feet wet with the basics of computer
            science, databases, and Python. But what truly sparked my passion
            was a course on semantic publishing—there, I used HTML and CSS to
            create a webpage dedicated to my favorite figure skater,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Yuzuru_Hanyu"
              target="_blank"
              className="italic underline"
            >
              Yuzuru Hanyu.{" "}
            </a>
            This experience opened my eyes to the charm of web development———
            <span className="font-medium italic">
              literally, you can build anything you envision with code.
            </span>
          </p>

          <p className="mb-3">
            I sharpened my front-end development skills through internships at
            Internships at Wuhan University&apos;s Big Data Institute and later
            at{" "}
            <span className="italic underline">
              <a href="https://www.nio.com/careers" target="_blank">
                {" "}
                NIO Inc.
              </a>
            </span>{" "}
            Working closely with developers, designers, testers, and product
            managers, I loved the buzz of a team pulling together to make our
            product better. And there’s nothing quite like the thrill of seeing
            my own code being used by thousands—it’s what solidified my decision
            to pursue a career in front-end development.
          </p>

          <p className="mb-3">
            I’m now doing my Masters in
            <span className="font-medium italic"> Computing and IT</span> at the{" "}
            <span className="italic underline">
              <a href="https://www.st-andrews.ac.uk/" target="_blank">
                University of St Andrews.{" "}
              </a>
            </span>
            I thrive on programming challenges and enjoy working with teams to
            solve complex problems. I specialize in technologies such as
            <span className="font-medium italic"> React, Next.js and Vue</span>,
            and have a solid understanding of{" "}
            <span className="font-medium italic">
              JavaScript, TypeScript and HTML/CSS
            </span>
            .{" "}
          </p>

          <p>
            In my spare time, I enjoy exploring new technologies and building
            interesting projects. I also run my social media accounts on
            platforms like Bilibili and Xiaohongshu, where I share tech tips and
            tricks. And when I’m not at the computer, you’ll find me
            <span className="font-medium italic">
              {" "}
              cooking up a storm, catching a movie, or keeping fit with regular
              workouts.
            </span>
          </p>
        </>
      )}
    </motion.section>
  )
}
