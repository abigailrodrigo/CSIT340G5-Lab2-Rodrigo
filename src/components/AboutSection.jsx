import SectionHeading from './SectionHeading'
import Fact from './Fact'

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I'm from Minglanilla, Cebu, but I grew up in Saudi Arabia for 16 years. My family is from Cebu, 
        and we moved back when I started senior high school. I picked IT because I wanted to understand how 
        the technology side works and learn more about what happens behind the things we use every day. I'm 
        still figuring things out and learning along the way, but I'm getting through it one step at a time.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  )
}