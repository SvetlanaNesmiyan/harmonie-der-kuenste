import { ClassCard } from "./class-card"

const classes = [
  {
    title: "Kickbox Training",
    ageRange: "Gruppen:\n• Kinder\n• Jugendliche",
    image: "/images/preschool-class.jpg",
    id: "kickbox",
  },
  {
    title: "Tanzgruppe",
    ageRange: "Altersgruppen:\nJüngere Gruppe: Kinder bis 5 Jahre\nMittlere Gruppe: 6 bis 8 Jahre\nÄltere Gruppe: 9 bis 18 Jahre",
    image: "/images/classical-ballet.jpg",
    id: "tanzgruppe",
    description: "Unsere Tanzgruppe bietet Kindern und Jugendlichen die Möglichkeit, ihre Freude an Bewegung und Tanz zu entdecken und ihre Kreativität auszuleben.\n\nIm Training lernen die Teilnehmer verschiedene Tanzstile, verbessern Koordination, Rhythmusgefühl und Ausdruckskraft."
  },
  {
    title: "Fußballgruppe",
    ageRange: "Gruppen:\n• Kinder\n• Jugendliche",
    image: "/images/tap-dance.jpg",
    id: "fussballgruppe",
    description: "Unsere Fußballgruppe ist offen für alle Kinder und Jugendlichen, die Freude an Bewegung und Teamspiel haben.\n\nDie Teilnehmer lernen Grundlagen des Fußballs, Teamarbeit, Fairplay und verbessern ihre Ausdauer, Koordination und Technik."
  },
  {
    title: "Kreativwerkstatt - Alles selbst machen",
    ageRange: "",
    image: "/images/modern-theatre.jpg",
    id: "kreativwerkstatt",
    description: "In unserer Kreativwerkstatt können Kinder und Jugendliche ihrer Fantasie freien Lauf lassen und alles selbst gestalten.\n\nHier lernen die Teilnehmer verschiedene Handarbeitstechniken, basteln, malen, gestalten Dekorationen und kleine Kunstwerke.\n\nDie Aktivitäten fördern Kreativität, Feinmotorik, Ausdauer und Teamarbeit."
  },
  {
    title: "Ukrainische Schule",
    ageRange: "Gruppen:\n• 1. Klasse\n• 2. Klasse\n• 3. Klasse\n• 4. Klasse",
    image: "/images/street-dance.jpg",
    id: "ukrainische-schule",
    description: "In unserer ukrainischen Schule erhalten Kinder eine liebevolle und fördernde Lernumgebung.\n\nWir bieten Unterricht in:\n• Mathematik\n• Ich erforsche die Welt (Я досліджую світ)\n• Lesen\n• Ukrainische Sprache"
  },
  {
    title: "Gymnastik",
    ageRange: "Altersgruppe:\nKinder und Jugendliche",
    image: "/images/musical-theatre.jpg",
    id: "gymnastik",
    description: "Unsere Gymnastikgruppe richtet sich an Kinder und Jugendliche, die ihre Beweglichkeit, Kraft und Koordination spielerisch verbessern möchten.\n\nIm Training lernen die Teilnehmer Übungen für Körperhaltung, Balance, Dehnung und Muskelaufbau."
  },
]

export function Classes() {
  return (
    <section id="classes" className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((classItem) => (
          <ClassCard key={classItem.title} {...classItem} />
        ))}
      </div>
    </section>
  )
}

export { classes }
