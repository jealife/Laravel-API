

export default async function user() {
    const data = await fetch(
        'https://aetjtransportetlogistique.ma/api/chaufeur'
      );
      const res = await data.json();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center pt-24 px-5">
            <h1 className='text-5xl'>Liste des chauffeurs</h1>
            <div className="grid lg:grid-cols-5 mt-5 gap-3 md:grid-cols-1 mt-5">
                {res.map((user:any) => (
                    <div key={user.id} className="border-solid border-blue-950 rounded-md border-2 p-2 w-full">
                        <h2>{user.id}</h2>
                        <h2 className="uppercase ">{user.full_name}</h2>
                    </div>
                ))}
            </div>
        </main>
    );
}
