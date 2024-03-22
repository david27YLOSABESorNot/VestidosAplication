import { useLocation, useNavigate } from "react-router-dom"
import { getDressByName } from "../helpers"
import { useForm } from "../hooks/useForm"
import queryString from "query-string";
import { useMemo } from "react";
import { TargetDress } from "../components";


export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q} = queryString.parse(location.search)



  const {searchText, onInputChange} = useForm({
    searchText: ''
  })

  const onSearchSubmit = (e) => {

    e.preventDefault();

    if(searchText.trim().length <= 1) return;

    //Que nos navegue hacia lo que se esta solicitando
    navigate(`?q=${searchText}`);
  }

 
  const dresses = useMemo(()=> getDressByName(q), [q]);




 
  return (
    <div className="contain adjust-formats">
        
      <div className={`sectionSearch ${dresses.length === 0 ? 'padding-search' : ''}`} onSubmit={onSearchSubmit}>
        <form className="form-search">
          <input 
            type="text"
            name='searchText'
            placeholder="Vestido de novias con escote"
            value={searchText}
            onChange={onInputChange}
          />


          <button
          
            type="submit" 
            className="button-search">
            <img src="./public/icons/icons8-search.svg" alt="icono buscar" />
          </button>
        </form>

    

      </div>




      <div className="sectionResults">

    
        <div className="contain-targets ">
            {
              dresses.map(dress => (
                <TargetDress
                  key={dress.id}
                  {...dress}
                />
              ))
            }
        </div>

      </div>
      
    </div>
  )
}
