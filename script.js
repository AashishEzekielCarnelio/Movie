const movies = [
  {
    id: 1,
    title: "Dune 2",
    genre: "Sci-Fi",
    desc: "A journey of Paul Atreides."
  },
  {
    id: 2,
    title: "Oppenheimer",
    genre: "Drama",
    desc: "Story of atomic bomb creator."
  },
  {
    id: 3,
    title: "Batman",
    genre: "Action",
    desc: "Dark knight fights crime."
  }
];

const genres = ["All", "Sci-Fi", "Drama", "Action"];

let currentGenre = "All";

// HERO
function loadHero() {
  document.getElementById("heroTitle").innerText = movies[0].title;
  document.getElementById("heroDesc").innerText = movies[0].desc;
}

// GENRES
function loadGenres() {
  const container = document.getElementById("genres");

  genres.forEach(g => {
    const btn = document.createElement("button");
    btn.innerText = g;

    btn.onclick = () => {
      currentGenre = g;
      loadMovies();
    };

    container.appendChild(btn);
  });
}

// MOVIES
function loadMovies() {
  const container = document.getElementById("movies");
  container.innerHTML = "";

  const filtered = currentGenre === "All"
    ? movies
    : movies.filter(m => m.genre === currentGenre);

  filtered.forEach(m => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${m.title}</h3><p>${m.genre}</p>`;

    div.onclick = () => openModal(m);

    container.appendChild(div);
  });
}

// SEARCH
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(value)
  );

  const container = document.getElementById("movies");
  container.innerHTML = "";

  filtered.forEach(m => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${m.title}</h3>`;
    container.appendChild(div);
  });
});

// MODAL
function openModal(movie) {
  document.getElementById("modalTitle").innerText = movie.title;
  document.getElementById("modalDesc").innerText = movie.desc;
  document.getElementById("modal").classList.remove("hidden");
}

document.getElementById("close").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

// INIT
loadHero();
loadGenres();
loadMovies();