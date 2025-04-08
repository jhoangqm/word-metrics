import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
  TWITTER_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.trim() === "" ? 0 : text.trim().split(/[\s]+/).length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    twitterCharactersLeft: TWITTER_MAX_CHARACTERS - text.length,
  };
  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
