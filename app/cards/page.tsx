import Card from "@/components/card1/Card";
import './cards.css'
import Card2 from "@/components/card2/Card2";
import Footer from "@/components/fotter/Foouter";

export default function Cards() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-8 mt-11">

      <h1 className='text-5xl'>Cards</h1>
      <div className="wrapper m-11 ">
        <Card num={"600"}/>
        <Card num="610"/>
        <Card num="620"/>
      </div>
      <div className="wrapper m-11">
        <Card2 num="640"/>
        <Card2 num="630"/>
        <Card2 num="650"/>
      </div>
    </main>
  )
}
