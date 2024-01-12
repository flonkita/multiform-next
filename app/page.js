'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const App = () => {

  const [choice, setChoice] = useState({
    building: "",
    heat: "",
    type: "",
    consommation: "",
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-3 text-5xl font-semibold items-center">
        Composez votre kit <br></br>
        <span className="text-yellow-400"> pompe à chaleur</span>
      </h1>
      <p>
        Vous souhaitez installer une PAC chez vous ? Composez le PAC idéal pour
        votre maison grâce à notre configurateur en ligne et gratuit.
      </p>
      <Link
        href="/products"
        className="rounded-md px-3.5 py-2.5 bg-orange-300 cursor-pointer hover:bg-yellow-400"
        setChoice={setChoice}
      >
        Commencer
      </Link>
    </div>
  );
};

export default App;
