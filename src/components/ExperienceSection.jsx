import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"

          title="BS Information Technology"

          place="Cebu Institute of Technology – University"
          
          description="Currently pursuing IT and learning more about the tech field as I go."
        />
        <TimelineItem
          period="2022 - 2024"

          title="Senior High School"

          place="Cebu Institute of Technology – University"

          description="My senior high school years were a new chapter for me after growing up in Saudi Arabia. 
          It was a time of adjusting, meeting new people, and preparing myself for college."
        />
        <TimelineItem
          period="2010 - 2022"

          title="Elementary and High School"

          place="International Philippine School in Al Khobar"

          description="My elementary and high school years were filled with new experiences, friendships, and lessons that helped shape who I am today. 
          These years gave me memories and experiences that I'll always carry with me."
        />
      </ol>
    </section>
  )
}