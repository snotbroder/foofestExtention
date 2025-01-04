import { getBands } from "../api";

async function LineUpFilter() {
  const bands = await getBands();
  let genres = [...new Set(bands.map((band) => band.genre))];

  return (
    <div>
      <label>Choose a genre:</label>

      <select name="genres" id="select-genre">
        {genres.map((genre, index) => {
          return (
            <option value={genre} key={index}>
              {genre}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default LineUpFilter;
