import React from 'react';
import FavoriList  from './favori-list/FavoriList'


export default (props) => {
    return (
        <div className="d-flex flex-row flex-fill pt-4 p-2" >
            <FavoriList 
            favoris={ props.favoris }
            removeFavori={ props.removeFavori }
            />
      </div>
    )
}