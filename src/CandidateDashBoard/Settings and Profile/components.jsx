import { Switch } from "@mui/material";
import { useState } from "react"


const enuum = {default:"none"}


export function Biodata(){
    const [toEdit,setToEdit] = useState(enuum.default);
    const[profileImage,setProfileImage] = useState("some fetchable name");
    const[name,setName] = useState("some fetchable name");
    const[displayName,setDisplayName] = useState("some fetchable name");
    const[email,setEmail] = useState("some fetchable name");
    const[organisation,setOrganisation] = useState("some fetchable name");
    return <section>
                <form>
                    <CustomInput isDisabled = {toEdit === "profileImage"} value={profileImage}  />
                    <CustomInput isDisabled = {toEdit === "name"} value={name}  />
                    <CustomInput isDisabled = {toEdit === "displayName"} value={displayName}  />
                    <CustomInput isDisabled = {toEdit === "email"} value={email}  />
                    <CustomInput isDisabled = {toEdit === "organisation"} value={organisation}  />
                </form>
    </section>
}

function CustomInput({isDisabled,value}){
    return <input disabled = {isDisabled} value={value}  />
}

export function TextSizeEdit(){
    // return som muui component for this
}

export function ThemeSetter(){
    return <Switch  />
}