import menuData from "./menuData";
const useRestmenu =  (id)=>{

      const menu = menuData[id];
        return menu || null; 
}

export default useRestmenu;