"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import Link from "next/link"
import { Source_Code_Pro } from "next/font/google"
import { useLocale } from "next-intl"
import { useSectionInView } from "@/lib/hooks"
import dynamic from "next/dynamic"
import { useActiveSectionContext } from "@/context/action-section-context"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import useSound from "use-sound"
import { getBasePath } from "@/lib/basePath"

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "400" })

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((m) => m.TypeAnimation),
  { ssr: false }
)

export default function Intro() {
  const { ref } = useSectionInView("Home")
  const activeLocale = useLocale()
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const t = useTranslations("IntroSection")
  const [playHover] = useSound(`${getBasePath()}/bubble.wav`, { volume: 0.5 })
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section
      ref={ref}
      className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={`${getBasePath()}/profile.png`}
              alt="developer-image"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            onHoverStart={() => {
              console.log("sound")
              playHover()
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.25, rotate: 15 }}
            className="absolute text-3xl bottom-0 right-0 hover:rotate-2"
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.1,
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className={`${sourceCodePro.className} text-sm tracking-wider `}>
          {t("hello_im")}
        </span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            {t("name")}
          </h1>

          <div className="text-center">
            <span className={`${sourceCodePro.className} text-sm tracking-wider`}>
              {t("im_a")} 
            </span>
            <h2
              id="name"
              className="text-center text-3xl sm:text-4xl md:text-5xl lg:leading-normal font-extrabold"
            >
              {isMounted ? (
                <TypeAnimation
                  sequence={[
                    t("role_frontend"),
                    1000,
                    t("role_fullstack"),
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              ) : (
                <span>{t("role_frontend")}</span>
              )}
            </h2>
          </div>
        </motion.div>
        <p>{t("short_intro")}</p>
        {activeLocale === "en" ? (
          <p>
            My focus is{" "}
            <span className="italic font-bold">React (Next.js)</span>.
          </p>
        ) : (
          <p>
            我专注于 <span className="italic font-bold">React（Next.js）</span>
          </p>
        )}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center  gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
          className="group bg-gray-900 px-4 py-2 text-sm sm:text-lg text-white sm:px-7 sm:py-3 flex items-center gap-2  rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link> */}

        <Link
          target="_blank"
          className="bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={
            activeLocale == "en"
              ? `${getBasePath()}/joy-fullstack-resume.pdf`
              : `${getBasePath()}/前端开发-彭郁洁.pdf`
          }
          locale={false}
        >
          {t("download_cv")}
          <HiDownload />
        </Link>
        <a
          aria-label="LinkedIn"
          className="bg-white p-2.5 text-[1.2rem] text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/joy-yujiepeng/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          aria-label="GitHub"
          className="bg-white p-2.5 text-gray-700 flex items-center gap-2 text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Codefreyy"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className=" bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://blog-joy-peng.netlify.app"
          target="_blank"
        >
          {t("blog")}

          {/* <FaGithubSquare /> */}
        </a>
      </motion.div>
    </section>
  )
}
