import { DressesList } from "../components/DressesList"



export const Quinces = () => {


  return (
    <div className="contain adjust-formats">
      <h1 className="heading-title">Seccion de Quinceañeras</h1>

      <DressesList
        type={'quince'}
      />
    </div>
  )
}
