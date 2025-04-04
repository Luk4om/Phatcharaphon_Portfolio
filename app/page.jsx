import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import Button from "@/components/ui/Button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  const downloadLink = "https://drive.google.com/drive/folders/15WJQI64g4YzrD3yIG5cEDGWcwa9Il80X?usp=sharing";

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-bettween xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Programer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-amber-400">Phatcharaphon Laoruchiralai</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I graduated with a degree in Computer Science and aspire to become a skilled Programmer, System Analyst (SA), or Business Analyst (BA). I am passionate about learning new technologies and am committed to continuously improving and contributing positively through my work.
            </p>
            {/* btn socail */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href={downloadLink} download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV/Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-amber-400 rounded-full flex justify-center items-center text-amber-400 text-base hover:bg-amber-400 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home