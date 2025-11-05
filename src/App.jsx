// TODO
import { useState } from "react";
import { episodeList } from "./data";
import "./App.css";

//----↑↑↑↑↑↑--------
//useState lets you store and change data in React
//episodes is the array we render from data.js file

export default function App() {
  const [selectedEpisodeId, setSelectedEpisodeId] = useState(null);
  //This creates a state variable to keep track of which episode is selected.
  //selectedEpisodeId starts as null because nothing is selected initially.
  //setSelectedEpisodeId is the function you’ll call to change the selected episode.

  const [episodes] = useState(episodeList);
  //This puts your imported episodeList into React state so you can manage it dynamically.
  //setEpisodes would allow you to update the episodes later if needed (e.g., filtering, sorting, adding

  const selectedEpisode = episodes.find((episode) => {
    return episode.id === selectedEpisodeId;
  });
  //This finds the episode object that matches the currently selected ID.
  //If nothing is selected (selectedEpisodeId is null), this will return undefined.

  const handleSelect = (id) => {
    const clickedEpisode = episodes.find((episode) => episode.id === id);
    console.log("You clicked Episode", clickedEpisode.id);

    if (!selectedEpisode) {
      setSelectedEpisodeId(id);
    } else if (selectedEpisode.id === id) {
      setSelectedEpisodeId(null);
    } else {
      setSelectedEpisodeId(id);
    }
  };

  return (
    <div className="container">
      <div className="episode-list">
        <h1>Dark Echoes Episodes</h1>
        <ul>
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() => handleSelect(episode.id)}
              className={selectedEpisodeId === episode.id ? "selected" : ""}
            >
              {episode.id}. {episode.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="episode-details">
        {selectedEpisode ? (
          <div className="details-card">
            <h2>{selectedEpisode.title}</h2>
            <p>
              <strong>Episode:</strong> {selectedEpisode.id}
            </p>
            <p>{selectedEpisode.description}</p>
          </div>
        ) : (
          <p> Click an episode to see me details.</p>
        )}
      </div>
    </div>
  );
}
//------↑↑↑↑↑↑-----
//This shows a list of all the episode titles
