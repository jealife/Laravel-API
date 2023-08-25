import User from "@/components/userCard/User"

export default async function Chauffeur() {
    const data = await fetch(
        'https://aetjtransportelogistique.ma/api/chauffeur'
    )
    const res = await data.json()
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="list grid grid-cols-3">
            {res.results.map((user)=>(
                <User key={user.id}
                nameUser={user.full_name}
                />
            ))}
            </div>
        </main>
    )

} 