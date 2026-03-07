import { useTranslation } from "react-i18next";
import { FaAngular, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { SiDotnet, SiExpress, SiGithubactions, SiJirasoftware, SiMongodb, SiPostman, SiSqlite, SiTypescript, SiVite } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { FaUnity } from "react-icons/fa6";

function TechStack() {
    const { t } = useTranslation("home");

    return (
        <div className="m-auto w-full md:w-2/3">
            <div className="flex flex-col w-full p-5 gap-4 text-2xl md:text-4xl font-medium cursor-default">
                <div className="flex gap-3 md:gap-5 items-center ">
                    <h4 className="w-1/4 h-full text-end text-sm md:text-base">Frontend</h4>
                    <div className="flex flex-1 flex-wrap gap-3 md:gap-5 border-l pl-5 border-neutral-400 p-3 pr-0">
                        <FaReact title="React JS" className="text-cyan-400" />
                        <RiTailwindCssFill title="Tailwind CSS" className="text-cyan-300" />
                        <SiTypescript title="JavaScript ES6+" className="text-blue-400" />
                        <IoLogoJavascript title="JavaScript ES6+" className="text-yellow-500" />
                        <RiNextjsFill title="Next JS" />
                        <p title="HTML5" className="flex items-center font-bold text-sm md:text-xl">HTML <FaHtml5 className="text-orange-600 text-2xl md:text-4xl" /></p>
                        <p title="CSS3" className="flex items-center font-bold text-sm md:text-xl">CSS <FaCss3Alt className="text-cyan-600 text-2xl md:text-4xl" /></p>
                        <SiVite title="Vite" className="text-purple-500"/>
                        <FaAngular title="Angular JS" className="text-red-600" />
                    </div>
                </div>
                <div className="flex gap-3 md:gap-5 items-center">
                    <h4 className="w-1/4 text-end text-sm md:text-base">Backend</h4>
                    <div className="flex flex-1 flex-wrap gap-3 md:gap-5 border-l pl-5 border-neutral-400 p-3 pr-0">
                        <FaNodeJs title="Node Js" className="text-emerald-500" />
                        <SiExpress title="Express JS" className="text-emerald-500" />
                        <p title="RESTful API" className="text-sm md:text-xl font-normal">RESTful API</p>
                        <SiDotnet title="DOT NET" />
                        <BiLogoSpringBoot title="Java SpringBoot" className="text-green-500" />
                        <FaJava title="Java" className="text-neutral-500" />
                    </div>
                </div>
                <div className="flex gap-3 md:gap-5 items-center">
                    <h4 className="w-1/4 text-end text-sm md:text-base">{t("skills.databases")}</h4>
                    <div className="flex flex-1 flex-wrap gap-3 md:gap-5 border-l pl-5 border-neutral-400 p-3 pr-0">
                        <p title="SQL" className="text-sm md:text-xl font-bold">SQL</p>
                        <BiLogoPostgresql title="PostreSQL" className="text-cyan-800" />
                        <GrMysql title="MySQL" className="text-cyan-600" />
                        <SiMongodb title="MongoDB" className="text-green-500" />
                        <SiSqlite title="SQLite" className="text-cyan-600" />
                    </div>
                </div>
                <div className="flex gap-3 md:gap-5 items-center">
                    <h4 className="w-1/4 text-end text-sm md:text-base">{t("skills.others")}</h4>
                    <div className="flex flex-1 flex-wrap gap-3 md:gap-5 border-l pl-5 border-neutral-400 p-3 pr-0">
                        <FaGithub title="Github" />
                        <SiGithubactions title="Github Actions" />
                        <VscVscode title="Visual Studio Code" className="text-cyan-600" />
                        <FaGitAlt title="Git" className="text-orange-600" />
                        <FaFigma title="Figma" />
                        <SiPostman title="Postman" className="text-orange-400" />
                        <SiJirasoftware title="Jira Software by Atlassian" className="text-cyan-500" />
                        <FaUnity title="Unity" className="text-neutral-600" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack;