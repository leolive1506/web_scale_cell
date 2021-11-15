
import { useState } from "react"
import { CreatedMember } from "./components/CreatedMember"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { Login } from "./components/Login"
import { NewScaleForm } from "./components/NewScaleForm"
import "./global.scss"
function App() {
  const [isOpenNewScaleModal, setIsOpenNewScaleModal] = useState(false)

  function handleOpenNewScaleModal() {
    setIsOpenNewScaleModal(true)
  }

  function handleCloseNewScaleModal() {
    setIsOpenNewScaleModal(false)
  }


  return (
    <>
      <Header
        onOpenNewScale={handleOpenNewScaleModal}
      />
      <Dashboard />

      <NewScaleForm
        isOpen={isOpenNewScaleModal}
        onRequestClose={handleCloseNewScaleModal}
      />
      {/* <Login />
      <CreatedMember /> */}

    </>
  )
}

export default App
