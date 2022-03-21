import React, { useState } from 'react'; // use === Hook
import Gif from './Gif';
import SearchBar from './SearchBar';
import GifList from './GifList';

const App = () => {
  const [selectedID, setSelectedID] = useState("LmNwrBhejkK9EFP504");
  const [gifIDs, setGifIDs] = useState(["LmNwrBhejkK9EFP504", "PnpkimJ5mrZRe", "5ntdy5Ban1dIY"])
  // const selectedID = "LmNwrBhejkK9EFP504";
  // const gifIDs = ["LmNwrBhejkK9EFP504", "PnpkimJ5mrZRe", "5ntdy5Ban1dIY"];
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifID={selectedID} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifIDs} />
      </div>
    </div>
  );
};

export default App;
