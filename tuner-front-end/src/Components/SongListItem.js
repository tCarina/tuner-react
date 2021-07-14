import { Link } from "react-router-dom";


function SongListItem({ song }) {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/songs/${song.name}`}>{song.name}</Link>
      </td>
    </tr>
  );
}

export default SongListItem;
