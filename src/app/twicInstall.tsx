// The only function of this component is to call `installTwicpics` in a client side context 
'use client'; // important as installTwicpics is a client side function
import { installTwicpics } from "@twicpics/components/react";
import "@twicpics/components/style.css";

installTwicpics({
    domain: "https://demo.twic.pics"
});

export default function TwicInstall() {
    return ( <></>)
}