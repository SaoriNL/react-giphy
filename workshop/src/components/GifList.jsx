import React from 'react';
import Gif from './Gif';

const GifList = ({ gifIDs, setSelectedID }) => {
  const gifIDs = ["LmNwrBhejkK9EFP504", "PnpkimJ5mrZRe", "5ntdy5Ban1dIY"]
  return (
    <div className="gif-list">
      { gifIDs.map((id) => <Gif gifID={id} setSelectedID />) }
    </div>
  );
};


export default GifList;
