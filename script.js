function analyserTexte() {
  const texte = document.getElementById("texteInput").value;
  const resultat = document.getElementById("resultat");
  
  if (!texte.trim()) {
    resultat.innerHTML = "⛔️ Aucun texte fourni.";
    return;
  }

  // Détection IA simulée
  const probabilite = Math.floor(Math.random() * 100);
  resultat.innerHTML = `✅ Taux de probabilité IA détecté : <strong>${probabilite}%</strong>`;
}

function activerModule(nom) {
  alert(`Module ${nom.toUpperCase()} activé ! (Simulation)`);
}
