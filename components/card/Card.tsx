import Link from "next/link";



export default function Card({ num }) {
    let src = 'https://unsplash.it/' + num;
    let src2 = "https://i.pravatar.cc/40?Image=" + num;
    return (
        <div>
            <div className="card-container bg-white p-1 rounded-md m-2" >
                <div className="card-cover">
                    <img src={src} alt="card__image" className="card__image rounded-lg h-56 w-56 object-cover" width="600" />
                </div>
                <div  className="card-profill-wrapper flex justify-between px-1 self-center">
                    <Link href='/' className="user flex gap-1">
                        <div className="profile-pic">
                            <img src={src2} alt="user__image" className="user__image rounded-full " />
                        </div>
                        <div className="name">
                            <h3 className="text-slate-950 font-bold">Jhon Doe</h3>
                            <span className="text-slate-600 text-sm"> Mécanicienne </span>
                        </div>
                    </Link>
                    <Link href='/' className="call text-slate-600 text-sm">
                        <span>Call</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
