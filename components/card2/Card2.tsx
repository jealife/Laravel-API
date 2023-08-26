import React from 'react'
import Link from "next/link";


export default function Card2({ num }:any) {
    let src = 'https://unsplash.it/' + num;
    let src2 = "https://i.pravatar.cc/40?Image=" + num;
    return (
        <div>
            <div className="card-container bg-white px-2 py-3 rounded-2xl m-2 w-72 flex flex-col items-center gap-3 shadow-xl" >
                <div className="card-cover">
                    <img src={src} alt="card__image" className="card__image rounded-2xl  w-full object-cover" width="600" />
                </div>
                <div className="title-service w-full text-center flex text-xl">
                    <h2 className="text-slate-950 font-extrabold">Dépanneur</h2>
                </div>
                <div className="service px-1">
                    <span className="call text-slate-900 text-sm">Vidange - </span>
                    <span className="call text-slate-900 text-sm">Vidange - </span>
                    <span className="call text-slate-900 text-sm"> Lavage - </span>
                    <span className="call text-slate-900 text-sm"> Lavage - </span>
                    <span className="call text-slate-900 text-sm"> Déppannage -</span>
                </div>
                <div className="card-profile-wrapper w-full flex justify-between items-center px-1 self-center my-2">
                    <Link href='/' className="user flex gap-2">
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