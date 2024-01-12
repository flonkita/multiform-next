'use client';

import React from "react";

export const Header = () => {
  const home = () => {
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir retourner au menu ?"
    );

    if (confirmation) {
      // Si l'utilisateur clique sur "OK" dans la boîte de confirmation
      // Vous pouvez ajouter ici le code pour rediriger l'utilisateur vers le menu
      window.location.href = "/";
    }
    // Sinon, l'utilisateur a cliqué sur "Annuler" et rien ne se passe.
  };

  return (
    <div className="flex w-full items-center my-4 justify-start gap-4">
      <button
        onClick={home}
        className="bg-orange-400 text-white px-4 py-2 rounded-md"
      >
        Quitter
      </button>
      <h2>PAC</h2>
    </div>
  );
};
