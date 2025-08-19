const Sidebar = (props) => {
    return (
        <div className="sidebar container">
            <button>{props.title}</button>
        </div>
        
    )
}
export default Sidebar

// const Sidebar = ({ items, onSelect }) => {
//   return (
//     <div className="sidebar container">
//       {items.map((item) => (
//         <button 
//           key={item.id} 
//           onClick={() => onSelect(item.id)}
//         >
//           {item.title}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;
