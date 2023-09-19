import { List} from "./CarList.styled"
import CarItem from "components/CarItem/CarItem";

const CarList = ({items}) => {
   return (
      <List>
         {items.map((item)=> {
        return <CarItem item={item} key={item.id} />;
      })}
      </List>
   )
}

export default CarList;