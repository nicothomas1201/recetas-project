import '../css/section-preparation.css'
import { Ingredients } from "./Ingredients"
import { Preparation } from "./Preparation"

export function SectionPreparation(){
  return (
    <section className="section-preparation">
      <Preparation />
      <Ingredients />
    </section>
  )
}