import Stat from "./Stat";

export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfCharacters} label="Characters" />
      <Stat number={stats.instagramCharactersLeft} label="Instagram" />
      <Stat number={stats.facebookCharactersLeft} label="Facebook" />
      <Stat number={stats.twitterCharactersLeft} label="Twitter" />
      <Stat number={stats.numberOfWords} label="Words" />
    </section>
  );
}
