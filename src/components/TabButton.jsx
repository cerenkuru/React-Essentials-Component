export default function TabButton({children,onSelect, isSelected, ...props}){
// document.querySelector('button').addEventListener('click', ()=>{})

return (
    
    <li>
        <button className={isSelected ? 'active' : undefined} {...props}>{children}</button> 
    </li>
    );
}


// export default function TabButton({label}){
//     return <li><button>{label}</button></li>;
//     } !! with using attributes
    