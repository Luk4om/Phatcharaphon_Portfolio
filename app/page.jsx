import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Button from "@/components/ui/Button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-bettween xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Programer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-amber-400">Phatcharaphon Laoruchiralai</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I Bachelor of Computer Science students from Thailand
            </p>
            {/* btn socail */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-amber-400 rounded-full flex justify-center items-center text-amber-400 text-base hover:bg-amber-400 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home