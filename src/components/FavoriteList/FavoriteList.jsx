import { List} from "./Favorite.styled"
import FavoriteItem from "components/FavoriteItem/FavoriteItem";

const FavoriteList = ({items}) => {
   return (
         <List>
         {items.map((item)=> {
        return <FavoriteItem item={item} key={item.id} />;
      })}
      </List>  
   )
}

export default FavoriteList;