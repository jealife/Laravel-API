export default async function Chauffeur() {
    const data = await fetch(
        'https://aetjtransportelogistique.ma/api/chauffeur'
    )
    const res = await data.json()
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-5xl'>Home</h1>
    </main>
    )
    
} 