import Card from "@/components/card/Card";
import './cards.css'

export default function Cards() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-8">

      <h1 className='text-5xl'>Cards</h1>
      <div className="wrapper ">
        <Card num={600} /> 
        <Card num={700} /> 
        <Card num={500} />
      </div>
    </main>
  )
}
