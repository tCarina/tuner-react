import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from '../util/apiURL'
import SongListItem from "./SongListItem";

const API = apiURL();

function SongsList() {
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    const fetchSongs = async () => {
    try {
      const res = await axios.get(`${API}/songs`);
      setSongs(res.data.payload);
    } catch (err) {
      console.log(err);
    }
    }
    fetchSongs()
  }, []);
  
  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this song</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <SongListItem key={song.name} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default SongsList;