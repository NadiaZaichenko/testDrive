import { List} from "./Favorite.styled"
import FavoriteItem from "components/FavoriteItem/FavoriteItem";

const FavoriteList = ({items}) => {
   return (
         <List>
         {items.map((item)=> {
        return <FavoriteItem item={item} key={item.id} />;
      })}
         {items.lenght === 0 &&
            <div>
              <p>Оберіть в каталозі автівку та додайте в улюблені</p>
            </div>}
      </List>  
   )
}

export default FavoriteList;