import { useState, useEffect, useContext } from "react";
import { api } from "../api/api";
import { AuthContext } from "../context/AuthContext";

export function useAvatar(){
    const [avatar, setAvatar] = useState("");
    const { user } = useContext(AuthContext);

    useEffect(() => {
        api.get(`image`).then((response) => {
            setAvatar(response.data);
        })
    })

    return {
        avatar,
    }
}