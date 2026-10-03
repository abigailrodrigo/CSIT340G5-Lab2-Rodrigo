import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Princess Academy"
          description="A group school project where we created a turn-based RPG game using Java, working together on the characters, battles, story, and game features."
          tech="Java"
          link="https://github.com/laurencebaraga/GameProj_PrincessAcademy"
        />
        <ProjectCard
          year="2026"
          title="CozyBrew"
          description="CozBrew is an app for CozyBrew Cafe where customers can browse the menu and order food and drinks from the restaurant."
          tech="Kotlin"
          link="https://github.com/repos"
        />
        <ProjectCard
          year="2026"
          title="Making more projects"
          description="It's still a blank space for now since I'm still working on and trying to create more projects."
          tech="N/A"
          link="https://github.com/repos"
        />
        <ProjectCard
          year="2026"
          title="Making More Projects"
          description="It's still a blank space for now since I'm still working on and trying to create more projects."
          tech="N/A"
          link="https://github.com/repos"
        />
      </div>
    </section>
  )
}